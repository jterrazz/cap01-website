import { testing } from '@jterrazz/test/oxlint';
import { astro, compose, defineConfig } from '@jterrazz/typescript/oxlint';

export default defineConfig(compose(astro, testing));
