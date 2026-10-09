import { specification } from '@jterrazz/test';
import { afterAll } from 'vitest';

export const { cleanup, website } = await specification.website({
    server: {
        command: 'npx astro preview --ignore-lock --host 127.0.0.1 --port $PORT',
        // outside: under an AI agent, Astro 7 detaches `astro preview` into a background server and exits; its own marker keeps it in the foreground the run ends, and `--ignore-lock` lets it start beside a preview someone already runs
        env: { ASTRO_PREVIEW_BACKGROUND: '1' },
        ready: '/',
    },
});

afterAll(cleanup);
