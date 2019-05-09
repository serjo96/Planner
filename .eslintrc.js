// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential', 'airbnb-base', "@vue/typescript", "eslint:recommended"],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  rules: {
      "no-var": 2,                     // http://eslint.org/docs/rules/no-var
      "block-scoped-var": 2,           // http://eslint.org/docs/rules/block-scoped-var
      "no-undef": 2,                   // http://eslint.org/docs/rules/no-undef
      "no-shadow": 2,                  // http://eslint.org/docs/rules/no-shadow
      "no-shadow-restricted-names": 2, // http://eslint.org/docs/rules/no-shadow-restricted-names
      "no-unused-vars": [2, {          // http://eslint.org/docs/rules/no-unused-vars
          "vars": "local",
          "args": "after-used"
      }],
      "no-use-before-define": 2,       // http://eslint.org/docs/rules/no-use-before-define
      "no-dupe-keys": 2,               // http://eslint.org/docs/rules/no-dupe-keys
      "no-duplicate-case": 2,          // http://eslint.org/docs/rules/no-duplicate-case
      "no-empty": 2,                   // http://eslint.org/docs/rules/no-empty
      "no-ex-assign": 2,               // http://eslint.org/docs/rules/no-ex-assign
      "no-extra-boolean-cast": 0,      // http://eslint.org/docs/rules/no-extra-boolean-cast
      "no-extra-semi": 2,              // http://eslint.org/docs/rules/no-extra-semi
      "no-func-assign": 2,             // http://eslint.org/docs/rules/no-func-assign
      "no-inner-declarations": 2,      // http://eslint.org/docs/rules/no-inner-declarations
      "no-invalid-regexp": 2,          // http://eslint.org/docs/rules/no-invalid-regexp
      // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
        js: 'never',
        ts: 'never',
        vue: 'never'
    }],
      /**
       * Style
       */
      "indent": [2, 4, {"SwitchCase": 1}],                // http://eslint.org/docs/rules/
      "brace-style": [2,               // http://eslint.org/docs/rules/brace-style
          "1tbs", {
              "allowSingleLine": true
          }],
      "quotes": [
          2, "single", "avoid-escape"    // http://eslint.org/docs/rules/quotes
      ],
      "camelcase": [2, {               // http://eslint.org/docs/rules/camelcase
          "properties": "never"
      }],
      "comma-spacing": [2, {           // http://eslint.org/docs/rules/comma-spacing
          "before": false,
          "after": true
      }],
      "comma-style": [2, "last"],      // http://eslint.org/docs/rules/comma-style
      "eol-last": 2,                   // http://eslint.org/docs/rules/eol-last
      "func-names": 2,                 // http://eslint.org/docs/rules/func-names
      "key-spacing": [2, {             // http://eslint.org/docs/rules/key-spacing
          "beforeColon": false,
          "afterColon": true
      }],
      "new-cap": [2, {                 // http://eslint.org/docs/rules/new-cap
          "newIsCap": true,
          "capIsNew": false
      }],
      "no-multiple-empty-lines": [2, { // http://eslint.org/docs/rules/no-multiple-empty-lines
          "max": 2
      }],
      "no-nested-ternary": 2,          // http://eslint.org/docs/rules/no-nested-ternary
      "no-new-object": 2,              // http://eslint.org/docs/rules/no-new-object
      "no-spaced-func": 2,             // http://eslint.org/docs/rules/no-spaced-func
      "no-trailing-spaces": 0,         // http://eslint.org/docs/rules/no-trailing-spaces
      "no-underscore-dangle": 0,       // http://eslint.org/docs/rules/no-underscore-dangle
      "one-var": [2, "never"],         // http://eslint.org/docs/rules/one-var
      "padded-blocks": 0,              // http://eslint.org/docs/rules/padded-blocks
      "semi": [2, "always"],           // http://eslint.org/docs/rules/semi
      "semi-spacing": [2, {            // http://eslint.org/docs/rules/semi-spacing
          "before": false,
          "after": true
      }],
      "keyword-spacing": 2,
      "space-before-blocks": 2,        // http://eslint.org/docs/rules/space-before-blocks
      "space-before-function-paren": [2, "never"], // http://eslint.org/docs/rules/space-before-function-paren
      "spaced-comment": [2, "always"],
      "space-infix-ops": ["error", {"int32Hint": true }],
      "max-len":  ["error", { "code": 160 }],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
};
