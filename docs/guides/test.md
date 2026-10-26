# Test

What proves a change here: the two vitest projects, which test to write, and
what a review still covers. How to write a spec is `@jterrazz/test`'s manual;
this page is what this site adds to it.

## The two projects

The projects are read off the tree; `studio.config.ts` states nothing about
them.

| Project   | Collects                     | Runs                                                                      |
| --------- | ---------------------------- | ------------------------------------------------------------------------- |
| `unit`    | `src/**/__tests__/*.test.ts` | Node, no DOM: a module test, in the `__tests__/` of its module's folder   |
| `website` | `specs/website/**/*.spec.ts` | The production build served by `astro preview`, read by headless Chromium |

`make test` builds first: the website spec reads `dist/`, it never builds it.
The spec starts the preview itself, bound to `127.0.0.1` on a free port and
kept in the foreground; the agent detach is
[Develop's](develop.md#the-loop).

## Which test to write

The default is a website spec: the page met through its address, in a real
browser, against the production build. `specs/website/landing/home.spec.ts`
holds the page's whole outline, its head and its console. The outline is the
contract of the unconfigured build (the "Public preview coming later" status
and no link to an application, local or not), so the Makefile pins
`PUBLIC_APP_URL` empty for the build `make test` makes.

A module test is kept only for a pure algorithm whose edge cases no page reaches
cheaply. There is one:

| Module test | Why it is kept                                                                                        |
| ----------- | ----------------------------------------------------------------------------------------------------- |
| `app-link`  | Every refused destination (a script URL, localhost, credentials, plain HTTP) is a build no gate makes |

`make check` ends on the mutation verdict, which measures the module tests: the
website spec runs in Chromium, which the mutation run leaves out.

## What a review still covers

Layout is not asserted: review desktop and narrow-screen wrapping, keyboard
focus and anchor navigation in the running preview when changing the
stylesheet.

The link branch of `index.astro` is unproven in both states that render it
(development and a configured production build): whether the anchor renders, its
`href` and its label. Only the address policy is proven, by the `app-link`
module test. Check the production state by hand with
`PUBLIC_APP_URL=https://cap01.example make build`, then `npm run start`; the development
state with `npm run dev`.
