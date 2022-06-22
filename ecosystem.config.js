module.exports = {
  apps: [
    {
      name: "app",
      script: "./.next/standalone/server.js",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
