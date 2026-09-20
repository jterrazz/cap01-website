# Developing

Use npm with Node 24 and the committed lockfile.

| Command       | Purpose                                        |
| ------------- | ---------------------------------------------- |
| `npm ci`      | Install the locked dependencies                |
| `npm run dev` | Open the Astro development server on port 4321 |
| `make fix`    | Repair what a fixer may, across the whole tree |
| `make check`  | Run quality checks, tests and static build     |

Two toolchain packages carry the conventions. `@jterrazz/typescript` is reached
by `typescript check` and `typescript fix` alone; `@jterrazz/test` supplies the
vitest preset `vitest.config.ts` names, the testing fragment `oxlint.config.ts`
composes, and the conventions checker that runs as one pass of `typescript
check`. The site names the `astro` profile, and `tsconfig.json` extends the
profile's preset for the strict flags and Astro's own for the file set it owns.

`astro check` and the `.astro` formatter run inside the same command — prettier
and its Astro plugin are the toolchain's dependencies, so this repository
declares no formatter of its own. oxfmt owns every other source and
configuration format.

Start content changes in the page, document changes in the layout and visual
changes in the stylesheet. Keep the system font and calm neutral palette.
The main title uses 24px; hierarchy comes from alignment, spacing and contrast.

Build output is `dist/`. Disposable caches live in `.artifacts/`; Astro also
owns its generated `.astro/` type declarations. Neither is committed.
