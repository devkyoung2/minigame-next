import React from "react";
import styles from "./index.module.scss";

export default function Button() {
  return <button className={styles.wrapper}>버</button>;
}

// @import "@/styles/mixins";

// .wrapper {
//   @include size(100px, 100px, 0px, 0px);
//   border: transparent;
//   border-radius: 100%;
//   background-color: var(--color-light-beige);
//   &:hover {
//     background-color: var(--color-dark-pink);
//   }
// }
