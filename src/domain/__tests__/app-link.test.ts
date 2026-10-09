import { describe, expect, test } from 'vitest';

import { appLink } from '../app-link';

describe('appLink', () => {
    test('links the local product in development, whatever the build configures', () => {
        // Given - a development build, configured or not
        const destinations = [appLink(true, ''), appLink(true, 'https://app.cap01.test/')];

        // Then - both reach the product running beside the site
        expect(destinations).toStrictEqual(['http://localhost:4320', 'http://localhost:4320']);
    });

    test('keeps a production build with no address configured unlinked', () => {
        // Given - a production build with no application address
        const destination = appLink(false, '');

        // Then - the page shows its unavailable status instead of a link
        expect(destination).toBeNull();
    });

    test('links a production build to its configured secure address, path included', () => {
        // Given - a deploy configures a public HTTPS destination
        const destination = appLink(false, 'https://app.cap01.test/preview');

        // Then - the configured path is preserved
        expect(destination).toBe('https://app.cap01.test/preview');
    });

    test('refuses every unsafe or local production address', () => {
        // Given - deployment values that must never become links
        const destinations = [
            // oxlint-disable-next-line no-script-url -- the value is data under test, never a href
            'javascript:alert(1)',
            'http://app.cap01.test/',
            'https://localhost',
            'https://127.0.0.1',
            'https://user@app.cap01.test/',
            'https://:password@app.cap01.test/',
            'not a URL',
        ];

        // Then - each one leaves the page unlinked
        expect(destinations.map((value) => appLink(false, value))).toStrictEqual([
            null,
            null,
            null,
            null,
            null,
            null,
            null,
        ]);
    });
});
