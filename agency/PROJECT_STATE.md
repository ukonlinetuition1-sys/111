# UK Online Tuition — Project State

Last updated: 18/09/2026
Reality status: **NEEDS WORK**

## Canonical implementation
Native Wix Studio site: `a0b54523-3b3b-499d-b8cc-590fff1266bb`

Protected — never modify:
- Production Editor site: `64c79e1f-b6eb-444d-aa03-a4495e2b68f8`
- PRE-ASTRA backup: `f0b72792-2a3e-4da1-a601-a49094d465d3`

## Proven current state

### Accessibility
Full-site scan `ed9a0e17-284b-4650-8055-0dbbe187c915`:
- 50 pages discovered; 47 scanned; 3 failed in the full run.
- 95 serious findings: 87 contrast, 6 alt-text, 2 heading.
- `comp-kd5pdf7t`: 47 contrast findings across all 47 successfully scanned pages.
- `comp-mtx9m2nn`: 37 contrast findings on Blog surfaces.
- Those two shared components account for 84/87 contrast findings.

Targeted rescans cleared two of the three failed pages. `11+ Online Tuition: A Parent’s Guide to Targeted Preparation` still failed with `ACCESSIBILITY_SCAN_FAILURE_CODE_ANALYSIS_FAILED`. Independent rendering succeeds and no obvious malformed rich-content structure was found. Re-test after shared Blog repair before destructive content changes.

Homepage: 9 serious findings: 6 alt-text, 2 contrast, 1 heading. The flagged media appears to include irrelevant stock/placeholder assets. Prefer removal/replacement or correct decorative treatment over invented alt text.

### Page identity and SEO
Static page mapping:
- `/` Home
- `/blank` How It Works
- `/blank-1` GCSE
- `/blank-2` 11+
- `/blank-3` Primary
- `/blank-4` About
- `/blank-5` FAQ
- `/blank-6` Enquire
- `/blank-7` Work With Us
- `/blog` Resources

All native static pages are currently `noindex`, appropriate for staging. Draft page-specific SEO title/description metadata has been written for all nine non-home static pages: 9 successes, 0 failures; not published.

### Forms
Two enabled native Wix Forms schemas exist.
Preferred: `UK Online Tuition Enquiry` (`68a44711-2ab0-42e9-a9dd-a51f15b90e50`) with intended parent/pupil/support fields, responsive layouts, advanced spam protection and on-page confirmation.
Older: `Tuition Enquiry` (`620fb792-4907-43cf-b223-22f37762b036`).
Do not remove either until editor/page-instance evidence proves the older form is unused.

### Agent/context architecture
On 18/09/2026:
- Root `AGENTS.md` was reduced and changed from full-roster-by-default to selective specialist routing.
- `agency/AI_ROUTING.md` defines delegation/context budgets.
- `agency/CONTEXT_MAP.md` defines what is always loaded versus read on demand.
- Full Agency roster remains available as a library; full-roster execution is exceptional, not the default.

## Editor-only / unresolved
Public API access does not currently provide a proven safe mutation path for:
1. shared visual component `comp-kd5pdf7t`;
2. Blog component `comp-mtx9m2nn`;
3. homepage image alt/decorative state;
4. homepage heading level;
5. static Studio `blank-*` slugs;
6. proving which form schema is embedded on Enquire.

These require direct Studio/editor evidence or a supported Wix operation. Do not claim them complete without verification.

## Execution order
See `agency/WORK_QUEUE.md`. Immediate sequence:
1. Fix the two shared contrast root causes.
2. Repair homepage imagery/semantics.
3. Re-test the persistent failed article.
4. Rename page slugs.
5. Verify the Enquire form instance.
6. Cross-device, keyboard and screen-reader QA.
7. SEO/AEO ownership and technical release checks.
8. Security/privacy and analytics readiness.
9. Reality-gate reassessment.

## Release gate
Do not publish, switch the domain or declare READY until all P0 work is resolved, core journeys pass verification, routes/SEO state are stable and no critical security/privacy issue remains.
