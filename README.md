# LightsON Open-Source

This repository contains all Open-Source project maintained by [LightsON](https://lights-on.io).

## Projects

### eslint-plugin

The eslint-plugin project contains all eslint configurations and custom rules written at LightsON.

#### Lint

```bash
nx lint eslint-plugin
```

#### Test

```bash
nx test eslint-plugin
```

#### Build

```bash
nx build eslint-plugin
```

#### Version bump

> **TODO**: generate `CHANGELOG.md` containing _only_ changes `eslint-plugin` (currently running standard-version with `--skip.changelog` flag)

Generates current version using git history and updates the `version` field in `libs/eslint-plugin/package.json`.

```bash
nx version-bump eslint-plugin
```

#### Publish

⚠️ You have to be logged into `npmjs.com` in order to successfully publish this library. Remember to bump the version before publishing `nx version-bump eslint-plugin`.

```bash
nx publish eslint-plugin
```

#### Release

Combines `version-bump` and `publish`.

```bash
nx release eslint-plugin
```

#### Install inside this repository

```bash
nx install eslint-plugin
```
