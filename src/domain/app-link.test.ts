import { expect, test } from 'vitest';

import { appLink } from './app-link';

test('the local app destination is available only in development', () => {
    // Given - no public application has been configured.
    const development = appLink(true);
    const production = appLink(false);
    // Then - development links locally and production stays unavailable.
    expect(development).toBe('http://localhost:4320');
    expect(production).toBeNull();
});

test('production accepts an explicit secure application address', () => {
    // Given - a deploy configures a public HTTPS destination.
    const destination = appLink(false, 'https://example.com/app');
    // Then - the configured path is preserved.
    expect(destination).toBe('https://example.com/app');
});

test('invalid or local production destinations stay unavailable', () => {
    // Given - unsafe or incomplete deployment values must not become links.
    const destinations = [
        // Reject a dangerous configured URL without rendering or executing it.
        // oxlint-disable-next-line no-script-url -- the value is data under test, never a href
        'javascript:alert(1)',
        'http://localhost:4320',
        'https://localhost',
        'https://127.0.0.1',
        'https://user:password@example.com',
        'not a URL',
    ];
    // Then - every unsupported destination is rejected.
    expect(destinations.map((value) => appLink(false, value))).toStrictEqual(
        destinations.map(() => null),
    );
});
