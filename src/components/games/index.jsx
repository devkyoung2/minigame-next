import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.scss";

export default function Game({ props }) {
  const { title, url } = props;
  return (
    <Link href='/updown'>
      <div className={styles.wrapper}>
        <Image
          src={url}
          height={160}
          width={160}
          alt={title}
          className={styles.img}
        ></Image>
        <p className={styles.title}>{title}</p>
      </div>
    </Link>
  );
}
