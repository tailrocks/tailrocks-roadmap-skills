# tailrocks-roadmap-skills

One portable package with twelve skills. The skills carry one product
idea from raw capture through shaping, research, planning, execution
proof, and reconciliation to a field retrospective. Eleven skills are
user-only and need an explicit human command. One skill is
model-selectable.

## Skills

| Skill | Task |
| --- | --- |
| [`tailrocks-idea`](skills/tailrocks-idea/SKILL.md) | Capture a raw idea as a DRAFT item. User-only. |
| [`tailrocks-seed-roadmap`](skills/tailrocks-seed-roadmap/SKILL.md) | Seed one verified finding. User-only. |
| [`tailrocks-brainstorm`](skills/tailrocks-brainstorm/SKILL.md) | Shape a young item in an interview. User-only. |
| [`tailrocks-grilling`](skills/tailrocks-grilling/SKILL.md) | Stress-test a choice. Conversation only. |
| [`tailrocks-research`](skills/tailrocks-research/SKILL.md) | Produce vetted reusable research. User-only. |
| [`tailrocks-record-decision`](skills/tailrocks-record-decision/SKILL.md) | Record one user decision. User-only. |
| [`tailrocks-record-feedback`](skills/tailrocks-record-feedback/SKILL.md) | Capture one feedback round. User-only. |
| [`tailrocks-finalize`](skills/tailrocks-finalize/SKILL.md) | Close shaping and grant READY. User-only. |
| [`tailrocks-plan`](skills/tailrocks-plan/SKILL.md) | Write the plan package and goal handoff. User-only. |
| [`tailrocks-prove`](skills/tailrocks-prove/SKILL.md) | Execute surfaces and judge the round. User-only. |
| [`tailrocks-reconcile`](skills/tailrocks-reconcile/SKILL.md) | True up status with reality. User-only. |
| [`tailrocks-retrospect`](skills/tailrocks-retrospect/SKILL.md) | Propose skill patches from history. User-only. |

Each skill body lives in its own directory. Read
[skills/tailrocks-idea/SKILL.md](skills/tailrocks-idea/SKILL.md)
for one complete example.

## Install

Install one complete package in your host's chosen scope. The [Tailrocks
catalog](https://github.com/tailrocks/tailrocks-skills) selects the source commit.
Use the route for your host.

| Host | Native install route |
| --- | --- |
| Claude Code | [Marketplace plugin](docs/installation.md#claude-code) |
| Codex | [Marketplace plugin](docs/installation.md#codex) |
| Grok Build | [Marketplace plugin](docs/installation.md#grok-build) |
| Muse Code | [Marketplace snapshot](docs/installation.md#muse-code) |
| omp | [Marketplace plugin](docs/installation.md#omp) |
| OpenCode V2 | [Git package](docs/installation.md#opencode) |
| Amp | [Directory plugin](docs/installation.md#amp) |
| Antigravity | [Local plugin installer](docs/installation.md#antigravity) |
| pi | [Git package](docs/installation.md#pi) |
| Kimi Code | [Marketplace manager](docs/installation.md#kimi-code) |

Run these commands to install from the Claude Code marketplace.

```sh
claude plugin marketplace add tailrocks/tailrocks-skills
claude plugin install tailrocks-roadmap-skills@tailrocks --scope user
```

See [runtime requirements](docs/runtime.md) for tools and files the skills use.

## Use

Select the owner for the requested work. To capture one idea on
Claude Code (session):

```text
/tailrocks-roadmap-skills:tailrocks-idea Add offline mode to the CLI
```

The skill writes `roadmap/<slug>/README.md` with status DRAFT,
registers its index row, and opens one draft pull request on the
delivery branch `roadmap/<slug>`. See `docs/usage.md` for every
owner, more examples, and the lifecycle boundary.

## Documentation

- [Package guide](docs/README.md)
- [Installation](docs/installation.md)
- [Usage](docs/usage.md)
- [Runtime requirements](docs/runtime.md)
- [Model settings](docs/models.md)
- [Compatibility and verification](docs/compatibility.md)
- [Maintenance](docs/maintenance.md)

## Update and remove

Use [the host's update and removal steps](docs/installation.md).
For a pinned Git package, install the new catalog revision and use one copy in
the chosen scope.

## Contribute

Open an issue or a pull request on GitHub. Write all new and changed
prose in ASD-STE100 Simplified Technical English, Issue 9 rules. Run
`alint check`, the strict-JSON check, and the frontmatter check
before the pull request. See `docs/maintenance.md` for the full
list. Never add evaluation content.

## License

Apache License, Version 2.0. See `LICENSE` for the full text.
