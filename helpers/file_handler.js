import path from "path";
import fs from "fs";

class FileHandler {
    async getFile(file_type, file_status, file_extension, mime_type) {
        const filePath = path.resolve(`data/etc/${file_type}_example/`, `${file_status}_${mime_type}_${file_type}.${file_extension}`);
        const file = await fs.readFileSync(filePath);

        return {
            name: filePath,
            mimeType: file_type == "image" ? `image/${mime_type}` : `application/${mime_type}`,
            buffer: file,
        }
    }
}

export default FileHandler
