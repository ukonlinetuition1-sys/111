# Work Queue — UK Online Tuition

Status: 18/09/2026
Target: `a0b54523-3b3b-499d-b8cc-590fff1266bb`
Release: **NEEDS WORK**

Rule: fix shared/root causes before page-by-page symptoms. Use `AI_ROUTING.md`; do not convene the full roster for ordinary tasks.

## P0 — release blockers

### UOT-001 Shared contrast components
Evidence: `comp-kd5pdf7t` causes 47 findings site-wide; Blog `comp-mtx9m2nn` causes 37. Together: 84/87 contrast findings.
Action: identify each exact Studio component/style, repair once at source, then full rescan.
Verify: neither produces a serious contrast finding and no responsive regression appears.
Status: BLOCKED ON EDITOR IDENTIFICATION.

### UOT-002 Homepage accessibility/placeholder media
Evidence: 6 alt-text, 2 contrast and 1 heading finding. Flagged assets appear to include unrelated stock/placeholder imagery.
Action: visually confirm; remove/replace irrelevant media; mark genuinely decorative images correctly; add contextual alt text only where meaningful; repair semantic heading order.
Verify: fresh homepage scan plus keyboard/screen-reader spot check.
Status: BLOCKED ON EDITOR.

### UOT-003 Persistent article scan failure
Target: `11+ Online Tuition: A Parent’s Guide to Targeted Preparation`.
Action: re-test after UOT-001 Blog repair. Only normalise article content if evidence then points to content rather than scanner/template failure.
Verify: successful scan or documented scanner limitation plus manual accessibility review.
Status: WAITING ON UOT-001.

## P1 — structure and conversion

### UOT-010 Clean Studio routes
Replace `blank*` routes with the intended human-readable routes from PROJECT_STATE.
Verify each page resolves once, navigation is correct, and redirects are added only after route changes where required.
Status: BLOCKED ON EDITOR.

### UOT-011 Enquiry form instance
Confirm Enquire uses preferred schema `68a44711-2ab0-42e9-a9dd-a51f15b90e50`. Keep older schema until proven unused.
Verify desktop/tablet/mobile form rendering and a safe test submission/confirmation.
Status: BLOCKED ON EDITOR.

### UOT-012 End-to-end enquiry journey
Test Home → service page → Enquire → confirmation across desktop/tablet/mobile and keyboard navigation.
Status: WAITING ON UOT-010/UOT-011.

### UOT-013 SEO ownership
Map service/content pages to primary intent; check title/H1/meta/canonical/internal-link conflicts before publication.
Status: PARTIAL — draft metadata complete; ownership audit outstanding.

## P2 — release quality

### UOT-020 Technical SEO/AEO
Validate canonicals, sitemap, robots/noindex cutover, structured data and article/service discoverability. Do not remove staging noindex early.
Status: TODO.

### UOT-021 Trust/content review
Check qualification/experience/process/privacy/safeguarding statements for clear placement and evidence; avoid unsupported superlatives.
Status: TODO.

### UOT-022 Performance/responsive QA
Test key pages on mobile/tablet/desktop, including layout shift, image weight and interaction responsiveness.
Status: TODO.

### UOT-023 Security/privacy
Review forms, scripts, integrations, credentials, privacy disclosures and data handling before release.
Status: TODO.

### UOT-024 Analytics baseline
Define and verify enquiry conversion, service→enquiry rate, organic landing performance and form completion measurement. Do not claim uplift without experiment data.
Status: TODO.

## P3 — after core site passes
Content clusters/internal linking; useful community distribution; email lifecycle with consent; paid-media readiness only after tracking and landing-page QA.

## Close-out
Run final full-site accessibility scan, core journey QA and Reality Gate. Change READY only when evidence supports every release criterion.
