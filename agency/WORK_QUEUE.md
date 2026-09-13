# Full Agency Work Queue — UK Online Tuition

Status date: 13/09/2026
Target: native Wix Studio site `a0b54523-3b3b-499d-b8cc-590fff1266bb`
Release gate: **NEEDS WORK**

## Prioritisation rule
Rank by: user harm / conversion impact / search impact / breadth of root cause / evidence confidence / implementation effort.

## P0 — must resolve before release

### AGENCY-001 — Fix the two shared contrast root causes
**Fresh evidence:** full-site scan `ed9a0e17-284b-4650-8055-0dbbe187c915` found 95 serious findings, including 87 colour-contrast findings.

- `comp-kd5pdf7t` appears on **47/47 successfully scanned pages**.
- `comp-mtx9m2nn` appears on **37 Blog surfaces only**.
- Together they account for **84/87 contrast findings** and therefore **84/95 total serious findings**.

**Primary roles:** Accessibility Auditor, UI Designer, UX Architect, Frontend Developer, Minimal Change Engineer, Evidence Collector, Reality Checker.

**Action:**
1. Treat `comp-kd5pdf7t` as a global-shell/global-widget defect and identify the exact dynamic component/style.
2. Treat `comp-mtx9m2nn` as a shared Wix Blog-template defect; rendered HTML confirms it wraps the Blog TPA component.
3. Fix each once at source rather than patching pages individually.
4. Re-scan the whole site.

**Acceptance:** neither element generates a serious contrast finding; no desktop/tablet/mobile regression.

### AGENCY-002 — Fix homepage accessibility and placeholder imagery
**Evidence:** homepage has 9 serious findings: 6 alternative-text, 2 contrast, 1 heading-structure.

Rendered media metadata identifies the six flagged images as stock/placeholder assets including `Friendship Selfie.jpg`, `Modern Apartment Building`, `Orange Container.jpg`, `IMM_public storage.jpeg`, `Apartment Building.jpg` and one unnamed Wix stock image.

Heading finding `comp-mtxzhe29__item-j9ples3e` renders as `<h3>11+ tuition</h3>`.

**Primary roles:** Accessibility Auditor, UI Designer, Content Creator, UX Researcher, Brand Guardian, Evidence Collector.

**Action:**
- Remove or replace unrelated placeholder imagery rather than inventing alt text merely to silence a checker.
- If a retained image is decorative, explicitly mark it decorative after visual confirmation; if meaningful, supply contextual alt text.
- Review the page outline and repair the heading hierarchy semantically.
- Resolve the two contrast findings, using the shared global fix where applicable.

**Acceptance:** fresh homepage scan clears the nine findings; imagery is relevant or intentionally decorative; keyboard/screen-reader spot check passes.

### AGENCY-003 — Resolve the one persistent accessibility-scan failure
**Fresh evidence:** full-site scan discovered 50 pages; 47 scanned and 3 failed. Targeted rescans then cleared two of those three:
- `11+ Exam Formats: Why the Target School Matters` → completed; only the two shared contrast findings.
- `Online Primary English & Maths Tuition: Build Strong Foundations` → completed; only the two shared contrast findings.
- `11+ Online Tuition: A Parent’s Guide to Targeted Preparation` → failed again (`ACCESSIBILITY_SCAN_FAILURE_CODE_ANALYSIS_FAILED`).

Independent rendered-page extraction succeeds for the persistent failure. Rich-content comparison found no duplicate node IDs or obvious malformed heading structure.

**Primary roles:** Accessibility Auditor, Test Automation Engineer, Test Results Analyzer, CMS/Frontend roles, Reality Checker.

**Action:** diagnose the remaining scanner-specific failure without rewriting valid article content on speculation. Re-test after shared Blog-template repair before considering content normalisation.

**Acceptance:** page scans successfully, or evidence demonstrates an external scanner limitation and manual accessibility review covers the page.

## P1 — structure, search and conversion

### AGENCY-010 — Rename `blank-*` Wix pages to clean information architecture
**Proven page map:**
- `/blank` → How It Works
- `/blank-1` → GCSE
- `/blank-2` → 11+
- `/blank-3` → Primary
- `/blank-4` → About
- `/blank-5` → FAQ
- `/blank-6` → Enquire
- `/blank-7` → Work With Us
- `/blog` → Resources

Desired routes from the approved reference sitemap:
`/how-it-works/`, `/gcse/`, `/11-plus/`, `/primary/`, `/about/`, `/resources/`, `/faq/`, `/contact/`, `/work-with-us/`.

**Primary roles:** SEO Specialist, UX Architect, Information/Workflow roles, Content Creator, Senior Project Manager.

**Action:** rename static Studio routes in the editor. Public Wix REST docs currently expose redirects/SEO records but no safe static Studio-page slug mutation. Do not create redirects before route changes because Wix redirects take precedence over an existing page.

**Acceptance:** each intended page has one stable human-readable slug and no accidental duplicate target.

### AGENCY-011 — SEO cannibalisation and page-ownership audit
**Primary roles:** SEO Specialist, Research Synthesist, Content Creator, AI Citation Strategist, AEO Foundations Architect.

**Action:** map every service/content page to one primary search intent before broader title/H1/meta work; use Search Console when available, otherwise use the pre-GSC URL/intention method; identify page conflicts and consolidate.

**Current progress:** approved page-specific titles and meta descriptions have already been applied to the **saved/draft** revisions of all nine non-home static pages: 9 successes, 0 failures. They remain unpublished while staging `noindex` is in force.

**Acceptance:** one owner per primary keyword cluster; titles/H1s/metadata do not compete unnecessarily.

### AGENCY-012 — Verify enquiry-form instance and retire duplicate only if safe
**Evidence:** two enabled Wix Forms schemas exist.

Preferred `UK Online Tuition Enquiry` (`68a44711-2ab0-42e9-a9dd-a51f15b90e50`) has the intended fields, responsive layouts, advanced spam protection and on-page confirmation.

Older `Tuition Enquiry` (`620fb792-4907-43cf-b223-22f37762b036`) also remains enabled.

Wix Forms documentation confirms submissions are recorded per schema but do not distinguish multiple page instances of the same schema, so schema/submission data alone cannot prove which page embeds which form.

**Primary roles:** Growth Hacker, Offer & Lead Gen Strategist, Privacy Engineer/Data Privacy Officer, Minimal Change Engineer, QA.

**Action:** use rendered/editor evidence to identify the Enquire-page form instance. Keep the stronger form. Do not delete/disable the older schema until dependency is proven absent.

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
