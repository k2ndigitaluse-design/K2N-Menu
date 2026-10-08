import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const menuPath = path.resolve(__dirname, "../src/data/sample-menu.js");

let content = fs.readFileSync(menuPath, "utf-8");

const imageUpdates = {
  "chicken-tandoori-full": "/assets/images/chicken_tandoori.jpg",
  "chicken-tandoori-half": "/assets/images/chicken_tandoori.jpg",
  "chicken-pahadi-kabab": "/assets/images/chicken_pahadi_tandoori.jpg",
  "chicken-kalmi-kabab": "/assets/images/chicken_tangdi_kabab.jpg",
  "chicken-reshmi-kabab": "/assets/images/chicken_reshmi_malai.jpg",
  "chicken-tikka": "/assets/images/chicken_pahadi_tikka.jpg",
  "paneer-tikka": "/assets/images/paneer_tikka_real.jpg",
  "paneer-pahadi": "/assets/images/paneer_tikka_real.jpg",
  "chicken-rara-masala": "/assets/images/chicken_rara.jpg",
  "chicken-pepper-dry": "/assets/images/paneer_pepper_dry.jpg",
  "chicken-manchow-soup": "/assets/images/soup_manchow.jpg",
  "hot-and-sour-soup": "/assets/images/soup_manchow.jpg",
  "triple-fried-chicken-rice": "/assets/images/triple_chicken_fried_rice.jpg",
  "chicken-noorani-tikka": "/assets/images/k2n_special_kebab.jpg",
  "chicken-jafrani-tikka": "/assets/images/nonveg_tandoori_platter.jpg"
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
