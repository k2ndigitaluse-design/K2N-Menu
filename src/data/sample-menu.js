/**
 * sample-menu.js
 *
 * DATA SHAPE SPECIFICATION:
 * -------------------------
 * Menu data is an array of category objects:
 * [
 *   {
 *     id: string,             // unique category id (e.g. "starters", "biryani")
 *     name: string,           // display name (e.g. "Starters", "Biryani")
 *     order: number,          // sort order
 *     items: [                // array of dish items
 *       {
 *         id: string,         // unique dish id
 *         name: string,       // dish title
 *         description: string,// concise appetizing description
 *         price: number,      // base price in INR
 *         priceByFloor?: {    // optional floor-specific override
 *           ground?: number,
 *           top?: number
 *         },
 *         type: "veg" | "nonveg" | "alcohol", // dietary type
 *         floors: ("ground" | "top")[],       // floors serving this item
 *         category: string,   // category id reference
 *         imageUrl: string,   // path to dish photo in /assets/images/
 *         available: boolean  // in-stock flag
 *       }
 *     ]
 *   }
 * ]
 *
 * NOTE: Single record per dish. If a dish is served on both floors,
 * floors = ["ground", "top"]. Price resolution:
 * priceShown = item.priceByFloor?.[floorId] ?? item.price;
 */

export const sampleMenu = [
  {
    id: "starters",
    name: "Starters",
    order: 1,
    items: [
      {
        id: "starter-paneer-tikka",
        name: "Paneer Tikka",
        description: "Char-grilled cottage cheese marinated in spiced hung curd with peppers.",
        price: 220,
        priceByFloor: { ground: 220, top: 240 },
        type: "veg",
        floors: ["ground", "top"],
        category: "starters",
        imageUrl: "/assets/images/paneer_tikka.jpg",
        available: true
      },
      {
        id: "starter-hara-bhara",
        name: "Hara Bhara Kebab",
        description: "Crispy spinach, green pea and potato patties spiced with chaat masala.",
        price: 190,
        type: "veg",
        floors: ["ground", "top"],
        category: "starters",
        imageUrl: "/assets/images/hara_bhara_kebab.jpg",
        available: true
      },
      {
        id: "starter-crispy-corn",
        name: "Crispy Corn Pepper Salt",
        description: "Golden fried sweet corn kernels tossed with cracked pepper and scallions.",
        price: 180,
        type: "veg",
        floors: ["ground", "top"],
        category: "starters",
        imageUrl: "/assets/images/crispy_corn.jpg",
        available: true
      },
      {
        id: "starter-chicken-65",
        name: "Chicken 65",
        description: "Crispy, spicy South Indian fried chicken with curry leaves and mustard seeds.",
        price: 220,
        type: "nonveg",
        floors: ["top"],
        category: "starters",
        imageUrl: "/assets/images/chicken_65.jpg",
        available: true
      },
      {
        id: "starter-chicken-kebab",
        name: "Chicken Kebab",
        description: "Succulent skewered chicken roasted in the clay tandoor with aromatic rub.",
        price: 240,
        type: "nonveg",
        floors: ["top"],
        category: "starters",
        imageUrl: "/assets/images/chicken_kebab.jpg",
        available: true
      },
      {
        id: "starter-mutton-seekh",
        name: "Mutton Seekh Kebab",
        description: "Minced spiced mutton infused with royal herbs, cooked over burning charcoal.",
        price: 340,
        type: "nonveg",
        floors: ["top"],
        category: "starters",
        imageUrl: "/assets/images/mutton_seekh_kebab.jpg",
        available: true
      }
    ]
  },
  {
    id: "biryani",
    name: "Biryani",
    order: 2,
    items: [
      {
        id: "biryani-chicken",
        name: "Chicken Biryani",
        description: "Slow-cooked basmati rice with tender chicken and aromatic royal spices.",
        price: 250,
        priceByFloor: { top: 250 },
        type: "nonveg",
        floors: ["top"],
        category: "biryani",
        imageUrl: "/assets/images/chicken_biryani.jpg",
        available: true
      },
      {
        id: "biryani-mutton",
        name: "Mutton Biryani",
        description: "Slow-cooked with tender mutton cuts in fragrant saffron basmati rice.",
        price: 320,
        type: "nonveg",
        floors: ["top"],
        category: "biryani",
        imageUrl: "/assets/images/mutton_biryani.jpg",
        available: true
      },
      {
        id: "biryani-egg",
        name: "Egg Biryani",
        description: "Fragrant spiced basmati rice layered with seasoned hard-boiled eggs.",
        price: 180,
        type: "nonveg",
        floors: ["top"],
        category: "biryani",
        imageUrl: "/assets/images/egg_biryani.jpg",
        available: true
      },
      {
        id: "biryani-veg-dum",
        name: "Veg Dum Biryani",
        description: "Garden fresh seasonal vegetables, mint and saffron layered in long-grain basmati.",
        price: 200,
        priceByFloor: { ground: 200, top: 220 },
        type: "veg",
        floors: ["ground", "top"],
        category: "biryani",
        imageUrl: "/assets/images/veg_biryani.jpg",
        available: true
      },
      {
        id: "biryani-prawn",
        name: "K2N Special Prawn Biryani",
        description: "Coastal spiced king prawns simmered with fragrant basmati and caramelized onion.",
        price: 360,
        type: "nonveg",
        floors: ["top"],
        category: "biryani",
        imageUrl: "/assets/images/prawn_fry.jpg",
        available: true
      }
    ]
  },
  {
    id: "main-course",
    name: "Main Course",
    order: 3,
    items: [
      {
        id: "main-paneer-butter",
        name: "Paneer Butter Masala",
        description: "Cottage cheese simmered in a velvety makhani gravy enriched with butter and cream.",
        price: 240,
        priceByFloor: { ground: 240, top: 260 },
        type: "veg",
        floors: ["ground", "top"],
        category: "main-course",
        imageUrl: "/assets/images/paneer_butter_masala.jpg",
        available: true
      },
      {
        id: "main-dal-makhani",
        name: "Dal Makhani",
        description: "Slow-cooked black lentils and kidney beans simmered overnight with butter.",
        price: 210,
        type: "veg",
        floors: ["ground", "top"],
        category: "main-course",
        imageUrl: "/assets/images/dal_makhani.jpg",
        available: true
      },
      {
        id: "main-butter-chicken",
        name: "Butter Chicken",
        description: "Clay-oven tandoori chicken chunks simmered in rich creamy tomato silk gravy.",
        price: 290,
        type: "nonveg",
        floors: ["top"],
        category: "main-course",
        imageUrl: "/assets/images/butter_chicken.jpg",
        available: true
      },
      {
        id: "main-prawn-fry",
        name: "Prawn Fry",
        description: "Coastal style king prawns tossed in coconut oil, curry leaves and pepper gravy.",
        price: 340,
        type: "nonveg",
        floors: ["top"],
        category: "main-course",
        imageUrl: "/assets/images/prawn_fry.jpg",
        available: true
      },
      {
        id: "main-fish-curry",
        name: "Fish Curry",
        description: "Fresh sear fish simmered in a tangy coastal tamarind and coconut curry.",
        price: 300,
        type: "nonveg",
        floors: ["top"],
        category: "main-course",
        imageUrl: "/assets/images/fish_curry.jpg",
        available: true
      },
      {
        id: "main-kadhai-chicken",
        name: "Kadhai Chicken",
        description: "Tender chicken cooked with bell peppers, crushed coriander seeds and dry red chilies.",
        price: 280,
        type: "nonveg",
        floors: ["top"],
        category: "main-course",
        imageUrl: "/assets/images/kadhai_chicken.jpg",
        available: true
      }
    ]
  },
  {
    id: "breads",
    name: "Breads",
    order: 4,
    items: [
      {
        id: "bread-butter-naan",
        name: "Butter Naan",
        description: "Soft leavened tandoor-baked flatbread brushed with generous melted butter.",
        price: 50,
        type: "veg",
        floors: ["ground", "top"],
        category: "breads",
        imageUrl: "/assets/images/butter_naan.jpg",
        available: true
      },
      {
        id: "bread-garlic-naan",
        name: "Garlic Naan",
        description: "Leavened oven bread topped with toasted garlic flakes and fresh cilantro.",
        price: 65,
        type: "veg",
        floors: ["ground", "top"],
        category: "breads",
        imageUrl: "/assets/images/garlic_naan.jpg",
        available: true
      },
      {
        id: "bread-tandoori-roti",
        name: "Tandoori Roti",
        description: "Whole wheat crisp unleavened flatbread freshly baked in the clay oven.",
        price: 35,
        type: "veg",
        floors: ["ground", "top"],
        category: "breads",
        imageUrl: "/assets/images/tandoori_roti.jpg",
        available: true
      }
    ]
  },
  {
    id: "desserts",
    name: "Desserts",
    order: 5,
    items: [
      {
        id: "dessert-gulab-jamun",
        name: "Gulab Jamun",
        description: "Golden milk solid dumplings dipped in warm saffron and cardamom rose syrup.",
        price: 110,
        type: "veg",
        floors: ["ground", "top"],
        category: "desserts",
        imageUrl: "/assets/images/gulab_jamun.jpg",
        available: true
      },
      {
        id: "dessert-rasmalai",
        name: "Rasmalai",
        description: "Delicate cottage cheese patties soaked in chilled saffron and pistachio milk.",
        price: 130,
        type: "veg",
        floors: ["ground", "top"],
        category: "desserts",
        imageUrl: "/assets/images/rasmalai.jpg",
        available: true
      },
      {
        id: "dessert-matka-kulfi",
        name: "K2N Matka Kulfi",
        description: "Traditional reduced-milk ice cream served in a terracotta pot with nuts.",
        price: 140,
        type: "veg",
        floors: ["ground", "top"],
        category: "desserts",
        imageUrl: "/assets/images/matka_kulfi.jpg",
        available: true
      }
    ]
  },
  {
    id: "bar",
    name: "Bar",
    order: 6,
    items: [
      {
        id: "bar-royal-sunset",
        name: "K2N Royal Sunset",
        description: "Signature mix of bourbon, spiced orange reduction, and aromatic bitters.",
        price: 450,
        type: "alcohol",
        floors: ["top"],
        category: "bar",
        imageUrl: "/assets/images/cocktail_drink.jpg",
        available: true
      },
      {
        id: "bar-mint-mojito",
        name: "Classic Mint Mojito",
        description: "White rum muddled with fresh garden spearmint, lime, sugar and sparkling soda.",
        price: 380,
        type: "alcohol",
        floors: ["top"],
        category: "bar",
        imageUrl: "/assets/images/mojito.jpg",
        available: true
      },
      {
        id: "bar-scotch-whiskey",
        name: "Blended Scotch 12Y",
        description: "Premium aged malt blend with notes of honey, toasted oak and delicate peat.",
        price: 480,
        type: "alcohol",
        floors: ["top"],
        category: "bar",
        imageUrl: "/assets/images/whiskey.jpg",
        available: true
      },
      {
        id: "bar-kf-ultra",
        name: "Kingfisher Ultra Draught",
        description: "Crisp and smooth premium malt lager served chilled from the tap (330ml).",
        price: 240,
        type: "alcohol",
        floors: ["top"],
        category: "bar",
        imageUrl: "/assets/images/beer.jpg",
        available: true
      },
      {
        id: "bar-spiced-rum",
        name: "Spiced Rum & Cola",
        description: "Dark dark rum infused with vanilla and cinnamon, poured over chilled cola.",
        price: 320,
        type: "alcohol",
        floors: ["top"],
        category: "bar",
        imageUrl: "/assets/images/rum_cola.jpg",
        available: true
      }
    ]
  }
];

export default sampleMenu;
