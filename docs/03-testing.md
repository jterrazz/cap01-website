# Testing

Checks protect the deployment boundary and validate the actual Astro templates.

| Check           | Evidence                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `npm test`      | Development-only local CTA, explicit HTTPS production destination, rejected invalid destinations |
| `npm run lint`  | Ecosystem checks, Astro template type checks and template formatting                             |
| `npm run build` | A static page that can be hosted without a Node server                                           |

The link policy is a pure module, so its tests sit beside it as
`app-link.test.ts`. Since `@jterrazz/test` 16 the suffix IS the kind: `.test.ts`
beside the code it specifies, `.spec.ts` only under a `specs/` folder, which a
site with nothing assembled to start has no need for. There is no stateful
browser journey
on this landing page, so a browser automation server is not added solely to test
native anchors. Review desktop and narrow-screen wrapping, keyboard focus and
anchor navigation in the running preview when changing layout.

Without `PUBLIC_APP_URL`, the production output must contain an unavailable
status and must not contain the development application link. The development
preview intentionally exposes the local product link.
