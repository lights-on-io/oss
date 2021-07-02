const ALLOWED_BOOLEAN_PREFIXES = ['is', 'should', 'has', 'can', 'did', 'will'];
const ALLOWED_BOOLEAN_PREFIXES_PRIVATE = ALLOWED_BOOLEAN_PREFIXES.map((prefix) => `_${prefix}`);

export const options = [
	/**
	 *  case enforcements
	 */
	{
		selector: 'default',
		format: ['camelCase'],
	},
	{
		selector: 'default',
		modifiers: ['private'],
		format: ['camelCase'],
		leadingUnderscore: 'require',
	},
	{
		selector: 'variable',
		modifiers: ['const'],
		format: ['UPPER_CASE', 'camelCase'],
	},
	{
		selector: 'variable',
		modifiers: ['const', 'global'],
		format: ['UPPER_CASE'],
		types: ['boolean', 'string', 'number'],
	},
	{
		selector: 'parameter',
		format: ['camelCase'],
		leadingUnderscore: 'allow',
	},
	{
		selector: 'typeLike',
		format: ['PascalCase'],
	},
	{
		selector: 'enumMember',
		format: ['UPPER_CASE'],
	},

	/**
	 *  observables should allways end with an `$`
	 *
	 *  - note: sadly, this is not (yet) possible to enforce.
	 *          keeping this note as a remider.
	 */

	/**
	 *  generic type parameters should prefixed with `T`
	 */
	{
		selector: 'typeParameter',
		format: ['PascalCase'],
		prefix: ['T'],
	},

	/**
	 *  interfaces should not begin with an `I`
	 *
	 *  - note: we encouraged the use of the `I` prefix in earlier code bases
	 *          but are changing this philosophy now b.c. it has very few advantages.
	 *          this is also recommended by the typescript project and angular.
	 */
	{
		selector: 'interface',
		format: ['PascalCase'],
		custom: {
			regex: '^I[A-Z]',
			match: false,
		},
	},
];

export const optionsWithBooleanNamingConventions = [
	...options,

	/**
	 *  booleans should allways be prefixed with an allowed verb
	 *  NOTE: these are great in theory but generate a lot of noise
	 *        because libraries usually dont follow the same style.
	 */
	{
		selector: 'variable',
		types: ['boolean'],
		format: ['PascalCase'],
		prefix: ALLOWED_BOOLEAN_PREFIXES,
	},
	{
		selector: 'parameter',
		types: ['boolean'],
		format: ['PascalCase'],
		prefix: ALLOWED_BOOLEAN_PREFIXES,
	},
	{
		selector: 'property',
		types: ['boolean'],
		format: ['PascalCase'],
		prefix: ALLOWED_BOOLEAN_PREFIXES,
	},
	{
		selector: 'property',
		modifiers: ['private'],
		types: ['boolean'],
		format: ['PascalCase'],
		prefix: ALLOWED_BOOLEAN_PREFIXES_PRIVATE,
	},
	{
		selector: 'parameterProperty',
		types: ['boolean'],
		format: ['PascalCase'],
		prefix: ALLOWED_BOOLEAN_PREFIXES,
	},
	{
		selector: 'parameterProperty',
		modifiers: ['private'],
		types: ['boolean'],
		format: ['PascalCase'],
		prefix: ALLOWED_BOOLEAN_PREFIXES_PRIVATE,
	},
	{
		selector: 'accessor',
		types: ['boolean'],
		format: ['PascalCase'],
		prefix: ALLOWED_BOOLEAN_PREFIXES,
	},
];
