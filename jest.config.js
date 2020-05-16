module.exports = {
    collectCoverageFrom: ["src/**/*.{js,jsx}"],
    testMatch: ["<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs}", "<rootDir>/src/**/?(*.)(spec|test).{js,jsx}"],
    transform: {
      ".+\\.(js|jsx|ts|tsx|css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$":
      "<rootDir>/config/jest/jest-transformer.js",
    },
    transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"]
  };