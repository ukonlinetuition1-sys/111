# UK Online Tuition — Agent Contract

## Mission
Improve and finish the canonical native Wix Studio rebuild efficiently, using evidence, targeted specialists and verification rather than maximum agent count.

## Canonical target
- Wix Studio site: `a0b54523-3b3b-499d-b8cc-590fff1266bb`
- Studio URL: `https://danielpharris4.wixstudio.com/my-site`

## Never modify
- Production: `64c79e1f-b6eb-444d-aa03-a4495e2b68f8`
- PRE-ASTRA backup: `f0b72792-2a3e-4da1-a601-a49094d465d3`
- Do not create another Wix site.

## Build constraints
Use native Wix Studio elements and Wix-native forms. No ASTRA, Harmony overlay, iframe, full-page HTML replacement, body-hiding script or legacy-site overlay. Do not publish or switch the production domain without explicit approval.

## Default workflow
1. Inspect the minimum evidence needed.
2. Classify the task and select only relevant specialists using `agency/AI_ROUTING.md`.
3. Make the smallest high-impact change.
4. Verify it.
5. Record material state changes in `agency/PROJECT_STATE.md`; use `agency/WORK_QUEUE.md` only for active work.

Do not run the full Agency roster by default. A full-roster sweep is reserved for an explicit comprehensive audit or release gate. Do not make irrelevant agents produce applicability reports.

## Context discipline
- Keep this file stable and short because it is loaded as persistent project context.
- Do not copy volatile project state, scan results, long histories or agent biographies here.
- Read specialist/reference files only when the current task requires them.
- Prefer one strong specialist; add a second for independent QA when risk warrants it.
- Avoid recursive agent debates, duplicate reports and re-reading unchanged evidence.
- Summarise large evidence once and reuse the summary.
- For straightforward work, act directly without agent delegation.

## Evidence and quality
- Evidence beats agent opinion.
- Label unsupported ideas as hypotheses.
- Shared/root-cause fixes beat repeated patches.
- Maximum three implementation/QA attempts per task before marking it blocked.
- Never claim production readiness from appearance alone.
- Accessibility release checks require unresolved automated findings to be addressed and appropriate manual checks to be evidenced.
- Do not delete forms, pages, data or backups until dependencies and usage are verified.
- Do not rewrite SEO titles/H1s blindly; check page ownership and cannibalisation first.

## Output discipline
For specialist reviews, keep output to: finding, evidence, action, risk and confidence. Omit sections with no useful content.

## Current state
The authoritative changing state is `agency/PROJECT_STATE.md`, not this file. Current release status remains `NEEDS WORK` until the documented release gates pass.
