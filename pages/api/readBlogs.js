import fs from "fs";
export default function readBlog(req, res) {
  fs.readFile(`BlogData/${req.query.slug}.json`, "utf-8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "This blog Does Not exist" });
    }
    res.status(200).json(JSON.parse(data));
  });
}
