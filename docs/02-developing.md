# Developing

Use npm with Node 24 and the committed lockfile.

| Command       | Purpose                                        |
| ------------- | ---------------------------------------------- |
| `npm ci`      | Install the locked dependencies                |
| `npm run dev` | Open the Astro development server on port 4321 |
| `make fix`    | Repair what a fixer may, across the whole tree |
| `make check`  | Run quality checks, tests and static build     |

`@jterrazz/typescript` is the one toolchain dependency, and `typescript check`
and `typescript fix` are the only two commands that reach it. The site names the
`astro` profile: `oxlint.config.ts` composes that profile with the testing
fragment, and `tsconfig.json` extends the profile's preset for the strict flags
and Astro's own for the file set it owns.

`astro check` and the `.astro` formatter run inside the same command — prettier
and its Astro plugin are the toolchain's dependencies, so this repository
declares no formatter of its own. oxfmt owns every other source and
configuration format.

Start content changes in the page, document changes in the layout and visual
changes in the stylesheet. Keep the system font and calm neutral palette.
The main title uses 24px; hierarchy comes from alignment, spacing and contrast.

Build output is `dist/`. Disposable caches live in `.artifacts/`; Astro also
owns its generated `.astro/` type declarations. Neither is committed.
