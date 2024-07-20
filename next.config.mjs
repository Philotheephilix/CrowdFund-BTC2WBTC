// next.config.mjs
export default {
    webpack: (config, { isServer }) => {
      config.experiments = {
        asyncWebAssembly: true,
        syncWebAssembly: true,
        layers: true, // Enable layers experiment
      };
  
      config.module.rules.push({
        test: /\.wasm$/,
        type: "webassembly/async",
      });
  
      return config;
    },
  };
  
  