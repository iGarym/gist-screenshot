const rewireLess = require('react-app-rewire-less');
const { injectBabelPlugin } = require('react-app-rewired');

module.exports = (config, env) => {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
    config
  );
  config = rewireLess.withLoaderOptions({
    javascriptEnabled: true,
    modifyVars: {
      // less vars
      // '@primary-color': '#1890ff'
    }
  })(config, env);
  return config;
};
