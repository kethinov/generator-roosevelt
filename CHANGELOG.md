This project's versioning tracks Roosevelt's versioning. When some version numbers are skipped, it's because the generator was not updated for that version of Roosevelt.

## 0.30.3

- Improved default webpack bundle boilerplate.
- Updated dependencies.

## 0.30.2

- Added the public folder to `standard`'s ignore list.
- Updated dependencies.

## 0.30.1

- Fixed a bug when generating static sites.
- Updated dependencies.

## 0.30.0

- Added `standard-mpa-install`, `standard-static-install`, and `standard-spa-install` CLI flags.
- Added a demonstration of a global model for static sites.
- Added more favicon PNG files.
- Fixed a bug that caused favicon.ico to be placed in the wrong folder in static site generator mode.
- Updated dependencies.

## 0.29.4

- Fixed a bug with the default helpers CSS file.
- Updated dependencies.

## 0.29.3

- Fixed a bug that could cause customizing an app to skip some user selections.
- Added tilda `~` to http-server dependency.

## 0.29.2

- Fixed a bug that caused the "development mode" label to show up inappropriately when the generator is not in development mode.

## 0.29.1

- Added new static site generator app option.
- Added new single page app option.
- Added some sugar for developers hacking on this module:
  - Added a script that lets developers run the generator from within the clone: `node run-generator.js`
  - Added an end-to-end test suite.
- Altered default output to `await` the startServer call.
- Fixed a bug causing chaotic formatting of JSON files.
- Fixed a bug if you generate a sample app with no templating system. Also made the sample plain HTML template consistent with the Teddy variant as well.
- Refactored lots of stuff to improve maintainability.
- Updated dependencies.

## 0.29.0

- Refactored sample app to account for breaking changes in Roosevelt.
- Enabled MPA view transitions in default CSS.
- Added debug markup to the default 404 not found page in development mode.
- Added `.visuallyHidden` CSS helper class to default CSS.
- Fixed broken Stylus CSS option.
- Added `check-if-CSS-is-disabled` module to the default JS.
- Removed broken SPA option. Will return soon...
- Refactored sample app controller code to better prepare it for the return of the SPA option.
- Updated dependencies.

## 0.23.0

- Added preload markup and meta description to sample app.
- Changed default CSS compiler to SASS.
- Updated various dependencies.

## 0.22.3

- Updated `rooseveltConfig.json` to account for the latest changes in Roosevelt.
- Updated various dependencies.

## 0.22.2

- Updated `.gitignore` to account for the latest changes in Roosevelt.
- Updated various dependencies.

## 0.22.1

- Updated `.gitignore` to account for the latest changes in Roosevelt.
- Updated various dependencies.

## 0.22.0

- Updated generator to account for breaking changes in Roosevelt.
- Fixed a bug that displayed `undefined` as the directory name on the app start instructions.
- Updated various dependencies.

## 0.21.11

- Added generator version to console output.
- Various dependencies updated.

## 0.21.10

- Altered default global model to prevent a common race condition.
- Various dependencies updated.

## 0.21.9

- Added `eslint-plugin-html` to the default devDependency list.
- Fixed typo in CLI output when app is generated.
- Various dependencies updated.

## 0.21.8

- Various dependencies updated.

## 0.21.7

- Fixed issue that would cause `npx mkroosevelt` to return an undefined variable in its output.
- Refactored deprecated APIs.
- Various dependencies updated.

## 0.21.6

- Fixed bug with template rendering in generated apps.
- Various dependencies updated.

## 0.21.5

- Various refactoring.
- Various dependencies updated.

## 0.21.4

- Fixed bug resulting in a non-fatal error when generating apps.

## 0.21.3

- Enabled source-maps on webpack by default.
- Pinned deps.
- Various dependencies bumped.

## 0.21.2

- Improvements to the SPA variant of the generator.
- Various dependencies bumped.

## 0.21.1

- Added a README.md to the list of files generated for sample apps.
- Improved clarity of command line output.
- Improved docs.
- Various dependencies bumped.

## 0.21.0

- Fixed certs generator npm script.
- Various dependencies bumped.

## 0.20.0

- Various dependencies bumped.

## 0.19.10

- Various fixes related to CSS preprocessor linting scripts.
- Removed support for stylus CSS preprocessor for now because it was broken and too difficult to fix in a short turnaround.
- Fixed compatibility with `mkroosevelt` in node v17+.
- Removed `install-deps` flag, as newer versions of yeoman won't allow this to work in subdirectories.
- Added `certs` directory to generated .gitignore.
- Updated dependency versions for generated apps.
- Remove obsolete `node-forge` and `yeoman-assert` dependencies.
- Various dependencies bumped.

## 0.19.9

- Generator will now only generate apps that use HTTPS by default. It will also generate a self-signed cert for you. Non-secure HTTP can still be used, but you have to enable it manually after the app is generated.
- Various dependencies bumped.

## 0.19.8

- Added option to generate isomorphic app (comes with bootstrapping for Roosevelt's single page app support) off by default.
- Refactored sample app to improve some defaults.
- Various dependencies bumped. Notably large refactors were needed to update dependencies this time, mostly due to breaking changes with Stylelint.

## 0.19.7

- Generator now generates apps with deferred scripts by default.
- Various dependencies bumped.

## 0.19.6

- Added some additional Webpack config defaults to make it easier to bundle third party dependencies without needing to add additional Webpack configs manually.
- Dropped Node 15 support. Added Node 16 support.
- Various dependencies bumped.

## 0.19.5

- Fixed bug that caused custom app names not to propagate correctly into the generated app if the the app was generated using the `mkroosevelt` command.
- Removed husky and lint-staged from the default deps in generated apps.
- Suppressed unnecessary logs in tests.
- Various dependencies bumped.

## 0.19.4

- Removed deprecated code from generator.
- Dropped Node 12.
- Various dependencies bumped.

## 0.19.3

- Fixed custom app name supplied via CLI.
- Various dependencies bumped.

## 0.19.2

- Fixed missing favicon from generated app.
- Bumped default version of Node.js required to run the sample app.
- Various dependencies bumped.

## 0.19.1

- Fixed some typos in the generated files.
- Various dependencies bumped.

## 0.19.0

- Updated to Roosevelt 0.19.0.
- Various dependencies bumped.

## 0.18.3

- Updated to Roosevelt 0.18.3.
- Various dependencies bumped.

## 0.18.0

- Updated to Roosevelt 0.18.x.
- Various dependencies bumped.

## 0.17.0

- Updated to Roosevelt 0.17.x.
- Generated Roosevelt config is now placed in rooseveltConfig.json.
- Various dependencies bumped.

## 0.16.0

- Updated to Roosevelt 0.16.x. Matched generator major and minor version to Roosevelt version, thus the big jump in version numbers.
- Various dependencies bumped.

## 0.7.2

- Various dependencies bumped.

## 0.7.1

- Updated to Roosevelt 0.15.x.
- Various dependencies bumped.

## 0.7.0

- Updated to Roosevelt 0.14.x.
- Fixed sample app's package.json formatting.
- Various dependencies bumped.

## 0.6.0

- Updated to Roosevelt 0.13.x.
- Updated default .gitignore created by the generator.

## 0.5.0 and below

[Here be dragons](https://en.wikipedia.org/wiki/Here_be_dragons)...
