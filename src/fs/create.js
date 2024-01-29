import { promises } from "fs";
import path from "node:path";
import url from "node:url";

const filename = url.fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const filepath = path.join(dirname, "files", "fresh.txt");

const create = async () => {
    // Write your code here
    try {
        await promises.access(filepath);
        throw new Error("FS operation failed");
    } catch (error) {
        if (error.code === "ENOENT") {
            try {
                await promises.writeFile(filepath, "I am young");
            } catch (error) {
                console.log(error);
            }
        } else {
            throw error;
        };
    };
};

await create();