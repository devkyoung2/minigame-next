import axios from "axios";

export const isCheckWord = (word) => {
  console.log(word);
  axios
    .get(`&key=${process.env.NEXT_PUBLIC_WORD_API_KEY}&q=${"춤"}`)
    .then((res) => console.log(res));
};
