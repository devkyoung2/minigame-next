import UserImg from "../user/UserImg";
import styles from "./index.module.scss";
export default function index() {
  return (
    <main className={styles.wrapper}>
      <UserImg size={48} margin={5}></UserImg>
      <div className={styles.bubbles}>
        <div className={styles.userid}>경이</div>
        <div className={styles.text}>ㄹㅇ말풍선</div>
      </div>
    </main>
  );
}
