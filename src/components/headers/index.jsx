import styles from "./index.module.scss";
import GoHome from "../buttons/GoHome";
import UserImg from "../user/UserImg";

export default function Header() {
  return (
    <main className={styles.wrapper}>
      <GoHome />
      <UserImg size={20} />
    </main>
  );
}
