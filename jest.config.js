module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.js'],
  verbose: true,
  collectCoverageFrom: [
    'diagramas/**/*.puml',
    '!**/node_modules/**'
  ]
};
