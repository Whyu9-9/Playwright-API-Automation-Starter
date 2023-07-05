
import Authenticate from "./generate_bearer.js";

class HeaderHandler {
    async getHeader(type, multipart = false) {
        var auth = new Authenticate()
        var bearerToken = await auth.getBearer(type)

        const headers = {
            "accept": "application/json",
            "Authorization": "Bearer " + bearerToken
        };

        if (multipart === false) {
            headers["content-type"] = "application/json";
        }

        return headers;
    }
}

export default HeaderHandler
