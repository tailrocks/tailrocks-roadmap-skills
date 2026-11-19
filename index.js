// Native Amp directory plugin for tailrocks-roadmap-skills.
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

export default async function (amp) {
  for (const { id, explicitOnly } of skillEntries) {
    await amp.registerSkill({ path: `skills/${id}`, listed: !explicitOnly })
  }
}
