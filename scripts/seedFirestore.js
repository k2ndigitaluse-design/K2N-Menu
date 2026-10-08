import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { sampleMenuGround, sampleMenuTop } from "../src/data/sample-menu.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.resolve(__dirname, "../.env.local");

// Load .env.local variables
const envConfig = {};
if (fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, "utf-8");
  content.split("\n").forEach((line) => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith("#")) {
      const [key, ...vals] = trimmed.split("=");
      if (key) {
        envConfig[key.trim()] = vals.join("=").trim();
      }
    }
  });
}

const firebaseConfig = {
  apiKey: envConfig.VITE_FIREBASE_API_KEY || process.env.VITE_FIREBASE_API_KEY,
  authDomain: envConfig.VITE_FIREBASE_AUTH_DOMAIN || process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: envConfig.VITE_FIREBASE_PROJECT_ID || process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: envConfig.VITE_FIREBASE_STORAGE_BUCKET || process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: envConfig.VITE_FIREBASE_MESSAGING_SENDER_ID || process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: envConfig.VITE_FIREBASE_APP_ID || process.env.VITE_FIREBASE_APP_ID
};

console.log("Connecting to Firebase project:", firebaseConfig.projectId);

if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
  console.error("❌ Missing Firebase credentials in .env.local");
  process.exit(1);
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

async function seedFloor(floorId, categories) {
  console.log(`\n📦 Seeding ${floorId.toUpperCase()} FLOOR (${categories.length} categories)...`);
  for (const cat of categories) {
    const docRef = doc(db, "menus", floorId, "categories", cat.id);
    await setDoc(docRef, {
      name: cat.name,
      order: cat.order,
      items: cat.items
    });
    console.log(`  ✓ Saved category: "${cat.name}" (${cat.items.length} dishes)`);
  }
}

async function run() {
  try {
    const adminEmail = envConfig.ADMIN_EMAIL || envConfig.VITE_ADMIN_EMAIL;
    const adminPassword = envConfig.ADMIN_PASSWORD || envConfig.VITE_ADMIN_PASSWORD;

    if (adminEmail && adminPassword) {
      console.log(`🔑 Authenticating as ${adminEmail}...`);
      await signInWithEmailAndPassword(auth, adminEmail, adminPassword);
      console.log("✓ Authenticated successfully.");
    }

    await seedFloor("ground", sampleMenuGround);
    await seedFloor("top", sampleMenuTop);
    console.log("\n🎉 SUCCESS: All 21 categories and dishes for Ground Floor and Top Floor have been populated into Firestore!");
    process.exit(0);
  } catch (err) {
    console.error("\n❌ Error writing to Firestore:", err);
    console.log("\n💡 Note: If you got a permission error, check your Firestore Rules in Firebase Console.");
    process.exit(1);
  }
}

run();
