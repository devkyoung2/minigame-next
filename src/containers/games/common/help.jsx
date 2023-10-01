import styles from "./help.module.scss";
import GameStart from "@/components/buttons/GameStart";

export default function help({ onClick }) {
  return (
    <main className={styles.wrapper}>
      <div className={styles.help}>
        <p>인공지능과 끝말잇기를 해보세요!</p>
        <p>시작 버튼을 누르면 게임이 시작됩니다.</p>
      </div>
      <GameStart onClick={onClick} />
    </main>
  );
}
