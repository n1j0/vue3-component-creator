# Contributing

> 👍🎉 First off, thanks for taking the time to contribute! 🎉👍

## Setup

- Clone this repo (`git clone https://github.com/jtpfa/vue3-component-creator`)
- Make sure you have `node` & `npm` installed locally
- `cd vue3-component-creator`
- Run `npm install` to get all dependencies installed
- Build the tool with `npm run build`

## Using the Tool

- Run `node ./lib/cjs/bin.js component new`

## Testing

A great PR, whether it includes a bug fix or a new feature, will often include tests. To write great tests, let us explain our test structure:

### Structure

The unit tests can be found in **tests**. Each file follows the pattern `*.test.(js|ts)`.

### Framework

Jest is used for the tests. You can use the interactive watch mode while creating or adjusting tests:
- `npm run test:watch`

## Pull requests

Please ensure all pull requests are made against the `main` branch on GitHub. See the
[Conventional Commits](https://conventionalcommits.org/) spec for commit and PR naming guidelines.

Examples:

- `fix(cli): fixes some broken cli stuff`
- `feat(templates): add a vue-test-utils to test.ejs`


