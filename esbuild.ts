import esbuild from 'esbuild'
import path from 'path'
import fs from 'fs'

const watch = process.argv.includes('watch')
const distPath = path.resolve(__dirname, 'dist')

// clear dist folder
if (fs.existsSync(distPath)) {
  fs.rmSync(distPath, { recursive: true, force: true })
}

esbuild.build({
  tsconfig: path.resolve(__dirname, 'src', 'client', 'tsconfig.json'),
  entryPoints: [path.resolve(__dirname, 'src', 'client', 'index.ts')],
  outfile: path.resolve(distPath, 'client.index.js'),
  bundle: true,
  platform: 'browser',
  target: 'es2015',
  logLevel: 'info',
  watch,
})

esbuild.build({
  tsconfig: path.resolve(__dirname, 'src', 'server', 'tsconfig.json'),
  entryPoints: [path.resolve(__dirname, 'src', 'server', 'index.ts')],
  outfile: path.resolve(distPath, 'server.index.js'),
  bundle: true,
  platform: 'node',
  target: 'node16',
  external: [path.resolve(__dirname, 'node_modules/*')],
  logLevel: 'info',
  watch,
})
