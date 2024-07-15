module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@assets": "./assets/",
            "@components": "./src/Components/",
            "@screens":"./src/screens/",
            "@hooks":"./src/hooks/",
            "@utils":"./src/utils/",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
