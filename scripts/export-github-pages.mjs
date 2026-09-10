import { spawn } from 'node:child_process';
import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

const port = 4173;
const origin = `http://127.0.0.1:${port}`;
const basePath = '/ueda-seisakusho-site';
const output = path.resolve('github-pages-dist');
const routes = ['/', '/manufacturing/', '/company/', '/contact/', '/privacy/'];

const server = spawn('npm', ['run', 'start', '--', '--port', String(port)], {
  stdio: 'inherit',
});

const waitForServer = async () => {
  for (let attempt = 0; attempt < 60; attempt += 1) {
    try {
      const response = await fetch(origin);
      if (response.ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw new Error('Preview server did not start in time.');
};

const rewriteHtml = (html) =>
  html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<link\b[^>]*rel="(?:modulepreload|preload)"[^>]*>/gi, '')
    .replace(/(href|src)="\/(?!\/)/g, `$1="${basePath}/`)
    .replace(/<meta name="robots" content="noindex, nofollow"\/>/g, '');

try {
  await waitForServer();
  await rm(output, { recursive: true, force: true });
  await mkdir(output, { recursive: true });
  await cp(path.resolve('dist/client'), output, { recursive: true });

  for (const route of routes) {
    const response = await fetch(`${origin}${route}`);
    if (!response.ok)
      throw new Error(`Failed to render ${route}: ${response.status}`);
    const target = route === '/' ? output : path.join(output, route);
    await mkdir(target, { recursive: true });
    await writeFile(
      path.join(target, 'index.html'),
      rewriteHtml(await response.text()),
    );
  }

  const notFound = await fetch(`${origin}/page-not-found/`);
  await writeFile(
    path.join(output, '404.html'),
    rewriteHtml(await notFound.text()),
  );
  await writeFile(path.join(output, '.nojekyll'), '');
} finally {
  server.kill('SIGTERM');
}
