import React, { useEffect, useState } from "react";
import styles from "@/styles/Blog.module.css";
import Link from "next/link";
import fs from "fs";
export default function Blog(props) {
  const [blogs, setBlogs] = useState(props.allBlogs);

  return (
    <div className={styles.container}>
      <style jsx>
        {`
          .center {
            text-align: center;
          }
        `}
      </style>
      <h1>Our Blogs</h1>
      {blogs &&
        blogs.map((element, index) => (
          <div key={index}>
            <h3 className="center">{element.description}</h3>
            <p className={styles.para}>{element.text.slice(0, 160)}...</p>
            <button className={styles.btn}>
              <Link href={`BlogPosts/${element.link}`} legacyBehavior>
                <a>Read More</a>
              </Link>
            </button>
          </div>
        ))}
    </div>
  );
}

// export async function getServerSideProps(context) {
//   let url = "http://localhost:3000/api/readBlogsFolder";
//   let blogs = await fetch(url);
//   let allBlogs = await blogs.json();

//   return {
//     props: { allBlogs },
//   };
// }

export async function getStaticProps(context) {
  let data = fs.readdirSync("BlogData");
  let allBlogs = [];
  let readFile;
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    readFile = fs.readFileSync(`BlogData/${element}`, "utf-8");
    allBlogs.push(JSON.parse(readFile));
  }
  return {
    props: { allBlogs },
  };
}
