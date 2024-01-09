import { Council, CouncilType } from "../model/council";

export const councils: readonly Council[] = [
  {
    id: "R4fhmY6g",
    pickRatio: 72000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will increase the transmutation rate of the <{0}> effect by <35>% for this transmutation.",
      "This conversion will increase the probability of <{0}> effect being converted by <35>%.",
      "In this conversion, we will increase the probability of <{0}> effect being converted by <35>%."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 0,
        value: [
          3500,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "y+L7srcs",
    pickRatio: 72000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will increase the transmutation rate of the <{1}> effect by <35>% for this transmutation.",
      "This conversion will increase the probability of <{1}> effect being converted by <35>%.",
      "In this conversion, we will increase the probability of <{1}> effect being converted by <35>%."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 0,
        value: [
          3500,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "nOvVPr9C",
    pickRatio: 72000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will increase the transmutation rate of the <{2}> effect by <35>% for this transmutation.",
      "This conversion will increase the probability of <{2}> effect being converted by <35>%.",
      "In this conversion, we will increase the probability of <{2}> effect being converted by <35>%."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 0,
        value: [
          3500,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "fz4dYPTI",
    pickRatio: 72000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will increase the transmutation rate of the <{3}> effect by <35>% for this transmutation.",
      "This conversion will increase the probability of <{3}> effect being converted by <35>%.",
      "In this conversion, we will increase the probability of <{3}> effect being converted by <35>%."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 0,
        value: [
          3500,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "4SzCiO3/",
    pickRatio: 72000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will increase the transmutation rate of the <{4}> effect by <35>% for this transmutation.",
      "This conversion will increase the probability of <{4}> effect being converted by <35>%.",
      "In this conversion, we will increase the probability of <{4}> effect being converted by <35>%."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 0,
        value: [
          3500,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "a5gxIgIR",
    pickRatio: 40000,
    range: [
      0,
      0
    ],
    descriptions: [
      "In this conversion, the probability of the effect <you choose> being converted will be increased by <35>%.",
      "In this conversion, I will increase the probability of the effect <you selected> being converted by <35>%.",
      "In this conversion, we will increase the probability of <your chosen> effect being converted by <35>%."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          3500,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "bHcd6ti8",
    pickRatio: 18000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will increase the transmutation rate of the <{0}> effect by <70>% for this transmutation.",
      "I will increase the transmutation rate of the <{0}> effect by <70>% for this transmutation.",
      "In this conversion, we will increase the probability of <{0}> effect being converted by <70>%.,,,"
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 0,
        value: [
          7000,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "mhKCAtQm",
    pickRatio: 18000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will increase the transmutation rate of the <{1}> effect by <70>% for this transmutation.",
      "I will increase the transmutation rate of the <{1}> effect by <70>% for this transmutation.",
      "In this conversion, we will increase the probability of <{1}> effect being converted by <70>%.,,,"
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 0,
        value: [
          7000,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "Vq7MHlLo",
    pickRatio: 18000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will increase the transmutation rate of the <{2}> effect by <70>% for this transmutation.",
      "I will increase the transmutation rate of the <{2}> effect by <70>% for this transmutation.",
      "In this conversion, we will increase the probability of <{2}> effect being converted by <70>%.,,,"
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 0,
        value: [
          7000,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "95shRB1l",
    pickRatio: 18000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will increase the transmutation rate of the <{3}> effect by <70>% for this transmutation.",
      "I will increase the transmutation rate of the <{3}> effect by <70>% for this transmutation.",
      "In this conversion, we will increase the probability of <{3}> effect being converted by <70>%.,,,"
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 0,
        value: [
          7000,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "5EkUTXxa",
    pickRatio: 18000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will increase the transmutation rate of the <{4}> effect by <70>% for this transmutation.",
      "I will increase the transmutation rate of the <{4}> effect by <70>% for this transmutation.",
      "In this conversion, we will increase the probability of <{4}> effect being converted by <70>%.,,,"
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 0,
        value: [
          7000,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "gWvAL7v4",
    pickRatio: 10000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will increase the transmutation rate of the effect <you selected> by <70>% for this transmutation.",
      "I will increase the transmutation rate of the effect <you selected> by <70>% for this transmutation.",
      "In this conversion, we will increase the probability of the effect <you chose> being converted by <70>%.,,,"
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          7000,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "ijXdy8lT",
    pickRatio: 72000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will increase the transmutation rate of the <{0}> effect by <5>% for all remaining transmutations.",
      "I will increase the transmutation rate of the <{0}> effect by <5>% for all remaining transmutations.",
      "I will increase the transmutation rate of the <{0}> effect by <5>% for all remaining transmutations."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 0,
        value: [
          500,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "mEgQwgCI",
    pickRatio: 72000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will increase the transmutation rate of the <{1}> effect by <5>% for all remaining transmutations.",
      "I will increase the transmutation rate of the <{1}> effect by <5>% for all remaining transmutations.",
      "I will increase the transmutation rate of the <{1}> effect by <5>% for all remaining transmutations."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 0,
        value: [
          500,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "rdpIbeOC",
    pickRatio: 72000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will increase the transmutation rate of the <{2}> effect by <5>% for all remaining transmutations.",
      "I will increase the transmutation rate of the <{2}> effect by <5>% for all remaining transmutations.",
      "I will increase the transmutation rate of the <{2}> effect by <5>% for all remaining transmutations."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 0,
        value: [
          500,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "+MZRW50J",
    pickRatio: 72000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will increase the transmutation rate of the <{3}> effect by <5>% for all remaining transmutations.",
      "I will increase the transmutation rate of the <{3}> effect by <5>% for all remaining transmutations.",
      "I will increase the transmutation rate of the <{3}> effect by <5>% for all remaining transmutations."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 0,
        value: [
          500,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "RhysJqOW",
    pickRatio: 72000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will increase the transmutation rate of the <{4}> effect by <5>% for all remaining transmutations.",
      "I will increase the transmutation rate of the <{4}> effect by <5>% for all remaining transmutations.",
      "I will increase the transmutation rate of the <{4}> effect by <5>% for all remaining transmutations."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 0,
        value: [
          500,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "6VmV1uPy",
    pickRatio: 40000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will increase the transmutation rate of the effect <you selected> by <5>% for all remaining transmutations.",
      "For all remaining conversions, I will increase the probability of the effect <you selected> being converted by <5>%.,,,,",
      "In all remaining conversions, we will increase the probability of <your chosen> effect being converted by <5>%.,,,,"
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          500,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "oBuqiS5a",
    pickRatio: 18000,
    range: [
      0,
      0
    ],
    descriptions: [
      "In all remaining conversions, the probability of <{0}> effects being converted increases by <10>%.",
      "I will increase the transmutation rate of the <{0}> effect by <10>% for all remaining transmutations.",
      "In all remaining conversions, we will increase the probability of <{0}> effects being converted by <10>%."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 0,
        value: [
          1000,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "7IoNpMxz",
    pickRatio: 18000,
    range: [
      0,
      0
    ],
    descriptions: [
      "In all remaining conversions, the probability of <{1}> effects being converted increases by <10>%.",
      "I will increase the transmutation rate of the <{1}> effect by <10>% for all remaining transmutations.",
      "In all remaining conversions, we will increase the probability of <{1}> effects being converted by <10>%."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 0,
        value: [
          1000,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "rSXM6CZj",
    pickRatio: 18000,
    range: [
      0,
      0
    ],
    descriptions: [
      "In all remaining conversions, the probability of <{2}> effects being converted increases by <10>%.",
      "I will increase the transmutation rate of the <{2}> effect by <10>% for all remaining transmutations.",
      "In all remaining conversions, we will increase the probability of <{2}> effects being converted by <10>%."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 0,
        value: [
          1000,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "XD+A7Frs",
    pickRatio: 18000,
    range: [
      0,
      0
    ],
    descriptions: [
      "In all remaining conversions, the probability of <{3}> effects being converted increases by <10>%.",
      "I will increase the transmutation rate of the <{3}> effect by <10>% for all remaining transmutations.",
      "In all remaining conversions, we will increase the probability of <{3}> effects being converted by <10>%."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 0,
        value: [
          1000,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "YnZSXf6A",
    pickRatio: 18000,
    range: [
      0,
      0
    ],
    descriptions: [
      "In all remaining conversions, the probability of <{4}> effects being converted increases by <10>%.",
      "I will increase the transmutation rate of the <{4}> effect by <10>% for all remaining transmutations.",
      "In all remaining conversions, we will increase the probability of <{4}> effects being converted by <10>%."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 0,
        value: [
          1000,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "0f1OGjTw",
    pickRatio: 10000,
    range: [
      0,
      0
    ],
    descriptions: [
      "In all remaining conversions, the probability of the effect <you choose> being converted will be increased by <10>%.",
      "For all remaining conversions, I will increase the probability of the effect <you selected> being converted by <10>%.",
      "I will decrease the transmutation rate of the effect <you selected> by <10>% for all remaining transmutations."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          1000,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "3JIsEQAL",
    pickRatio: 72000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will decrease the transmutation rate of the <{0}> effect by <20>% for this transmutation.",
      "I will decrease the transmutation rate of the <{0}> effect by <20>% for this transmutation.",
      "I will decrease the transmutation rate of the <{0}> effect by <20>% for this transmutation."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 0,
        value: [
          -2000,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "pGrUp9Q2",
    pickRatio: 72000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will decrease the transmutation rate of the <{1}> effect by <20>% for this transmutation.",
      "I will decrease the transmutation rate of the <{1}> effect by <20>% for this transmutation.",
      "I will decrease the transmutation rate of the <{1}> effect by <20>% for this transmutation."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 0,
        value: [
          -2000,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "VORJa66k",
    pickRatio: 72000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will decrease the transmutation rate of the <{2}> effect by <20>% for this transmutation.",
      "I will decrease the transmutation rate of the <{2}> effect by <20>% for this transmutation.",
      "I will decrease the transmutation rate of the <{2}> effect by <20>% for this transmutation."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 0,
        value: [
          -2000,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "DCgLqVPV",
    pickRatio: 72000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will decrease the transmutation rate of the <{3}> effect by <20>% for this transmutation.",
      "I will decrease the transmutation rate of the <{3}> effect by <20>% for this transmutation.",
      "I will decrease the transmutation rate of the <{3}> effect by <20>% for this transmutation."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 0,
        value: [
          -2000,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "wxjn4v11",
    pickRatio: 72000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will decrease the transmutation rate of the <{4}> effect by <20>% for this transmutation.",
      "I will decrease the transmutation rate of the <{4}> effect by <20>% for this transmutation.",
      "I will decrease the transmutation rate of the <{4}> effect by <20>% for this transmutation."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 0,
        value: [
          -2000,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "7wgizvUn",
    pickRatio: 40000,
    range: [
      0,
      0
    ],
    descriptions: [
      "In this conversion, the probability of the effect <you choose> being converted will be reduced by <20>%.,,,",
      "I will decrease the transmutation rate of the effect <you selected> effect by <20>% for this transmutation.",
      "In this conversion, we will give you a <20>% chance of the effect <you chose> being converted.,,,"
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          -2000,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "ukVMmA4r",
    pickRatio: 18000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will decrease the transmutation rate of the <{0}> effect by <40>% for this transmutation.",
      "I will decrease the transmutation rate of the <{0}> effect by <40>% for this transmutation.",
      "I will decrease the transmutation rate of the <{0}> effect by <40>% for this transmutation.",
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 0,
        value: [
          -4000,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "hAHtj7hy",
    pickRatio: 18000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will decrease the transmutation rate of the <{1}> effect by <40>% for this transmutation.",
      "I will decrease the transmutation rate of the <{1}> effect by <40>% for this transmutation.",
      "I will decrease the transmutation rate of the <{1}> effect by <40>% for this transmutation.",
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 0,
        value: [
          -4000,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "lB3xLGoX",
    pickRatio: 18000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will decrease the transmutation rate of the <{2}> effect by <40>% for this transmutation.",
      "I will decrease the transmutation rate of the <{2}> effect by <40>% for this transmutation.",
      "I will decrease the transmutation rate of the <{2}> effect by <40>% for this transmutation.",
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 0,
        value: [
          -4000,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "MbBlHWJi",
    pickRatio: 18000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will decrease the transmutation rate of the <{3}> effect by <40>% for this transmutation.",
      "I will decrease the transmutation rate of the <{3}> effect by <40>% for this transmutation.",
      "I will decrease the transmutation rate of the <{3}> effect by <40>% for this transmutation.",
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 0,
        value: [
          -4000,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "K+jvDm0G",
    pickRatio: 18000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will decrease the transmutation rate of the <{4}> effect by <40>% for this transmutation.",
      "I will decrease the transmutation rate of the <{4}> effect by <40>% for this transmutation.",
      "I will decrease the transmutation rate of the <{4}> effect by <40>% for this transmutation.",
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 0,
        value: [
          -4000,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "1Z2+BfwB",
    pickRatio: 10000,
    range: [
      0,
      0
    ],
    descriptions: [
      "In this conversion, the probability of the effect <you choose> being converted will be reduced by <40>%.,,,",
      "In this conversion, the probability of the effect <you selected> being converted will be reduced by <40>%.,,,",
      "In this conversion, we will give you a <40>% chance of the effect <you chose> being converted.,,,"
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          -4000,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "x0InBN1Q",
    pickRatio: 72000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will decrease the transmutation rate of the <{0}> effect by <5>% for all remaining transmutations.",
      "I will decrease the transmutation rate of the <{0}> effect by <5>% for all remaining transmutations.",
      "For all remaining conversions, we will reduce the probability of <{0}> effects being converted by <5>%."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 0,
        value: [
          -500,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "edZNTMQF",
    pickRatio: 72000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will decrease the transmutation rate of the <{1}> effect by <5>% for all remaining transmutations.",
      "I will decrease the transmutation rate of the <{1}> effect by <5>% for all remaining transmutations.",
      "For all remaining conversions, we will reduce the probability of <{1}> effects being converted by <5>%."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 0,
        value: [
          -500,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "BynwLkza",
    pickRatio: 72000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will decrease the transmutation rate of the <{2}> effect by <5>% for all remaining transmutations.",
      "I will decrease the transmutation rate of the <{2}> effect by <5>% for all remaining transmutations.",
      "For all remaining conversions, we will reduce the probability of <{2}> effects being converted by <5>%."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 0,
        value: [
          -500,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "j6tS2JWw",
    pickRatio: 72000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will decrease the transmutation rate of the <{3}> effect by <5>% for all remaining transmutations.",
      "I will decrease the transmutation rate of the <{3}> effect by <5>% for all remaining transmutations.",
      "For all remaining conversions, we will reduce the probability of <{3}> effects being converted by <5>%."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 0,
        value: [
          -500,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "hr4eAi80",
    pickRatio: 72000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will decrease the transmutation rate of the <{4}> effect by <5>% for all remaining transmutations.",
      "I will decrease the transmutation rate of the <{4}> effect by <5>% for all remaining transmutations.",
      "For all remaining conversions, we will reduce the probability of <{4}> effects being converted by <5>%."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 0,
        value: [
          -500,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "q+a6jS9L",
    pickRatio: 40000,
    range: [
      0,
      0
    ],
    descriptions: [
      "In all remaining conversions, the probability of the effect <you choose> being converted will be reduced by <5>%.",
      "For all remaining conversions, the probability of the effect <you selected> being converted will be reduced by <5>%.",
      "In all remaining conversions, we will give you a <5>% chance of the <your chosen> effect being converted."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          -500,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "lk493u0f",
    pickRatio: 18000,
    range: [
      0,
      0
    ],
    descriptions: [
      "In all remaining conversions, the probability of <{0}> effects being converted will be reduced by <10>%.",
      "In all remaining conversions, the probability of <{0}> effects being converted will be reduced by <10>%.",
      "For all remaining conversions, we will reduce the probability of <{0}> effects being converted by <10>%."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 0,
        value: [
          -1000,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "3Z3Yk/vI",
    pickRatio: 18000,
    range: [
      0,
      0
    ],
    descriptions: [
      "In all remaining conversions, the probability of <{1}> effects being converted will be reduced by <10>%.",
      "In all remaining conversions, the probability of <{1}> effects being converted will be reduced by <10>%.",
      "For all remaining conversions, we will reduce the probability of <{1}> effects being converted by <10>%."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 0,
        value: [
          -1000,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "tzLD/hSf",
    pickRatio: 18000,
    range: [
      0,
      0
    ],
    descriptions: [
      "In all remaining conversions, the probability of <{2}> effects being converted will be reduced by <10>%.",
      "In all remaining conversions, the probability of <{2}> effects being converted will be reduced by <10>%.",
      "For all remaining conversions, we will reduce the probability of <{2}> effects being converted by <10>%."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 0,
        value: [
          -1000,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "lIRt7F3t",
    pickRatio: 18000,
    range: [
      0,
      0
    ],
    descriptions: [
      "In all remaining conversions, the probability of <{3}> effects being converted will be reduced by <10>%.",
      "In all remaining conversions, the probability of <{3}> effects being converted will be reduced by <10>%.",
      "For all remaining conversions, we will reduce the probability of <{3}> effects being converted by <10>%."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 0,
        value: [
          -1000,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "rZvPL8BK",
    pickRatio: 18000,
    range: [
      0,
      0
    ],
    descriptions: [
      "In all remaining conversions, the probability of <{4}> effects being converted will be reduced by <10>%.",
      "In all remaining conversions, the probability of <{4}> effects being converted will be reduced by <10>%.",
      "For all remaining conversions, we will reduce the probability of <{4}> effects being converted by <10>%."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 0,
        value: [
          -1000,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "l+rAEPKP",
    pickRatio: 10000,
    range: [
      0,
      0
    ],
    descriptions: [
      "In all remaining conversions, the probability of the effect <you choose> being converted will be reduced by <10>%.",
      "For all remaining conversions, the probability of the effect <you selected> being converted will be reduced by <10>%.",
      "In all remaining conversions, we will give you a <10>% chance of the <your chosen> effect being converted."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          -1000,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "fSLS3rof",
    pickRatio: 63000,
    range: [
      0,
      0
    ],
    descriptions: [
      "This time, I will transmute the <{0}> effect.",
      "This time, I will enhance the <{0}> effect.",
      "This time, I'll transmute the <{0}> effect."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setEnchantTargetAndAmount",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 0,
        value: [
          1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "vKd6ITdI",
    pickRatio: 63000,
    range: [
      0,
      0
    ],
    descriptions: [
      "This time, I will transmute the <{1}> effect.",
      "This time, I will enhance the <{1}> effect.",
      "This time, I'll transmute the <{1}> effect."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setEnchantTargetAndAmount",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 0,
        value: [
          1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "wDSmKG9f",
    pickRatio: 63000,
    range: [
      0,
      0
    ],
    descriptions: [
      "This time, I will transmute the <{2> effect.",
      "This time, I will enhance the <{2}> effect.",
      "This time, I'll transmute the <{2}> effect."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setEnchantTargetAndAmount",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 0,
        value: [
          1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "2nmDq61K",
    pickRatio: 63000,
    range: [
      0,
      0
    ],
    descriptions: [
      "This time, I will transmute the <{3}> effect.",
      "This time, I will enhance the <{3}> effect.",
      "This time, I'll transmute the <{3}> effect."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setEnchantTargetAndAmount",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 0,
        value: [
          1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "hwyOMWSr",
    pickRatio: 63000,
    range: [
      0,
      0
    ],
    descriptions: [
      "This time, I will transmute the <{4}> effect.",
      "This time, I will enhance the <{4}> effect.",
      "This time, I'll transmute the <{4}> effect."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setEnchantTargetAndAmount",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 0,
        value: [
          1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "s+iwb0Rw",
    pickRatio: 35000,
    range: [
      0,
      0
    ],
    descriptions: [
      "This time, I will create an effect <of your choice>.,,,",
      "This time, I will enhance the effect <of your choice>.,,,",
      "This time, we will create the <your chosen> effect.,,,"
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setEnchantTargetAndAmount",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "NhvwhMBa",
    pickRatio: 63000,
    range: [
      0,
      0
    ],
    descriptions: [
      "This time, I can enhance the <{0}> effect by <2> levels, but at the cost of <2> of your remaining attempts.",
      "This time, I will enhance the <{0}> effect by <2> levels, but at the cost of <2> of your remaining attempts.",
      "I will create the <{0}> effect in <2> steps. You will use up <2> opportunities, though.,,,"
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setEnchantTargetAndAmount",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 0,
        value: [
          2,
          0
        ],
        remainTurn: 1
      },
      {
        type: "decreaseTurnLeft",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "LXZ6vfnw",
    pickRatio: 63000,
    range: [
      0,
      0
    ],
    descriptions: [
      "This time, I can enhance the <{1}> effect by <2> levels, but at the cost of <2> of your remaining attempts.",
      "This time, I will enhance the <{1}> effect by <2> levels, but at the cost of <2> of your remaining attempts.",
      "I will create the <{1}> effect in <2> steps. You will use up <2> opportunities, though,,,."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setEnchantTargetAndAmount",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 0,
        value: [
          2,
          0
        ],
        remainTurn: 1
      },
      {
        type: "decreaseTurnLeft",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "1K2B/VuY",
    pickRatio: 63000,
    range: [
      0,
      0
    ],
    descriptions: [
      "This time, I can enhance the <{2}> effect by <2> levels, but at the cost of <2> of your remaining attempts.",
      "This time, I will enhance the <{2}> effect by <2> levels, but at the cost of <2> of your remaining attempts.",
      "I will create the <{2}> effect in <2> steps. You will use up <2> opportunities, though.,,,,"
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setEnchantTargetAndAmount",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 0,
        value: [
          2,
          0
        ],
        remainTurn: 1
      },
      {
        type: "decreaseTurnLeft",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "yHnMY93c",
    pickRatio: 63000,
    range: [
      0,
      0
    ],
    descriptions: [
      "This time, I can enhance the <{3}> effect by <2> levels, but at the cost of <2> of your remaining attempts.",
      "This time, I will enhance the <{3}> effect by <2> levels, but at the cost of <2> of your remaining attempts.",
      "I will create the <{3}> effect in <2> steps. You will use up <2> opportunities, though.,,"
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setEnchantTargetAndAmount",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 0,
        value: [
          2,
          0
        ],
        remainTurn: 1
      },
      {
        type: "decreaseTurnLeft",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "azHB9NEx",
    pickRatio: 63000,
    range: [
      0,
      0
    ],
    descriptions: [
      "This time, I can enhance the <{4}> effect by <2> levels, but at the cost of <2> of your remaining attempts.",
      "This time, I will enhance the <{4}> effect by <2> levels, but at the cost of <2> of your remaining attempts.",
      "I will create the <{4}> effect in <2> steps. You will use up <2> opportunities, though.,,"
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setEnchantTargetAndAmount",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 0,
        value: [
          2,
          0
        ],
        remainTurn: 1
      },
      {
        type: "decreaseTurnLeft",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "CO+S24gs",
    pickRatio: 35000,
    range: [
      0,
      0
    ],
    descriptions: [
      "This time, I can enhance the <selected> effect by <2> levels, but at the cost of <2> of your remaining attempts.",
      "This time, I will enhance the effect <you selected> effect by <2> levels, but at the cost of <2> of your remaining attempts.,,,",
      "I will perform the <2> effect <of your choice>. You will use up <2> opportunities, though.,,,"
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setEnchantTargetAndAmount",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          2,
          0
        ],
        remainTurn: 1
      },
      {
        type: "decreaseTurnLeft",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "t2L3Jkgf",
    pickRatio: 50000,
    range: [
      0,
      0
    ],
    descriptions: [
      "The effect transmuted this time will increase by <2> levels.",
      "The effect transmuted this time will increase by <2> levels.",
      "The effect transmuted this time will increase by <2> levels."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setEnchantIncreaseAmount",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          2,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "85QUcGkJ",
    pickRatio: 50000,
    range: [
      0,
      0
    ],
    descriptions: [
      "The effect created this time will go up <3> levels. However, you will use up <2> opportunities.",
      "The effect created this time will go up <3> levels. Instead, I will use up <2> opportunities.",
      "The effect created this time will go up <3> levels. You will use up <2> opportunities, though."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setEnchantIncreaseAmount",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          3,
          0
        ],
        remainTurn: 1
      },
      {
        type: "decreaseTurnLeft",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "WHIji6kk",
    pickRatio: 50000,
    range: [
      0,
      0
    ],
    descriptions: [
      "This time, I will transmute <2> effects at the same time.",
      "This time, I will transmute <2> effects.",
      "This time, we will create <2> effects at the same time.,,,"
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setEnchantEffectCount",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          2,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "1K1N7q8U",
    pickRatio: 50000,
    range: [
      0,
      0
    ],
    descriptions: [
      "This time, I will be creating <3> effects at the same time. However, you will use up <2> opportunities.,,",
      "This time, I will transmute <3> effects. But it will consume <2> attempts.",
      "This time, we will create <3> effects at the same time. You will use up <2> opportunities, though.,,,"
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setEnchantEffectCount",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          3,
          0
        ],
        remainTurn: 1
      },
      {
        type: "decreaseTurnLeft",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "+l/Vq72z",
    pickRatio: 63000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will increase the great success rate of the <{0}> effect by <100>% for this transmutation.",
      "I will increase the great success rate of the <{0}> effect by <100>% for this transmutation.",
      "I will increase the great success rate of the <{0}> effect by <100>% for this transmutation."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 0,
        value: [
          10000,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "kNwOBIrh",
    pickRatio: 63000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will increase the great success rate of the <{1}> effect by <100>% for this transmutation.",
      "I will increase the great success rate of the <{1}> effect by <100>% for this transmutation.",
      "I will increase the great success rate of the <{1}> effect by <100>% for this transmutation."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 0,
        value: [
          10000,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "5yDNv7tt",
    pickRatio: 63000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will increase the great success rate of the <{2}> effect by <100>% for this transmutation.",
      "I will increase the great success rate of the <{2}> effect by <100>% for this transmutation.",
      "I will increase the great success rate of the <{2}> effect by <100>% for this transmutation."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 0,
        value: [
          10000,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "cWKctr4Y",
    pickRatio: 63000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will increase the great success rate of the <{3}> effect by <100>% for this transmutation.",
      "I will increase the great success rate of the <{3}> effect by <100>% for this transmutation.",
      "I will increase the great success rate of the <{3}> effect by <100>% for this transmutation."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 0,
        value: [
          10000,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "ti89QM08",
    pickRatio: 63000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will increase the great success rate of the <{4}> effect by <100>% for this transmutation.",
      "I will increase the great success rate of the <{4}> effect by <100>% for this transmutation.",
      "I will increase the great success rate of the <{4}> effect by <100>% for this transmutation."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 0,
        value: [
          10000,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "hVCN9GMr",
    pickRatio: 35000,
    range: [
      0,
      0
    ],
    descriptions: [
      "In this training, I will increase the probability of great success for the effect <you choose> by <100>%.",
      "In this training, I will increase the probability of great success for the effect <you chose> by <100>%.",
      "In this training, we will increase the probability of great success for the <you selected> effect by <100>%."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          10000,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "R3VkRa5o",
    pickRatio: 100800,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will increase the great success rate of the <{0}> effect by <7>% for all remaining transmutations.",
      "I will increase the great success rate of the <{0}> effect by <7>% for all remaining transmutations.",
      "I will increase the great success rate of the <{0}> effect by <7>% for all remaining transmutations.",
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 0,
        value: [
          700,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "6CvFcBRK",
    pickRatio: 100800,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will increase the great success rate of the <{1}> effect by <7>% for all remaining transmutations.",
      "I will increase the great success rate of the <{1}> effect by <7>% for all remaining transmutations.",
      "I will increase the great success rate of the <{1}> effect by <7>% for all remaining transmutations.",
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 0,
        value: [
          700,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "Mlj/o8hr",
    pickRatio: 100800,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will increase the great success rate of the <{2}> effect by <7>% for all remaining transmutations.",
      "I will increase the great success rate of the <{2}> effect by <7>% for all remaining transmutations.",
      "I will increase the great success rate of the <{2}> effect by <7>% for all remaining transmutations.",
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 0,
        value: [
          700,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "kZBjTO4d",
    pickRatio: 100800,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will increase the great success rate of the <{3}> effect by <7>% for all remaining transmutations.",
      "I will increase the great success rate of the <{3}> effect by <7>% for all remaining transmutations.",
      "I will increase the great success rate of the <{3}> effect by <7>% for all remaining transmutations.",
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 0,
        value: [
          700,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "GHmzTYc4",
    pickRatio: 100800,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will increase the great success rate of the <{4}> effect by <7>% for all remaining transmutations.",
      "I will increase the great success rate of the <{4}> effect by <7>% for all remaining transmutations.",
      "I will increase the great success rate of the <{4}> effect by <7>% for all remaining transmutations.",
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 0,
        value: [
          700,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "wCFQOzcX",
    pickRatio: 56000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will increase the great success rate of the effect <you selected> by <7>% for all remaining transmutations.",
      "I will increase the great success rate of the effect <you selected> by <7>% for all remaining transmutations.",
      "I will increase the great success rate of the effect <you selected> by <7>% for all remaining transmutations."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          700,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "ce23HTSj",
    pickRatio: 25200,
    range: [
      0,
      0
    ],
    descriptions: [
      "In all remaining combinations, the probability of great success for the <{0}> effect will increase by <15>%.",
      "All remaining combinations will increase the chance of great success for the <{0}> effect by <15>%.",
      "In all remaining combinations, we will increase the chance of great success for the <{0}> effect by <15>%."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 0,
        value: [
          1500,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "kzAzSxCP",
    pickRatio: 25200,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will increase the great success rate of the <{1}> effect by <15>% for all remaining transmutations.",
      "All remaining combinations will increase the chance of great success for the <{1}> effect by <15>%.",
      "I will increase the great success rate of the <{1}> effect by <15>% for all remaining transmutations."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 0,
        value: [
          1500,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "z6p8cFTO",
    pickRatio: 25200,
    range: [
      0,
      0
    ],
    descriptions: [
      "In all remaining combinations, the probability of great success for the <{2}> effect will increase by <15>%.",
      "All remaining combinations will increase the chance of great success for the <{2}> effect by <15>%.",
      "I will increase the great success rate of the <{2}> effect by <15>% for all remaining transmutations."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 0,
        value: [
          1500,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "aGCYXU7Q",
    pickRatio: 25200,
    range: [
      0,
      0
    ],
    descriptions: [
      "In all remaining combinations, the probability of great success for the <{3}> effect will increase by <15>%.",
      "All remaining combinations will increase the chance of great success for the <{3}> effect by <15>%.",
      "I will increase the great success rate of the <{3}> effect by <15>% for all remaining transmutations."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 0,
        value: [
          1500,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "x9KzuUpf",
    pickRatio: 25200,
    range: [
      0,
      0
    ],
    descriptions: [
      "In all remaining combinations, the probability of great success for the <{4}> effect will increase by <15>%.",
      "All remaining combinations will increase the chance of great success for the <{4}> effect by <15>%.",
      "I will increase the great success rate of the <{4}> effect by <15>% for all remaining transmutations."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 0,
        value: [
          1500,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "PkuGa1XV",
    pickRatio: 14000,
    range: [
      0,
      0
    ],
    descriptions: [
      "In all remaining combinations, the probability of great success for the effect of <your choice> will be increased by <15>%.",
      "For all remaining combos, I will increase the chance of great success for the effect <you chose> by <15>%.",
      "I will increase the great success rate of the <you selected> effect by <15>% for all remaining transmutations."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          1500,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "TAVpe+mD",
    pickRatio: 140000,
    range: [
      0,
      0
    ],
    descriptions: [
      "In this training, I will increase the probability of great success for <all> effects by <30>%.",
      "In this training, I will increase the probability of great success for <all> effects by <30>%.",
      "I will increase the great success rate of <all> effects by <30>% for this transmutation."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "random",
        targetCondition: 0,
        targetCount: 5,
        ratio: 0,
        value: [
          3000,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "NTMBgMo+",
    pickRatio: 35000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will increase the great success rate for <all> effects by <60>% for this transmutation.",
      "I will increase the great success rate for <all> effects by <60>% for this transmutation.",
      "I will increase the great success rate for <all> effects by <60>% for this transmutation.,,,",
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "random",
        targetCondition: 0,
        targetCount: 5,
        ratio: 0,
        value: [
          6000,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "SYHl4YT5",
    pickRatio: 140000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will increase the great success rate of <all> effects by <5>% for all remaining transmutations.",
      "In all remaining combinations, I will increase the probability of great success for <all> effects by <5>%.",
      "In all remaining combinations, we will increase the probability of great success for <all> effects by <5>%."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "random",
        targetCondition: 0,
        targetCount: 5,
        ratio: 0,
        value: [
          500,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "aX3p4cvY",
    pickRatio: 35000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will increase the great success rate of <all> effects by <10>% for all remaining transmutations.",
      "In all remaining combinations, I will increase the probability of great success for <all> effects by <10>%.",
      "In all remaining combinations, we will increase the probability of great success for <all> effects by <10>%."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "random",
        targetCondition: 0,
        targetCount: 5,
        ratio: 0,
        value: [
          1000,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "i77mOeM9",
    pickRatio: 25200,
    range: [
      0,
      0
    ],
    descriptions: [
      "<{0}> Increases the level of the effect by [<-1>~<+2>].",
      "I will increase the level of the <{0}> effect by one of [<-1> to <+2>].",
      "I will increase the level of the <{0}> effect by [<-1> to <+2>]."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetRanged",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 0,
        value: [
          -1,
          2
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "/DTt9Jyz",
    pickRatio: 25200,
    range: [
      0,
      0
    ],
    descriptions: [
      "<{1}> Increases the level of the effect by [<-1>~<+2>].",
      "I will increase the level of the <{1}> effect by one of [<-1> to <+2>].",
      "I will increase the level of the <{1}> effect by [<-1> to <+2>]."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetRanged",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 0,
        value: [
          -1,
          2
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "jIyKQ1yu",
    pickRatio: 25200,
    range: [
      0,
      0
    ],
    descriptions: [
      "<{2}> Increases the level of the effect by [<-1>~<+2>].",
      "I will increase the level of the <{2}> effect by one of [<-1> to <+2>].",
      "I will increase the level of the <{2}> effect by [<-1> to <+2>]."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetRanged",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 0,
        value: [
          -1,
          2
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "thfMDeCV",
    pickRatio: 25200,
    range: [
      0,
      0
    ],
    descriptions: [
      "<{3}> Increases the level of the effect by [<-1>~<+2>].",
      "I will increase the level of the <{3}> effect by one of [<-1> to <+2>].",
      "I will increase the level of the <{3}> effect by [<-1> to <+2>]."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetRanged",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 0,
        value: [
          -1,
          2
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "b+n5sZX3",
    pickRatio: 25200,
    range: [
      0,
      0
    ],
    descriptions: [
      "<{4}> Increases the level of the effect by [<-1>~<+2>].",
      "I will increase the level of the <{4}> effect by one of [<-1> to <+2>].",
      "I will increase the level of the <{4}> effect by [<-1> to <+2>]."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetRanged",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 0,
        value: [
          -1,
          2
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "8Syfgx/g",
    pickRatio: 14000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will increase the level of the effect <you choose> by [<-1> to <+2>].",
      "I will increase the level of the effect <of your choice> by one of [<-1> to <+2>].",
      "I will increase the level of the effect <you chose> by [<-1> to <+2>]."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetRanged",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          -1,
          2
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "7Q1vxaVt",
    pickRatio: 100800,
    range: [
      0,
      0
    ],
    descriptions: [
      "I'll increase the level of the <{0}> effect by [<-2> to <+2>].",
      "I'll increase the level of the <{0}> effect by one value between [<-2> to <+2>].",
      "Let me increase the level of the <{0}> effect by [<-2> - <+2>]."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetRanged",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 0,
        value: [
          -2,
          2
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "1rkJc2I8",
    pickRatio: 100800,
    range: [
      0,
      0
    ],
    descriptions: [
      "I'll increase the level of the <{1}> effect by [<-2> to <+2>].",
      "I'll increase the level of the <{1}> effect by one value between [<-2> to <+2>].",
      "Let me increase the level of the <{1}> effect by [<-2> to <+2>]."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetRanged",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 0,
        value: [
          -2,
          2
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "hQ55Zl2K",
    pickRatio: 100800,
    range: [
      0,
      0
    ],
    descriptions: [
      "I'll increase the level of the <{2}> effect by [<-2> to <+2>].",
      "I'll increase the level of the <{2}> effect by one value between [<-2> to <+2>].",
      "Let me increase the level of the <{2}> effect by [<-2> to <+2>]."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetRanged",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 0,
        value: [
          -2,
          2
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "Z7YnoWEJ",
    pickRatio: 100800,
    range: [
      0,
      0
    ],
    descriptions: [
      "I'll increase the level of the <{3}> effect by [<-2> to <+2>].",
      "I'll increase the level of the <{3}> effect by one value between [<-2> to <+2>].",
      "Let me increase the level of the <{3}> effect by [<-2> to <+2>]."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetRanged",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 0,
        value: [
          -2,
          2
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "Xan/BMLi",
    pickRatio: 100800,
    range: [
      0,
      0
    ],
    descriptions: [
      "I'll increase the level of the <{4}> effect by [<-2> - <+2>].",
      "I'll increase the level of the <{4}> effect by one value between [<-2> - <+2>].",
      "Let me increase the level of the <{4}> effect by [<-2> - <+2>]."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetRanged",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 0,
        value: [
          -2,
          2
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "79o+kxjm",
    pickRatio: 56000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will increase the level of the effect <you choose> by [<-2> to <+2>].",
      "I'll raise the level of the effect <of your choice> by one value between [<-2> to <+2>].,,,",
      "Let me inscrease the level of the effect <you selected> by [<-2> to <+2>]."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetRanged",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          -2,
          2
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "JGBDGHjm",
    pickRatio: 134640,
    range: [
      0,
      0
    ],
    descriptions: [
      "I'll increase the level of the <{0}> effect by <1>. It will have a <25>% chance of success.",
      "I will increase the level of the <{0}> effect by <1>. The success rate will be <25>%.",
      "I'll increase the level of the <{0}> effect by <1>. It has a <25>% of succeeding."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 2500,
        value: [
          1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "5wrsX6h6",
    pickRatio: 134640,
    range: [
      0,
      0
    ],
    descriptions: [
      "I'll increase the level of the <{1}> effect by <1>. It will have a <25>% chance of success.",
      "I will increase the level of the <{1}> effect by <1>. The success rate will be <25>%.",
      "I'll increase the level of the <{1}> effect by <1>. It has a <25>% of succeeding."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 2500,
        value: [
          1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "5byV02q9",
    pickRatio: 134640,
    range: [
      0,
      0
    ],
    descriptions: [
      "I'll increase the level of the <{2}> effect by <1>. It will have a <25>% chance of success.",
      "I will increase the level of the <{2}> effect by <1>. The success rate will be <25>%.",
      "I'll increase the level of the <{2}> effect by <1>. It has a <25>% of succeeding."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 2500,
        value: [
          1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "a1icfFTU",
    pickRatio: 134640,
    range: [
      0,
      0
    ],
    descriptions: [
      "I'll increase the level of the <{3}> effect by <1>. It will have a <25>% chance of success.",
      "I will increase the level of the <{3}> effect by <1>. The success rate will be <25>%.",
      "I'll increase the level of the <{3}> effect by <1>. It has a <25>% of succeeding."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 2500,
        value: [
          1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "71gjGPn/",
    pickRatio: 134640,
    range: [
      0,
      0
    ],
    descriptions: [
      "I'll increase the level of the <{4}> effect by <1>. It will have a <25>% chance of success.",
      "I will increase the level of the <{4}> effect by <1>. The success rate will be <25>%.",
      "I'll increase the level of the <{4}> effect by <1>. It has a <25>% of succeeding."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 2500,
        value: [
          1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "X0RAe7B2",
    pickRatio: 74800,
    range: [
      0,
      0
    ],
    descriptions: [
      "I'll increase the level of the effect <you selected> effect by <1>. It will have a <25>% chance of success.",
      "I will increase the level of the effect <you chose> by <1>. The success rate will be <25>%.",
      "I'll increase the level of the <selected> effect by <1>. It has a <25>% of succeeding."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 2500,
        value: [
          1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "y4Malxk+",
    pickRatio: 33660,
    range: [
      0,
      0
    ],
    descriptions: [
      "I'll increase the level of the <{0}> effect by <1>. It will have a <50>% chance of success.",
      "I will increase the level of the <{0}> effect by <1>. The success rate will be <50>%.",
      "I'll increase the level of the <{0}> effect by 1. It has a <50>% of succeeding."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 5000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "BkPQwoCV",
    pickRatio: 33660,
    range: [
      0,
      0
    ],
    descriptions: [
      "I'll increase the level of the <{1}> effect by <1>. It will have a <50>% chance of success.",
      "I will increase the level of the <{1}> effect by <1>. The success rate will be <50>%.",
      "I'll increase the level of the <{1}> effect by 1. It has a <50>% of succeeding."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 5000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "/SexNoGC",
    pickRatio: 33660,
    range: [
      0,
      0
    ],
    descriptions: [
      "I'll increase the level of the <{2}> effect by <1>. It will have a <50>% chance of success.",
      "I will increase the level of the <{2}> effect by <1>. The success rate will be <50>%.",
      "I'll increase the level of the <{2}> effect by 1. It has a <50>% of succeeding."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 5000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "Ls8paxJO",
    pickRatio: 33660,
    range: [
      0,
      0
    ],
    descriptions: [
      "I'll increase the level of the <{3}> effect by <1>. It will have a <50>% chance of success.",
      "I will increase the level of the <{3}> effect by <1>. The success rate will be <50>%.",
      "I'll increase the level of the <{3}> effect by 1. It has a <50>% of succeeding."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 5000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "6ccueETl",
    pickRatio: 33660,
    range: [
      0,
      0
    ],
    descriptions: [
      "I'll increase the level of the <{4}> effect by <1>. It will have a <50>% chance of success.",
      "I will increase the level of the <{4}> effect by <1>. The success rate will be <50>%.",
      "I'll increase the level of the <{4}> effect by 1. It has a <50>% of succeeding."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 5000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "KEO802/y",
    pickRatio: 18700,
    range: [
      0,
      0
    ],
    descriptions: [
      "I'll increase the level of the effect <you selected> effect by <1>. It will have a <50>% chance of success.",
      "I will raise the level of the effect <you selected> by <1>. The success rate is <50>%.,,,,",
      "Let’s raise the level of the effect <you chose> by <1>. The probability of success is <50>%."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 5000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "bg2DjkX7",
    pickRatio: 165000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will increase a <random> effect by 1 level. Let's see which effect it will be.",
      "I will increase 1 <random> effect by <1> level.",
      "I'll increase 1 <random> effect by <1> level."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "random",
        targetCondition: 0,
        targetCount: 1,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "vobAMurl",
    pickRatio: 30000,
    range: [
      1,
      5
    ],
    descriptions: [
      "I'll change the level of the <{0}> effect to a value between [<1>-<2>].",
      "I'll change the level of the <{0}> effect to a value between [<1>-<2>].",
      "Let's change the level of the <{0}> effect to a value between [<1>-<2>]."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setValueRanged",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 0,
        value: [
          1,
          2
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "we9uip6Z",
    pickRatio: 30000,
    range: [
      1,
      5
    ],
    descriptions: [
      "I'll change the level of the <{1}> effect to a value between [<1>-<2>].",
      "I'll change the level of the <{1}> effect to a value between [<1>-<2>].",
      "Let's change the level of the <{1}> effect to a value between [<1>-<2>]."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setValueRanged",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 0,
        value: [
          1,
          2
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "QhCcZr3A",
    pickRatio: 30000,
    range: [
      1,
      5
    ],
    descriptions: [
      "I'll change the level of the <{2}> effect to a value between [<1>-<2>].",
      "I'll change the level of the <{2}> effect to a value between [<1>-<2>].",
      "Let's change the level of the <{2}> effect to a value between [<1>-<2>]."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setValueRanged",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 0,
        value: [
          1,
          2
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "oGqnMU5h",
    pickRatio: 30000,
    range: [
      1,
      5
    ],
    descriptions: [
      "I'll change the level of the <{3}> effect to a value between [<1>-<2>].",
      "I'll change the level of the <{3}> effect to a value between [<1>-<2>].",
      "Let's change the level of the <{3}> effect to a value between [<1>-<2>]."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setValueRanged",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 0,
        value: [
          1,
          2
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "Vh5lCVWD",
    pickRatio: 30000,
    range: [
      1,
      5
    ],
    descriptions: [
      "I'll change the level of the <{4}> effect to a value between [<1>-<2>].",
      "I'll change the level of the <{4}> effect to a value between [<1>-<2>].",
      "Let's change the level of the <{4}> effect to a value between [<1>-<2>]."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setValueRanged",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 0,
        value: [
          1,
          2
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "byT3AP1L",
    pickRatio: 30000,
    range: [
      5,
      9
    ],
    descriptions: [
      "I'll change the level of the <{0}> effect to one of [<2>~<3>].",
      "I will change the level of the <{0}> effect to one of [<2>~<3>].",
      "Let's change the level of the <{0}> effect to one of [<2>~<3>]."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setValueRanged",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 0,
        value: [
          2,
          3
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "J8w8OZSR",
    pickRatio: 30000,
    range: [
      5,
      9
    ],
    descriptions: [
      "I'll change the level of the <{1}> effect to one of [<2>~<3>].",
      "I will change the level of the <{1}> effect to one of [<2>~<3>].",
      "Let's change the level of the <{1}> effect to one of [<2>~<3>]."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setValueRanged",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 0,
        value: [
          2,
          3
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "A8NeKsMb",
    pickRatio: 30000,
    range: [
      5,
      9
    ],
    descriptions: [
      "I'll change the level of the <{2}> effect to one of [<2>~<3>].",
      "I will change the level of the <{2}> effect to one of [<2>~<3>].",
      "Let's change the level of the <{2}> effect to one of [<2>~<3>]."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setValueRanged",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 0,
        value: [
          2,
          3
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "9suFjJG6",
    pickRatio: 30000,
    range: [
      5,
      9
    ],
    descriptions: [
      "I'll change the level of the <{3}> effect to one of [<2>~<3>].",
      "I will change the level of the <{3}> effect to one of [<2>~<3>].",
      "Let's change the level of the <{3}> effect to one of [<2>~<3>]."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setValueRanged",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 0,
        value: [
          2,
          3
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "50L3W9SX",
    pickRatio: 30000,
    range: [
      5,
      9
    ],
    descriptions: [
      "I'll change the level of the <{4}> effect to one of [<2>~<3>].",
      "I will change the level of the <{4}> effect to one of [<2>~<3>].",
      "Let's change the level of the <{4}> effect to one of [<2>~<3>]."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setValueRanged",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 0,
        value: [
          2,
          3
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "047momkZ",
    pickRatio: 30000,
    range: [
      9,
      13
    ],
    descriptions: [
      "I'll change the level of the <{0}> effect to one of [<3>~<4>].",
      "I will change the level of the <{0}> effect to one of [<3>~<4>].",
      "Let's change the level of the <{0}> effect to one of [<3>~<4>]."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setValueRanged",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 0,
        value: [
          3,
          4
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "KZoUmp2O",
    pickRatio: 30000,
    range: [
      9,
      13
    ],
    descriptions: [
      "I'll change the level of the <{1}> effect to one of [<3>~<4>].",
      "I will change the level of the <{1}> effect to one of [<3>~<4>].",
      "Let's change the level of the <{1}> effect to one of [<3>~<4>]."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setValueRanged",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 0,
        value: [
          3,
          4
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "mLkomdnr",
    pickRatio: 30000,
    range: [
      9,
      13
    ],
    descriptions: [
      "I'll change the level of the <{2}> effect to one of [<3>~<4>].",
      "I will change the level of the <{2}> effect to one of [<3>~<4>].",
      "Let's change the level of the <{2}> effect to one of [<3>~<4>]."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setValueRanged",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 0,
        value: [
          3,
          4
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "i194sjct",
    pickRatio: 30000,
    range: [
      9,
      13
    ],
    descriptions: [
      "I'll change the level of the <{3}> effect to one of [<3>~<4>].",
      "I will change the level of the <{3}> effect to one of [<3>~<4>].",
      "Let's change the level of the <{3}> effect to one of [<3>~<4>]."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setValueRanged",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 0,
        value: [
          3,
          4
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "2A+gt/cN",
    pickRatio: 30000,
    range: [
      9,
      13
    ],
    descriptions: [
      "I'll change the level of the <{4}> effect to one of [<3>~<4>].",
      "I will change the level of the <{4}> effect to one of [<3>~<4>].",
      "Let's change the level of the <{4}> effect to one of [<3>~<4>]."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setValueRanged",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 0,
        value: [
          3,
          4
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "JYral2nj",
    pickRatio: 30000,
    range: [
      13,
      99
    ],
    descriptions: [
      "I'll change the level of the <{0}> effect to one of [<5>~<6>].",
      "I will change the level of the <{0}> effect to one of [<5>~<6>].",
      "Let's change the level of the <{0}> effect to one of [<5>~<6>]."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setValueRanged",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 0,
        value: [
          5,
          6
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "kN9lY3qv",
    pickRatio: 30000,
    range: [
      13,
      99
    ],
    descriptions: [
      "I'll change the level of the <{1}> effect to one of [<5>~<6>].",
      "I will change the level of the <{1}> effect to one of [<5>~<6>].",
      "Let's change the level of the <{1}> effect to one of [<5>~<6>]."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setValueRanged",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 0,
        value: [
          5,
          6
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "JFixwpK0",
    pickRatio: 30000,
    range: [
      13,
      99
    ],
    descriptions: [
      "I'll change the level of the <{2}> effect to one of [<5>~<6>].",
      "I will change the level of the <{2}> effect to one of [<5>~<6>].",
      "Let's change the level of the <{2}> effect to one of [<5>~<6>]."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setValueRanged",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 0,
        value: [
          5,
          6
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "TmqN4vVw",
    pickRatio: 30000,
    range: [
      13,
      99
    ],
    descriptions: [
      "I'll change the level of the <{3}> effect to one of [<5>~<6>].",
      "I will change the level of the <{3}> effect to one of [<5>~<6>].",
      "Let's change the level of the <{3}> effect to one of [<5>~<6>]."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setValueRanged",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 0,
        value: [
          5,
          6
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "oTBcM6oi",
    pickRatio: 30000,
    range: [
      13,
      99
    ],
    descriptions: [
      "I'll change the level of the <{4}> effect to one of [<5>~<6>].",
      "I will change the level of the <{4}> effect to one of [<5>~<6>].",
      "Let's change the level of the <{4}> effect to one of [<5>~<6>]."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setValueRanged",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 0,
        value: [
          5,
          6
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "SWqTv7r4",
    pickRatio: 6000,
    range: [
      5,
      99
    ],
    descriptions: [
      "I will increase the level of the <{0}> effect by <1>. However, the level of the <{1}> effect will decrease by <1>.",
      "I'll increase the level of the <{0}> effect by <1>. But the level of the <{1}> effect will decrease by <1>.",
      "The level of the <{0}> effect will increase by <1>. In exchange, the level of the <{1}> effect will be decreased by <1>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 10000,
        value: [
          -1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "EjhjzT/R",
    pickRatio: 6000,
    range: [
      5,
      99
    ],
    descriptions: [
      "I will increase the level of the <{0}> effect by <1>. However, the level of the <{2}> effect will decrease by <1>.",
      "I'll increase the level of the <{0}> effect by <1>. But the level of the <{2}> effect will decrease by <1>.",
      "The level of the <{0}> effect will increase by <1>. In exchange, the level of the <{2}> effect will be decreased by <1>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 10000,
        value: [
          -1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "+iVcsDZw",
    pickRatio: 6000,
    range: [
      5,
      99
    ],
    descriptions: [
      "I will increase the level of the <{3}> effect by <1>. However, the level of the <{3}> effect will decrease by <1>.",
      "I'll increase the level of the <{3}> effect by <1>. But the level of the <{3}> effect will decrease by <1>.",
      "The level of the <{0}> effect will increase by <1>. In exchange, the level of the <{3}> effect will be decreased by <1>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 10000,
        value: [
          -1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "AdyeXApQ",
    pickRatio: 6000,
    range: [
      5,
      99
    ],
    descriptions: [
      "I will increase the level of the <{0}> effect by <1>. However, the level of the <{4}> effect will decrease by <1>.",
      "I'll increase the level of the <{0}> effect by <1>. But the level of the <{4}> effect will decrease by <1>.",
      "The level of the <{0}> effect will increase by <1>. In exchange, the level of the <{4}> effect will be decreased by <1>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 10000,
        value: [
          -1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "B3RZYuEw",
    pickRatio: 6000,
    range: [
      5,
      99
    ],
    descriptions: [
      "I will increase the level of the <{1}> effect by <1>. However, the level of the <{1}> effect will decrease by <1>.",
      "I'll increase the level of the <{1}> effect by <1>. But the level of the <{1}> effect will decrease by <1>.",
      "The level of the <{1}> effect will increase by <1>. In exchange, the level of the <{1}> effect will be decreased by <1>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 10000,
        value: [
          -1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "K/tErtHA",
    pickRatio: 6000,
    range: [
      5,
      99
    ],
    descriptions: [
      "I will increase the level of the <{2}> effect by <1>. However, the level of the <{1}> effect will decrease by <1>.",
      "I'll increase the level of the <{2}> effect by <1>. But the level of the <{1}> effect will decrease by <1>.",
      "The level of the <{2}> effect will increase by <1>. In exchange, the level of the <{1}> effect will be decreased by <1>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 10000,
        value: [
          -1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "vWruBgyn",
    pickRatio: 6000,
    range: [
      5,
      99
    ],
    descriptions: [
      "I will increase the level of the <{3}> effect by <1>. However, the level of the <{1}> effect will decrease by <1>.",
      "I'll increase the level of the <{3}> effect by <1>. But the level of the <{1}> effect will decrease by <1>.",
      "The level of the <{3}> effect will increase by <1>. In exchange, the level of the <{1}> effect will be decreased by <1>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 10000,
        value: [
          -1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "gUpUns5p",
    pickRatio: 6000,
    range: [
      5,
      99
    ],
    descriptions: [
      "I will increase the level of the <{4}> effect by <1>. However, the level of the <{1}> effect will decrease by <1>.",
      "I'll increase the level of the <{4}> effect by <1>. But the level of the <{1}> effect will decrease by <1>.",
      "The level of the <{4}> effect will increase by <1>. In exchange, the level of the <{1}> effect will be decreased by <1>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 10000,
        value: [
          -1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "rSbiyCFy",
    pickRatio: 6000,
    range: [
      5,
      99
    ],
    descriptions: [
      "I will increase the level of the <{2}> effect by <1>. However, the level of the <{0}> effect will decrease by <1>.",
      "I'll increase the level of the <{2}> effect by <1>. But the level of the <{0}> effect will decrease by <1>.",
      "The level of the <{2}> effect will increase by <1>. In exchange, the level of the <{0}> effect will be decreased by <1>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 10000,
        value: [
          -1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "FCQnXKMQ",
    pickRatio: 6000,
    range: [
      5,
      99
    ],
    descriptions: [
      "I will increase the level of the <{2}> effect by <1>. However, the level of the <{1}> effect will decrease by <1>.",
      "I'll increase the level of the <{2}> effect by <1>. But the level of the <{1}> effect will decrease by <1>.",
      "The level of the <{2}> effect will increase by <1>. In exchange, the level of the <{1}> effect will be decreased by <1>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 10000,
        value: [
          -1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "/uXHQ7CZ",
    pickRatio: 6000,
    range: [
      5,
      99
    ],
    descriptions: [
      "I will increase the level of the <{2}> effect by <1>. However, the level of the <{3}> effect will decrease by <1>.",
      "I'll increase the level of the <{2}> effect by <1>. But the level of the <{3}> effect will decrease by <1>.",
      "The level of the <{2}> effect will increase by <1>. In exchange, the level of the <{3}> effect will be decreased by <1>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 10000,
        value: [
          -1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "zUk2JDxz",
    pickRatio: 6000,
    range: [
      5,
      99
    ],
    descriptions: [
      "I will increase the level of the <{2}> effect by <1>. However, the level of the <{4}> effect will decrease by <1>.",
      "I'll increase the level of the <{2}> effect by <1>. But the level of the <{4}> effect will decrease by <1>.",
      "The level of the <{2}> effect will increase by <1>. In exchange, the level of the <{4}> effect will be decreased by <1>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 10000,
        value: [
          -1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "ghQ9VjHG",
    pickRatio: 6000,
    range: [
      5,
      99
    ],
    descriptions: [
      "I will increase the level of the <{3}> effect by <1>. However, the level of the <{0}> effect will decrease by <1>.",
      "I'll increase the level of the <{3}> effect by <1>. But the level of the <{0}> effect will decrease by <1>.",
      "The level of the <{3}> effect will increase by <1>. In exchange, the level of the <{0}> effect will be decreased by <1>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 10000,
        value: [
          -1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "JvY8DuIr",
    pickRatio: 6000,
    range: [
      5,
      99
    ],
    descriptions: [
      "I will increase the level of the <{3}> effect by <1>. However, the level of the <{1}> effect will decrease by <1>.",
      "I'll increase the level of the <{3}> effect by <1>. But the level of the <{1}> effect will decrease by <1>.",
      "The level of the <{3}> effect will increase by <1>. In exchange, the level of the <{1}> effect will be decreased by <1>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 10000,
        value: [
          -1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "gWeuX02U",
    pickRatio: 6000,
    range: [
      5,
      99
    ],
    descriptions: [
      "I will increase the level of the <{3}> effect by <1>. However, the level of the <{2}> effect will decrease by <1>.",
      "I'll increase the level of the <{3}> effect by <1>. But the level of the <{2}> effect will decrease by <1>.",
      "The level of the <{3}> effect will increase by <1>. In exchange, the level of the <{2}> effect will be decreased by <1>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 10000,
        value: [
          -1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "VK+hUWmP",
    pickRatio: 6000,
    range: [
      5,
      99
    ],
    descriptions: [
      "I will increase the level of the <{3}> effect by <1>. However, the level of the <{4}> effect will decrease by <1>.",
      "I'll increase the level of the <{3}> effect by <1>. But the level of the <{4}> effect will decrease by <1>.",
      "The level of the <{3}> effect will increase by <1>. In exchange, the level of the <{4}> effect will be decreased by <1>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 10000,
        value: [
          -1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "2/6UeeTT",
    pickRatio: 6000,
    range: [
      5,
      99
    ],
    descriptions: [
      "I will increase the level of the <{4}> effect by <1>. However, the level of the <{0}> effect will decrease by <1>.",
      "I'll increase the level of the <{4}> effect by <1>. But the level of the <{0}> effect will decrease by <1>.",
      "The level of the <{4}> effect will increase by <1>. In exchange, the level of the <{0}> effect will be decreased by <1>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 10000,
        value: [
          -1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "qPVfMKLF",
    pickRatio: 6000,
    range: [
      5,
      99
    ],
    descriptions: [
      "I will increase the level of the <{4}> effect by <1>. However, the level of the <{1}> effect will decrease by <1>.",
      "I'll increase the level of the <{4}> effect by <1>. But the level of the <{1}> effect will decrease by <1>.",
      "The level of the <{4}> effect will increase by <1>. In exchange, the level of the <{1}> effect will be decreased by <1>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 10000,
        value: [
          -1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "ajWpy2vD",
    pickRatio: 6000,
    range: [
      5,
      99
    ],
    descriptions: [
      "I will increase the level of the <{4}> effect by <1>. However, the level of the <{2}> effect will decrease by <1>.",
      "I'll increase the level of the <{4}> effect by <1>. But the level of the <{2}> effect will decrease by <1>.",
      "The level of the <{4}> effect will increase by <1>. In exchange, the level of the <{2}> effect will be decreased by <1>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 10000,
        value: [
          -1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "2/hpD+Ht",
    pickRatio: 6000,
    range: [
      5,
      99
    ],
    descriptions: [
      "I will increase the level of the <{4}> effect by <1>. However, the level of the <{3}> effect will decrease by <1>.",
      "I'll increase the level of the <{4}> effect by <1>. But the level of the <{3}> effect will decrease by <1>.",
      "The level of the <{4}> effect will increase by <1>. In exchange, the level of the <{3}> effect will be decreased by <1>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 10000,
        value: [
          -1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "a+2FNqIn",
    pickRatio: 24000,
    range: [
      5,
      99
    ],
    descriptions: [
      "I will increase the level of the <{0}> effect by <1>. However, the level of the <{1}> effect will decrease by <2>.",
      "I'll increase the level of the <{0}> effect by <1>. But the level of the <{1}> effect will decrease by <2>.",
      "The level of the <{0}> effect will increase by <1>. In exchange, the level of the <{1}> effect will be decreased by <2>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 10000,
        value: [
          -2,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "SF3Qb/e0",
    pickRatio: 24000,
    range: [
      5,
      99
    ],
    descriptions: [
      "I will increase the level of the <{0}> effect by <1>. However, the level of the <{2}> effect will decrease by <2>.",
      "I'll increase the level of the <{0}> effect by <1>. But the level of the <{2}> effect will decrease by <2>.",
      "The level of the <{0}> effect will increase by <1>. In exchange, the level of the <{2}> effect will be decreased by <2>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 10000,
        value: [
          -2,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "DXW+hvxI",
    pickRatio: 24000,
    range: [
      5,
      99
    ],
    descriptions: [
      "I will increase the level of the <{0}> effect by <1>. However, the level of the <{3}> effect will decrease by <2>.",
      "I'll increase the level of the <{0}> effect by <1>. But the level of the <{3}> effect will decrease by <2>.",
      "The level of the <{0}> effect will increase by <1>. In exchange, the level of the <{3}> effect will be decreased by <2>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 10000,
        value: [
          -2,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "ISgAfJ/U",
    pickRatio: 24000,
    range: [
      5,
      99
    ],
    descriptions: [
      "I will increase the level of the <{0}> effect by <1>. However, the level of the <{4}> effect will decrease by <2>.",
      "I'll increase the level of the <{0}> effect by <1>. But the level of the <{4}> effect will decrease by <2>.",
      "The level of the <{0}> effect will increase by <1>. In exchange, the level of the <{4}> effect will be decreased by <2>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 10000,
        value: [
          -2,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "jwKH/tJQ",
    pickRatio: 24000,
    range: [
      5,
      99
    ],
    descriptions: [
      "I will increase the level of the <{0}> effect by <1>. However, the level of the <{1}> effect will decrease by <2>.",
      "I'll increase the level of the <{0}> effect by <1>. But the level of the <{1}> effect will decrease by <2>.",
      "The level of the <{0}> effect will increase by <1>. In exchange, the level of the <{1}> effect will be decreased by <2>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 10000,
        value: [
          -2,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "ha0RNM2S",
    pickRatio: 24000,
    range: [
      5,
      99
    ],
    descriptions: [
      "I will increase the level of the <{2}> effect by <1>. However, the level of the <{1}> effect will decrease by <2>.",
      "I'll increase the level of the <{2}> effect by <1>. But the level of the <{1}> effect will decrease by <2>.",
      "The level of the <{2}> effect will increase by <1>. In exchange, the level of the <{1}> effect will be decreased by <2>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 10000,
        value: [
          -2,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "UBH1OOAB",
    pickRatio: 24000,
    range: [
      5,
      99
    ],
    descriptions: [
      "I will increase the level of the <{3}> effect by <1>. However, the level of the <{1}> effect will decrease by <2>.",
      "I'll increase the level of the <{3}> effect by <1>. But the level of the <{1}> effect will decrease by <2>.",
      "The level of the <{3}> effect will increase by <1>. In exchange, the level of the <{1}> effect will be decreased by <2>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 10000,
        value: [
          -2,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "9lgXNOiC",
    pickRatio: 24000,
    range: [
      5,
      99
    ],
    descriptions: [
      "I will increase the level of the <{4}> effect by <1>. However, the level of the <{1}> effect will decrease by <2>.",
      "I'll increase the level of the <{4}> effect by <1>. But the level of the <{1}> effect will decrease by <2>.",
      "The level of the <{4}> effect will increase by <1>. In exchange, the level of the <{1}> effect will be decreased by <2>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 10000,
        value: [
          -2,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "rdyz4dIp",
    pickRatio: 24000,
    range: [
      5,
      99
    ],
    descriptions: [
      "I will increase the level of the <{2}> effect by <1>. However, the level of the <{0}> effect will decrease by <2>.",
      "I'll increase the level of the <{2}> effect by <1>. But the level of the <{0}> effect will decrease by <2>.",
      "The level of the <{2}> effect will increase by <1>. In exchange, the level of the <{0}> effect will be decreased by <2>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 10000,
        value: [
          -2,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "ort3ppx9",
    pickRatio: 24000,
    range: [
      5,
      99
    ],
    descriptions: [
      "I will increase the level of the <{2}> effect by <1>. However, the level of the <{1}> effect will decrease by <2>.",
      "I'll increase the level of the <{2}> effect by <1>. But the level of the <{1}> effect will decrease by <2>.",
      "The level of the <{2}> effect will increase by <1>. In exchange, the level of the <{1}> effect will be decreased by <2>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 10000,
        value: [
          -2,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "8/+7Jihl",
    pickRatio: 24000,
    range: [
      5,
      99
    ],
    descriptions: [
      "I will increase the level of the <{2}> effect by <1>. However, the level of the <{3}> effect will decrease by <2>.",
      "I'll increase the level of the <{2}> effect by <1>. But the level of the <{3}> effect will decrease by <2>.",
      "The level of the <{2}> effect will increase by <1>. In exchange, the level of the <{3}> effect will be decreased by <2>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 10000,
        value: [
          -2,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "grVgy2EL",
    pickRatio: 24000,
    range: [
      5,
      99
    ],
    descriptions: [
      "I will increase the level of the <{2}> effect by <1>. However, the level of the <{4}> effect will decrease by <2>.",
      "I'll increase the level of the <{2}> effect by <1>. But the level of the <{4}> effect will decrease by <2>.",
      "The level of the <{2}> effect will increase by <1>. In exchange, the level of the <{4}> effect will be decreased by <2>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 10000,
        value: [
          -2,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "tCtjuNbF",
    pickRatio: 24000,
    range: [
      5,
      99
    ],
    descriptions: [
      "I will increase the level of the <{3}> effect by <1>. However, the level of the <{0}> effect will decrease by <2>.",
      "I'll increase the level of the <{3}> effect by <1>. But the level of the <{0}> effect will decrease by <2>.",
      "The level of the <{3}> effect will increase by <1>. In exchange, the level of the <{0}> effect will be decreased by <2>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 10000,
        value: [
          -2,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "KvsOIpFI",
    pickRatio: 24000,
    range: [
      5,
      99
    ],
    descriptions: [
      "I will increase the level of the <{3}> effect by <1>. However, the level of the <{1}> effect will decrease by <2>.",
      "I'll increase the level of the <{3}> effect by <1>. But the level of the <{1}> effect will decrease by <2>.",
      "The level of the <{3}> effect will increase by <1>. In exchange, the level of the <{1}> effect will be decreased by <2>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 10000,
        value: [
          -2,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "MbJQIQxy",
    pickRatio: 24000,
    range: [
      5,
      99
    ],
    descriptions: [
      "I will increase the level of the <{3}> effect by <1>. However, the level of the <{2}> effect will decrease by <2>.",
      "I'll increase the level of the <{3}> effect by <1>. But the level of the <{2}> effect will decrease by <2>.",
      "The level of the <{3}> effect will increase by <1>. In exchange, the level of the <{2}> effect will be decreased by <2>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 10000,
        value: [
          -2,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "TF99NWdH",
    pickRatio: 24000,
    range: [
      5,
      99
    ],
    descriptions: [
      "I will increase the level of the <{3}> effect by <1>. However, the level of the <{4}> effect will decrease by <2>.",
      "I'll increase the level of the <{3}> effect by <1>. But the level of the <{4}> effect will decrease by <2>.",
      "The level of the <{3}> effect will increase by <1>. In exchange, the level of the <{4}> effect will be decreased by <2>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 10000,
        value: [
          -2,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "sIomcuqP",
    pickRatio: 24000,
    range: [
      5,
      99
    ],
    descriptions: [
      "I will increase the level of the <{4}> effect by <1>. However, the level of the <{0}> effect will decrease by <2>.",
      "I'll increase the level of the <{4}> effect by <1>. But the level of the <{0}> effect will decrease by <2>.",
      "The level of the <{4}> effect will increase by <1>. In exchange, the level of the <{0}> effect will be decreased by <2>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 10000,
        value: [
          -2,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "OPEOVax7",
    pickRatio: 24000,
    range: [
      5,
      99
    ],
    descriptions: [
      "I will increase the level of the <{4}> effect by <1>. However, the level of the <{1}> effect will decrease by <2>.",
      "I'll increase the level of the <{4}> effect by <1>. But the level of the <{1}> effect will decrease by <2>.",
      "The level of the <{4}> effect will increase by <1>. In exchange, the level of the <{1}> effect will be decreased by <2>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 10000,
        value: [
          -2,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "cKNn2QqI",
    pickRatio: 24000,
    range: [
      5,
      99
    ],
    descriptions: [
      "I will increase the level of the <{4}> effect by <1>. However, the level of the <{2}> effect will decrease by <2>.",
      "I'll increase the level of the <{4}> effect by <1>. But the level of the <{2}> effect will decrease by <2>.",
      "The level of the <{4}> effect will increase by <1>. In exchange, the level of the <{2}> effect will be decreased by <2>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 10000,
        value: [
          -2,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "G6VDDeZR",
    pickRatio: 24000,
    range: [
      5,
      99
    ],
    descriptions: [
      "I will increase the level of the <{4}> effect by <1>. However, the level of the <{3}> effect will decrease by <2>.",
      "I'll increase the level of the <{4}> effect by <1>. But the level of the <{3}> effect will decrease by <2>.",
      "The level of the <{4}> effect will increase by <1>. In exchange, the level of the <{3}> effect will be decreased by <2>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 10000,
        value: [
          -2,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "slVyBRf3",
    pickRatio: 18000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will swap the levels of <1> <highest level> effects and <1> <lowest level> effects.",
      "I will exchange <1> <highest level> effect and <1> <lowest level> effect.",
      "I would like to change <1> effects of <highest level> and <1> effects of <lowest level>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "swapMinMax",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          0,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "o2AEXCgS",
    pickRatio: 72000,
    range: [
      0,
      0
    ],
    descriptions: [
      "<Highest level> Effect <1> level will be consumed <1>. Instead, the levels of <1> <highest level> effects and <1> <lowest level> effects are reversed.",
      "<Highest level> effect <1> level will be consumed <1>. Instead, I will exchange <1> <highest level> effects and <1> <lowest level> effects.",
      "<Highest level> effect Consumes <1> levels. Instead, I would swap the levels of <1> <highest level> effects and <1> <lowest level> effects."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "decreaseMaxAndSwapMinMax",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          0,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "kv1WbTjP",
    pickRatio: 18000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will reverse the stages of the <{0}> effect and the <{1}> effect.",
      "I'll swap the levels of the <{0}> effect and the <{1}> effect.",
      "I will swap the levels of the <{0}> effect and the <{1}> effect."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "swapValues",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          0,
          1
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "+D1JKGnY",
    pickRatio: 18000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will reverse the stages of the <{0}> effect and the <{2}> effect.",
      "I'll swap the levels of the <{0}> effect and the <{2}> effect.",
      "I would like to swap the stages of the <{0}> effect and the <{2}> effect."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "swapValues",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          0,
          2
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "vjqwUBQf",
    pickRatio: 18000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will reverse the stages of the <{0}> effect and the <{3}> effect.",
      "I'll swap the levels of the <{0}> effect and the <{3}> effect.",
      "I would like to swap the stages of the <{0}> effect and the <{3}> effect."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "swapValues",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          0,
          3
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "UM8FdJ47",
    pickRatio: 18000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will reverse the stages of the <{0}> effect and the <{4}> effect.",
      "I'll swap the levels of the <{0}> effect and the <{4}> effect.",
      "I would like to swap the stages of the <{0}> effect and the <{4}> effect."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "swapValues",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          0,
          4
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "Te+sg9qJ",
    pickRatio: 18000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will reverse the stages of the <{2}> effect and the <{1}> effect.",
      "I'll swap the levels of the <{2}> effect and the <{1}> effect.",
      "I would like to swap the stages of the <{2}> effect and the <{1}> effect."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "swapValues",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          1,
          2
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "YuNKedL4",
    pickRatio: 18000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will reverse the stages of the <{3}> effect and the <{1}> effect.",
      "I'll swap the levels of the <{3}> effect and the <{1}> effect.",
      "I would like to swap the stages of the <{3}> effect and the <{1}> effect."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "swapValues",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          1,
          3
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "Qe0MWSWN",
    pickRatio: 18000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will reverse the stages of the <{4}> effect and the <{1}> effect.",
      "I'll swap the levels of the <{4}> effect and the <{1}> effect.",
      "I would like to swap the stages of the <{4}> effect and the <{1}> effect."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "swapValues",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          1,
          4
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "HhcvwkZK",
    pickRatio: 18000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will reverse the stages of the <{2}> effect and the <{3}> effect.",
      "I'll swap the levels of the <{2}> effect and the <{3}> effect.",
      "I would like to swap the stages of the <{2}> effect and the <{3}> effect."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "swapValues",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          2,
          3
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "QmI5GlED",
    pickRatio: 18000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will reverse the stages of the <{2}> effect and the <{4}> effect.",
      "I'll swap the levels of the <{2}> effect and the <{4}> effect.",
      "I would like to swap the stages of the <{2}> effect and the <{4}> effect."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "swapValues",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          2,
          4
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "2D4TdKj7",
    pickRatio: 18000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will reverse the stages of the <{3}> effect and the <{4}> effect.",
      "I'll swap the levels of the <{3}> effect and the <{4}> effect.",
      "I would like to swap the stages of the <{3}> effect and the <{4}> effect."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "swapValues",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          3,
          4
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "BUyf16QW",
    pickRatio: 31500,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will consume <1> level of the <{0}> effect. In Exchange for that, I will swap the levels of the <{0}> effect and the <{1}> effect.",
      "It will consume <1> level of the <{0}> effect. Instead, I will swap the levels of the <{0}> effect and the <{1}> effect.",
      "<{0}> Consumes <1> level of the effect. Instead, I would reverse the steps of the <{0}> and <{1}> effects.,,,"
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "decreaseFirstTargetAndSwap",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          0,
          1
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "ZV3sa3WY",
    pickRatio: 31500,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will consume <1> level of the <{0}> effect. In Exchange for that, I will swap the levels of the <{0}> effect and the <{2}> effect.",
      "It will consume <1> level of the <{0}> effect. Instead, I will swap the levels of the <{0}> effect and the <{2}> effect.",
      "<{0}> Consumes <1> level of the effect. Instead, I would reverse the steps of the <{0}> and <{2}> effects."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "decreaseFirstTargetAndSwap",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          0,
          2
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "xejEn+yQ",
    pickRatio: 31500,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will consume <1> level of the <{0}> effect. In Exchange for that, I will swap the levels of the <{0}> effect and the <{3}> effect.",
      "It will consume <1> level of the <{0}> effect. Instead, I will swap the levels of the <{0}> effect and the <{3}> effect.",
      "<{0}> Consumes <1> level of the effect. Instead, I would reverse the steps of the <{0}> and <{3}> effects."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "decreaseFirstTargetAndSwap",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          0,
          3
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "FZWy8SWk",
    pickRatio: 31500,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will consume <1> level of the <{0}> effect. In Exchange for that, I will swap the levels of the <{0}> effect and the <{4}> effect.",
      "It will consume <1> level of the <{0}> effect. Instead, I will swap the levels of the <{0}> effect and the <{4}> effect.",
      "<{0}> Consumes <1> level of the effect. Instead, I would reverse the steps of the <{0}> and <{4}> effects."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "decreaseFirstTargetAndSwap",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          0,
          4
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "w1wmShOG",
    pickRatio: 31500,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will consume <1> level of the <{1}> effect. In Exchange for that, I will swap the levels of the <{1}> effect and the <{2}> effect.",
      "It will consume <1> level of the <{1}> effect. Instead, I will swap the levels of the <{1}> effect and the <{2}> effect.",
      "<{1}> Consumes <1> level of the effect. Instead, I would reverse the steps of the <{1}> and <{2}> effects."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "decreaseFirstTargetAndSwap",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          1,
          2
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "pBytMqjc",
    pickRatio: 31500,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will consume <1> level of the <{1}> effect. In Exchange for that, I will swap the levels of the <{1}> effect and the <{3}> effect.",
      "It will consume <1> level of the <{1}> effect. Instead, I will swap the levels of the <{1}> effect and the <{3}> effect.",
      "<{1}> Consumes <1> level of the effect. Instead, I would reverse the steps of the <{1}> and <{3}> effects."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "decreaseFirstTargetAndSwap",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          1,
          3
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "PkOCMf3y",
    pickRatio: 31500,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will consume <1> level of the <{1}> effect. In Exchange for that, I will swap the levels of the <{1}> effect and the <{4}> effect.",
      "It will consume <1> level of the <{1}> effect. Instead, I will swap the levels of the <{1}> effect and the <{4}> effect.",
      "<{1}> Consumes <1> level of the effect. Instead, I would reverse the steps of the <{1}> and <{4}> effects."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "decreaseFirstTargetAndSwap",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          1,
          4
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "9tZSH3Qf",
    pickRatio: 31500,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will consume <1> level of the <{3}> effect. In Exchange for that, I will swap the levels of the <{2}> effect and the <{2}> effect.",
      "It will consume <1> level of the <{3}> effect. Instead, I will swap the levels of the <{2}> effect and the <{2}> effect.",
      "<{3}> Consumes <1> level of the effect. Instead, I would reverse the steps of the <{2}> and <{2}> effects."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "decreaseFirstTargetAndSwap",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          2,
          3
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "uf7hyKcO",
    pickRatio: 31500,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will consume <1> level of the <{4}> effect. In Exchange for that, I will swap the levels of the <{2}> effect and the <{2}> effect.",
      "It will consume <1> level of the <{4}> effect. Instead, I will swap the levels of the <{2}> effect and the <{2}> effect.",
      "<{4}> Consumes <1> level of the effect. Instead, I would reverse the steps of the <{2}> and <{2}> effects."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "decreaseFirstTargetAndSwap",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          2,
          4
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "BG5GeAxp",
    pickRatio: 31500,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will consume <1> level of the <{3}> effect. In Exchange for that, I will swap the levels of the <{3}> effect and the <{4}> effect.",
      "It will consume <1> level of the <{3}> effect. Instead, I will swap the levels of the <{3}> effect and the <{4}> effect.",
      "<{3}> Consumes <1> level of the effect. Instead, I would reverse the steps of the <{3}> and <{4}> effects."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "decreaseFirstTargetAndSwap",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          3,
          4
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "1OwEpxRp",
    pickRatio: 31500,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will consume <1> level of the <{1}> effect. In Exchange for that, I will swap the levels of the <{1}> effect and the <{0}> effect.",
      "It will consume <1> level of the <{1}> effect. Instead, I will swap the levels of the <{1}> effect and the <{0}> effect.",
      "<{1}> Consumes <1> level of the effect. Instead, I would reverse the steps of the <{1}> and <{0}> effects."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "decreaseFirstTargetAndSwap",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "Kme6BgN+",
    pickRatio: 31500,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will consume <1> level of the <{0}> effect. In Exchange for that, I will swap the levels of the <{2}> effect and the <{2}> effect.",
      "It will consume <1> level of the <{0}> effect. Instead, I will swap the levels of the <{2}> effect and the <{2}> effect.",
      "<{0}> Consumes <1> level of the effect. Instead, I would reverse the steps of the <{2}> and <{2}> effects."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "decreaseFirstTargetAndSwap",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          2,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "uOAYp5/X",
    pickRatio: 31500,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will consume <1> level of the <{3}> effect. In Exchange for that, I will swap the levels of the <{3}> effect and the <{0}> effect.",
      "It will consume <1> level of the <{3}> effect. Instead, I will swap the levels of the <{3}> effect and the <{0}> effect.",
      "<{3}> Consumes <1> level of the effect. Instead, I would reverse the steps of the <{3}> and <{0}> effects."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "decreaseFirstTargetAndSwap",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          3,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "Xn2xYHMU",
    pickRatio: 31500,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will consume <1> level of the <{4}> effect. In Exchange for that, I will swap the levels of the <{4}> effect and the <{0}> effect.",
      "It will consume <1> level of the <{4}> effect. Instead, I will swap the levels of the <{4}> effect and the <{0}> effect.",
      "<{4}> Consumes <1> level of the effect. Instead, I would reverse the steps of the <{4}> and <{0}> effects."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "decreaseFirstTargetAndSwap",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          4,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "kHTjKuGd",
    pickRatio: 31500,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will consume <1> level of the <{1}> effect. In Exchange for that, I will swap the levels of the <{2}> effect and the <{2}> effect.",
      "It will consume <1> level of the <{1}> effect. Instead, I will swap the levels of the <{2}> effect and the <{2}> effect.",
      "<{1}> Consumes <1> level of the effect. Instead, I would reverse the steps of the <{2}> and <{2}> effects."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "decreaseFirstTargetAndSwap",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          2,
          1
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "V9jqUIcZ",
    pickRatio: 31500,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will consume <1> level of the <{3}> effect. In Exchange for that, I will swap the levels of the <{3}> effect and the <{1}> effect.",
      "It will consume <1> level of the <{3}> effect. Instead, I will swap the levels of the <{3}> effect and the <{1}> effect.",
      "<{3}> Consumes <1> level of the effect. Instead, I would reverse the steps of the <{3}> and <{1}> effects."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "decreaseFirstTargetAndSwap",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          3,
          1
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "V/+gke/j",
    pickRatio: 31500,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will consume <1> level of the <{4}> effect. In Exchange for that, I will swap the levels of the <{4}> effect and the <{1}> effect.",
      "It will consume <1> level of the <{4}> effect. Instead, I will swap the levels of the <{4}> effect and the <{1}> effect.",
      "<{4}> Consumes <1> level of the effect. Instead, I would reverse the steps of the <{4}> and <{1}> effects."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "decreaseFirstTargetAndSwap",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          4,
          1
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "JLQT/st1",
    pickRatio: 31500,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will consume <1> level of the <{3}> effect. In Exchange for that, I will swap the levels of the <{3}> effect and the <{2}> effect.",
      "It will consume <1> level of the <{3}> effect. Instead, I will swap the levels of the <{3}> effect and the <{2}> effect.",
      "<{3}> Consumes <1> level of the effect. Instead, I would reverse the steps of the <{3}> and <{2}> effects."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "decreaseFirstTargetAndSwap",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          3,
          2
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "YWmEriBs",
    pickRatio: 31500,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will consume <1> level of the <{4}> effect. In Exchange for that, I will swap the levels of the <{4}> effect and the <{2}> effect.",
      "It will consume <1> level of the <{4}> effect. Instead, I will swap the levels of the <{4}> effect and the <{2}> effect.",
      "<{4}> Consumes <1> level of the effect. Instead, I would reverse the steps of the <{4}> and <{2}> effects."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "decreaseFirstTargetAndSwap",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          4,
          2
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "XSbhd2UF",
    pickRatio: 31500,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will consume <1> level of the <{4}> effect. In Exchange for that, I will swap the levels of the <{4}> effect and the <{3}> effect.",
      "It will consume <1> level of the <{4}> effect. Instead, I will swap the levels of the <{4}> effect and the <{3}> effect.",
      "<{4}> Consumes <1> level of the effect. Instead, I would reverse the steps of the <{4}> and <{3}> effects."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "decreaseFirstTargetAndSwap",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          4,
          3
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "WguDgqRX",
    pickRatio: 22000,
    range: [
      1,
      6
    ],
    descriptions: [
      "<lowest level> effect raises <1> levels by <1>.",
      "<Lowest level> Effect <1> level will be increased by <1>.",
      "<lowest level> I will raise the effect <1> level by <1>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseMinAndDecreaseTarget",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "rwCzVWtL",
    pickRatio: 33000,
    range: [
      1,
      6
    ],
    descriptions: [
      "<lowest level> effect raises <1> levels by <1>. However, the <highest level> effect will go down <1> level.",
      "<Lowest level> Effect <1> level will be increased by <1>. However, the <highest level> effect <1> level will be reduced by <1>.",
      "I'll increase <1> effect with the <lowest level> by <1> level. But <1> effect with the <highest level> levels will lose <1> level."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseMinAndDecreaseTarget",
        targetType: "maxValue",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          1,
          -1
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "y34ZDrYU",
    pickRatio: 66000,
    range: [
      1,
      6
    ],
    descriptions: [
      "<lowest level> effect raises <1> levels by <1>. But <highest level> effect <1> will go down <2> levels.",
      "<Lowest level> Effect <1> level will be increased by <1>. However, the <highest level> effect <1> level will be reduced by <2>.",
      "I'll increase <1> effect with the <lowest level> by <1> level. But <1> effect with the <highest level> levels will lose <2> level."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseMinAndDecreaseTarget",
        targetType: "maxValue",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          1,
          -2
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "B0wBsFQZ",
    pickRatio: 33000,
    range: [
      1,
      6
    ],
    descriptions: [
      "<lowest level> effect raises <1> levels by <1>. But <1> other effects will go down <1> level.",
      "<Lowest level> Effect <1> level will be increased by <1>. However, the <1> level of <other> effects will be reduced by <1>.",
      "I'll increase <1> effect with the <lowest> level by <1> level. But <1> <other> effect will lose <1> level."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseMinAndDecreaseTarget",
        targetType: "random",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          1,
          -1
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "YjCTNhrR",
    pickRatio: 66000,
    range: [
      1,
      6
    ],
    descriptions: [
      "I'll enhance 1 effect with the lowest level by 1 level. In exchange, however, theone with the highest level will lose 2 levels.",
      "<Lowest level> Effect <1> level will be increased by <1>. However, the <1> level of <other> effects will be reduced by <2>.",
      "<lowest level> I will raise the effect <1> level by <1>. <Other> effects <1> steps will be reduced by <2>, though."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseMinAndDecreaseTarget",
        targetType: "random",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          1,
          -2
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "+l4Nv2wX",
    pickRatio: 5500,
    range: [
      0,
      0
    ],
    descriptions: [
      "<Highest level> Effect <1> level will be increased by <1>.",
      "<Highest level> Effect <1> I will raise <1> level.",
      "<Highest Level> Effect <1> I will raise it <1> level."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseMaxAndDecreaseTarget",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "noTUfDIQ",
    pickRatio: 8250,
    range: [
      0,
      0
    ],
    descriptions: [
      "<Highest level> Effect <1> level will be increased by <1>. However, the <lowest level> effect will go down <1> level.",
      "<Highest level> Effect <1> I will raise <1> level. However, the <lowest level> effect <1> level will be reduced by <1>.",
      "<Highest Level> Effect <1> I will raise it <1> level. <Lowest level> effect <1> levels will be reduced by <1>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseMaxAndDecreaseTarget",
        targetType: "minValue",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          1,
          -1
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "4eJwfnBT",
    pickRatio: 16500,
    range: [
      0,
      0
    ],
    descriptions: [
      "<Highest level> Effect <1> level will be increased by <1>. But <lowest level> effect <1> will go down <2> levels.",
      "<Highest level> Effect <1> I will raise <1> level. However, <1> level of <lowest level> effect will be reduced by <2>.",
      "<Highest Level> Effect <1> I will raise it <1> level. <Lowest level> effect <1> level will be reduced by <2>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseMaxAndDecreaseTarget",
        targetType: "minValue",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          1,
          -2
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "YrGnYgEu",
    pickRatio: 8250,
    range: [
      0,
      0
    ],
    descriptions: [
      "<Highest level> Effect <1> level will be increased by <1>. But <random> effects will go down <1> levels.",
      "<Highest level> Effect <1> I will raise <1> level. However, <1> stages of <random> effects will be reduced by <1>.",
      "<Highest Level> Effect <1> I will raise it <1> level. <Random> effects <1> steps will be reduced by <1>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseMaxAndDecreaseTarget",
        targetType: "random",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          1,
          -1
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "OtcWJjNT",
    pickRatio: 16500,
    range: [
      0,
      0
    ],
    descriptions: [
      "<Highest level> Effect <1> level will be increased by <1>. But <random> effects <1> will go down <2> levels.",
      "<Highest level> Effect <1> I will raise <1> level. However, <random> effects <1> steps will be reduced by <2>.",
      "<Highest Level> Effect <1> I will raise it <1> level. <Random> effects <1> steps will be reduced by <2>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseMaxAndDecreaseTarget",
        targetType: "random",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          1,
          -2
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "ZB9XG5ww",
    pickRatio: 30000,
    range: [
      1,
      6
    ],
    descriptions: [
      "<lowest level> effect raises <1> level by <2>. But <highest level> effect <1> will go down <2> levels.",
      "<Lowest level> Effect <1> level will be raised <2>. However, the <highest level> effect <1> level will be reduced by <2>.",
      "<lowest level> I will raise the effect <1> level to <2>. <Highest level> effect <1> level will be reduced by <2>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseMinAndDecreaseTarget",
        targetType: "maxValue",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          2,
          -2
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "XN5hHxIA",
    pickRatio: 15000,
    range: [
      1,
      6
    ],
    descriptions: [
      //yes theone
      "I'll enhance <1> effect with the <lowest level> by <2> levels. In exchange, however, theone with the <highest level> will lose <1> level.",
      "<Lowest level> Effect <1> level will be raised <2>. However, the <highest level> effect <1> level will be reduced by <1>.,,",
      "<lowest level> I will raise the effect <1> level to <2>. <Highest level> effect <1> levels will be reduced by <1>.,,"
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseMinAndDecreaseTarget",
        targetType: "maxValue",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          2,
          -1
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "pyFVTyxz",
    pickRatio: 30000,
    range: [
      1,
      6
    ],
    descriptions: [
      "I'll enhance <1> effect with the <lowest level> by <2> levels. In exchange, however, <one> the <other> effects will lose <2> levels.",
      "<Lowest level> Effect <1> level will be raised <2>. However, the <1> level of <other> effects will be reduced by <2>.,,,",
      "<lowest level> I will raise the effect <1> level to <2>. <Other> effects <1> steps will be reduced by <2>, though.,,,"
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseMinAndDecreaseTarget",
        targetType: "random",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          2,
          -2
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "WGvKm6dz",
    pickRatio: 15000,
    range: [
      1,
      6
    ],
    descriptions: [
      "<lowest level> effect raises <1> level by <2>. But <1> other effects will go down <1> level.",
      "<Lowest level> Effect <1> level will be raised <2>. However, the <1> level of <other> effects will be reduced by <1>.",
      "<lowest level> I will raise the effect <1> level to <2>. <Other> effects <1> steps will be reduced by <1>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseMinAndDecreaseTarget",
        targetType: "random",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          2,
          -1
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "ZctqR2nY",
    pickRatio: 10000,
    range: [
      1,
      6
    ],
    descriptions: [
      "<lowest level> effect raises <1> level by <2>.",
      "<Lowest level> Effect <1> level will be raised <2>.",
      "<lowest level> I will raise the effect <1> level to <2>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseMinAndDecreaseTarget",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          2,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "q1tgjYMp",
    pickRatio: 10000,
    range: [
      3,
      99
    ],
    descriptions: [
      "There are <unconverted> effects. I'll raise the level of all those effects by <1>.",
      "I will raise the level of all <uncombined> effects by <1>.",
      "There are effects that <have not been converted>. For all of those effects, I'll increase the level by <1>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "lteValue",
        targetCondition: 0,
        targetCount: 5,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "Hp1Jly41",
    pickRatio: 20000,
    range: [
      5,
      99
    ],
    descriptions: [
      "There are effects with level <2> or lower. I'll raise the level of all those effects by <1>.",
      "I will increase the level of all effects with level <2> or lower by <1>.",
      "There are effects with level <2> or lower. For all of those effects, I'll increase the level by <1>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "lteValue",
        targetCondition: 2,
        targetCount: 5,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "0aBSrAj3",
    pickRatio: 30000,
    range: [
      9,
      99
    ],
    descriptions: [
      "There are effects with level <4> or lower. I'll raise the level of all those effects by <1>.",
      "I will increase the level of all effects with level <4> or lower by <1>.",
      "There are effects with level <4> or lower. For all of those effects, I'll increase the level by <1>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "lteValue",
        targetCondition: 4,
        targetCount: 5,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "qw+dYf8J",
    pickRatio: 40000,
    range: [
      13,
      99
    ],
    descriptions: [
      "There are effects with level <6> or lower. I'll raise the level of all those effects by <1>.",
      "I will increase the level of all effects that are <6> or lower by <1>.",
      "There are effects with level <6> or lower. For all of those effects, I'll increase the level by <1>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "lteValue",
        targetCondition: 6,
        targetCount: 5,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "Betrhw/Y",
    pickRatio: 5000,
    range: [
      5,
      99
    ],
    descriptions: [
      "The level of slots <1, 3, and 5> increases by <1>. However, the level of slots <2, 4> will go down by <2>.",
      "I will raise the level of slots <1, 3, and 5> by <1>. However, the level of slots <2, 4> will decrease by <2>.",
      "I will raise the level of slots <1, 3, and 5> by <1>. The level of slots <2, 4> will decrease by <2>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "oneThreeFive",
        targetCondition: 0,
        targetCount: 3,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "twoFour",
        targetCondition: 0,
        targetCount: 2,
        ratio: 10000,
        value: [
          -2,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "yb+he5Xt",
    pickRatio: 20000,
    range: [
      5,
      99
    ],
    descriptions: [
      "The level of slots <2, 4> increases by <1>. However, the level of slots <1, 3, and 5> will go down by <2>.",
      "I will raise the level of slots <2, 4> by <1>. However, the level of slots <1, 3, and 5> will decrease by <2>.",
      "Let’s increase the level of slots <2, 4> by <1>. The level of slots <1, 3, and 5> will decrease by <2>."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "twoFour",
        targetCondition: 0,
        targetCount: 2,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "oneThreeFive",
        targetCondition: 0,
        targetCount: 3,
        ratio: 10000,
        value: [
          -2,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "tw2b8sHF",
    pickRatio: 240000,
    range: [
      5,
      99
    ],
    descriptions: [
      "I will seal <1> <random effect>.",
      "<1> random effect will be sealed.",
      "<Random effect> <1> will be sealed."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "sealTarget",
        targetType: "random",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          0,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "XwiC96kj",
    pickRatio: 100800,
    range: [
      5,
      99
    ],
    descriptions: [
      "<{0}> The effect will be sealed. However, I will use up <2> opportunities in this training.",
      "<{0}> I will seal the effect. However, in this training, you will use up <2> opportunities.",
      "I'll seal the <{0}> effect. It will consume <2> attempts."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "sealTarget",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 0,
        value: [
          0,
          0
        ],
        remainTurn: 1
      },
      {
        type: "decreaseTurnLeft",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "zu9Nj4vh",
    pickRatio: 100800,
    range: [
      5,
      99
    ],
    descriptions: [
      "<{1}> The effect will be sealed. However, I will use up <2> opportunities in this training.",
      "<{1}> I will seal the effect. However, in this training, you will use up <2> opportunities.",
      "I'll seal the <{1}> effect. It will consume <2> attempts."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "sealTarget",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 0,
        value: [
          0,
          0
        ],
        remainTurn: 1
      },
      {
        type: "decreaseTurnLeft",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "8/vq2Y/e",
    pickRatio: 100800,
    range: [
      5,
      99
    ],
    descriptions: [
      "<{2}> The effect will be sealed. However, I will use up <2> opportunities in this training.",
      "<{2}> I will seal the effect. However, in this training, you will use up <2> opportunities.",
      "I'll seal the <{2}> effect. It will consume <2> attempts."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "sealTarget",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 0,
        value: [
          0,
          0
        ],
        remainTurn: 1
      },
      {
        type: "decreaseTurnLeft",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "JfA+Wzj6",
    pickRatio: 100800,
    range: [
      5,
      99
    ],
    descriptions: [
      "<{3}> The effect will be sealed. However, I will use up <2> opportunities in this training.",
      "<{3}> I will seal the effect. However, in this training, you will use up <2> opportunities.",
      "I'll seal the <{3}> effect. It will consume <2> attempts."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "sealTarget",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 0,
        value: [
          0,
          0
        ],
        remainTurn: 1
      },
      {
        type: "decreaseTurnLeft",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "l9PDNEwk",
    pickRatio: 100800,
    range: [
      5,
      99
    ],
    descriptions: [
      "<{4}> The effect will be sealed. However, I will use up <2> opportunities in this training.",
      "<{4}> I will seal the effect. However, in this training, you will use up <2> opportunities.",
      "I'll seal the <{4}> effect. It will consume <2> attempts."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "sealTarget",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 0,
        value: [
          0,
          0
        ],
        remainTurn: 1
      },
      {
        type: "decreaseTurnLeft",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "zxpmYMXP",
    pickRatio: 56000,
    range: [
      5,
      99
    ],
    descriptions: [
      "I'll seal the <selected> effect at the cost of <2> remaining attempts.",
      "I will seal the effect <of your choice>. However, in this training, you will use up <2> opportunities.",
      "I will seal the effect <you chose>. You will use up <2> opportunities, though."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "sealTarget",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          0,
          0
        ],
        remainTurn: 1
      },
      {
        type: "decreaseTurnLeft",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "XR286C4T",
    pickRatio: 350000,
    range: [
      0,
      0
    ],
    descriptions: [
      "You will not have to pay for this creation.",
      "You won't need to pay involved in this training.,,,,",
      "You won't need to pay for this creation."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "decreasePrice",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          -10000,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "fCMn1qX+",
    pickRatio: 105000,
    range: [
      0,
      0
    ],
    descriptions: [
      "All future creations will cost you <20%> less.",
      "All remaining conversions will cost <20%> less.",
      "All future creations will cost you <20%> less."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 2,
    logics: [
      {
        type: "decreasePrice",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          -2000,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "AP6Jmn0t",
    pickRatio: 45000,
    range: [
      0,
      0
    ],
    descriptions: [
      "All remaining conversions will cost <40%> less.",
      "Costs for all remaining conversions will be reduced by <40%>.",
      "All future creations will cost you <40%> less."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 2,
    logics: [
      {
        type: "decreasePrice",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          -4000,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "YHNPF0sg",
    pickRatio: 100000000,
    range: [
      0,
      0
    ],
    descriptions: [
      "It's the final step now. I'll seal the <{0}> effect.",
      "It's almost over. I will seal the <{0}> effect.",
      "Let's finish it now. I will seal the <{0}> effect."
    ],
    slotType: 3,
    type: "seal",
    applyLimit: 99,
    logics: [
      {
        type: "sealTarget",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 0,
        value: [
          0,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "0GbCd4/9",
    pickRatio: 100000000,
    range: [
      0,
      0
    ],
    descriptions: [
      "It's the final step now. I'll seal the <{1}> effect.",
      "It's almost over. I will seal the <{1}> effect.",
      "Let's finish it now. I will seal the <{1}> effect."
    ],
    slotType: 3,
    type: "seal",
    applyLimit: 99,
    logics: [
      {
        type: "sealTarget",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 0,
        value: [
          0,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "MukueyQj",
    pickRatio: 100000000,
    range: [
      0,
      0
    ],
    descriptions: [
      "It's the final step now. I'll seal the <{2}> effect.",
      "It's almost over. I will seal the <{2}> effect.",
      "Let's finish it now. I will seal the <{2}> effect."
    ],
    slotType: 3,
    type: "seal",
    applyLimit: 99,
    logics: [
      {
        type: "sealTarget",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 0,
        value: [
          0,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "5l7Yfh2Z",
    pickRatio: 100000000,
    range: [
      0,
      0
    ],
    descriptions: [
      "It's the final step now. I'll seal the <{3}> effect.",
      "It's almost over. I will seal the <{3}> effect.",
      "Let's finish it now. I will seal the <{3}> effect."
    ],
    slotType: 3,
    type: "seal",
    applyLimit: 99,
    logics: [
      {
        type: "sealTarget",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 0,
        value: [
          0,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "S0tcT4gJ",
    pickRatio: 100000000,
    range: [
      0,
      0
    ],
    descriptions: [
      "It's the final step now. I'll seal the <{4}> effect.",
      "It's almost over. I will seal the <{4}> effect.",
      "Let's finish it now. I will seal the <{4}> effect."
    ],
    slotType: 3,
    type: "seal",
    applyLimit: 99,
    logics: [
      {
        type: "sealTarget",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 0,
        value: [
          0,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "vsB18riz",
    pickRatio: 1,
    range: [
      0,
      0
    ],
    descriptions: [
      "It's the final step now. The effect I'll seal the effect <you select> effect.",
      "It's almost over. I will seal the effect <of your choice>.,,,,",
      "Let's finish it now. I will seal the effect <you chose>.,,,,"
    ],
    slotType: 3,
    type: "seal",
    applyLimit: 99,
    logics: [
      {
        type: "sealTarget",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          0,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "jpmWCt6l",
    pickRatio: 1,
    range: [
      0,
      0
    ],
    descriptions: [
      "(The sage is meditating.)",
      "(The sage is meditating.)",
      "(The sage is meditating.)"
    ],
    slotType: 3,
    type: "exhausted",
    applyLimit: 99,
    logics: []
  },
  {
    id: "REEHEKll",
    pickRatio: 1,
    range: [
      0,
      0
    ],
    descriptions: [
      "(The sage is recovering.)",
      "(The sage is recovering.)",
      "(The sage is recovering.)"
    ],
    slotType: 3,
    type: "exhausted",
    applyLimit: 99,
    logics: []
  },
  {
    id: "mT9NbAEJ",
    pickRatio: 1,
    range: [
      0,
      0
    ],
    descriptions: [
      "(The sage is taking a break.)",
      "(The sage is taking a break.)",
      "(The sage is taking a break.)"
    ],
    slotType: 3,
    type: "exhausted",
    applyLimit: 99,
    logics: []
  },
  {
    id: "LyR8If14",
    pickRatio: 1,
    range: [
      0,
      0
    ],
    descriptions: [
      "(The sage is in agony.)",
      "(The sage is in agony.)",
      "(The sage is in agony.)"
    ],
    slotType: 3,
    type: "exhausted",
    applyLimit: 99,
    logics: []
  },
  {
    id: "lkx3BHk1",
    pickRatio: 1,
    range: [
      0,
      0
    ],
    descriptions: [
      "(The sage is pondering the advice.)",
      "(The sage is pondering the advice.)",
      "(The sage is pondering the advice.)"
    ],
    slotType: 3,
    type: "exhausted",
    applyLimit: 99,
    logics: []
  },
  {
    id: "7xKQ0O4a",
    pickRatio: 1,
    range: [
      0,
      0
    ],
    descriptions: [
      "(The Sage is working on new research.)",
      "(The Sage is working on new research.)",
      "(The Sage is working on new research.)"
    ],
    slotType: 3,
    type: "exhausted",
    applyLimit: 99,
    logics: []
  },
  {
    id: "Ls6v0E6S",
    pickRatio: 1,
    range: [
      0,
      0
    ],
    descriptions: [
      "(The sage is lost in meditation.)",
      "(The sage is lost in meditation.)",
      "(The sage is lost in meditation.)"
    ],
    slotType: 3,
    type: "exhausted",
    applyLimit: 99,
    logics: []
  },
  {
    id: "UD8aRfvQ",
    pickRatio: 1,
    range: [
      0,
      0
    ],
    descriptions: [
      "(The sage is lost in contemplation.)",
      "(The sage is lost in contemplation.)",
      "(The sage is lost in contemplation.)"
    ],
    slotType: 3,
    type: "exhausted",
    applyLimit: 99,
    logics: []
  },
  {
    id: "h/hk94ec",
    pickRatio: 850000,
    range: [
      0,
      0
    ],
    descriptions: [
      "In all remaining conversions, the probability of the effect <you choose> being converted will be increased by <15>%.",
      "For all remaining conversions, I will increase the probability of the effect <you selected> being converted by <15>%.",
      "In all remaining conversions, we will increase the probability of the <your chosen> effect being converted by <15>%."
    ],
    slotType: 3,
    type: "lawful",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          1500,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "Cztb50e7",
    pickRatio: 850000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will decrease the transmutation rate of the effect <you selected> by <20>% for all remaining transmutations.",
      "I will decrease the transmutation rate of the effect <you selected> by <20>% for all remaining transmutations.",
      "I will decrease the transmutation rate of the effect <you selected> by <20>% for all remaining transmutations."
    ],
    slotType: 3,
    type: "lawful",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          -2000,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "sbi7g0nQ",
    pickRatio: 600000,
    range: [
      0,
      0
    ],
    descriptions: [
      "In all remaining combinations, the probability of great success for the effect of <your choice> will be increased by <25>%.",
      "For all remaining combos, I will increase the chance of great success for the effect <you chose> by <25>%.",
      "In all remaining combinations, we will increase the probability of great success for the <you selected> effect by <25>%."
    ],
    slotType: 3,
    type: "lawful",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          2500,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "loHKiru6",
    pickRatio: 210000,
    range: [
      0,
      0
    ],
    descriptions: [
      "In all remaining combinations, the probability of great success for <all> effects will be increased by <15>%.",
      "For all remaining combos, I will increase the chance of great success for <all> effects by <15>%.",
      "For all remaining combinations, we will increase the jackpot success probability of <all> effects by <15>%."
    ],
    slotType: 3,
    type: "lawful",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "random",
        targetCondition: 0,
        targetCount: 5,
        ratio: 0,
        value: [
          1500,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "6WfZZIUE",
    pickRatio: 420000,
    range: [
      0,
      0
    ],
    descriptions: [
      "In all remaining combinations, the probability of great success for effects <1, 3, and 5> increases by <15>%.",
      "In all remaining combinations, the probability of great success for effects <1, 3, and 5> will be increased by <15>%.",
      "I will increase the great success rate of effects no. <1, 3, 5> by <15>% for all remaining transmutations."
    ],
    slotType: 3,
    type: "lawful",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "oneThreeFive",
        targetCondition: 0,
        targetCount: 3,
        ratio: 0,
        value: [
          1500,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "TNjx4HLm",
    pickRatio: 770000,
    range: [
      0,
      0
    ],
    descriptions: [
      "In all remaining combinations, the probability of great success for effects <2 and 4> will increase by <15>%.",
      "In all remaining combinations, the probability of great success for effects <2 and 4> will be increased by <15>%.",
      "In all remaining combinations, we will increase the probability of great success for effects <2 and 4> by <15>%."
    ],
    slotType: 3,
    type: "lawful",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "twoFour",
        targetCondition: 0,
        targetCount: 2,
        ratio: 0,
        value: [
          1500,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "xQkReT+j",
    pickRatio: 500000,
    range: [
      0,
      0
    ],
    descriptions: [
      "This time, I will create <2> level effects <of your choice>.",
      "This time, I will be translating the effect <of your choice> to level <2>.",
      "This time, we will create <2> stage <your chosen> effect."
    ],
    slotType: 3,
    type: "lawful",
    applyLimit: 99,
    logics: [
      {
        type: "setEnchantTargetAndAmount",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          2,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "+Ip1EgL4",
    pickRatio: 500000,
    range: [
      0,
      0
    ],
    descriptions: [
      "This conversion does not consume the conversion opportunity.",
      "This training will proceed without wasting any opportunity.",
      "This time, I will train without wasting the opportunity."
    ],
    slotType: 3,
    type: "lawful",
    applyLimit: 99,
    logics: [
      {
        type: "decreaseTurnLeft",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          -1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "D3OzU8G0",
    pickRatio: 722500,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will raise the level of the effect <you choose> by <1>.",
      "I will raise the level of the effect <of your choice> by <1>.",
      "I will raise the level of the effect <you chose> by <1>."
    ],
    slotType: 3,
    type: "lawful",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "ofyisuN6",
    pickRatio: 127500,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will raise the level of the effect <you choose> by <2>.",
      "I will raise the level of the effect <of your choice> by <2>.",
      "I will raise the level of the effect <you chose> by <2>."
    ],
    slotType: 3,
    type: "lawful",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 10000,
        value: [
          2,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "5kSp87eD",
    pickRatio: 150000,
    range: [
      0,
      0
    ],
    descriptions: [
      "<Highest level> I will raise the level of the effect by <2>.",
      "<Highest level> I will raise the effect level by <2>.",
      "<Highest Level> I will raise the effect level by <2>."
    ],
    slotType: 3,
    type: "lawful",
    applyLimit: 99,
    logics: [
      {
        type: "increaseMaxAndDecreaseTarget",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          2,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "/zilvZLj",
    pickRatio: 100000,
    range: [
      0,
      0
    ],
    descriptions: [
      "The effect created this time will go up <3> levels.",
      "The effect created this time will go up <3> levels.",
      "The effect created this time will go up <3> levels."
    ],
    slotType: 3,
    type: "lawful",
    applyLimit: 99,
    logics: [
      {
        type: "setEnchantIncreaseAmount",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          3,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "+8utgKU6",
    pickRatio: 100000,
    range: [
      0,
      0
    ],
    descriptions: [
      "This time, I will be transmute <3> effects at the same time.",
      "This time, I will be creating <3> effects at the same time.,,",
      "This time, we will create <3> effects at the same time.,,"
    ],
    slotType: 3,
    type: "lawful",
    applyLimit: 99,
    logics: [
      {
        type: "setEnchantEffectCount",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          3,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "XIp5VDkc",
    pickRatio: 2000000,
    range: [
      0,
      0
    ],
    descriptions: [
      "There will be no cost for any remaining conversions.,,,",
      "You won't need to pay for any remaining transmutations.",
      "You will not have to pay for any future transmutations."
    ],
    slotType: 3,
    type: "lawful",
    applyLimit: 1,
    logics: [
      {
        type: "decreasePrice",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          -10000,
          0
        ],
        remainTurn: 99
      }
    ]
  },
  {
    id: "TaZ9BkBv",
    pickRatio: 100000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will seal the effect <you choose>.",
      "I will seal the effect <of your choice>.",
      "I will seal the effect <you chose>."
    ],
    slotType: 3,
    type: "lawful",
    applyLimit: 99,
    logics: [
      {
        type: "sealTarget",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          0,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "ycA6pw+q",
    pickRatio: 600000,
    range: [
      0,
      0
    ],
    descriptions: [
      "Need more advice? I'll increase the number of times you see other advice by <2>.",
      "I'll increase the number of times I see your other advice by <2>.",
      "You should always listen to advice. I will increase the number of times you can View Other Advice by <2>."
    ],
    slotType: 3,
    type: "lawful",
    applyLimit: 99,
    logics: [
      {
        type: "increaseReroll",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          2,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "EzgocQZ1",
    pickRatio: 1400000,
    range: [
      0,
      0
    ],
    descriptions: [
      "Need more advice? I'll increase the number of times you see other advice by <1>.",
      "I will increase the number of views of your other advice by <1>.",
      "You should always listen to advice. I will increase the number of times you can View Other Advice by <1>."
    ],
    slotType: 3,
    type: "lawful",
    applyLimit: 99,
    logics: [
      {
        type: "increaseReroll",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "mYuyjIL/",
    pickRatio: 100000000,
    range: [
      0,
      0
    ],
    descriptions: [
      "It's the final step now. The effect <you select> will is sealed, and the transmutation will not consume an attempt this time.",
      "The alchemy is being completed. I will seal the effect of <your choice> and proceed with this conversion without consuming the opportunity.",
      "Let's wrap it up now. I will seal the effect of <your choice> and proceed with this combo without consuming the opportunity."
    ],
    slotType: 3,
    type: "lawfulSeal",
    applyLimit: 99,
    logics: [
      {
        type: "sealTarget",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          0,
          0
        ],
        remainTurn: 1
      },
      {
        type: "decreaseTurnLeft",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          -1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "tDM7WU8A",
    pickRatio: 100000000,
    range: [
      0,
      0
    ],
    descriptions: [
      "Now, let’s finish this quickly. The effect <of your choice> will be sealed, and the effect created this time will go up <2> levels.",
      "The alchemy is being completed. The effect <of your choice> will be sealed, and the effect created this time will go up <2> levels.",
      "Let's wrap it up now. The effect <you chose> will be sealed, and the effect that will be combined this time will go up <2> levels."
    ],
    slotType: 3,
    type: "lawfulSeal",
    applyLimit: 99,
    logics: [
      {
        type: "sealTarget",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          0,
          0
        ],
        remainTurn: 1
      },
      {
        type: "setEnchantIncreaseAmount",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          2,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "jDRIeRQj",
    pickRatio: 100000000,
    range: [
      0,
      0
    ],
    descriptions: [
      "Now, let’s finish this quickly. The effect <of your choice> will be sealed, and this conversion will combine <2> effects at the same time.,,,",
      "It's almost over. The effect <you selected> will be sealed, and i will transmute <2> effects at the same time.",
      "Let's wrap it up now. The effect <you chose> will be sealed, and this conversion will combine <2> effects at the same time.,,,"
    ],
    slotType: 3,
    type: "lawfulSeal",
    applyLimit: 99,
    logics: [
      {
        type: "sealTarget",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          0,
          0
        ],
        remainTurn: 1
      },
      {
        type: "setEnchantEffectCount",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          2,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "WMJBJxRd",
    pickRatio: 1,
    range: [
      0,
      0
    ],
    descriptions: [
      "Now, let’s finish this quickly. I will seal the effect <you choose>.",
      "The alchemy is being completed. I will seal the effect <of your choice>.",
      "Let's wrap it up now. I will seal the effect <you chose>."
    ],
    slotType: 3,
    type: "lawfulSeal",
    applyLimit: 99,
    logics: [
      {
        type: "sealTarget",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          0,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "duDeuWzL",
    pickRatio: 1000000,
    range: [
      0,
      0
    ],
    descriptions: [
      "<Random effect> Unseal <1> and seal <1> other effects.",
      "<Random effect> I will remove <1> seals. Instead, let's seal <1> other effects.",
      "<Random effect> I will remove <1> seals. Instead, <1> other effects are sealed."
    ],
    slotType: 3,
    type: "chaos",
    applyLimit: 99,
    logics: [
      {
        type: "unsealAndSealOther",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          0,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "Q1+1MRri",
    pickRatio: 1250000,
    range: [
      0,
      0
    ],
    descriptions: [
      "Let’s mix up the steps in <All Effects>. Let's see how it all mixes up.",
      "I'm going to mix up the steps for <all effects>. I hope you get good results.",
      "Let me mix up the steps of <All Effects>. I hope you get the results you want."
    ],
    slotType: 3,
    type: "chaos",
    applyLimit: 99,
    logics: [
      {
        type: "shuffleAll",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          0,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "6qTJU2I2",
    pickRatio: 1250000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I can redistribute the levels for <all effects>. Let's see how it shakes out.",
      "I will redistribute the stages of <all effects>. I hope you get good results.",
      "Redistribute the stages of <all effects>. I hope you get the results you want."
    ],
    slotType: 3,
    type: "chaos",
    applyLimit: 99,
    logics: [
      {
        type: "redistributeAll",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          0,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "SlBzYKh5",
    pickRatio: 500000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will increase <random> effect by <2> level. Let's see which effect it will be.",
      "<Random Effect> I'll raise <1> levels <2>.",
      "<Random Effect> I will raise <1> level to <2>. I don't know what effect it will have."
    ],
    slotType: 3,
    type: "chaos",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "random",
        targetCondition: 0,
        targetCount: 1,
        ratio: 10000,
        value: [
          2,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "tyuFeHnJ",
    pickRatio: 1000000,
    range: [
      0,
      0
    ],
    descriptions: [
      "This can't go on. I will <reset> the effect and stage of the elixir.",
      "The flow is not good. I will <reset> the Elixir's effects and levels.",
      "This is proving troublesome. I will <reset> the Elixir's effects and levels."
    ],
    slotType: 3,
    type: "chaos",
    applyLimit: 99,
    logics: [
      {
        type: "restart",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          0,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "WgHhNIkc",
    pickRatio: 1000000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I'll change the effect of the slot <you choose>. Let's see what effect it will have.",
      "I will change the effect of the slot <you selected>. I hope you get good results.",
      "Let’s change the effect of the slot <you chose>. I hope you get the results you want."
    ],
    slotType: 3,
    type: "chaos",
    applyLimit: 99,
    logics: [
      {
        type: "changeEffect",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          0,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "dzmT6oDh",
    pickRatio: 1500000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will <exhaust> all of my power. But, I will increase the level of the effect <you selected> by [<0>~<+4>].",
      "I will <exhaust> all of my power. But, I will increase the level of the effect <you selected> by [<0>~<+4>].",
      "I will <exhaust> all of my power. But, I will increase the level of the effect <you selected> by [<0>~<+4>].",
    ],
    slotType: 0,
    type: "chaos",
    applyLimit: 1,
    logics: [
      {
        type: "increaseTargetRanged",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          0,
          4
        ],
        remainTurn: 1
      },
      {
        type: "exhaust",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "iK1sybsd",
    pickRatio: 1500000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will <exhaust> all of my power. But, I will increase the level of the effect <you selected> by [<+2>~<+3>].",
      "I will <exhaust> all of my power. But, I will increase the level of the effect <you selected> by [<+2>~<+3>].",
      "I will <exhaust> all of my power. But, I will increase the level of the effect <you selected> by [<+2>~<+3>]."
    ],
    slotType: 1,
    type: "chaos",
    applyLimit: 1,
    logics: [
      {
        type: "increaseTargetRanged",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          2,
          3
        ],
        remainTurn: 1
      },
      {
        type: "exhaust",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          2,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "catBzLT2",
    pickRatio: 1500000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I will <exhaust> all of my power. But, I will increase the level of the effect <you selected> by [<-4>-<+5>].",
      "I will <exhaust> all of my power. But, I will increase the level of the effect <you selected> by [<-4>-<+5>].",
      "I will <exhaust> all of my power. But, I will increase the level of the effect <you selected> by [<-4>-<+5>]."
    ],
    slotType: 2,
    type: "chaos",
    applyLimit: 1,
    logics: [
      {
        type: "increaseTargetRanged",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          -4,
          5
        ],
        remainTurn: 1
      },
      {
        type: "exhaust",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          3,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "gskS6IVo",
    pickRatio: 625000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I'll move the levels of <all effects> up <1> slot for you.",
      "I will move <all effects> up <1> slot.,,,",
      "I'll move the levels of <all effects> up <1> slot for you."
    ],
    slotType: 3,
    type: "chaos",
    applyLimit: 99,
    logics: [
      {
        type: "shiftAll",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          0,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "5Zh4+5A2",
    pickRatio: 625000,
    range: [
      0,
      0
    ],
    descriptions: [
      "I'll move the levels of <all effects> down <1> slot.",
      "I'll move the levels of <all effects> down <1> slot.",
      "I'll move the levels of <all effects> down <1> slot for you."
    ],
    slotType: 3,
    type: "chaos",
    applyLimit: 99,
    logics: [
      {
        type: "shiftAll",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "Nvbbk1oK",
    pickRatio: 200000,
    range: [
      0,
      0
    ],
    descriptions: [
      "All stages of the effect <you choose> are divided into other effects. Let's see how it's divided.",
      "All levels of the effect <of your choice> will be randomly distributed among other effects. I hope you get good results.",
      "Let’s divide all the stages of the effect <you chose> into other effects. May your wishes come true."
    ],
    slotType: 3,
    type: "chaos",
    applyLimit: 99,
    logics: [
      {
        type: "redistributeSelectedToOthers",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          0,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "neWy7Q1Q",
    pickRatio: 400000,
    range: [
      0,
      0
    ],
    descriptions: [
      "<Lowest level> Effect <1> levels are all divided into other effects. Let's see how it's divided.",
      "<Lowest level> Effect <1> All levels will be randomly distributed to other effects. I hope you get good results.",
      "<Lowest Level> Effect Let's divide all <1> levels into other effects. May your wishes come true."
    ],
    slotType: 3,
    type: "chaos",
    applyLimit: 99,
    logics: [
      {
        type: "redistributeMinToOthers",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          0,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "Wrr88BQQ",
    pickRatio: 400000,
    range: [
      0,
      0
    ],
    descriptions: [
      "<Highest level> Effect <1> levels are all divided into other effects. Let's see how it's divided.",
      "<Highest level> Effect <1> All levels will be randomly distributed to other effects. I hope you get good results.",
      "I will distribute all the levels of <1> effect with the <highest level> among the other effects. I hope things turn out the way you want."
    ],
    slotType: 3,
    type: "chaos",
    applyLimit: 99,
    logics: [
      {
        type: "redistributeMaxToOthers",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          0,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "NdpregIz",
    pickRatio: 100000000,
    range: [
      0,
      0
    ],
    descriptions: [
      "Now, let’s finish this quickly. I will seal the effect <of your choice> and raise <1> <random effects> by <1> level.",
      "The alchemy is being completed. I will seal the effect <of your choice> and raise <1> <random effects> by <1> level.",
      "Let's wrap it up now. I will seal the effect <of your choice> and raise <1> <1> level of <another effect> by <1>."
    ],
    slotType: 3,
    type: "chaosSeal",
    applyLimit: 99,
    logics: [
      {
        type: "sealTarget",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          0,
          0
        ],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "random",
        targetCondition: 0,
        targetCount: 1,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "Z85t18hM",
    pickRatio: 100000000,
    range: [
      0,
      0
    ],
    descriptions: [
      "It's the final step now. The effect to be <selected> will be sealed, and I will increase <1> effect with the <lowest level> by <1> level.",
      "The alchemy is being completed. I will seal the effect <of your choice> and raise the <lowest level> effect <1> level by <1>.,,",
      "We're at the final stage. I will seal the effect that <you chose> and increase <1> effect with the <lowest level> by <1> level."
    ],
    slotType: 3,
    type: "chaosSeal",
    applyLimit: 99,
    logics: [
      {
        type: "sealTarget",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          0,
          0
        ],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "minValue",
        targetCondition: 0,
        targetCount: 1,
        ratio: 10000,
        value: [
          1,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "d7DeSvZO",
    pickRatio: 100000000,
    range: [
      0,
      0
    ],
    descriptions: [
      "Now, let’s finish this quickly. We will seal the effect <of your choice> and randomly redistribute the stages of <all effects>. Good luck.",
      "The alchemy is being completed. The effect <of your choice> will be sealed, and the stages of <all effects> will be randomly redistributed. I hope you get good results.",
      "Let's wrap it up now. The effect <of your choice> is sealed, and the stages of <all effects> are randomly redistributed. May your wishes come true."
    ],
    slotType: 3,
    type: "chaosSeal",
    applyLimit: 99,
    logics: [
      {
        type: "sealTarget",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          0,
          0
        ],
        remainTurn: 1
      },
      {
        type: "redistributeAll",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          0,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "Gw3wxrgY",
    pickRatio: 100000000,
    range: [
      0,
      0
    ],
    descriptions: [
      "Now, let’s finish this quickly. I will seal the effect <of your choice> and randomly mix the stages of <all effects>. Good luck.",
      "The alchemy is being completed. I will seal the effect <of your choice> and randomly shuffle the stages of <all effects>. I hope you get good results.",
      "Let's wrap it up now. We will seal the effect <of your choice> and randomly shuffle the stages of <all effects>. May your wishes come true."
    ],
    slotType: 3,
    type: "chaosSeal",
    applyLimit: 99,
    logics: [
      {
        type: "sealTarget",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          0,
          0
        ],
        remainTurn: 1
      },
      {
        type: "shuffleAll",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          0,
          0
        ],
        remainTurn: 1
      }
    ]
  },
  {
    id: "v31V/eFJ",
    pickRatio: 1,
    range: [
      0,
      0
    ],
    descriptions: [
      "Now, let’s finish this quickly. I will seal the effect <you choose>.",
      "The alchemy is being completed. I will seal the effect <of your choice>.",
      "Let's wrap it up now. I will seal the effect <you chose>."
    ],
    slotType: 3,
    type: "chaosSeal",
    applyLimit: 99,
    logics: [
      {
        type: "sealTarget",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [
          0,
          0
        ],
        remainTurn: 1
      }
    ]
  }
];

export const councilRecord = Object.fromEntries(
  councils.map((item) => [item.id, item])
);

export const councilsPerType: Record<CouncilType, Council[]> = {
  common: councils.filter((data) => data.type === "common"),
  exhausted: councils.filter((data) => data.type === "exhausted"),
  lawful: councils.filter((data) => data.type === "lawful"),
  lawfulSeal: councils.filter((data) => data.type === "lawfulSeal"),
  chaos: councils.filter((data) => data.type === "chaos"),
  chaosSeal: councils.filter((data) => data.type === "chaosSeal"),
  seal: councils.filter((data) => data.type === "seal"),
};
