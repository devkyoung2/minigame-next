import cx from "clsx";
import styles from "./page.module.scss";
import Game from "@/components/game";

// M(data)
const gamedata = [
  { title: "", url: "" },
  { title: "", url: "" },
  { title: "", url: "" },
  { title: "", url: "" },
];
export default function Home() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.title}>Welcome!</div>
      <div className={styles.title}>
        <span>Kyoung's</span>
        <span className={cx(styles.title, styles.title_point)}> MiniGame</span>
      </div>
      <div className={styles.gamelist}>
        {gamedata.map((game) => (
          <Game></Game>
        ))}
      </div>
    </main>
  );
}
