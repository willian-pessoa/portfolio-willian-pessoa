/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, '/src/styles')],
    prependData: `@import "variables.scss";`
  },
}

module.exports = nextConfig
