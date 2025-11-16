console.log(`
╔═══════════════════════════╗
║    ANEKA BOT 🪷   ║
║    Iniciando sistema...   ║
╚═══════════════════════════╝
`);

import cfonts from 'cfonts';
import chalk from 'chalk';

cfonts.say('Aneka Bot', {
  font: 'chrome',
  align: 'center',
  gradient: ['red', 'magenta'],
  transition: false
});

cfonts.say('by: Daniel', {
  font: 'console',
  align: 'center',
  gradient: ['red', 'magenta'],
  transition: false
});

//console.clear();

import('./main.js');
