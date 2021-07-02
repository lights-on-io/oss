# @lights-on/eslint-plugin

This plugin includes strict configs for javascript and typescript, which are used at [LightsON](https://lights-on.io/). It is based on [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) and [eslint-config-airbnb-typescript](https://www.npmjs.com/package/eslint-config-airbnb-typescript).

## Install

```bash
npm install --save-dev @wwu/eslint-plugin
```

Install peer dependencies listed when executing the following command:

```bash
npm info @wwu/eslint-plugin peerDependencies
```

Add `@wwu` to the plugins in your `.eslintrc` and add the configs:

```json
{
	"plugins": ["@wwu"],
	"overrides": [
		{
			"files": ["*.ts", "*.tsx"],
			"extends": ["plugin:@wwu/typescript-strict"],
			"parserOptions": {
				"project": "./tsconfig.*?.json"
			}
		},
		{
			"files": ["*.js", "*.jsx"],
			"extends": ["plugin:@wwu/javascript-strict"]
		}
	]
}
```

