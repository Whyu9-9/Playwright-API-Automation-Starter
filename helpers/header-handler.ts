
import Authenticate from "./generate_bearer";

class HeaderHandler {
    async getHeader(
        type: any,
        multipart: boolean = false
    ): Promise<Record<string, any>> {
        const auth: Authenticate = new Authenticate()
        const bearerToken = await auth.getBearer(type)

        let headers: Record<string, any> = {
            "accept": "*/*",
            "Authorization": "Bearer " + bearerToken
        };

        if (multipart === false) {
            headers["Content-Type"] = "application/json";
        } else {
            headers["Content-Type"] = "application/x-www-form-urlencoded";
        }

        return headers;
    }
}

export default HeaderHandler
