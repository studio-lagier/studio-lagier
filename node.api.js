export default pluginOptions => ({
  webpack: (config, { defaultLoaders }) => {
    for (const childLoader of defaultLoaders.cssLoader.loader) {
      if (childLoader.loader === "css-loader") {
        childLoader.options.import = false;
        // TODO: Better error reporting
        // TODO: Upgrade css-loader used by react-static
      }

      // TODO: Plugin for customizing these loaders
      if (childLoader.loader === "postcss-loader") {
        childLoader.options.plugins = [
          ...childLoader.options.plugins(),
          require("postcss-import"),
          require("tailwindcss"),
          require("autoprefixer"),
        ];
      }
    }

    config.module.rules = [
      {
        oneOf: Object.values(defaultLoaders),
      },
    ];

    return config;
  },
});
