import fs from "fs"

const filename1 = "./public/Privacy.html"


export default async function api (req,res) {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.write(await fs.readFileSync(filename1, "utf8"));
    res.end();
}