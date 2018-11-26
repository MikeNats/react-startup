module.exports = {
  'parser': 'typescript-eslint-parser',
  'parserOptions': {
      'ecmaVersion': 6,
      'sourceType': 'module',
      'ecmaFeatures': {
      'jsx': true,
      }
  },
  'plugins': [
      'react',
  ],  
  'rules': {
      'indent': ['error', 2],
  },
}
  