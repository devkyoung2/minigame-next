import cx from "clsx";
import s from "./page.module.scss";
import Game from "@/components/games";
import Header from "@/components/headers";

// M(data)
const gamedata = [
  { title: "updown", url: "/images/updown.jpg" },
  { title: "a", url: "/images/game1.jpg" },
  { title: "b", url: "/images/game2.jpg" },
  { title: "c", url: "/images/game3.jpg" },
];
export default function Home() {
  return (
    <main className={s.wrapper}>
      <Header></Header>
      <div className={s.title}>Welcome!</div>
      <div className={s.title}>
        <span>Kyoung's</span>
        <span className={cx(s.title, s.title_point)}> MiniGame</span>
      </div>
      <div className={s.gamelist}>
        {gamedata.map((game, index) => (
          <Game props={game} key={index}></Game>
        ))}
      </div>
    </main>
  );
}
