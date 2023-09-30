import styles from "./buttons.module.scss";
import { LeftArror } from "../../../public/svgs/svgs";

export default function GoHome() {
  return (
    <button className={styles.wrapper}>
      <LeftArror className={styles.icons} />
    </button>
  );
}
