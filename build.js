const esbuild = require('esbuild');
const fs = require('fs');

esbuild.build({
  entryPoints: ['./src/index.js'],
  bundle: true,
  outfile: './dist/bundle.js',
  sourcemap: true,
  minify: true,
  metafile: true
}).then(result => {
  console.log('Build succeeded:', result);
  if (result.metafile) {
    fs.writeFileSync('./dist/meta.json', JSON.stringify(result.metafile, null, 2));
    console.log('Metafile saved as ./dist/meta.json');
  }
}).catch(() => process.exit(1));
