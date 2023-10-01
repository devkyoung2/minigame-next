import cx from "clsx";
import styles from "./page.module.scss";
import Game from "@/components/games";
import Header from "@/components/headers";

// M(data)
const gamedata = [
  { title: "updown", url: "/images/updown.jpg" },
  { title: "a", url: "/images/game1.jpg" },
  { title: "a", url: "/images/game1.jpg" },
  { title: "a", url: "/images/game1.jpg" },
  { title: "a", url: "/images/game1.jpg" },
];
export default function Home() {
  return (
    <main className={styles.wrapper}>
      <Header></Header>
      <div className={styles.title}>Welcome!</div>
      <div className={styles.title}>
        <span>Kyoung's</span>
        <span className={cx(styles.title, styles.title_point)}> MiniGame</span>
      </div>
      <div className={styles.gamelist}>
        {gamedata.map((game, index) => (
          <Games props={game} key={index}></Games>
        ))}
      </div>
    </main>
  );
}
