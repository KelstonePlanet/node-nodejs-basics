import fs from "fs/promises";
const create = async () => {
    // Write your code here
    try {
        await fs.access("./src/fs/files/fresh.txt");
        throw new Error("FS operation failed");
    } catch (error) {
        if (error.code === "ENOENT") {
            try {
                await fs.writeFile("./src/fs/files/fresh.txt", "I am young");
            } catch (error) {
                console.log(error);
            }
        } else {
            throw error;
        }
    }
};

await create();