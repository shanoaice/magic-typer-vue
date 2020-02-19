module.exports = {
  entry: ['src/registerServiceWorker', 'src/index'],
  plugins: [
    {
      resolve: '@poi/plugin-pwa'
    }
  ],
  output: {
    publicUrl: process.env.GITHUB_ACTIONS ? '/magic-typer-vue/' : '/',
    html: {
      title: 'Magic Typer (Vue)'
    }
  }
}
