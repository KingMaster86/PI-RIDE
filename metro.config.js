// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  // Menambahkan expo-router ke dalam resolver Metro
  config.resolver.extraNodeModules = {
    ...config.resolver.extraNodeModules,
    'expo-router': require.resolve('expo-router'),
  };

  return config;
})();
