const { generateTemplateFiles } = require("generate-template-files");

generateTemplateFiles([
    {
        option: "Generate Custom Project \u001B[42m Positive \033[0m Test Case (method: \33[45m POST \033[0m)",
        defaultCase: "(kebabCase)",
        confirmFiles: true,
        entry: {
            folderPath: "./tools/generator/templates/tests/custom/post/default/positive/scene__order__.spec.ts",
        },
        stringReplacers: [
            { question: "Insert project name (example: Ecommerce Platform)", slot: "__project__" },
            { question: "Insert project API URL .env Variable (example: ECOMMERCE_PLATFORM_API_URL)", slot: "__env__" },
            { question: "Insert folder name (example: payment list)", slot: "__name__" },
            { question: "Insert on-test feature name (example: payment list)", slot: "__feature__" },
            { question: "Insert test case title (example: should send payment data)", slot: "__case__" },
            { question: "Insert test case severity (list: normal, critical)", slot: "__severity__" },
            { question: "Insert test case order (example: 1)", slot: "__order__" },
            { question: "Insert feature endpoint (example: V1/feature/feature)", slot: "__url__" },
        ],
        output: {
            path: "./tests/__project__/__name__/positive/scene__order__.spec.ts",
            pathAndFileNameDefaultCase: "(kebabCase)",
        },
    },

    {
        option: "Generate Custom Project \u001B[41m Negative \033[0m Test Case (method: \33[45m POST \033[0m)",
        defaultCase: "(kebabCase)",
        confirmFiles: true,
        entry: {
            folderPath: "./tools/generator/templates/tests/custom/post/default/negative/scene__order__.spec.ts",
        },
        stringReplacers: [
            { question: "Insert project name (example: Ecommerce Platform)", slot: "__project__" },
            { question: "Insert project API URL .env Variable (example: ECOMMERCE_PLATFORM_API_URL)", slot: "__env__" },
            { question: "Insert folder name (example: payment list)", slot: "__name__" },
            { question: "Insert on-test feature name (example: payment list)", slot: "__feature__" },
            { question: "Insert test case title (example: should send payment data)", slot: "__case__" },
            { question: "Insert test case severity (list: normal, critical)", slot: "__severity__" },
            { question: "Insert test case order (example: 1)", slot: "__order__" },
            { question: "Insert feature endpoint (example: V1/feature/feature)", slot: "__url__" },
        ],
        output: {
            path: "./tests/__project__/__name__/negative/scene__order__.spec.ts",
            pathAndFileNameDefaultCase: "(kebabCase)",
        },
    },
    {
        option: "Generate Custom Project \u001B[42m Positive \033[0m Test Case (method: \33[45m POST \033[0m, \33[43m Multipart \033[0m Form Data)",
        defaultCase: "(kebabCase)",
        confirmFiles: true,
        entry: {
            folderPath: "./tools/generator/templates/tests/custom/post/multipart-form/positive/scene__order__.spec.ts",
        },
        stringReplacers: [
            { question: "Insert project name (example: Ecommerce Platform)", slot: "__project__" },
            { question: "Insert project API URL .env Variable (example: ECOMMERCE_PLATFORM_API_URL)", slot: "__env__" },
            { question: "Insert folder name (example: payment list)", slot: "__name__" },
            { question: "Insert on-test feature name (example: payment list)", slot: "__feature__" },
            { question: "Insert test case title (example: should send payment data)", slot: "__case__" },
            { question: "Insert test case severity (list: normal, critical)", slot: "__severity__" },
            { question: "Insert test case order (example: 1)", slot: "__order__" },
            { question: "Insert feature endpoint (example: V1/feature/feature)", slot: "__url__" },
        ],
        output: {
            path: "./tests/__project__/__name__/positive/scene__order__.spec.ts",
            pathAndFileNameDefaultCase: "(kebabCase)",
        },
    },
    {
        option: "Generate Custom Project \u001B[41m Negative \033[0m Test Case (method: \33[45m POST \033[0m, \33[43m Multipart \033[0m Form Data)",
        defaultCase: "(kebabCase)",
        confirmFiles: true,
        entry: {
            folderPath: "./tools/generator/templates/tests/custom/post/multipart-form/negative/scene__order__.spec.ts",
        },
        stringReplacers: [
            { question: "Insert project name (example: Ecommerce Platform)", slot: "__project__" },
            { question: "Insert project API URL .env Variable (example: ECOMMERCE_PLATFORM_API_URL)", slot: "__env__" },
            { question: "Insert folder name (example: payment list)", slot: "__name__" },
            { question: "Insert on-test feature name (example: payment list)", slot: "__feature__" },
            { question: "Insert test case title (example: should send payment data)", slot: "__case__" },
            { question: "Insert test case severity (list: normal, critical)", slot: "__severity__" },
            { question: "Insert test case order (example: 1)", slot: "__order__" },
            { question: "Insert feature endpoint (example: V1/feature/feature)", slot: "__url__" },
        ],
        output: {
            path: "./tests/__project__/__name__/negative/scene__order__.spec.ts",
            pathAndFileNameDefaultCase: "(kebabCase)",
        },
    },
    {
        option: "Generate Custom Project \u001B[42m Positive \033[0m Test Case (method: \33[44m GET \033[0m)",
        defaultCase: "(kebabCase)",
        confirmFiles: true,
        entry: {
            folderPath: "./tools/generator/templates/tests/custom/get/default/positive/scene__order__.spec.ts",
        },
        stringReplacers: [
            { question: "Insert project name (example: Ecommerce Platform)", slot: "__project__" },
            { question: "Insert project API URL .env Variable (example: ECOMMERCE_PLATFORM_API_URL)", slot: "__env__" },
            { question: "Insert folder name (example: payment list)", slot: "__name__" },
            { question: "Insert on-test feature name (example: payment list)", slot: "__feature__" },
            { question: "Insert test case title (example: should send payment data)", slot: "__case__" },
            { question: "Insert test case severity (list: normal, critical)", slot: "__severity__" },
            { question: "Insert test case order (example: 1)", slot: "__order__" },
            { question: "Insert feature endpoint (example: V1/feature/feature)", slot: "__url__" },
        ],
        output: {
            path: "./tests/__project__/__name__/positive/scene__order__.spec.ts",
            pathAndFileNameDefaultCase: "(kebabCase)",
        },
    },
    {
        option: "Generate Custom Project \u001B[41m Negative \033[0m Test Case (method: \33[44m GET \033[0m)",
        defaultCase: "(kebabCase)",
        confirmFiles: true,
        entry: {
            folderPath: "./tools/generator/templates/tests/custom/get/default/negative/scene__order__.spec.ts",
        },
        stringReplacers: [
            { question: "Insert project name (example: Ecommerce Platform)", slot: "__project__" },
            { question: "Insert project API URL .env Variable (example: ECOMMERCE_PLATFORM_API_URL)", slot: "__env__" },
            { question: "Insert folder name (example: payment list)", slot: "__name__" },
            { question: "Insert on-test feature name (example: payment list)", slot: "__feature__" },
            { question: "Insert test case title (example: should send payment data)", slot: "__case__" },
            { question: "Insert test case severity (list: normal, critical)", slot: "__severity__" },
            { question: "Insert test case order (example: 1)", slot: "__order__" },
            { question: "Insert feature endpoint (example: V1/feature/feature)", slot: "__url__" },
        ],
        output: {
            path: "./tests/__project__/__name__/negative/scene__order__.spec.ts",
            pathAndFileNameDefaultCase: "(kebabCase)",
        },
    },
]);