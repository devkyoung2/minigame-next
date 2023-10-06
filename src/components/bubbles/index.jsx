import cx from "clsx";
import UserImg from "../user/UserImg";
import styles from "./index.module.scss";
export default function index({ myturn, text, ref }) {
  return (
    <main className={cx(styles.wrapper, myturn && styles.reverse)}>
      {myturn || <UserImg size={48} margin={5} />}
      <div className={styles.bubbles}>
        <div className={styles.userid}>경이</div>
        <div className={styles.text}>{text}</div>
      </div>
      {myturn && <UserImg size={48} margin={5} />}
    </main>
  );
}
