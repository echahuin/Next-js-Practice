/** @type {import('next').NextConfig} */
module.exports = {


  webpack(config, options) {
    const { isServer } = options;
    if (!isServer) {
      // set 'fs' to an empty module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
        fs: false
      }
    }

    return config;

  }
}
