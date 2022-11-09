const common = `
    --require setup/assertions.js
    --require setup/hooks.js
    --require step-defitions/**/*.step.js
`
module.exports = {
    default: `${common} features/**/*.feature`,
}

