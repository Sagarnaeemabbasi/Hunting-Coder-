import React, { useState } from "react";
import styles from "@/styles/Contact.module.css";

export default  function Contact() {

  const [details, setDetails] = useState({});
  const personDetail = (key, value) => {
    details[key] = value;
    setDetails({ ...details });
  };
  const submit = () => {
    console.log("submit");
  };
  return (
    <div>
      <div className={styles.container}>
        <input
          type="text"
          name="name"
          className={styles.input}
          value={details.name}
          onChange={(e) => personDetail("name", e.target.value)}
          placeholder="Enter your Name"
        />
        <input
          type="number"
          name="number"
          className={styles.input}
          value={details.number}
          onChange={(e) => personDetail("number", e.target.value)}
          placeholder="Enter your Number"
        />
        <input
          type="text"
          name="email"
          className={styles.input}
          value={details.email}
          onChange={(e) => personDetail("email", e.target.value)}
          placeholder="Enter your email"
        />
        <textarea
          type="text"
          name="desc"
          className={styles.textarea}
          value={details.desc}
          onChange={(e) => personDetail("desc", e.target.value)}
          placeholder="Tell about you and your thougths"
        />
        <button onClick={submit} className={styles.btn}>
          Submit Your Form
        </button>
      </div>
    </div>
  );
}
export function postContact(req, res) {
  console.log(req.body);
  
  // res.status(200).json({ name: 'Sagar' })
}
