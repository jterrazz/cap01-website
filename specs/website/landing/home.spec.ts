import { describe, expect, test } from 'vitest';

import { website } from '../website.specification';

describe('home', () => {
    test('introduces cap01 and says the public preview is not open yet', async () => {
        // Given - the production build, with no application address configured
        const result = await website.visit('/');

        // Then - the outline ends on the unavailable status, and links to no application
        expect(result.status).toBe(200);
        expect(result.tree).toMatch(`
            - link "Skip to content":
              - /url: "#main"
            - banner:
              - link "cap01 home":
                - /url: /
                - text: cap01
              - navigation "Main":
                - link "Our approach":
                  - /url: "#approach"
                - link "The preview":
                  - /url: "#preview"
            - main:
              - region "A little more intentional.":
                - paragraph: A companion, in the making
                - heading "A little more intentional." [level=1]
                - paragraph: A little structure for your habits. A little room for yourself.
                - paragraph: cap01 is an AI habit and growth coach we're building for the everyday. Small steps, thoughtful reflection, and a direction of your own.
                - link "Meet cap01":
                  - /url: "#approach"
              - region "Your life. Your pace.":
                - paragraph: A quieter kind of progress
                - heading "Your life. Your pace." [level=2]
                - article:
                  - text: "01"
                  - paragraph: Habits, at your pace
                  - heading "Make room for the small things." [level=3]
                  - paragraph: A habit does not need to change everything. Start with something small enough to return to, even on an ordinary day.
                - article:
                  - text: "02"
                  - paragraph: A place to reflect
                  - heading "Notice what moves you." [level=3]
                  - paragraph: Leave a few words about your day. Make space for the patterns, questions and moments you might otherwise pass by.
                - article:
                  - text: "03"
                  - paragraph: Room to find your way
                  - heading "Keep your own direction." [level=3]
                  - paragraph: Bring your attention back to what matters to you. Growth can be thoughtful, personal and a little less hurried.
              - region "Still taking shape.":
                - paragraph: One small beginning
                - heading "Still taking shape." [level=2]
                - paragraph: The first web preview makes space for habits and a journal, saved in your browser. AI coaching and the mobile companion are still ahead.
                - paragraph: Public preview coming later
                - paragraph: A small space for habits and reflection.
            - contentinfo:
              - link "cap01":
                - /url: /
              - paragraph: A little more intentional.
              - link "Back to the beginning":
                - /url: "#main"`);
    });

    test('describes the page to search engines and link previews', async () => {
        // Given - the production build
        const result = await website.visit('/');

        // Then - the head carries the title, the description and the theme colour
        expect(result.head).toMatch({
            alternates: {},
            canonical: null,
            metas: {
                viewport: 'width=device-width, initial-scale=1',
                description:
                    'cap01 is an AI habit and growth coach in the making. A little structure for your habits, a little room to reflect, and a direction of your own.',
                'theme-color': '#ffffff',
            },
            title: 'cap01: A little more intentional.',
        });
    });

    test('loads its stylesheet and every asset with a silent console', async () => {
        // Given - the production build
        const result = await website.visit('/');

        // Then - the page ships no script, so a line here is an asset that failed to load
        expect(result.console.text).toBe('');
    });
});
