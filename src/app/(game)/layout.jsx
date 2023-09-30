import styles from "./layout.module.scss";
import Header from "@/components/headers";

export default function GameLayout({ children }) {
  return (
    <main className={styles.wrapper}>
      <Header />
      <div className={styles.game}>{children}</div>
    </main>
  );
}
