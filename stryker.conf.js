module.exports = {
  packageManager: 'npm',
  reporters: ['clear-text', 'progress', 'dashboard', 'html'],
  testRunner: 'vitest',
  vitest: {
    dir: './src/'
  }
};
