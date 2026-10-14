# tailrocks-roadmap-skills

One portable package with twelve skills. The skills carry one product
idea from raw capture through shaping, research, planning, execution
proof, and reconciliation to a field retrospective. Eleven skills are
user-only and need an explicit human command. One skill is
model-selectable.

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

Each skill body lives in its own directory. Read
`skills/tailrocks-idea/SKILL.md` for one complete example.

## Install

Install the package from the central `tailrocks` marketplace. Use
the qualified id `tailrocks-roadmap-skills@tailrocks` wherever
the client accepts it. Each row links its full section in
`docs/installation.md`.

| Agent | Method |
| --- | --- |
| Claude Code | [Marketplace install](docs/installation.md#claude-code) |
| Codex | [Marketplace add](docs/installation.md#codex) |
| Amp | [Per-skill add](docs/installation.md#amp) |
| Muse Code | [Marketplace install](docs/installation.md#muse-code) |
| OpenCode | [Skill-directory copy](docs/installation.md#opencode) |
| Antigravity | [Local-path install](docs/installation.md#antigravity) |
| Grok Build | [Marketplace install](docs/installation.md#grok-build) |
| Kimi Code | [In-session manager](docs/installation.md#kimi-code) |

Quick start on Claude Code (shell):

```sh
claude plugin marketplace add tailrocks/tailrocks-skills
claude plugin install tailrocks-roadmap-skills@tailrocks --scope user
```

All delivery workflows need Git. Lanes with a pull request need an
authenticated `gh` session. Only GitHub.com is supported.

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

- `docs/README.md` indexes the guides.
- `docs/installation.md` installs the package on eight agents.
- `docs/usage.md` shows how to select each skill.
- `docs/compatibility.md` records each route result.
- `docs/maintenance.md` lists checks, policy, and release steps.
- `docs/troubleshooting.md` fixes common failures.

## Update and remove

Refresh the marketplace, then the plugin. Remove the plugin when it
is no longer needed. Commands per agent:

- Claude Code: `claude plugin update
  tailrocks-roadmap-skills@tailrocks` or `claude plugin
  marketplace update tailrocks`; remove with `claude plugin
  uninstall tailrocks-roadmap-skills`.
- Codex: `codex plugin marketplace upgrade tailrocks`; remove with
  `codex plugin remove tailrocks-roadmap-skills@tailrocks`.
- Muse: `muse plugins marketplace update tailrocks`, then the
  remove plus install sequence; remove with `muse plugins remove
  tailrocks-roadmap-skills@tailrocks`.
- Kimi session: no `update` subcommand; remove with `/plugins
  remove tailrocks-roadmap-skills`, then `/reload`.
- Amp, OpenCode, Antigravity, Grok: see
  `docs/installation.md` for the exact steps.

## Contribute

Open an issue or a pull request on GitHub. Write all new and changed
prose in ASD-STE100 Simplified Technical English, Issue 9 rules. Run
`alint check`, the strict-JSON check, and the frontmatter check
before the pull request. See `docs/maintenance.md` for the full
list. Never add evaluation content.

## License

Apache License, Version 2.0. See `LICENSE` for the full text.
