# K2N Digital Menu - Image Style & Photography Specification

> **Mandatory Style Guide:** Every generated dish image in K2N Digital Menu must adhere strictly to these guidelines to match K2N's authentic photoshoot photography.

---

## 1. Core Visual Elements

- **Serveware:** Served on K2N's signature **MINT-GREEN speckled ceramic/melamine serveware**:
  - *Starters & Kababs:* Long oval or rectangular mint-green speckled platters.
  - *Gravies & Curries:* Round or square mint-green speckled bowls or curved dishes.
  - *Biryani & Rice:* Round mint-green speckled plates or shallow bowls.
  - *Breads:* Round or oval mint-green plate or simple dark metal/ceramic basket.
- **Surface:** **Black granite countertop** or dark grey restaurant table. No wooden props, no decorative cloths, no napkins, no cutlery piles.
- **Camera Angle & Framing:** **High angle (~70 degrees above)**, looking down at the table like a natural smartphone photo taken by a diner or staff member. Subject centered, entire plate/bowl fully visible, square 1:1 crop.
- **Lighting:** Bright, even, overhead restaurant ambient light. Slight authentic phone-camera realism.
  - **Forbidden:** NO moody dark studio shots, NO cinematic shadows, NO heavy bokeh blur, NO hyper-glossy CGI/HDR finish.
- **Garnish Standards:**
  - *Starters / Dry items:* Sliced red onion and shredded carrot salad, a fresh lemon wheel/wedge, and a carved tomato skin rose.
  - *Gravies / Curries:* Finely chopped fresh coriander leaves and thinly sliced raw onion rings.
  - *Bone-in poultry:* Silver foil wrapped around bone ends only where bone is exposed (e.g. tangdi, tandoori leg).
- **Food Texture:** Real, slightly imperfect, authentic Indian restaurant preparation. Visible spices, natural oil separation on gravies, authentic tandoor char marks, uneven saucing. Not plastic, not artificial.
- **Strict Negative Prompts:** NO people, NO hands, NO human fingers, NO restaurant menus, NO branded napkins, NO logos, NO text, NO watermarks.

---

## 2. Technical Asset Pipeline

- **Aspect Ratio:** 1:1 square.
- **Master Generation:** High-resolution generation matching K2N reference images.
- **Output Formats (in `public/assets/images/`):**
  - **Thumbnail:** `{heroId}-thumb.webp` — 300 × 300 px, target ~10 KB (WebP quality 80).
  - **Card View:** `{heroId}-card.webp` — 900 × 900 px, target ~60–80 KB (WebP quality 82).
