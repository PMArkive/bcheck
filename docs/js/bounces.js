window.BOUNCES = {
  DEFAULT: [
    {
      text: 'Walk',
      vel: -6
    },
    {
      text: 'Crouch Walk',
      vel: -6,
      crouched: true
    },
    {
      text: 'Jump',
      vel: 283
    },
    {
      text: 'Crouch Jump',
      vel: 289
    },
    {
      text: 'Ctap',
      vel: 289,
      crouched: true
    },
    {
      text: 'Ceilingsmash',
      vel: -6,
      ceiling: true
    }
  ],
  SPECIAL: [
    {
      weapon: 'Stock',
      setup: [
        'STAND',
        'SHOOT'
      ],
      bounces: [
        {
          speedo: 98,
          vel: 416.319,
          chance: 100
        }
      ]
    },
    {
      weapon: 'Stock',
      setup: [
        'WALK',
        'FORWARD',
        'SHOOT'
      ],
      bounces: [
        {
          speedo: 351,
          vel: 395.33374,
          chance: 48.65
        },
        {
          speedo: 326,
          vel: 405.235382,
          chance: 35.14,
          alt: true
        }
      ]
    },
    {
      weapon: 'Stock',
      setup: [
        'WALK',
        'BACK',
        'SHOOT'
      ],
      bounces: [
        {
          speedo: 296,
          vel: 407.481567,
          chance: 48.65
        },
        {
          speedo: 272,
          vel: 413.381652,
          chance: 35.14,
          alt: true
        }
      ]
    },
    {
      weapon: 'Stock',
      setup: [
        'WALK',
        'LEFT',
        'SHOOT'
      ],
      bounces: [
        {
          speedo: 407,
          vel: 371.735717,
          chance: 49.55
        },
        {
          speedo: 386,
          vel: 387.53543,
          chance: 30.63,
          alt: true
        }
      ]
    },
    {
      weapon: 'Stock',
      setup: [
        'WALK',
        'RIGHT',
        'SHOOT'
      ],
      bounces: [
        {
          speedo: 232,
          vel: 445.529541,
          chance: 54.05
        },
        {
          speedo: 200,
          vel: 438.719512,
          chance: 29.73,
          alt: true
        }
      ]
    },
    {
      weapon: 'Stock',
      setup: [
        'WALK',
        'FORWARD',
        'LEFT',
        'SHOOT'
      ],
      bounces: [
        {
          speedo: 396,
          vel: 376.544952,
          chance: 44.14
        },
        {
          speedo: 374,
          vel: 391.188171,
          chance: 35.14,
          alt: true
        }
      ]
    },
    {
      weapon: 'Stock',
      setup: [
        'WALK',
        'FORWARD',
        'RIGHT',
        'SHOOT'
      ],
      bounces: [
        {
          speedo: 283,
          vel: 422.11798,
          chance: 52.25
        },
        {
          speedo: 254,
          vel: 424.538757,
          chance: 34.23,
          alt: true
        }
      ]
    },
    {
      weapon: 'Stock',
      setup: [
        'WALK',
        'BACK',
        'LEFT',
        'SHOOT'
      ],
      bounces: [
        {
          speedo: 383,
          vel: 382.178741,
          chance: 53.15
        },
        {
          speedo: 360,
          vel: 395.437683,
          chance: 33.33,
          alt: true
        }
      ]
    },
    {
      weapon: 'Stock',
      setup: [
        'WALK',
        'BACK',
        'RIGHT',
        'SHOOT'
      ],
      bounces: [
        {
          speedo: 258,
          vel: 432.108093,
          chance: 49.55
        },
        {
          speedo: 228,
          vel: 431.310729,
          chance: 33.33,
          alt: true
        }
      ]
    },
    {
      weapon: 'Stock',
      setup: [
        'CROUCH',
        'SHOOT'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 217,
          vel: 591.277832,
          chance: 100
        }
      ]
    },
    {
      weapon: 'Stock',
      setup: [
        'CROUCH',
        'FORWARD',
        'SHOOT'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 180,
          vel: 600.576538,
          chance: 55.86
        },
        {
          speedo: 179,
          vel: 596.23114,
          chance: 32.43,
          alt: true
        }
      ]
    },
    {
      weapon: 'Stock',
      setup: [
        'CROUCH',
        'BACK',
        'SHOOT'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 295,
          vel: 579.760192,
          chance: 60.36
        },
        {
          speedo: 284,
          vel: 585.770141,
          chance: 28.83,
          alt: true
        }
      ]
    },
    {
      weapon: 'Stock',
      setup: [
        'CROUCH',
        'LEFT',
        'SHOOT'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 311,
          vel: 576.230163,
          chance: 45.05
        },
        {
          speedo: 299,
          vel: 583.93341,
          chance: 43.24,
          alt: true
        }
      ]
    },
    {
      weapon: 'Stock',
      setup: [
        'CROUCH',
        'RIGHT',
        'SHOOT'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 134,
          vel: 604.681518,
          chance: 58.56
        },
        {
          speedo: 133,
          vel: 598.21228,
          chance: 23.42,
          alt: true
        }
      ]
    },
    {
      weapon: 'Stock',
      setup: [
        'CROUCH',
        'FORWARD',
        'LEFT',
        'SHOOT'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 259,
          vel: 587.184082,
          chance: 62.16
        },
        {
          speedo: 251,
          vel: 589.575561,
          chance: 20.72,
          alt: true
        }
      ]
    },
    {
      weapon: 'Stock',
      setup: [
        'CROUCH',
        'FORWARD',
        'RIGHT',
        'SHOOT'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 45,
          vel: 608.237731,
          chance: 55.86
        },
        {
          speedo: 45,
          vel: 599.904296,
          chance: 31.53,
          alt: true
        }
      ]
    },
    {
      weapon: 'Stock',
      setup: [
        'CROUCH',
        'BACK',
        'LEFT',
        'SHOOT'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 324,
          vel: 573.304931,
          chance: 60.36
        },
        {
          speedo: 310,
          vel: 582.39862,
          chance: 22.52,
          alt: true
        }
      ]
    },
    {
      weapon: 'Stock',
      setup: [
        'CROUCH',
        'BACK',
        'RIGHT',
        'SHOOT'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 230,
          vel: 592.536987,
          chance: 62.16
        },
        {
          speedo: 224,
          vel: 592.269409,
          chance: 26.13,
          alt: true
        }
      ]
    },
    {
      weapon: 'Original',
      setup: [
        'STAND',
        'SHOOT'
      ],
      bounces: [
        {
          speedo: 15,
          vel: 445.986602,
          chance: 100
        }
      ]
    },
    {
      weapon: 'Original',
      setup: [
        'WALK',
        'FORWARD',
        'SHOOT'
      ],
      bounces: [
        {
          speedo: 343,
          vel: 413.769622,
          chance: 57.66
        },
        {
          speedo: 316,
          vel: 426.488433,
          chance: 31.53,
          alt: true
        }
      ]
    },
    {
      weapon: 'Original',
      setup: [
        'WALK',
        'BACK',
        'SHOOT'
      ],
      bounces: [
        {
          speedo: 284,
          vel: 429.626953,
          chance: 52.25
        },
        {
          speedo: 257,
          vel: 439.039428,
          chance: 34.23,
          alt: true
        }
      ]
    },
    {
      weapon: 'Original',
      setup: [
        'WALK',
        'SIDE',
        'SHOOT'
      ],
      bounces: [
        {
          speedo: 330,
          vel: 419.643859,
          chance: 63.96
        },
        {
          speedo: 302,
          vel: 431.38858,
          chance: 32.43,
          alt: true
        }
      ]
    },
    {
      weapon: 'Original',
      setup: [
        'WALK',
        'FORWARD',
        'SIDE',
        'SHOOT'
      ],
      bounces: [
        {
          speedo: 340,
          vel: 415.439941,
          chance: 54.05
        },
        {
          speedo: 312,
          vel: 427.86618,
          chance: 34.23,
          alt: true
        }
      ]
    },
    {
      weapon: 'Original',
      setup: [
        'WALK',
        'BACK',
        'SIDE',
        'SHOOT'
      ],
      bounces: [
        {
          speedo: 321,
          vel: 424.150573,
          chance: 58.56
        },
        {
          speedo: 292,
          vel: 435.301727,
          chance: 33.33,
          alt: true
        }
      ]
    },
    {
      weapon: 'Original',
      setup: [
        'CROUCH',
        'SHOOT'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 137,
          vel: 631.863647,
          chance: 100
        }
      ]
    },
    {
      weapon: 'Original',
      setup: [
        'CROUCH',
        'FORWARD',
        'SHOOT'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 30,
          vel: 645.275146,
          chance: 63.06
        },
        {
          speedo: 30,
          vel: 638.805725,
          chance: 27.93,
          alt: true
        }
      ]
    },
    {
      weapon: 'Original',
      setup: [
        'CROUCH',
        'BACK',
        'SHOOT'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 251,
          vel: 616.712707,
          chance: 58.56
        },
        {
          speedo: 234,
          vel: 624.486633,
          chance: 27.03,
          alt: true
        }
      ]
    },
    {
      weapon: 'Original',
      setup: [
        'CROUCH',
        'SIDE',
        'SHOOT'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 180,
          vel: 629.907104,
          chance: 67.57
        },
        {
          speedo: 169,
          vel: 631.370727,
          chance: 26.13,
          alt: true
        }
      ]
    },
    {
      weapon: 'Original',
      setup: [
        'CROUCH',
        'FORWARD',
        'SIDE',
        'SHOOT'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 102,
          vel: 640.437683,
          chance: 63.06
        },
        {
          speedo: 102,
          vel: 636.55841,
          chance: 30.63,
          alt: true
        }
      ]
    },
    {
      weapon: 'Original',
      setup: [
        'CROUCH',
        'BACK',
        'SIDE',
        'SHOOT'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 233,
          vel: 620.42218,
          chance: 63.06
        },
        {
          speedo: 217,
          vel: 626.455749,
          chance: 33.33,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler',
      setup: [
        'STAND',
        'SHOOT'
      ],
      bounces: [
        {
          speedo: 68,
          vel: 429.504943,
          chance: 100
        }
      ]
    },
    {
      weapon: 'Mangler',
      setup: [
        'WALK',
        'FORWARD',
        'SHOOT'
      ],
      bounces: [
        {
          speedo: 347,
          vel: 405.110046,
          chance: 64.86
        },
        {
          speedo: 321,
          vel: 416.23529,
          chance: 23.42,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler',
      setup: [
        'WALK',
        'BACK',
        'SHOOT'
      ],
      bounces: [
        {
          speedo: 290,
          vel: 418.827362,
          chance: 65.77
        },
        {
          speedo: 264,
          vel: 425.841766,
          chance: 26.13,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler',
      setup: [
        'WALK',
        'LEFT',
        'SHOOT'
      ],
      bounces: [
        {
          speedo: 385,
          vel: 388.863159,
          chance: 64.86
        },
        {
          speedo: 361,
          vel: 403.760559,
          chance: 27.93,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler',
      setup: [
        'WALK',
        'RIGHT',
        'SHOOT'
      ],
      bounces: [
        {
          speedo: 266,
          vel: 442.259979,
          chance: 54.95
        },
        {
          speedo: 234,
          vel: 445.7789,
          chance: 33.33,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler',
      setup: [
        'WALK',
        'FORWARD',
        'LEFT',
        'SHOOT'
      ],
      bounces: [
        {
          speedo: 379,
          vel: 391.511291,
          chance: 64.86
        },
        {
          speedo: 355,
          vel: 405.800903,
          chance: 27.93,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler',
      setup: [
        'WALK',
        'FORWARD',
        'RIGHT',
        'SHOOT'
      ],
      bounces: [
        {
          speedo: 300,
          vel: 425.028961,
          chance: 69.37
        },
        {
          speedo: 271,
          vel: 431.53305,
          chance: 21.62,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler',
      setup: [
        'WALK',
        'BACK',
        'LEFT',
        'SHOOT'
      ],
      bounces: [
        {
          speedo: 364,
          vel: 397.972442,
          chance: 54.05
        },
        {
          speedo: 339,
          vel: 410.766113,
          chance: 34.23,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler',
      setup: [
        'WALK',
        'BACK',
        'RIGHT',
        'SHOOT'
      ],
      bounces: [
        {
          speedo: 277,
          vel: 435.86676,
          chance: 56.76
        },
        {
          speedo: 246,
          vel: 440.122528,
          chance: 36.04,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler',
      setup: [
        'CROUCH',
        'SHOOT'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 179,
          vel: 612.280639,
          chance: 100
        }
      ]
    },
    {
      weapon: 'Mangler',
      setup: [
        'CROUCH',
        'FORWARD',
        'SHOOT'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 126,
          vel: 623.125183,
          chance: 64.86
        },
        {
          speedo: 125,
          vel: 618.018554,
          chance: 30.63,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler',
      setup: [
        'CROUCH',
        'BACK',
        'SHOOT'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 273,
          vel: 599.184448,
          chance: 64.86
        },
        {
          speedo: 259,
          vel: 605.981567,
          chance: 30.63,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler',
      setup: [
        'CROUCH',
        'LEFT',
        'SHOOT'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 268,
          vel: 600.183654,
          chance: 58.56
        },
        {
          speedo: 254,
          vel: 606.503662,
          chance: 36.94,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler',
      setup: [
        'CROUCH',
        'RIGHT',
        'SHOOT'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 138,
          vel: 621.940856,
          chance: 57.66
        },
        {
          speedo: 137,
          vel: 617.449707,
          chance: 33.33,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler',
      setup: [
        'CROUCH',
        'FORWARD',
        'LEFT',
        'SHOOT'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 209,
          vel: 611.391235,
          chance: 60.36
        },
        {
          speedo: 200,
          vel: 612.250427,
          chance: 35.14,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler',
      setup: [
        'CROUCH',
        'FORWARD',
        'RIGHT',
        'SHOOT'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 31,
          vel: 627.835815,
          chance: 67.57
        },
        {
          speedo: 31,
          vel: 620.246826,
          chance: 30.63,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler',
      setup: [
        'CROUCH',
        'BACK',
        'LEFT',
        'SHOOT'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 290,
          vel: 595.373779,
          chance: 69.37
        },
        {
          speedo: 275,
          vel: 603.976745,
          chance: 27.93,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler',
      setup: [
        'CROUCH',
        'BACK',
        'RIGHT',
        'SHOOT'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 218,
          vel: 609.867736,
          chance: 65.77
        },
        {
          speedo: 208,
          vel: 611.481689,
          chance: 30.63,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler Charged',
      setup: [
        'STAND',
        'SHOOT'
      ],
      bounces: [
        {
          speedo: 69,
          vel: 433.183502,
          chance: 100
        }
      ]
    },
    {
      weapon: 'Mangler Charged',
      setup: [
        'WALK',
        'FORWARD',
        'SHOOT'
      ],
      bounces: [
        {
          speedo: 243,
          vel: 423.834503,
          chance: 69
        },
        {
          speedo: 198,
          vel: 428.814086,
          chance: 30,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler Charged',
      setup: [
        'WALK',
        'BACK',
        'SHOOT'
      ],
      bounces: [
        {
          speedo: 216,
          vel: 430.357269,
          chance: 70
        },
        {
          speedo: 170,
          vel: 433.025512,
          chance: 28,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler Charged',
      setup: [
        'WALK',
        'LEFT',
        'SHOOT'
      ],
      bounces: [
        {
          speedo: 283,
          vel: 413.825408,
          chance: 69
        },
        {
          speedo: 237,
          vel: 422.203369,
          chance: 26,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler Charged',
      setup: [
        'WALK',
        'RIGHT',
        'SHOOT'
      ],
      bounces: [
        {
          speedo: 153,
          vel: 445.936309,
          chance: 56
        },
        {
          speedo: 104,
          vel: 441.904327,
          chance: 37,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler Charged',
      setup: [
        'WALK',
        'FORWARD',
        'LEFT',
        'SHOOT'
      ],
      bounces: [
        {
          speedo: 277,
          vel: 415.475982,
          chance: 59
        },
        {
          speedo: 231,
          vel: 423.302856,
          chance: 33,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler Charged',
      setup: [
        'WALK',
        'FORWARD',
        'RIGHT',
        'SHOOT'
      ],
      bounces: [
        {
          speedo: 193,
          vel: 435.759918,
          chance: 63
        },
        {
          speedo: 146,
          vel: 436.406677,
          chance: 29,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler Charged',
      setup: [
        'WALK',
        'BACK',
        'LEFT',
        'SHOOT'
      ],
      bounces: [
        {
          speedo: 261,
          vel: 419.471618,
          chance: 65
        },
        {
          speedo: 215,
          vel: 425.950103,
          chance: 32,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler Charged',
      setup: [
        'WALK',
        'BACK',
        'RIGHT',
        'SHOOT'
      ],
      bounces: [
        {
          speedo: 166,
          vel: 442.140319,
          chance: 62
        },
        {
          speedo: 118,
          vel: 440.103179,
          chance: 36,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler Charged',
      setup: [
        'CROUCH',
        'SHOOT'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 182,
          vel: 620.069213,
          chance: 100
        }
      ]
    },
    {
      weapon: 'Mangler Charged',
      setup: [
        'CROUCH',
        'FORWARD',
        'SHOOT'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 127,
          vel: 624.746704,
          chance: 70
        },
        {
          speedo: 126,
          vel: 622.266784,
          chance: 26,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler Charged',
      setup: [
        'CROUCH',
        'BACK',
        'SHOOT'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 224,
          vel: 614.964904,
          chance: 67
        },
        {
          speedo: 213,
          vel: 617.782348,
          chance: 33,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler Charged',
      setup: [
        'CROUCH',
        'LEFT',
        'SHOOT'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 221,
          vel: 615.392578,
          chance: 56
        },
        {
          speedo: 210,
          vel: 617.981994,
          chance: 42,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler Charged',
      setup: [
        'CROUCH',
        'RIGHT',
        'SHOOT'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 139,
          vel: 624.288574,
          chance: 58
        },
        {
          speedo: 138,
          vel: 622.060729,
          chance: 38,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler Charged',
      setup: [
        'CROUCH',
        'FORWARD',
        'LEFT',
        'SHOOT'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 187,
          vel: 620.081176,
          chance: 65
        },
        {
          speedo: 184,
          vel: 620.149597,
          chance: 34,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler Charged',
      setup: [
        'CROUCH',
        'FORWARD',
        'RIGHT',
        'SHOOT'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 31,
          vel: 626.536743,
          chance: 70
        },
        {
          speedo: 31,
          vel: 623.067565,
          chance: 29,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler Charged',
      setup: [
        'CROUCH',
        'BACK',
        'LEFT',
        'SHOOT'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 235,
          vel: 613.31958,
          chance: 69
        },
        {
          speedo: 221,
          vel: 617.011657,
          chance: 30,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler Charged',
      setup: [
        'CROUCH',
        'BACK',
        'RIGHT',
        'SHOOT'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 192,
          vel: 619.456237,
          chance: 69
        },
        {
          speedo: 188,
          vel: 619.862792,
          chance: 31,
          alt: true
        }
      ]
    }
  ],
  ANGLES: [
    {
      all: {
        weapon: '*'
      }
    },
    {
      text: 'Biggest Angle',
      ang: -1
    },
    {
      text: 'Biggest Angle Crouched',
      ang: -1,
      crouched: true
    }
  ],
  JDS: [
    {
      weapon: 'Stock',
      setup: [
        'STAND',
        'JDS'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 105,
          vel: 915.37268,
          offs: 35.899993,
          chance: 64.86
        },
        {
          speedo: 112,
          vel: 937.984741,
          offs: 32.195007,
          chance: 27.03,
          alt: true
        }
      ]
    },
    {
      weapon: 'Stock',
      setup: [
        'WALK',
        'FORWARD',
        'JDS'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 362,
          vel: 900.275207,
          offs: 35.899993,
          chance: 49.55
        },
        {
          speedo: 341,
          vel: 929.539611,
          offs: 32.195007,
          chance: 31.53,
          alt: true
        }
      ]
    },
    {
      weapon: 'Stock',
      setup: [
        'WALK',
        'BACK',
        'JDS'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 304,
          vel: 909.126892,
          offs: 35.899993,
          chance: 48.65
        },
        {
          speedo: 283,
          vel: 935.684814,
          offs: 32.195007,
          chance: 42.34,
          alt: true
        }
      ]
    },
    {
      weapon: 'Stock',
      setup: [
        'WALK',
        'LEFT',
        'JDS'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 429,
          vel: 880.177001,
          offs: 35.899993,
          chance: 52.25
        },
        {
          speedo: 413,
          vel: 914.154418,
          offs: 32.195007,
          chance: 41.44,
          alt: true
        }
      ]
    },
    {
      weapon: 'Stock',
      setup: [
        'WALK',
        'RIGHT',
        'JDS'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 232,
          vel: 929.599243,
          offs: 35.899993,
          chance: 69.37
        },
        {
          speedo: 197,
          vel: 951.544433,
          offs: 32.195007,
          chance: 18.92,
          alt: true
        }
      ]
    },
    {
      weapon: 'Stock',
      setup: [
        'WALK',
        'FORWARD',
        'LEFT',
        'JDS'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 416,
          vel: 884.554809,
          offs: 35.899993,
          chance: 54.95
        },
        {
          speedo: 398,
          vel: 917.526245,
          offs: 32.195007,
          chance: 34.23,
          alt: true
        }
      ]
    },
    {
      weapon: 'Stock',
      setup: [
        'WALK',
        'FORWARD',
        'RIGHT',
        'JDS'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 285,
          vel: 919.131896,
          offs: 35.899993,
          chance: 45.05
        },
        {
          speedo: 257,
          vel: 943.75122,
          offs: 32.195007,
          chance: 40.54,
          alt: true
        }
      ]
    },
    {
      weapon: 'Stock',
      setup: [
        'WALK',
        'BACK',
        'LEFT',
        'JDS'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 401,
          vel: 889.213439,
          offs: 35.899993,
          chance: 43.24
        },
        {
          speedo: 382,
          vel: 921.101745,
          offs: 32.195007,
          chance: 41.44,
          alt: true
        }
      ]
    },
    {
      weapon: 'Stock',
      setup: [
        'WALK',
        'BACK',
        'RIGHT',
        'JDS'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 260,
          vel: 924.433593,
          offs: 35.899993,
          chance: 50.45
        },
        {
          speedo: 228,
          vel: 947.707092,
          offs: 32.195007,
          chance: 39.64,
          alt: true
        }
      ]
    },
    {
      weapon: 'Original',
      setup: [
        'STAND',
        'JDS'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 15,
          vel: 929.68695,
          offs: 35.899993,
          chance: 49.55
        },
        {
          speedo: 16,
          vel: 953.976379,
          offs: 32.195007,
          chance: 42.34,
          alt: true
        }
      ]
    },
    {
      weapon: 'Original',
      setup: [
        'WALK',
        'FORWARD',
        'JDS'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 350,
          vel: 913.787658,
          offs: 35.899993,
          chance: 48.65
        },
        {
          speedo: 324,
          vel: 945.002929,
          offs: 32.195007,
          chance: 43.24,
          alt: true
        }
      ]
    },
    {
      weapon: 'Original',
      setup: [
        'WALK',
        'BACK',
        'JDS'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 288,
          vel: 923.102905,
          offs: 35.899993,
          chance: 49.55
        },
        {
          speedo: 262,
          vel: 951.530395,
          offs: 32.195007,
          chance: 40.54,
          alt: true
        }
      ]
    },
    {
      weapon: 'Original',
      setup: [
        'WALK',
        'SIDE',
        'JDS'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 336,
          vel: 917.451354,
          offs: 35.899993,
          chance: 53.15
        },
        {
          speedo: 309,
          vel: 947.807617,
          offs: 32.195007,
          chance: 43.24,
          alt: true
        }
      ]
    },
    {
      weapon: 'Original',
      setup: [
        'WALK',
        'FORWARD',
        'SIDE',
        'JDS'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 346,
          vel: 914.855651,
          offs: 35.899993,
          chance: 54.05
        },
        {
          speedo: 320,
          vel: 945.821289,
          offs: 32.195007,
          chance: 33.33,
          alt: true
        }
      ]
    },
    {
      weapon: 'Original',
      setup: [
        'WALK',
        'BACK',
        'SIDE',
        'JDS'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 326,
          vel: 920.072509,
          offs: 35.899993,
          chance: 51.35
        },
        {
          speedo: 298,
          vel: 949.809265,
          offs: 32.195007,
          chance: 33.33,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler',
      setup: [
        'STAND',
        'JDS'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 71,
          vel: 923.230407,
          offs: 35.899993,
          chance: 69.37
        },
        {
          speedo: 76,
          vel: 946.746337,
          offs: 32.195007,
          chance: 28.83,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler',
      setup: [
        'WALK',
        'FORWARD',
        'JDS'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 356,
          vel: 907.698364,
          offs: 35.899993,
          chance: 67.57
        },
        {
          speedo: 332,
          vel: 938.016723,
          offs: 32.195007,
          chance: 28.83,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler',
      setup: [
        'WALK',
        'BACK',
        'JDS'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 295,
          vel: 916.801391,
          offs: 35.899993,
          chance: 72.97
        },
        {
          speedo: 272,
          vel: 944.367858,
          offs: 32.195007,
          chance: 22.52,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler',
      setup: [
        'WALK',
        'LEFT',
        'JDS'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 400,
          vel: 894.896728,
          offs: 35.899993,
          chance: 63.06
        },
        {
          speedo: 380,
          vel: 928.197937,
          offs: 32.195007,
          chance: 32.43,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler',
      setup: [
        'WALK',
        'RIGHT',
        'JDS'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 267,
          vel: 928.724548,
          offs: 35.899993,
          chance: 77.48
        },
        {
          speedo: 234,
          vel: 953.932678,
          offs: 32.195007,
          chance: 19.82,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler',
      setup: [
        'WALK',
        'FORWARD',
        'LEFT',
        'JDS'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 393,
          vel: 897.163146,
          offs: 35.899993,
          chance: 57.66
        },
        {
          speedo: 372,
          vel: 929.943237,
          offs: 32.195007,
          chance: 30.63,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler',
      setup: [
        'WALK',
        'FORWARD',
        'RIGHT',
        'JDS'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 303,
          vel: 920.841674,
          offs: 35.899993,
          chance: 66.67
        },
        {
          speedo: 275,
          vel: 947.996704,
          offs: 32.195007,
          chance: 27.93,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler',
      setup: [
        'WALK',
        'BACK',
        'LEFT',
        'JDS'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 376,
          vel: 902.045532,
          offs: 35.899993,
          chance: 78.38
        },
        {
          speedo: 354,
          vel: 933.692871,
          offs: 32.195007,
          chance: 19.82,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler',
      setup: [
        'WALK',
        'BACK',
        'RIGHT',
        'JDS'
      ],
      crouched: true,
      bounces: [
        {
          speedo: 279,
          vel: 926.177551,
          offs: 35.899993,
          chance: 77.48
        },
        {
          speedo: 248,
          vel: 952.01892,
          offs: 32.195007,
          chance: 20.72,
          alt: true
        }
      ]
    }
  ],
  JS: [
    {
      weapon: 'Stock',
      setup: [
        'STAND',
        'JS'
      ],
      bounces: [
        {
          speedo: 88,
          vel: 725.269836,
          offs: 15.540008,
          chance: 49.55
        },
        {
          speedo: 94,
          vel: 742.135742,
          offs: 11.925018,
          chance: 29.73,
          alt: true
        }
      ]
    },
    {
      weapon: 'Stock',
      setup: [
        'WALK',
        'FORWARD',
        'JS'
      ],
      bounces: [
        {
          speedo: 340,
          vel: 709.042236,
          offs: 15.540008,
          chance: 65.77
        },
        {
          speedo: 322,
          vel: 732.690673,
          offs: 11.925018,
          chance: 25.23,
          alt: true
        }
      ]
    },
    {
      weapon: 'Stock',
      setup: [
        'WALK',
        'BACK',
        'JS'
      ],
      bounces: [
        {
          speedo: 288,
          vel: 718.4104,
          offs: 15.540008,
          chance: 46.85
        },
        {
          speedo: 270,
          vel: 739.512939,
          offs: 11.925018,
          chance: 34.23,
          alt: true
        }
      ]
    },
    {
      weapon: 'Stock',
      setup: [
        'WALK',
        'LEFT',
        'JS'
      ],
      bounces: [
        {
          speedo: 396,
          vel: 688.942749,
          offs: 15.540008,
          chance: 68.47
        },
        {
          speedo: 383,
          vel: 716.578735,
          offs: 11.925018,
          chance: 29.73,
          alt: true
        }
      ]
    },
    {
      weapon: 'Stock',
      setup: [
        'WALK',
        'RIGHT',
        'JS'
      ],
      bounces: [
        {
          speedo: 233,
          vel: 742.068115,
          offs: 15.540008,
          chance: 64.86
        },
        {
          speedo: 203,
          vel: 758.832153,
          offs: 11.925018,
          chance: 31.53,
          alt: true
        }
      ]
    },
    {
      weapon: 'Stock',
      setup: [
        'WALK',
        'FORWARD',
        'LEFT',
        'JS'
      ],
      bounces: [
        {
          speedo: 384,
          vel: 693.208251,
          offs: 15.540008,
          chance: 59.46
        },
        {
          speedo: 371,
          vel: 720.014038,
          offs: 11.925018,
          chance: 30.63,
          alt: true
        }
      ]
    },
    {
      weapon: 'Stock',
      setup: [
        'WALK',
        'FORWARD',
        'RIGHT',
        'JS'
      ],
      bounces: [
        {
          speedo: 277,
          vel: 729.526123,
          offs: 15.540008,
          chance: 61.26
        },
        {
          speedo: 252,
          vel: 748.940307,
          offs: 11.925018,
          chance: 34.23,
          alt: true
        }
      ]
    },
    {
      weapon: 'Stock',
      setup: [
        'WALK',
        'BACK',
        'LEFT',
        'JS'
      ],
      bounces: [
        {
          speedo: 372,
          vel: 697.816467,
          offs: 15.540008,
          chance: 64.86
        },
        {
          speedo: 357,
          vel: 723.715454,
          offs: 11.925018,
          chance: 28.83,
          alt: true
        }
      ]
    },
    {
      weapon: 'Stock',
      setup: [
        'WALK',
        'BACK',
        'RIGHT',
        'JS'
      ],
      bounces: [
        {
          speedo: 256,
          vel: 735.739196,
          offs: 15.540008,
          chance: 63.96
        },
        {
          speedo: 229,
          vel: 753.844238,
          offs: 11.925018,
          chance: 33.33,
          alt: true
        }
      ]
    },
    {
      weapon: 'Original',
      setup: [
        'STAND',
        'JS'
      ],
      bounces: [
        {
          speedo: 12,
          vel: 742.178833,
          offs: 15.540008,
          chance: 61.26
        },
        {
          speedo: 13,
          vel: 762.153015,
          offs: 11.925018,
          chance: 35.14,
          alt: true
        }
      ]
    },
    {
      weapon: 'Original',
      setup: [
        'WALK',
        'FORWARD',
        'JS'
      ],
      bounces: [
        {
          speedo: 332,
          vel: 723.501953,
          offs: 15.540008,
          chance: 63.96
        },
        {
          speedo: 312,
          vel: 750.467346,
          offs: 11.925018,
          chance: 31.53,
          alt: true
        }
      ]
    },
    {
      weapon: 'Original',
      setup: [
        'WALK',
        'BACK',
        'JS'
      ],
      bounces: [
        {
          speedo: 277,
          vel: 734.157958,
          offs: 15.540008,
          chance: 58.56
        },
        {
          speedo: 255,
          vel: 758.817749,
          offs: 11.925018,
          chance: 30.63,
          alt: true
        }
      ]
    },
    {
      weapon: 'Original',
      setup: [
        'WALK',
        'SIDE',
        'JS'
      ],
      bounces: [
        {
          speedo: 321,
          vel: 727.612854,
          offs: 15.540008,
          chance: 60.36
        },
        {
          speedo: 299,
          vel: 753.970092,
          offs: 11.925018,
          chance: 35.14,
          alt: true
        }
      ]
    },
    {
      weapon: 'Original',
      setup: [
        'WALK',
        'FORWARD',
        'SIDE',
        'JS'
      ],
      bounces: [
        {
          speedo: 329,
          vel: 724.690673,
          offs: 15.540008,
          chance: 60.36
        },
        {
          speedo: 308,
          vel: 751.477722,
          offs: 11.925018,
          chance: 36.94,
          alt: true
        }
      ]
    },
    {
      weapon: 'Original',
      setup: [
        'WALK',
        'BACK',
        'SIDE',
        'JS'
      ],
      bounces: [
        {
          speedo: 312,
          vel: 730.615722,
          offs: 15.540008,
          chance: 62.16
        },
        {
          speedo: 289,
          vel: 756.545776,
          offs: 11.925018,
          chance: 29.73,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler',
      setup: [
        'STAND',
        'JS'
      ],
      bounces: [
        {
          speedo: 60,
          vel: 734.303955,
          offs: 15.540008,
          chance: 68.47
        },
        {
          speedo: 65,
          vel: 752.631591,
          offs: 11.925018,
          chance: 27.93,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler',
      setup: [
        'WALK',
        'FORWARD',
        'JS'
      ],
      bounces: [
        {
          speedo: 336,
          vel: 716.866271,
          offs: 15.540008,
          chance: 60.36
        },
        {
          speedo: 317,
          vel: 742.170288,
          offs: 11.925018,
          chance: 36.04,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler',
      setup: [
        'WALK',
        'BACK',
        'JS'
      ],
      bounces: [
        {
          speedo: 282,
          vel: 726.880493,
          offs: 15.540008,
          chance: 65.77
        },
        {
          speedo: 262,
          vel: 749.6958,
          offs: 11.925018,
          chance: 31.53,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler',
      setup: [
        'WALK',
        'LEFT',
        'JS'
      ],
      bounces: [
        {
          speedo: 373,
          vel: 703.528076,
          offs: 15.540008,
          chance: 58.56
        },
        {
          speedo: 357,
          vel: 731.239379,
          offs: 11.925018,
          chance: 38.74,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler',
      setup: [
        'WALK',
        'RIGHT',
        'JS'
      ],
      bounces: [
        {
          speedo: 263,
          vel: 740.973022,
          offs: 15.540008,
          chance: 70.27
        },
        {
          speedo: 235,
          vel: 762.091857,
          offs: 11.925018,
          chance: 29.73,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler',
      setup: [
        'WALK',
        'FORWARD',
        'LEFT',
        'JS'
      ],
      bounces: [
        {
          speedo: 367,
          vel: 705.836791,
          offs: 15.540008,
          chance: 70.27
        },
        {
          speedo: 350,
          vel: 733.131713,
          offs: 11.925018,
          chance: 29.73,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler',
      setup: [
        'WALK',
        'FORWARD',
        'RIGHT',
        'JS'
      ],
      bounces: [
        {
          speedo: 293,
          vel: 731.500488,
          offs: 15.540008,
          chance: 66.67
        },
        {
          speedo: 269,
          vel: 754.207397,
          offs: 11.925018,
          chance: 33.33,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler',
      setup: [
        'WALK',
        'BACK',
        'LEFT',
        'JS'
      ],
      bounces: [
        {
          speedo: 353,
          vel: 710.891113,
          offs: 15.540008,
          chance: 66.67
        },
        {
          speedo: 335,
          vel: 737.273254,
          offs: 11.925018,
          chance: 33.33,
          alt: true
        }
      ]
    },
    {
      weapon: 'Mangler',
      setup: [
        'WALK',
        'BACK',
        'RIGHT',
        'JS'
      ],
      bounces: [
        {
          speedo: 273,
          vel: 737.842285,
          offs: 15.540008,
          chance: 72.07
        },
        {
          speedo: 246,
          vel: 759.472412,
          offs: 11.925018,
          chance: 27.93,
          alt: true
        }
      ]
    }
  ],
  BHOP: [
    {
      all: {
        vel: 283
      }
    },
    {
      text: 'Bhop',
      offs: 0.705002
    },
    {
      text: 'Double Bhop',
      offs: 1.410004
    },
    {
      text: 'Double Bhop (Max Speed)',
      speedo: 300,
      offs: 1.571274
    },
    {
      all: {
        vel: 289
      }
    },
    {
      text: 'Crouch Bhop',
      offs: 0.705002
    },
    {
      text: 'Crouch Double Bhop',
      offs: 1.410004
    }
  ],
  CTAP: [
    {
      all: {
        offs: [
          -0.004997,
          -0.009994,
          -0.014991,
          -0.019989,
          -0.024986,
          -0.029983
        ]
      }
    },
    {
      text: '(*x Ctap) Walk',
      vel: -6
    },
    {
      text: '(*x Ctap) Crouch Walk',
      vel: -6,
      crouched: true
    },
    {
      text: '(*x Ctap) Jump',
      vel: 283
    },
    {
      text: '(*x Ctap) Crouch Jump',
      vel: 289
    },
    {
      text: '(*x Ctap) Ctap',
      vel: 289,
      crouched: true
    }
  ]
}
