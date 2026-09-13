# Full Agency Work Queue — UK Online Tuition

Status date: 13/09/2026
Target: native Wix Studio site `a0b54523-3b3b-499d-b8cc-590fff1266bb`
Release gate: **NEEDS WORK**

## Prioritisation rule
Rank by: user harm / conversion impact / search impact / breadth of root cause / evidence confidence / implementation effort.

## P0 — must resolve before release

### AGENCY-001 — Fix the two shared contrast root causes
**Evidence:** 76 serious colour-contrast findings. Element `comp-kd5pdf7t` appears in 40 findings; `comp-mtx9m2nn` appears in 33. Together they account for 73/76 findings.

**Primary roles:** Accessibility Auditor, UI Designer, UX Architect, Frontend Developer, Minimal Change Engineer, Evidence Collector, Reality Checker.

**Action:** identify the foreground/background pairs for those recurring elements, adjust the shared style/template once where possible, then run a fresh full-site accessibility scan.

**Acceptance:** no remaining serious contrast finding attributable to either element; no visual regression across desktop/tablet/mobile.

### AGENCY-002 — Fix homepage accessibility findings
**Evidence:** homepage has 9 serious findings: 6 alternative-text, 2 contrast, 1 heading-structure.

**Primary roles:** Accessibility Auditor, UI Designer, Content Creator, UX Researcher, Evidence Collector.

**Action:** classify each of the six images as meaningful or decorative; supply concise contextual alt text for meaningful images and mark decorative images appropriately. Repair the heading outline to one meaningful H1 with logical nesting. Resolve the two contrast failures.

**Acceptance:** fresh homepage scan returns none of these nine findings; keyboard and screen-reader spot check completed.

### AGENCY-003 — Resolve the ten failed accessibility-scan pages
**Evidence:** 50 pages discovered; 10 could not be analysed. Failed means unknown, not clean.

**Primary roles:** Accessibility Auditor, Test Automation Engineer, Test Results Analyzer, CMS/Frontend roles, Reality Checker.

**Action:** identify why each failed page could not be scanned; determine whether each is obsolete, duplicate, broken or valid content; repair or retire safely; rescan.

**Acceptance:** every intended public page scans successfully or has a documented reason for exclusion.

## P1 — structure, search and conversion

### AGENCY-010 — Map `blank-*` Wix pages to intended information architecture
**Evidence:** the native build exposes several static URLs such as `/blank-2`, `/blank-3`, `/blank-4`, `/blank-6` and `/blank-7`; the GitHub reference sitemap defines the intended clean structure `/how-it-works/`, `/gcse/`, `/11-plus/`, `/primary/`, `/about/`, `/resources/`, `/faq/`, `/contact/`, `/work-with-us/`.

**Primary roles:** SEO Specialist, UX Architect, Information/Workflow roles, Content Creator, Senior Project Manager.

**Action:** identify each current Wix page, assign one canonical purpose and clean slug, avoid duplicate intent, plan redirects for any old public route.

**Acceptance:** each intended page has one stable human-readable slug and no accidental duplicate target.

### AGENCY-011 — SEO cannibalisation and page-ownership audit
**Primary roles:** SEO Specialist, Research Synthesist, Content Creator, AI Citation Strategist, AEO Foundations Architect.

**Action:** map every service/content page to one primary search intent before changing title/H1/meta; use Search Console when available, otherwise use the pre-GSC URL/intention method; identify page conflicts and consolidate.

**Acceptance:** one owner per primary keyword cluster; titles/H1s/metadata do not compete unnecessarily.

### AGENCY-012 — Verify enquiry-form instance and retire duplicate only if safe
**Evidence:** two active Wix Forms schemas exist. `UK Online Tuition Enquiry` is the stronger schema; an older `Tuition Enquiry` also exists.

**Primary roles:** Growth Hacker, Offer & Lead Gen Strategist, Privacy Engineer/Data Privacy Officer, Minimal Change Engineer, QA.

**Action:** identify which schema is embedded on the intended Enquire page and whether the older schema is used anywhere. Keep the stronger form. Do not delete/disable the older schema until dependency is proven absent.

**Acceptance:** one intended enquiry experience is used by visitors; no live page breaks; existing submissions/data remain intact.

### AGENCY-013 — End-to-end enquiry journey QA
**Primary roles:** Persona Walkthrough Specialist, UX Researcher, Growth Hacker, Evidence Collector, Test Automation Engineer.

**Action:** test Home → service page → Enquire → submission confirmation on mobile/tablet/desktop. Treat persona simulation as hypothesis, not empirical research.

**Acceptance:** journey is clear, reachable, keyboard-operable and submission confirmation works; evidence captured.

## P2 — trust, authority and discovery

### AGENCY-020 — Trust/authority placement review
Use qualification, experience, lesson process, safeguarding/privacy and clear expectations where they reduce uncertainty. Avoid unsupported superlatives.

### AGENCY-021 — Structured data + AI discovery review
Validate organisation/service/article schema, canonical URLs, sitemap/robots behaviour, AI-citation readiness and agentic-search usability without adding speculative markup.

### AGENCY-022 — Content cluster plan
Build GCSE English/Maths, 11+, Primary and parent-guidance clusters with internal linking and explicit search intent ownership. Use existing blog inventory before creating duplicate content.

### AGENCY-023 — Analytics and experiment baseline
Define enquiry conversion, service-page-to-enquiry rate, organic landing performance, form completion and key mobile friction metrics. Do not claim conversion uplift without measured experiments.

## P3 — growth channels after the core site passes QA

### AGENCY-030 — Organic/community distribution
Use relevant Marketing/Sales specialists to select channels. Prioritise useful educational content and genuine community value; avoid spammy link drops.

### AGENCY-031 — Paid-media readiness
Paid-media specialists perform tracking and landing-page readiness checks. Do not launch spend until conversion tracking and landing-page quality are verified.

### AGENCY-032 — Email lifecycle
Only after consent and capture rules are clear: enquiry acknowledgement, follow-up and useful parent guidance. Respect privacy and opt-out requirements.

## P4 — reviewed but normally non-applicable to this release
All current source agents in game-development, GIS, spatial-computing and highly specialised regulated/technical roles still complete the applicability gate. Their default result for this project is `NOT_APPLICABLE` unless a genuine website requirement appears. No artificial blockchain, XR, drone, game-engine, clinical or enterprise-infrastructure work is to be introduced merely to satisfy roster count.

## Release acceptance
The native site stays `NEEDS WORK` until:
1. P0 accessibility issues are resolved and rescanned.
2. Intended public pages and slugs are mapped and stable.
3. Enquiry journey passes functional/responsive/accessibility verification.
4. SEO page ownership is clean enough to avoid obvious self-competition.
5. No critical security/privacy issue is open.
6. Reality Checker receives evidence sufficient to change status from `NEEDS WORK` to `READY`.
