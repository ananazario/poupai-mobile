const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const path = require('path');

module.exports = defineConfig([
  ...expoConfig,
  {
    ignores: ['dist/*', 'node_modules/*'],
  },
  {
    settings: {
      'import/resolver': {
        typescript: {
          project: [
            path.join(__dirname, 'tsconfig.json'),
            path.join(__dirname, 'app', 'tsconfig.json')
          ],
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    rules: {
      'import/no-unresolved': 'error',
    },
  },
]);