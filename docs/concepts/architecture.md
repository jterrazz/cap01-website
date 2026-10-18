# Architecture

A static Astro page introduces cap01 without shipping a client framework.

| Part                     | Responsibility                                                 |
| ------------------------ | -------------------------------------------------------------- |
| `src/pages/index.astro`  | Public introduction, three principles and current availability |
| `src/layouts/site.astro` | Document metadata and accessible document shell                |
| `src/styles/site.css`    | Shared typography, colors, spacing and responsive layout       |
| `src/domain/app-link.ts` | Development versus production application-link policy          |

There are no React islands, client scripts, tracking calls, forms or backend
connections. Native anchors provide section navigation. The decorative orbit is
CSS, remains still and carries no product data. There is no container and no
composition root: the page calls the one policy module directly.

The page describes AI coaching as the direction of the product. The current
preview is a browser-local habit and journal workspace; mobile pairing and AI
coaching are not advertised as available. This repository does not own product
state, account handling or the mobile application.

## The destination link

The call to action is the one decision the page makes at build time.
`appLink(development, configured)` returns the local product address in
development, and in production the configured `PUBLIC_APP_URL` only when it is a
public HTTPS address, never a localhost and never one carrying credentials. Any
other value renders the "Public preview coming later" status instead of a link.
How an operator sets the address is [Deploy](../guides/deploy.md).
