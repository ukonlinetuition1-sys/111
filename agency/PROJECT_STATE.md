# UK Online Tuition — Project State

Updated: 24/09/2026 · Coded draft · Status: **COMPLETE FOR REVIEW / UNPUBLISHED**

The existing ten-page coded website plus 404 has been finished as a review draft on PR #9. It retains the live-inspired visual foundation, responsive layouts, interactive teaching controls, resource filtering, mobile navigation, illustrated carousel and motion treatment. UK English document metadata is now consistent across the draft.

The Harmony AI Wix site `9acfbd18-b294-48b8-add2-4e0c912bead9` was inspected through the Wix connector and left unchanged. It contains an enabled form named **UK Online Tuition Enquiry** whose fields match the coded enquiry design closely: parent name, email, optional phone, year/stage, subject/test, main difficulty/goal and optional availability. The coded preview remains deliberately no-send until an authenticated, deployment-safe submission route is explicitly approved and tested.

No Wix site was published or mutated, PR #9 was not merged, production was not changed, and indexing remains disabled in the coded draft. Remaining items are release gates rather than page-building work: rendered deployment QA, real enquiry delivery test, and explicit approval for merge/deployment/indexing/domain changes.

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
