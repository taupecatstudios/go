/* global module */

// Webpack settings exports.
module.exports = {
	entries: {
		// JS files.
		'frontend': './.dev/assets/shared/js/frontend/frontend.js',

		// admin js
		'admin/customize-controls': './.dev/assets/admin/js/customize-controls.js',
		'admin/customize-preview': './.dev/assets/admin/js/customize-preview.js',

		// admin css
		'admin/customizer-styles': './.dev/assets/admin/css/customizer.css',

		// CSS files.
		'editor-style': './.dev/assets/shared/css/editor-style.css',
		'shared-style': './.dev/assets/shared/css/shared-style.css',

		// CSS Design Styles
		'design-styles/modern': './.dev/assets/design-styles/modern/css/style-modern.css',
		'design-styles/modern-editor': './.dev/assets/design-styles/modern/css/style-editor.css',
		// 'design-styles/traditional': './.dev/assets/design-styles/traditional/css/traditional.css',
		// 'design-styles/traditional-editor': './.dev/assets/design-styles/traditional/css/editor-style.css',
		// 'design-styles/trendy-shop': './.dev/assets/design-styles/trendy-shop/css/trendy-shop.css',
		// 'design-styles/trendy-shop-editor': './.dev/assets/design-styles/trendy-shop/css/editor-style.css',
		// 'design-styles/welcoming': './.dev/assets/design-styles/welcoming/css/welcoming.css',
		// 'design-styles/welcoming-editor': './.dev/assets/design-styles/welcoming/css/editor-style.css',
		// 'design-styles/play': './.dev/assets/design-styles/play/css/play.css',
		// 'design-styles/play-editor': './.dev/assets/design-styles/play/css/editor-style.css',
	},
	filename: {
		js: 'js/[name].js',
		css: 'css/[name].css'
	},
	paths: {
		src: {
			base: './.dev/assets/',
			sharedBase: './.dev/assets/shared/',
			sharedCss: './.dev/assets/shared/css/',
			sharedJs: './.dev/assets/shared/js/',
			adminCss: './.dev/assets/admin/css',
			modernBase: './.dev/assets/design-styles/modern/',
			modernCss: './.dev/assets/design-styles/modern/css/',
			// traditionalBase: './.dev/assets/design-styles/traditional/',
			// traditionalCss: './.dev/assets/design-styles/traditional/css/',
			// trendyShopBase: './.dev/assets/design-styles/trendy-shop/',
			// trendyShopCss: './.dev/assets/design-styles/trendy-shop/css/',
			// welcomingBase: '/.dev/assets/design-styles/welcoming/',
			// welcomingCss: './.dev/assets/design-styles/welcoming/css/',
			// playBase: './.dev/assets/design-styles/play/',
			// playCss: './.dev/assets/design-styles/play/css/'
		},
		dist: {
			base: './dist/',
			clean: ['./images', './css', './js']
		},
	},
	stats: {
		// Copied from `'minimal'`.
		all: false,
		errors: true,
		maxModules: 0,
		modules: true,
		warnings: true,
		// Our additional options.
		assets: true,
		errorDetails: true,
		excludeAssets: /\.(jpe?g|png|gif|svg|woff|woff2|ttf)$/i,
		moduleTrace: true,
		performance: true
	},
	copyWebpackConfig: {
		from: '.dev/assets/**/*.{jpg,jpeg,png,gif,svg}',
		to: 'images/[path][name].[ext]',
		transformPath: ( targetPath ) => {
			return 'images/' + targetPath.replace( /(\.dev\/assets\/|images\/|shared\/)/g, '' );
		},
	},
	BrowserSyncConfig: {
		host: 'localhost',
		port: 3000,
		proxy: 'http://maverick.test',
		open: true,
		files: [
			'**/*.php',
			'dist/js/**/*.js',
			'dist/css/**/*.css',
			'dist/images/**/*.{jpg,jpeg,png,gif,svg}'
		]
	},
	performance: {
		maxAssetSize: 100000
	},
	manifestConfig: {
		basePath: ''
	},
};