import Config, {environment} from 'webpack-config';

const TARGET = process.env.npm_lifecycle_event

export default new Config().extend(`webpack/webpack.${TARGET}.config.babel.js`);