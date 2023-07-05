# Playwright API Automation Testing (Starter Project)

API Automation Testing Starter Project that utilize [Playwright Framework](https://playwright.dev/docs/intro).

# Getting started

To use this starter project for API testing, please follow the installation guide provided below.

## 1. Clone this repository

Clone this repository on your workspace with the following command:

```bash
git clone https://github.com/Whyu9-9/playwright-api-automation-starter.git
```

## 2. Run npm install

Install the required npm package that needed to run the tools with the following command:

```bash
npm install
```

## 3. Setup your .env file

You will need to configure your .env file before running your tests. Copy the .env.example file, rename it, and fill in all the env variables. Contact your software engineer team to provide what you need.

# Available command to run
This is the list of command that are available for you to run on this project. Some of this command including the usage of tools inside this project

```bash
    # to copy necessary file before running npm run post-test command
    npm run pre-serve

   # to generate allure report
    npm run post-test

   # to start a web server on port 8081 that will show allure report
    npm run allure:serve

    # to run all available test cases on all available browser driver
    npm run test

    # to run all available test cases on single browser driver
    npm run test-single

    #to run one specific test case on single browser driver (usually we use this for debugging API testing code to see if the code is already running well or not)
    #example: npx playwright test ecommerce/store-transaction/negative/scene2 --project=chromium
    npx playwright test {module}/{feature_name}/{negative/positive}/{scene+order} --project=chromium
    
    #to auto-generate API Testing data (run this before running auto-generate API testing code)
    npm run generate-data

    #to auto-generate API Testing code
    npm run generate-test
```
# Documentation
Here is a list of documentation for easing your automation testing development
1. [Playwright API Testing Documentation](https://playwright.dev/docs/test-api-testing)
2. [Allure Playwright Documentation](https://www.npmjs.com/package/allure-playwright)
3. [Generate Template File Documentation](https://www.npmjs.com/package/generate-template-files)
4. [Typescript Documentation](https://www.typescriptlang.org/docs/)
5. [Mimetype Documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)
# Authors and acknowledgment
This repository is created and maintained by me myself

[![](https://github.com/Whyu9-9.png?size=50)](https://github.com/Whyu9-9)