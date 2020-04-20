module.exports = {
    pluginOptions: {
        electronBuilder: {
            chainWebpackMainProcess: config => {
                config.module
                    .rule('node')
                        .test(/\.node$/)
                        .use('node-loader')
                        .loader('node-loader');
            }
        }
    }
}