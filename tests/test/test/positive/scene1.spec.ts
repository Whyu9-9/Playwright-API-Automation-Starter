import { test, expect } from "@playwright/test";
import data1 from "@data/test/test/test_data1.json";
import { allure } from "allure-playwright";
import getHeader from "@helpers/header-handler";
import getFile from "@helpers/file_handler";
import dotenv from "dotenv";

test("[+] test", async ({ request }) => {
    dotenv.config();

    allure.severity("test");
    allure.feature("Test");
    allure.story("Positive");

    const header: any = new getHeader();
    const file: any = new getFile();

    const response: Record<string, any> = await request.patch(`${process.env.MAIN_API_URL}user/profile/update`, {
        //change the getHeader parameter to match your API credential requirements (either using email or username to login)
        headers: await header.getHeader("email"),
        data: {
            photo: await file.getFile("image", "valid", "jpeg", "jpeg", true),
            ...data1
        }
    });

    // convert response to become more useable for assertion
    const bodyResponse: string = (await response.body()).toString();
    const bodyResponseToJson: Record<string, any> = JSON.parse(bodyResponse);

    //remove the console log if the test is already success (for debugging purposes)
    console.log(bodyResponseToJson);

    // assertion or expected result (you can customize the status and response expectation)
    expect(response.status()).toBe(200);
    // expect(bodyResponseToJson.message).toBe("Success, Data Found.");
});