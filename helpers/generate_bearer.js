import fetch from "node-fetch";
import * as dotenv from "dotenv";

class Authenticate {
    async getBearer(type) {
        dotenv.config();

        const beforeAsyncResponse = await fetch(`${process.env.API_LOGIN_URL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            },
            body: this.checkType(type)

        });

        const beforeAsyncResponseJson = (await beforeAsyncResponse.json());
        const bearer = beforeAsyncResponseJson.token;

        return bearer
    }

    checkType(type) {
        var body;
        if (type === "username") {
            return body = JSON.stringify({
                "username": process.env.USERNAME,
                "password": process.env.PASSWORD,
            });
        } else {
            return body = JSON.stringify({
                "email": process.env.EMAIL,
                "password": process.env.PASSWORD,
            });
        }
    }
}

export default Authenticate
