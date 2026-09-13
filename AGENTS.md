# UK Online Tuition — Full Agency Operating Contract

## Mission
Finish and harden the canonical native Wix Studio rebuild of UK Online Tuition using the complete current source-agent roster from `msitarzewski/agency-agents` as the review and orchestration layer.

The user's phrase “all 230 agents” means: route the project through every current source agent in every Agency division. The upstream roster is growing, so do not hard-code 230. Include every agent file in the current source divisions and exclude generated integration outputs, strategy playbooks, examples and scripts.

## Canonical target
- Native Wix Studio site: `a0b54523-3b3b-499d-b8cc-590fff1266bb`
- Current Wix Studio URL: `https://danielpharris4.wixstudio.com/my-site`

## Protected sites — never modify
- Existing production site: `64c79e1f-b6eb-444d-aa03-a4495e2b68f8`
- PRE-ASTRA protected backup: `f0b72792-2a3e-4da1-a601-a49094d465d3`

Do not create another Wix site.

## Full-roster rule
Every current Agency source agent participates once per major project phase through an applicability gate:

1. `DIRECT` — the agent has project-specific work to perform.
2. `ADVISORY` — the agent contributes a constraint, risk, test or idea but does not own implementation.
3. `NOT_APPLICABLE` — the agent states briefly why its domain does not apply and exits.

Do not invent work for irrelevant specialists merely to keep them busy. A Solidity, drone-mapping or medical-billing specialist may legitimately return `NOT_APPLICABLE` for this website. That still counts as a completed applicability review.

## Source divisions
Use every current source agent under these upstream divisions:
- academic
- design
- engineering
- finance
- game-development
- gis
- healthcare
- marketing
- paid-media
- product
- project-management
- research
- sales
- security
- spatial-computing
- specialized
- support
- testing

## Required agent output
Each agent pass must produce only:
- Applicability: DIRECT / ADVISORY / NOT_APPLICABLE
- Finding or contribution
- Evidence or basis
- Proposed action
- Risk of action / inaction
- Confidence 0.0–1.0

If there is no evidence, label the item a hypothesis. Never present simulated user behaviour as empirical user research.

## Orchestration pipeline
1. **Discovery** — gather current implementation evidence and project constraints.
2. **Full-roster sweep** — every source agent completes the applicability gate.
3. **Synthesis** — deduplicate, merge and rank findings by impact, confidence and effort.
4. **Execution** — implement only approved, evidence-backed work on the canonical target.
5. **QA loop** — each implementation task is verified before the next one is closed.
6. **Reality gate** — final Reality Checker defaults to `NEEDS WORK` unless evidence supports readiness.
7. **Release** — production/domain switch only after explicit release criteria pass.

## Quality rules
- Evidence beats agent opinion.
- Shared/root-cause fixes beat repeated one-off patches.
- Maximum three implementation/QA attempts per task before it is marked blocked and escalated.
- Never claim “production ready” from appearance alone.
- Never use a perfect score without supporting evidence.
- Do not substitute an automated accessibility score for manual keyboard/screen-reader testing.
- Do not rewrite SEO titles/H1s blindly; check page ownership/cannibalisation first.
- Do not delete forms, pages, data or backups merely because they look duplicated until usage/dependencies are verified.
- Prefer native Wix Studio elements and Wix-native forms. No ASTRA, Harmony overlay, iframe, full-page HTML replacement, body-hiding script or legacy-site overlay.

## Credit discipline
“All agents” does not mean “all agents generate long reports”. Non-applicable agents should exit after a short applicability check. Relevant agents may work deeply. Prevent recursive debates and duplicate reports. The objective is implemented quality, not token consumption.

## Current proven baseline
A full Wix accessibility scan of the canonical native site found:
- 50 pages discovered
- 40 successfully scanned
- 10 pages failed to scan and therefore remain unknown
- 84 serious findings
- 76 colour-contrast findings
- 6 alternative-text findings
- 2 heading-structure findings

Root-cause concentration:
- Wix element `comp-kd5pdf7t` accounts for 40 contrast findings.
- Wix element `comp-mtx9m2nn` accounts for 33 contrast findings.
- Together those two recurring elements account for 73 of 76 contrast findings.

The homepage has 9 serious findings: 6 image-alt, 2 contrast and 1 heading-structure issue.

## Form baseline
The native site currently contains two Wix Forms schemas. The newer `UK Online Tuition Enquiry` form already collects:
- Parent/carer first name and surname
- Email
- Optional phone
- Pupil year group/stage
- Subject or entrance test
- Support needed
- Optional preferred lesson times

It uses responsive layouts, advanced spam protection and an on-page thank-you message. Do not replace it without evidence of a problem. An older `Tuition Enquiry` schema also exists; do not delete or disable it until its page usage is resolved.

## Current release status
`NEEDS WORK`.

The project cannot pass the Reality Checker while serious accessibility findings remain, failed scan pages are unresolved, manual accessibility testing is incomplete, and release/domain criteria have not been evidenced.
