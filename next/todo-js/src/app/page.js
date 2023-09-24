import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <div>Welcome Kyoung's MiniGame World!</div>

      {/* <Link href='updown'>
        <div>
          <Image
            src='/images/profile.jpg' // Route of the image file
            height={144} // Desired size with correct aspect ratio
            width={144} // Desired size with correct aspect ratio
            alt='Your Name'
          ></Image>
          <p>🍀 Get Up&Down 🍀</p>
        </div>
      </Link> */}

      {/* <Link href='updown'>🍀 Get NumberBaseBall 🍀</Link>
      <Link href='updown'>🍀 Get FindBomb 🍀</Link>
      <Link href='updown'>🍀 Get Hopscotch 🍀</Link> */}
    </main>
  );
}
