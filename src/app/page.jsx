import cx from "clsx";
import styles from "./page.module.scss";
import Game from "@/components/game";

// M(data)
const gamedata = [
  { title: "updown", url: "/images/updown.jpg" },
  { title: "a", url: "/images/game1.jpg" },
  { title: "b", url: "/images/game2.jpg" },
  { title: "c", url: "/images/game3.jpg" },
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
        {gamedata.map((game, index) => (
          <Game props={game} key={index}></Game>
        ))}
      </div>
    </main>
  );
}
