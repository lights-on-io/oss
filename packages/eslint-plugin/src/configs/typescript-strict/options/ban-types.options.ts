export default {
  types: {
    String: {
      message: 'Use string instead',
      fixWith: 'string',
    },
    Boolean: {
      message: 'Use boolean instead',
      fixWith: 'boolean',
    },
    Number: {
      message: 'Use number instead',
      fixWith: 'number',
    },
    Symbol: {
      message: 'Use symbol instead',
      fixWith: 'symbol',
    },
    Function: {
      message: [
        'The `Function` type accepts any function-like value.',
        'It provides no type safety when calling the function, which can be a common source of bugs.',
        'It also accepts things like class declarations, which will throw at runtime as they will not be called with `new`.',
        'If you are expecting the function to accept certain arguments, you should explicitly define the function shape.',
      ].join('\n'),
    },
    Object: {
      message: [
        'The `Object` type actually means "any non-nullish value", so it is marginally better than `unknown`.',
        '- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
        '- If you want a type meaning "any value", you probably want `unknown` instead.',
      ].join('\n'),
    },
    '{}': {
      message: [
        '`{}` actually means "any non-nullish value".',
        '- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
        '- If you want a type meaning "any value", you probably want `unknown` instead.',
      ].join('\n'),
    },
    object: {
      message: [
        'The `object` type is currently hard to use ([see this issue](https://github.com/microsoft/TypeScript/issues/21732)).',
        'Consider using `Record<string, unknown>` instead, as it allows you to more easily inspect and use the keys.',
      ].join('\n'),
    },
  }
}
