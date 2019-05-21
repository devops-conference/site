const withSass = require('@zeit/next-sass')
const debug = process.env.NODE_ENV !== 'production'

const backend = !debug ? '/site' : ''

const nextJsConfig = {
    exportPathMap: function() {
        return {
            '/': { page: '/' }
        }
    },
    assetPrefix: backend,
    publicRuntimeConfig: {
        BACKEND_URL: backend
    }
}


module.exports = withSass(nextJsConfig)
