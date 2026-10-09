import { specification } from '@jterrazz/test';
import { afterAll } from 'vitest';

export const { cleanup, website } = await specification.website({
    server: {
        command: 'npx astro preview --ignore-lock --host 127.0.0.1 --port $PORT',
        // outside: Astro 7 detaches `astro preview` under an AI agent; ASTRO_PREVIEW_BACKGROUND is its private child marker, which keeps the server in the foreground so it ends with the run. --ignore-lock lets it start beside a running preview and writes no lock (recheck both on an Astro upgrade).
        env: { ASTRO_PREVIEW_BACKGROUND: '1' },
        ready: '/',
    },
});

afterAll(cleanup);
