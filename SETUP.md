# K2N Digital Menu — Backend & Admin Setup Guide

Follow these exact step-by-step instructions to configure Firebase Authentication, Firestore Database, Cloudinary image uploads, and Cloudflare Pages.

---

## 1. Firebase Setup

### A. Create Firebase Project
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Click **"Add project"** and name it `k2n-menu` (or your preferred name).
3. Disable Google Analytics (optional) and click **Create project**.

### B. Register Web App & Get API Keys
1. In the Project Overview page, click the **Web icon (`</>`)** to add an app.
2. Register the app as `K2N Web Menu` (do not check Firebase Hosting).
3. Copy the `firebaseConfig` keys into your local `.env.local` file:
   ```env
   VITE_FIREBASE_API_KEY=AIzaSy...
   VITE_FIREBASE_AUTH_DOMAIN=k2n-menu-xxxxx.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=k2n-menu-xxxxx
   VITE_FIREBASE_STORAGE_BUCKET=k2n-menu-xxxxx.firebasestorage.app
   VITE_FIREBASE_MESSAGING_SENDER_ID=1234567890
   VITE_FIREBASE_APP_ID=1:1234567890:web:abcdef123456
   ```

### C. Enable Email/Password Authentication
1. In the Firebase sidebar, go to **Build > Authentication**.
2. Click **Get Started**, select **Email/Password**, enable the toggle, and click **Save**.
3. Go to the **Users** tab inside Authentication.
4. Click **"Add user"**, enter the owner email (e.g. `owner@k2nhotels.com`) and a secure password.
5. Once created, copy the user's **User UID** (a long string like `aB1cDe2FgHi3...`).

### D. Enable Cloud Firestore & Security Rules
1. In the Firebase sidebar, go to **Build > Firestore Database**.
2. Click **Create database**, select a region (e.g., `asia-south1` / Mumbai or closest), and start in **Production mode**.
3. Go to the **Rules** tab in Firestore.
4. Open the [`firestore.rules`](file:///c:/Users/BHUVANM/Desktop/K2n%20Project/K2N_Menu/firestore.rules) file in this repository.
5. Replace `"OWNER_UID_HERE"` on line 9 with the copied Owner User UID from step C5:
   ```javascript
   allow write: if request.auth != null && request.auth.uid == "PASTE_YOUR_OWNER_UID_HERE";
   ```
6. Copy the entire contents and paste into the Firebase Console Rules editor, then click **Publish**.

---

## 2. Cloudinary Setup (Unsigned Image Upload)

1. Sign in or create a free account at [Cloudinary](https://cloudinary.com/).
2. From your Cloudinary Dashboard, copy your **Cloud Name**.
3. Go to **Settings (gear icon) > Upload > Upload presets**.
4. Click **"Add upload preset"**:
   - **Preset name**: e.g. `k2n_preset`
   - **Signing Mode**: Select **Unsigned** *(Crucial)*
   - **Folder**: Enter `k2n`
   - **Allowed formats**: `jpg, png, webp`
   - **Max file size**: `10000000` (10 MB)
5. Click **Save**.
6. Add these to your `.env.local` file:
   ```env
   VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
   VITE_CLOUDINARY_UPLOAD_PRESET=k2n_preset
   ```

---

## 3. Local Development

1. Ensure `.env.local` exists in the project root with all 8 variables set.
2. Run the dev server:
   ```bash
   npm run dev
   ```
3. Visit `http://localhost:5173/admin/login` to log into the Admin Portal.
4. On first load, visit `http://localhost:5173/admin/ground` and `http://localhost:5173/admin/top` and click **"Import sample menu"** to seed initial Firestore data.

---

## 4. Cloudflare Pages Deployment

When deploying to Cloudflare Pages:
1. In Cloudflare Dashboard, navigate to **Workers & Pages > Create application > Pages > Connect to Git**.
2. Select your repository `k2ndigitaluse-design/K2N-Menu`.
3. Set build settings:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Under **Environment variables**, add all 8 `VITE_*` keys from `.env.local`:
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - `VITE_FIREBASE_STORAGE_BUCKET`
   - `VITE_FIREBASE_MESSAGING_SENDER_ID`
   - `VITE_FIREBASE_APP_ID`
   - `VITE_CLOUDINARY_CLOUD_NAME`
   - `VITE_CLOUDINARY_UPLOAD_PRESET`
5. Click **Save and Deploy**.
