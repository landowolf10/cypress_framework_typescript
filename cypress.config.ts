import { defineConfig } from "cypress";
import createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreProcessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
import allureWritter from "@shelex/cypress-allure-plugin/writer";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)]
      });

      on("file:preprocessor", bundler);
      allureWritter(on, config);
      addCucumberPreProcessorPlugin(on, config);

      return config;
    },
    specPattern: 'cypress/e2e/features/**/*.feature'
  },
  env: {
    allureReuseAfterSpec: true
  }
});