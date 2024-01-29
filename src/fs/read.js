import fsPromises from "node:fs/promises";
import path from "node:path";
import url from "node:url";

const filename = url.fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const filepath = path.join(dirname, "files", "fileToRead.txt");

const read = async () => {
    // Write your code here
     try {
        await fsPromises.access(filepath);
        const contents = await fsPromises.readFile(filepath, "utf-8");
        console.log(contents);
     } catch (error) {
        if (error.code === "ENOENT") {
            throw new Error("FS operation failed");
        } else {
            throw error;
        };
     };
};

await read();