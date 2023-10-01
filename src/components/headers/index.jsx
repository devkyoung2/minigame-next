"use client";
import { usePathname } from "next/navigation";
import styles from "./index.module.scss";
import GoHome from "../buttons/GoHome";
import Login from "../buttons/Login";
import UserImg from "../user/UserImg";

export default function Header() {
  const pathname = usePathname();
  const loginauth = true;
  return (
    <main className={styles.wrapper}>
      <GoHome visible={pathname === "/"} />
      {loginauth ? <Login></Login> : <UserImg size={40} />}
    </main>
  );
}
