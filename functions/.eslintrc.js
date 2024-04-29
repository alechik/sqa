module.exports = {
  env: {
    es6: true,
    node: true,
    mocha: true, // Agregado para los archivos .spec
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  extends: ['eslint:recommended', 'google'],
  rules: {
    'no-restricted-globals': ['error', 'name', 'length'],
    'prefer-arrow-callback': 'error',
    quotes: ['error', 'double', { allowTemplateLiterals: true }],
  },
  overrides: [
    {
      files: ['**/*.spec.*'],
      rules: {}, // No se aplican reglas adicionales a los archivos de prueba
    },
  ],
  globals: {}, // Aquí puedes declarar tus variables globales si es necesario
};
