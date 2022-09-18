module.exports = (env, argv) => {
    const dev = argv.mode !== 'production'
    return {
        entry: './main.js',
        output: {
            path: __dirname + '/dist',
            filename: argv['output-filename'] || 'powerup.js',
        },
        optimization: {
            minimize: !!env.minimize,
        }
    }
}
