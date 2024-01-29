import { promises } from "fs";
import path from "node:path";
import url from "node:url";

const create = async () => {
    // Write your code here
    const filename = url.fileURLToPath(import.meta.url);
    const dirname = path.dirname(filename);
    try {
        await promises.access(path.join(dirname, "files", "fresh.txt"));
        throw new Error("FS operation failed");
    } catch (error) {
        if (error.code === "ENOENT") {
            try {
                await promises.writeFile(path.join(dirname, "files", "fresh.txt"), "I am young");
            } catch (error) {
                console.log(error);
            }
        } else {
            throw error;
        }
    }
};

await create();