const rooms={
  gate:{title:'The Broken Gate',desc:'Rainwater runs between cracked flagstones. A bronze door deeper in the ruin bears the mark of a shattered crown.',moves:{forward:'hall'}},
  hall:{title:'Hall of Ash',desc:'Blackened banners hang from iron hooks. Something scratches behind the pillars.',moves:{back:'gate',left:'crypt',forward:'armoury',right:'well'},enemy:{name:'Ash Goblin',hp:9,ac:11,attack:2,damage:[1,6],xp:30,gold:8}},
  crypt:{title:'Saintless Crypt',desc:'Open sarcophagi line the chamber. A cold blue light leaks from beneath one stone lid.',moves:{right:'hall',forward:'chapel'},loot:{name:'Silvered Dagger',type:'weapon',attack:1,gold:0}},
  armoury:{title:'Ruined Armoury',desc:'Splintered racks and rusted helms fill the room. One shield remains strangely untouched.',moves:{back:'hall',forward:'throne'},loot:{name:'Knight Shield',type:'armour',ac:1,gold:0}},
  well:{title:'Whispering Well',desc:'A dry well descends into darkness. Coins glitter between the stones and a voice whispers your name.',moves:{left:'hall'},enemy:{name:'Bone Rat',hp:7,ac:10,attack:3,damage:[1,4],xp:20,gold:11}},
  chapel:{title:'Chapel of Cinders',desc:'The altar has been split in two. A revenant knight kneels before it, sword still in hand.',moves:{back:'crypt',right:'throne'},enemy:{name:'Cinder Revenant',hp:16,ac:13,attack:4,damage:[1,8],xp:60,gold:18}},
  throne:{title:'The Shattered Throne',desc:'The lost crown rests on a cracked throne. Its guardian rises from the darkness as you enter.',moves:{back:'armoury',left:'chapel'},boss:true,enemy:{name:'Crown Warden',hp:25,ac:14,attack:5,damage:[1,10],xp:120,gold:40}}
};

let state;
const $=id=>document.getElementById(id);
const els={roomLabel:$('roomLabel'),roomTitle:$('roomTitle'),roomDescription:$('roomDescription'),movement:$('movement'),combat:$('combat'),lootControls:$('lootControls'),enemySprite:$('enemySprite'),lootSprite:$('lootSprite'),enemyPanel:$('enemyPanel'),enemyName:$('enemyName'),enemyAc:$('enemyAc'),enemyHpText:$('enemyHpText'),enemyHpBar:$('enemyHpBar'),hpText:$('hpText'),hpBar:$('hpBar'),acText:$('acText'),attackText:$('attackText'),goldText:$('goldText'),xpText:$('xpText'),levelBadge:$('levelBadge'),inventoryList:$('inventoryList'),log:$('log'),modal:$('modal'),modalTitle:$('modalTitle'),modalText:$('modalText')};

function freshState(){return{room:'gate',hp:22,maxHp:22,ac:12,attack:4,damage:[1,8],gold:0,xp:0,level:1,potions:2,inventory:['Iron longsword','2× healing potion'],cleared:{},looted:{},enemy:null,won:false};}
function roll(sides){return Math.floor(Math.random()*sides)+1}
function damage([n,s]){let total=0;for(let i=0;i<n;i++)total+=roll(s);return total}
function log(msg){const p=document.createElement('p');p.innerHTML=msg;els.log.prepend(p)}

function start(){state=freshState();els.log.innerHTML='';els.modal.classList.add('hidden');log('<strong>The delve begins.</strong> Find the Shattered Crown and survive its guardian.');enterRoom('gate',true)}

function enterRoom(key,initial=false){state.room=key;const room=rooms[key];if(!initial)log(`You enter <strong>${room.title}</strong>.`);if(room.enemy&&!state.cleared[key])state.enemy={...room.enemy,maxHp:room.enemy.hp};else state.enemy=null;render();}

function render(){const room=rooms[state.room];els.roomLabel.textContent=room.boss?'Boss chamber':state.enemy?'Hostile encounter':room.loot&&!state.looted[state.room]?'Something glitters here':'Dungeon chamber';els.roomTitle.textContent=room.title;els.roomDescription.textContent=room.desc;
  document.querySelectorAll('[data-move]').forEach(btn=>{const dir=btn.dataset.move;btn.disabled=!room.moves[dir]||!!state.enemy;btn.style.opacity=room.moves[dir]?1:.35});
  const inCombat=!!state.enemy;els.combat.classList.toggle('hidden',!inCombat);els.movement.classList.toggle('hidden',inCombat);
  els.enemySprite.classList.toggle('hidden',!inCombat);els.enemyPanel.classList.toggle('hidden',!inCombat);
  const lootReady=!!room.loot&&!state.looted[state.room]&&!inCombat;els.lootSprite.classList.toggle('hidden',!lootReady);els.lootControls.classList.toggle('hidden',!lootReady);
  if(inCombat){els.enemyName.textContent=state.enemy.name;els.enemyAc.textContent=`AC ${state.enemy.ac}`;els.enemyHpText.textContent=`${state.enemy.hp} / ${state.enemy.maxHp}`;els.enemyHpBar.style.width=`${Math.max(0,state.enemy.hp/state.enemy.maxHp*100)}%`;}
  els.hpText.textContent=`${state.hp} / ${state.maxHp}`;els.hpBar.style.width=`${Math.max(0,state.hp/state.maxHp*100)}%`;els.acText.textContent=state.ac;els.attackText.textContent=`+${state.attack}`;els.goldText.textContent=state.gold;els.xpText.textContent=state.xp;els.levelBadge.textContent=`Level ${state.level}`;
  els.inventoryList.innerHTML='';state.inventory.forEach(x=>{const li=document.createElement('li');li.textContent=x;els.inventoryList.appendChild(li)});
}

function move(dir){const target=rooms[state.room].moves[dir];if(!target||state.enemy)return;enterRoom(target)}
function playerAttack(power=false){if(!state.enemy)return;const d20=roll(20);const bonus=state.attack+(power?0:1);const hit=d20===20||d20+bonus>=state.enemy.ac;if(d20===1){log('You roll a <strong>natural 1</strong>. Your strike goes wide.');enemyTurn();return}
  if(hit){let dealt=damage(state.damage)+(power?3:0);if(d20===20)dealt+=damage(state.damage);state.enemy.hp-=dealt;log(`You roll <strong>${d20}</strong> and hit ${state.enemy.name} for <strong>${dealt}</strong> damage${d20===20?' — critical hit!':''}.`);if(state.enemy.hp<=0){winFight();return}}else log(`You roll <strong>${d20}</strong>. The attack misses AC ${state.enemy.ac}.`);enemyTurn();render();}
function enemyTurn(){if(!state.enemy)return;const d20=roll(20);if(d20===1){log(`${state.enemy.name} fumbles its attack.`);return}if(d20===20||d20+state.enemy.attack>=state.ac){let dealt=damage(state.enemy.damage);if(d20===20)dealt+=damage(state.enemy.damage);state.hp-=dealt;log(`${state.enemy.name} hits you for <strong>${dealt}</strong> damage${d20===20?' — critical!':''}.`);if(state.hp<=0){state.hp=0;render();end(false)}}else log(`${state.enemy.name} misses you.`)}
function winFight(){const enemy=state.enemy;state.cleared[state.room]=true;state.gold+=enemy.gold;state.xp+=enemy.xp;log(`<strong>${enemy.name} falls.</strong> You gain ${enemy.xp} XP and ${enemy.gold} gold.`);state.enemy=null;checkLevel();if(rooms[state.room].boss){render();end(true);return}render()}
function checkLevel(){const needed=state.level===1?50:140;if(state.xp>=needed&&state.level<3){state.level++;state.maxHp+=6;state.hp=Math.min(state.maxHp,state.hp+8);state.attack++;log(`<strong>Level up!</strong> You are now level ${state.level}. Maximum HP and attack increase.`)}}
function potion(){if(state.potions<=0){log('You have no healing potions left.');return}state.potions--;const heal=roll(8)+3;state.hp=Math.min(state.maxHp,state.hp+heal);const idx=state.inventory.findIndex(x=>x.includes('healing potion'));if(idx>=0)state.inventory[idx]=`${state.potions}× healing potion`;log(`You drink a potion and recover <strong>${heal} HP</strong>.`);enemyTurn();render()}
function flee(){if(!state.enemy)return;if(roll(20)>=10){log('You break away from the fight and retreat to the Broken Gate.');state.enemy=null;enterRoom('gate')}else{log('You fail to escape.');enemyTurn();render()}}
function takeLoot(){const loot=rooms[state.room].loot;if(!loot||state.looted[state.room])return;state.looted[state.room]=true;state.inventory.push(loot.name);if(loot.attack)state.attack+=loot.attack;if(loot.ac)state.ac+=loot.ac;if(loot.gold)state.gold+=loot.gold;log(`You take <strong>${loot.name}</strong>${loot.attack?' (+1 attack)':''}${loot.ac?' (+1 AC)':''}.`);render()}
function end(win){els.modal.classList.remove('hidden');els.modalTitle.textContent=win?'The Crown Is Yours':'Your Delve Ends Here';els.modalText.textContent=win?`You defeat the Crown Warden and claim the Shattered Crown with ${state.hp} HP remaining, ${state.gold} gold and ${state.xp} XP. The first dungeon is complete.`:`You fall in ${rooms[state.room].title}. The dungeon resets, but the dice may favour you next time.`}

document.querySelectorAll('[data-move]').forEach(b=>b.addEventListener('click',()=>move(b.dataset.move)));
$('attackBtn').addEventListener('click',()=>playerAttack(false));$('powerBtn').addEventListener('click',()=>playerAttack(true));$('potionBtn').addEventListener('click',potion);$('fleeBtn').addEventListener('click',flee);$('lootBtn').addEventListener('click',takeLoot);$('leaveLootBtn').addEventListener('click',()=>{state.looted[state.room]=true;log('You leave the item where it lies.');render()});$('newGameBtn').addEventListener('click',start);$('modalRestart').addEventListener('click',start);
start();
