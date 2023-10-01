"use client";
import { useState } from "react";
import styles from "./index.module.scss";
import GameTitle from "../common/GameTitle";
import Progressbar from "@/components/progressbars";
import Input from "@/components/inputs";
import Bubble from "@/components/bubbles";
import Help from "../common/help.jsx";

export default function WordChain({ props }) {
  const [inGame, setInGame] = useState(false);
  const handleGameStart = () => {
    setInGame(true);
  };
  return (
    <main className={styles.wrapper}>
      <GameTitle props={"끝말 잇기"} className={styles.title} />
      {inGame ? null : <Help onClick={handleGameStart} />}
      {!inGame ? null : (
        <div className={styles.game}>
          <Progressbar />
          <div className={styles.board}>
            <Bubble />
          </div>
          <div className={styles.input}>
            <Input />
          </div>
        </div>
      )}
    </main>
  );
}
