const { generateTemplateFiles } = require("generate-template-files");

generateTemplateFiles([
    {
        option: "Generate Custom Project Test Data",
        defaultCase: "(kebabCase)",
        confirmFiles: true,
        entry: {
            folderPath: "./tools/generator/templates/data/test_data__order__.json",
        },
        stringReplacers: [
            { question: "Insert project name (example: Ecommerce Platform)", slot: "__project__" },
            { question: "Insert folder name (example: payment list)", slot: "__name__" },
            { question: "Insert test data order (example: 1)", slot: "__order__" },
        ],
        output: {
            path: "./data/__project__/__name__/test_data__order__.json",
            pathAndFileNameDefaultCase: "(kebabCase)",
        },
    },
]);