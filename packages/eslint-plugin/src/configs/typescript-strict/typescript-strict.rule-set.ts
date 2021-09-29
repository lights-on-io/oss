import banTsCommentOptions from './options/ban-ts-comment.options';
import banTypesOptions from './options/ban-types.options';
// import dotNotationOptions from './options/dot-notation.options';
import explicitFunctionReturnTypeOptions from './options/explicit-function-return-type.options';
import explicitMemberAccessabilityOptions from './options/explicit-member-accessibility.options';
import indentOptions from './options/indent.options';
import memberDelimiterOptions from './options/member-delimiter-style.options';
import memberOrderingOptions from './options/member-ordering.options';
import { options as namingConventionOptions } from './options/naming-convention.options';
import noExtraParensOptions from './options/no-extra-parens.options';
import noExtraneousClassOptions from './options/no-extraneous-class.options';
import noMagicNumbersOptions from './options/no-magic-numbers.options';
import noTypeAliasOptions from './options/no-type-alias.options';
import noUnnecessaryBooleanLiteralComprareOptions from './options/no-unnecessary-boolean-literal-compare.options';
import noUnusedExpressionsOptions from './options/no-unused-expressions.options';
import noUnusedVarsOptions from './options/no-unused-vars.options';
import noUseBeforeDefineOptions from './options/no-use-before-define.options';
// import preferReadonlyParameterTypesOptions from './options/prefer-readonly-parameter-types.options');
import promiseFunctionAsyncOptions from './options/promise-function-async.options';
import restrictTemplateExpressionsOptions from './options/restrict-template-expressions.options';
import spaceBeforeFunctionParenOptions from './options/space-before-function-paren.options';
import strictBooleanExpressionsOptions from './options/strict-boolean-expressions.options';
import typeAnnotationSpacingOptions from './options/type-annotation-spacing.options';

export default {
	/**
	 *  js rules which have to be turned off due to conflicts
	 *  in combination with certain typescript rules
	 */
  'curly': ['error'],
	'brace-style': 'off', // replaced by @typescript-eslint/brace-style
	'comma-spacing': 'off', // replaced by @typescript-eslint/comma-spacing
	'default-param-last': 'off', // replaced by @typescript-eslint/default-param-last
	'dot-notation': 'off', // replaced by @typescript-eslint/dot-notation
	'func-call-spacing': 'off', // replaced by @typescript-eslint/func-call-spacing
	'indent': 'off', // replaced by @typescript-eslint/indent
	'init-declarations': 'off', // replaced by @typescript-eslint/init-declarations
	'keyword-spacing': 'off', // replaced by @typescript-eslint/keyword-spacing
	'lines-between-class-members': 'off', // replaced by @typescript-eslint/lines-between-class-members
	'no-array-constructor': 'off', // replaced by @typescript-eslint/no-array-constructor
	'no-dupe-class-members': 'off', // replaced by @typescript-eslint/no-dupe-class-members
	'no-empty-function': 'off', // replaced by @typescript-eslint/no-empty-function
	'no-extra-parens': 'off', // replaced by @typescript-eslint/no-extra-parens
	'no-extra-semi': 'off', // replaced by @typescript-eslint/no-extra-semi
	'no-invalid-this': 'off', // replaced by @typescript-eslint/no-invalid-this
	'no-loss-of-precision': 'off', // replaced by @typescript-eslint/no-loss-of-precision
	'no-magic-numbers': 'off', // replaced by @typescript-eslint/no-magic-numbers
	'no-return-await': 'off', // replaced by @typescript-eslint/return-await
	'no-shadow': 'off', // replaced by @typescript-eslint/no-shadow
	'no-tabs': 'off', // conflicts @typescript-eslint/indent with tabs
	'no-underscore-dangle': 'off', // conflicts with @typescript-eslint/naming-convention
	'no-unused-expressions': 'off', // replaced by @typescript-eslint/no-unused-expressions
	'no-unused-vars': 'off', // replaced by @typescript/no-unused-vars
	'no-use-before-define': 'off', // replaced by @typescript-eslint/no-use-before-define
	'no-useless-constructor': 'off', // replaced by @typescript-eslint/no-useless-constructor
	'quotes': 'off', // replaced by @typescript-eslint/quotes
	'require-await': 'off', // replaced by @typescript-eslint/require-await
	'semi': 'off', // replaced by @typescript-eslint/semi
	'typedef': 'off', // replaced by @typescript-eslint/typedef

	/**
	 * Add or change typescript strict rules here.
	 * They are intended to be applied to ALL .ts and .tsx files.
	 */
	'@typescript-eslint/adjacent-overload-signatures': 'error',
	'@typescript-eslint/array-type': ['error', { default: 'array-simple', readonly: 'array-simple' }],
	'@typescript-eslint/await-thenable': 'error',
	'@typescript-eslint/ban-ts-comment': ['error', banTsCommentOptions],
	'@typescript-eslint/ban-tslint-comment': 'error',
	'@typescript-eslint/ban-types': ['error', banTypesOptions],
	'@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],
	'@typescript-eslint/class-literal-property-style': ['error', 'fields'],
	'@typescript-eslint/comma-spacing': ['error', { before: false, after: true }],
	'@typescript-eslint/consistent-type-assertions': [
		'error',
		{ assertionStyle: 'as', objectLiteralTypeAssertions: 'allow' },
	],
	'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
	'@typescript-eslint/default-param-last': 'error',
	'@typescript-eslint/dot-notation': 'off', // this rule throws false `.catch is a syntax error` error as of right now - temporary disabled
	'@typescript-eslint/explicit-function-return-type': ['error', explicitFunctionReturnTypeOptions],
	'@typescript-eslint/explicit-member-accessibility': ['error', explicitMemberAccessabilityOptions],
	'@typescript-eslint/func-call-spacing': 'error',
	'@typescript-eslint/indent': ['error', 'tab', indentOptions],
	'@typescript-eslint/init-declarations': ['error', 'always'],
	'@typescript-eslint/keyword-spacing': ['error', { before: true, after: true }],
	'@typescript-eslint/lines-between-class-members': [
		'error',
		'allways',
		{ exceptAfterSingleLine: false, exceptAfterOverload: true },
	],
	'@typescript-eslint/member-delimiter-style': ['error', memberDelimiterOptions],
	'@typescript-eslint/member-ordering': ['error', memberOrderingOptions],
	'@typescript-eslint/method-signature-style': ['error', 'property'],
	'@typescript-eslint/naming-convention': ['warn', ...namingConventionOptions],
	'@typescript-eslint/no-array-constructor': 'error',
	'@typescript-eslint/no-base-to-string': ['error', { ignoredTypeNames: [] }],
	'@typescript-eslint/no-confusing-non-null-assertion': 'error',
	'@typescript-eslint/no-dupe-class-members': 'error',
	'@typescript-eslint/no-dynamic-delete': 'error',
	'@typescript-eslint/no-empty-function': ['error', { allow: ['constructors'] }],
	'@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],
	'@typescript-eslint/no-explicit-any': ['error', { fixToUnknown: false, ignoreRestArgs: false }],
	'@typescript-eslint/no-extra-non-null-assertion': ['error'],
	'@typescript-eslint/no-extra-parens': ['error', 'all', noExtraParensOptions],
	'@typescript-eslint/no-extra-semi': 'error',
	'@typescript-eslint/no-extraneous-class': ['error', noExtraneousClassOptions],
	'@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: false, ignoreIIFE: false }],
	'@typescript-eslint/no-for-in-array': 'error',
	'@typescript-eslint/no-implied-eval': 'error',
	'@typescript-eslint/no-inferrable-types': ['error', { ignoreParameters: true, ignoreProperties: true }],
	'@typescript-eslint/no-invalid-this': ['error', { capIsConstructor: false }],
	'@typescript-eslint/no-invalid-void-type': ['error', { allowInGenericTypeArguments: true }],
	'@typescript-eslint/no-loss-of-precision': 'error',
	'@typescript-eslint/no-magic-numbers': ['error', noMagicNumbersOptions],
	'@typescript-eslint/no-misused-new': 'error',
	'@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: true, checksConditionals: true }],
	'@typescript-eslint/no-namespace': ['error', { allowDeclarations: false, allowDefinitionFiles: true }],
	'@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
	'@typescript-eslint/no-non-null-assertion': 'error',
	'@typescript-eslint/no-parameter-properties': ['error', { allows: ['private readonly'] }],
	'@typescript-eslint/no-require-imports': 'error',
	'@typescript-eslint/no-shadow': ['error'],
	'@typescript-eslint/no-this-alias': ['error', { allowDestructuring: false, allowedNames: [] }],
	'@typescript-eslint/no-throw-literal': 'error',
	'@typescript-eslint/no-type-alias': ['error', noTypeAliasOptions],
	'@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error', noUnnecessaryBooleanLiteralComprareOptions],
	'@typescript-eslint/no-unnecessary-condition': ['error', { allowConstantLoopConditions: false }],
	'@typescript-eslint/no-unnecessary-qualifier': 'error',
	'@typescript-eslint/no-unnecessary-type-arguments': 'error',
	'@typescript-eslint/no-unnecessary-type-assertion': ['error', { typesToIgnore: [] }],
	'@typescript-eslint/no-unsafe-assignment': 'error',
	'@typescript-eslint/no-unsafe-call': 'error',
	'@typescript-eslint/no-unsafe-member-access': 'error',
	'@typescript-eslint/no-unsafe-return': 'error',
	'@typescript-eslint/no-unused-expressions': ['error', noUnusedExpressionsOptions],
	// '@typescript-eslint/no-unused-vars-experimental': ['error', {}],
	'@typescript-eslint/no-unused-vars': ['error', noUnusedVarsOptions],
	'@typescript-eslint/no-use-before-define': ['error', noUseBeforeDefineOptions],
	'@typescript-eslint/no-useless-constructor': 'error',
	'@typescript-eslint/no-var-requires': 'error',
	'@typescript-eslint/prefer-as-const': 'error',
	'@typescript-eslint/prefer-for-of': 'error',
	'@typescript-eslint/prefer-function-type': 'error',
	'@typescript-eslint/prefer-includes': 'error',
	'@typescript-eslint/prefer-namespace-keyword': 'off', // using @typescript-eslint/no-namespace
	'@typescript-eslint/prefer-nullish-coalescing': [
		'error',
		{ ignoreConditionalTests: true, ignoreMixedLogicalExpressions: true },
	],
	'@typescript-eslint/prefer-optional-chain': 'error',
	// as of right now `@typescript-eslint/prefer-readonly-parameter-types` conflicts with the typescript compiler:
	// `'readonly' type modifier is only permitted on array and tuple literal types.ts(1354)`
	'@typescript-eslint/prefer-readonly-parameter-types': 'off',
	'@typescript-eslint/prefer-readonly': ['error', { onlyInlineLambdas: false }],
	'@typescript-eslint/prefer-reduce-type-parameter': 'error',
	'@typescript-eslint/prefer-regexp-exec': 'error',
	'@typescript-eslint/prefer-string-starts-ends-with': 'error',
	'@typescript-eslint/prefer-ts-expect-error': 'error',
	'@typescript-eslint/promise-function-async': ['error', promiseFunctionAsyncOptions],
	'@typescript-eslint/quotes': ['error', 'single', { avoidEscape: false, allowTemplateLiterals: true }],
	'@typescript-eslint/require-array-sort-compare': ['error', { ignoreStringArrays: true }],
	'@typescript-eslint/require-await': 'error',
	'@typescript-eslint/restrict-plus-operands': ['error', { checkCompoundAssignments: true }],
	'@typescript-eslint/restrict-template-expressions': ['error', restrictTemplateExpressionsOptions],
	'@typescript-eslint/return-await': ['error', 'always'],
	'@typescript-eslint/semi': ['error', 'always', { omitLastInOneLineBlock: true }],
	'@typescript-eslint/space-before-function-paren': ['error', spaceBeforeFunctionParenOptions],
	'@typescript-eslint/strict-boolean-expressions': ['error', strictBooleanExpressionsOptions],
	'@typescript-eslint/switch-exhaustiveness-check': ['error'],
	'@typescript-eslint/triple-slash-reference': ['error', { path: 'never', types: 'never', lib: 'never' }],
	'@typescript-eslint/type-annotation-spacing': ['error', typeAnnotationSpacingOptions],
	'@typescript-eslint/typedef': 'off',
	'@typescript-eslint/unbound-method': ['error', { ignoreStatic: false }],
	'@typescript-eslint/unified-signatures': 'error',
};
