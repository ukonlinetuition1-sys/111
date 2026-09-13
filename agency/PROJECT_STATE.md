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

### Fresh accessibility evidence
Current full-site Wix scan ID: `ed9a0e17-284b-4650-8055-0dbbe187c915`
- 50 pages discovered
- 47 successfully scanned in the full-site run
- 3 failed in the full-site run
- 95 serious findings
- 87 colour contrast
- 6 alternative text
- 2 heading structure
- 8 screen-reader category hits (category overlap is possible)

Root-cause concentration:
- `comp-kd5pdf7t`: 47 contrast findings — present on **47/47 successfully scanned pages**, so it is a global-shell/global-widget defect.
- `comp-mtx9m2nn`: 37 contrast findings — every occurrence is on a Blog surface; rendered HTML shows it is the shared Wix Blog TPA section.
- These two components account for **84/87** current contrast findings.

Targeted rescans of the three full-site failures:
- `11+ Exam Formats: Why the Target School Matters` → scan `5ce425fa-6e1a-4c21-83cf-98d47d41755e` completed; only the two shared contrast findings.
- `Online Primary English & Maths Tuition: Build Strong Foundations` → scan `8dc0de85-b9bd-4c2e-9e08-1bf631f74dee` completed; only the two shared contrast findings.
- `11+ Online Tuition: A Parent’s Guide to Targeted Preparation` → scan `9f3cf40c-8c3d-43ca-a0d4-796e5b51f868` failed again with `ACCESSIBILITY_SCAN_FAILURE_CODE_ANALYSIS_FAILED`.

The persistently failing Parent’s Guide page renders successfully through an independent browser extractor. Its rich-content tree was compared with a successfully scanned post: no duplicate node IDs or obvious malformed heading hierarchy were found. Do not destructively rewrite the post without stronger evidence.

Homepage remains at 9 serious findings:
- 6 alternative-text findings
- 2 contrast findings
- 1 heading-structure finding

Flagged homepage image IDs:
- `comp-mtxzt1m61`
- `comp-mtxzpr6q6__item-j9plerjk`
- `comp-mtxzpr6q6__item1`
- `comp-mtxzpr6q6__item-ljfbivf9`
- `comp-mtxzpr6q6__item-j9ples3e`
- `comp-mtxzoify5`

Rendered media metadata identifies these as stock/placeholder assets including `Friendship Selfie.jpg`, `Modern Apartment Building`, `Orange Container.jpg`, `IMM_public storage.jpeg`, `Apartment Building.jpg`, plus one unnamed Wix stock image. Preferred design direction is to remove/replace irrelevant placeholder imagery rather than invent misleading alt text. If a retained image is intentionally decorative, mark it decorative after visual confirmation.

Heading finding: `comp-mtxzhe29__item-j9ples3e`, rendered as `<h3>11+ tuition</h3>`. Fix only after reviewing the intended page outline rather than blindly promoting it to H1.

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

Preferred: `UK Online Tuition Enquiry` (`68a44711-2ab0-42e9-a9dd-a51f15b90e50`)
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

Older: `Tuition Enquiry` (`620fb792-4907-43cf-b223-22f37762b036`).

Decision: do not replace the strong form and do not delete/disable the older form until embed/dependency usage is proven. Wix Forms schemas/submissions do not expose which page instance uses a schema, so page-level/editor evidence is required.

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
The documented public Wix APIs available in this run do not expose safe mutation methods for these Studio design/page settings:
- Fixing the global visual element `comp-kd5pdf7t` once its exact widget/style is identified.
- Fixing the Blog-template visual element `comp-mtx9m2nn` at design level.
- Editing image alt/decorative state on the affected Studio elements.
- Correcting the affected Studio heading level.
- Renaming static Wix Studio `blank-*` page slugs to clean routes.
- Proving which form schema instance is embedded on the Enquire page through page layout data.

A live browser inspection was started for component identification, but the automation remained queued at the time of this state update. Do not claim those editor changes are complete until direct evidence exists.

## Next execution order
1. P0 identify and fix global `comp-kd5pdf7t` at source.
2. P0 fix Blog-template `comp-mtx9m2nn` at source.
3. P0 remove/replace homepage placeholder imagery and repair heading hierarchy with semantic confirmation.
4. Resolve or defensibly classify the one persistently failing Parent’s Guide accessibility scan.
5. Rename clean Studio slugs using the proven page map.
6. Verify Enquire page uses preferred Wix form; retire duplicate only if dependency-free.
7. Publish/verify page metadata only after page/slugs are stable.
8. Cross-device + keyboard + screen-reader journey QA.
9. SEO/AEO page ownership and content cluster review.
10. Security/privacy/release checks.
11. Reality Checker reassessment.

## Release gate
Do not switch the domain or declare the new site ready until the Reality Checker has evidence sufficient to change `NEEDS WORK` to `READY`.
