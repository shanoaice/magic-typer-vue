module.exports = {
  extends: [
    'xo',
    'xo-vue',
    'rem',
    'plugin:prettier/recommended',
    'prettier/vue'
  ],
  plugins: [
    'prettier',
    'unicorn',
    'vue',
    'import'
  ],
  env: {
    browser: true
  }
}
