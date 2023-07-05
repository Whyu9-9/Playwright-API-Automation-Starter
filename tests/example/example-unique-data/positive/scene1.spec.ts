import { test, expect } from "@playwright/test";
import data1 from "@data/example/example-unique-data/test_data1.json";
import { allure } from "allure-playwright";
import getHeader from "@helpers/header-handler";
import random from "@helpers/randomizer";
import dotenv from "dotenv";

test("[+] example unique data", async ({ request }) => {
    dotenv.config();

    allure.severity("normal");
    allure.feature("Example Unique Data");
    allure.story("Positive");

    const header: any = new getHeader();
    const randomize: any = new random();

    //create a var with a value of a concatenated json object and unique string
    const concatenatedObj: Record<string, any> = { ...data1, "name": "test " + `${await randomize.randomWord()}` };

    // change the value of the "insert_custom_env_url" string to match your .env endpoint name
    const response = await request.post(`${process.env.insert_custom_env_url}v1/example-unique`, {
        headers: await header.getHeader("username"),
        data: concatenatedObj
    });

    // convert response to become more useable for assertion
    const bodyResponse: string = (await response.body()).toString();
    const bodyResponseToJson: Record<string, any> = JSON.parse(bodyResponse);

    // assertion or expected result (you can customize the status and response expectation)
    expect(response.status()).toBe(201);
    expect(bodyResponseToJson.message).toBe("Success, Data Found.");
});