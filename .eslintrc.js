module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "standard-with-typescript",
    "plugin:vue/vue3-essential"
  ],
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script",

      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    // eslint缺少ts类型检测，需要引入此扩展
    "parser": '@typescript-eslint/parser',
    "project": "./tsconfig.json"
  },
  "plugins": [
    "vue"
  ],
  "rules": {
  }
}
