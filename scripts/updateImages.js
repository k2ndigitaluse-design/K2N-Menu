import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const menuPath = path.resolve(__dirname, "../src/data/sample-menu.js");

let content = fs.readFileSync(menuPath, "utf-8");

const imageUpdates = {
  "chicken-tandoori-full": "/assets/images/real/chicken_tandoori-card.webp",
  "chicken-tandoori-half": "/assets/images/real/chicken_tandoori-card.webp",
  "chicken-pahadi-kabab": "/assets/images/real/chicken_pahadi_tandoori-card.webp",
  "chicken-tangadi-kabab-2-pcs": "/assets/images/real/chicken_tangdi_kabab-card.webp",
  "chicken-tangadi-kabab-1-pc": "/assets/images/real/chicken_tangdi_kabab-card.webp",
  "chicken-reshmi-kabab": "/assets/images/real/chicken_reshmi_malai-card.webp",
  "paneer-tikka": "/assets/images/real/paneer_tikka_real-card.webp",
  "chicken-rara-masala": "/assets/images/real/chicken_rara-card.webp",
  "chicken-manchow-soup": "/assets/images/real/soup_manchow-card.webp",
  "triple-fried-chicken-rice": "/assets/images/real/triple_chicken_fried_rice-card.webp"
};

let count = 0;
for (const [key, imgPath] of Object.entries(imageUpdates)) {
  const regex = new RegExp(`("id":\\s*"[gt]-dish-\\d+-${key}"[\\s\\S]*?"imageUrl":\\s*")[^"]*(")`, "g");
  content = content.replace(regex, (match, p1, p2) => {
    count++;
    return `${p1}${imgPath}${p2}`;
  });
}

fs.writeFileSync(menuPath, content, "utf-8");
console.log(`🎉 Updated ${count} image references across Ground & Top floor menus.`);
