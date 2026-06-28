import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..', 'public', 'images')

const logo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><rect width="80" height="80" rx="8" fill="#0a1628"/><path d="M40 12 L68 40 L40 68 L12 40 Z" fill="none" stroke="#00b8e8" stroke-width="3"/><path d="M40 22 L58 40 L40 58 L22 40 Z" fill="#00b8e8" opacity="0.3"/></svg>`

const placeholder = (label, color) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${color}"/><stop offset="100%" stop-color="#0a1628"/></linearGradient></defs><rect width="800" height="500" fill="url(#g)"/><text x="400" y="250" text-anchor="middle" fill="rgba(255,255,255,0.5)" font-family="Arial" font-size="28" font-weight="bold">${label}</text><text x="400" y="290" text-anchor="middle" fill="rgba(0,184,232,0.6)" font-family="Arial" font-size="16">Placeholder</text></svg>`

const heroBg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><defs><linearGradient id="h" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#e8f4fc"/><stop offset="100%" stop-color="#b8dce8"/></linearGradient></defs><rect width="1920" height="1080" fill="url(#h)"/><rect x="200" y="300" width="600" height="500" fill="rgba(255,255,255,0.7)" rx="4"/><rect x="820" y="250" width="500" height="550" fill="rgba(255,255,255,0.5)" rx="4"/></svg>`

for (const d of ['', 'products', 'portfolio']) {
  fs.mkdirSync(path.join(root, d), { recursive: true })
}

fs.writeFileSync(path.join(root, 'logo.svg'), logo)
fs.writeFileSync(path.join(root, 'hero-bg.svg'), heroBg)

for (const p of ['doors', 'windows', 'floors', 'stairs', 'walls', 'lobby', 'kitchen', 'exterior']) {
  fs.writeFileSync(path.join(root, 'products', `${p}.svg`), placeholder(p, '#132d52'))
}

for (let i = 1; i <= 8; i++) {
  fs.writeFileSync(path.join(root, 'portfolio', `project-${i}.svg`), placeholder(`Project ${i}`, '#0d2240'))
}

console.log('Done')
