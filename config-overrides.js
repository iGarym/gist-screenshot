const path = require('path');
const rewireLess = require('react-app-rewire-less');
const rewireAliases = require('react-app-rewire-aliases');
const { paths, injectBabelPlugin } = require('react-app-rewired');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

const resolve = dir => path.resolve(__dirname, `${paths.appSrc}/${dir}/`);

module.exports = (config, env) => {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
    config
  );

  config = rewireAliases.aliasesOptions({
    '@utils': resolve('utils'),
    '@styles': resolve('styles'),
    '@assets': resolve('assets'),
    '@components': resolve('components')
  })(config, env);

  config = rewireLess.withLoaderOptions({
    javascriptEnabled: true,
    modifyVars: {
      // less vars
      // '@primary-color': '#1890ff'
    }
  })(config, env);

  config.plugins.push(new MonacoWebpackPlugin());

  return config;
};
