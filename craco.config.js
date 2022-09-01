const path = require('path');
const { getLoader, loaderByName } = require('@craco/craco');

const resolvePath = p => path.resolve(__dirname, p)


module.exports = {
	webpack: {
        alias: {
            '@ui': resolvePath('./src/stories/')
        },
		configure: (webpackConfig, { env, paths }) => {
			// const { isFound, match } = getLoader(webpackConfig, loaderByName('babel-loader'));
			// if (isFound) {
			// 	const include = Array.isArray(match.loader.include) ? match.loader.include : [match.loader.include];
			// }
			return webpackConfig;
		},
	},
    
};