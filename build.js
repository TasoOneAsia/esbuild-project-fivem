const { build } = require('esbuild')

build({
  entryPoints: ['server/server.ts'],
  bundle: true,
  logLevel: 'info',
  outdir: 'dist/server',
  platform: 'node',
  loader: {
    '.ts': 'ts'
  },
  sourcemap: true,
  color: true
}).catch(e => {
  console.error(e)
  process.exit(1)
})