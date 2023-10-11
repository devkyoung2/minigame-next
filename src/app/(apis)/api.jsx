import axios from "axios";

export const isCheckWord = async (lastLetter, word, wordLog) => {
  if (wordLog.indexof(word) === -1) return "USED_WORD";
  if (word.length === 1) return false;
  const res = await axios.get(
    `https://krdict.korean.go.kr/api/search?&key=${process.env.NEXT_PUBLIC_WORD_API_KEY}&q=${word}&part=word&advanced=y&method=exact`
  );
  let XMLParser = require("react-xml-parser");
  let xml = new XMLParser().parseFromString(res.data.toString()).children;
  const result = xml.filter((word) => word.name === "item");

  const isValidWord = result.length !== 0 && lastLetter === word[0];
  return isValidWord;
};
