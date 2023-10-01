import styles from "./buttons.module.scss";
import cx from "clsx";
export default function Login() {
  return (
    <button
      className={cx(styles.wrapper, { [styles.visible]: false }, styles.login)}
    >
      💗 로그인
    </button>
  );
}
