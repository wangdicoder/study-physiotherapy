const { override, fixBabelImports, addLessLoader, addDecoratorsLegacy } = require('customize-cra');

module.exports = override(
	fixBabelImports('import', {
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: true,
	}),
	addLessLoader({
		javascriptEnabled: true,
		modifyVars: {
			'@primary-color': '#6E41BF',
			'@font-family': 'Questrial, Arial, sans-serif',
			'@font-size-base': '17px',
		},
	}),
	addDecoratorsLegacy(),
);
