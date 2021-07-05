# ESlint Plugin

This plugin includes strict configs for javascript and typescript, which are used at [LightsON](https://lights-on.io/). It is based on [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) and [eslint-config-airbnb-typescript](https://www.npmjs.com/package/eslint-config-airbnb-typescript).

## Install

```bash
npm install --save-dev @lights-on-io/eslint-plugin
```

Install peer dependencies listed when executing the following command:

```bash
npm info @lights-on-io/eslint-plugin peerDependencies
```

Add `@lights-on-io` to the plugins in your `.eslintrc` and add the configs:

```json
{
	"plugins": ["@lights-on-io"],
	"overrides": [
		{
			"files": ["*.ts", "*.tsx"],
			"extends": ["plugin:@lights-on-io/typescript-strict"],
			"parserOptions": {
				"project": "./tsconfig.*?.json"
			}
		},
		{
			"files": ["*.js", "*.jsx"],
			"extends": ["plugin:@lights-on-io/javascript-strict"]
		}
	]
}
```

