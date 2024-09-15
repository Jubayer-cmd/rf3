// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { assetExts, sourceExts } = config.resolver;
  config.resolver.assetExts = [...assetExts, 'glb', 'gltf', 'png', 'jpg'];

  config.resolver.sourceExts = [
    ...sourceExts,
    'jsx',
    'js',
    'ts',
    'tsx',
    'cjs',
    'json',
  ];

  config.transformer.babelTransformerPath = require.resolve(
    'react-native-svg-transformer'
  );

  return config;
})();
