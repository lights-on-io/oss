module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'scope-enum': [
			2,
			'always',
			[
				'workspace',
				'eslint-plugin',
			],
		],
		'scope-empty': [2, 'never'],
	},
};
