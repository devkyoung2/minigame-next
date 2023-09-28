import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.title}>Welcome!</div>
      <div className={styles.title}>
        <span>Kyoung's</span>
        <span className={styles.title_point}> MiniGame</span>
      </div>
      <div className={styles.gamelist}>
        <Link href='updown'>
          <div className={styles.game}>
            <Image
              src='/images/updown.jpg' // Route of the image file
              height={160} // Desired size with correct aspect ratio
              width={160} // Desired size with correct aspect ratio
              alt='updown'
              className={styles.gameimg}
            ></Image>
            <p className={styles.gametitle}>Up&Down</p>
          </div>
        </Link>
        {/* <Link href='updown'>
          <div className={styles.game}>
            <Image
              src='/images/updown.jpg' // Route of the image file
              height={144} // Desired size with correct aspect ratio
              width={144} // Desired size with correct aspect ratio
              alt='Your Name'
              className={styles.gameimg}
            ></Image>
            <p>🍀 Get Up&Down 🍀</p>
          </div>
        </Link>
        <Link href='updown'>
          <div className={styles.game}>
            <Image
              src='/images/updown.jpg' // Route of the image file
              height={144} // Desired size with correct aspect ratio
              width={144} // Desired size with correct aspect ratio
              alt='Your Name'
              className={styles.gameimg}
            ></Image>
            <p>🍀 Get Up&Down 🍀</p>
          </div>
        </Link> */}
      </div>

      {/* <Link href='updown'>🍀 Get NumberBaseBall 🍀</Link>
      <Link href='updown'>🍀 Get FindBomb 🍀</Link>
      <Link href='updown'>🍀 Get Hopscotch 🍀</Link> */}
    </main>
  );
}
