const path = require('path')
const nodeExternals = require('webpack-node-externals')

const BUILD_ROOT = path.resolve(__dirname, 'dist')
const SRC_ROOT = path.resolve(__dirname, 'src')

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  mode: 'production',
  context: SRC_ROOT,
  entry: path.resolve(SRC_ROOT, 'index.ts'),
  output: {
    path: BUILD_ROOT,
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      '~': path.resolve(__dirname, 'src/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: path.resolve(__dirname, 'tsconfig.json'),
          },
        },
      },
    ],
  },
}
