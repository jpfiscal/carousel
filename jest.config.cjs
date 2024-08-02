// jest.config.js
module.exports = {
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest', // Transform JS and JSX files with Babel
  },
  testEnvironment: 'jest-environment-jsdom', // Use jsdom environment
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy' // Mock style imports
  },
  setupFilesAfterEnv: [require.resolve('@testing-library/jest-dom')], // Extend Jest with jest-dom
};
