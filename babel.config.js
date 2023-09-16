module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins:[
      ["module-resolver", {
        "alias": {
          "@navigation": "./src/navigation",
          "@components": "./src/components",
          "@screens": "./src/screens",
          "@assets": "./src/assets",
          "@theme": "./src/theme",
          "@hooks": "./src/hooks"
        },
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
        ]
      }],
    ]
  };
};
