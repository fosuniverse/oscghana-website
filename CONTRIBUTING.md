# Contributors Guide

Hey, there! 👋 We welcome all kinds of contributions, please feel free to contribute and/or ask questions.

## UI guide
- The design team have designed the [UI AND COMPONENTS](https://xd.adobe.com/view/46c10c27-2956-4d5f-43c0-a59e2d991194-30f0/) be sure to check them and develop accordinly.

## Tech Stacks

> A tech stack is the set of technologies an organization uses to build a web or mobile application. It is a combination of programming languages, frameworks, libraries, patterns, servers, design tools, and tools used by its developers.

- ⚛️ [Gatsby](https://gatsbyjs.org) [React + GraphQL + Webpack]: For building declarative component-centric UI and static websites
- 🖌️ [Tailwindcss](https://tailwindcss.com/): For building rapidly custom designs
- 💥 [PostCSS](https://postcss.org/): For transforming CSS with JavaScript
- ✨ [Prettier](https://prettier.io/) for automatic code formatting
- 📐 [ESLint](https://eslint.org/): For JavaScript linting
- 📦 [npm](https://www.npmjs.com/): For distributing JavaScript libraries
- 🗃️ [GitHub](https://github.com): Hosting service for version control
- 🚀 [Netlify](https://www.netlify.com/): For fast & continuous deployment


## Conventions

> Conventions include generic patterns that ensure that written code adheres to certain formatting conventions.

### Code

- Tabs or two-space indentation
- Use shorthand for conditional statements
- Always open braces on the same line as the previous statement and close braces on the same indent as the original function like so:

```js
function textComponent() {
  return {
    name: "OSCA"
  };
}
```

### Naming

- Constructor functions should use the TitleCase
- Variables, directories and methods should use the camelCase
- Variables or elements with multiple words should always use an underscore between words.

```js
const user_params = null;
```

- Private methods should start with a leading underscore to separate them from public methods

```js
const _inputType = inputType;
```

- Abbreviations should be avoided please to avoid confusion
- Comments should include enough information about what a part of code is supposed to do.

```js
// Define default props of the TextBox component
TextBox.defaultProps = {
  className: "",
  disabled: false,
  inputType: "text"
};
```

### Styling

This project uses the [BEM](https://en.bem.info) Methodology with camelCase style. Read the start guide [here](https://en.bem.info/methodology/quick-start/)

> BEM (Block, Element, Modifier) is a component-based approach to web development. The idea behind it is to divide the user interface into independent blocks

Naming Rules:

```css
blockName__elementName_modifierName_modifierValue
```

- Names are written in lowercase Latin letters.
- Each word inside a name begins with an uppercase letter.
- The block name defines the namespace for its elements and modifiers.
- The element name is separated from the block name by a double underscore (\_\_).
- The modifier name is separated from the block or element name by a single underscore (\_).
- The modifier value is separated from the modifier name by a single underscore (\_).
- For boolean modifiers, the value is not included in the name.

---
