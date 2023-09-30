import styles from "./page.module.scss";

import GameTitle from "../GameTitle";

export default function page({ props }) {
  return (
    <main className={styles.wrapper}>
      <GameTitle props={"up-down"} className={styles.title} />
      <div className={styles.game}>게임보드</div>
    </main>
  );
}
