import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.textCenter}>Hunting Coder</h1>
        <h2 className={styles.textCenter}>
          A hunting Blog for the coders by the hunting Coder
        </h2>
      </div>
    </>
  );
}
