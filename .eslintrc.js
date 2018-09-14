// Refer to the [AirBnb Style Guide](https://github.com/airbnb/javascript)

module.exports = {
  extends: './node_modules/eslint-config-airbnb/index.js',
  env: {
    "browser": true,
    "node": true,
  },
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "no-console": 0,
    "react/destructuring-assignment": ["enabled", 'always'],
    "react/prop-types": ["enabled", { "ignore": ['handleClick'], "customValidators": "customValidator" }],
  }
};
