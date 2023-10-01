"use client";
import { useRouter } from "next/navigation";
import { LeftArror } from "../../../public/svgs/svgs";
import cx from "clsx";
import styles from "./buttons.module.scss";

export default function GoHome({ visible }) {
  const router = useRouter();
  return (
    <button
      className={cx(styles.wrapper, styles.home, { [styles.visible]: visible })}
      onClick={() => router.push("/")}
    >
      <LeftArror className={styles.icons} />
    </button>
  );
}
