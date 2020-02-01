[![Build Status](https://travis-ci.org/AdamLeBlanc/node-typescript-starter.svg?branch=master)](https://travis-ci.org/AdamLeBlanc/node-typescript-starter) [![Maintainability](https://api.codeclimate.com/v1/badges/da8badccf2b373343d92/maintainability)](https://codeclimate.com/github/AdamLeBlanc/node-typescript-starter/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/da8badccf2b373343d92/test_coverage)](https://codeclimate.com/github/AdamLeBlanc/node-typescript-starter/test_coverage)

# Starter Project For Node Typescript projects

This is a barebones starter for a nodejs project using typescript. It is made to give you the basic tools you need to get going on a greenfield application. It only intends to provide the bare basics setup that every projects of mine has. Which includes setting up basic CI, linting, editor configurations, language tools, etc.

### Provided

- eslint
- prettier
- editorconfig
- [jest](#jest)
- [typescript](#typescript)
- [travis-ci](#ci)
- [code-climate](#ci)

#### jest

Jest has been configured with [ts-jest](https://kulshekhar.github.io/ts-jest) so you can run your tests without compiling code between runs.

#### typescript

Includes [ts-node-dev](https://github.com/whitecolor/ts-node-dev) to make development easier. Restarts on file changes, and shares compliation between restarts. This ends up being faster than mixing node-dev with ts-node, or nodemon with ts-node to achieve the same effect because this method doesn't require ts-node to restart the compilation on every restart.

#### ci

Projects comes out of the box with [travis-ci](#https://travis-ci.org/) and [codeclimate](codeclimate.com), both of which are free for open source projects. To get everything to work you need to:

- Create a code climate account
- Create a travis ci account
- Add the repo you are working with to both
- Get the TEST REPORTER ID from code climate (found in repo settings, test coverage)
- Add an env variable called `CC_TEST_REPORT_ID` with the value from code climate to travis ci.

You should be good to go after that. You can enable and disable features on code climate under repo settings. Remember to grab badges from travis and code climate to put in your readme!
