# Context Map

This file tells agents where durable information belongs so persistent context stays small.

## Always-loaded
`/AGENTS.md`
Only stable project rules, protected targets, workflow and safety constraints.

## Read when needed
`agency/PROJECT_STATE.md`
Current implementation state, evidence, blockers and release status.

`agency/WORK_QUEUE.md`
Active tasks and verification status. Do not use as a historical diary.

`agency/ROSTER_COVERAGE.md`
Historical/full-roster coverage information. Read only for roster audits.

`agency/AI_ROUTING.md`
Specialist selection and delegation budgets.

`README.md`
Repository architecture and human-facing launch notes.

## Information hygiene
- Put changing numbers, audit counts and progress in PROJECT_STATE, not AGENTS.md.
- Remove completed low-value detail from WORK_QUEUE after it is reflected in PROJECT_STATE.
- Do not duplicate the same rule in several files unless omission would create a safety risk.
- Link to evidence instead of pasting long evidence repeatedly.
- Prefer concise summaries over transcripts.
- Date material state snapshots using DD/MM/YYYY.
