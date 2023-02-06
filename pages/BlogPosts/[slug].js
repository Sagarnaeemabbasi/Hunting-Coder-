import fs from "fs";
import React, { useEffect, useState } from "react";
import styles from "styles/SingleBlog.module.css";

const slug = (props) => {
  const [blog, setBlog] = useState(props.singleBlog);
  function createMarkup(c) {
    return { __html: c };
  }

  return (
    <div className={styles.container}>
      <h1>{blog && blog.description}</h1>
      <hr />
      {
        <p className={styles.para}>
          {blog && (
            <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>
          )}
        </p>
      }
    </div>
  );
};
// export async function getServerSideProps(context) {
//   const {slug}=context.query

//   let url = `http://localhost:3000/api/readBlogs?slug=${slug}`;
//   let blogs = await fetch(url);
//   let SingleBlog = await blogs.json();
//   console.log(SingleBlog);

//   return {
//     props: {SingleBlog},
//   };
// }

export async function getStaticProps(context) {
  const { slug } = context.params;

  let data = fs.readFileSync(`BlogData/${slug}.json`, "utf-8");

  return {
    props: { singleBlog: JSON.parse(data) },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "how-to-learn-Python" } },
      { params: { slug: "how-to-learn-javaScript" } },
      { params: { slug: "how-to-learn-Django" } },
    ],
    fallback: true, // false or 'blocking'
  };
}

export default slug;
