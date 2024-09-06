# Ra Micro NPM

A lightweight React library built with Vite that supports tree shaking, allowing users to import only the components and utility functions they need.

## Features

- **React Components**: Modular, reusable components.
- **Utility Functions**: Helper functions for various common tasks.
- **Tree Shaking**: Only the imported components and utilities are included in the final bundle.
- **Built with Vite**: Fast build times and optimized output.

## Installation

Install the package from npm:

```bash
npm install ra-micro-npm
```

You'll also need to have `react` and `react-dom` installed as peer dependencies:

```bash
npm install react react-dom
```

## Usage

### Importing Components

You can import and use individual components from the library. Here's an example:

```js
import { ComponentA } from "ra-micro-npm";

function App() {
  return (
    <div>
      <ComponentA />
    </div>
  );
}

export default App;
```

### Importing Utility Functions

You can also import and use utility functions:

```js
import { randomNumber, capitalize } from "ra-micro-npm";

console.log(randomNumber(1, 10)); // Generates a random number between 1 and 10
console.log(capitalize("hello world")); // Outputs: 'Hello world'
```

### Example of Full Import

If you need multiple components and utility functions, you can import them together:

```js
import { ComponentA, ComponentB, randomNumber, capitalize } from "ra-micro-npm";

function App() {
  console.log(randomNumber(10, 20)); // e.g., 15
  console.log(capitalize("vite is fast!")); // Outputs: 'Vite is fast!'

  return (
    <div>
      <ComponentA />
      <ComponentB />
    </div>
  );
}

export default App;
```

## Tree Shaking

This library is optimized for tree shaking. When you import specific components or utility functions, the rest of the library is excluded from your final bundle, reducing the size of your app.

To ensure tree shaking works in your project, make sure your bundler (e.g., Vite, Webpack) is properly configured to support it. For example, if using Webpack, ensure the `sideEffects` field in `package.json` is set to `false`:

```json
{
  "sideEffects": false
}
```

## Development

To develop or contribute to this library, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/ra-micro-npm.git
   cd ra-micro-npm
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the library:

   ```bash
   npm run build
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

## Build

To create a production build, run:

```bash
npm run build
```

This will generate a build in the `dist/` folder, including both UMD and ES module formats.

## Automated Versioning and Publishing

This library uses [standard-version](https://github.com/conventional-changelog/standard-version) to automate versioning, changelog generation, and npm publishing. Versioning follows [semantic versioning](https://semver.org/) based on commit messages.

### Version Bumping

The version in `package.json` is automatically bumped according to the nature of the changes in the codebase. `standard-version` analyzes the commit messages to determine the next version number.

You can specify the version bump manually using:

- **Patch** (`1.0.x`): For bug fixes or small updates that don’t affect the API.
- **Minor** (`1.x.0`): For new features that are backward-compatible.
- **Major** (`x.0.0`): For breaking changes that require changes in dependent code.

The following commit message conventions are used to determine the version:

- `fix`: Increments the **patch** version (e.g., `1.0.1`).
- `feat`: Increments the **minor** version (e.g., `1.1.0`).
- `BREAKING CHANGE`: Increments the **major** version (e.g., `2.0.0`).

### Publishing Process

The version bumping, changelog update, and publishing process are automated via GitHub Actions. When changes are pushed to the `main` branch:

1. **Version bump**: The version in `package.json` is automatically updated.
2. **Changelog**: A `CHANGELOG.md` file is generated or updated with the details of the release.
3. **Git tag**: A new version tag is created and pushed to the repository.
4. **Publish to npm**: The package is published to npm using the new version.

### Manual Releases

To trigger a release manually, run the following commands locally:

```bash
npm run release
git push --follow-tags
```

## Folder Structure

```bash
ra-micro-npm/
├── lib/
│   ├── components/
│   │   ├── ComponentA.jsx
│   │   ├── ComponentB.jsx
│   ├── utils/
│   │   ├── randomNumber.js
│   │   ├── capitalize.js
│   └── index.js
├── src/
├── dist/
├── package.json
├── vite.config.js
└── README.md
```

- **`src/components/`**: Contains React components.
- **`src/utils/`**: Contains utility functions.
- **`dist/`**: Contains the build output.
- **`vite.config.js`**: Vite configuration for building the library.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
