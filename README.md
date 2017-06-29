# eslint-config-react-native-prettier

Extends the following plugins and adds configuration that works well
with React Native:

```
plugin:flowtype/recommended
plugin:react/recommended
plugin:import/errors
plugin:import/warnings
prettier
prettier/flowtype
prettier/react
```

## Set it up

### 1. Install the package (& ESLint)

```
npm i eslint-config-react-native-prettier --save-dev

 # or

yarn add -D eslint-config-react-native-prettier
```

If you don't have eslint installed on your project already, install that
too:

```
npm i eslint --save-dev

 # or

yarn add -D eslint
```

### 2. Configure your project to use it

Create `.eslintrc` in your project root, and put this in it:

```json
{
  "extends": [
    "react-native-prettier"
  ]
}
```

Feel free to customize further as you would in other ESLint configs.

### 3. Add scripts

In `package.json`, you might want to add a couple of useful scripts:

```json
"scripts": {
  "lint": "eslint .",
  "prettier": "eslint . --fix"
},
```

### 4. Configure your editor

I use Visual Studio Code along with the [vscode-eslint extension from
Microsoft](https://github.com/Microsoft/vscode-eslint). I personally
prefer disabling autofix on save and instead setting up a keyboard
shortcut for formatting.
