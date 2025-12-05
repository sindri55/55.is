module.exports = {
  apps: [
    {
      name: '55is',
      script: './server.js',
      cwd: process.env.APP_DIR || '.',
      env: {
        NODE_ENV: 'production',
        HOSTNAME: '0.0.0.0',
        PORT: process.env.PORT || '3000',
      },
    },
  ],
};
