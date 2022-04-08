import fs from "fs"

const filename2 = "./public/Terms.html"


export default async function api (req,res) {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.write(await fs.readFileSync(filename2, "utf8"));
    res.end();
}