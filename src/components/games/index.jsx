import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.scss";

export default function Game({ props }) {
  const { title, url } = props;
  return (
    <div className={styles.wrapper}>
      <Link href='/updown'>
        <Image
          src={url}
          height={140}
          width={140}
          alt={title}
          className={styles.img}
        ></Image>
        <p className={styles.title}>{title}</p>
      </Link>
    </div>
  );
}
