# TypeScript Template for Node

This is a template for TypeScript projects using [Node](https://nodejs.org/). It uses [TypeScript](https://www.typescriptlang.org/) for strict typing and compiling into JavaScript and [Nodemon](https://nodemon.io/) to automatically refresh the build when changes are made. It's set up to use [ESLint](https://eslint.org/) for linting and [Prettier](https://prettier.io/) for formatting.

## Getting Started

To get started, clone this repository and run `yarn install` or `npm install` to install the dependencies.

The information in `package.json` should be changed to reflect the details of your project.

## Scripts

The following scripts are available:

- `yarn build` or `npm run build` - Compiles the TypeScript files into JavaScript.
- `yarn start` or `npm run start` - Runs the compiled JavaScript files.
- `yarn dev` or `npm run dev` - Runs the TypeScript files directly using Nodemon.
- `yarn lint` or `npm run lint` - Runs ESLint on the TypeScript files.
- `yarn format` or `npm run format` - Runs Prettier on the TypeScript files.
- `yarn release:<major|minor|patch>` or `npm run release:<major|minor|patch>` - Formats and build the project then bumps the version number and creates a Git tag.
