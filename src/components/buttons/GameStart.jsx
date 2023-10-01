import cx from "clsx";
import styles from "./buttons.module.scss";

export default function GameStart({ onClick }) {
  return (
    <button className={cx(styles.wrapper, styles.gamestart)} onClick={onClick}>
      <p>Game Start!</p>
    </button>
  );
}
