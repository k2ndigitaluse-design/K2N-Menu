import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pyScript = path.resolve(__dirname, "process_images.py");

console.log("Processing real original images into WebP (card & thumb)...");

try {
  execSync(`python "${pyScript}"`, {
    encoding: "utf-8",
    stdio: "inherit"
  });
  console.log("Successfully processed all real images to public/assets/images/real/ !");
} catch (err) {
  console.error("Error executing Python image processor:", err);
  process.exit(1);
}
