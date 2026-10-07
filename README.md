# K2N Digital Menu

Mobile-first digital menu web application for **K2N Hotel & Restaurant** ("Feel the Difference"). Designed for customer view-only browsing with distinct floor logic (Ground Floor: Pure Veg; Top Floor: Veg, Non-Veg & Bar).

---

## 🚀 How to Run

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start Local Development Server:**
   ```bash
   npm run dev
   ```
   Open the browser at `http://localhost:5173/` (or port indicated in the terminal).

---

## 🛠️ How to Build for Production

Build static assets deployable directly to **Cloudflare Pages**, Netlify, or Vercel:
```bash
npm run build
```
The output directory will be `dist/`.

---

## ⚙️ Where to Customize Data & Configuration

- **Brand Settings:**  
  [`src/config/brand.js`](file:///c:/Users/BHUVANM/Desktop/K2n%20Project/K2N_Menu/src/config/brand.js)  
  *Configure hotel name, tagline, logo path, intro video path, currency symbol, and page title.*

- **Floor Settings:**  
  [`src/config/floors.js`](file:///c:/Users/BHUVANM/Desktop/K2n%20Project/K2N_Menu/src/config/floors.js)  
  *Configure floor names, badges (e.g. "Pure Veg"), and allowed dietary types per floor.*

- **Menu Items & Categories:**  
  [`src/data/sample-menu.js`](file:///c:/Users/BHUVANM/Desktop/K2n%20Project/K2N_Menu/src/data/sample-menu.js)  
  *Add, edit, or remove dishes, pricing (`price` or `priceByFloor`), categories, availability, and images.*

- **Data Source Engine:**  
  [`src/data/dataSource.js`](file:///c:/Users/BHUVANM/Desktop/K2n%20Project/K2N_Menu/src/data/dataSource.js)  
  *The single data abstraction layer. Swap this file with Firebase Firestore in Stage 2 without altering any UI components.*

- **Colors & Theme:**  
  [`src/styles/theme.css`](file:///c:/Users/BHUVANM/Desktop/K2n%20Project/K2N_Menu/src/styles/theme.css)  
  *All CSS variables for the warm cream palette, red accents, gold gradients, and typography.*
