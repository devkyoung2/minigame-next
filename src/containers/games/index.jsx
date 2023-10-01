import styles from "./index.module.scss";
import Header from "@/components/headers";

export default function GamesLayout({ children }) {
  return (
    <main className={styles.wrapper}>
      <Header />
      <div className={styles.game}>{children}</div>
    </main>
  );
}
