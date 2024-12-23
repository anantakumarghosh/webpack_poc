// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const fs = require('fs');

// Dynamic module entry points
const modulesPath = path.resolve(__dirname, 'src/modules');
const moduleEntries = {};

// webpack.config.js

// Add this logging
// const modulesPath = path.resolve(__dirname, 'src/modules');
console.log('Scanning modules in:', modulesPath);

fs.readdirSync(modulesPath).forEach(moduleName => {
  const modulePath = path.join(modulesPath, moduleName);
  
  if (fs.statSync(modulePath).isDirectory()) {
    console.log(`Found module: ${moduleName}`);
    const registryPath = path.join(modulePath, `${moduleName.charAt(0).toUpperCase() + moduleName.slice(1)}Registry.js`);
    
    console.log(`Checking registry path: ${registryPath}`);
    if (fs.existsSync(registryPath)) {
      console.log(`Registry found for module: ${moduleName}`);
    }
  }
});
// Read modules and create entry points
fs.readdirSync(modulesPath).forEach(moduleName => {
  const modulePath = path.join(modulesPath, moduleName);
  
  // Check if it's a directory and has a registry file
  if (fs.statSync(modulePath).isDirectory()) {
    const registryPath = path.join(modulePath, `${moduleName.charAt(0).toUpperCase() + moduleName.slice(1)}Registry.js`);
    
    if (fs.existsSync(registryPath)) {
      moduleEntries[moduleName] = registryPath;
    }
  }
});

module.exports = {
  entry: {
    // Main application bundle
    main: './src/index.js',
    
    // Dynamic module bundles
    ...moduleEntries
  },
  output: {
    filename: (pathData) => {
      // Custom naming for bundles
      return pathData.chunk.name === 'main' 
        ? 'bundles/[name].bundle.js'
        : `bundles/modules/[name].module.js`;
    },
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Clean the dist folder before each build
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new WebpackManifestPlugin({
      fileName: 'asset-manifest.json'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@modules': path.resolve(__dirname, 'src/modules')
    }
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    hot: true,
    open: true
  },
  mode: 'development'
};