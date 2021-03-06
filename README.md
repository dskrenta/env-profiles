# env-profiles
**Dead simple .env profile switching with yaml config**

[![https://nodei.co/npm/YOUR-MODULE-NAME.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/env-profiles.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/env-profiles)

Sample `env.yml` configuration
```
default:
  # comment...
  default: true

dev: 
  default: false
  dev: true
  foo: bar
```

Switch profiles
```
$ env-profiles default
Switched to the default profile

$ cat .env
default=true
```

When using custom profiles values are inherited from the default profile, then duplicates are overwritten by custom profile values
```
$ env-profiles dev
Switched to the dev profile

$ cat .env
default=false
dev=true
foo=bar
```

`env-profiles` looks for the `env.yml` configuration file and writes the `.env` file in your current working directory of execution.

**Don't forget to add `env.yml` to your `.gitignore`!**

## Install

The easiest way to use `env-profiles` is to install it globally as a Node command line program. Run the following command in Terminal:

```
$ npm install --global env-profiles
```

Or, you can install `env-profiles` locally, for use in a single project:

```
$ npm install --save-dev env-profiles
```
