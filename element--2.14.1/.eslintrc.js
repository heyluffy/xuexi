module.exports = {
  "globals": {
    "ga": true,
    "chrome": true
  },
  "plugins": ["html", "json"],
  extends: ["standard", "plugin:vue/recommended"],
  // "elemefe", // 继承的规则 eslint-config-elemefe
  "rules": {
    "no-restricted-globals": ["error", "event", "fdescribe"]
  },
  parserOptions: {
    "ecmaVersion": 6, // 使用的ECMAscript版本
    "ecmaFeatures": { // 额外的语言特性
      "jsx": true // 启用jsx
    }
  }
};
