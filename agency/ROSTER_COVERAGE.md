# Agency Full-Roster Coverage Ledger

## What “use all agents” means in this project
The upstream Agency roster is dynamic and now exceeds the original “230 agents” shorthand. The project therefore targets **every current source agent**, not a frozen count.

The official Agency Codex integration converts each source agent into its own Codex TOML agent, carrying the source `name`, `description` and full Markdown body as `developer_instructions`. A normal ChatGPT conversation cannot honestly claim to have spawned 230+ independent Codex processes. In this project, the complete roster is applied through one orchestrated workflow with an applicability gate; where a separate Codex runtime is used later, the official generated agents are the compatible format.

## Source divisions and project routing

| Division | Default routing for this website | Main contribution |
|---|---|---|
| Academic | Advisory / N/A by agent | psychology of decision-making, statistical rigor, evidence quality; world-building/history roles normally N/A |
| Design | Direct | UI consistency, UX architecture/research, accessibility-aware design, persona hypotheses, visual finish |
| Engineering | Direct / Advisory by agent | frontend quality, performance, architecture, code review, privacy, search, i18n; unrelated platform specialists exit N/A |
| Finance | Advisory | pricing, margin, resource allocation and business-case checks; investment/tax work not a release dependency |
| Game Development | N/A unless a genuine interactive learning/game feature is added | no artificial game-engine work introduced |
| GIS | N/A unless location/map functionality is added | no artificial mapping stack introduced |
| Healthcare | Mostly N/A | only general evidence/compliance lessons if relevant; no clinical claims or health functionality introduced |
| Marketing | Direct | SEO, AEO, AI citation, content, social/community, lifecycle, organic acquisition |
| Paid Media | Advisory until core funnel passes QA | tracking readiness, PPC/paid-social landing-page quality; no spend launched prematurely |
| Product | Direct | prioritisation, feedback synthesis, behaviour design, product decisions |
| Project Management | Direct | scope, sequencing, dependency management, decision log, release management |
| Research | Direct | evidence synthesis and source-quality discipline |
| Sales | Direct / Advisory | enquiry conversion, offer clarity, lead-gen, discovery and follow-up journey |
| Security | Direct / Advisory | privacy, credential hygiene, AppSec, compliance and release risk |
| Spatial Computing | N/A unless XR is explicitly requested | no artificial XR/visionOS work introduced |
| Specialized | Direct / Advisory / N/A by agent | orchestration, workflow architecture, business strategy, privacy, operations, customer success; highly domain-specific roles exit N/A |
| Support | Direct | analytics, support journey, infrastructure/reliability, legal/compliance, executive synthesis |
| Testing | Direct | evidence collection, accessibility, automation, performance, API/tool checks, final Reality Gate |

## Applicability gate
Every source agent is classified for each major phase as:
- **DIRECT** — owns a task or test.
- **ADVISORY** — supplies a constraint, challenge, risk or validation criterion.
- **NOT_APPLICABLE** — explicitly exits because its specialty does not fit the current website requirement.

A NOT_APPLICABLE result is not a failure to use the agent. It is the correct outcome when, for example, a Unity shader specialist reviews a tuition lead-generation website and finds no legitimate Unity requirement.

## Anti-waste rules
- Do not generate 230 long reports.
- Do not allow recursive agent debates without a decision point.
- Merge duplicate findings before they reach the work queue.
- Shared root causes outrank repeated page-by-page patches.
- No new technology may be added solely to give an irrelevant agent something to do.
- Relevant agents may work deeply; non-applicable agents exit after the applicability check.

## Current full-roster synthesis
Across the roster, the strongest convergent priorities are:
1. Accessibility root causes and failed-page coverage.
2. Clean information architecture and page identity.
3. Safe enquiry conversion path and data handling.
4. SEO page ownership, metadata, canonicals, crawl/index release state.
5. Performance, responsive behaviour, keyboard/screen-reader usability.
6. Trust, authority and clear parent-facing decision information.
7. Analytics and measured experimentation rather than invented conversion claims.
8. Security/privacy and release governance.
9. Organic content/community distribution after the core site passes QA.
10. Paid acquisition only after tracking and landing-page readiness are proven.

## Current evidence, not opinion
- 50 pages discovered by Wix accessibility scan.
- 40 successfully scanned; 10 failed and remain unknown.
- 84 serious findings.
- 73 of 76 contrast findings concentrate in two recurring Wix element IDs.
- Static page IDs/routes have now been mapped using Wix SEO records.
- All native static pages are currently `noindex`, appropriate for staging but a release blocker at cutover.
- Two enquiry-form schemas exist; the newer `UK Online Tuition Enquiry` is materially stronger and should not be replaced without evidence.

## Reality Checker status
**NEEDS WORK**

The status can only become READY after the evidence-backed release criteria in `agency/WORK_QUEUE.md` pass.
