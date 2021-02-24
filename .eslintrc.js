module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"airbnb-base",
	],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: "module",
	},
	rules: {
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"no-console": "off",
		"comma-dangle": "off",
		"arrow-parens": "off",
		"no-unused-vars": "off",
		"no-extra-boolean-cast": "off",
		"no-else-return": "off",
		"no-plusplus": "off",
		"no-debugger": "off",
		"prefer-destructuring": "off",
		"no-use-before-define": "off",
		"no-restricted-syntax": "off",
		"no-shadow": "off",
		"no-underscore-dangle": "off",
		"func-names": "off",
		"max-len": "off",
		"consistent-return": "off",
		"space-before-function-paren": "off",
		"no-param-reassign": "off",
		"no-restricted-globals": "off"
	}
};
