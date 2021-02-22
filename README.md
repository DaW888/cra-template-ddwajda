# CRA template

> ddwajda (daw888)
> 
## Instalation

### `yarn create react-app --template ddwajda`

> if husky not working follow this commands
>
> `yarn remove husky`
>
> `yarn add husky@4.2.3 -D`

## Main packages

1. Dependencies
    - axios
    - react-router-dom
    - react-sweet-state
    - styled-components
2. Development Dependencies
    - prettier
    - husky
    - lint-staged
    - eslint
        - eslint-config-prettier
        - eslint-plugin-prettier
        - eslint-plugin-react

## package.json in template

```json
{
  "dependencies": {
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "axios": "^0.21.1",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.2",
    "react-sweet-state": "^2.5.2",
    "styled-components": "^5.2.1",
    "web-vitals": "^1.0.1"
  },
  "scripts": {
    "start": "BROWSER=none react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "prettier": "prettier \"src/**/*.{js,jsx,css}\"",
    "format": "yarn run prettier --write",
    "lint": "eslint template/src",
    "lint:fix": "yarn run lint --fix",
    "validate": "yarn run prettier --list-different && yarn run lint"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "**/*.{js,jsx,css}": [
      "yarn run format",
      "yarn run lint:fix",
      "yarn run validate",
      "git add ."
    ]
  },
  "devDependencies": {
    "eslint": "^7.20.0",
    "eslint-config-prettier": "^7.2.0",
    "eslint-plugin-prettier": "^3.3.1",
    "eslint-plugin-react": "^7.22.0",
    "husky": "^5.0.9",
    "lint-staged": "^10.5.4",
    "prettier": "^2.2.1"
  }
}
```

## Plugins

### Eslint Configuration

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2021,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "prettier"
  ],
  "rules": {
    "no-unused-vars": "warn",
    "prettier/prettier": "warn",
    "react/prop-types": "off",
    "no-console": "warn"
  }
}
```

### Prettier Configuration

```json
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true,
  "printWidth": 80,
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "arrowParens": "avoid",
  "jsxSingleQuote": true
}
```

## App.jsx

```jsx
import React from 'react';
import Main from './Views/Main/Main';
import GlobalStyles from './Style/Global/GlobalStyles';
import {ThemeProvider} from 'styled-components';
import {light} from './CONSTS/THEMES';

const App = () => {
    return (
        <ThemeProvider theme={light}>
            <GlobalStyles/>
            <Main/>
        </ThemeProvider>
    );
};

export default App;
```
