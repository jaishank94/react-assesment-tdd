export default {
    transform: {
      "^.+\\.[t|j]sx?$": "babel-jest",  // Handle JS and JSX files with babel-jest
    },
    testEnvironment: "jsdom",  // Use jsdom for simulating browser environment
    setupFilesAfterEnv: ["@testing-library/jest-dom"], // Add jest-dom matchers
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  };
  