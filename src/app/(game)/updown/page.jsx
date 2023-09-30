import styles from "./page.module.scss";
import Progressbar from "@/components/progressbar";
import Input from "@/components/input";
import GameTitle from "../GameTitle";

export default function page({ props }) {
  return (
    <main className={styles.wrapper}>
      <GameTitle props={"끝말잇기"} className={styles.title} />
      <div className={styles.game}>
        <Progressbar />
        <div className={styles.board}></div>
        <div className={styles.input}>
          <Input></Input>
        </div>
      </div>
    </main>
  );
}