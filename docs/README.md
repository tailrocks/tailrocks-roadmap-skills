# Roadmap skills guides

This package holds twelve skills. The skills carry one product idea
from raw capture through shaping, research, planning, execution
proof, and reconciliation to a field retrospective.

Eleven skills are user-only and need an explicit human command. One
skill is model-selectable:

- `tailrocks-grilling` stress-tests a choice. It is conversation
  only and writes no artifact.

## Guides

- [Installation](installation.md) gives the native host routes.
- [Usage](usage.md) shows how to select a skill and use its arguments.
- [Runtime requirements](runtime.md) lists the tools and packaged resources.
- [Package structure](architecture.md) explains file ownership.
- [Model choices](models.md) explains role selection and effort.
- [Compatibility](compatibility.md) records host behavior and limits.
- [Verification](verification.md) lists package checks and observed evidence.
- [Maintenance](maintenance.md) gives generator and release procedures.
- [Troubleshooting](troubleshooting.md) helps diagnose installation or use.

## Skills

| Skill | Task |
| --- | --- |
| `tailrocks-idea` | Capture a raw idea as a DRAFT item. User-only. |
| `tailrocks-seed-roadmap` | Seed one verified finding. User-only. |
| `tailrocks-brainstorm` | Shape a young item in an interview. User-only. |
| `tailrocks-grilling` | Stress-test a choice. Conversation only. |
| `tailrocks-research` | Produce vetted reusable research. User-only. |
| `tailrocks-record-decision` | Record one user decision. User-only. |
| `tailrocks-record-feedback` | Capture one feedback round. User-only. |
| `tailrocks-finalize` | Close shaping and grant READY. User-only. |
| `tailrocks-plan` | Write the plan package and goal handoff. User-only. |
| `tailrocks-prove` | Execute surfaces and judge the round. User-only. |
| `tailrocks-reconcile` | True up status with reality. User-only. |
| `tailrocks-retrospect` | Propose skill patches from history. User-only. |

Each skill body lives in its own directory under `skills/`. Read
`skills/tailrocks-idea/SKILL.md` for one complete example.

## Requirements

See [runtime requirements](runtime.md) for the tools and files the skills use.
