/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */



const path = require('path')


// react-native >= 0.57



module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
}

