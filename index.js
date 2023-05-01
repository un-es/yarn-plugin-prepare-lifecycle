// @ts-check

module.exports = {
  name: 'plugin-prepare-lifecycle',
  /**
   * @param {NodeJS.Require} require
   * @returns {import('@yarnpkg/core').Plugin<import('@yarnpkg/core').Hooks>}
   */
  factory: require => ({
    hooks: {
      afterAllInstalled(project) {
        const workspace = project.topLevelWorkspace
        const prepare = workspace.manifest.scripts.get('prepare')
        if (!prepare) {
          return
        }
        const shell = /** @type {typeof import('@yarnpkg/shell')} */ (
          require('@yarnpkg/shell')
        )
        shell.execute('yarn prepare')
      },
    },
  }),
}
