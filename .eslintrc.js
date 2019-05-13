module.exports = {
  extends: [
    "react-app",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": ["error"],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowTypedFunctionExpressions: true
      }
    ]
  }
  // [
  //   "eslint:recommended",
  //   "plugin:react/recommended",
  //   "plugin:@typescript-eslint/recommended",
  //   "prettier/@typescript-eslint",
  //   "plugin:prettier/recommended"
  // ],
  // "plugins": ["react", "@typescript-eslint", "prettier"],
  // "env": {
  //   "browser": true,
  //   "jasmine": true,
  //   "jest": true
  // },
  // "rules": {
  //   "prettier/prettier": ["error"],
  //   "@typescript-eslint/explicit-function-return-type": ["error", {
  //     "allowTypedFunctionExpressions": true
  //   }],
  // },
  // "settings": {
  //   "react": {
  //     "pragma": "React",
  //     "version": "detect"
  //   }
  // },
  // "parser": "@typescript-eslint/parser"
};

/* 
devDependencies: {
    "@typescript-eslint/eslint-plugin": "^1.9.0",
    "@typescript-eslint/parser": "^1.9.0",
    "eslint": "^5.16.0",
    "eslint-config-prettier": "^4.2.0",
    "eslint-plugin-prettier": "^3.1.0",
    "prettier": "^1.17.0"
}
*/

/*
settings.json
{
  "editor.formatOnSave": true,
  "prettier.tslintIntegration": true,
  "breadcrumbs.enabled": true,
  "editor.minimap.enabled": false,
  // "editor.codeActionsOnSave": {
  //   "source.fixAll.tslint": true
  // },
  // "editor.fontFamily": "Operator Mono",
  "editor.fontLigatures": true,
  "editor.fontSize": 14,
  "terminal.integrated.fontSize": 14,
  "terminal.integrated.fontFamily": "Operator Mono",
  "workbench.colorTheme": "Night Owl",
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    { "language": "typescript", "autoFix": true },
    { "language": "typescriptreact", "autoFix": true }
  ],
}
*/
