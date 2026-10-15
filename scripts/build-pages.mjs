import { copyFileSync } from 'node:fs';

// GitHub Pages serves this entry for direct requests to client-side routes.
copyFileSync(new URL('../dist/index.html', import.meta.url), new URL('../dist/404.html', import.meta.url));
