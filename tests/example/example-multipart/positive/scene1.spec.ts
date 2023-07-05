import { test, expect } from "@playwright/test";
import data1 from "@data/example/example-multipart/test_data1.json";
import { allure } from "allure-playwright";
import getHeader from "@helpers/header-handler";
import getFile from "@helpers/file_handler";
import dotenv from "dotenv";

test("[+] example multipart", async ({ request }) => {
    dotenv.config();

    allure.severity("normal");
    allure.feature("Example Multipart");
    allure.story("Positive");

    const header: any = new getHeader();
    const file: any = new getFile();

    // change the value of the "insert_custom_env_url" string to match your .env endpoint name
    const response: Record<string, any> = await request.post(`${process.env.insert_custom_env_url}v1/example`, {
        headers: await header.getHeader("username", true),
        multipart: {
            file: await file.getFile("image", "valid", "jpeg", "jpeg"),
            ...data1
        }
    });

    // convert response to become more useable for assertion
    const bodyResponse: string = (await response.body()).toString();
    const bodyResponseToJson: Record<string, any> = JSON.parse(bodyResponse);

    // assertion or expected result (you can customize the status and response expectation)
    expect(response.status()).toBe(201);
    expect(bodyResponseToJson.message).toBe("Success, Data Found.");
});