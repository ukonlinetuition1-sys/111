# UK Online Tuition — Project State

Updated: 21/09/2026 · Coded draft matched to rendered live design · Launch: **NEEDS WORK**

The user approved the GitHub coded-draft route after remote Harmony editor failures. The current branch reuses the ten existing pages. All ten pages now match the live site’s rendered design. Shared navigation, resource filtering and lesson-stage controls work locally; the enquiry form stays preview-only. Build and browser evidence are in `QA_2026-09-21.md`.

All four Wix sites are protected. No deployment, merge, domain/indexing change, form submission or chat occurred. This is not a claim that the Harmony draft was repaired. Its rendered/save state remains unverified.

Remaining: choose and implement an approved enquiry integration while preserving required fields/routing; verify content/privacy and resource scope; full cross-page responsive/accessibility release checks; explicit deployment approval.

## Historical Wix state — 18 September 2026

Updated: 18/09/2026 · Reality: **NEEDS WORK**

## Sites
Canonical Wix Studio: `a0b54523-3b3b-499d-b8cc-590fff1266bb`.
Never modify production `64c79e1f-b6eb-444d-aa03-a4495e2b68f8` or PRE-ASTRA backup `f0b72792-2a3e-4da1-a601-a49094d465d3`.

## Accessibility evidence
Full scan `ed9a0e17-284b-4650-8055-0dbbe187c915`: 50 pages discovered, 47 scanned, 3 failed; 95 serious findings = 87 contrast + 6 alt-text + 2 heading.
- `comp-kd5pdf7t`: 47 contrast findings, all successful pages.
- Blog `comp-mtx9m2nn`: 37 contrast findings.
- Together: 84/87 contrast findings.
Two failed pages passed targeted rescans. `11+ Online Tuition: A Parent’s Guide to Targeted Preparation` still fails `ACCESSIBILITY_SCAN_FAILURE_CODE_ANALYSIS_FAILED`; independent rendering succeeds and no obvious malformed rich-content structure was found. Re-test after Blog repair before changing content.
Homepage: 6 alt-text + 2 contrast + 1 heading finding; flagged media appears to include irrelevant stock/placeholder assets.

## Pages / SEO
`/` Home; `/blank` How It Works; `/blank-1` GCSE; `/blank-2` 11+; `/blank-3` Primary; `/blank-4` About; `/blank-5` FAQ; `/blank-6` Enquire; `/blank-7` Work With Us; `/blog` Resources.
All native static pages remain staging `noindex`. Draft page-specific title/description metadata: 9/9 non-home static pages successful, unpublished.

## Forms
Preferred enabled form: `UK Online Tuition Enquiry` `68a44711-2ab0-42e9-a9dd-a51f15b90e50`.
Older enabled form: `Tuition Enquiry` `620fb792-4907-43cf-b223-22f37762b036`.
Do not remove either until page-instance evidence proves the older form unused.

## AI architecture
Selective routing is now default: `AGENTS.md` + `agency/AI_ROUTING.md` + on-demand state/queue. Full Agency roster is optional.

## Editor-dependent unresolved work
Shared contrast components; homepage media/heading semantics; `blank*` slugs; Enquire form-instance proof. Public API access has no proven safe mutation path for these. See `WORK_QUEUE.md`.

## Release
Do not publish/switch domain or mark READY until P0 is resolved, routes/SEO are stable, core journeys pass accessibility/responsive verification and no critical security/privacy issue remains.
