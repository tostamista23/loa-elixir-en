import { EffectOption } from "../model/effect";

export const effectLevelTable = {
  0: 0,
  1: 0,
  2: 0,
  3: 1,
  4: 1,
  5: 1,
  6: 2,
  7: 2,
  8: 3,
  9: 4,
  10: 5,
};

export const effectOptions: readonly EffectOption[] = [
  {
    name: "Strength",
    optionDescriptions: [
      "Strength",
      "Strength +864",
      "Strength +1782",
      "Strength +2700",
      "Strength +4050",
      "Strength +5400",
    ],
  },
  {
    name: "Intelligence",
    optionDescriptions: [
      "Intelligence",
      "Intelligence +864",
      "Intelligence +1782",
      "Intelligence +2700",
      "Intelligence +4050",
      "Intelligence +5400",
    ],
  },
  {
    name: "Dexterity",
    optionDescriptions: [
      "Dexterity",
      "Dexterity +864",
      "Dexterity +1782",
      "Dexterity +2700",
      "Dexterity +4050",
      "Dexterity +5400",
    ],
  },
  {
    name: "Atk. Power",
    optionDescriptions: [
      "Attack Power",
      "Attack Power +122",
      "Attack Power +253",
      "Attack Power +383",
      "Attack Power +575",
      "Attack Power +767",
    ],
  },
  {
    name: "Weapon Power",
    optionDescriptions: [
      "Weapon Power",
      "Weapon Power +236",
      "Weapon Power +488",
      "Weapon Power +740",
      "Weapon Power +1110",
      "Weapon Power +1480",
    ],
  },
  {
    name: "Master of Expert",
    optionDescriptions: [
      "Cooldown reduction of escape skills",
      "Cooldown reduction of escape skills +0.38%",
      "Cooldown reduction of escape skills +0.79%",
      "Cooldown reduction of escape skills +1.2%",
      "Cooldown reduction of escape skills +1.8%",
      "Cooldown reduction of escape skills +2.4%",
    ],
  },
  {
    name: "Master of Evasion",
    optionDescriptions: [
      "Cooldown reduction of movement skills",
      "Cooldown reduction of movement skills +0.38%",
      "Cooldown reduction of movement skills +0.79%",
      "Cooldown reduction of movement skills +1.2%",
      "Cooldown reduction of movement skills +1.8%",
      "Cooldown reduction of movement skills +2.4%",
    ],
  },
  {
    name: "MP",
    optionDescriptions: [
      "Maximum Mana",
      "Maximum Mana +15",
      "Maximum Mana +32",
      "Maximum Mana +49",
      "Maximum Mana +73",
      "Maximum Mana +98",
    ],
  },
  {
    name: "Blessing of Life",
    optionDescriptions: [
      "Health regeneration during combat",
      "Health regeneration during combat +6",
      "Health regeneration during combat +12",
      "Health regeneration during combat +19",
      "Health regeneration during combat +29",
      "Health regeneration during combat +39",
    ],
  },
  {
    name: "Resource Blessing",
    optionDescriptions: [
      "Increased natural regeneration of combat resources",
      "Increased natural regeneration of combat resources +0.46%",
      "Increased natural regeneration of combat resources +0.95%",
      "Increased natural regeneration of combat resources +1.45%",
      "Increased natural regeneration of combat resources +2.17%",
      "Increased natural regeneration of combat resources +2.9%",
    ],
  },
  {
    name: "Wanderer",
    optionDescriptions: [
      "Damage increase when not in a party or raid",
      "Damage increase when not in a party or raid +0.8%",
      "Damage increase when not in a party or raid +1.65%",
      "Damage increase when not in a party or raid +2.5%",
      "Damage increase when not in a party or raid +3.75%",
      "Damage increase when not in a party or raid +5%",
    ],
  },
  {
    name: "Stagger",
    optionDescriptions: [
      "Stagger",
      "Stagger +0.38%",
      "Stagger +0.79%",
      "Stagger +1.2%",
      "Stagger +1.8%",
      "Stagger +2.4%",
    ],
  },
  {
    name: "Potion Poisoning",
    optionDescriptions: [
      "Increased healing amount from recovery-type battle items",
      "Increased healing amount from recovery-type battle items +1.13%",
      "Increased healing amount from recovery-type battle items +2.34%",
      "Increased healing amount from recovery-type battle items +3.55%",
      "Increased healing amount from recovery-type battle items +5.32%",
      "Increased healing amount from recovery-type battle items +7.1%",
    ],
  },
  {
    name: "Explosives Expert",
    optionDescriptions: [
      "Increased damage from battle items",
      "Increased damage from battle items +1.6%",
      "Increased damage from battle items +3.3%",
      "Increased damage from battle items +5%",
      "Increased damage from battle items +7.5%",
      "Increased damage from battle items +10%",
    ],
  },
  {
    name: "Luck (Order)",
    optionDescriptions: [
      "Attack Power",
      "Attack Power +0.23%",
      "Attack Power +0.47%",
      "Attack Power +0.72%",
      "Attack Power +1.08%",
      "Attack Power +1.44%",
    ],
  },
  {
    name: "Critical (Order)",
    optionDescriptions: [
      "Attack Power",
      "Attack Power +0.23%",
      "Attack Power +0.47%",
      "Attack Power +0.72%",
      "Attack Power +1.08%",
      "Attack Power +1.44%",
    ],
  },
  {
    name: "Master (Order)",
    optionDescriptions: [
      "Attack Power",
      "Attack Power +0.23%",
      "Attack Power +0.47%",
      "Attack Power +0.72%",
      "Attack Power +1.08%",
      "Attack Power +1.44%",
    ],
  },
  {
    name: "Mighty (Order)",
    optionDescriptions: [
      "Attack Power",
      "Attack Power +0.23%",
      "Attack Power +0.47%",
      "Attack Power +0.72%",
      "Attack Power +1.08%",
      "Attack Power +1.44%",
    ],
  },
  {
    name: "Bladed Shield (Order)",
    optionDescriptions: [
      "Attack Power",
      "Attack Power +0.23%",
      "Attack Power +0.47%",
      "Attack Power +0.72%",
      "Attack Power +1.08%",
      "Attack Power +1.44%",
    ],
  },
  {
    name: "Fire Mastery (Order)",
    optionDescriptions: [
      "Attack Power",
      "Attack Power +0.23%",
      "Attack Power +0.47%",
      "Attack Power +0.72%",
      "Attack Power +1.08%",
      "Attack Power +1.44%",
    ],
  },
  {
    name: "Master of Poison (Order)",
    optionDescriptions: [
      "Attack Power",
      "Attack Power +0.23%",
      "Attack Power +0.47%",
      "Attack Power +0.72%",
      "Attack Power +1.08%",
      "Attack Power +1.44%",
    ],
  },{
    name: "Vanguard (Order)",
    optionDescriptions: [
      "Health and Shield effect given to party members",
      "Party Attack Power buff based on own Attack Power +0.64%",
      "Party Attack Power buff based on own Attack Power +1.32%",
      "Party Attack Power buff based on own Attack Power +2%",
      "Party Attack Power buff based on own Attack Power +3%",
      "Party Attack Power buff based on own Attack Power +4%",
    ],
  },
  {
    name: "Luminary (Order)",
    optionDescriptions: [
      "Party Attack Power buff based on own Attack Power",
      "Party Attack Power buff based on own Attack Power +0.64%",
      "Party Attack Power buff based on own Attack Power +1.32%",
      "Party Attack Power buff based on own Attack Power +2%",
      "Party Attack Power buff based on own Attack Power +3%",
      "Party Attack Power buff based on own Attack Power +4%",
    ],
  },
  {
    name: "Faith (Order)",
    optionDescriptions: [
      "Party Attack Power buff based on own Attack Power",
      "Party Attack Power buff based on own Attack Power +0.64%",
      "Party Attack Power buff based on own Attack Power +1.32%",
      "Party Attack Power buff based on own Attack Power +2%",
      "Party Attack Power buff based on own Attack Power +3%",
      "Party Attack Power buff based on own Attack Power +4%",
    ],
  },
  {
    name: "Boss Damage",
    optionDescriptions: [
      "Damage to monsters of Boss grade or higher",
      "Damage to monsters of Boss grade or higher +0.38%",
      "Damage to monsters of Boss grade or higher +0.79%",
      "Damage to monsters of Boss grade or higher +1.2%",
      "Damage to monsters of Boss grade or higher +1.8%",
      "Damage to monsters of Boss grade or higher +2.4%",
    ],
  },
  {
    name: "Awakening Skill Damage",
    optionDescriptions: [
      "Awakening Skill Damage",
      "Awakening Skill Damage +1.2%",
      "Awakening Skill Damage +2.47%",
      "Awakening Skill Damage +3.75%",
      "Awakening Skill Damage +5.62%",
      "Awakening Skill Damage +7.5%",
    ],
  },
  {
    name: "Shield Enhancement",
    optionDescriptions: [
      "Shield effect given to party members",
      "Shield effect given to party members +0.67%",
      "Shield effect given to party members +1.38%",
      "Shield effect given to party members +2.1%",
      "Shield effect given to party members +3.15%",
      "Shield effect given to party members +4.2%",
    ],
  },
  {
    name: "Healing Enhancement",
    optionDescriptions: [
      "Recovery effect given to party members",
      "Recovery effect given to party members +0.67%",
      "Recovery effect given to party members +1.38%",
      "Recovery effect given to party members +2.1%",
      "Recovery effect given to party members +3.15%",
      "Recovery effect given to party members +4.2%",
    ],
  },
  {
    name: "Maximum Health",
    optionDescriptions: [
      "Maximum Health",
      "Maximum Health +2720",
      "Maximum Health +5610",
      "Maximum Health +8500",
      "Maximum Health +12750",
      "Maximum Health +17000",
    ],
  },
  {
    name: "Reduced Damage Taken",
    optionDescriptions: [
      "Reduced Damage Taken",
      "Reduced Damage Taken +1.6%",
      "Reduced Damage Taken +3.3%",
      "Reduced Damage Taken +5%",
      "Reduced Damage Taken +7.5%",
      "Reduced Damage Taken +10%",
    ],
  },
  {
    name: "Phy. Defense",
    optionDescriptions: [
      "Physical Defense",
      "Physical Defense +960",
      "Physical Defense +1980",
      "Physical Defense +3000",
      "Physical Defense +4500",
      "Physical Defense +6000",
    ],
  },
  {
    name: "Magical Defense",
    optionDescriptions: [
      "Magical Defense",
      "Magical Defense +960",
      "Magical Defense +1980",
      "Magical Defense +3000",
      "Magical Defense +4500",
      "Magical Defense +6000",
    ],
  },
  {
    name: "Crit Damage",
    optionDescriptions: [
      "Crit Damage",
      "Crit Damage +1.12%",
      "Crit Damage +2.31%",
      "Crit Damage +3.5%",
      "Crit Damage +5.25%",
      "Crit Damage +7%",
    ],
  },
  {
    name: "Additional Damage",
    optionDescriptions: [
      "Additional Damage",
      "Additional Damage +0.49%",
      "Additional Damage +1.02%",
      "Additional Damage +1.55%",
      "Additional Damage +2.32%",
      "Additional Damage +3.1%",
    ],
  },
  {
    name: "Identity Acquisition",
    optionDescriptions: [
      "Identity Gauge acquisition amount on successful hit",
      "Identity Gauge acquisition amount on successful hit +0.64%",
      "Identity Gauge acquisition amount on successful hit +1.32%",
      "Identity Gauge acquisition amount on successful hit +2%",
      "Identity Gauge acquisition amount on successful hit +3%",
      "Identity Gauge acquisition amount on successful hit +4%",
    ],
  },
  {
    name: "Ally Enhancement",
    optionDescriptions: [
      "Party Attack Power buff based on own Attack Power",
      "Party Attack Power buff based on own Attack Power +0.96%",
      "Party Attack Power buff based on own Attack Power +1.98%",
      "Party Attack Power buff based on own Attack Power +3%",
      "Party Attack Power buff based on own Attack Power +4.5%",
      "Party Attack Power buff based on own Attack Power +6%",
    ],
  },
  {
    name: "Luck (Chaos)",
    optionDescriptions: [
      "Damage to enemies",
      "Damage to enemies +0.23%",
      "Damage to enemies +0.47%",
      "Damage to enemies +0.72%",
      "Damage to enemies +1.08%",
      "Damage to enemies +1.44%",
    ],
  },
  {
    name: "Critical (Chaos)",
    optionDescriptions: [
      "Damage to enemies",
      "Damage to enemies +0.23%",
      "Damage to enemies +0.47%",
      "Damage to enemies +0.72%",
      "Damage to enemies +1.08%",
      "Damage to enemies +1.44%",
    ],
  },
  {
    name: "Master (Chaos)",
    optionDescriptions: [
      "Damage to enemies",
      "Damage to enemies +0.23%",
      "Damage to enemies +0.47%",
      "Damage to enemies +0.72%",
      "Damage to enemies +1.08%",
      "Damage to enemies +1.44%",
    ],
  },
  {
    name: "Mighty (Chaos)",
    optionDescriptions: [
      "Additional Damage",
      "Damage to enemies +0.23%",
      "Damage to enemies +0.47%",
      "Damage to enemies +0.72%",
      "Damage to enemies +1.08%",
      "Damage to enemies +1.44%",
    ],
  },
  {
    name: "Bladed Shield (Chaos)",
    optionDescriptions: [
      "Damage to enemies",
      "Damage to enemies +0.23%",
      "Damage to enemies +0.47%",
      "Damage to enemies +0.72%",
      "Damage to enemies +1.08%",
      "Damage to enemies +1.44%",
    ],
  },
  {
    name: "Vanguard (Chaos)",
    optionDescriptions: [
      "Damage to enemies",
      "Damage to enemies +0.23%",
      "Damage to enemies +0.47%",
      "Damage to enemies +0.72%",
      "Damage to enemies +1.08%",
      "Damage to enemies +1.44%",
    ],
  },
  {
    name: "Luminary (Chaos)",
    optionDescriptions: [
      "Damage to enemies",
      "Damage to enemies +0.23%",
      "Damage to enemies +0.47%",
      "Damage to enemies +0.72%",
      "Damage to enemies +1.08%",
      "Damage to enemies +1.44%",
    ],
  },
  {
    name: "Faith (Chaos)",
    optionDescriptions: [
      "Party recovery and shield effect given",
      "Party recovery and shield effect given +0.23%",
      "Party recovery and shield effect given +0.47%",
      "Party recovery and shield effect given +0.72%",
      "Party recovery and shield effect given +1.08%",
      "Party recovery and shield effect given +1.44%",
    ],
  },
  {
    name: "Luminary (Chaos)",
    optionDescriptions: [
      "Party recovery and shield effect given",
      "Party recovery and shield effect given +0.23%",
      "Party recovery and shield effect given +0.47%",
      "Party recovery and shield effect given +0.72%",
      "Party recovery and shield effect given +1.08%",
      "Party recovery and shield effect given +1.44%",
    ],
  },
  {
    name: "Faith (Chaos)",
    optionDescriptions: [
      "Party recovery and shield effect given",
      "Party recovery and shield effect given +0.23%",
      "Party recovery and shield effect given +0.47%",
      "Party recovery and shield effect given +0.72%",
      "Party recovery and shield effect given +1.08%",
      "Party recovery and shield effect given +1.44%",
    ],
  }
];



export const effectOptionsRecord: Record<string, EffectOption> =
  Object.fromEntries(effectOptions.map((item) => [item.name, item]));
