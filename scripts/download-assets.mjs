import { createWriteStream, mkdirSync, existsSync } from 'fs';
import { pipeline } from 'stream/promises';
import path from 'path';

const BASE = path.join(process.cwd(), 'public');

const assets = [
  // Logo
  { url: 'https://www.performance-gt.com/assets/themes/theme-apiandyou/public/images/logo.svg', dest: 'images/logo.svg' },
  // Favicon
  { url: 'https://www.performance-gt.com/assets/uploads/2024/04/favicon.png', dest: 'seo/favicon.png' },
  // Hero image
  { url: 'https://www.performance-gt.com/assets/uploads/2025/03/992-GT3-Touring-profil-av-1860x1240.jpg', dest: 'images/hero-car.jpg' },
  // About section image
  { url: 'https://www.performance-gt.com/assets/uploads/2024/05/pexels-renato-nascimento-3783561-5606690-368x460.jpg', dest: 'images/about-person.jpg' },
  // About/ContentImage car (red Ferrari)
  { url: 'https://www.performance-gt.com/assets/uploads/2024/05/pexels-mime-5532980-e1715693766883-370x298.jpg', dest: 'images/about-car.jpg' },
  // ContentWithImageBackground (car interior)
  { url: 'https://www.performance-gt.com/assets/uploads/2024/05/pexels-urtimud-89-76108288-18261887-370x247.jpg', dest: 'images/services-bg.jpg' },
  // Service tiles
  { url: 'https://www.performance-gt.com/assets/uploads/2024/05/992-turbo-s-profil-ar-decapote-370x247.jpg', dest: 'images/service-location.jpg' },
  { url: 'https://www.performance-gt.com/assets/uploads/2024/03/750-Ld-M-int-ar-370x247.jpg', dest: 'images/service-chauffeur.jpg' },
  { url: 'https://www.performance-gt.com/assets/uploads/2024/05/x7-2-370x247.jpg', dest: 'images/service-mariage.jpg' },
  { url: 'https://www.performance-gt.com/assets/uploads/2024/06/phantom-8-spirit-370x247.jpg', dest: 'images/service-transfert.jpg' },
  // Vehicle cards for carousel
  { url: 'https://www.performance-gt.com/assets/uploads/2024/03/458-Speciale-int-370x247.jpg', dest: 'images/vehicles/ferrari-458.jpg' },
  { url: 'https://www.performance-gt.com/assets/uploads/2024/03/R8-profil-ar-370x247.jpg', dest: 'images/vehicles/audi-r8.jpg' },
  { url: 'https://www.performance-gt.com/assets/uploads/2024/06/phantom-8-profil-avant-370x247.jpg', dest: 'images/vehicles/rolls-phantom.jpg' },
  { url: 'https://www.performance-gt.com/assets/uploads/2024/05/urus-performante-profil-av-370x247.jpg', dest: 'images/vehicles/lamborghini-urus.jpg' },
  { url: 'https://www.performance-gt.com/assets/uploads/2024/03/M5-CS-profil-av-370x247.jpeg', dest: 'images/vehicles/bmw-m5.jpg' },
  { url: 'https://www.performance-gt.com/assets/uploads/2024/05/portofino-5270813_1280-370x256.jpg', dest: 'images/vehicles/ferrari-portofino.jpg' },
  { url: 'https://www.performance-gt.com/assets/uploads/2025/03/992-GT3-Touring-profil-av-370x247.jpg', dest: 'images/vehicles/porsche-992.jpg' },
  { url: 'https://www.performance-gt.com/assets/uploads/2024/03/DBS-profil-e1724147621195-370x263.jpg', dest: 'images/vehicles/aston-dbs.jpg' },
  // Instagram grid images
  { url: 'https://www.performance-gt.com/assets/uploads/2024/05/pexels-tove-liu-2127454-3794031-370x252.jpg', dest: 'images/instagram/insta-1.jpg' },
  { url: 'https://www.performance-gt.com/assets/uploads/2024/03/PGT-Sept19-245-2-370x247.jpeg', dest: 'images/instagram/insta-2.jpg' },
  { url: 'https://www.performance-gt.com/assets/uploads/2024/03/Senna-profil-ar-370x247.jpg', dest: 'images/instagram/insta-3.jpg' },
  { url: 'https://www.performance-gt.com/assets/uploads/2024/03/765-LT-Decapotee-Profil-Ar-Portes-Ouvertes-370x247.jpeg', dest: 'images/instagram/insta-4.jpg' },
  { url: 'https://www.performance-gt.com/assets/uploads/2024/03/New-Ghost-2-370x247.jpg', dest: 'images/instagram/insta-5.jpg' },
  { url: 'https://www.performance-gt.com/assets/uploads/2024/05/portofino-7504460_1280-370x208.jpg', dest: 'images/instagram/insta-6.jpg' },
];

async function downloadFile(url, destRelative) {
  const dest = path.join(BASE, destRelative);
  const dir = path.dirname(dest);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed ${url}: ${res.status}`);
  await pipeline(res.body, createWriteStream(dest));
  console.log(`✓ ${destRelative}`);
}

// Download in batches of 4
async function downloadBatch(batch) {
  await Promise.all(batch.map(({ url, dest }) =>
    downloadFile(url, dest).catch(e => console.error(`✗ ${dest}: ${e.message}`))
  ));
}

async function main() {
  console.log(`Downloading ${assets.length} assets...`);
  for (let i = 0; i < assets.length; i += 4) {
    await downloadBatch(assets.slice(i, i + 4));
  }
  console.log('Done!');
}

main();
