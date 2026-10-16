# K2N Digital Menu - Complete Dish Image Audit & Master List

> **Source:** `src/data/sample-menu.js`  
> **Floor Comparison:** Ground Floor and Top Floor share the exact same 219-item catalog (Ground floor enforces Pure Veg at runtime via `visibleItems.js`; Top floor serves all items with +₹20 pricing).  
> **Variant Rule:** Portions (Full/Half, 1pc/2pcs) of the same dish share a single image and are merged into one row below.  
> **Audit Rule:** Real photoshoot photos are assigned strictly and exclusively to the dish they genuinely portray. Any mismatched or duplicate reuses have been unlinked and set to NO IMAGE.

## Summary Statistics

| Metric | Raw Menu Items | Merged Distinct Dishes (Images Needed) |
| :--- | :---: | :---: |
| 🟢 **REAL PHOTO** (verified photoshoot) | 10 | **8** |
| 🟡 **DUMMY IMAGE** (replace test placeholders) | 34 | **34** |
| 🔴 **NO IMAGE** (missing image, needs generation) | 175 | **173** |
| **TOTAL** | **219** | **215** |
| **TOTAL IMAGES NEEDED (Dummy Replace + No Image)** | **209** | **207** |

---

### Category 1: Rice & Noodles (7 distinct dishes)

| # | Item ID | Dish Name | Type | Variants | Image Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `g-dish-1-egg-fried-rice` | **Egg Fried Rice** | Nonveg | Single | 🔴 NO IMAGE |
| 2 | `g-dish-2-chicken-fried-rice` | **Chicken Fried Rice** | Nonveg | Single | 🔴 NO IMAGE |
| 3 | `g-dish-3-schezwan-chicken-fried-rice` | **Schezwan Chicken Fried Rice** | Nonveg | Single | 🔴 NO IMAGE |
| 4 | `g-dish-4-triple-fried-chicken-rice` | **Triple Fried Chicken Rice** | Nonveg | Single | 🟢 REAL PHOTO |
| 5 | `g-dish-5-homemade-chicken-rice` | **Homemade Chicken Rice** | Nonveg | Single | 🔴 NO IMAGE |
| 6 | `g-dish-6-singapuri-chicken-fried-rice` | **Singapuri Chicken Fried Rice** | Nonveg | Single | 🔴 NO IMAGE |
| 7 | `g-dish-7-hohe-brown-chicken-rice` | **Hohe Brown Chicken Rice** | Nonveg | Single | 🔴 NO IMAGE |


### Category 2: Arabian Mandi (2 distinct dishes)

| # | Item ID | Dish Name | Type | Variants | Image Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 8 | `g-dish-8-mutton-mandi-rice-full / g-dish-9-mutton-mandi-rice-half` | **Mutton Mandi Rice** | Nonveg | Full, Half | 🔴 NO IMAGE |
| 9 | `g-dish-10-chicken-mandi-rice-full / g-dish-11-chicken-mandi-rice-half` | **Chicken Mandi Rice** | Nonveg | Full, Half | 🔴 NO IMAGE |


### Category 3: Roti (15 distinct dishes)

| # | Item ID | Dish Name | Type | Variants | Image Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 10 | `g-dish-12-roti` | **Roti** | Veg | Single | 🟡 DUMMY IMAGE |
| 11 | `g-dish-13-akki-rotti` | **Akki Rotti** | Veg | Single | 🔴 NO IMAGE |
| 12 | `g-dish-14-naan-plain` | **Naan Plain** | Veg | Single | 🔴 NO IMAGE |
| 13 | `g-dish-15-butter-naan` | **Butter Naan** | Veg | Single | 🟡 DUMMY IMAGE |
| 14 | `g-dish-16-kulcha` | **Kulcha** | Veg | Single | 🔴 NO IMAGE |
| 15 | `g-dish-17-butter-kulcha` | **Butter Kulcha** | Veg | Single | 🔴 NO IMAGE |
| 16 | `g-dish-18-butter-roti` | **Butter Roti** | Veg | Single | 🟡 DUMMY IMAGE |
| 17 | `g-dish-19-garlic-naan` | **Garlic Naan** | Veg | Single | 🟡 DUMMY IMAGE |
| 18 | `g-dish-20-chinese-naan` | **Chinese Naan** | Veg | Single | 🔴 NO IMAGE |
| 19 | `g-dish-21-mutton-keema-naan` | **Mutton Keema Naan** | Nonveg | Single | 🔴 NO IMAGE |
| 20 | `g-dish-22-chicken-keema-naan` | **Chicken Keema Naan** | Nonveg | Single | 🔴 NO IMAGE |
| 21 | `g-dish-23-stuffed-paratha` | **Stuffed Paratha** | Veg | Single | 🔴 NO IMAGE |
| 22 | `g-dish-24-lacha-paratha` | **Lacha Paratha** | Veg | Single | 🔴 NO IMAGE |
| 23 | `g-dish-25-onion-kulcha` | **Onion Kulcha** | Veg | Single | 🔴 NO IMAGE |
| 24 | `g-dish-26-onion-paratha` | **Onion Paratha** | Veg | Single | 🔴 NO IMAGE |


### Category 4: Fish (Seasonal) (8 distinct dishes)

| # | Item ID | Dish Name | Type | Variants | Image Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 25 | `g-dish-27-tandoori-fish` | **Tandoori Fish** | Nonveg | Single | 🟡 DUMMY IMAGE |
| 26 | `g-dish-28-fish-tikka` | **Fish Tikka** | Nonveg | Single | 🟡 DUMMY IMAGE |
| 27 | `g-dish-29-fish-kabab` | **Fish Kabab** | Nonveg | Single | 🔴 NO IMAGE |
| 28 | `g-dish-30-bangda-fry` | **Bangda Fry** | Nonveg | Single | 🔴 NO IMAGE |
| 29 | `g-dish-31-bangda-rava-fry` | **Bangda Rava Fry** | Nonveg | Single | 🔴 NO IMAGE |
| 30 | `g-dish-32-bangda-tawa-fry` | **Bangda Tawa Fry** | Nonveg | Single | 🔴 NO IMAGE |
| 31 | `g-dish-33-kaatla-rava-fry` | **Kaatla Rava Fry** | Nonveg | Single | 🔴 NO IMAGE |
| 32 | `g-dish-34-kaatla-tawa-fry` | **Kaatla Tawa Fry** | Nonveg | Single | 🔴 NO IMAGE |


### Category 5: Tandoori Starters (Veg) (7 distinct dishes)

| # | Item ID | Dish Name | Type | Variants | Image Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 33 | `g-dish-35-paneer-tikka` | **Paneer Tikka** | Veg | Single | 🟢 REAL PHOTO |
| 34 | `g-dish-36-veg-shole-kabab` | **Veg Shole Kabab** | Veg | Single | 🔴 NO IMAGE |
| 35 | `g-dish-37-paneer-hiltop` | **Paneer Hiltop** | Veg | Single | 🔴 NO IMAGE |
| 36 | `g-dish-38-paneer-hara-hirchi` | **Paneer Hara Hirchi** | Veg | Single | 🔴 NO IMAGE |
| 37 | `g-dish-39-paneer-malai-tikka` | **Paneer Malai Tikka** | Veg | Single | 🔴 NO IMAGE |
| 38 | `g-dish-40-paneer-pahadi` | **Paneer Pahadi** | Veg | Single | 🔴 NO IMAGE |
| 39 | `g-dish-41-paneer-multhani` | **Paneer Multhani** | Veg | Single | 🔴 NO IMAGE |


### Category 6: Tandoori Starters (Non-Veg) (20 distinct dishes)

| # | Item ID | Dish Name | Type | Variants | Image Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 40 | `g-dish-42-chicken-tandoori-full / g-dish-43-chicken-tandoori-half` | **Chicken Tandoori** | Nonveg | Full, Half | 🟢 REAL PHOTO |
| 41 | `g-dish-44-chicken-pahadi-kabab` | **Chicken Pahadi Kabab** | Nonveg | Single | 🟢 REAL PHOTO |
| 42 | `g-dish-45-chicken-kolhapuri-kabab` | **Chicken Kolhapuri Kabab** | Nonveg | Single | 🔴 NO IMAGE |
| 43 | `g-dish-46-chicken-banjara-kabab` | **Chicken Banjara Kabab** | Nonveg | Single | 🔴 NO IMAGE |
| 44 | `g-dish-47-chicken-reshmi-kabab` | **Chicken Reshmi Kabab** | Nonveg | Single | 🟢 REAL PHOTO |
| 45 | `g-dish-48-chicken-achari-kabab` | **Chicken Achari Kabab** | Nonveg | Single | 🔴 NO IMAGE |
| 46 | `g-dish-49-chicken-tikka` | **Chicken Tikka** | Nonveg | Single | 🔴 NO IMAGE |
| 47 | `g-dish-50-chicken-oum-kabab` | **Chicken Oum Kabab** | Nonveg | Single | 🔴 NO IMAGE |
| 48 | `g-dish-51-chicken-tangadi-kabab-2-pcs / g-dish-52-chicken-tangadi-kabab-1-pc` | **Chicken Tangadi Kabab** | Nonveg | 2 pcs, 1 pc | 🟢 REAL PHOTO |
| 49 | `g-dish-53-chicken-kalmi-kabab` | **Chicken Kalmi Kabab** | Nonveg | Single | 🔴 NO IMAGE |
| 50 | `g-dish-54-chicken-sheekh-kabab` | **Chicken Sheekh Kabab** | Nonveg | Single | 🔴 NO IMAGE |
| 51 | `g-dish-55-chicken-adraki-kabab` | **Chicken Adraki Kabab** | Nonveg | Single | 🔴 NO IMAGE |
| 52 | `g-dish-56-chicken-kali-miri-kabab` | **Chicken Kali Miri Kabab** | Nonveg | Single | 🔴 NO IMAGE |
| 53 | `g-dish-57-chicken-boti-kabab` | **Chicken Boti Kabab** | Nonveg | Single | 🔴 NO IMAGE |
| 54 | `g-dish-58-chicken-madira-kabab` | **Chicken Madira Kabab** | Nonveg | Single | 🔴 NO IMAGE |
| 55 | `g-dish-59-tandoori-jhinga` | **Tandoori Jhinga** | Nonveg | Single | 🟡 DUMMY IMAGE |
| 56 | `g-dish-60-mutton-sheekh-kabab` | **Mutton Sheekh Kabab** | Nonveg | Single | 🟡 DUMMY IMAGE |
| 57 | `g-dish-61-chicken-maratha-kabab` | **Chicken Maratha Kabab** | Nonveg | Single | 🔴 NO IMAGE |
| 58 | `g-dish-62-chicken-lahari-kabab` | **Chicken Lahari Kabab** | Nonveg | Single | 🔴 NO IMAGE |
| 59 | `g-dish-63-chicken-malaysian-kabab` | **Chicken Malaysian Kabab** | Nonveg | Single | 🔴 NO IMAGE |


### Category 7: K2N Special Items (22 distinct dishes)

| # | Item ID | Dish Name | Type | Variants | Image Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 60 | `g-dish-64-veg-burasi-kabab` | **Veg Burasi Kabab** | Veg | Single | 🔴 NO IMAGE |
| 61 | `g-dish-65-kakri-kabab` | **Kakri Kabab** | Veg | Single | 🔴 NO IMAGE |
| 62 | `g-dish-66-lasooni-kabab` | **Lasooni Kabab** | Veg | Single | 🔴 NO IMAGE |
| 63 | `g-dish-67-rim-jhim-kabab` | **Rim Jhim Kabab** | Veg | Single | 🔴 NO IMAGE |
| 64 | `g-dish-68-corn-basket` | **Corn Basket** | Veg | Single | 🔴 NO IMAGE |
| 65 | `g-dish-69-chicken-cheese-balls` | **Chicken Cheese Balls** | Nonveg | Single | 🔴 NO IMAGE |
| 66 | `g-dish-70-chicken-finger-with-tartar-sauce` | **Chicken Finger (with Tartar Sauce)** | Nonveg | Single | 🔴 NO IMAGE |
| 67 | `g-dish-71-chicken-pudina-kabab` | **Chicken Pudina Kabab** | Nonveg | Single | 🔴 NO IMAGE |
| 68 | `g-dish-72-chicken-noorani-tikka` | **Chicken Noorani Tikka** | Nonveg | Single | 🔴 NO IMAGE |
| 69 | `g-dish-73-chicken-jafrani-tikka` | **Chicken Jafrani Tikka** | Nonveg | Single | 🔴 NO IMAGE |
| 70 | `g-dish-74-chicken-crispy` | **Chicken Crispy** | Nonveg | Single | 🔴 NO IMAGE |
| 71 | `g-dish-75-chicken-roll-goll` | **Chicken Roll Goll** | Nonveg | Single | 🔴 NO IMAGE |
| 72 | `g-dish-76-mutton-gulthani-kabab` | **Mutton Gulthani Kabab** | Nonveg | Single | 🔴 NO IMAGE |
| 73 | `g-dish-77-mutton-seekh-kabab` | **Mutton Seekh Kabab** | Nonveg | Single | 🟡 DUMMY IMAGE |
| 74 | `g-dish-78-chilli-potato-chinese` | **Chilli Potato (Chinese)** | Veg | Single | 🔴 NO IMAGE |
| 75 | `g-dish-79-finger-chips-peri-peri` | **Finger Chips (Peri Peri)** | Veg | Single | 🔴 NO IMAGE |
| 76 | `g-dish-80-chicken-afgani-kabab` | **Chicken Afgani Kabab** | Nonveg | Single | 🔴 NO IMAGE |
| 77 | `g-dish-81-chicken-crunchy-chinese` | **Chicken Crunchy (Chinese)** | Nonveg | Single | 🔴 NO IMAGE |
| 78 | `g-dish-82-veg-gold-coin` | **Veg Gold Coin** | Veg | Single | 🔴 NO IMAGE |
| 79 | `g-dish-83-lucknow-biryani` | **Lucknow Biryani** | Nonveg | Single | 🔴 NO IMAGE |
| 80 | `g-dish-84-butter-chicken-masala` | **Butter Chicken Masala** | Nonveg | Single | 🟡 DUMMY IMAGE |
| 81 | `g-dish-85-butter-chicken-bilder` | **Butter Chicken Bilder** | Nonveg | Single | 🔴 NO IMAGE |


### Category 8: K2N Special Items (Naati Style) (11 distinct dishes)

| # | Item ID | Dish Name | Type | Variants | Image Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 82 | `g-dish-86-idli-kal-soup` | **Idli Kal Soup** | Nonveg | Single | 🔴 NO IMAGE |
| 83 | `g-dish-87-chicken-dum-biryani` | **Chicken Dum Biryani** | Nonveg | Single | 🟡 DUMMY IMAGE |
| 84 | `g-dish-88-muttam-dum-biryani` | **Muttam Dum Biryani** | Nonveg | Single | 🟡 DUMMY IMAGE |
| 85 | `g-dish-89-chicken-ghee-roast` | **Chicken Ghee Roast** | Nonveg | Single | 🔴 NO IMAGE |
| 86 | `g-dish-90-mutton-ghee-roast` | **Mutton Ghee Roast** | Nonveg | Single | 🔴 NO IMAGE |
| 87 | `g-dish-91-egg-ghee-roast` | **Egg Ghee Roast** | Nonveg | Single | 🔴 NO IMAGE |
| 88 | `g-dish-92-chicken-sukka` | **Chicken Sukka** | Nonveg | Single | 🔴 NO IMAGE |
| 89 | `g-dish-93-bamboo-biryani` | **Bamboo Biryani** | Nonveg | Single | 🔴 NO IMAGE |
| 90 | `g-dish-94-chicken-donne-biryani` | **Chicken Donne Biryani** | Nonveg | Single | 🟡 DUMMY IMAGE |
| 91 | `g-dish-95-mutton-donne-biryani` | **Mutton Donne Biryani** | Nonveg | Single | 🟡 DUMMY IMAGE |
| 92 | `g-dish-96-chicken-madike-biryani` | **Chicken Madike Biryani** | Nonveg | Single | 🔴 NO IMAGE |


### Category 9: Papad & Salad (4 distinct dishes)

| # | Item ID | Dish Name | Type | Variants | Image Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 93 | `g-dish-97-green-salad` | **Green Salad** | Veg | Single | 🔴 NO IMAGE |
| 94 | `g-dish-98-fruit-salad` | **Fruit Salad** | Veg | Single | 🔴 NO IMAGE |
| 95 | `g-dish-99-masala-papad` | **Masala Papad** | Veg | Single | 🔴 NO IMAGE |
| 96 | `g-dish-100-roasted-papad` | **Roasted Papad** | Veg | Single | 🔴 NO IMAGE |


### Category 10: Soup (5 distinct dishes)

| # | Item ID | Dish Name | Type | Variants | Image Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 97 | `g-dish-101-hot-and-sour-soup` | **Hot and Sour Soup** | Veg | Single | 🔴 NO IMAGE |
| 98 | `g-dish-102-tomato-soup` | **Tomato Soup** | Veg | Single | 🔴 NO IMAGE |
| 99 | `g-dish-103-talumein-soup` | **Talumein Soup** | Veg | Single | 🔴 NO IMAGE |
| 100 | `g-dish-104-chicken-manchow-soup` | **Chicken Manchow Soup** | Nonveg | Single | 🟢 REAL PHOTO |
| 101 | `g-dish-105-mutton-soup` | **Mutton Soup** | Nonveg | Single | 🔴 NO IMAGE |


### Category 11: Chinese Starters (Veg) (9 distinct dishes)

| # | Item ID | Dish Name | Type | Variants | Image Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 102 | `g-dish-106-veg-crispy` | **Veg Crispy** | Veg | Single | 🔴 NO IMAGE |
| 103 | `g-dish-107-gobi-manchurian` | **Gobi Manchurian** | Veg | Single | 🔴 NO IMAGE |
| 104 | `g-dish-108-paneer-manchurian` | **Paneer Manchurian** | Veg | Single | 🔴 NO IMAGE |
| 105 | `g-dish-109-mushroom-manchurian` | **Mushroom Manchurian** | Veg | Single | 🔴 NO IMAGE |
| 106 | `g-dish-110-paneer-chilli` | **Paneer Chilli** | Veg | Single | 🔴 NO IMAGE |
| 107 | `g-dish-111-gobi-chilli` | **Gobi Chilli** | Veg | Single | 🔴 NO IMAGE |
| 108 | `g-dish-112-mushroom-chilli` | **Mushroom Chilli** | Veg | Single | 🔴 NO IMAGE |
| 109 | `g-dish-113-baby-corn-chilli` | **Baby Corn Chilli** | Veg | Single | 🔴 NO IMAGE |
| 110 | `g-dish-114-honey-chilli-potato` | **Honey Chilli Potato** | Veg | Single | 🔴 NO IMAGE |


### Category 12: Chinese Starters (Non-Veg) (22 distinct dishes)

| # | Item ID | Dish Name | Type | Variants | Image Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 111 | `g-dish-115-egg-chilli` | **Egg Chilli** | Nonveg | Single | 🔴 NO IMAGE |
| 112 | `g-dish-116-egg-manchurian` | **Egg Manchurian** | Nonveg | Single | 🔴 NO IMAGE |
| 113 | `g-dish-117-egg-pepper-dry` | **Egg Pepper Dry** | Nonveg | Single | 🔴 NO IMAGE |
| 114 | `g-dish-118-chicken-kabab` | **Chicken Kabab** | Nonveg | Single | 🟡 DUMMY IMAGE |
| 115 | `g-dish-119-fried-chicken-kabab` | **Fried Chicken Kabab** | Nonveg | Single | 🔴 NO IMAGE |
| 116 | `g-dish-120-chilli-chicken` | **Chilli Chicken** | Nonveg | Single | 🔴 NO IMAGE |
| 117 | `g-dish-121-white-chicken-chilli` | **White Chicken Chilli** | Nonveg | Single | 🔴 NO IMAGE |
| 118 | `g-dish-122-mongolian-chicken` | **Mongolian Chicken** | Nonveg | Single | 🔴 NO IMAGE |
| 119 | `g-dish-123-hunan-chicken` | **Hunan Chicken** | Nonveg | Single | 🔴 NO IMAGE |
| 120 | `g-dish-124-hot-thai-chicken` | **Hot Thai Chicken** | Nonveg | Single | 🔴 NO IMAGE |
| 121 | `g-dish-125-schezwan-chicken-lollipop` | **Schezwan Chicken Lollipop** | Nonveg | Single | 🔴 NO IMAGE |
| 122 | `g-dish-126-lemon-chicken` | **Lemon Chicken** | Nonveg | Single | 🔴 NO IMAGE |
| 123 | `g-dish-127-bang-bang-chicken` | **Bang Bang Chicken** | Nonveg | Single | 🔴 NO IMAGE |
| 124 | `g-dish-128-thai-pai-chicken` | **Thai Pai Chicken** | Nonveg | Single | 🔴 NO IMAGE |
| 125 | `g-dish-129-chicken-65` | **Chicken 65** | Nonveg | Single | 🟡 DUMMY IMAGE |
| 126 | `g-dish-130-desi-chinese` | **Desi Chinese** | Nonveg | Single | 🔴 NO IMAGE |
| 127 | `g-dish-131-wow-tasty-chicken` | **Wow Tasty Chicken** | Nonveg | Single | 🔴 NO IMAGE |
| 128 | `g-dish-132-dragon-chicken` | **Dragon Chicken** | Nonveg | Single | 🔴 NO IMAGE |
| 129 | `g-dish-133-chicken-pepper-dry` | **Chicken Pepper Dry** | Nonveg | Single | 🔴 NO IMAGE |
| 130 | `g-dish-134-mutton-pepper-dry` | **Mutton Pepper Dry** | Nonveg | Single | 🔴 NO IMAGE |
| 131 | `g-dish-135-guntoor-mutton-dry` | **Guntoor Mutton Dry** | Nonveg | Single | 🔴 NO IMAGE |
| 132 | `g-dish-136-chilli-mutton-dry` | **Chilli Mutton Dry** | Nonveg | Single | 🔴 NO IMAGE |


### Category 13: Biryani (Veg) (5 distinct dishes)

| # | Item ID | Dish Name | Type | Variants | Image Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 133 | `g-dish-137-veg-biryani` | **Veg Biryani** | Veg | Single | 🟡 DUMMY IMAGE |
| 134 | `g-dish-138-paneer-biryani` | **Paneer Biryani** | Veg | Single | 🟡 DUMMY IMAGE |
| 135 | `g-dish-139-mushroom-biryani` | **Mushroom Biryani** | Veg | Single | 🔴 NO IMAGE |
| 136 | `g-dish-140-paneer-kaju-biryani` | **Paneer Kaju Biryani** | Veg | Single | 🔴 NO IMAGE |
| 137 | `g-dish-141-mushroom-kaju-biryani` | **Mushroom Kaju Biryani** | Veg | Single | 🔴 NO IMAGE |


### Category 14: Biryani (Non-Veg) (7 distinct dishes)

| # | Item ID | Dish Name | Type | Variants | Image Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 138 | `g-dish-142-chicken-biryani` | **Chicken Biryani** | Nonveg | Single | 🟡 DUMMY IMAGE |
| 139 | `g-dish-143-mutton-biryani` | **Mutton Biryani** | Nonveg | Single | 🟡 DUMMY IMAGE |
| 140 | `g-dish-144-fish-biryani` | **Fish Biryani** | Nonveg | Single | 🟡 DUMMY IMAGE |
| 141 | `g-dish-145-egg-biryani` | **Egg Biryani** | Nonveg | Single | 🟡 DUMMY IMAGE |
| 142 | `g-dish-146-prawns-biryani` | **Prawns Biryani** | Nonveg | Single | 🟡 DUMMY IMAGE |
| 143 | `g-dish-147-chicken-mughlai-biryani` | **Chicken Mughlai Biryani** | Nonveg | Single | 🔴 NO IMAGE |
| 144 | `g-dish-148-chicken-tikka-biryani` | **Chicken Tikka Biryani** | Nonveg | Single | 🔴 NO IMAGE |


### Category 15: Main Course (Veg) (16 distinct dishes)

| # | Item ID | Dish Name | Type | Variants | Image Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 145 | `g-dish-149-dal-fry` | **Dal Fry** | Veg | Single | 🟡 DUMMY IMAGE |
| 146 | `g-dish-150-mix-veg-curry` | **Mix Veg Curry** | Veg | Single | 🔴 NO IMAGE |
| 147 | `g-dish-151-veg-korma` | **Veg Korma** | Veg | Single | 🔴 NO IMAGE |
| 148 | `g-dish-152-paneer-masala` | **Paneer Masala** | Veg | Single | 🔴 NO IMAGE |
| 149 | `g-dish-153-paneer-do-pyaza` | **Paneer Do Pyaza** | Veg | Single | 🔴 NO IMAGE |
| 150 | `g-dish-154-paneer-malai-kofta` | **Paneer Malai Kofta** | Veg | Single | 🔴 NO IMAGE |
| 151 | `g-dish-155-veg-deewani-handi` | **Veg Deewani Handi** | Veg | Single | 🔴 NO IMAGE |
| 152 | `g-dish-156-kaju-masala` | **Kaju Masala** | Veg | Single | 🔴 NO IMAGE |
| 153 | `g-dish-157-kaju-kolhapure` | **Kaju Kolhapure** | Veg | Single | 🔴 NO IMAGE |
| 154 | `g-dish-158-kaju-paneer-masala` | **Kaju Paneer Masala** | Veg | Single | 🔴 NO IMAGE |
| 155 | `g-dish-159-paneer-butter-masala` | **Paneer Butter Masala** | Veg | Single | 🟡 DUMMY IMAGE |
| 156 | `g-dish-160-dal-kolhapuri` | **Dal Kolhapuri** | Veg | Single | 🔴 NO IMAGE |
| 157 | `g-dish-161-dal-tadka` | **Dal Tadka** | Veg | Single | 🟡 DUMMY IMAGE |
| 158 | `g-dish-162-palak-paneer` | **Palak Paneer** | Veg | Single | 🔴 NO IMAGE |
| 159 | `g-dish-163-aalu-gobhi-masala` | **Aalu Gobhi Masala** | Veg | Single | 🔴 NO IMAGE |
| 160 | `g-dish-164-paneeri-teki-tikka-masala` | **Paneeri Teki Tikka Masala** | Veg | Single | 🔴 NO IMAGE |


### Category 16: Chicken Main Course (19 distinct dishes)

| # | Item ID | Dish Name | Type | Variants | Image Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 161 | `g-dish-165-chicken-handi` | **Chicken Handi** | Nonveg | Single | 🔴 NO IMAGE |
| 162 | `g-dish-166-chicken-kadai` | **Chicken Kadai** | Nonveg | Single | 🟡 DUMMY IMAGE |
| 163 | `g-dish-167-chicken-patiala` | **Chicken Patiala** | Nonveg | Single | 🔴 NO IMAGE |
| 164 | `g-dish-168-chicken-keema` | **Chicken Keema** | Nonveg | Single | 🔴 NO IMAGE |
| 165 | `g-dish-169-chicken-musallam-masala` | **Chicken Musallam Masala** | Nonveg | Single | 🔴 NO IMAGE |
| 166 | `g-dish-170-chicken-kali-mirch-masala` | **Chicken Kali Mirch Masala** | Nonveg | Single | 🔴 NO IMAGE |
| 167 | `g-dish-171-chicken-afghani-masala` | **Chicken Afghani Masala** | Nonveg | Single | 🔴 NO IMAGE |
| 168 | `g-dish-172-chicken-hyderabadi-masala` | **Chicken Hyderabadi Masala** | Nonveg | Single | 🔴 NO IMAGE |
| 169 | `g-dish-173-chicken-changezi-masala` | **Chicken Changezi Masala** | Nonveg | Single | 🔴 NO IMAGE |
| 170 | `g-dish-174-chicken-haveli-masala` | **Chicken Haveli Masala** | Nonveg | Single | 🔴 NO IMAGE |
| 171 | `g-dish-175-chicken-rara-masala` | **Chicken Rara Masala** | Nonveg | Single | 🟢 REAL PHOTO |
| 172 | `g-dish-176-chicken-maharaja` | **Chicken Maharaja** | Nonveg | Single | 🔴 NO IMAGE |
| 173 | `g-dish-177-chicken-do-pyaza` | **Chicken Do Pyaza** | Nonveg | Single | 🔴 NO IMAGE |
| 174 | `g-dish-178-chicken-garam-masala` | **Chicken Garam Masala** | Nonveg | Single | 🔴 NO IMAGE |
| 175 | `g-dish-179-tandoori-chicken-masala` | **Tandoori Chicken Masala** | Nonveg | Single | 🔴 NO IMAGE |
| 176 | `g-dish-180-chicken-seekh-masala` | **Chicken Seekh Masala** | Nonveg | Single | 🔴 NO IMAGE |
| 177 | `g-dish-181-chicken-chatpata` | **Chicken Chatpata** | Nonveg | Single | 🔴 NO IMAGE |
| 178 | `g-dish-182-chicken-tikka-masala` | **Chicken Tikka Masala** | Nonveg | Single | 🔴 NO IMAGE |
| 179 | `g-dish-183-chicken-methi-masala` | **Chicken Methi Masala** | Nonveg | Single | 🔴 NO IMAGE |


### Category 17: Mutton Main Course (10 distinct dishes)

| # | Item ID | Dish Name | Type | Variants | Image Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 180 | `g-dish-184-mutton-masala` | **Mutton Masala** | Nonveg | Single | 🔴 NO IMAGE |
| 181 | `g-dish-185-mutton-kadai-masala` | **Mutton Kadai Masala** | Nonveg | Single | 🔴 NO IMAGE |
| 182 | `g-dish-186-mutton-handi-masala` | **Mutton Handi Masala** | Nonveg | Single | 🔴 NO IMAGE |
| 183 | `g-dish-187-mutton-kolhapuri` | **Mutton Kolhapuri** | Nonveg | Single | 🔴 NO IMAGE |
| 184 | `g-dish-188-mutton-hariyali-masala` | **Mutton Hariyali Masala** | Nonveg | Single | 🔴 NO IMAGE |
| 185 | `g-dish-189-mutton-hyderabadi-masala` | **Mutton Hyderabadi Masala** | Nonveg | Single | 🔴 NO IMAGE |
| 186 | `g-dish-190-mutton-lahori-masala` | **Mutton Lahori Masala** | Nonveg | Single | 🔴 NO IMAGE |
| 187 | `g-dish-191-mutton-keema-masala` | **Mutton Keema Masala** | Nonveg | Single | 🔴 NO IMAGE |
| 188 | `g-dish-192-mutton-rogan-josh` | **Mutton Rogan Josh** | Nonveg | Single | 🔴 NO IMAGE |
| 189 | `g-dish-193-mutton-maharaja` | **Mutton Maharaja** | Nonveg | Single | 🔴 NO IMAGE |


### Category 18: Veg Rice (10 distinct dishes)

| # | Item ID | Dish Name | Type | Variants | Image Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 190 | `g-dish-194-jeera-rice` | **Jeera Rice** | Veg | Single | 🔴 NO IMAGE |
| 191 | `g-dish-195-ghee-rice` | **Ghee Rice** | Veg | Single | 🔴 NO IMAGE |
| 192 | `g-dish-196-steam-rice` | **Steam Rice** | Veg | Single | 🔴 NO IMAGE |
| 193 | `g-dish-197-dal-khichidi` | **Dal Khichidi** | Veg | Single | 🔴 NO IMAGE |
| 194 | `g-dish-198-palak-khichidi` | **Palak Khichidi** | Veg | Single | 🔴 NO IMAGE |
| 195 | `g-dish-199-curd-rice` | **Curd Rice** | Veg | Single | 🔴 NO IMAGE |
| 196 | `g-dish-200-veg-fried-rice` | **Veg Fried Rice** | Veg | Single | 🔴 NO IMAGE |
| 197 | `g-dish-201-veg-schezwan-rice` | **Veg Schezwan Rice** | Veg | Single | 🔴 NO IMAGE |
| 198 | `g-dish-202-veg-triple-schezwan-rice` | **Veg Triple Schezwan Rice** | Veg | Single | 🔴 NO IMAGE |
| 199 | `g-dish-203-paneer-fried-rice` | **Paneer Fried Rice** | Veg | Single | 🔴 NO IMAGE |


### Category 19: Noodles (7 distinct dishes)

| # | Item ID | Dish Name | Type | Variants | Image Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 200 | `g-dish-204-veg-noodles` | **Veg Noodles** | Veg | Single | 🔴 NO IMAGE |
| 201 | `g-dish-205-paneer-noodles` | **Paneer Noodles** | Veg | Single | 🔴 NO IMAGE |
| 202 | `g-dish-206-veg-schezwan-noodles` | **Veg Schezwan Noodles** | Veg | Single | 🔴 NO IMAGE |
| 203 | `g-dish-207-egg-noodles` | **Egg Noodles** | Nonveg | Single | 🔴 NO IMAGE |
| 204 | `g-dish-208-egg-schezwan-noodles` | **Egg Schezwan Noodles** | Nonveg | Single | 🔴 NO IMAGE |
| 205 | `g-dish-209-chicken-noodles` | **Chicken Noodles** | Nonveg | Single | 🔴 NO IMAGE |
| 206 | `g-dish-210-chicken-schezwan-noodles` | **Chicken Schezwan Noodles** | Nonveg | Single | 🔴 NO IMAGE |


### Category 20: Drinking Sides (4 distinct dishes)

| # | Item ID | Dish Name | Type | Variants | Image Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 207 | `g-dish-211-non-veg-dry-platter` | **Non-Veg Dry Platter** | Nonveg | Single | 🟡 DUMMY IMAGE |
| 208 | `g-dish-212-veg-grains-platter` | **Veg Grains Platter** | Veg | Single | 🟡 DUMMY IMAGE |
| 209 | `g-dish-213-drinking-water` | **Drinking Water** | Veg | Single | 🔴 NO IMAGE |
| 210 | `g-dish-214-k2n-drinking-water` | **K2N Drinking Water** | Veg | Single | 🔴 NO IMAGE |


### Category 21: Bar & Cocktails (5 distinct dishes)

| # | Item ID | Dish Name | Type | Variants | Image Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 211 | `g-bar-royal-sunset` | **K2N Royal Sunset Cocktail** | Bar | Single | 🟡 DUMMY IMAGE |
| 212 | `g-bar-mint-mojito` | **Classic Mint Mojito** | Bar | Single | 🟡 DUMMY IMAGE |
| 213 | `g-bar-scotch-whiskey` | **Blended Scotch 12Y** | Bar | Single | 🟡 DUMMY IMAGE |
| 214 | `g-bar-kf-ultra` | **Kingfisher Ultra Draught** | Bar | Single | 🟡 DUMMY IMAGE |
| 215 | `g-bar-spiced-rum` | **Spiced Rum & Cola** | Bar | Single | 🟡 DUMMY IMAGE |

