const fs = require('fs');
const path = require('path');

const homeComponentsDir = path.join(__dirname, 'client', 'src', 'features', 'home', 'components');

const cssMappings = {
  '--color-brand-primary': '--color-midnight-navy',
  '--color-background-primary': '--color-white',
  '--color-background-secondary': '--color-secondary-surface',
  '--color-border-primary': '--color-border-light',
  '--color-border-secondary': '--color-border-light',
  '--color-border-hover': '--color-electric-blue',
  '--color-text-tertiary': '--color-text-muted',
  '--color-semantic-success': '--color-status-success',
  '--color-semantic-danger': '--color-status-danger',
  '--radius-sm': '--radius-small',
  '--radius-md': '--radius-medium',
  '--radius-lg': '--radius-large',
  '--radius-full': '--radius-pill',
  '--shadow-sm': '--shadow-1',
  '--shadow-md': '--shadow-2',
  '--color-focus-ring': '--color-electric-blue',
  'rgba(var(--color-semantic-success-rgb), 0.1)': 'color-mix(in srgb, var(--color-status-success) 10%, transparent)',
  'rgba(var(--color-semantic-danger-rgb), 0.1)': 'color-mix(in srgb, var(--color-status-danger) 10%, transparent)',
};

const fileAccentMap = {
  'champion-hero-section.module.css': '--color-muted-gold',
  'award-feature-card.module.css': '--color-muted-gold',
  'award-compact-card.module.css': '--color-muted-gold',
  'team-card.module.css': '--color-muted-gold',
  'player-card.module.css': '--color-muted-gold',
  'data-simulation-notice.module.css': '--color-electric-blue',
};

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;

      // Fix imports in tsx/ts files
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        if (content.includes('../../types/home.types')) {
          content = content.replace(/\.\.\/\.\.\/types\/home\.types/g, '../types/home.types');
          changed = true;
        }
      }

      // Fix CSS
      if (file.endsWith('.module.css') || file.endsWith('.css')) {
        for (const [oldToken, newToken] of Object.entries(cssMappings)) {
          if (content.includes(oldToken)) {
            content = content.split(oldToken).join(newToken);
            changed = true;
          }
        }
        
        if (content.includes('--color-accent-primary')) {
          const newToken = fileAccentMap[file] || '--color-electric-blue';
          content = content.split('--color-accent-primary').join(newToken);
          changed = true;
        }
      }

      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${file}`);
      }
    }
  }
}

processDirectory(homeComponentsDir);

// Also process home-page.tsx and home-page.module.css if needed
const homePageFile = path.join(__dirname, 'client', 'src', 'features', 'home', 'home-page.tsx');
if (fs.existsSync(homePageFile)) {
  let content = fs.readFileSync(homePageFile, 'utf8');
  if (content.includes('../../types/home.types')) {
    content = content.replace(/\.\.\/\.\.\/types\/home\.types/g, '../types/home.types');
    fs.writeFileSync(homePageFile, content, 'utf8');
    console.log('Updated home-page.tsx');
  }
}
