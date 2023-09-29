import styles from "./game.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Game() {
  return (
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
  );
}
