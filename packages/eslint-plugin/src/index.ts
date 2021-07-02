import typescriptStrictConfig from './configs/typescript-strict/typescript-strict.config';
import javascriptStrictConfig from './configs/javascript-strict/javascript-strict.config';

export const configs = {
	'javascript-strict': javascriptStrictConfig,
	'typescript-strict': typescriptStrictConfig,
};

export const rules = {
	// add custom rules located in the rules directory here.
	// for example, this is the implementation of nx `enforce-module-boundaries` rule:
	// https://github.com/nrwl/nx/blob/master/packages/eslint-plugin-nx/src/rules/enforce-module-boundaries.ts
};
