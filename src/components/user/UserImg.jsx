import Image from "next/image";
import styles from "./user.module.scss";

export default function UserImg(props) {
  const { size, margin } = props;
  return (
    <Image
      alt='userimg'
      src='/images/blank-profile.jpg'
      width={size}
      height={size}
      style={{ margin: margin, borderRadius: "100%" }}
    ></Image>
  );
}
