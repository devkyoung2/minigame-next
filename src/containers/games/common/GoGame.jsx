import Link from "next/link";
import Image from "next/image";
import styles from "./GoGame.module.scss";

export default function GoGame({ props }) {
  const { title, url } = props;
  return (
    <Link href='/word_chain' className={styles.wrapper}>
      <Image
        src={url}
        height={140}
        width={140}
        alt={title}
        className={styles.img}
      />
      <p className={styles.title}>{title}</p>
    </Link>
  );
}
