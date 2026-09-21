import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
export const pages = ['index.html','how-it-works/index.html','gcse/index.html','11-plus/index.html','primary/index.html','about/index.html','resources/index.html','faq/index.html','contact/index.html','work-with-us/index.html','404.html'];
let refs = 0;
for (const page of pages) {
 const html = await readFile(page,'utf8');
 const fail = message => {throw new Error(`${page}: ${message}`)};
 if ((html.match(/<h1\b/g)||[]).length !== 1) fail('expected exactly one h1');
 if (!html.includes('name="viewport"')) fail('viewport missing');
 if (!html.includes('noindex,nofollow')) fail('draft indexing protection missing');
 const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
 if(new Set(ids).size!==ids.length) fail('duplicate element IDs');
 for(const m of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
  const url=m[1]; if(/^(https?:|mailto:|tel:|data:)/.test(url)) continue;
  const [relative,hash]=url.split('#');
  if(relative && relative.split('?')[0].endsWith('/')) fail(`directory link is not portable in downloaded preview: ${url}`);
  const dest=relative ? path.normalize(path.join(path.dirname(page),relative.split('?')[0])) : page;
  const target=dest.endsWith('.html')||path.extname(dest) ? dest : path.join(dest,'index.html');
  try {await access(target)}catch{fail(`broken local reference ${url}`)}
  if(hash){const body=await readFile(target,'utf8');if(!body.includes(`id="${hash}"`))fail(`missing anchor ${url}`)}
  refs++;
 }
}
for(const script of ['assets/main.js','assets/live-design.js','assets/motion.js']) execFileSync(process.execPath,['--check',script]);
console.log(`PASS: ${pages.length} HTML pages, ${refs} local references, unique IDs, single H1, draft noindex and JavaScript syntax.`);
