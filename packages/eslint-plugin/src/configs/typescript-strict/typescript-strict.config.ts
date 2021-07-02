import javascriptStrictRuleSet from '../javascript-strict/javascript-strict.rule-set';
import typescriptStrictRuleSet from './typescript-strict.rule-set';

export default {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint'],
	extends: [
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'airbnb-typescript',
	],
	rules: { ...javascriptStrictRuleSet, ...typescriptStrictRuleSet },
	overrides: [
		{
			files: ['*.tsx'],
			rules: {
				'@typescript-eslint/no-unused-vars': 'off',
				'@typescript-eslint/no-unnecessary-condition': 'off',
			},
		},
		{
			files: ['*.spec.ts', '*.mock.ts'],
			rules: {
				'@typescript-eslint/no-magic-numbers': 'off',
				'@typescript-eslint/init-declarations': 'off',
			},
		},
	],
};
