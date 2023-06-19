const res = require('esbuild').buildSync({
  entryPoints: ['src/App.tsx'],
  bundle: true,
  minify: true,
  format: 'cjs',
  sourcemap: true,
  outfile: 'dist/index.js',
  // external: ['react', 'react-dom'], 
})