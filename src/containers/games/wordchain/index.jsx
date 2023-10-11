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
  const [wordLog, setWordLog] = useState(["단어"]);
  const [lastLetter, setLastLetter] = useState("어");
  const [validInput, setValidInput] = useState(true);
  const inputRef = useRef(null);

  const handleGameStart = () => setInGame(true);

  const handleWordSubmit = async (word) => {
    const isValidWord = await isCheckWord(lastLetter, word, wordLog);
    if (isValidWord === true) {
      // 확인된 단어일때
      setWordLog([...wordLog, word]); // 단어 log에 추가
      setLastLetter(word[word.length - 1]); // 마지막 단어 세팅
      setValidInput(true); //인풋창 O
    } else if (isValidWord === "USED_WORD") {
    } else {
      setValidInput(false); // 인풋창 X
    }
  };

  useEffect(() => {
    inputRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [wordLog]);
  useEffect(() => {}, [validInput]);
  return (
    <main className={styles.wrapper}>
      <GameTitle title={"끝말 잇기"} />
      {inGame || <Help onClick={handleGameStart} />}
      {inGame && (
        <div className={styles.game}>
          <Progressbar />
          <div className={styles.board}>
            {wordLog.map((word, index) => (
              <Bubble
                key={index}
                myturn={wordLog.indexOf(word) % 2 === 1}
                text={word}
                ref={inputRef}
              />
            ))}
          </div>
          <Input
            style={styles.input}
            isValid={validInput}
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
