build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html');
    // Paths
    assetsRoot: path.resolve(__dirname, '../dist');
    assetsSubDirectory: 'static';

    // 之前是这样⬇️，多加一个.
    // assetsPublicPath: '/', 
    assetsPublicPath: './';
  }