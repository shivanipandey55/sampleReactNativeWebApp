const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const rootDir = path.join(__dirname, "..");
const webpackEnv = process.env.NODE_ENV || "development";
const Dotenv = require("dotenv-webpack");
module.exports = (env) => {
  return {
    mode: webpackEnv,
    entry: {
      app: path.join(rootDir, "./index.web.tsx"),
    },
    output: {
      path: path.resolve(rootDir, "dist"),
      filename: "app-[hash].bundle.js",
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules[/\\](?!react-native-vector-icons)/,
          use: {
            loader: "babel-loader",
            options: {
              // Disable reading babel configuration
              babelrc: false,
              configFile: false,

              // The configuration for compilation
              presets: [
                ["@babel/preset-env", { useBuiltIns: "usage", corejs: "3" }],
                "@babel/preset-react",
                "@babel/preset-flow",
                "@babel/preset-typescript",
              ],
              plugins: [
                "@babel/plugin-proposal-class-properties",
                "@babel/plugin-proposal-object-rest-spread",
              ],
            },
          },
        },
        {
          test: /\.(tsx|ts|jsx|js|mjs)$/,
          exclude: /node_modules/,
          loader: "ts-loader",
        },
        {
          test: /\.(gif|jpe?g|png|svg)$/,
          loader: "url-loader",
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "./index.html"),
      }),
      new webpack.HotModuleReplacementPlugin(),
      new Dotenv({
        path: path.resolve(
          __dirname,
          `../.env${process.env.NODE_ENV ? "." + process.env.NODE_ENV : ""}`
        ),
      }),
    ],
    resolve: {
      fallback: {
        https: require.resolve("https-browserify"),
        http: require.resolve("stream-http"),
        assert: require.resolve("assert/"),
        zlib: require.resolve("browserify-zlib"),
        stream: require.resolve("stream-browserify"),
      },
      extensions: [
        ".web.tsx",
        ".web.ts",
        ".tsx",
        ".ts",
        ".web.jsx",
        ".web.js",
        ".jsx",
        ".js",
      ], // read files in following order
      alias: Object.assign({
        "react-native$": "react-native-web",
      }),
    },
  };
};
