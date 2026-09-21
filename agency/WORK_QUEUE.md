# Work Queue — UK Online Tuition

Updated: 21/09/2026 · Active target: coded draft branch · Launch: **NEEDS WORK**

Completed: reuse ten pages; repair responsive Home lesson card; improve shared navigation and keyboard behaviour; verify Home → GCSE → Contact; local no-send validation; build/link checks.

Next: approved enquiry integration and privacy/content review, followed by remaining page-level release checks. Keep preview validation local until integration is explicitly authorised. Do not resume historical Wix changes or publish from this queue.

## Historical Wix queue — inactive for this branch

Updated: 18/09/2026 · Target: `a0b54523-3b3b-499d-b8cc-590fff1266bb` · Release: **NEEDS WORK**

Fix shared causes before symptoms. Use `AI_ROUTING.md`.

| ID | Priority | Work | Dependency / verification | Status |
|---|---|---|---|---|
| UOT-001 | P0 | Fix shared contrast components `comp-kd5pdf7t` (47 findings) and Blog `comp-mtx9m2nn` (37); then full rescan. | Identify in Studio; verify zero serious findings for both + responsive QA. | BLOCKED: editor |
| UOT-002 | P0 | Homepage: resolve 6 alt-text, 2 contrast, 1 heading finding; remove/replace irrelevant placeholder media rather than inventing alt text. | Studio visual/semantic review; rescan + keyboard/screen-reader spot check. | BLOCKED: editor |
| UOT-003 | P0 | Re-test persistent Parent’s Guide scan failure after Blog repair; change article only if evidence implicates content. | UOT-001; successful scan or documented scanner limitation + manual review. | WAITING |
| UOT-010 | P1 | Replace `blank*` routes with intended clean routes in PROJECT_STATE. | Studio; verify unique routes/navigation; redirects only after changes if needed. | BLOCKED: editor |
| UOT-011 | P1 | Confirm Enquire uses preferred form `68a44711-2ab0-42e9-a9dd-a51f15b90e50`; retain older form until proven unused. | Studio; responsive render + safe submission confirmation. | BLOCKED: editor |
| UOT-012 | P1 | Test Home → service → Enquire → confirmation on desktop/tablet/mobile + keyboard. | UOT-010/011. | WAITING |
| UOT-013 | P1 | Assign primary search intent; check title/H1/meta/canonical/internal-link conflicts. | Draft metadata already complete. | PARTIAL |
| UOT-020 | P2 | Technical SEO/AEO: canonicals, sitemap, structured data, robots/noindex cutover. | Keep staging noindex until release. | TODO |
| UOT-021 | P2 | Trust/content evidence review; remove unsupported claims. | Source/evidence check. | TODO |
| UOT-022 | P2 | Performance/responsive QA on key pages. | Mobile/tablet/desktop evidence. | TODO |
| UOT-023 | P2 | Security/privacy review of forms, scripts, integrations, credentials and disclosures. | No critical issue open. | TODO |
| UOT-024 | P2 | Verify analytics baseline for enquiries, service→enquiry, organic landings and form completion. | No uplift claims without data. | TODO |

After core QA: content clusters/internal linking, useful distribution, consented email lifecycle, then paid-media readiness.

Close-out: full accessibility rescan + core-journey QA + Reality Gate. READY only when release criteria are evidenced.
