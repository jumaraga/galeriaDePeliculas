const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlplugin = new HtmlWebpackPlugin({
   template:'./public/index.html',
   filename:'./index.html'
})

module.exports={
   module: {
      rules:[
         {
            test: /\.js|jsx$/,
            exclude:/node_modules/,
            use:['babel-loader']
         },
         {
            test:/\.css$/,
            use:['style-loader','css-loader']
         }
      ]
   },
   plugins:[htmlplugin]
}

