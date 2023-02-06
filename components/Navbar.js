import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/" legacyBehavior>
            <a className={styles.anchorTag}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/About" legacyBehavior>
            <a className={styles.anchorTag}>About</a>
          </Link>
        </li>
        <li>
          {" "}
          <Link href="/Contact" legacyBehavior>
            <a className={styles.anchorTag}>Contact</a>
          </Link>
        </li>
        <li>
          {" "}
          <Link href="/Blog" legacyBehavior>
            <a className={styles.anchorTag}>Blog</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
