module.exports = {
	root: true,
	env: {
		browser: true
	},
	parser: '@typescript-eslint/parser',
	plugins: [
	  '@typescript-eslint',
	  'react-hooks',
	  'prettier'
	],
	extends: [
	  'eslint:recommended',
	  'plugin:@typescript-eslint/recommended',
	  "plugin:react-hooks/recommended"
	],
	ignorePatterns: [".eslintrc.js", "*.config.js"],
};