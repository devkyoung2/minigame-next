"use client";
import { usePathname } from "next/navigation";
import styles from "./index.module.scss";
import GoHome from "../buttons/GoHome";
import UserImg from "../user/UserImg";

export default function Header() {
  const pathname = usePathname();
  return (
    <main className={styles.wrapper}>
      <GoHome visible={pathname !== "/"} />
      <UserImg size={20} />
    </main>
  );
}
