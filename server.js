import express from 'express';


const app = express();
app.use(express.static('public'));

import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpack from 'webpack'
import config from './webpack.config.babel';
const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler), function() {
  console.log('listening on');
});


app.listen(8080, function() {
    console.log('listening on 8080');
})
