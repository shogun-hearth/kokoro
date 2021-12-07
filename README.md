[![Netlify Status](https://api.netlify.com/api/v1/badges/97b786c8-8342-4962-bd67-c95cd0ae7d9c/deploy-status)](https://app.netlify.com/sites/hearth-kokoro/deploys)

# Kokoro | Hearth Design System

[Figma](https://www.figma.com/file/M7Z0RpYEQszVSWhAFs2yAe/Design-System?node-id=38%3A2) | [Notion](https://www.notion.so/gethearth/Kokoro-Hearth-s-Design-System-f925086806a24898897786379cbc17dc) |

Bootstrapped with [`tsdx`](https://github.com/jaredpalmer/tsdx), using the provided [`react-with-storybook`](https://github.com/jaredpalmer/tsdx/blob/master/templates/react-with-storybook/README.md) template. This repository maintains the component library for Hearth's web (and eventually mobile) app and overall style guide. Kokoro is meant to be an atomic design system.

---

## Getting started

<br />

[![Material UI v5](https://img.shields.io/badge/Material%20UI-v5-blue?style=for-the-badge)]((https://mui.com/))
[![React v17](https://img.shields.io/badge/react-v17-brightgreen?style=for-the-badge)]((https://reactjs.org/))
[![@emotion/react](https://img.shields.io/badge/%40emotion%2Freact-v11-ff69b4?style=for-the-badge)]((https://emotion.sh/docs/introduction))
[![TypeScript v4+](https://img.shields.io/badge/TypeScript-v4%2B-dodgerblue?style=for-the-badge)](https://www.typescriptlang.org/)

Clone this repository with `SSH`:
```
git clone git@github.com:shogun-hearth/kokoro.git
```

Install dependencies:
```
npm install
```

---

## Recommended workflows

The recommended workflow is to run TSDX in one terminal:

```bash
npm start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

Then run Storybook inside another terminal:

```bash
npm run storybook
```

This loads the stories from `./src/components`. A tab should automatically open with Storybook running, but if it doesn't, navigate to `localhost:6006`.

---

## Contributing

- Use named exports for all components that we want to surface as a part of the package
- Fill out the MDX template to ensure all components are well documented
- Add a unit test for each component added


## Bookkeeping

### Jest

Jest tests are set up to run with `npm test`, but no tests have been implemented _yet_.

### Continuous Integration

Deployed to Netlify on each push. Working on setting up a proper deployment policy.

