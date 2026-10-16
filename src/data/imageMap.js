/**
 * imageMap.js
 * Master Image & Dish Hero Mapping for K2N Digital Menu.
 *
 * - 8 Verified Real Photoshoot Images
 * - 2 Reused Photoshoot Images (Platter & Roti Basket)
 * - 10 Placeholders (Empty)
 * - 89 Generated Hero Images (Shared across same protein / type)
 * Total items mapped: 215 distinct dishes (219 raw items across Ground & Top floor)
 */

export const heroDefinitions = [
  {
  "id": "hero-egg-fried-rice",
  "name": "Egg Fried Rice",
  "group": "Rice & Noodles",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-egg-fried-rice-card.webp",
  "thumb": "/assets/images/hero/hero-egg-fried-rice-thumb.webp",
  "mappedNumbers": [
    1
  ],
  "dishes": [
    {
      "num": 1,
      "id": "g-dish-1-egg-fried-rice",
      "name": "Egg Fried Rice",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-chicken-fried-rice",
  "name": "Chicken Fried Rice",
  "group": "Rice & Noodles",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-chicken-fried-rice-card.webp",
  "thumb": "/assets/images/hero/hero-chicken-fried-rice-thumb.webp",
  "mappedNumbers": [
    2,
    5,
    6,
    7
  ],
  "dishes": [
    {
      "num": 2,
      "id": "g-dish-2-chicken-fried-rice",
      "name": "Chicken Fried Rice",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 5,
      "id": "g-dish-5-homemade-chicken-rice",
      "name": "Homemade Chicken Rice",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 6,
      "id": "g-dish-6-singapuri-chicken-fried-rice",
      "name": "Singapuri Chicken Fried Rice",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 7,
      "id": "g-dish-7-hohe-brown-chicken-rice",
      "name": "Hohe Brown Chicken Rice",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-schezwan-chicken-rice",
  "name": "Schezwan Chicken Rice",
  "group": "Rice & Noodles",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-schezwan-chicken-rice-card.webp",
  "thumb": "/assets/images/hero/hero-schezwan-chicken-rice-thumb.webp",
  "mappedNumbers": [
    3
  ],
  "dishes": [
    {
      "num": 3,
      "id": "g-dish-3-schezwan-chicken-fried-rice",
      "name": "Schezwan Chicken Fried Rice",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-veg-fried-rice",
  "name": "Veg Fried Rice",
  "group": "Rice & Noodles",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-veg-fried-rice-card.webp",
  "thumb": "/assets/images/hero/hero-veg-fried-rice-thumb.webp",
  "mappedNumbers": [
    196,
    199
  ],
  "dishes": [
    {
      "num": 196,
      "id": "g-dish-200-veg-fried-rice",
      "name": "Veg Fried Rice",
      "type": "Veg",
      "variants": "Single"
    },
    {
      "num": 199,
      "id": "g-dish-203-paneer-fried-rice",
      "name": "Paneer Fried Rice",
      "type": "Veg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-veg-schezwan-rice",
  "name": "Veg Schezwan Rice",
  "group": "Rice & Noodles",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-veg-schezwan-rice-card.webp",
  "thumb": "/assets/images/hero/hero-veg-schezwan-rice-thumb.webp",
  "mappedNumbers": [
    197,
    198
  ],
  "dishes": [
    {
      "num": 197,
      "id": "g-dish-201-veg-schezwan-rice",
      "name": "Veg Schezwan Rice",
      "type": "Veg",
      "variants": "Single"
    },
    {
      "num": 198,
      "id": "g-dish-202-veg-triple-schezwan-rice",
      "name": "Veg Triple Schezwan Rice",
      "type": "Veg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-jeera-ghee-rice",
  "name": "Jeera / Ghee Rice",
  "group": "Rice & Noodles",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-jeera-ghee-rice-card.webp",
  "thumb": "/assets/images/hero/hero-jeera-ghee-rice-thumb.webp",
  "mappedNumbers": [
    190,
    191
  ],
  "dishes": [
    {
      "num": 190,
      "id": "g-dish-194-jeera-rice",
      "name": "Jeera Rice",
      "type": "Veg",
      "variants": "Single"
    },
    {
      "num": 191,
      "id": "g-dish-195-ghee-rice",
      "name": "Ghee Rice",
      "type": "Veg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-steam-rice",
  "name": "Steam Rice",
  "group": "Rice & Noodles",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-steam-rice-card.webp",
  "thumb": "/assets/images/hero/hero-steam-rice-thumb.webp",
  "mappedNumbers": [
    192
  ],
  "dishes": [
    {
      "num": 192,
      "id": "g-dish-196-steam-rice",
      "name": "Steam Rice",
      "type": "Veg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-khichdi",
  "name": "Khichidi",
  "group": "Rice & Noodles",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-khichdi-card.webp",
  "thumb": "/assets/images/hero/hero-khichdi-thumb.webp",
  "mappedNumbers": [
    193,
    194
  ],
  "dishes": [
    {
      "num": 193,
      "id": "g-dish-197-dal-khichidi",
      "name": "Dal Khichidi",
      "type": "Veg",
      "variants": "Single"
    },
    {
      "num": 194,
      "id": "g-dish-198-palak-khichidi",
      "name": "Palak Khichidi",
      "type": "Veg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-curd-rice",
  "name": "Curd Rice",
  "group": "Rice & Noodles",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-curd-rice-card.webp",
  "thumb": "/assets/images/hero/hero-curd-rice-thumb.webp",
  "mappedNumbers": [
    195
  ],
  "dishes": [
    {
      "num": 195,
      "id": "g-dish-199-curd-rice",
      "name": "Curd Rice",
      "type": "Veg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-veg-noodles",
  "name": "Veg Noodles",
  "group": "Rice & Noodles",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-veg-noodles-card.webp",
  "thumb": "/assets/images/hero/hero-veg-noodles-thumb.webp",
  "mappedNumbers": [
    200,
    201
  ],
  "dishes": [
    {
      "num": 200,
      "id": "g-dish-204-veg-noodles",
      "name": "Veg Noodles",
      "type": "Veg",
      "variants": "Single"
    },
    {
      "num": 201,
      "id": "g-dish-205-paneer-noodles",
      "name": "Paneer Noodles",
      "type": "Veg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-veg-schezwan-noodles",
  "name": "Veg Schezwan Noodles",
  "group": "Rice & Noodles",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-veg-schezwan-noodles-card.webp",
  "thumb": "/assets/images/hero/hero-veg-schezwan-noodles-thumb.webp",
  "mappedNumbers": [
    202
  ],
  "dishes": [
    {
      "num": 202,
      "id": "g-dish-206-veg-schezwan-noodles",
      "name": "Veg Schezwan Noodles",
      "type": "Veg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-egg-noodles",
  "name": "Egg Noodles",
  "group": "Rice & Noodles",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-egg-noodles-card.webp",
  "thumb": "/assets/images/hero/hero-egg-noodles-thumb.webp",
  "mappedNumbers": [
    203,
    204
  ],
  "dishes": [
    {
      "num": 203,
      "id": "g-dish-207-egg-noodles",
      "name": "Egg Noodles",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 204,
      "id": "g-dish-208-egg-schezwan-noodles",
      "name": "Egg Schezwan Noodles",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-chicken-noodles",
  "name": "Chicken Noodles",
  "group": "Rice & Noodles",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-chicken-noodles-card.webp",
  "thumb": "/assets/images/hero/hero-chicken-noodles-thumb.webp",
  "mappedNumbers": [
    205,
    206
  ],
  "dishes": [
    {
      "num": 205,
      "id": "g-dish-209-chicken-noodles",
      "name": "Chicken Noodles",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 206,
      "id": "g-dish-210-chicken-schezwan-noodles",
      "name": "Chicken Schezwan Noodles",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-mutton-mandi",
  "name": "Mutton Mandi",
  "group": "Mandi & Biryani",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-mutton-mandi-card.webp",
  "thumb": "/assets/images/hero/hero-mutton-mandi-thumb.webp",
  "mappedNumbers": [
    8
  ],
  "dishes": [
    {
      "num": 8,
      "id": "g-dish-8-mutton-mandi-rice-full / g-dish-9-mutton-mandi-rice-half",
      "name": "Mutton Mandi Rice",
      "type": "Nonveg",
      "variants": "Full, Half"
    }
  ]
},
  {
  "id": "hero-chicken-mandi",
  "name": "Chicken Mandi",
  "group": "Mandi & Biryani",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-chicken-mandi-card.webp",
  "thumb": "/assets/images/hero/hero-chicken-mandi-thumb.webp",
  "mappedNumbers": [
    9
  ],
  "dishes": [
    {
      "num": 9,
      "id": "g-dish-10-chicken-mandi-rice-full / g-dish-11-chicken-mandi-rice-half",
      "name": "Chicken Mandi Rice",
      "type": "Nonveg",
      "variants": "Full, Half"
    }
  ]
},
  {
  "id": "hero-chicken-biryani",
  "name": "Chicken Biryani",
  "group": "Mandi & Biryani",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-chicken-biryani-card.webp",
  "thumb": "/assets/images/hero/hero-chicken-biryani-thumb.webp",
  "mappedNumbers": [
    79,
    83,
    90,
    92,
    138,
    143,
    144
  ],
  "dishes": [
    {
      "num": 79,
      "id": "g-dish-83-lucknow-biryani",
      "name": "Lucknow Biryani",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 83,
      "id": "g-dish-87-chicken-dum-biryani",
      "name": "Chicken Dum Biryani",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 90,
      "id": "g-dish-94-chicken-donne-biryani",
      "name": "Chicken Donne Biryani",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 92,
      "id": "g-dish-96-chicken-madike-biryani",
      "name": "Chicken Madike Biryani",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 138,
      "id": "g-dish-142-chicken-biryani",
      "name": "Chicken Biryani",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 143,
      "id": "g-dish-147-chicken-mughlai-biryani",
      "name": "Chicken Mughlai Biryani",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 144,
      "id": "g-dish-148-chicken-tikka-biryani",
      "name": "Chicken Tikka Biryani",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-mutton-biryani",
  "name": "Mutton Biryani",
  "group": "Mandi & Biryani",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-mutton-biryani-card.webp",
  "thumb": "/assets/images/hero/hero-mutton-biryani-thumb.webp",
  "mappedNumbers": [
    84,
    91,
    139
  ],
  "dishes": [
    {
      "num": 84,
      "id": "g-dish-88-muttam-dum-biryani",
      "name": "Muttam Dum Biryani",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 91,
      "id": "g-dish-95-mutton-donne-biryani",
      "name": "Mutton Donne Biryani",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 139,
      "id": "g-dish-143-mutton-biryani",
      "name": "Mutton Biryani",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-fish-biryani",
  "name": "Fish Biryani",
  "group": "Mandi & Biryani",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-fish-biryani-card.webp",
  "thumb": "/assets/images/hero/hero-fish-biryani-thumb.webp",
  "mappedNumbers": [
    140
  ],
  "dishes": [
    {
      "num": 140,
      "id": "g-dish-144-fish-biryani",
      "name": "Fish Biryani",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-egg-biryani",
  "name": "Egg Biryani",
  "group": "Mandi & Biryani",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-egg-biryani-card.webp",
  "thumb": "/assets/images/hero/hero-egg-biryani-thumb.webp",
  "mappedNumbers": [
    141
  ],
  "dishes": [
    {
      "num": 141,
      "id": "g-dish-145-egg-biryani",
      "name": "Egg Biryani",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-prawns-biryani",
  "name": "Prawns Biryani",
  "group": "Mandi & Biryani",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-prawns-biryani-card.webp",
  "thumb": "/assets/images/hero/hero-prawns-biryani-thumb.webp",
  "mappedNumbers": [
    142
  ],
  "dishes": [
    {
      "num": 142,
      "id": "g-dish-146-prawns-biryani",
      "name": "Prawns Biryani",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-veg-biryani",
  "name": "Veg Biryani",
  "group": "Mandi & Biryani",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-veg-biryani-card.webp",
  "thumb": "/assets/images/hero/hero-veg-biryani-thumb.webp",
  "mappedNumbers": [
    133,
    134,
    135,
    136,
    137
  ],
  "dishes": [
    {
      "num": 133,
      "id": "g-dish-137-veg-biryani",
      "name": "Veg Biryani",
      "type": "Veg",
      "variants": "Single"
    },
    {
      "num": 134,
      "id": "g-dish-138-paneer-biryani",
      "name": "Paneer Biryani",
      "type": "Veg",
      "variants": "Single"
    },
    {
      "num": 135,
      "id": "g-dish-139-mushroom-biryani",
      "name": "Mushroom Biryani",
      "type": "Veg",
      "variants": "Single"
    },
    {
      "num": 136,
      "id": "g-dish-140-paneer-kaju-biryani",
      "name": "Paneer Kaju Biryani",
      "type": "Veg",
      "variants": "Single"
    },
    {
      "num": 137,
      "id": "g-dish-141-mushroom-kaju-biryani",
      "name": "Mushroom Kaju Biryani",
      "type": "Veg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-butter-roti",
  "name": "Butter Roti",
  "group": "Roti & Breads",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-butter-roti-card.webp",
  "thumb": "/assets/images/hero/hero-butter-roti-thumb.webp",
  "mappedNumbers": [
    16
  ],
  "dishes": [
    {
      "num": 16,
      "id": "g-dish-18-butter-roti",
      "name": "Butter Roti",
      "type": "Veg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-akki-rotti",
  "name": "Akki Rotti",
  "group": "Roti & Breads",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-akki-rotti-card.webp",
  "thumb": "/assets/images/hero/hero-akki-rotti-thumb.webp",
  "mappedNumbers": [
    11
  ],
  "dishes": [
    {
      "num": 11,
      "id": "g-dish-13-akki-rotti",
      "name": "Akki Rotti",
      "type": "Veg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-butter-naan",
  "name": "Naan / Butter Naan",
  "group": "Roti & Breads",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-butter-naan-card.webp",
  "thumb": "/assets/images/hero/hero-butter-naan-thumb.webp",
  "mappedNumbers": [
    12,
    13
  ],
  "dishes": [
    {
      "num": 12,
      "id": "g-dish-14-naan-plain",
      "name": "Naan Plain",
      "type": "Veg",
      "variants": "Single"
    },
    {
      "num": 13,
      "id": "g-dish-15-butter-naan",
      "name": "Butter Naan",
      "type": "Veg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-garlic-naan",
  "name": "Garlic Naan",
  "group": "Roti & Breads",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-garlic-naan-card.webp",
  "thumb": "/assets/images/hero/hero-garlic-naan-thumb.webp",
  "mappedNumbers": [
    17
  ],
  "dishes": [
    {
      "num": 17,
      "id": "g-dish-19-garlic-naan",
      "name": "Garlic Naan",
      "type": "Veg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-kulcha",
  "name": "Kulcha Family",
  "group": "Roti & Breads",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-kulcha-card.webp",
  "thumb": "/assets/images/hero/hero-kulcha-thumb.webp",
  "mappedNumbers": [
    14,
    15,
    23
  ],
  "dishes": [
    {
      "num": 14,
      "id": "g-dish-16-kulcha",
      "name": "Kulcha",
      "type": "Veg",
      "variants": "Single"
    },
    {
      "num": 15,
      "id": "g-dish-17-butter-kulcha",
      "name": "Butter Kulcha",
      "type": "Veg",
      "variants": "Single"
    },
    {
      "num": 23,
      "id": "g-dish-25-onion-kulcha",
      "name": "Onion Kulcha",
      "type": "Veg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-paratha",
  "name": "Stuffed / Onion Paratha",
  "group": "Roti & Breads",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-paratha-card.webp",
  "thumb": "/assets/images/hero/hero-paratha-thumb.webp",
  "mappedNumbers": [
    21,
    24
  ],
  "dishes": [
    {
      "num": 21,
      "id": "g-dish-23-stuffed-paratha",
      "name": "Stuffed Paratha",
      "type": "Veg",
      "variants": "Single"
    },
    {
      "num": 24,
      "id": "g-dish-26-onion-paratha",
      "name": "Onion Paratha",
      "type": "Veg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-lacha-paratha",
  "name": "Lacha Paratha",
  "group": "Roti & Breads",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-lacha-paratha-card.webp",
  "thumb": "/assets/images/hero/hero-lacha-paratha-thumb.webp",
  "mappedNumbers": [
    22
  ],
  "dishes": [
    {
      "num": 22,
      "id": "g-dish-24-lacha-paratha",
      "name": "Lacha Paratha",
      "type": "Veg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-keema-naan",
  "name": "Keema Naan",
  "group": "Roti & Breads",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-keema-naan-card.webp",
  "thumb": "/assets/images/hero/hero-keema-naan-thumb.webp",
  "mappedNumbers": [
    19,
    20
  ],
  "dishes": [
    {
      "num": 19,
      "id": "g-dish-21-mutton-keema-naan",
      "name": "Mutton Keema Naan",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 20,
      "id": "g-dish-22-chicken-keema-naan",
      "name": "Chicken Keema Naan",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-tandoori-fish",
  "name": "Tandoori Fish",
  "group": "Fish (Seasonal)",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-tandoori-fish-card.webp",
  "thumb": "/assets/images/hero/hero-tandoori-fish-thumb.webp",
  "mappedNumbers": [
    25
  ],
  "dishes": [
    {
      "num": 25,
      "id": "g-dish-27-tandoori-fish",
      "name": "Tandoori Fish",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-fish-tikka",
  "name": "Fish Tikka",
  "group": "Fish (Seasonal)",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-fish-tikka-card.webp",
  "thumb": "/assets/images/hero/hero-fish-tikka-thumb.webp",
  "mappedNumbers": [
    26
  ],
  "dishes": [
    {
      "num": 26,
      "id": "g-dish-28-fish-tikka",
      "name": "Fish Tikka",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-bangda-fry",
  "name": "Bangda Fry",
  "group": "Fish (Seasonal)",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-bangda-fry-card.webp",
  "thumb": "/assets/images/hero/hero-bangda-fry-thumb.webp",
  "mappedNumbers": [
    28,
    29,
    30
  ],
  "dishes": [
    {
      "num": 28,
      "id": "g-dish-30-bangda-fry",
      "name": "Bangda Fry",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 29,
      "id": "g-dish-31-bangda-rava-fry",
      "name": "Bangda Rava Fry",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 30,
      "id": "g-dish-32-bangda-tawa-fry",
      "name": "Bangda Tawa Fry",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-kaatla-fry",
  "name": "Kaatla Fry",
  "group": "Fish (Seasonal)",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-kaatla-fry-card.webp",
  "thumb": "/assets/images/hero/hero-kaatla-fry-thumb.webp",
  "mappedNumbers": [
    31,
    32
  ],
  "dishes": [
    {
      "num": 31,
      "id": "g-dish-33-kaatla-rava-fry",
      "name": "Kaatla Rava Fry",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 32,
      "id": "g-dish-34-kaatla-tawa-fry",
      "name": "Kaatla Tawa Fry",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-paneer-malai-tikka",
  "name": "Paneer Malai Tikka",
  "group": "Tandoori Starters (Veg)",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-paneer-malai-tikka-card.webp",
  "thumb": "/assets/images/hero/hero-paneer-malai-tikka-thumb.webp",
  "mappedNumbers": [
    37
  ],
  "dishes": [
    {
      "num": 37,
      "id": "g-dish-39-paneer-malai-tikka",
      "name": "Paneer Malai Tikka",
      "type": "Veg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-paneer-hara",
  "name": "Paneer Hara (Green)",
  "group": "Tandoori Starters (Veg)",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-paneer-hara-card.webp",
  "thumb": "/assets/images/hero/hero-paneer-hara-thumb.webp",
  "mappedNumbers": [
    35,
    36,
    38,
    39
  ],
  "dishes": [
    {
      "num": 35,
      "id": "g-dish-37-paneer-hiltop",
      "name": "Paneer Hiltop",
      "type": "Veg",
      "variants": "Single"
    },
    {
      "num": 36,
      "id": "g-dish-38-paneer-hara-hirchi",
      "name": "Paneer Hara Hirchi",
      "type": "Veg",
      "variants": "Single"
    },
    {
      "num": 38,
      "id": "g-dish-40-paneer-pahadi",
      "name": "Paneer Pahadi",
      "type": "Veg",
      "variants": "Single"
    },
    {
      "num": 39,
      "id": "g-dish-41-paneer-multhani",
      "name": "Paneer Multhani",
      "type": "Veg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-veg-kabab",
  "name": "Veg Kabab",
  "group": "Starters (Veg)",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-veg-kabab-card.webp",
  "thumb": "/assets/images/hero/hero-veg-kabab-thumb.webp",
  "mappedNumbers": [
    34,
    60,
    63,
    78
  ],
  "dishes": [
    {
      "num": 34,
      "id": "g-dish-36-veg-shole-kabab",
      "name": "Veg Shole Kabab",
      "type": "Veg",
      "variants": "Single"
    },
    {
      "num": 60,
      "id": "g-dish-64-veg-burasi-kabab",
      "name": "Veg Burasi Kabab",
      "type": "Veg",
      "variants": "Single"
    },
    {
      "num": 63,
      "id": "g-dish-67-rim-jhim-kabab",
      "name": "Rim Jhim Kabab",
      "type": "Veg",
      "variants": "Single"
    },
    {
      "num": 78,
      "id": "g-dish-82-veg-gold-coin",
      "name": "Veg Gold Coin",
      "type": "Veg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-corn-basket",
  "name": "Corn Basket",
  "group": "Starters (Veg)",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-corn-basket-card.webp",
  "thumb": "/assets/images/hero/hero-corn-basket-thumb.webp",
  "mappedNumbers": [
    64
  ],
  "dishes": [
    {
      "num": 64,
      "id": "g-dish-68-corn-basket",
      "name": "Corn Basket",
      "type": "Veg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-chilli-potato",
  "name": "Chilli Potato",
  "group": "Chinese Starters (Veg)",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-chilli-potato-card.webp",
  "thumb": "/assets/images/hero/hero-chilli-potato-thumb.webp",
  "mappedNumbers": [
    74,
    110
  ],
  "dishes": [
    {
      "num": 74,
      "id": "g-dish-78-chilli-potato-chinese",
      "name": "Chilli Potato (Chinese)",
      "type": "Veg",
      "variants": "Single"
    },
    {
      "num": 110,
      "id": "g-dish-114-honey-chilli-potato",
      "name": "Honey Chilli Potato",
      "type": "Veg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-finger-chips",
  "name": "Finger Chips",
  "group": "Starters (Veg)",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-finger-chips-card.webp",
  "thumb": "/assets/images/hero/hero-finger-chips-thumb.webp",
  "mappedNumbers": [
    75
  ],
  "dishes": [
    {
      "num": 75,
      "id": "g-dish-79-finger-chips-peri-peri",
      "name": "Finger Chips (Peri Peri)",
      "type": "Veg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-veg-crispy",
  "name": "Veg Crispy",
  "group": "Chinese Starters (Veg)",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-veg-crispy-card.webp",
  "thumb": "/assets/images/hero/hero-veg-crispy-thumb.webp",
  "mappedNumbers": [
    102
  ],
  "dishes": [
    {
      "num": 102,
      "id": "g-dish-106-veg-crispy",
      "name": "Veg Crispy",
      "type": "Veg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-manchurian-veg",
  "name": "Gobi / Veg Manchurian",
  "group": "Chinese Starters (Veg)",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-manchurian-veg-card.webp",
  "thumb": "/assets/images/hero/hero-manchurian-veg-thumb.webp",
  "mappedNumbers": [
    103,
    104,
    105
  ],
  "dishes": [
    {
      "num": 103,
      "id": "g-dish-107-gobi-manchurian",
      "name": "Gobi Manchurian",
      "type": "Veg",
      "variants": "Single"
    },
    {
      "num": 104,
      "id": "g-dish-108-paneer-manchurian",
      "name": "Paneer Manchurian",
      "type": "Veg",
      "variants": "Single"
    },
    {
      "num": 105,
      "id": "g-dish-109-mushroom-manchurian",
      "name": "Mushroom Manchurian",
      "type": "Veg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-veg-chilli",
  "name": "Veg Chilli",
  "group": "Chinese Starters (Veg)",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-veg-chilli-card.webp",
  "thumb": "/assets/images/hero/hero-veg-chilli-thumb.webp",
  "mappedNumbers": [
    106,
    107,
    108,
    109
  ],
  "dishes": [
    {
      "num": 106,
      "id": "g-dish-110-paneer-chilli",
      "name": "Paneer Chilli",
      "type": "Veg",
      "variants": "Single"
    },
    {
      "num": 107,
      "id": "g-dish-111-gobi-chilli",
      "name": "Gobi Chilli",
      "type": "Veg",
      "variants": "Single"
    },
    {
      "num": 108,
      "id": "g-dish-112-mushroom-chilli",
      "name": "Mushroom Chilli",
      "type": "Veg",
      "variants": "Single"
    },
    {
      "num": 109,
      "id": "g-dish-113-baby-corn-chilli",
      "name": "Baby Corn Chilli",
      "type": "Veg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-red-chicken-kabab",
  "name": "Red Chicken Kabab / Tikka",
  "group": "Tandoori Starters (Non-Veg)",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-red-chicken-kabab-card.webp",
  "thumb": "/assets/images/hero/hero-red-chicken-kabab-thumb.webp",
  "mappedNumbers": [
    42,
    43,
    45,
    46,
    47,
    53,
    54,
    57,
    58,
    59,
    114
  ],
  "dishes": [
    {
      "num": 42,
      "id": "g-dish-45-chicken-kolhapuri-kabab",
      "name": "Chicken Kolhapuri Kabab",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 43,
      "id": "g-dish-46-chicken-banjara-kabab",
      "name": "Chicken Banjara Kabab",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 45,
      "id": "g-dish-48-chicken-achari-kabab",
      "name": "Chicken Achari Kabab",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 46,
      "id": "g-dish-49-chicken-tikka",
      "name": "Chicken Tikka",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 47,
      "id": "g-dish-50-chicken-oum-kabab",
      "name": "Chicken Oum Kabab",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 53,
      "id": "g-dish-57-chicken-boti-kabab",
      "name": "Chicken Boti Kabab",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 54,
      "id": "g-dish-58-chicken-madira-kabab",
      "name": "Chicken Madira Kabab",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 57,
      "id": "g-dish-61-chicken-maratha-kabab",
      "name": "Chicken Maratha Kabab",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 58,
      "id": "g-dish-62-chicken-lahari-kabab",
      "name": "Chicken Lahari Kabab",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 59,
      "id": "g-dish-63-chicken-malaysian-kabab",
      "name": "Chicken Malaysian Kabab",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 114,
      "id": "g-dish-118-chicken-kabab",
      "name": "Chicken Kabab",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-pudina-kabab",
  "name": "Chicken Pudina Kabab",
  "group": "Tandoori Starters (Non-Veg)",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-pudina-kabab-card.webp",
  "thumb": "/assets/images/hero/hero-pudina-kabab-thumb.webp",
  "mappedNumbers": [
    67
  ],
  "dishes": [
    {
      "num": 67,
      "id": "g-dish-71-chicken-pudina-kabab",
      "name": "Chicken Pudina Kabab",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-creamy-kabab",
  "name": "Creamy Chicken Kabab",
  "group": "Tandoori Starters (Non-Veg)",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-creamy-kabab-card.webp",
  "thumb": "/assets/images/hero/hero-creamy-kabab-thumb.webp",
  "mappedNumbers": [
    51,
    52,
    68,
    69,
    76
  ],
  "dishes": [
    {
      "num": 51,
      "id": "g-dish-55-chicken-adraki-kabab",
      "name": "Chicken Adraki Kabab",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 52,
      "id": "g-dish-56-chicken-kali-miri-kabab",
      "name": "Chicken Kali Miri Kabab",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 68,
      "id": "g-dish-72-chicken-noorani-tikka",
      "name": "Chicken Noorani Tikka",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 69,
      "id": "g-dish-73-chicken-jafrani-tikka",
      "name": "Chicken Jafrani Tikka",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 76,
      "id": "g-dish-80-chicken-afgani-kabab",
      "name": "Chicken Afgani Kabab",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-chicken-seekh",
  "name": "Chicken Seekh Kabab",
  "group": "Tandoori Starters (Non-Veg)",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-chicken-seekh-card.webp",
  "thumb": "/assets/images/hero/hero-chicken-seekh-thumb.webp",
  "mappedNumbers": [
    50
  ],
  "dishes": [
    {
      "num": 50,
      "id": "g-dish-54-chicken-sheekh-kabab",
      "name": "Chicken Sheekh Kabab",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-mutton-seekh",
  "name": "Mutton Seekh Kabab",
  "group": "Tandoori Starters (Non-Veg)",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-mutton-seekh-card.webp",
  "thumb": "/assets/images/hero/hero-mutton-seekh-thumb.webp",
  "mappedNumbers": [
    56,
    73
  ],
  "dishes": [
    {
      "num": 56,
      "id": "g-dish-60-mutton-sheekh-kabab",
      "name": "Mutton Sheekh Kabab",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 73,
      "id": "g-dish-77-mutton-seekh-kabab",
      "name": "Mutton Seekh Kabab",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-tandoori-jhinga",
  "name": "Tandoori Jhinga",
  "group": "Tandoori Starters (Non-Veg)",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-tandoori-jhinga-card.webp",
  "thumb": "/assets/images/hero/hero-tandoori-jhinga-thumb.webp",
  "mappedNumbers": [
    55
  ],
  "dishes": [
    {
      "num": 55,
      "id": "g-dish-59-tandoori-jhinga",
      "name": "Tandoori Jhinga",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-fried-chicken",
  "name": "Fried Chicken Kabab",
  "group": "Starters (Non-Veg)",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-fried-chicken-card.webp",
  "thumb": "/assets/images/hero/hero-fried-chicken-thumb.webp",
  "mappedNumbers": [
    70,
    77,
    115
  ],
  "dishes": [
    {
      "num": 70,
      "id": "g-dish-74-chicken-crispy",
      "name": "Chicken Crispy",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 77,
      "id": "g-dish-81-chicken-crunchy-chinese",
      "name": "Chicken Crunchy (Chinese)",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 115,
      "id": "g-dish-119-fried-chicken-kabab",
      "name": "Fried Chicken Kabab",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-chicken-finger",
  "name": "Chicken Finger",
  "group": "Starters (Non-Veg)",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-chicken-finger-card.webp",
  "thumb": "/assets/images/hero/hero-chicken-finger-thumb.webp",
  "mappedNumbers": [
    66
  ],
  "dishes": [
    {
      "num": 66,
      "id": "g-dish-70-chicken-finger-with-tartar-sauce",
      "name": "Chicken Finger (with Tartar Sauce)",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-chicken-cheese-balls",
  "name": "Chicken Cheese Balls",
  "group": "Starters (Non-Veg)",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-chicken-cheese-balls-card.webp",
  "thumb": "/assets/images/hero/hero-chicken-cheese-balls-thumb.webp",
  "mappedNumbers": [
    65
  ],
  "dishes": [
    {
      "num": 65,
      "id": "g-dish-69-chicken-cheese-balls",
      "name": "Chicken Cheese Balls",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-kalmi-kabab",
  "name": "Chicken Kalmi Kabab",
  "group": "Tandoori Starters (Non-Veg)",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-kalmi-kabab-card.webp",
  "thumb": "/assets/images/hero/hero-kalmi-kabab-thumb.webp",
  "mappedNumbers": [
    49
  ],
  "dishes": [
    {
      "num": 49,
      "id": "g-dish-53-chicken-kalmi-kabab",
      "name": "Chicken Kalmi Kabab",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-chicken-ghee-roast",
  "name": "Chicken Ghee Roast",
  "group": "K2N Special Items (Naati)",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-chicken-ghee-roast-card.webp",
  "thumb": "/assets/images/hero/hero-chicken-ghee-roast-thumb.webp",
  "mappedNumbers": [
    85
  ],
  "dishes": [
    {
      "num": 85,
      "id": "g-dish-89-chicken-ghee-roast",
      "name": "Chicken Ghee Roast",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-mutton-ghee-roast",
  "name": "Mutton Ghee Roast",
  "group": "K2N Special Items (Naati)",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-mutton-ghee-roast-card.webp",
  "thumb": "/assets/images/hero/hero-mutton-ghee-roast-thumb.webp",
  "mappedNumbers": [
    86
  ],
  "dishes": [
    {
      "num": 86,
      "id": "g-dish-90-mutton-ghee-roast",
      "name": "Mutton Ghee Roast",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-chicken-sukka",
  "name": "Chicken Sukka",
  "group": "K2N Special Items (Naati)",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-chicken-sukka-card.webp",
  "thumb": "/assets/images/hero/hero-chicken-sukka-thumb.webp",
  "mappedNumbers": [
    88
  ],
  "dishes": [
    {
      "num": 88,
      "id": "g-dish-92-chicken-sukka",
      "name": "Chicken Sukka",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-egg-chilli",
  "name": "Egg Chilli",
  "group": "Chinese Starters (Non-Veg)",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-egg-chilli-card.webp",
  "thumb": "/assets/images/hero/hero-egg-chilli-thumb.webp",
  "mappedNumbers": [
    111,
    112,
    113
  ],
  "dishes": [
    {
      "num": 111,
      "id": "g-dish-115-egg-chilli",
      "name": "Egg Chilli",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 112,
      "id": "g-dish-116-egg-manchurian",
      "name": "Egg Manchurian",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 113,
      "id": "g-dish-117-egg-pepper-dry",
      "name": "Egg Pepper Dry",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-chilli-chicken",
  "name": "Chilli Chicken",
  "group": "Chinese Starters (Non-Veg)",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-chilli-chicken-card.webp",
  "thumb": "/assets/images/hero/hero-chilli-chicken-thumb.webp",
  "mappedNumbers": [
    116,
    117,
    118,
    119,
    120,
    122,
    123,
    124,
    126,
    127,
    128
  ],
  "dishes": [
    {
      "num": 116,
      "id": "g-dish-120-chilli-chicken",
      "name": "Chilli Chicken",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 117,
      "id": "g-dish-121-white-chicken-chilli",
      "name": "White Chicken Chilli",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 118,
      "id": "g-dish-122-mongolian-chicken",
      "name": "Mongolian Chicken",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 119,
      "id": "g-dish-123-hunan-chicken",
      "name": "Hunan Chicken",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 120,
      "id": "g-dish-124-hot-thai-chicken",
      "name": "Hot Thai Chicken",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 122,
      "id": "g-dish-126-lemon-chicken",
      "name": "Lemon Chicken",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 123,
      "id": "g-dish-127-bang-bang-chicken",
      "name": "Bang Bang Chicken",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 124,
      "id": "g-dish-128-thai-pai-chicken",
      "name": "Thai Pai Chicken",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 126,
      "id": "g-dish-130-desi-chinese",
      "name": "Desi Chinese",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 127,
      "id": "g-dish-131-wow-tasty-chicken",
      "name": "Wow Tasty Chicken",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 128,
      "id": "g-dish-132-dragon-chicken",
      "name": "Dragon Chicken",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-chicken-lollipop",
  "name": "Chicken Lollipop",
  "group": "Chinese Starters (Non-Veg)",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-chicken-lollipop-card.webp",
  "thumb": "/assets/images/hero/hero-chicken-lollipop-thumb.webp",
  "mappedNumbers": [
    121
  ],
  "dishes": [
    {
      "num": 121,
      "id": "g-dish-125-schezwan-chicken-lollipop",
      "name": "Schezwan Chicken Lollipop",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-chicken-65",
  "name": "Chicken 65",
  "group": "Chinese Starters (Non-Veg)",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-chicken-65-card.webp",
  "thumb": "/assets/images/hero/hero-chicken-65-thumb.webp",
  "mappedNumbers": [
    125
  ],
  "dishes": [
    {
      "num": 125,
      "id": "g-dish-129-chicken-65",
      "name": "Chicken 65",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-chicken-pepper-dry",
  "name": "Chicken Pepper Dry",
  "group": "Chinese Starters (Non-Veg)",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-chicken-pepper-dry-card.webp",
  "thumb": "/assets/images/hero/hero-chicken-pepper-dry-thumb.webp",
  "mappedNumbers": [
    129
  ],
  "dishes": [
    {
      "num": 129,
      "id": "g-dish-133-chicken-pepper-dry",
      "name": "Chicken Pepper Dry",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-mutton-dry",
  "name": "Mutton Pepper / Dry",
  "group": "Chinese Starters (Non-Veg)",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-mutton-dry-card.webp",
  "thumb": "/assets/images/hero/hero-mutton-dry-thumb.webp",
  "mappedNumbers": [
    130,
    131,
    132
  ],
  "dishes": [
    {
      "num": 130,
      "id": "g-dish-134-mutton-pepper-dry",
      "name": "Mutton Pepper Dry",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 131,
      "id": "g-dish-135-guntoor-mutton-dry",
      "name": "Guntoor Mutton Dry",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 132,
      "id": "g-dish-136-chilli-mutton-dry",
      "name": "Chilli Mutton Dry",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-hot-sour-soup",
  "name": "Hot & Sour Soup",
  "group": "Soup & Sides",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-hot-sour-soup-card.webp",
  "thumb": "/assets/images/hero/hero-hot-sour-soup-thumb.webp",
  "mappedNumbers": [
    97
  ],
  "dishes": [
    {
      "num": 97,
      "id": "g-dish-101-hot-and-sour-soup",
      "name": "Hot and Sour Soup",
      "type": "Veg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-tomato-soup",
  "name": "Tomato Soup",
  "group": "Soup & Sides",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-tomato-soup-card.webp",
  "thumb": "/assets/images/hero/hero-tomato-soup-thumb.webp",
  "mappedNumbers": [
    98
  ],
  "dishes": [
    {
      "num": 98,
      "id": "g-dish-102-tomato-soup",
      "name": "Tomato Soup",
      "type": "Veg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-talumein-soup",
  "name": "Talumein Soup",
  "group": "Soup & Sides",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-talumein-soup-card.webp",
  "thumb": "/assets/images/hero/hero-talumein-soup-thumb.webp",
  "mappedNumbers": [
    99
  ],
  "dishes": [
    {
      "num": 99,
      "id": "g-dish-103-talumein-soup",
      "name": "Talumein Soup",
      "type": "Veg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-mutton-soup",
  "name": "Mutton Soup",
  "group": "Soup & Sides",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-mutton-soup-card.webp",
  "thumb": "/assets/images/hero/hero-mutton-soup-thumb.webp",
  "mappedNumbers": [
    101
  ],
  "dishes": [
    {
      "num": 101,
      "id": "g-dish-105-mutton-soup",
      "name": "Mutton Soup",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-green-salad",
  "name": "Green Salad",
  "group": "Soup & Sides",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-green-salad-card.webp",
  "thumb": "/assets/images/hero/hero-green-salad-thumb.webp",
  "mappedNumbers": [
    93
  ],
  "dishes": [
    {
      "num": 93,
      "id": "g-dish-97-green-salad",
      "name": "Green Salad",
      "type": "Veg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-fruit-salad",
  "name": "Fruit Salad",
  "group": "Soup & Sides",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-fruit-salad-card.webp",
  "thumb": "/assets/images/hero/hero-fruit-salad-thumb.webp",
  "mappedNumbers": [
    94
  ],
  "dishes": [
    {
      "num": 94,
      "id": "g-dish-98-fruit-salad",
      "name": "Fruit Salad",
      "type": "Veg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-papad",
  "name": "Masala / Roasted Papad",
  "group": "Soup & Sides",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-papad-card.webp",
  "thumb": "/assets/images/hero/hero-papad-thumb.webp",
  "mappedNumbers": [
    95,
    96
  ],
  "dishes": [
    {
      "num": 95,
      "id": "g-dish-99-masala-papad",
      "name": "Masala Papad",
      "type": "Veg",
      "variants": "Single"
    },
    {
      "num": 96,
      "id": "g-dish-100-roasted-papad",
      "name": "Roasted Papad",
      "type": "Veg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-dal",
  "name": "Dal Tadka / Fry",
  "group": "Main Course (Veg)",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-dal-card.webp",
  "thumb": "/assets/images/hero/hero-dal-thumb.webp",
  "mappedNumbers": [
    145,
    156,
    157
  ],
  "dishes": [
    {
      "num": 145,
      "id": "g-dish-149-dal-fry",
      "name": "Dal Fry",
      "type": "Veg",
      "variants": "Single"
    },
    {
      "num": 156,
      "id": "g-dish-160-dal-kolhapuri",
      "name": "Dal Kolhapuri",
      "type": "Veg",
      "variants": "Single"
    },
    {
      "num": 157,
      "id": "g-dish-161-dal-tadka",
      "name": "Dal Tadka",
      "type": "Veg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-paneer-butter-masala",
  "name": "Paneer Butter Masala",
  "group": "Main Course (Veg)",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-paneer-butter-masala-card.webp",
  "thumb": "/assets/images/hero/hero-paneer-butter-masala-thumb.webp",
  "mappedNumbers": [
    148,
    149,
    154,
    155,
    160
  ],
  "dishes": [
    {
      "num": 148,
      "id": "g-dish-152-paneer-masala",
      "name": "Paneer Masala",
      "type": "Veg",
      "variants": "Single"
    },
    {
      "num": 149,
      "id": "g-dish-153-paneer-do-pyaza",
      "name": "Paneer Do Pyaza",
      "type": "Veg",
      "variants": "Single"
    },
    {
      "num": 154,
      "id": "g-dish-158-kaju-paneer-masala",
      "name": "Kaju Paneer Masala",
      "type": "Veg",
      "variants": "Single"
    },
    {
      "num": 155,
      "id": "g-dish-159-paneer-butter-masala",
      "name": "Paneer Butter Masala",
      "type": "Veg",
      "variants": "Single"
    },
    {
      "num": 160,
      "id": "g-dish-164-paneeri-teki-tikka-masala",
      "name": "Paneeri Teki Tikka Masala",
      "type": "Veg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-palak-paneer",
  "name": "Palak Paneer",
  "group": "Main Course (Veg)",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-palak-paneer-card.webp",
  "thumb": "/assets/images/hero/hero-palak-paneer-thumb.webp",
  "mappedNumbers": [
    158
  ],
  "dishes": [
    {
      "num": 158,
      "id": "g-dish-162-palak-paneer",
      "name": "Palak Paneer",
      "type": "Veg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-mix-veg",
  "name": "Mix Veg Curry",
  "group": "Main Course (Veg)",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-mix-veg-card.webp",
  "thumb": "/assets/images/hero/hero-mix-veg-thumb.webp",
  "mappedNumbers": [
    146,
    147,
    151,
    159
  ],
  "dishes": [
    {
      "num": 146,
      "id": "g-dish-150-mix-veg-curry",
      "name": "Mix Veg Curry",
      "type": "Veg",
      "variants": "Single"
    },
    {
      "num": 147,
      "id": "g-dish-151-veg-korma",
      "name": "Veg Korma",
      "type": "Veg",
      "variants": "Single"
    },
    {
      "num": 151,
      "id": "g-dish-155-veg-deewani-handi",
      "name": "Veg Deewani Handi",
      "type": "Veg",
      "variants": "Single"
    },
    {
      "num": 159,
      "id": "g-dish-163-aalu-gobhi-masala",
      "name": "Aalu Gobhi Masala",
      "type": "Veg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-malai-kofta",
  "name": "Malai Kofta",
  "group": "Main Course (Veg)",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-malai-kofta-card.webp",
  "thumb": "/assets/images/hero/hero-malai-kofta-thumb.webp",
  "mappedNumbers": [
    150
  ],
  "dishes": [
    {
      "num": 150,
      "id": "g-dish-154-paneer-malai-kofta",
      "name": "Paneer Malai Kofta",
      "type": "Veg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-kaju-masala",
  "name": "Kaju Masala",
  "group": "Main Course (Veg)",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-kaju-masala-card.webp",
  "thumb": "/assets/images/hero/hero-kaju-masala-thumb.webp",
  "mappedNumbers": [
    152,
    153
  ],
  "dishes": [
    {
      "num": 152,
      "id": "g-dish-156-kaju-masala",
      "name": "Kaju Masala",
      "type": "Veg",
      "variants": "Single"
    },
    {
      "num": 153,
      "id": "g-dish-157-kaju-kolhapure",
      "name": "Kaju Kolhapure",
      "type": "Veg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-butter-chicken",
  "name": "Butter Chicken",
  "group": "Chicken Main Course",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-butter-chicken-card.webp",
  "thumb": "/assets/images/hero/hero-butter-chicken-thumb.webp",
  "mappedNumbers": [
    80,
    81
  ],
  "dishes": [
    {
      "num": 80,
      "id": "g-dish-84-butter-chicken-masala",
      "name": "Butter Chicken Masala",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 81,
      "id": "g-dish-85-butter-chicken-bilder",
      "name": "Butter Chicken Bilder",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-chicken-red-gravy",
  "name": "Chicken Red Gravy",
  "group": "Chicken Main Course",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-chicken-red-gravy-card.webp",
  "thumb": "/assets/images/hero/hero-chicken-red-gravy-thumb.webp",
  "mappedNumbers": [
    161,
    162,
    163,
    165,
    169,
    172,
    173,
    174,
    177
  ],
  "dishes": [
    {
      "num": 161,
      "id": "g-dish-165-chicken-handi",
      "name": "Chicken Handi",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 162,
      "id": "g-dish-166-chicken-kadai",
      "name": "Chicken Kadai",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 163,
      "id": "g-dish-167-chicken-patiala",
      "name": "Chicken Patiala",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 165,
      "id": "g-dish-169-chicken-musallam-masala",
      "name": "Chicken Musallam Masala",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 169,
      "id": "g-dish-173-chicken-changezi-masala",
      "name": "Chicken Changezi Masala",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 172,
      "id": "g-dish-176-chicken-maharaja",
      "name": "Chicken Maharaja",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 173,
      "id": "g-dish-177-chicken-do-pyaza",
      "name": "Chicken Do Pyaza",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 174,
      "id": "g-dish-178-chicken-garam-masala",
      "name": "Chicken Garam Masala",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 177,
      "id": "g-dish-181-chicken-chatpata",
      "name": "Chicken Chatpata",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-chicken-creamy-gravy",
  "name": "Chicken Creamy / Mughlai Gravy",
  "group": "Chicken Main Course",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-chicken-creamy-gravy-card.webp",
  "thumb": "/assets/images/hero/hero-chicken-creamy-gravy-thumb.webp",
  "mappedNumbers": [
    166,
    167,
    170
  ],
  "dishes": [
    {
      "num": 166,
      "id": "g-dish-170-chicken-kali-mirch-masala",
      "name": "Chicken Kali Mirch Masala",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 167,
      "id": "g-dish-171-chicken-afghani-masala",
      "name": "Chicken Afghani Masala",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 170,
      "id": "g-dish-174-chicken-haveli-masala",
      "name": "Chicken Haveli Masala",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-chicken-tikka-masala",
  "name": "Chicken Tikka Masala",
  "group": "Chicken Main Course",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-chicken-tikka-masala-card.webp",
  "thumb": "/assets/images/hero/hero-chicken-tikka-masala-thumb.webp",
  "mappedNumbers": [
    175,
    176,
    178
  ],
  "dishes": [
    {
      "num": 175,
      "id": "g-dish-179-tandoori-chicken-masala",
      "name": "Tandoori Chicken Masala",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 176,
      "id": "g-dish-180-chicken-seekh-masala",
      "name": "Chicken Seekh Masala",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 178,
      "id": "g-dish-182-chicken-tikka-masala",
      "name": "Chicken Tikka Masala",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-chicken-green-gravy",
  "name": "Chicken Hariyali / Palak Gravy",
  "group": "Chicken Main Course",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-chicken-green-gravy-card.webp",
  "thumb": "/assets/images/hero/hero-chicken-green-gravy-thumb.webp",
  "mappedNumbers": [
    168,
    179
  ],
  "dishes": [
    {
      "num": 168,
      "id": "g-dish-172-chicken-hyderabadi-masala",
      "name": "Chicken Hyderabadi Masala",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 179,
      "id": "g-dish-183-chicken-methi-masala",
      "name": "Chicken Methi Masala",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-chicken-keema",
  "name": "Chicken Keema",
  "group": "Chicken Main Course",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-chicken-keema-card.webp",
  "thumb": "/assets/images/hero/hero-chicken-keema-thumb.webp",
  "mappedNumbers": [
    164
  ],
  "dishes": [
    {
      "num": 164,
      "id": "g-dish-168-chicken-keema",
      "name": "Chicken Keema",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-mutton-red-gravy",
  "name": "Mutton Red Gravy",
  "group": "Mutton Main Course",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-mutton-red-gravy-card.webp",
  "thumb": "/assets/images/hero/hero-mutton-red-gravy-thumb.webp",
  "mappedNumbers": [
    180,
    181,
    182,
    183,
    185,
    186,
    188,
    189
  ],
  "dishes": [
    {
      "num": 180,
      "id": "g-dish-184-mutton-masala",
      "name": "Mutton Masala",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 181,
      "id": "g-dish-185-mutton-kadai-masala",
      "name": "Mutton Kadai Masala",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 182,
      "id": "g-dish-186-mutton-handi-masala",
      "name": "Mutton Handi Masala",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 183,
      "id": "g-dish-187-mutton-kolhapuri",
      "name": "Mutton Kolhapuri",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 185,
      "id": "g-dish-189-mutton-hyderabadi-masala",
      "name": "Mutton Hyderabadi Masala",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 186,
      "id": "g-dish-190-mutton-lahori-masala",
      "name": "Mutton Lahori Masala",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 188,
      "id": "g-dish-192-mutton-rogan-josh",
      "name": "Mutton Rogan Josh",
      "type": "Nonveg",
      "variants": "Single"
    },
    {
      "num": 189,
      "id": "g-dish-193-mutton-maharaja",
      "name": "Mutton Maharaja",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-mutton-hariyali",
  "name": "Mutton Hariyali / Palak",
  "group": "Mutton Main Course",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-mutton-hariyali-card.webp",
  "thumb": "/assets/images/hero/hero-mutton-hariyali-thumb.webp",
  "mappedNumbers": [
    184
  ],
  "dishes": [
    {
      "num": 184,
      "id": "g-dish-188-mutton-hariyali-masala",
      "name": "Mutton Hariyali Masala",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-mutton-keema",
  "name": "Mutton Keema",
  "group": "Mutton Main Course",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-mutton-keema-card.webp",
  "thumb": "/assets/images/hero/hero-mutton-keema-thumb.webp",
  "mappedNumbers": [
    187
  ],
  "dishes": [
    {
      "num": 187,
      "id": "g-dish-191-mutton-keema-masala",
      "name": "Mutton Keema Masala",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-bar-sunset",
  "name": "Royal Sunset Cocktail",
  "group": "Bar & Cocktails",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-bar-sunset-card.webp",
  "thumb": "/assets/images/hero/hero-bar-sunset-thumb.webp",
  "mappedNumbers": [
    211
  ],
  "dishes": [
    {
      "num": 211,
      "id": "g-bar-royal-sunset",
      "name": "K2N Royal Sunset Cocktail",
      "type": "Bar",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-bar-mojito",
  "name": "Classic Mint Mojito",
  "group": "Bar & Cocktails",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-bar-mojito-card.webp",
  "thumb": "/assets/images/hero/hero-bar-mojito-thumb.webp",
  "mappedNumbers": [
    212
  ],
  "dishes": [
    {
      "num": 212,
      "id": "g-bar-mint-mojito",
      "name": "Classic Mint Mojito",
      "type": "Bar",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-bar-whiskey",
  "name": "Blended Scotch Whiskey",
  "group": "Bar & Cocktails",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-bar-whiskey-card.webp",
  "thumb": "/assets/images/hero/hero-bar-whiskey-thumb.webp",
  "mappedNumbers": [
    213
  ],
  "dishes": [
    {
      "num": 213,
      "id": "g-bar-scotch-whiskey",
      "name": "Blended Scotch 12Y",
      "type": "Bar",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-bar-beer",
  "name": "Kingfisher Ultra Draught",
  "group": "Bar & Cocktails",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-bar-beer-card.webp",
  "thumb": "/assets/images/hero/hero-bar-beer-thumb.webp",
  "mappedNumbers": [
    214
  ],
  "dishes": [
    {
      "num": 214,
      "id": "g-bar-kf-ultra",
      "name": "Kingfisher Ultra Draught",
      "type": "Bar",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-bar-rum",
  "name": "Spiced Rum & Cola",
  "group": "Bar & Cocktails",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-bar-rum-card.webp",
  "thumb": "/assets/images/hero/hero-bar-rum-thumb.webp",
  "mappedNumbers": [
    215
  ],
  "dishes": [
    {
      "num": 215,
      "id": "g-bar-spiced-rum",
      "name": "Spiced Rum & Cola",
      "type": "Bar",
      "variants": "Single"
    }
  ]
},
  {
  "id": "hero-drinking-water",
  "name": "Packaged Drinking Water",
  "group": "Drinking Sides",
  "type": "GENERATED",
  "card": "/assets/images/hero/hero-drinking-water-card.webp",
  "thumb": "/assets/images/hero/hero-drinking-water-thumb.webp",
  "mappedNumbers": [
    209,
    210
  ],
  "dishes": [
    {
      "num": 209,
      "id": "g-dish-213-drinking-water",
      "name": "Drinking Water",
      "type": "Veg",
      "variants": "Single"
    },
    {
      "num": 210,
      "id": "g-dish-214-k2n-drinking-water",
      "name": "K2N Drinking Water",
      "type": "Veg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "real-triple-chicken-rice",
  "name": "Triple Fried Chicken Rice",
  "group": "Rice & Noodles",
  "type": "REAL_PHOTO",
  "card": "/assets/images/real/triple_chicken_fried_rice-card.webp",
  "thumb": "/assets/images/real/triple_chicken_fried_rice-thumb.webp",
  "mappedNumbers": [
    4
  ],
  "dishes": [
    {
      "num": 4,
      "id": "g-dish-4-triple-fried-chicken-rice",
      "name": "Triple Fried Chicken Rice",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "real-paneer-tikka",
  "name": "Paneer Tikka",
  "group": "Tandoori Starters (Veg)",
  "type": "REAL_PHOTO",
  "card": "/assets/images/real/paneer_tikka_real-card.webp",
  "thumb": "/assets/images/real/paneer_tikka_real-thumb.webp",
  "mappedNumbers": [
    33
  ],
  "dishes": [
    {
      "num": 33,
      "id": "g-dish-35-paneer-tikka",
      "name": "Paneer Tikka",
      "type": "Veg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "real-chicken-tandoori",
  "name": "Chicken Tandoori",
  "group": "Tandoori Starters (Non-Veg)",
  "type": "REAL_PHOTO",
  "card": "/assets/images/real/chicken_tandoori-card.webp",
  "thumb": "/assets/images/real/chicken_tandoori-thumb.webp",
  "mappedNumbers": [
    40
  ],
  "dishes": [
    {
      "num": 40,
      "id": "g-dish-42-chicken-tandoori-full / g-dish-43-chicken-tandoori-half",
      "name": "Chicken Tandoori",
      "type": "Nonveg",
      "variants": "Full, Half"
    }
  ]
},
  {
  "id": "real-chicken-pahadi-kabab",
  "name": "Chicken Pahadi Kabab",
  "group": "Tandoori Starters (Non-Veg)",
  "type": "REAL_PHOTO",
  "card": "/assets/images/real/chicken_pahadi_tandoori-card.webp",
  "thumb": "/assets/images/real/chicken_pahadi_tandoori-thumb.webp",
  "mappedNumbers": [
    41
  ],
  "dishes": [
    {
      "num": 41,
      "id": "g-dish-44-chicken-pahadi-kabab",
      "name": "Chicken Pahadi Kabab",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "real-chicken-reshmi-kabab",
  "name": "Chicken Reshmi Kabab",
  "group": "Tandoori Starters (Non-Veg)",
  "type": "REAL_PHOTO",
  "card": "/assets/images/real/chicken_reshmi_malai-card.webp",
  "thumb": "/assets/images/real/chicken_reshmi_malai-thumb.webp",
  "mappedNumbers": [
    44
  ],
  "dishes": [
    {
      "num": 44,
      "id": "g-dish-47-chicken-reshmi-kabab",
      "name": "Chicken Reshmi Kabab",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "real-chicken-tangadi-kabab",
  "name": "Chicken Tangadi Kabab",
  "group": "Tandoori Starters (Non-Veg)",
  "type": "REAL_PHOTO",
  "card": "/assets/images/real/chicken_tangdi_kabab-card.webp",
  "thumb": "/assets/images/real/chicken_tangdi_kabab-thumb.webp",
  "mappedNumbers": [
    48
  ],
  "dishes": [
    {
      "num": 48,
      "id": "g-dish-51-chicken-tangadi-kabab-2-pcs / g-dish-52-chicken-tangadi-kabab-1-pc",
      "name": "Chicken Tangadi Kabab",
      "type": "Nonveg",
      "variants": "2 pcs, 1 pc"
    }
  ]
},
  {
  "id": "real-chicken-manchow-soup",
  "name": "Chicken Manchow Soup",
  "group": "Soup",
  "type": "REAL_PHOTO",
  "card": "/assets/images/real/soup_manchow-card.webp",
  "thumb": "/assets/images/real/soup_manchow-thumb.webp",
  "mappedNumbers": [
    100
  ],
  "dishes": [
    {
      "num": 100,
      "id": "g-dish-104-chicken-manchow-soup",
      "name": "Chicken Manchow Soup",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "real-chicken-rara",
  "name": "Chicken Rara Masala",
  "group": "Chicken Main Course",
  "type": "REAL_PHOTO",
  "card": "/assets/images/real/chicken_rara-card.webp",
  "thumb": "/assets/images/real/chicken_rara-thumb.webp",
  "mappedNumbers": [
    171
  ],
  "dishes": [
    {
      "num": 171,
      "id": "g-dish-175-chicken-rara-masala",
      "name": "Chicken Rara Masala",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "real-nonveg-dry-platter",
  "name": "Non-Veg Dry Platter",
  "group": "Drinking Sides",
  "type": "REUSED_REAL",
  "card": "/assets/images/real/nonveg_tandoori_platter-card.webp",
  "thumb": "/assets/images/real/nonveg_tandoori_platter-thumb.webp",
  "mappedNumbers": [
    207
  ],
  "dishes": [
    {
      "num": 207,
      "id": "g-dish-211-non-veg-dry-platter",
      "name": "Non-Veg Dry Platter",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "real-tandoori-roti-basket",
  "name": "Roti",
  "group": "Roti",
  "type": "REUSED_REAL",
  "card": "/assets/images/real/tandoori_roti_basket-card.webp",
  "thumb": "/assets/images/real/tandoori_roti_basket-thumb.webp",
  "mappedNumbers": [
    10
  ],
  "dishes": [
    {
      "num": 10,
      "id": "g-dish-12-roti",
      "name": "Roti",
      "type": "Veg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "placeholder-chinese-naan",
  "name": "Chinese Naan",
  "group": "Roti",
  "type": "PLACEHOLDER",
  "card": "",
  "thumb": "",
  "mappedNumbers": [
    18
  ],
  "dishes": [
    {
      "num": 18,
      "id": "g-dish-20-chinese-naan",
      "name": "Chinese Naan",
      "type": "Veg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "placeholder-fish-kabab",
  "name": "Fish Kabab",
  "group": "Fish (Seasonal)",
  "type": "PLACEHOLDER",
  "card": "",
  "thumb": "",
  "mappedNumbers": [
    27
  ],
  "dishes": [
    {
      "num": 27,
      "id": "g-dish-29-fish-kabab",
      "name": "Fish Kabab",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "placeholder-kakri-kabab",
  "name": "Kakri Kabab",
  "group": "Tandoori Starters (Veg)",
  "type": "PLACEHOLDER",
  "card": "",
  "thumb": "",
  "mappedNumbers": [
    61
  ],
  "dishes": [
    {
      "num": 61,
      "id": "g-dish-65-kakri-kabab",
      "name": "Kakri Kabab",
      "type": "Veg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "placeholder-lasooni-kabab",
  "name": "Lasooni Kabab",
  "group": "Tandoori Starters (Veg)",
  "type": "PLACEHOLDER",
  "card": "",
  "thumb": "",
  "mappedNumbers": [
    62
  ],
  "dishes": [
    {
      "num": 62,
      "id": "g-dish-66-lasooni-kabab",
      "name": "Lasooni Kabab",
      "type": "Veg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "placeholder-chicken-roll-goll",
  "name": "Chicken Roll Goll",
  "group": "Starters (Non-Veg)",
  "type": "PLACEHOLDER",
  "card": "",
  "thumb": "",
  "mappedNumbers": [
    71
  ],
  "dishes": [
    {
      "num": 71,
      "id": "g-dish-75-chicken-roll-goll",
      "name": "Chicken Roll Goll",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "placeholder-mutton-gulthani-kabab",
  "name": "Mutton Gulthani Kabab",
  "group": "Starters (Non-Veg)",
  "type": "PLACEHOLDER",
  "card": "",
  "thumb": "",
  "mappedNumbers": [
    72
  ],
  "dishes": [
    {
      "num": 72,
      "id": "g-dish-76-mutton-gulthani-kabab",
      "name": "Mutton Gulthani Kabab",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "placeholder-idli-kal-soup",
  "name": "Idli Kal Soup",
  "group": "K2N Special Items (Naati)",
  "type": "PLACEHOLDER",
  "card": "",
  "thumb": "",
  "mappedNumbers": [
    82
  ],
  "dishes": [
    {
      "num": 82,
      "id": "g-dish-86-idli-kal-soup",
      "name": "Idli Kal Soup",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "placeholder-egg-ghee-roast",
  "name": "Egg Ghee Roast",
  "group": "K2N Special Items (Naati)",
  "type": "PLACEHOLDER",
  "card": "",
  "thumb": "",
  "mappedNumbers": [
    87
  ],
  "dishes": [
    {
      "num": 87,
      "id": "g-dish-91-egg-ghee-roast",
      "name": "Egg Ghee Roast",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "placeholder-bamboo-biryani",
  "name": "Bamboo Biryani",
  "group": "K2N Special Items (Naati)",
  "type": "PLACEHOLDER",
  "card": "",
  "thumb": "",
  "mappedNumbers": [
    89
  ],
  "dishes": [
    {
      "num": 89,
      "id": "g-dish-93-bamboo-biryani",
      "name": "Bamboo Biryani",
      "type": "Nonveg",
      "variants": "Single"
    }
  ]
},
  {
  "id": "placeholder-veg-grains-platter",
  "name": "Veg Grains Platter",
  "group": "Drinking Sides",
  "type": "PLACEHOLDER",
  "card": "",
  "thumb": "",
  "mappedNumbers": [
    208
  ],
  "dishes": [
    {
      "num": 208,
      "id": "g-dish-212-veg-grains-platter",
      "name": "Veg Grains Platter",
      "type": "Veg",
      "variants": "Single"
    }
  ]
},
];

/**
 * Direct lookup map from dish ID to image assets
 */
export const dishImageMap = {
  "g-dish-1-egg-fried-rice": {
    "heroId": "hero-egg-fried-rice",
    "card": "/assets/images/hero/hero-egg-fried-rice-card.webp",
    "thumb": "/assets/images/hero/hero-egg-fried-rice-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-1-egg-fried-rice": {
    "heroId": "hero-egg-fried-rice",
    "card": "/assets/images/hero/hero-egg-fried-rice-card.webp",
    "thumb": "/assets/images/hero/hero-egg-fried-rice-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-2-chicken-fried-rice": {
    "heroId": "hero-chicken-fried-rice",
    "card": "/assets/images/hero/hero-chicken-fried-rice-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-fried-rice-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-2-chicken-fried-rice": {
    "heroId": "hero-chicken-fried-rice",
    "card": "/assets/images/hero/hero-chicken-fried-rice-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-fried-rice-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-5-homemade-chicken-rice": {
    "heroId": "hero-chicken-fried-rice",
    "card": "/assets/images/hero/hero-chicken-fried-rice-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-fried-rice-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-5-homemade-chicken-rice": {
    "heroId": "hero-chicken-fried-rice",
    "card": "/assets/images/hero/hero-chicken-fried-rice-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-fried-rice-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-6-singapuri-chicken-fried-rice": {
    "heroId": "hero-chicken-fried-rice",
    "card": "/assets/images/hero/hero-chicken-fried-rice-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-fried-rice-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-6-singapuri-chicken-fried-rice": {
    "heroId": "hero-chicken-fried-rice",
    "card": "/assets/images/hero/hero-chicken-fried-rice-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-fried-rice-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-7-hohe-brown-chicken-rice": {
    "heroId": "hero-chicken-fried-rice",
    "card": "/assets/images/hero/hero-chicken-fried-rice-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-fried-rice-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-7-hohe-brown-chicken-rice": {
    "heroId": "hero-chicken-fried-rice",
    "card": "/assets/images/hero/hero-chicken-fried-rice-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-fried-rice-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-3-schezwan-chicken-fried-rice": {
    "heroId": "hero-schezwan-chicken-rice",
    "card": "/assets/images/hero/hero-schezwan-chicken-rice-card.webp",
    "thumb": "/assets/images/hero/hero-schezwan-chicken-rice-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-3-schezwan-chicken-fried-rice": {
    "heroId": "hero-schezwan-chicken-rice",
    "card": "/assets/images/hero/hero-schezwan-chicken-rice-card.webp",
    "thumb": "/assets/images/hero/hero-schezwan-chicken-rice-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-200-veg-fried-rice": {
    "heroId": "hero-veg-fried-rice",
    "card": "/assets/images/hero/hero-veg-fried-rice-card.webp",
    "thumb": "/assets/images/hero/hero-veg-fried-rice-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-200-veg-fried-rice": {
    "heroId": "hero-veg-fried-rice",
    "card": "/assets/images/hero/hero-veg-fried-rice-card.webp",
    "thumb": "/assets/images/hero/hero-veg-fried-rice-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-203-paneer-fried-rice": {
    "heroId": "hero-veg-fried-rice",
    "card": "/assets/images/hero/hero-veg-fried-rice-card.webp",
    "thumb": "/assets/images/hero/hero-veg-fried-rice-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-203-paneer-fried-rice": {
    "heroId": "hero-veg-fried-rice",
    "card": "/assets/images/hero/hero-veg-fried-rice-card.webp",
    "thumb": "/assets/images/hero/hero-veg-fried-rice-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-201-veg-schezwan-rice": {
    "heroId": "hero-veg-schezwan-rice",
    "card": "/assets/images/hero/hero-veg-schezwan-rice-card.webp",
    "thumb": "/assets/images/hero/hero-veg-schezwan-rice-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-201-veg-schezwan-rice": {
    "heroId": "hero-veg-schezwan-rice",
    "card": "/assets/images/hero/hero-veg-schezwan-rice-card.webp",
    "thumb": "/assets/images/hero/hero-veg-schezwan-rice-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-202-veg-triple-schezwan-rice": {
    "heroId": "hero-veg-schezwan-rice",
    "card": "/assets/images/hero/hero-veg-schezwan-rice-card.webp",
    "thumb": "/assets/images/hero/hero-veg-schezwan-rice-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-202-veg-triple-schezwan-rice": {
    "heroId": "hero-veg-schezwan-rice",
    "card": "/assets/images/hero/hero-veg-schezwan-rice-card.webp",
    "thumb": "/assets/images/hero/hero-veg-schezwan-rice-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-194-jeera-rice": {
    "heroId": "hero-jeera-ghee-rice",
    "card": "/assets/images/hero/hero-jeera-ghee-rice-card.webp",
    "thumb": "/assets/images/hero/hero-jeera-ghee-rice-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-194-jeera-rice": {
    "heroId": "hero-jeera-ghee-rice",
    "card": "/assets/images/hero/hero-jeera-ghee-rice-card.webp",
    "thumb": "/assets/images/hero/hero-jeera-ghee-rice-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-195-ghee-rice": {
    "heroId": "hero-jeera-ghee-rice",
    "card": "/assets/images/hero/hero-jeera-ghee-rice-card.webp",
    "thumb": "/assets/images/hero/hero-jeera-ghee-rice-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-195-ghee-rice": {
    "heroId": "hero-jeera-ghee-rice",
    "card": "/assets/images/hero/hero-jeera-ghee-rice-card.webp",
    "thumb": "/assets/images/hero/hero-jeera-ghee-rice-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-196-steam-rice": {
    "heroId": "hero-steam-rice",
    "card": "/assets/images/hero/hero-steam-rice-card.webp",
    "thumb": "/assets/images/hero/hero-steam-rice-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-196-steam-rice": {
    "heroId": "hero-steam-rice",
    "card": "/assets/images/hero/hero-steam-rice-card.webp",
    "thumb": "/assets/images/hero/hero-steam-rice-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-197-dal-khichidi": {
    "heroId": "hero-khichdi",
    "card": "/assets/images/hero/hero-khichdi-card.webp",
    "thumb": "/assets/images/hero/hero-khichdi-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-197-dal-khichidi": {
    "heroId": "hero-khichdi",
    "card": "/assets/images/hero/hero-khichdi-card.webp",
    "thumb": "/assets/images/hero/hero-khichdi-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-198-palak-khichidi": {
    "heroId": "hero-khichdi",
    "card": "/assets/images/hero/hero-khichdi-card.webp",
    "thumb": "/assets/images/hero/hero-khichdi-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-198-palak-khichidi": {
    "heroId": "hero-khichdi",
    "card": "/assets/images/hero/hero-khichdi-card.webp",
    "thumb": "/assets/images/hero/hero-khichdi-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-199-curd-rice": {
    "heroId": "hero-curd-rice",
    "card": "/assets/images/hero/hero-curd-rice-card.webp",
    "thumb": "/assets/images/hero/hero-curd-rice-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-199-curd-rice": {
    "heroId": "hero-curd-rice",
    "card": "/assets/images/hero/hero-curd-rice-card.webp",
    "thumb": "/assets/images/hero/hero-curd-rice-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-204-veg-noodles": {
    "heroId": "hero-veg-noodles",
    "card": "/assets/images/hero/hero-veg-noodles-card.webp",
    "thumb": "/assets/images/hero/hero-veg-noodles-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-204-veg-noodles": {
    "heroId": "hero-veg-noodles",
    "card": "/assets/images/hero/hero-veg-noodles-card.webp",
    "thumb": "/assets/images/hero/hero-veg-noodles-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-205-paneer-noodles": {
    "heroId": "hero-veg-noodles",
    "card": "/assets/images/hero/hero-veg-noodles-card.webp",
    "thumb": "/assets/images/hero/hero-veg-noodles-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-205-paneer-noodles": {
    "heroId": "hero-veg-noodles",
    "card": "/assets/images/hero/hero-veg-noodles-card.webp",
    "thumb": "/assets/images/hero/hero-veg-noodles-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-206-veg-schezwan-noodles": {
    "heroId": "hero-veg-schezwan-noodles",
    "card": "/assets/images/hero/hero-veg-schezwan-noodles-card.webp",
    "thumb": "/assets/images/hero/hero-veg-schezwan-noodles-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-206-veg-schezwan-noodles": {
    "heroId": "hero-veg-schezwan-noodles",
    "card": "/assets/images/hero/hero-veg-schezwan-noodles-card.webp",
    "thumb": "/assets/images/hero/hero-veg-schezwan-noodles-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-207-egg-noodles": {
    "heroId": "hero-egg-noodles",
    "card": "/assets/images/hero/hero-egg-noodles-card.webp",
    "thumb": "/assets/images/hero/hero-egg-noodles-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-207-egg-noodles": {
    "heroId": "hero-egg-noodles",
    "card": "/assets/images/hero/hero-egg-noodles-card.webp",
    "thumb": "/assets/images/hero/hero-egg-noodles-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-208-egg-schezwan-noodles": {
    "heroId": "hero-egg-noodles",
    "card": "/assets/images/hero/hero-egg-noodles-card.webp",
    "thumb": "/assets/images/hero/hero-egg-noodles-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-208-egg-schezwan-noodles": {
    "heroId": "hero-egg-noodles",
    "card": "/assets/images/hero/hero-egg-noodles-card.webp",
    "thumb": "/assets/images/hero/hero-egg-noodles-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-209-chicken-noodles": {
    "heroId": "hero-chicken-noodles",
    "card": "/assets/images/hero/hero-chicken-noodles-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-noodles-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-209-chicken-noodles": {
    "heroId": "hero-chicken-noodles",
    "card": "/assets/images/hero/hero-chicken-noodles-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-noodles-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-210-chicken-schezwan-noodles": {
    "heroId": "hero-chicken-noodles",
    "card": "/assets/images/hero/hero-chicken-noodles-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-noodles-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-210-chicken-schezwan-noodles": {
    "heroId": "hero-chicken-noodles",
    "card": "/assets/images/hero/hero-chicken-noodles-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-noodles-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-8-mutton-mandi-rice-full": {
    "heroId": "hero-mutton-mandi",
    "card": "/assets/images/hero/hero-mutton-mandi-card.webp",
    "thumb": "/assets/images/hero/hero-mutton-mandi-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-8-mutton-mandi-rice-full": {
    "heroId": "hero-mutton-mandi",
    "card": "/assets/images/hero/hero-mutton-mandi-card.webp",
    "thumb": "/assets/images/hero/hero-mutton-mandi-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-9-mutton-mandi-rice-half": {
    "heroId": "hero-mutton-mandi",
    "card": "/assets/images/hero/hero-mutton-mandi-card.webp",
    "thumb": "/assets/images/hero/hero-mutton-mandi-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-9-mutton-mandi-rice-half": {
    "heroId": "hero-mutton-mandi",
    "card": "/assets/images/hero/hero-mutton-mandi-card.webp",
    "thumb": "/assets/images/hero/hero-mutton-mandi-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-10-chicken-mandi-rice-full": {
    "heroId": "hero-chicken-mandi",
    "card": "/assets/images/hero/hero-chicken-mandi-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-mandi-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-10-chicken-mandi-rice-full": {
    "heroId": "hero-chicken-mandi",
    "card": "/assets/images/hero/hero-chicken-mandi-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-mandi-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-11-chicken-mandi-rice-half": {
    "heroId": "hero-chicken-mandi",
    "card": "/assets/images/hero/hero-chicken-mandi-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-mandi-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-11-chicken-mandi-rice-half": {
    "heroId": "hero-chicken-mandi",
    "card": "/assets/images/hero/hero-chicken-mandi-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-mandi-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-83-lucknow-biryani": {
    "heroId": "hero-chicken-biryani-donne",
    "card": "/assets/images/hero/hero-chicken-biryani-donne-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-biryani-donne-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-83-lucknow-biryani": {
    "heroId": "hero-chicken-biryani-donne",
    "card": "/assets/images/hero/hero-chicken-biryani-donne-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-biryani-donne-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-87-chicken-dum-biryani": {
    "heroId": "hero-chicken-biryani",
    "card": "/assets/images/hero/hero-chicken-biryani-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-biryani-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-87-chicken-dum-biryani": {
    "heroId": "hero-chicken-biryani",
    "card": "/assets/images/hero/hero-chicken-biryani-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-biryani-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-94-chicken-donne-biryani": {
    "heroId": "hero-chicken-biryani-donne",
    "card": "/assets/images/hero/hero-chicken-biryani-donne-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-biryani-donne-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-94-chicken-donne-biryani": {
    "heroId": "hero-chicken-biryani-donne",
    "card": "/assets/images/hero/hero-chicken-biryani-donne-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-biryani-donne-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-96-chicken-madike-biryani": {
    "heroId": "hero-chicken-biryani-donne",
    "card": "/assets/images/hero/hero-chicken-biryani-donne-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-biryani-donne-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-96-chicken-madike-biryani": {
    "heroId": "hero-chicken-biryani-donne",
    "card": "/assets/images/hero/hero-chicken-biryani-donne-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-biryani-donne-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-142-chicken-biryani": {
    "heroId": "hero-chicken-biryani",
    "card": "/assets/images/hero/hero-chicken-biryani-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-biryani-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-142-chicken-biryani": {
    "heroId": "hero-chicken-biryani",
    "card": "/assets/images/hero/hero-chicken-biryani-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-biryani-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-147-chicken-mughlai-biryani": {
    "heroId": "hero-chicken-biryani",
    "card": "/assets/images/hero/hero-chicken-biryani-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-biryani-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-147-chicken-mughlai-biryani": {
    "heroId": "hero-chicken-biryani",
    "card": "/assets/images/hero/hero-chicken-biryani-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-biryani-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-148-chicken-tikka-biryani": {
    "heroId": "hero-chicken-biryani",
    "card": "/assets/images/hero/hero-chicken-biryani-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-biryani-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-148-chicken-tikka-biryani": {
    "heroId": "hero-chicken-biryani",
    "card": "/assets/images/hero/hero-chicken-biryani-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-biryani-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-88-muttam-dum-biryani": {
    "heroId": "hero-mutton-biryani",
    "card": "/assets/images/hero/hero-mutton-biryani-card.webp",
    "thumb": "/assets/images/hero/hero-mutton-biryani-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-88-muttam-dum-biryani": {
    "heroId": "hero-mutton-biryani",
    "card": "/assets/images/hero/hero-mutton-biryani-card.webp",
    "thumb": "/assets/images/hero/hero-mutton-biryani-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-95-mutton-donne-biryani": {
    "heroId": "hero-mutton-biryani",
    "card": "/assets/images/hero/hero-mutton-biryani-card.webp",
    "thumb": "/assets/images/hero/hero-mutton-biryani-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-95-mutton-donne-biryani": {
    "heroId": "hero-mutton-biryani",
    "card": "/assets/images/hero/hero-mutton-biryani-card.webp",
    "thumb": "/assets/images/hero/hero-mutton-biryani-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-143-mutton-biryani": {
    "heroId": "hero-mutton-biryani",
    "card": "/assets/images/hero/hero-mutton-biryani-card.webp",
    "thumb": "/assets/images/hero/hero-mutton-biryani-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-143-mutton-biryani": {
    "heroId": "hero-mutton-biryani",
    "card": "/assets/images/hero/hero-mutton-biryani-card.webp",
    "thumb": "/assets/images/hero/hero-mutton-biryani-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-144-fish-biryani": {
    "heroId": "hero-fish-biryani",
    "card": "/assets/images/hero/hero-fish-biryani-card.webp",
    "thumb": "/assets/images/hero/hero-fish-biryani-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-144-fish-biryani": {
    "heroId": "hero-fish-biryani",
    "card": "/assets/images/hero/hero-fish-biryani-card.webp",
    "thumb": "/assets/images/hero/hero-fish-biryani-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-145-egg-biryani": {
    "heroId": "hero-egg-biryani",
    "card": "/assets/images/hero/hero-egg-biryani-card.webp",
    "thumb": "/assets/images/hero/hero-egg-biryani-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-145-egg-biryani": {
    "heroId": "hero-egg-biryani",
    "card": "/assets/images/hero/hero-egg-biryani-card.webp",
    "thumb": "/assets/images/hero/hero-egg-biryani-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-146-prawns-biryani": {
    "heroId": "hero-prawns-biryani",
    "card": "/assets/images/hero/hero-prawns-biryani-card.webp",
    "thumb": "/assets/images/hero/hero-prawns-biryani-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-146-prawns-biryani": {
    "heroId": "hero-prawns-biryani",
    "card": "/assets/images/hero/hero-prawns-biryani-card.webp",
    "thumb": "/assets/images/hero/hero-prawns-biryani-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-137-veg-biryani": {
    "heroId": "hero-veg-biryani",
    "card": "/assets/images/hero/hero-veg-biryani-card.webp",
    "thumb": "/assets/images/hero/hero-veg-biryani-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-137-veg-biryani": {
    "heroId": "hero-veg-biryani",
    "card": "/assets/images/hero/hero-veg-biryani-card.webp",
    "thumb": "/assets/images/hero/hero-veg-biryani-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-138-paneer-biryani": {
    "heroId": "hero-veg-biryani",
    "card": "/assets/images/hero/hero-veg-biryani-card.webp",
    "thumb": "/assets/images/hero/hero-veg-biryani-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-138-paneer-biryani": {
    "heroId": "hero-veg-biryani",
    "card": "/assets/images/hero/hero-veg-biryani-card.webp",
    "thumb": "/assets/images/hero/hero-veg-biryani-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-139-mushroom-biryani": {
    "heroId": "hero-veg-biryani",
    "card": "/assets/images/hero/hero-veg-biryani-card.webp",
    "thumb": "/assets/images/hero/hero-veg-biryani-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-139-mushroom-biryani": {
    "heroId": "hero-veg-biryani",
    "card": "/assets/images/hero/hero-veg-biryani-card.webp",
    "thumb": "/assets/images/hero/hero-veg-biryani-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-140-paneer-kaju-biryani": {
    "heroId": "hero-veg-biryani",
    "card": "/assets/images/hero/hero-veg-biryani-card.webp",
    "thumb": "/assets/images/hero/hero-veg-biryani-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-140-paneer-kaju-biryani": {
    "heroId": "hero-veg-biryani",
    "card": "/assets/images/hero/hero-veg-biryani-card.webp",
    "thumb": "/assets/images/hero/hero-veg-biryani-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-141-mushroom-kaju-biryani": {
    "heroId": "hero-veg-biryani",
    "card": "/assets/images/hero/hero-veg-biryani-card.webp",
    "thumb": "/assets/images/hero/hero-veg-biryani-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-141-mushroom-kaju-biryani": {
    "heroId": "hero-veg-biryani",
    "card": "/assets/images/hero/hero-veg-biryani-card.webp",
    "thumb": "/assets/images/hero/hero-veg-biryani-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-18-butter-roti": {
    "heroId": "hero-butter-roti",
    "card": "/assets/images/hero/hero-butter-roti-card.webp",
    "thumb": "/assets/images/hero/hero-butter-roti-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-18-butter-roti": {
    "heroId": "hero-butter-roti",
    "card": "/assets/images/hero/hero-butter-roti-card.webp",
    "thumb": "/assets/images/hero/hero-butter-roti-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-13-akki-rotti": {
    "heroId": "hero-akki-rotti",
    "card": "/assets/images/hero/hero-akki-rotti-card.webp",
    "thumb": "/assets/images/hero/hero-akki-rotti-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-13-akki-rotti": {
    "heroId": "hero-akki-rotti",
    "card": "/assets/images/hero/hero-akki-rotti-card.webp",
    "thumb": "/assets/images/hero/hero-akki-rotti-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-14-naan-plain": {
    "heroId": "hero-butter-naan",
    "card": "/assets/images/hero/hero-butter-naan-card.webp",
    "thumb": "/assets/images/hero/hero-butter-naan-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-14-naan-plain": {
    "heroId": "hero-butter-naan",
    "card": "/assets/images/hero/hero-butter-naan-card.webp",
    "thumb": "/assets/images/hero/hero-butter-naan-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-15-butter-naan": {
    "heroId": "hero-butter-naan",
    "card": "/assets/images/hero/hero-butter-naan-card.webp",
    "thumb": "/assets/images/hero/hero-butter-naan-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-15-butter-naan": {
    "heroId": "hero-butter-naan",
    "card": "/assets/images/hero/hero-butter-naan-card.webp",
    "thumb": "/assets/images/hero/hero-butter-naan-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-19-garlic-naan": {
    "heroId": "hero-garlic-naan",
    "card": "/assets/images/hero/hero-garlic-naan-card.webp",
    "thumb": "/assets/images/hero/hero-garlic-naan-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-19-garlic-naan": {
    "heroId": "hero-garlic-naan",
    "card": "/assets/images/hero/hero-garlic-naan-card.webp",
    "thumb": "/assets/images/hero/hero-garlic-naan-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-16-kulcha": {
    "heroId": "hero-kulcha",
    "card": "/assets/images/hero/hero-kulcha-card.webp",
    "thumb": "/assets/images/hero/hero-kulcha-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-16-kulcha": {
    "heroId": "hero-kulcha",
    "card": "/assets/images/hero/hero-kulcha-card.webp",
    "thumb": "/assets/images/hero/hero-kulcha-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-17-butter-kulcha": {
    "heroId": "hero-kulcha",
    "card": "/assets/images/hero/hero-kulcha-card.webp",
    "thumb": "/assets/images/hero/hero-kulcha-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-17-butter-kulcha": {
    "heroId": "hero-kulcha",
    "card": "/assets/images/hero/hero-kulcha-card.webp",
    "thumb": "/assets/images/hero/hero-kulcha-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-25-onion-kulcha": {
    "heroId": "hero-kulcha",
    "card": "/assets/images/hero/hero-kulcha-card.webp",
    "thumb": "/assets/images/hero/hero-kulcha-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-25-onion-kulcha": {
    "heroId": "hero-kulcha",
    "card": "/assets/images/hero/hero-kulcha-card.webp",
    "thumb": "/assets/images/hero/hero-kulcha-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-23-stuffed-paratha": {
    "heroId": "hero-paratha",
    "card": "/assets/images/hero/hero-paratha-card.webp",
    "thumb": "/assets/images/hero/hero-paratha-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-23-stuffed-paratha": {
    "heroId": "hero-paratha",
    "card": "/assets/images/hero/hero-paratha-card.webp",
    "thumb": "/assets/images/hero/hero-paratha-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-26-onion-paratha": {
    "heroId": "hero-paratha",
    "card": "/assets/images/hero/hero-paratha-card.webp",
    "thumb": "/assets/images/hero/hero-paratha-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-26-onion-paratha": {
    "heroId": "hero-paratha",
    "card": "/assets/images/hero/hero-paratha-card.webp",
    "thumb": "/assets/images/hero/hero-paratha-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-24-lacha-paratha": {
    "heroId": "hero-lacha-paratha",
    "card": "/assets/images/hero/hero-lacha-paratha-card.webp",
    "thumb": "/assets/images/hero/hero-lacha-paratha-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-24-lacha-paratha": {
    "heroId": "hero-lacha-paratha",
    "card": "/assets/images/hero/hero-lacha-paratha-card.webp",
    "thumb": "/assets/images/hero/hero-lacha-paratha-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-21-mutton-keema-naan": {
    "heroId": "hero-keema-naan",
    "card": "/assets/images/hero/hero-keema-naan-card.webp",
    "thumb": "/assets/images/hero/hero-keema-naan-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-21-mutton-keema-naan": {
    "heroId": "hero-keema-naan",
    "card": "/assets/images/hero/hero-keema-naan-card.webp",
    "thumb": "/assets/images/hero/hero-keema-naan-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-22-chicken-keema-naan": {
    "heroId": "hero-keema-naan",
    "card": "/assets/images/hero/hero-keema-naan-card.webp",
    "thumb": "/assets/images/hero/hero-keema-naan-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-22-chicken-keema-naan": {
    "heroId": "hero-keema-naan",
    "card": "/assets/images/hero/hero-keema-naan-card.webp",
    "thumb": "/assets/images/hero/hero-keema-naan-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-27-tandoori-fish": {
    "heroId": "hero-tandoori-fish",
    "card": "/assets/images/hero/hero-tandoori-fish-card.webp",
    "thumb": "/assets/images/hero/hero-tandoori-fish-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-27-tandoori-fish": {
    "heroId": "hero-tandoori-fish",
    "card": "/assets/images/hero/hero-tandoori-fish-card.webp",
    "thumb": "/assets/images/hero/hero-tandoori-fish-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-28-fish-tikka": {
    "heroId": "hero-fish-tikka",
    "card": "/assets/images/hero/hero-fish-tikka-card.webp",
    "thumb": "/assets/images/hero/hero-fish-tikka-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-28-fish-tikka": {
    "heroId": "hero-fish-tikka",
    "card": "/assets/images/hero/hero-fish-tikka-card.webp",
    "thumb": "/assets/images/hero/hero-fish-tikka-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-30-bangda-fry": {
    "heroId": "hero-bangda-fry",
    "card": "/assets/images/hero/hero-bangda-fry-card.webp",
    "thumb": "/assets/images/hero/hero-bangda-fry-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-30-bangda-fry": {
    "heroId": "hero-bangda-fry",
    "card": "/assets/images/hero/hero-bangda-fry-card.webp",
    "thumb": "/assets/images/hero/hero-bangda-fry-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-31-bangda-rava-fry": {
    "heroId": "hero-bangda-fry",
    "card": "/assets/images/hero/hero-bangda-fry-card.webp",
    "thumb": "/assets/images/hero/hero-bangda-fry-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-31-bangda-rava-fry": {
    "heroId": "hero-bangda-fry",
    "card": "/assets/images/hero/hero-bangda-fry-card.webp",
    "thumb": "/assets/images/hero/hero-bangda-fry-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-32-bangda-tawa-fry": {
    "heroId": "hero-bangda-fry",
    "card": "/assets/images/hero/hero-bangda-fry-card.webp",
    "thumb": "/assets/images/hero/hero-bangda-fry-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-32-bangda-tawa-fry": {
    "heroId": "hero-bangda-fry",
    "card": "/assets/images/hero/hero-bangda-fry-card.webp",
    "thumb": "/assets/images/hero/hero-bangda-fry-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-33-kaatla-rava-fry": {
    "heroId": "hero-kaatla-fry",
    "card": "/assets/images/hero/hero-kaatla-fry-card.webp",
    "thumb": "/assets/images/hero/hero-kaatla-fry-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-33-kaatla-rava-fry": {
    "heroId": "hero-kaatla-fry",
    "card": "/assets/images/hero/hero-kaatla-fry-card.webp",
    "thumb": "/assets/images/hero/hero-kaatla-fry-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-34-kaatla-tawa-fry": {
    "heroId": "hero-kaatla-fry",
    "card": "/assets/images/hero/hero-kaatla-fry-card.webp",
    "thumb": "/assets/images/hero/hero-kaatla-fry-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-34-kaatla-tawa-fry": {
    "heroId": "hero-kaatla-fry",
    "card": "/assets/images/hero/hero-kaatla-fry-card.webp",
    "thumb": "/assets/images/hero/hero-kaatla-fry-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-39-paneer-malai-tikka": {
    "heroId": "hero-paneer-malai-tikka",
    "card": "/assets/images/hero/hero-paneer-malai-tikka-card.webp",
    "thumb": "/assets/images/hero/hero-paneer-malai-tikka-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-39-paneer-malai-tikka": {
    "heroId": "hero-paneer-malai-tikka",
    "card": "/assets/images/hero/hero-paneer-malai-tikka-card.webp",
    "thumb": "/assets/images/hero/hero-paneer-malai-tikka-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-37-paneer-hiltop": {
    "heroId": "hero-paneer-hara",
    "card": "/assets/images/hero/hero-paneer-hara-card.webp",
    "thumb": "/assets/images/hero/hero-paneer-hara-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-37-paneer-hiltop": {
    "heroId": "hero-paneer-hara",
    "card": "/assets/images/hero/hero-paneer-hara-card.webp",
    "thumb": "/assets/images/hero/hero-paneer-hara-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-38-paneer-hara-hirchi": {
    "heroId": "hero-paneer-hara",
    "card": "/assets/images/hero/hero-paneer-hara-card.webp",
    "thumb": "/assets/images/hero/hero-paneer-hara-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-38-paneer-hara-hirchi": {
    "heroId": "hero-paneer-hara",
    "card": "/assets/images/hero/hero-paneer-hara-card.webp",
    "thumb": "/assets/images/hero/hero-paneer-hara-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-40-paneer-pahadi": {
    "heroId": "hero-paneer-hara",
    "card": "/assets/images/hero/hero-paneer-hara-card.webp",
    "thumb": "/assets/images/hero/hero-paneer-hara-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-40-paneer-pahadi": {
    "heroId": "hero-paneer-hara",
    "card": "/assets/images/hero/hero-paneer-hara-card.webp",
    "thumb": "/assets/images/hero/hero-paneer-hara-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-41-paneer-multhani": {
    "heroId": "hero-paneer-hara",
    "card": "/assets/images/hero/hero-paneer-hara-card.webp",
    "thumb": "/assets/images/hero/hero-paneer-hara-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-41-paneer-multhani": {
    "heroId": "hero-paneer-hara",
    "card": "/assets/images/hero/hero-paneer-hara-card.webp",
    "thumb": "/assets/images/hero/hero-paneer-hara-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-36-veg-shole-kabab": {
    "heroId": "hero-veg-kabab",
    "card": "/assets/images/hero/hero-veg-kabab-card.webp",
    "thumb": "/assets/images/hero/hero-veg-kabab-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-36-veg-shole-kabab": {
    "heroId": "hero-veg-kabab",
    "card": "/assets/images/hero/hero-veg-kabab-card.webp",
    "thumb": "/assets/images/hero/hero-veg-kabab-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-64-veg-burasi-kabab": {
    "heroId": "hero-veg-kabab",
    "card": "/assets/images/hero/hero-veg-kabab-card.webp",
    "thumb": "/assets/images/hero/hero-veg-kabab-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-64-veg-burasi-kabab": {
    "heroId": "hero-veg-kabab",
    "card": "/assets/images/hero/hero-veg-kabab-card.webp",
    "thumb": "/assets/images/hero/hero-veg-kabab-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-67-rim-jhim-kabab": {
    "heroId": "hero-rim-jhim-kabab",
    "card": "/assets/images/hero/hero-rim-jhim-kabab-card.webp",
    "thumb": "/assets/images/hero/hero-rim-jhim-kabab-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-67-rim-jhim-kabab": {
    "heroId": "hero-rim-jhim-kabab",
    "card": "/assets/images/hero/hero-rim-jhim-kabab-card.webp",
    "thumb": "/assets/images/hero/hero-rim-jhim-kabab-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-82-veg-gold-coin": {
    "heroId": "hero-veg-kabab",
    "card": "/assets/images/hero/hero-veg-kabab-card.webp",
    "thumb": "/assets/images/hero/hero-veg-kabab-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-82-veg-gold-coin": {
    "heroId": "hero-veg-kabab",
    "card": "/assets/images/hero/hero-veg-kabab-card.webp",
    "thumb": "/assets/images/hero/hero-veg-kabab-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-68-corn-basket": {
    "heroId": "hero-corn-basket",
    "card": "/assets/images/hero/hero-corn-basket-card.webp",
    "thumb": "/assets/images/hero/hero-corn-basket-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-68-corn-basket": {
    "heroId": "hero-corn-basket",
    "card": "/assets/images/hero/hero-corn-basket-card.webp",
    "thumb": "/assets/images/hero/hero-corn-basket-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-78-chilli-potato-chinese": {
    "heroId": "hero-chilli-potato",
    "card": "/assets/images/hero/hero-chilli-potato-card.webp",
    "thumb": "/assets/images/hero/hero-chilli-potato-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-78-chilli-potato-chinese": {
    "heroId": "hero-chilli-potato",
    "card": "/assets/images/hero/hero-chilli-potato-card.webp",
    "thumb": "/assets/images/hero/hero-chilli-potato-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-114-honey-chilli-potato": {
    "heroId": "hero-chilli-potato",
    "card": "/assets/images/hero/hero-chilli-potato-card.webp",
    "thumb": "/assets/images/hero/hero-chilli-potato-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-114-honey-chilli-potato": {
    "heroId": "hero-chilli-potato",
    "card": "/assets/images/hero/hero-chilli-potato-card.webp",
    "thumb": "/assets/images/hero/hero-chilli-potato-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-79-finger-chips-peri-peri": {
    "heroId": "hero-finger-chips",
    "card": "/assets/images/hero/hero-finger-chips-card.webp",
    "thumb": "/assets/images/hero/hero-finger-chips-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-79-finger-chips-peri-peri": {
    "heroId": "hero-finger-chips",
    "card": "/assets/images/hero/hero-finger-chips-card.webp",
    "thumb": "/assets/images/hero/hero-finger-chips-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-106-veg-crispy": {
    "heroId": "hero-veg-crispy",
    "card": "/assets/images/hero/hero-veg-crispy-card.webp",
    "thumb": "/assets/images/hero/hero-veg-crispy-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-106-veg-crispy": {
    "heroId": "hero-veg-crispy",
    "card": "/assets/images/hero/hero-veg-crispy-card.webp",
    "thumb": "/assets/images/hero/hero-veg-crispy-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-107-gobi-manchurian": {
    "heroId": "hero-manchurian-veg",
    "card": "/assets/images/hero/hero-manchurian-veg-card.webp",
    "thumb": "/assets/images/hero/hero-manchurian-veg-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-107-gobi-manchurian": {
    "heroId": "hero-manchurian-veg",
    "card": "/assets/images/hero/hero-manchurian-veg-card.webp",
    "thumb": "/assets/images/hero/hero-manchurian-veg-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-108-paneer-manchurian": {
    "heroId": "hero-manchurian-veg",
    "card": "/assets/images/hero/hero-manchurian-veg-card.webp",
    "thumb": "/assets/images/hero/hero-manchurian-veg-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-108-paneer-manchurian": {
    "heroId": "hero-manchurian-veg",
    "card": "/assets/images/hero/hero-manchurian-veg-card.webp",
    "thumb": "/assets/images/hero/hero-manchurian-veg-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-109-mushroom-manchurian": {
    "heroId": "hero-manchurian-veg",
    "card": "/assets/images/hero/hero-manchurian-veg-card.webp",
    "thumb": "/assets/images/hero/hero-manchurian-veg-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-109-mushroom-manchurian": {
    "heroId": "hero-manchurian-veg",
    "card": "/assets/images/hero/hero-manchurian-veg-card.webp",
    "thumb": "/assets/images/hero/hero-manchurian-veg-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-110-paneer-chilli": {
    "heroId": "hero-veg-chilli",
    "card": "/assets/images/hero/hero-veg-chilli-card.webp",
    "thumb": "/assets/images/hero/hero-veg-chilli-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-110-paneer-chilli": {
    "heroId": "hero-veg-chilli",
    "card": "/assets/images/hero/hero-veg-chilli-card.webp",
    "thumb": "/assets/images/hero/hero-veg-chilli-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-111-gobi-chilli": {
    "heroId": "hero-veg-chilli",
    "card": "/assets/images/hero/hero-veg-chilli-card.webp",
    "thumb": "/assets/images/hero/hero-veg-chilli-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-111-gobi-chilli": {
    "heroId": "hero-veg-chilli",
    "card": "/assets/images/hero/hero-veg-chilli-card.webp",
    "thumb": "/assets/images/hero/hero-veg-chilli-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-112-mushroom-chilli": {
    "heroId": "hero-veg-chilli",
    "card": "/assets/images/hero/hero-veg-chilli-card.webp",
    "thumb": "/assets/images/hero/hero-veg-chilli-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-112-mushroom-chilli": {
    "heroId": "hero-veg-chilli",
    "card": "/assets/images/hero/hero-veg-chilli-card.webp",
    "thumb": "/assets/images/hero/hero-veg-chilli-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-113-baby-corn-chilli": {
    "heroId": "hero-veg-chilli",
    "card": "/assets/images/hero/hero-veg-chilli-card.webp",
    "thumb": "/assets/images/hero/hero-veg-chilli-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-113-baby-corn-chilli": {
    "heroId": "hero-veg-chilli",
    "card": "/assets/images/hero/hero-veg-chilli-card.webp",
    "thumb": "/assets/images/hero/hero-veg-chilli-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-45-chicken-kolhapuri-kabab": {
    "heroId": "hero-red-chicken-kabab",
    "card": "/assets/images/hero/hero-red-chicken-kabab-card.webp",
    "thumb": "/assets/images/hero/hero-red-chicken-kabab-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-45-chicken-kolhapuri-kabab": {
    "heroId": "hero-red-chicken-kabab",
    "card": "/assets/images/hero/hero-red-chicken-kabab-card.webp",
    "thumb": "/assets/images/hero/hero-red-chicken-kabab-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-46-chicken-banjara-kabab": {
    "heroId": "hero-chicken-banjara-kabab",
    "card": "/assets/images/hero/hero-chicken-banjara-kabab-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-banjara-kabab-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-46-chicken-banjara-kabab": {
    "heroId": "hero-chicken-banjara-kabab",
    "card": "/assets/images/hero/hero-chicken-banjara-kabab-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-banjara-kabab-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-48-chicken-achari-kabab": {
    "heroId": "hero-chicken-achari-kabab",
    "card": "/assets/images/hero/hero-chicken-achari-kabab-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-achari-kabab-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-48-chicken-achari-kabab": {
    "heroId": "hero-chicken-achari-kabab",
    "card": "/assets/images/hero/hero-chicken-achari-kabab-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-achari-kabab-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-49-chicken-tikka": {
    "heroId": "hero-chicken-tikka",
    "card": "/assets/images/hero/hero-chicken-tikka-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-tikka-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-49-chicken-tikka": {
    "heroId": "hero-chicken-tikka",
    "card": "/assets/images/hero/hero-chicken-tikka-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-tikka-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-50-chicken-oum-kabab": {
    "heroId": "hero-chicken-oum-kabab",
    "card": "/assets/images/hero/hero-chicken-oum-kabab-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-oum-kabab-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-50-chicken-oum-kabab": {
    "heroId": "hero-chicken-oum-kabab",
    "card": "/assets/images/hero/hero-chicken-oum-kabab-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-oum-kabab-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-57-chicken-boti-kabab": {
    "heroId": "hero-chicken-boti-kabab",
    "card": "/assets/images/hero/hero-chicken-boti-kabab-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-boti-kabab-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-57-chicken-boti-kabab": {
    "heroId": "hero-chicken-boti-kabab",
    "card": "/assets/images/hero/hero-chicken-boti-kabab-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-boti-kabab-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-58-chicken-madira-kabab": {
    "heroId": "hero-chicken-madira-kabab",
    "card": "/assets/images/hero/hero-chicken-madira-kabab-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-madira-kabab-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-58-chicken-madira-kabab": {
    "heroId": "hero-chicken-madira-kabab",
    "card": "/assets/images/hero/hero-chicken-madira-kabab-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-madira-kabab-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-61-chicken-maratha-kabab": {
    "heroId": "hero-chicken-maratha-kabab",
    "card": "/assets/images/hero/hero-chicken-maratha-kabab-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-maratha-kabab-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-61-chicken-maratha-kabab": {
    "heroId": "hero-chicken-maratha-kabab",
    "card": "/assets/images/hero/hero-chicken-maratha-kabab-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-maratha-kabab-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-62-chicken-lahari-kabab": {
    "heroId": "hero-chicken-lahari-kabab",
    "card": "/assets/images/hero/hero-chicken-lahari-kabab-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-lahari-kabab-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-62-chicken-lahari-kabab": {
    "heroId": "hero-chicken-lahari-kabab",
    "card": "/assets/images/hero/hero-chicken-lahari-kabab-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-lahari-kabab-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-63-chicken-malaysian-kabab": {
    "heroId": "hero-chicken-malaysian-kabab",
    "card": "/assets/images/hero/hero-chicken-malaysian-kabab-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-malaysian-kabab-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-63-chicken-malaysian-kabab": {
    "heroId": "hero-chicken-malaysian-kabab",
    "card": "/assets/images/hero/hero-chicken-malaysian-kabab-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-malaysian-kabab-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-118-chicken-kabab": {
    "heroId": "hero-chicken-kabab",
    "card": "/assets/images/hero/hero-chicken-kabab-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-kabab-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-118-chicken-kabab": {
    "heroId": "hero-chicken-kabab",
    "card": "/assets/images/hero/hero-chicken-kabab-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-kabab-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-71-chicken-pudina-kabab": {
    "heroId": "hero-pudina-kabab",
    "card": "/assets/images/hero/hero-pudina-kabab-card.webp",
    "thumb": "/assets/images/hero/hero-pudina-kabab-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-71-chicken-pudina-kabab": {
    "heroId": "hero-pudina-kabab",
    "card": "/assets/images/hero/hero-pudina-kabab-card.webp",
    "thumb": "/assets/images/hero/hero-pudina-kabab-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-55-chicken-adraki-kabab": {
    "heroId": "hero-chicken-adraki-kabab",
    "card": "/assets/images/hero/hero-chicken-adraki-kabab-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-adraki-kabab-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-55-chicken-adraki-kabab": {
    "heroId": "hero-chicken-adraki-kabab",
    "card": "/assets/images/hero/hero-chicken-adraki-kabab-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-adraki-kabab-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-56-chicken-kali-miri-kabab": {
    "heroId": "hero-chicken-kali-miri",
    "card": "/assets/images/hero/hero-chicken-kali-miri-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-kali-miri-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-56-chicken-kali-miri-kabab": {
    "heroId": "hero-chicken-kali-miri",
    "card": "/assets/images/hero/hero-chicken-kali-miri-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-kali-miri-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-72-chicken-noorani-tikka": {
    "heroId": "hero-chicken-noorani-tikka",
    "card": "/assets/images/hero/hero-chicken-noorani-tikka-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-noorani-tikka-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-72-chicken-noorani-tikka": {
    "heroId": "hero-chicken-noorani-tikka",
    "card": "/assets/images/hero/hero-chicken-noorani-tikka-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-noorani-tikka-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-73-chicken-jafrani-tikka": {
    "heroId": "hero-chicken-jafrani-tikka",
    "card": "/assets/images/hero/hero-chicken-jafrani-tikka-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-jafrani-tikka-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-73-chicken-jafrani-tikka": {
    "heroId": "hero-chicken-jafrani-tikka",
    "card": "/assets/images/hero/hero-chicken-jafrani-tikka-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-jafrani-tikka-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-80-chicken-afgani-kabab": {
    "heroId": "hero-chicken-afgani-kabab",
    "card": "/assets/images/hero/hero-chicken-afgani-kabab-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-afgani-kabab-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-80-chicken-afgani-kabab": {
    "heroId": "hero-chicken-afgani-kabab",
    "card": "/assets/images/hero/hero-chicken-afgani-kabab-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-afgani-kabab-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-54-chicken-sheekh-kabab": {
    "heroId": "hero-chicken-seekh",
    "card": "/assets/images/hero/hero-chicken-seekh-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-seekh-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-54-chicken-sheekh-kabab": {
    "heroId": "hero-chicken-seekh",
    "card": "/assets/images/hero/hero-chicken-seekh-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-seekh-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-60-mutton-sheekh-kabab": {
    "heroId": "hero-mutton-seekh",
    "card": "/assets/images/hero/hero-mutton-seekh-card.webp",
    "thumb": "/assets/images/hero/hero-mutton-seekh-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-60-mutton-sheekh-kabab": {
    "heroId": "hero-mutton-seekh",
    "card": "/assets/images/hero/hero-mutton-seekh-card.webp",
    "thumb": "/assets/images/hero/hero-mutton-seekh-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-77-mutton-seekh-kabab": {
    "heroId": "hero-mutton-seekh",
    "card": "/assets/images/hero/hero-mutton-seekh-card.webp",
    "thumb": "/assets/images/hero/hero-mutton-seekh-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-77-mutton-seekh-kabab": {
    "heroId": "hero-mutton-seekh",
    "card": "/assets/images/hero/hero-mutton-seekh-card.webp",
    "thumb": "/assets/images/hero/hero-mutton-seekh-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-59-tandoori-jhinga": {
    "heroId": "hero-tandoori-jhinga",
    "card": "/assets/images/hero/hero-tandoori-jhinga-card.webp",
    "thumb": "/assets/images/hero/hero-tandoori-jhinga-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-59-tandoori-jhinga": {
    "heroId": "hero-tandoori-jhinga",
    "card": "/assets/images/hero/hero-tandoori-jhinga-card.webp",
    "thumb": "/assets/images/hero/hero-tandoori-jhinga-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-74-chicken-crispy": {
    "heroId": "hero-fried-chicken",
    "card": "/assets/images/hero/hero-fried-chicken-card.webp",
    "thumb": "/assets/images/hero/hero-fried-chicken-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-74-chicken-crispy": {
    "heroId": "hero-fried-chicken",
    "card": "/assets/images/hero/hero-fried-chicken-card.webp",
    "thumb": "/assets/images/hero/hero-fried-chicken-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-81-chicken-crunchy-chinese": {
    "heroId": "hero-fried-chicken",
    "card": "/assets/images/hero/hero-fried-chicken-card.webp",
    "thumb": "/assets/images/hero/hero-fried-chicken-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-81-chicken-crunchy-chinese": {
    "heroId": "hero-fried-chicken",
    "card": "/assets/images/hero/hero-fried-chicken-card.webp",
    "thumb": "/assets/images/hero/hero-fried-chicken-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-119-fried-chicken-kabab": {
    "heroId": "hero-fried-chicken",
    "card": "/assets/images/hero/hero-fried-chicken-card.webp",
    "thumb": "/assets/images/hero/hero-fried-chicken-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-119-fried-chicken-kabab": {
    "heroId": "hero-fried-chicken",
    "card": "/assets/images/hero/hero-fried-chicken-card.webp",
    "thumb": "/assets/images/hero/hero-fried-chicken-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-70-chicken-finger-with-tartar-sauce": {
    "heroId": "hero-chicken-finger",
    "card": "/assets/images/hero/hero-chicken-finger-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-finger-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-70-chicken-finger-with-tartar-sauce": {
    "heroId": "hero-chicken-finger",
    "card": "/assets/images/hero/hero-chicken-finger-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-finger-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-69-chicken-cheese-balls": {
    "heroId": "hero-chicken-cheese-balls",
    "card": "/assets/images/hero/hero-chicken-cheese-balls-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-cheese-balls-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-69-chicken-cheese-balls": {
    "heroId": "hero-chicken-cheese-balls",
    "card": "/assets/images/hero/hero-chicken-cheese-balls-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-cheese-balls-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-53-chicken-kalmi-kabab": {
    "heroId": "hero-kalmi-kabab",
    "card": "/assets/images/hero/hero-kalmi-kabab-card.webp",
    "thumb": "/assets/images/hero/hero-kalmi-kabab-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-53-chicken-kalmi-kabab": {
    "heroId": "hero-kalmi-kabab",
    "card": "/assets/images/hero/hero-kalmi-kabab-card.webp",
    "thumb": "/assets/images/hero/hero-kalmi-kabab-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-89-chicken-ghee-roast": {
    "heroId": "hero-chicken-ghee-roast",
    "card": "/assets/images/hero/hero-chicken-ghee-roast-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-ghee-roast-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-89-chicken-ghee-roast": {
    "heroId": "hero-chicken-ghee-roast",
    "card": "/assets/images/hero/hero-chicken-ghee-roast-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-ghee-roast-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-90-mutton-ghee-roast": {
    "heroId": "hero-mutton-ghee-roast",
    "card": "/assets/images/hero/hero-mutton-ghee-roast-card.webp",
    "thumb": "/assets/images/hero/hero-mutton-ghee-roast-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-90-mutton-ghee-roast": {
    "heroId": "hero-mutton-ghee-roast",
    "card": "/assets/images/hero/hero-mutton-ghee-roast-card.webp",
    "thumb": "/assets/images/hero/hero-mutton-ghee-roast-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-92-chicken-sukka": {
    "heroId": "hero-chicken-sukka",
    "card": "/assets/images/hero/hero-chicken-sukka-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-sukka-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-92-chicken-sukka": {
    "heroId": "hero-chicken-sukka",
    "card": "/assets/images/hero/hero-chicken-sukka-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-sukka-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-115-egg-chilli": {
    "heroId": "hero-egg-chilli",
    "card": "/assets/images/hero/hero-egg-chilli-card.webp",
    "thumb": "/assets/images/hero/hero-egg-chilli-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-115-egg-chilli": {
    "heroId": "hero-egg-chilli",
    "card": "/assets/images/hero/hero-egg-chilli-card.webp",
    "thumb": "/assets/images/hero/hero-egg-chilli-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-116-egg-manchurian": {
    "heroId": "hero-egg-chilli",
    "card": "/assets/images/hero/hero-egg-chilli-card.webp",
    "thumb": "/assets/images/hero/hero-egg-chilli-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-116-egg-manchurian": {
    "heroId": "hero-egg-chilli",
    "card": "/assets/images/hero/hero-egg-chilli-card.webp",
    "thumb": "/assets/images/hero/hero-egg-chilli-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-117-egg-pepper-dry": {
    "heroId": "hero-egg-chilli",
    "card": "/assets/images/hero/hero-egg-chilli-card.webp",
    "thumb": "/assets/images/hero/hero-egg-chilli-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-117-egg-pepper-dry": {
    "heroId": "hero-egg-chilli",
    "card": "/assets/images/hero/hero-egg-chilli-card.webp",
    "thumb": "/assets/images/hero/hero-egg-chilli-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-120-chilli-chicken": {
    "heroId": "hero-chilli-chicken",
    "card": "/assets/images/hero/hero-chilli-chicken-card.webp",
    "thumb": "/assets/images/hero/hero-chilli-chicken-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-120-chilli-chicken": {
    "heroId": "hero-chilli-chicken",
    "card": "/assets/images/hero/hero-chilli-chicken-card.webp",
    "thumb": "/assets/images/hero/hero-chilli-chicken-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-121-white-chicken-chilli": {
    "heroId": "hero-white-chicken-chilli",
    "card": "/assets/images/hero/hero-white-chicken-chilli-card.webp",
    "thumb": "/assets/images/hero/hero-white-chicken-chilli-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-121-white-chicken-chilli": {
    "heroId": "hero-white-chicken-chilli",
    "card": "/assets/images/hero/hero-white-chicken-chilli-card.webp",
    "thumb": "/assets/images/hero/hero-white-chicken-chilli-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-122-mongolian-chicken": {
    "heroId": "hero-mongolian-chicken",
    "card": "/assets/images/hero/hero-mongolian-chicken-card.webp",
    "thumb": "/assets/images/hero/hero-mongolian-chicken-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-122-mongolian-chicken": {
    "heroId": "hero-mongolian-chicken",
    "card": "/assets/images/hero/hero-mongolian-chicken-card.webp",
    "thumb": "/assets/images/hero/hero-mongolian-chicken-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-123-hunan-chicken": {
    "heroId": "hero-hunan-chicken",
    "card": "/assets/images/hero/hero-hunan-chicken-card.webp",
    "thumb": "/assets/images/hero/hero-hunan-chicken-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-123-hunan-chicken": {
    "heroId": "hero-hunan-chicken",
    "card": "/assets/images/hero/hero-hunan-chicken-card.webp",
    "thumb": "/assets/images/hero/hero-hunan-chicken-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-124-hot-thai-chicken": {
    "heroId": "hero-hot-thai-chicken",
    "card": "/assets/images/hero/hero-hot-thai-chicken-card.webp",
    "thumb": "/assets/images/hero/hero-hot-thai-chicken-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-124-hot-thai-chicken": {
    "heroId": "hero-hot-thai-chicken",
    "card": "/assets/images/hero/hero-hot-thai-chicken-card.webp",
    "thumb": "/assets/images/hero/hero-hot-thai-chicken-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-126-lemon-chicken": {
    "heroId": "hero-lemon-chicken",
    "card": "/assets/images/hero/hero-lemon-chicken-card.webp",
    "thumb": "/assets/images/hero/hero-lemon-chicken-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-126-lemon-chicken": {
    "heroId": "hero-lemon-chicken",
    "card": "/assets/images/hero/hero-lemon-chicken-card.webp",
    "thumb": "/assets/images/hero/hero-lemon-chicken-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-127-bang-bang-chicken": {
    "heroId": "hero-bang-bang-chicken",
    "card": "/assets/images/hero/hero-bang-bang-chicken-card.webp",
    "thumb": "/assets/images/hero/hero-bang-bang-chicken-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-127-bang-bang-chicken": {
    "heroId": "hero-bang-bang-chicken",
    "card": "/assets/images/hero/hero-bang-bang-chicken-card.webp",
    "thumb": "/assets/images/hero/hero-bang-bang-chicken-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-128-thai-pai-chicken": {
    "heroId": "hero-thai-pai-chicken",
    "card": "/assets/images/hero/hero-thai-pai-chicken-card.webp",
    "thumb": "/assets/images/hero/hero-thai-pai-chicken-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-128-thai-pai-chicken": {
    "heroId": "hero-thai-pai-chicken",
    "card": "/assets/images/hero/hero-thai-pai-chicken-card.webp",
    "thumb": "/assets/images/hero/hero-thai-pai-chicken-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-130-desi-chinese": {
    "heroId": "hero-desi-chinese-chicken",
    "card": "/assets/images/hero/hero-desi-chinese-chicken-card.webp",
    "thumb": "/assets/images/hero/hero-desi-chinese-chicken-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-130-desi-chinese": {
    "heroId": "hero-desi-chinese-chicken",
    "card": "/assets/images/hero/hero-desi-chinese-chicken-card.webp",
    "thumb": "/assets/images/hero/hero-desi-chinese-chicken-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-131-wow-tasty-chicken": {
    "heroId": "hero-wow-tasty-chicken",
    "card": "/assets/images/hero/hero-wow-tasty-chicken-card.webp",
    "thumb": "/assets/images/hero/hero-wow-tasty-chicken-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-131-wow-tasty-chicken": {
    "heroId": "hero-wow-tasty-chicken",
    "card": "/assets/images/hero/hero-wow-tasty-chicken-card.webp",
    "thumb": "/assets/images/hero/hero-wow-tasty-chicken-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-132-dragon-chicken": {
    "heroId": "hero-dragon-chicken",
    "card": "/assets/images/hero/hero-dragon-chicken-card.webp",
    "thumb": "/assets/images/hero/hero-dragon-chicken-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-132-dragon-chicken": {
    "heroId": "hero-dragon-chicken",
    "card": "/assets/images/hero/hero-dragon-chicken-card.webp",
    "thumb": "/assets/images/hero/hero-dragon-chicken-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-125-schezwan-chicken-lollipop": {
    "heroId": "hero-chicken-lollipop",
    "card": "/assets/images/hero/hero-chicken-lollipop-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-lollipop-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-125-schezwan-chicken-lollipop": {
    "heroId": "hero-chicken-lollipop",
    "card": "/assets/images/hero/hero-chicken-lollipop-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-lollipop-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-129-chicken-65": {
    "heroId": "hero-chicken-65",
    "card": "/assets/images/hero/hero-chicken-65-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-65-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-129-chicken-65": {
    "heroId": "hero-chicken-65",
    "card": "/assets/images/hero/hero-chicken-65-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-65-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-133-chicken-pepper-dry": {
    "heroId": "hero-chicken-pepper-dry",
    "card": "/assets/images/hero/hero-chicken-pepper-dry-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-pepper-dry-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-133-chicken-pepper-dry": {
    "heroId": "hero-chicken-pepper-dry",
    "card": "/assets/images/hero/hero-chicken-pepper-dry-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-pepper-dry-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-134-mutton-pepper-dry": {
    "heroId": "hero-mutton-dry",
    "card": "/assets/images/hero/hero-mutton-dry-card.webp",
    "thumb": "/assets/images/hero/hero-mutton-dry-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-134-mutton-pepper-dry": {
    "heroId": "hero-mutton-dry",
    "card": "/assets/images/hero/hero-mutton-dry-card.webp",
    "thumb": "/assets/images/hero/hero-mutton-dry-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-135-guntoor-mutton-dry": {
    "heroId": "hero-mutton-dry",
    "card": "/assets/images/hero/hero-mutton-dry-card.webp",
    "thumb": "/assets/images/hero/hero-mutton-dry-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-135-guntoor-mutton-dry": {
    "heroId": "hero-mutton-dry",
    "card": "/assets/images/hero/hero-mutton-dry-card.webp",
    "thumb": "/assets/images/hero/hero-mutton-dry-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-136-chilli-mutton-dry": {
    "heroId": "hero-mutton-dry",
    "card": "/assets/images/hero/hero-mutton-dry-card.webp",
    "thumb": "/assets/images/hero/hero-mutton-dry-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-136-chilli-mutton-dry": {
    "heroId": "hero-mutton-dry",
    "card": "/assets/images/hero/hero-mutton-dry-card.webp",
    "thumb": "/assets/images/hero/hero-mutton-dry-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-101-hot-and-sour-soup": {
    "heroId": "hero-hot-sour-soup",
    "card": "/assets/images/hero/hero-hot-sour-soup-card.webp",
    "thumb": "/assets/images/hero/hero-hot-sour-soup-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-101-hot-and-sour-soup": {
    "heroId": "hero-hot-sour-soup",
    "card": "/assets/images/hero/hero-hot-sour-soup-card.webp",
    "thumb": "/assets/images/hero/hero-hot-sour-soup-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-102-tomato-soup": {
    "heroId": "hero-tomato-soup",
    "card": "/assets/images/hero/hero-tomato-soup-card.webp",
    "thumb": "/assets/images/hero/hero-tomato-soup-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-102-tomato-soup": {
    "heroId": "hero-tomato-soup",
    "card": "/assets/images/hero/hero-tomato-soup-card.webp",
    "thumb": "/assets/images/hero/hero-tomato-soup-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-103-talumein-soup": {
    "heroId": "hero-talumein-soup",
    "card": "/assets/images/hero/hero-talumein-soup-card.webp",
    "thumb": "/assets/images/hero/hero-talumein-soup-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-103-talumein-soup": {
    "heroId": "hero-talumein-soup",
    "card": "/assets/images/hero/hero-talumein-soup-card.webp",
    "thumb": "/assets/images/hero/hero-talumein-soup-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-105-mutton-soup": {
    "heroId": "hero-mutton-soup",
    "card": "/assets/images/hero/hero-mutton-soup-card.webp",
    "thumb": "/assets/images/hero/hero-mutton-soup-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-105-mutton-soup": {
    "heroId": "hero-mutton-soup",
    "card": "/assets/images/hero/hero-mutton-soup-card.webp",
    "thumb": "/assets/images/hero/hero-mutton-soup-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-97-green-salad": {
    "heroId": "hero-green-salad",
    "card": "/assets/images/hero/hero-green-salad-card.webp",
    "thumb": "/assets/images/hero/hero-green-salad-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-97-green-salad": {
    "heroId": "hero-green-salad",
    "card": "/assets/images/hero/hero-green-salad-card.webp",
    "thumb": "/assets/images/hero/hero-green-salad-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-98-fruit-salad": {
    "heroId": "hero-fruit-salad",
    "card": "/assets/images/hero/hero-fruit-salad-card.webp",
    "thumb": "/assets/images/hero/hero-fruit-salad-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-98-fruit-salad": {
    "heroId": "hero-fruit-salad",
    "card": "/assets/images/hero/hero-fruit-salad-card.webp",
    "thumb": "/assets/images/hero/hero-fruit-salad-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-99-masala-papad": {
    "heroId": "hero-papad",
    "card": "/assets/images/hero/hero-papad-card.webp",
    "thumb": "/assets/images/hero/hero-papad-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-99-masala-papad": {
    "heroId": "hero-papad",
    "card": "/assets/images/hero/hero-papad-card.webp",
    "thumb": "/assets/images/hero/hero-papad-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-100-roasted-papad": {
    "heroId": "hero-papad",
    "card": "/assets/images/hero/hero-papad-card.webp",
    "thumb": "/assets/images/hero/hero-papad-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-100-roasted-papad": {
    "heroId": "hero-papad",
    "card": "/assets/images/hero/hero-papad-card.webp",
    "thumb": "/assets/images/hero/hero-papad-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-149-dal-fry": {
    "heroId": "hero-dal",
    "card": "/assets/images/hero/hero-dal-card.webp",
    "thumb": "/assets/images/hero/hero-dal-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-149-dal-fry": {
    "heroId": "hero-dal",
    "card": "/assets/images/hero/hero-dal-card.webp",
    "thumb": "/assets/images/hero/hero-dal-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-160-dal-kolhapuri": {
    "heroId": "hero-dal",
    "card": "/assets/images/hero/hero-dal-card.webp",
    "thumb": "/assets/images/hero/hero-dal-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-160-dal-kolhapuri": {
    "heroId": "hero-dal",
    "card": "/assets/images/hero/hero-dal-card.webp",
    "thumb": "/assets/images/hero/hero-dal-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-161-dal-tadka": {
    "heroId": "hero-dal",
    "card": "/assets/images/hero/hero-dal-card.webp",
    "thumb": "/assets/images/hero/hero-dal-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-161-dal-tadka": {
    "heroId": "hero-dal",
    "card": "/assets/images/hero/hero-dal-card.webp",
    "thumb": "/assets/images/hero/hero-dal-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-152-paneer-masala": {
    "heroId": "hero-paneer-butter-masala",
    "card": "/assets/images/hero/hero-paneer-butter-masala-card.webp",
    "thumb": "/assets/images/hero/hero-paneer-butter-masala-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-152-paneer-masala": {
    "heroId": "hero-paneer-butter-masala",
    "card": "/assets/images/hero/hero-paneer-butter-masala-card.webp",
    "thumb": "/assets/images/hero/hero-paneer-butter-masala-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-153-paneer-do-pyaza": {
    "heroId": "hero-paneer-butter-masala",
    "card": "/assets/images/hero/hero-paneer-butter-masala-card.webp",
    "thumb": "/assets/images/hero/hero-paneer-butter-masala-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-153-paneer-do-pyaza": {
    "heroId": "hero-paneer-butter-masala",
    "card": "/assets/images/hero/hero-paneer-butter-masala-card.webp",
    "thumb": "/assets/images/hero/hero-paneer-butter-masala-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-158-kaju-paneer-masala": {
    "heroId": "hero-paneer-butter-masala",
    "card": "/assets/images/hero/hero-paneer-butter-masala-card.webp",
    "thumb": "/assets/images/hero/hero-paneer-butter-masala-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-158-kaju-paneer-masala": {
    "heroId": "hero-paneer-butter-masala",
    "card": "/assets/images/hero/hero-paneer-butter-masala-card.webp",
    "thumb": "/assets/images/hero/hero-paneer-butter-masala-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-159-paneer-butter-masala": {
    "heroId": "hero-paneer-butter-masala",
    "card": "/assets/images/hero/hero-paneer-butter-masala-card.webp",
    "thumb": "/assets/images/hero/hero-paneer-butter-masala-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-159-paneer-butter-masala": {
    "heroId": "hero-paneer-butter-masala",
    "card": "/assets/images/hero/hero-paneer-butter-masala-card.webp",
    "thumb": "/assets/images/hero/hero-paneer-butter-masala-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-164-paneeri-teki-tikka-masala": {
    "heroId": "hero-paneer-butter-masala",
    "card": "/assets/images/hero/hero-paneer-butter-masala-card.webp",
    "thumb": "/assets/images/hero/hero-paneer-butter-masala-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-164-paneeri-teki-tikka-masala": {
    "heroId": "hero-paneer-butter-masala",
    "card": "/assets/images/hero/hero-paneer-butter-masala-card.webp",
    "thumb": "/assets/images/hero/hero-paneer-butter-masala-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-162-palak-paneer": {
    "heroId": "hero-palak-paneer",
    "card": "/assets/images/hero/hero-palak-paneer-card.webp",
    "thumb": "/assets/images/hero/hero-palak-paneer-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-162-palak-paneer": {
    "heroId": "hero-palak-paneer",
    "card": "/assets/images/hero/hero-palak-paneer-card.webp",
    "thumb": "/assets/images/hero/hero-palak-paneer-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-150-mix-veg-curry": {
    "heroId": "hero-mix-veg",
    "card": "/assets/images/hero/hero-mix-veg-card.webp",
    "thumb": "/assets/images/hero/hero-mix-veg-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-150-mix-veg-curry": {
    "heroId": "hero-mix-veg",
    "card": "/assets/images/hero/hero-mix-veg-card.webp",
    "thumb": "/assets/images/hero/hero-mix-veg-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-151-veg-korma": {
    "heroId": "hero-mix-veg",
    "card": "/assets/images/hero/hero-mix-veg-card.webp",
    "thumb": "/assets/images/hero/hero-mix-veg-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-151-veg-korma": {
    "heroId": "hero-mix-veg",
    "card": "/assets/images/hero/hero-mix-veg-card.webp",
    "thumb": "/assets/images/hero/hero-mix-veg-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-155-veg-deewani-handi": {
    "heroId": "hero-mix-veg",
    "card": "/assets/images/hero/hero-mix-veg-card.webp",
    "thumb": "/assets/images/hero/hero-mix-veg-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-155-veg-deewani-handi": {
    "heroId": "hero-mix-veg",
    "card": "/assets/images/hero/hero-mix-veg-card.webp",
    "thumb": "/assets/images/hero/hero-mix-veg-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-163-aalu-gobhi-masala": {
    "heroId": "hero-mix-veg",
    "card": "/assets/images/hero/hero-mix-veg-card.webp",
    "thumb": "/assets/images/hero/hero-mix-veg-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-163-aalu-gobhi-masala": {
    "heroId": "hero-mix-veg",
    "card": "/assets/images/hero/hero-mix-veg-card.webp",
    "thumb": "/assets/images/hero/hero-mix-veg-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-154-paneer-malai-kofta": {
    "heroId": "hero-malai-kofta",
    "card": "/assets/images/hero/hero-malai-kofta-card.webp",
    "thumb": "/assets/images/hero/hero-malai-kofta-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-154-paneer-malai-kofta": {
    "heroId": "hero-malai-kofta",
    "card": "/assets/images/hero/hero-malai-kofta-card.webp",
    "thumb": "/assets/images/hero/hero-malai-kofta-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-156-kaju-masala": {
    "heroId": "hero-kaju-masala",
    "card": "/assets/images/hero/hero-kaju-masala-card.webp",
    "thumb": "/assets/images/hero/hero-kaju-masala-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-156-kaju-masala": {
    "heroId": "hero-kaju-masala",
    "card": "/assets/images/hero/hero-kaju-masala-card.webp",
    "thumb": "/assets/images/hero/hero-kaju-masala-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-157-kaju-kolhapure": {
    "heroId": "hero-kaju-masala",
    "card": "/assets/images/hero/hero-kaju-masala-card.webp",
    "thumb": "/assets/images/hero/hero-kaju-masala-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-157-kaju-kolhapure": {
    "heroId": "hero-kaju-masala",
    "card": "/assets/images/hero/hero-kaju-masala-card.webp",
    "thumb": "/assets/images/hero/hero-kaju-masala-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-84-butter-chicken-masala": {
    "heroId": "hero-butter-chicken",
    "card": "/assets/images/hero/hero-butter-chicken-card.webp",
    "thumb": "/assets/images/hero/hero-butter-chicken-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-84-butter-chicken-masala": {
    "heroId": "hero-butter-chicken",
    "card": "/assets/images/hero/hero-butter-chicken-card.webp",
    "thumb": "/assets/images/hero/hero-butter-chicken-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-85-butter-chicken-bilder": {
    "heroId": "hero-butter-chicken",
    "card": "/assets/images/hero/hero-butter-chicken-card.webp",
    "thumb": "/assets/images/hero/hero-butter-chicken-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-85-butter-chicken-bilder": {
    "heroId": "hero-butter-chicken",
    "card": "/assets/images/hero/hero-butter-chicken-card.webp",
    "thumb": "/assets/images/hero/hero-butter-chicken-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-165-chicken-handi": {
    "heroId": "hero-chicken-red-gravy",
    "card": "/assets/images/hero/hero-chicken-red-gravy-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-red-gravy-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-165-chicken-handi": {
    "heroId": "hero-chicken-red-gravy",
    "card": "/assets/images/hero/hero-chicken-red-gravy-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-red-gravy-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-166-chicken-kadai": {
    "heroId": "hero-chicken-red-gravy",
    "card": "/assets/images/hero/hero-chicken-red-gravy-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-red-gravy-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-166-chicken-kadai": {
    "heroId": "hero-chicken-red-gravy",
    "card": "/assets/images/hero/hero-chicken-red-gravy-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-red-gravy-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-167-chicken-patiala": {
    "heroId": "hero-chicken-red-gravy",
    "card": "/assets/images/hero/hero-chicken-red-gravy-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-red-gravy-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-167-chicken-patiala": {
    "heroId": "hero-chicken-red-gravy",
    "card": "/assets/images/hero/hero-chicken-red-gravy-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-red-gravy-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-169-chicken-musallam-masala": {
    "heroId": "hero-chicken-red-gravy",
    "card": "/assets/images/hero/hero-chicken-red-gravy-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-red-gravy-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-169-chicken-musallam-masala": {
    "heroId": "hero-chicken-red-gravy",
    "card": "/assets/images/hero/hero-chicken-red-gravy-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-red-gravy-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-173-chicken-changezi-masala": {
    "heroId": "hero-chicken-changezi",
    "card": "/assets/images/hero/hero-chicken-changezi-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-changezi-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-173-chicken-changezi-masala": {
    "heroId": "hero-chicken-changezi",
    "card": "/assets/images/hero/hero-chicken-changezi-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-changezi-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-176-chicken-maharaja": {
    "heroId": "hero-chicken-maharaja",
    "card": "/assets/images/hero/hero-chicken-maharaja-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-maharaja-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-176-chicken-maharaja": {
    "heroId": "hero-chicken-maharaja",
    "card": "/assets/images/hero/hero-chicken-maharaja-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-maharaja-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-177-chicken-do-pyaza": {
    "heroId": "hero-chicken-red-gravy",
    "card": "/assets/images/hero/hero-chicken-red-gravy-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-red-gravy-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-177-chicken-do-pyaza": {
    "heroId": "hero-chicken-red-gravy",
    "card": "/assets/images/hero/hero-chicken-red-gravy-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-red-gravy-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-178-chicken-garam-masala": {
    "heroId": "hero-chicken-garam-masala",
    "card": "/assets/images/hero/hero-chicken-garam-masala-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-garam-masala-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-178-chicken-garam-masala": {
    "heroId": "hero-chicken-garam-masala",
    "card": "/assets/images/hero/hero-chicken-garam-masala-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-garam-masala-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-181-chicken-chatpata": {
    "heroId": "hero-chicken-chatpata",
    "card": "/assets/images/hero/hero-chicken-chatpata-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-chatpata-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-181-chicken-chatpata": {
    "heroId": "hero-chicken-chatpata",
    "card": "/assets/images/hero/hero-chicken-chatpata-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-chatpata-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-170-chicken-kali-mirch-masala": {
    "heroId": "hero-chicken-creamy-gravy",
    "card": "/assets/images/hero/hero-chicken-creamy-gravy-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-creamy-gravy-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-170-chicken-kali-mirch-masala": {
    "heroId": "hero-chicken-creamy-gravy",
    "card": "/assets/images/hero/hero-chicken-creamy-gravy-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-creamy-gravy-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-171-chicken-afghani-masala": {
    "heroId": "hero-chicken-creamy-gravy",
    "card": "/assets/images/hero/hero-chicken-creamy-gravy-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-creamy-gravy-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-171-chicken-afghani-masala": {
    "heroId": "hero-chicken-creamy-gravy",
    "card": "/assets/images/hero/hero-chicken-creamy-gravy-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-creamy-gravy-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-174-chicken-haveli-masala": {
    "heroId": "hero-chicken-creamy-gravy",
    "card": "/assets/images/hero/hero-chicken-creamy-gravy-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-creamy-gravy-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-174-chicken-haveli-masala": {
    "heroId": "hero-chicken-creamy-gravy",
    "card": "/assets/images/hero/hero-chicken-creamy-gravy-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-creamy-gravy-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-179-tandoori-chicken-masala": {
    "heroId": "hero-chicken-tikka-masala",
    "card": "/assets/images/hero/hero-chicken-tikka-masala-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-tikka-masala-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-179-tandoori-chicken-masala": {
    "heroId": "hero-chicken-tikka-masala",
    "card": "/assets/images/hero/hero-chicken-tikka-masala-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-tikka-masala-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-180-chicken-seekh-masala": {
    "heroId": "hero-chicken-tikka-masala",
    "card": "/assets/images/hero/hero-chicken-tikka-masala-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-tikka-masala-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-180-chicken-seekh-masala": {
    "heroId": "hero-chicken-tikka-masala",
    "card": "/assets/images/hero/hero-chicken-tikka-masala-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-tikka-masala-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-182-chicken-tikka-masala": {
    "heroId": "hero-chicken-tikka-masala",
    "card": "/assets/images/hero/hero-chicken-tikka-masala-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-tikka-masala-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-182-chicken-tikka-masala": {
    "heroId": "hero-chicken-tikka-masala",
    "card": "/assets/images/hero/hero-chicken-tikka-masala-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-tikka-masala-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-172-chicken-hyderabadi-masala": {
    "heroId": "hero-chicken-green-gravy",
    "card": "/assets/images/hero/hero-chicken-green-gravy-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-green-gravy-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-172-chicken-hyderabadi-masala": {
    "heroId": "hero-chicken-green-gravy",
    "card": "/assets/images/hero/hero-chicken-green-gravy-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-green-gravy-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-183-chicken-methi-masala": {
    "heroId": "hero-chicken-green-gravy",
    "card": "/assets/images/hero/hero-chicken-green-gravy-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-green-gravy-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-183-chicken-methi-masala": {
    "heroId": "hero-chicken-green-gravy",
    "card": "/assets/images/hero/hero-chicken-green-gravy-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-green-gravy-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-168-chicken-keema": {
    "heroId": "hero-chicken-keema",
    "card": "/assets/images/hero/hero-chicken-keema-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-keema-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-168-chicken-keema": {
    "heroId": "hero-chicken-keema",
    "card": "/assets/images/hero/hero-chicken-keema-card.webp",
    "thumb": "/assets/images/hero/hero-chicken-keema-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-184-mutton-masala": {
    "heroId": "hero-mutton-red-gravy",
    "card": "/assets/images/hero/hero-mutton-red-gravy-card.webp",
    "thumb": "/assets/images/hero/hero-mutton-red-gravy-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-184-mutton-masala": {
    "heroId": "hero-mutton-red-gravy",
    "card": "/assets/images/hero/hero-mutton-red-gravy-card.webp",
    "thumb": "/assets/images/hero/hero-mutton-red-gravy-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-185-mutton-kadai-masala": {
    "heroId": "hero-mutton-red-gravy",
    "card": "/assets/images/hero/hero-mutton-red-gravy-card.webp",
    "thumb": "/assets/images/hero/hero-mutton-red-gravy-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-185-mutton-kadai-masala": {
    "heroId": "hero-mutton-red-gravy",
    "card": "/assets/images/hero/hero-mutton-red-gravy-card.webp",
    "thumb": "/assets/images/hero/hero-mutton-red-gravy-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-186-mutton-handi-masala": {
    "heroId": "hero-mutton-red-gravy",
    "card": "/assets/images/hero/hero-mutton-red-gravy-card.webp",
    "thumb": "/assets/images/hero/hero-mutton-red-gravy-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-186-mutton-handi-masala": {
    "heroId": "hero-mutton-red-gravy",
    "card": "/assets/images/hero/hero-mutton-red-gravy-card.webp",
    "thumb": "/assets/images/hero/hero-mutton-red-gravy-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-187-mutton-kolhapuri": {
    "heroId": "hero-mutton-red-gravy",
    "card": "/assets/images/hero/hero-mutton-red-gravy-card.webp",
    "thumb": "/assets/images/hero/hero-mutton-red-gravy-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-187-mutton-kolhapuri": {
    "heroId": "hero-mutton-red-gravy",
    "card": "/assets/images/hero/hero-mutton-red-gravy-card.webp",
    "thumb": "/assets/images/hero/hero-mutton-red-gravy-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-189-mutton-hyderabadi-masala": {
    "heroId": "hero-mutton-red-gravy",
    "card": "/assets/images/hero/hero-mutton-red-gravy-card.webp",
    "thumb": "/assets/images/hero/hero-mutton-red-gravy-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-189-mutton-hyderabadi-masala": {
    "heroId": "hero-mutton-red-gravy",
    "card": "/assets/images/hero/hero-mutton-red-gravy-card.webp",
    "thumb": "/assets/images/hero/hero-mutton-red-gravy-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-190-mutton-lahori-masala": {
    "heroId": "hero-mutton-red-gravy",
    "card": "/assets/images/hero/hero-mutton-red-gravy-card.webp",
    "thumb": "/assets/images/hero/hero-mutton-red-gravy-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-190-mutton-lahori-masala": {
    "heroId": "hero-mutton-red-gravy",
    "card": "/assets/images/hero/hero-mutton-red-gravy-card.webp",
    "thumb": "/assets/images/hero/hero-mutton-red-gravy-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-192-mutton-rogan-josh": {
    "heroId": "hero-mutton-red-gravy",
    "card": "/assets/images/hero/hero-mutton-red-gravy-card.webp",
    "thumb": "/assets/images/hero/hero-mutton-red-gravy-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-192-mutton-rogan-josh": {
    "heroId": "hero-mutton-red-gravy",
    "card": "/assets/images/hero/hero-mutton-red-gravy-card.webp",
    "thumb": "/assets/images/hero/hero-mutton-red-gravy-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-193-mutton-maharaja": {
    "heroId": "hero-mutton-red-gravy",
    "card": "/assets/images/hero/hero-mutton-red-gravy-card.webp",
    "thumb": "/assets/images/hero/hero-mutton-red-gravy-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-193-mutton-maharaja": {
    "heroId": "hero-mutton-red-gravy",
    "card": "/assets/images/hero/hero-mutton-red-gravy-card.webp",
    "thumb": "/assets/images/hero/hero-mutton-red-gravy-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-188-mutton-hariyali-masala": {
    "heroId": "hero-mutton-hariyali",
    "card": "/assets/images/hero/hero-mutton-hariyali-card.webp",
    "thumb": "/assets/images/hero/hero-mutton-hariyali-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-188-mutton-hariyali-masala": {
    "heroId": "hero-mutton-hariyali",
    "card": "/assets/images/hero/hero-mutton-hariyali-card.webp",
    "thumb": "/assets/images/hero/hero-mutton-hariyali-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-191-mutton-keema-masala": {
    "heroId": "hero-mutton-keema",
    "card": "/assets/images/hero/hero-mutton-keema-card.webp",
    "thumb": "/assets/images/hero/hero-mutton-keema-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-191-mutton-keema-masala": {
    "heroId": "hero-mutton-keema",
    "card": "/assets/images/hero/hero-mutton-keema-card.webp",
    "thumb": "/assets/images/hero/hero-mutton-keema-thumb.webp",
    "type": "GENERATED"
  },
  "g-bar-royal-sunset": {
    "heroId": "hero-bar-sunset",
    "card": "/assets/images/hero/hero-bar-sunset-card.webp",
    "thumb": "/assets/images/hero/hero-bar-sunset-thumb.webp",
    "type": "GENERATED"
  },
  "t-bar-royal-sunset": {
    "heroId": "hero-bar-sunset",
    "card": "/assets/images/hero/hero-bar-sunset-card.webp",
    "thumb": "/assets/images/hero/hero-bar-sunset-thumb.webp",
    "type": "GENERATED"
  },
  "g-bar-mint-mojito": {
    "heroId": "hero-bar-mojito",
    "card": "/assets/images/hero/hero-bar-mojito-card.webp",
    "thumb": "/assets/images/hero/hero-bar-mojito-thumb.webp",
    "type": "GENERATED"
  },
  "t-bar-mint-mojito": {
    "heroId": "hero-bar-mojito",
    "card": "/assets/images/hero/hero-bar-mojito-card.webp",
    "thumb": "/assets/images/hero/hero-bar-mojito-thumb.webp",
    "type": "GENERATED"
  },
  "g-bar-scotch-whiskey": {
    "heroId": "hero-bar-whiskey",
    "card": "/assets/images/hero/hero-bar-whiskey-card.webp",
    "thumb": "/assets/images/hero/hero-bar-whiskey-thumb.webp",
    "type": "GENERATED"
  },
  "t-bar-scotch-whiskey": {
    "heroId": "hero-bar-whiskey",
    "card": "/assets/images/hero/hero-bar-whiskey-card.webp",
    "thumb": "/assets/images/hero/hero-bar-whiskey-thumb.webp",
    "type": "GENERATED"
  },
  "g-bar-kf-ultra": {
    "heroId": "hero-bar-beer",
    "card": "/assets/images/hero/hero-bar-beer-card.webp",
    "thumb": "/assets/images/hero/hero-bar-beer-thumb.webp",
    "type": "GENERATED"
  },
  "t-bar-kf-ultra": {
    "heroId": "hero-bar-beer",
    "card": "/assets/images/hero/hero-bar-beer-card.webp",
    "thumb": "/assets/images/hero/hero-bar-beer-thumb.webp",
    "type": "GENERATED"
  },
  "g-bar-spiced-rum": {
    "heroId": "hero-bar-rum",
    "card": "/assets/images/hero/hero-bar-rum-card.webp",
    "thumb": "/assets/images/hero/hero-bar-rum-thumb.webp",
    "type": "GENERATED"
  },
  "t-bar-spiced-rum": {
    "heroId": "hero-bar-rum",
    "card": "/assets/images/hero/hero-bar-rum-card.webp",
    "thumb": "/assets/images/hero/hero-bar-rum-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-213-drinking-water": {
    "heroId": "hero-drinking-water",
    "card": "/assets/images/hero/hero-drinking-water-card.webp",
    "thumb": "/assets/images/hero/hero-drinking-water-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-213-drinking-water": {
    "heroId": "hero-drinking-water",
    "card": "/assets/images/hero/hero-drinking-water-card.webp",
    "thumb": "/assets/images/hero/hero-drinking-water-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-214-k2n-drinking-water": {
    "heroId": "hero-drinking-water",
    "card": "/assets/images/hero/hero-drinking-water-card.webp",
    "thumb": "/assets/images/hero/hero-drinking-water-thumb.webp",
    "type": "GENERATED"
  },
  "t-dish-214-k2n-drinking-water": {
    "heroId": "hero-drinking-water",
    "card": "/assets/images/hero/hero-drinking-water-card.webp",
    "thumb": "/assets/images/hero/hero-drinking-water-thumb.webp",
    "type": "GENERATED"
  },
  "g-dish-4-triple-fried-chicken-rice": {
    "heroId": "real-triple-chicken-rice",
    "card": "/assets/images/real/triple_chicken_fried_rice-card.webp",
    "thumb": "/assets/images/real/triple_chicken_fried_rice-thumb.webp",
    "type": "REAL_PHOTO"
  },
  "t-dish-4-triple-fried-chicken-rice": {
    "heroId": "real-triple-chicken-rice",
    "card": "/assets/images/real/triple_chicken_fried_rice-card.webp",
    "thumb": "/assets/images/real/triple_chicken_fried_rice-thumb.webp",
    "type": "REAL_PHOTO"
  },
  "g-dish-35-paneer-tikka": {
    "heroId": "real-paneer-tikka",
    "card": "/assets/images/real/paneer_tikka_real-card.webp",
    "thumb": "/assets/images/real/paneer_tikka_real-thumb.webp",
    "type": "REAL_PHOTO"
  },
  "t-dish-35-paneer-tikka": {
    "heroId": "real-paneer-tikka",
    "card": "/assets/images/real/paneer_tikka_real-card.webp",
    "thumb": "/assets/images/real/paneer_tikka_real-thumb.webp",
    "type": "REAL_PHOTO"
  },
  "g-dish-42-chicken-tandoori-full": {
    "heroId": "real-chicken-tandoori",
    "card": "/assets/images/real/chicken_tandoori-card.webp",
    "thumb": "/assets/images/real/chicken_tandoori-thumb.webp",
    "type": "REAL_PHOTO"
  },
  "t-dish-42-chicken-tandoori-full": {
    "heroId": "real-chicken-tandoori",
    "card": "/assets/images/real/chicken_tandoori-card.webp",
    "thumb": "/assets/images/real/chicken_tandoori-thumb.webp",
    "type": "REAL_PHOTO"
  },
  "g-dish-43-chicken-tandoori-half": {
    "heroId": "real-chicken-tandoori",
    "card": "/assets/images/real/chicken_tandoori-card.webp",
    "thumb": "/assets/images/real/chicken_tandoori-thumb.webp",
    "type": "REAL_PHOTO"
  },
  "t-dish-43-chicken-tandoori-half": {
    "heroId": "real-chicken-tandoori",
    "card": "/assets/images/real/chicken_tandoori-card.webp",
    "thumb": "/assets/images/real/chicken_tandoori-thumb.webp",
    "type": "REAL_PHOTO"
  },
  "g-dish-44-chicken-pahadi-kabab": {
    "heroId": "real-chicken-pahadi-kabab",
    "card": "/assets/images/real/chicken_pahadi_tandoori-card.webp",
    "thumb": "/assets/images/real/chicken_pahadi_tandoori-thumb.webp",
    "type": "REAL_PHOTO"
  },
  "t-dish-44-chicken-pahadi-kabab": {
    "heroId": "real-chicken-pahadi-kabab",
    "card": "/assets/images/real/chicken_pahadi_tandoori-card.webp",
    "thumb": "/assets/images/real/chicken_pahadi_tandoori-thumb.webp",
    "type": "REAL_PHOTO"
  },
  "g-dish-47-chicken-reshmi-kabab": {
    "heroId": "real-chicken-reshmi-kabab",
    "card": "/assets/images/real/chicken_reshmi_malai-card.webp",
    "thumb": "/assets/images/real/chicken_reshmi_malai-thumb.webp",
    "type": "REAL_PHOTO"
  },
  "t-dish-47-chicken-reshmi-kabab": {
    "heroId": "real-chicken-reshmi-kabab",
    "card": "/assets/images/real/chicken_reshmi_malai-card.webp",
    "thumb": "/assets/images/real/chicken_reshmi_malai-thumb.webp",
    "type": "REAL_PHOTO"
  },
  "g-dish-51-chicken-tangadi-kabab-2-pcs": {
    "heroId": "real-chicken-tangadi-kabab",
    "card": "/assets/images/real/chicken_tangdi_kabab-card.webp",
    "thumb": "/assets/images/real/chicken_tangdi_kabab-thumb.webp",
    "type": "REAL_PHOTO"
  },
  "t-dish-51-chicken-tangadi-kabab-2-pcs": {
    "heroId": "real-chicken-tangadi-kabab",
    "card": "/assets/images/real/chicken_tangdi_kabab-card.webp",
    "thumb": "/assets/images/real/chicken_tangdi_kabab-thumb.webp",
    "type": "REAL_PHOTO"
  },
  "g-dish-52-chicken-tangadi-kabab-1-pc": {
    "heroId": "real-chicken-tangadi-kabab",
    "card": "/assets/images/real/chicken_tangdi_kabab-card.webp",
    "thumb": "/assets/images/real/chicken_tangdi_kabab-thumb.webp",
    "type": "REAL_PHOTO"
  },
  "t-dish-52-chicken-tangadi-kabab-1-pc": {
    "heroId": "real-chicken-tangadi-kabab",
    "card": "/assets/images/real/chicken_tangdi_kabab-card.webp",
    "thumb": "/assets/images/real/chicken_tangdi_kabab-thumb.webp",
    "type": "REAL_PHOTO"
  },
  "g-dish-104-chicken-manchow-soup": {
    "heroId": "real-chicken-manchow-soup",
    "card": "/assets/images/real/soup_manchow-card.webp",
    "thumb": "/assets/images/real/soup_manchow-thumb.webp",
    "type": "REAL_PHOTO"
  },
  "t-dish-104-chicken-manchow-soup": {
    "heroId": "real-chicken-manchow-soup",
    "card": "/assets/images/real/soup_manchow-card.webp",
    "thumb": "/assets/images/real/soup_manchow-thumb.webp",
    "type": "REAL_PHOTO"
  },
  "g-dish-175-chicken-rara-masala": {
    "heroId": "real-chicken-rara",
    "card": "/assets/images/real/chicken_rara-card.webp",
    "thumb": "/assets/images/real/chicken_rara-thumb.webp",
    "type": "REAL_PHOTO"
  },
  "t-dish-175-chicken-rara-masala": {
    "heroId": "real-chicken-rara",
    "card": "/assets/images/real/chicken_rara-card.webp",
    "thumb": "/assets/images/real/chicken_rara-thumb.webp",
    "type": "REAL_PHOTO"
  },
  "g-dish-211-non-veg-dry-platter": {
    "heroId": "real-nonveg-dry-platter",
    "card": "/assets/images/real/nonveg_tandoori_platter-card.webp",
    "thumb": "/assets/images/real/nonveg_tandoori_platter-thumb.webp",
    "type": "REUSED_REAL"
  },
  "t-dish-211-non-veg-dry-platter": {
    "heroId": "real-nonveg-dry-platter",
    "card": "/assets/images/real/nonveg_tandoori_platter-card.webp",
    "thumb": "/assets/images/real/nonveg_tandoori_platter-thumb.webp",
    "type": "REUSED_REAL"
  },
  "g-dish-12-roti": {
    "heroId": "real-tandoori-roti-basket",
    "card": "/assets/images/real/tandoori_roti_basket-card.webp",
    "thumb": "/assets/images/real/tandoori_roti_basket-thumb.webp",
    "type": "REUSED_REAL"
  },
  "t-dish-12-roti": {
    "heroId": "real-tandoori-roti-basket",
    "card": "/assets/images/real/tandoori_roti_basket-card.webp",
    "thumb": "/assets/images/real/tandoori_roti_basket-thumb.webp",
    "type": "REUSED_REAL"
  },
  "g-dish-20-chinese-naan": {
    "heroId": "placeholder-chinese-naan",
    "card": "",
    "thumb": "",
    "type": "PLACEHOLDER"
  },
  "t-dish-20-chinese-naan": {
    "heroId": "placeholder-chinese-naan",
    "card": "",
    "thumb": "",
    "type": "PLACEHOLDER"
  },
  "g-dish-29-fish-kabab": {
    "heroId": "placeholder-fish-kabab",
    "card": "",
    "thumb": "",
    "type": "PLACEHOLDER"
  },
  "t-dish-29-fish-kabab": {
    "heroId": "placeholder-fish-kabab",
    "card": "",
    "thumb": "",
    "type": "PLACEHOLDER"
  },
  "g-dish-65-kakri-kabab": {
    "heroId": "placeholder-kakri-kabab",
    "card": "",
    "thumb": "",
    "type": "PLACEHOLDER"
  },
  "t-dish-65-kakri-kabab": {
    "heroId": "placeholder-kakri-kabab",
    "card": "",
    "thumb": "",
    "type": "PLACEHOLDER"
  },
  "g-dish-66-lasooni-kabab": {
    "heroId": "placeholder-lasooni-kabab",
    "card": "",
    "thumb": "",
    "type": "PLACEHOLDER"
  },
  "t-dish-66-lasooni-kabab": {
    "heroId": "placeholder-lasooni-kabab",
    "card": "",
    "thumb": "",
    "type": "PLACEHOLDER"
  },
  "g-dish-75-chicken-roll-goll": {
    "heroId": "placeholder-chicken-roll-goll",
    "card": "",
    "thumb": "",
    "type": "PLACEHOLDER"
  },
  "t-dish-75-chicken-roll-goll": {
    "heroId": "placeholder-chicken-roll-goll",
    "card": "",
    "thumb": "",
    "type": "PLACEHOLDER"
  },
  "g-dish-76-mutton-gulthani-kabab": {
    "heroId": "placeholder-mutton-gulthani-kabab",
    "card": "",
    "thumb": "",
    "type": "PLACEHOLDER"
  },
  "t-dish-76-mutton-gulthani-kabab": {
    "heroId": "placeholder-mutton-gulthani-kabab",
    "card": "",
    "thumb": "",
    "type": "PLACEHOLDER"
  },
  "g-dish-86-idli-kal-soup": {
    "heroId": "placeholder-idli-kal-soup",
    "card": "",
    "thumb": "",
    "type": "PLACEHOLDER"
  },
  "t-dish-86-idli-kal-soup": {
    "heroId": "placeholder-idli-kal-soup",
    "card": "",
    "thumb": "",
    "type": "PLACEHOLDER"
  },
  "g-dish-91-egg-ghee-roast": {
    "heroId": "placeholder-egg-ghee-roast",
    "card": "",
    "thumb": "",
    "type": "PLACEHOLDER"
  },
  "t-dish-91-egg-ghee-roast": {
    "heroId": "placeholder-egg-ghee-roast",
    "card": "",
    "thumb": "",
    "type": "PLACEHOLDER"
  },
  "g-dish-93-bamboo-biryani": {
    "heroId": "placeholder-bamboo-biryani",
    "card": "",
    "thumb": "",
    "type": "PLACEHOLDER"
  },
  "t-dish-93-bamboo-biryani": {
    "heroId": "placeholder-bamboo-biryani",
    "card": "",
    "thumb": "",
    "type": "PLACEHOLDER"
  },
  "g-dish-212-veg-grains-platter": {
    "heroId": "placeholder-veg-grains-platter",
    "card": "",
    "thumb": "",
    "type": "PLACEHOLDER"
  },
  "t-dish-212-veg-grains-platter": {
    "heroId": "placeholder-veg-grains-platter",
    "card": "",
    "thumb": "",
    "type": "PLACEHOLDER"
  }
};

/**
 * Get image assets for a given dish ID
 * @param {string} dishId - e.g. 'g-dish-10-chicken-mandi-rice-full'
 * @returns {{ card: string, thumb: string, type: string, heroId: string }}
 */
export function getImageForDish(dishId) {
  return dishImageMap[dishId] || { card: '', thumb: '', type: 'PLACEHOLDER', heroId: null };
}

export default dishImageMap;