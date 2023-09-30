import styles from "./index.module.scss";
export default function index() {
  return (
    <form className={styles.wrapper}>
      <input
        type='text'
        placeholder={`'${"슭"}' 자로 끝나는 단어를 입력하세요!`}
        className={styles.input}
      ></input>
      <button className={styles.button}>입력</button>
    </form>
  );
}
