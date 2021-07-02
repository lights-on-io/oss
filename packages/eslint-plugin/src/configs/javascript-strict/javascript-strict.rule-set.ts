export default {
	/**
	 * Add or change javascript strict rules here.
	 * They are intended to be applied to ALL .js and .jsx files.
	 */

	'class-methods-use-this': 'off',
	'consistent-return': 'off',
	'default-case': 'off',
	'import/no-extraneous-dependencies': 'off', // handled by typescript
	'import/prefer-default-export': 'off', // not really a conflict, but against angular and nestjs style
	'no-console': 'error',
	'no-else-return': 'off',
	'no-restricted-imports': [
		'error',
		{ patterns: ['lodash', 'lodash/**', 'jquery', 'jquery/**', 'moment', 'moment/**'] },
	],

	// TODO:
	// - filename guidelines
};
