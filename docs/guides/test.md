# Test

What proves a change here: the two vitest projects, which test to write, and
what a review still covers. How to write a spec is `@jterrazz/test`'s manual;
this page is what this site adds to it.

## The two projects

The projects are read off the tree; `jterrazz.config.ts` states nothing about
them.

| Project   | Collects                     | Runs                                                                      |
| --------- | ---------------------------- | ------------------------------------------------------------------------- |
| `unit`    | `src/**/__tests__/*.test.ts` | Node, no DOM — a module test, in the `__tests__/` of its module's folder  |
| `website` | `specs/website/**/*.spec.ts` | The production build served by `astro preview`, read by headless Chromium |

`make test` builds first: the website spec reads `dist/`, it never builds it.
The spec starts the preview itself, bound to `127.0.0.1` on a free port and
kept in the foreground — under an AI agent, Astro 7 would otherwise detach it
into a background server.

## Which test to write

The default is a website spec: the page met through its address, in a real
browser, against the production build. `specs/website/landing/home.spec.ts`
holds the page's whole outline, its head and its console. The outline is the
contract of the unconfigured build — the "Public preview coming later" status
and no link to an application, local or not — so the build the gate makes must
not set `PUBLIC_APP_URL`.

A module test is kept only for a pure algorithm whose edge cases no page reaches
cheaply. There is one:

| Module test | Why it is kept                                                                                          |
| ----------- | ------------------------------------------------------------------------------------------------------- |
| `app-link`  | Every refused destination — a script URL, localhost, credentials, plain HTTP — is a build no gate makes |

`make check` ends on the mutation verdict, which measures the module tests: the
website spec runs in Chromium, which the mutation run leaves out.

## What a review still covers

Layout is not asserted: review desktop and narrow-screen wrapping, keyboard
focus and anchor navigation in the running preview when changing the
stylesheet. The development link (`http://localhost:4320`) is proven by the
module test alone; no spec starts the development server.
