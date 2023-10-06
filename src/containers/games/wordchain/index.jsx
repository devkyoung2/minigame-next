"use client";
import { useState, useRef, useEffect } from "react";
import { isCheckWord } from "@/app/(apis)/api";
import GameTitle from "../common/GameTitle";
import Help from "../common/help.jsx";
import Progressbar from "@/components/progressbars";
import Input from "@/components/inputs";
import Bubble from "@/components/bubbles";
import styles from "./index.module.scss";

export default function WordChain() {
  const [inGame, setInGame] = useState(false);
  const [log, setLog] = useState(["단어"]);
  const [lastLetter, setLastLetter] = useState("어");
  const [validInput, setValidInput] = useState(false);
  const current = useRef();
  const scrollToBottom = () => {
    current.current?.scrollIntoView({ behaviot: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, log);
  const handleGameStart = () => {
    setInGame(true);
  };
  const handleWordSubmit = async (word) => {
    const isValidWord = await isCheckWord(lastLetter, word);
    if (isValidWord) {
      setLog([...log, word]);
      setLastLetter(word[word.length - 1]);
      setValidInput(true);
    } else {
      setValidInput(false);
    }
  };
  return (
    <main className={styles.wrapper}>
      <GameTitle title={"끝말 잇기"} className={styles.title} />
      {inGame || <Help onClick={handleGameStart} />}
      {!inGame || (
        <div className={styles.game}>
          <Progressbar />
          <div className={styles.board}>
            {log.map((data, index) => (
              <Bubble
                key={index}
                myturn={log.indexOf(data) % 2 === 1}
                text={data}
                ref={log.length - 1 === index && current}
              />
            ))}
          </div>
          <Input
            type='wordChain'
            style={validInput ? styles.error_input : styles.input}
            onSubmit={handleWordSubmit}
            placeholder={
              lastLetter && `'${lastLetter}' 자로 시작하는 단어를 입력하세요!`
            }
          />
        </div>
      )}
    </main>
  );
}
