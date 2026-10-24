# Develop

Use npm with Node 24 and the committed lockfile.

## The loop

| Command        | Purpose                                                                                                      |
| -------------- | ------------------------------------------------------------------------------------------------------------ |
| `make install` | Install the locked dependencies                                                                              |
| `npm run dev`  | Serve the development landing page at `http://localhost:4321`                                                |
| `make fix`     | Repair what a fixer may, across the whole tree                                                               |
| `make build`   | Write the static site into `dist/`                                                                           |
| `make test`    | Build, then `typescript test`: the module tests and the website spec, nothing on a tree already proven green |
| `make check`   | The gate: quality checks, the whole suite, the mutation verdict                                              |

In development the page links to the separately running web product at
`http://localhost:4320`. Under an AI agent, `npm run dev` and `npm run start`
start a background server and return: `npx astro dev stop` and
`npx astro preview stop` end it, and `status` finds one.

`npx playwright install chromium` once, before the website spec runs.

## The declaration

Two toolchain packages carry the conventions. `jterrazz.config.ts` declares the
site (kind `website`, platform `astro`) and lists the `test()` preset of
`@jterrazz/test`; it states no exception. Every other tool file is derived from
it: `oxlint.config.ts`, `oxfmt.config.ts`, `vitest.config.ts` and
`tsconfig.json` are the one-liners `make fix` writes, and `check` refuses any of
them saying more. A setting the site needs goes into `jterrazz.config.ts` with
its reason, never into a tool file.

`typescript check` runs `astro sync`, `astro check` over the templates and the
`.astro` formatter itself, so this repository declares no formatter and no knip
setting of its own. oxfmt owns every other source and configuration format.

## Where a change starts

Start content changes in the page, document changes in the layout and visual
changes in the stylesheet. Keep the system font and calm neutral palette.
The main title uses 24px; hierarchy comes from alignment, spacing and contrast.

Build output is `dist/`. Disposable caches live in `.artifacts/`; Astro also
owns its generated `.astro/` type declarations. Neither is committed.
