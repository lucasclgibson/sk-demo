// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  devOptions: {
    port: 8081
  },
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018',
  },
  routes: [
    {
      match: 'routes',
      src: '.*',
      dest: '/index.html',
    },
  ],
  mount: {
    public: '/',
  },
  plugins: [
    '@snowpack/plugin-postcss'
  ],
};