import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { Plugin, Skill } from '@opencode/plugin'
import { parse } from 'yaml'

const skillEntries = [
  {
    "id": "tailrocks-brainstorm",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-finalize",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-grilling",
    "explicitOnly": false
  },
  {
    "id": "tailrocks-idea",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-plan",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-prove",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-reconcile",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-record-decision",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-record-feedback",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-research",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-retrospect",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-seed-roadmap",
    "explicitOnly": true
  }
]

export default Plugin.define({
  id: 'tailrocks-roadmap-skills',
  async setup(ctx) {
    const skills = await Promise.all(skillEntries.map(async ({ id, explicitOnly }) => {
      const url = new URL(`../../skills/${id}/SKILL.md`, import.meta.url)
      const path = fileURLToPath(url)
      const source = await readFile(url, 'utf8')
      const frontmatter = /^\uFEFF?---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/.exec(source)
      if (!frontmatter) {
        throw new Error(`Missing YAML frontmatter in ${path}`)
      }

      const { name, description } = parse(frontmatter[1]) ?? {}
      if (name !== id || typeof description !== 'string' || !description.trim()) {
        throw new Error(`Invalid name or description in ${path}`)
      }

      return {
        id: Skill.ID.make(id),
        name: Skill.Name.make(name),
        description,
        path: Skill.Info.fields.path.make(path),
        content: source.slice(frontmatter[0].length),
        autoinvoke: !explicitOnly,
      }
    }))

    await ctx.skill.transform((editor) => {
      for (const skill of skills) editor.add(skill)
    })
  },
})
