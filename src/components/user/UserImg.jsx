import styles from "./user.module.scss";
export default function UserImg() {
  return (
    <img
      className={styles.user_img}
      alt='profile'
      src='/images/blank-profile.jpg'
    ></img>
  );
}
