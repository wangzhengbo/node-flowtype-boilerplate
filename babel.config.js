/** @flow */

module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    ['@babel/plugin-transform-flow-strip-types'],
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: true,
      },
    ],
  ],
  env: {
    production: {
      comments: false,
      minified: true,
    },
  },
};
