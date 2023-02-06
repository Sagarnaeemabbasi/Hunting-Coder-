import fs from "fs";
export default function postContact(req, res) {
    console.log(req.body);
    
    res.status(200).json({ name: 'Sagar' })
  }


  function getData(){

  }
  // fs.writeFileSync(`pages/api/contacts/${index}.json`, "utf-8", (err, data) => {
  //   if (err) {
  //     res.status(500).json({ error: "This blog Does Not exist" });
  //   }
  //   res.status(200).json(JSON.parse(data));
  // });

