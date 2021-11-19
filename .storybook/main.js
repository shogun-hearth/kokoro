module.exports = {
  stories: ['../src/**/*.stor@(y|ies).@(tsx|ts|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
    'storybook-addon-designs',
    '@storybook/addon-backgrounds'
  ],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true,
    reactDocgen: 'none',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  core: {
    builder: 'webpack5',
  },
};
