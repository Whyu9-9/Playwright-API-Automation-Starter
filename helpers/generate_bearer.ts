import fetch from "node-fetch";
import dotenv from "dotenv";

class Authenticate {
    async getBearer(type: any): Promise<string> {
        dotenv.config();

        const beforeAsyncResponse = await fetch(process.env.API_LOGIN_URL!, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            },
            body: JSON.stringify(this.checkType(type))

        });

        const beforeAsyncResponseJson: Record<string, any> = (await beforeAsyncResponse.json());
        const bearer: string = beforeAsyncResponseJson.data.access_token;

        return bearer;
    }

    checkType(type: string): Record<string, any> {
        let body: Record<string, any>;

        if (type === "username") {
            body = {
                username: process.env.USERNAME,
                password: process.env.PASSWORD,
            };
        } else {
            body = {
                email: process.env.EMAIL,
                password: process.env.PASSWORD,
            };
        }

        return body;
    }
}

export default Authenticate
