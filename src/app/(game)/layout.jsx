import styles from "./layout.module.scss";
import Header from "@/components/headers";

export default function GameLayout({ children }) {
  return (
    <main className={styles.wrapper}>
      <Header></Header>
      <div>title</div>

      <div>{children}</div>
      <footer>ss</footer>
    </main>
  );
}
