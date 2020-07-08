
## Getting Started

- [Fork this repository](https://help.github.com/articles/fork-a-repo/)

- Clone the forked repository:

```sh
git clone https://github.com/<your username>/oscghana-website.git && cd oscghana-website
```

- Read the [Contributors Guide](https://github.com/oscghana/docs/blob/master/docs/contribute.md)

## Installation Guides

- Install the Gatsby CLI

```sh
npm install -g gatsby-cli
```

- Change directories into site folder in your computer

```sh
cd oscghana-website
```

- Create and checkout to a new branch for your features

```sh
git checkout -b about-us-component
```

- Start development server

```sh
npm run develop
```

*Gatsby will start a hot-reloading developments environment accessibles by default at localhost:8000*

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
git commit -m "commit messages"
```

## Format and lint

- See what ESLint and Prettier can fix

```sh
npm run analyze
```

- Run Prettier and ESLint with the --fix options

```sh
npm run fix
```
