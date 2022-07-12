module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:url',
        destination: '/api/:url',
      },
    ]
  },
}
