# UK Online Tuition — Agency Project State

Last updated: 13/09/2026
Reality status: **NEEDS WORK**

## Canonical implementation
Native Wix Studio site: `a0b54523-3b3b-499d-b8cc-590fff1266bb`

Protected — do not modify:
- Production Editor site: `64c79e1f-b6eb-444d-aa03-a4495e2b68f8`
- PRE-ASTRA backup: `f0b72792-2a3e-4da1-a601-a49094d465d3`

## Completed in this Agency execution

### Orchestration and governance
- Created branch `agency-full-roster-orchestration`.
- Added root `AGENTS.md` full-roster operating contract.
- Added `agency/ROSTER_COVERAGE.md` covering all 18 source divisions and applicability rules.
- Added `agency/WORK_QUEUE.md` with P0–P4 evidence-backed queue and release criteria.
- Opened PR #7 containing only project-control files, not site implementation files.
- Opened tracked issues for contrast root causes, homepage/failed accessibility pages, clean native routes/release SEO state, and Wix enquiry-form verification.

### Accessibility evidence
Full Wix scan ID: `d3f0d424-1e69-4afb-b5f7-7cf0615df4ce`
- 50 pages discovered
- 40 successfully scanned
- 10 failed
- 84 serious findings
- 76 contrast
- 6 alternative text
- 2 heading structure

Root causes:
- `comp-kd5pdf7t`: 40 contrast findings
- `comp-mtx9m2nn`: 33 contrast findings
- 73/76 contrast findings therefore concentrate in two recurring Wix elements.

Homepage:
- 9 serious findings
- 6 alternative text
- 2 contrast
- 1 heading structure

### Native page identity resolved
Using Wix static-page SEO records:
- `c1dmp` `/` → Home
- `p0k09` `/blank` → How It Works
- `puanx` `/blank-1` → GCSE
- `trryr` `/blank-2` → 11+
- `q7zal` `/blank-3` → Primary
- `xjfe9` `/blank-4` → About
- `pusv4` `/blank-5` → FAQ
- `b6a3j` `/blank-6` → Enquire
- `ih1xp` `/blank-7` → Work With Us
- `wt6n1` `/blog` → Resources

Every native static page currently resolves with `robots=noindex`. Preserve that while staging; remove/replace only as part of controlled production cutover.

### Draft page-specific SEO metadata applied
The approved static-reference title and meta description were written to the saved/draft revision of all nine non-home static pages through Wix bulk SEO tags API.

Result: **9 successes, 0 failures**.

These writes were deliberately **not published** and did not change the staging `noindex` state.

### Enquiry forms inspected
Two enabled native Wix Forms schemas exist.

Preferred: `UK Online Tuition Enquiry`
- Parent/carer first name + surname
- Email
- Optional phone
- Pupil stage/year
- Subject or entrance test
- Support needed
- Optional availability
- Desktop/tablet/mobile layouts
- Advanced spam protection
- On-page thank-you message

Older: `Tuition Enquiry`.

Decision: do not replace the strong form and do not delete/disable the older form until embed/dependency usage is proven.

### Reference-code security check
- No obvious API key/secret/token/password/bearer or outbound request implementation found in the reference repository search.
- Static reference `assets/main.js` intentionally prevents form transmission and reports that secure delivery is not connected.
- Native Wix form remains the intended production submission mechanism.

### Codex full-roster installer
Added `agency/install-full-agency-for-codex.sh`.
- Uses the Agency project's official `convert.sh --tool codex` and `install.sh --tool codex` flow.
- Default upstream revision is pinned to audited signed commit `ad9264e309bd5e5422c04784372d7841b1e5d604` to reduce supply-chain risk.
- A different revision requires explicit `AGENCY_REF` override.

## Currently blocked / editor-only
The public Wix APIs available in this run do not expose safe mutation methods for these Studio design/page settings:
- Fixing the two shared visual contrast elements.
- Editing image alt/decorative state on the affected Studio elements.
- Correcting the affected Studio heading level.
- Renaming static Wix Studio `blank-*` page slugs to clean routes.
- Proving which form schema instance is embedded on the Enquire page through page layout data.

These remain open work, not falsely marked complete.

## Next execution order
1. P0 shared contrast root causes.
2. P0 homepage alt/heading/contrast + failed-page investigation.
3. Clean Studio slugs using the proven page map.
4. Verify Enquire page uses preferred Wix form.
5. Publish/verify page metadata only after page/slugs are stable.
6. Cross-device + keyboard + screen-reader journey QA.
7. SEO/AEO page ownership and content cluster review.
8. Security/privacy/release checks.
9. Reality Checker reassessment.

## Release gate
Do not switch the domain or declare the new site ready until the Reality Checker has evidence sufficient to change `NEEDS WORK` to `READY`.
