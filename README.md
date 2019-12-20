## Getting Started

- [Fork this repository](https://help.github.com/articles/fork-a-repo/)

- Clone the forked repository like so:

```sh
git clone https://github.com/<your username>/oscghana-website.git && cd oscghana-website
```

- Read the [Contributors Guide](https://github.com/oscghana/docs/blob/master/docs/contribute.md)

## Installation Guide

- Install the Gatsby CLI

```sh
npm install -g gatsby-cli
```

- Change directories into site folder

```sh
cd oscghana-website
```

- Create and checkout to a new branch for your feature

```sh
git checkout -b aboutus-component
```

- Start development server

```sh
npm run develop
```

*Gatsby will start a hot-reloading development environment accessible by default at localhost:8000*

- Create a production build

```sh
npm run build
```

*Gatsby will perform an optimized production build, generating static HTML and per-route JavaScript code bundles.*

- Serve the production build locally

```sh
npm run serve
```

*Gatsby starts a local HTML server for testing the built site. Remember to build the site using gatsby build before using this command.*

- Make Git commits

```sh
npm run commit
```

*We use the [commitizen command line utility](https://github.com/commitizen/cz-cli), you'll be prompted to fill out any required commit fields at commit time. You would not need to run `git commit` again.*

## Format and lint

- See what ESLint and Prettier can fix

```sh
npm run analyze
```

- Run Prettier and ESLint with the --fix option

```sh
npm run fix
```
