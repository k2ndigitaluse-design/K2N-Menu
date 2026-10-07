/**
 * sample-menu.js
 *
 * DATA MODEL (STAGE 2/3):
 * -----------------------
 * Each floor has its own independent collection of categories.
 * Firestore Document Path: menus/{floorId}/categories/{categoryId}
 *
 * Category Document Shape:
 * {
 *   id: string,            // category ID (e.g. "starters", "biryani")
 *   name: string,          // display name (e.g. "Starters", "Biryani")
 *   order: number,         // display sort order
 *   items: [
 *     {
 *       id: string,        // unique item ID
 *       name: string,      // item title
 *       description: string,// item description
 *       price: number,     // numerical price in INR
 *       type: "veg" | "nonveg" | "bar", // dietary classification
 *       imageUrl?: string  // optional Cloudinary or local asset URL
 *     }
 *   ]
 * }
 */

export const sampleMenuGround = [
  {
    id: "starters",
    name: "Starters",
    order: 1,
    items: [
      {
        id: "g-starter-paneer-tikka",
        name: "Paneer Tikka",
        description: "Char-grilled cottage cheese marinated in spiced hung curd with peppers.",
        price: 220,
        type: "veg",
        imageUrl: "/assets/images/paneer_tikka.jpg"
      },
      {
        id: "g-starter-hara-bhara",
        name: "Hara Bhara Kebab",
        description: "Crispy spinach, green pea and potato patties spiced with chaat masala.",
        price: 190,
        type: "veg",
        imageUrl: "/assets/images/hara_bhara_kebab.jpg"
      },
      {
        id: "g-starter-crispy-corn",
        name: "Crispy Corn Pepper Salt",
        description: "Golden fried sweet corn kernels tossed with cracked pepper and scallions.",
        price: 180,
        type: "veg",
        imageUrl: "/assets/images/crispy_corn.jpg"
      }
    ]
  },
  {
    id: "biryani",
    name: "Biryani",
    order: 2,
    items: [
      {
        id: "g-biryani-veg-dum",
        name: "Veg Dum Biryani",
        description: "Garden fresh seasonal vegetables, mint and saffron layered in long-grain basmati.",
        price: 200,
        type: "veg",
        imageUrl: "/assets/images/veg_biryani.jpg"
      },
      {
        id: "g-biryani-paneer",
        name: "Paneer Biryani",
        description: "Marinated paneer cubes layered with aromatic basmati rice and fried onions.",
        price: 240,
        type: "veg",
        imageUrl: "/assets/images/veg_biryani.jpg"
      }
    ]
  },
  {
    id: "main-course",
    name: "Main Course",
    order: 3,
    items: [
      {
        id: "g-main-paneer-butter",
        name: "Paneer Butter Masala",
        description: "Cottage cheese simmered in a velvety makhani gravy enriched with butter and cream.",
        price: 240,
        type: "veg",
        imageUrl: "/assets/images/paneer_butter_masala.jpg"
      },
      {
        id: "g-main-dal-makhani",
        name: "Dal Makhani",
        description: "Slow-cooked black lentils and kidney beans simmered overnight with butter.",
        price: 210,
        type: "veg",
        imageUrl: "/assets/images/dal_makhani.jpg"
      }
    ]
  },
  {
    id: "breads",
    name: "Breads",
    order: 4,
    items: [
      {
        id: "g-bread-butter-naan",
        name: "Butter Naan",
        description: "Soft leavened tandoor-baked flatbread brushed with generous melted butter.",
        price: 50,
        type: "veg",
        imageUrl: "/assets/images/butter_naan.jpg"
      },
      {
        id: "g-bread-garlic-naan",
        name: "Garlic Naan",
        description: "Leavened oven bread topped with toasted garlic flakes and fresh cilantro.",
        price: 65,
        type: "veg",
        imageUrl: "/assets/images/garlic_naan.jpg"
      },
      {
        id: "g-bread-tandoori-roti",
        name: "Tandoori Roti",
        description: "Whole wheat crisp unleavened flatbread freshly baked in the clay oven.",
        price: 35,
        type: "veg",
        imageUrl: "/assets/images/tandoori_roti.jpg"
      }
    ]
  },
  {
    id: "desserts",
    name: "Desserts",
    order: 5,
    items: [
      {
        id: "g-dessert-gulab-jamun",
        name: "Gulab Jamun",
        description: "Golden milk solid dumplings dipped in warm saffron and cardamom rose syrup.",
        price: 110,
        type: "veg",
        imageUrl: "/assets/images/gulab_jamun.jpg"
      },
      {
        id: "g-dessert-rasmalai",
        name: "Rasmalai",
        description: "Delicate cottage cheese patties soaked in chilled saffron and pistachio milk.",
        price: 130,
        type: "veg",
        imageUrl: "/assets/images/rasmalai.jpg"
      },
      {
        id: "g-dessert-matka-kulfi",
        name: "K2N Matka Kulfi",
        description: "Traditional reduced-milk ice cream served in a terracotta pot with nuts.",
        price: 140,
        type: "veg",
        imageUrl: "/assets/images/matka_kulfi.jpg"
      }
    ]
  }
];

export const sampleMenuTop = [
  {
    id: "starters",
    name: "Starters",
    order: 1,
    items: [
      {
        id: "t-starter-paneer-tikka",
        name: "Paneer Tikka",
        description: "Char-grilled cottage cheese marinated in spiced hung curd with peppers.",
        price: 240,
        type: "veg",
        imageUrl: "/assets/images/paneer_tikka.jpg"
      },
      {
        id: "t-starter-chicken-65",
        name: "Chicken 65",
        description: "Crispy, spicy South Indian fried chicken with curry leaves and mustard seeds.",
        price: 220,
        type: "nonveg",
        imageUrl: "/assets/images/chicken_65.jpg"
      },
      {
        id: "t-starter-chicken-kebab",
        name: "Chicken Kebab",
        description: "Succulent skewered chicken roasted in the clay tandoor with aromatic rub.",
        price: 240,
        type: "nonveg",
        imageUrl: "/assets/images/chicken_kebab.jpg"
      },
      {
        id: "t-starter-mutton-seekh",
        name: "Mutton Seekh Kebab",
        description: "Minced spiced mutton infused with royal herbs, cooked over burning charcoal.",
        price: 340,
        type: "nonveg",
        imageUrl: "/assets/images/mutton_seekh_kebab.jpg"
      }
    ]
  },
  {
    id: "biryani",
    name: "Biryani",
    order: 2,
    items: [
      {
        id: "t-biryani-chicken",
        name: "Chicken Biryani",
        description: "Slow-cooked basmati rice with tender chicken and aromatic royal spices.",
        price: 250,
        type: "nonveg",
        imageUrl: "/assets/images/chicken_biryani.jpg"
      },
      {
        id: "t-biryani-mutton",
        name: "Mutton Biryani",
        description: "Slow-cooked with tender mutton cuts in fragrant saffron basmati rice.",
        price: 320,
        type: "nonveg",
        imageUrl: "/assets/images/mutton_biryani.jpg"
      },
      {
        id: "t-biryani-egg",
        name: "Egg Biryani",
        description: "Fragrant spiced basmati rice layered with seasoned hard-boiled eggs.",
        price: 180,
        type: "nonveg",
        imageUrl: "/assets/images/egg_biryani.jpg"
      },
      {
        id: "t-biryani-veg-dum",
        name: "Veg Dum Biryani",
        description: "Garden fresh seasonal vegetables, mint and saffron layered in long-grain basmati.",
        price: 220,
        type: "veg",
        imageUrl: "/assets/images/veg_biryani.jpg"
      },
      {
        id: "t-biryani-prawn",
        name: "K2N Special Prawn Biryani",
        description: "Coastal spiced king prawns simmered with fragrant basmati and caramelized onion.",
        price: 360,
        type: "nonveg",
        imageUrl: "/assets/images/prawn_fry.jpg"
      }
    ]
  },
  {
    id: "main-course",
    name: "Main Course",
    order: 3,
    items: [
      {
        id: "t-main-paneer-butter",
        name: "Paneer Butter Masala",
        description: "Cottage cheese simmered in a velvety makhani gravy enriched with butter and cream.",
        price: 260,
        type: "veg",
        imageUrl: "/assets/images/paneer_butter_masala.jpg"
      },
      {
        id: "t-main-butter-chicken",
        name: "Butter Chicken",
        description: "Clay-oven tandoori chicken chunks simmered in rich creamy tomato silk gravy.",
        price: 290,
        type: "nonveg",
        imageUrl: "/assets/images/butter_chicken.jpg"
      },
      {
        id: "t-main-prawn-fry",
        name: "Prawn Fry",
        description: "Coastal style king prawns tossed in coconut oil, curry leaves and pepper gravy.",
        price: 340,
        type: "nonveg",
        imageUrl: "/assets/images/prawn_fry.jpg"
      },
      {
        id: "t-main-fish-curry",
        name: "Fish Curry",
        description: "Fresh sear fish simmered in a tangy coastal tamarind and coconut curry.",
        price: 300,
        type: "nonveg",
        imageUrl: "/assets/images/fish_curry.jpg"
      },
      {
        id: "t-main-kadhai-chicken",
        name: "Kadhai Chicken",
        description: "Tender chicken cooked with bell peppers, crushed coriander seeds and dry red chilies.",
        price: 280,
        type: "nonveg",
        imageUrl: "/assets/images/kadhai_chicken.jpg"
      }
    ]
  },
  {
    id: "breads",
    name: "Breads",
    order: 4,
    items: [
      {
        id: "t-bread-butter-naan",
        name: "Butter Naan",
        description: "Soft leavened tandoor-baked flatbread brushed with generous melted butter.",
        price: 50,
        type: "veg",
        imageUrl: "/assets/images/butter_naan.jpg"
      },
      {
        id: "t-bread-garlic-naan",
        name: "Garlic Naan",
        description: "Leavened oven bread topped with toasted garlic flakes and fresh cilantro.",
        price: 65,
        type: "veg",
        imageUrl: "/assets/images/garlic_naan.jpg"
      }
    ]
  },
  {
    id: "desserts",
    name: "Desserts",
    order: 5,
    items: [
      {
        id: "t-dessert-gulab-jamun",
        name: "Gulab Jamun",
        description: "Golden milk solid dumplings dipped in warm saffron and cardamom rose syrup.",
        price: 110,
        type: "veg",
        imageUrl: "/assets/images/gulab_jamun.jpg"
      },
      {
        id: "t-dessert-matka-kulfi",
        name: "K2N Matka Kulfi",
        description: "Traditional reduced-milk ice cream served in a terracotta pot with nuts.",
        price: 140,
        type: "veg",
        imageUrl: "/assets/images/matka_kulfi.jpg"
      }
    ]
  },
  {
    id: "bar",
    name: "Bar",
    order: 6,
    items: [
      {
        id: "t-bar-royal-sunset",
        name: "K2N Royal Sunset",
        description: "Signature mix of bourbon, spiced orange reduction, and aromatic bitters.",
        price: 450,
        type: "bar",
        imageUrl: "/assets/images/cocktail_drink.jpg"
      },
      {
        id: "t-bar-mint-mojito",
        name: "Classic Mint Mojito",
        description: "White rum muddled with fresh garden spearmint, lime, sugar and sparkling soda.",
        price: 380,
        type: "bar",
        imageUrl: "/assets/images/mojito.jpg"
      },
      {
        id: "t-bar-scotch-whiskey",
        name: "Blended Scotch 12Y",
        description: "Premium aged malt blend with notes of honey, toasted oak and delicate peat.",
        price: 480,
        type: "bar",
        imageUrl: "/assets/images/whiskey.jpg"
      },
      {
        id: "t-bar-kf-ultra",
        name: "Kingfisher Ultra Draught",
        description: "Crisp and smooth premium malt lager served chilled from the tap (330ml).",
        price: 240,
        type: "bar",
        imageUrl: "/assets/images/beer.jpg"
      },
      {
        id: "t-bar-spiced-rum",
        name: "Spiced Rum & Cola",
        description: "Dark dark rum infused with vanilla and cinnamon, poured over chilled cola.",
        price: 320,
        type: "bar",
        imageUrl: "/assets/images/rum_cola.jpg"
      }
    ]
  }
];

export const sampleMenus = {
  ground: sampleMenuGround,
  top: sampleMenuTop
};

export default sampleMenus;
