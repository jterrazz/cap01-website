# Deploy

Deploy the static contents of `dist/` after a successful `make build`.

| Setting                       | Contract                                                               |
| ----------------------------- | ---------------------------------------------------------------------- |
| `npm run dev`                 | Development landing page at `http://localhost:4321`                    |
| Development CTA               | Links to the separately running web product at `http://localhost:4320` |
| `PUBLIC_APP_URL`              | Optional build-time HTTPS application address                          |
| No configured application URL | Shows “Public preview coming later”                                    |
| `npm run start`               | Local inspection of the production build on port 4321                  |

Production does not fall back to localhost. The link policy rejects malformed
URLs, non-HTTPS schemes, credentials and explicit localhost destinations. Set a
real public application URL only when the product is available, then rebuild.
The environment value is public configuration, not a secret.

No hosting target or production domain has been selected here. `astro preview`
is a local inspection command, not the production serving layer. The static
output can be served by the chosen host without a framework adapter or runtime.

The reusable GitHub validation workflow checks changes on main and pull
requests, with a cached Chromium for the website spec. Publishing and
deployment are not wired automatically.
