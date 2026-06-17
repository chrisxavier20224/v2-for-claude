import sharp from 'sharp';
import { writeFile, readFile } from 'fs/promises';
import { execSync } from 'child_process';

const heroes = [
  ['care-homes','1dfb1158-28c0-4aff-8d06-22659222c621'],
  ['churches','5dcb6197-43ab-4079-9a4f-a8761a5cba0e'],
  ['equestrian','d681ef9b-8755-4f0b-bb84-01070fe6809e'],
  ['events','a4b20616-683d-42f7-b622-2497e4771ebf'],
  ['farms','14356e14-08d6-494e-9a11-508ed4280080'],
  ['glamping','a9ac3550-36f1-460a-82aa-a2f3bd18e378'],
  ['golf','29aa4c85-ea22-4a6b-a754-f7f7b8be1ba0'],
  ['heritage','f505fa74-7399-4a23-a4ad-c2ecd9128561'],
  ['holiday-parks','ee1546c5-0930-4d6f-96e2-20cb78a861a9'],
  ['village-halls','e4f78409-ed7d-4985-bb07-34acf2d23176'],
];

const BASE = 'https://v2scale.lovable.app';

for (const [name, id] of heroes) {
  const src = `${name}-hero.jpg`;
  const url = `${BASE}/__l5e/assets-v1/${id}/${src}`;
  const raw = `/tmp/heroes/${name}.jpg`;
  execSync(`curl -sL '${url}' -o '${raw}'`);
  const buf = await readFile(raw);
  // desktop 1600
  let q = 80;
  let outD;
  while (q >= 50) {
    outD = await sharp(buf).resize({width:1600, withoutEnlargement:true}).webp({quality:q}).toBuffer();
    if (outD.length <= 300*1024) break;
    q -= 5;
  }
  // mobile 800
  const outM = await sharp(buf).resize({width:800, withoutEnlargement:true}).webp({quality:78}).toBuffer();
  await writeFile(`/tmp/heroes/${name}-1600.webp`, outD);
  await writeFile(`/tmp/heroes/${name}-800.webp`, outM);
  console.log(name, 'desktop', (outD.length/1024).toFixed(0)+'KB q='+q, 'mobile', (outM.length/1024).toFixed(0)+'KB');
}
