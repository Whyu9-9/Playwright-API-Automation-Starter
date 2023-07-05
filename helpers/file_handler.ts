import path from "path";
import fs from "fs/promises";

class FileHandler {
    async getFile(
        file_type: string,
        file_status: any,
        file_extension: any,
        mime_type: any,
        is64: boolean
    ): Promise<{ name: string; mimeType: string; buffer: Buffer }> {
        const filePath = path.resolve(
            "data/etc",
            `${file_type}_example`,
            `${file_status}_${mime_type}_${file_type}.${file_extension}`
        );

        const file: any = await fs.readFile(filePath);

        if (is64) {
            return file.toString("base64");
        }

        return {
            name: filePath,
            mimeType: file_type === "image" ? `image/${mime_type}` : `application/${mime_type}`,
            buffer: file,
        };
    }
}

export default FileHandler;