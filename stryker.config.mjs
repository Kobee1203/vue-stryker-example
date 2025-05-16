// @ts-check
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  _comment:
    "This config was generated using 'stryker init'. Please see the guide for more information: https://stryker-mutator.io/docs/stryker-js/guides/vuejs",
  testRunner: 'vitest',
  // @ts-expect-error - The type of fileLogLevel is not assignable to the type of LogLevel
  fileLogLevel: 'trace',
  tempDirName: './stryker/.stryker-tmp',
  reporters: ['progress', 'clear-text', 'html'],
  htmlReporter: { fileName: './stryker/reports/mutation/mutation.html' },
  appendPlugins: ['./stryker/plugins/stryker-vue-ignore-plugin.js'],
  ignorers: ['vue'],
}
export default config
