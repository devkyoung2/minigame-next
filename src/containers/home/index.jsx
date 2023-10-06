import cx from "clsx";
import styles from "./index.module.scss";
import Header from "@/components/headers";
import GoGame from "@/containers/games/common/GoGame";
import Input from "@/components/inputs";
// M(data)
const gamedata = [
  { title: "word_chain", url: "/images/updown.jpg" },
  { title: "a", url: "/images/game1.jpg" },
  { title: "a", url: "/images/game1.jpg" },
  { title: "a", url: "/images/game1.jpg" },
  { title: "a", url: "/images/game1.jpg" },
];
export default function Home() {
  return (
    <main className={styles.wrapper}>
      <Header />
      <div className={styles.title}>Welcome!</div>
      <div className={styles.title}>
        <span>Kyoung's</span>
        <span className={cx(styles.title, styles.title_point)}> MiniGame</span>
      </div>
      <div className={styles.gamelist}>
        {gamedata.map((game, index) => (
          <GoGame props={game} key={index} />
        ))}
      </div>
    </main>
  );
}
