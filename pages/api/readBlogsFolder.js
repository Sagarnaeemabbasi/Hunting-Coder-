// import fs from "fs/promises";
// export default async function readBlog(req, res) {
//   let data = await fs.readdir(`BlogData`, "utf-8");
//   let allBlogs = [];
//   let readFile;
//   console.log(data);
//   for (let index = 0; index < data.length; index++) {
//     const element = data[index];
//     readFile =await fs.readFile(`BlogData/${element}`, "utf-8");
//     allBlogs.push(JSON.parse(readFile));
//   }
//   res.status(200).json(allBlogs);
// }
import fs from "fs";
export default  function readBlog(req, res) {
  let data = fs.readdirSync(`BlogData`, "utf-8");
  let allBlogs = [];
  let readFile;
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    readFile = fs.readFileSync(`BlogData/${element}`, "utf-8");
    allBlogs.push(JSON.parse(readFile));
  }
  res.status(200).json(allBlogs);
}
