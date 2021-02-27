import Head from "next/head";

import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
          repudiandae! Aspernatur dicta harum nemo ut sunt perferendis
          consequatur, molestias voluptatibus soluta labore ducimus possimus
          quasi, beatae deleniti blanditiis facere voluptate.
        </p>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
          beatae provident quae! Magni illo laboriosam, doloribus saepe ab
          dolorem eveniet possimus ratione excepturi, perferendis nesciunt
          repellendus atque laudantium minima vitae?
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja listing</a>
        </Link>
      </div>
    </>
  );
}
