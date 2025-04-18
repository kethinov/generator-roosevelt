/* eslint-env mocha */
const yeomanTest = require('yeoman-test')
const helpers = new yeomanTest.YeomanTest()
const path = require('path')
const assert = require('assert')
const fs = require('fs')

describe('Generator Prompts', async function () {
  describe('Templating Engine', function () {
    it('should use multiple view engines and templating extensions', async function () {
      const runner = await helpers
        .create(path.join(__dirname, '../../generators/app'))
        .withAnswers({
          configMode: 'Custom app',
          customAppVariant: 'MPA — multi-page app (recommended for most apps)',
          templatingEngine: true,
          templatingEngineName1: 'test1',
          templatingExtension1: 'html1',
          additionalTemplatingEngines1: true,
          templatingEngineName2: 'test2',
          templatingExtension2: 'html2',
          additionalTemplatingEngines2: true,
          templatingEngineName3: 'test3',
          templatingExtension3: 'html3',
          additionalTemplatingEngines3: false
        })
        .run()

      // this fun line ensures that the runner context is looking at the folder the app got generated in
      runner.cwd += '/my-roosevelt-sample-app'

      runner.assertJsonFileContent('rooseveltConfig.json', {
        viewEngine: ['html1: test1', 'html2: test2', 'html3: test3']
      })
    })
  })

  describe('HTTPS Ports', function () {
    it('should set the HTTPS Port to a custom port', async function () {
      const runner = await helpers
        .create(path.join(__dirname, '../../generators/app'))
        .withAnswers({
          configMode: 'Custom app',
          customAppVariant: 'MPA — multi-page app (recommended for most apps)',
          enableHTTPS: true,
          httpsPortNumber: 'Custom',
          customHttpsPort: 1234
        })
        .run()

      // this fun line ensures that the runner context is looking at the folder the app got generated in
      runner.cwd += '/my-roosevelt-sample-app'

      runner.assertJsonFileContent('rooseveltConfig.json', {
        https: {
          port: 1234
        }
      })
    })

    it('should set the HTTPS Port to a random port', async function () {
      const runner = await helpers
        .create(path.join(__dirname, '../../generators/app'))
        .withAnswers({
          configMode: 'Custom app',
          customAppVariant: 'MPA — multi-page app (recommended for most apps)',
          enableHTTPS: true,
          httpsPortNumber: 'Random'
        })
        .run()

      // this fun line ensures that the runner context is looking at the folder the app got generated in
      runner.cwd += '/my-roosevelt-sample-app'

      const data = fs.readFileSync(path.join(runner.cwd, 'rooseveltConfig.json'))
      const jsonData = JSON.parse(data)
      assert.strictEqual(typeof jsonData.https.port, 'number')
    })
  })

  it('should set the CSS preprocessor to SASS', async function () {
    const runner = await helpers
      .create(path.join(__dirname, '../../generators/app'))
      .withAnswers({
        configMode: 'Custom app',
        customAppVariant: 'MPA — multi-page app (recommended for most apps)',
        cssCompiler: 'Sass'
      })
      .run()

    // this fun line ensures that the runner context is looking at the folder the app got generated in
    runner.cwd += '/my-roosevelt-sample-app'

    runner.assertJsonFileContent('rooseveltConfig.json', {
      css: {
        compiler: {
          module: 'sass'
        }
      }
    })

    runner.assertFile('statics/css/styles.scss')
  })

  describe('Statics', function () {
    it('should set the CSS preprocessor to SASS', async function () {
      const runner = await helpers
        .create(path.join(__dirname, '../../generators/app'))
        .withAnswers({
          configMode: 'Custom app',
          customAppVariant: 'MPA — multi-page app (recommended for most apps)',
          cssCompiler: 'Sass'
        })
        .run()

      // this fun line ensures that the runner context is looking at the folder the app got generated in
      runner.cwd += '/my-roosevelt-sample-app'

      runner.assertJsonFileContent('rooseveltConfig.json', {
        css: {
          compiler: {
            module: 'sass'
          }
        }
      })

      runner.assertFile('statics/css/styles.scss')
    })

    it('should set the CSS preprocessor to LESS', async function () {
      const runner = await helpers
        .create(path.join(__dirname, '../../generators/app'))
        .withAnswers({
          configMode: 'Custom app',
          customAppVariant: 'MPA — multi-page app (recommended for most apps)',
          cssCompiler: 'Less'
        })
        .run()

      // this fun line ensures that the runner context is looking at the folder the app got generated in
      runner.cwd += '/my-roosevelt-sample-app'

      runner.assertJsonFileContent('rooseveltConfig.json', {
        css: {
          compiler: {
            module: 'less'
          }
        }
      })

      runner.assertFile('statics/css/styles.less')
    })

    it('should set the CSS preprocessor to Stylus', async function () {
      const runner = await helpers
        .create(path.join(__dirname, '../../generators/app'))
        .withAnswers({
          configMode: 'Custom app',
          customAppVariant: 'MPA — multi-page app (recommended for most apps)',
          cssCompiler: 'Stylus'
        })
        .run()

      // this fun line ensures that the runner context is looking at the folder the app got generated in
      runner.cwd += '/my-roosevelt-sample-app'

      runner.assertJsonFileContent('rooseveltConfig.json', {
        css: {
          compiler: {
            module: 'stylus'
          }
        }
      })

      runner.assertFile('statics/css/styles.styl')
    })

    it('should set the CSS preprocessor to none', async function () {
      const runner = await helpers
        .create(path.join(__dirname, '../../generators/app'))
        .withAnswers({
          configMode: 'Custom app',
          customAppVariant: 'MPA — multi-page app (recommended for most apps)',
          cssCompiler: 'none'
        })
        .run()

      // this fun line ensures that the runner context is looking at the folder the app got generated in
      runner.cwd += '/my-roosevelt-sample-app'

      runner.assertJsonFileContent('rooseveltConfig.json', {
        css: {
          compiler: {
            enable: false,
            module: 'none'
          }
        }
      })

      runner.assertFile('statics/css/styles.css')
    })

    it('should setup a default webpack config', async function () {
      const runner = await helpers
        .create(path.join(__dirname, '../../generators/app'))
        .withAnswers({
          configMode: 'Custom app',
          customAppVariant: 'MPA — multi-page app (recommended for most apps)',
          webpack: true
        })
        .run()

      // this fun line ensures that the runner context is looking at the folder the app got generated in
      runner.cwd += '/my-roosevelt-sample-app'

      runner.assertJsonFileContent('rooseveltConfig.json', {
        js: {
          webpack: {
            enable: true,
            bundles: [
              {
                config: {
                    entry: '${js.sourcePath}/main.js', // eslint-disable-line
                  output: {
                      path: '${publicFolder}/js' // eslint-disable-line
                  },
                  resolve: {
                    modules: [
                        '${js.sourcePath}', // eslint-disable-line
                        '${buildFolder}/js', // eslint-disable-line
                        '${appDir}', // eslint-disable-line
                      'node_modules'
                    ]
                  }
                }
              }
            ]
          }
        }
      })
    })

    it('should disable webpack when set to off', async function () {
      const runner = await helpers
        .create(path.join(__dirname, '../../generators/app'))
        .withAnswers({
          configMode: 'Custom app',
          customAppVariant: 'MPA — multi-page app (recommended for most apps)',
          webpack: false
        })
        .run()

      // this fun line ensures that the runner context is looking at the folder the app got generated in
      runner.cwd += '/my-roosevelt-sample-app'

      runner.assertJsonFileContent('rooseveltConfig.json', {
        js: {
          webpack: {
            enable: false,
            bundles: []
          }
        }
      })
    })
  })
})
