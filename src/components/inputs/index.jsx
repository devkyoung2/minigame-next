"use client";
import { useState } from "react";
import cx from "clsx";
import styles from "./index.module.scss";

export default function index(props) {
  const { style, onSubmit, placeholder } = props;
  const [value, setValue] = useState();
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === undefined) return;
    onSubmit(value);
    setValue();
  };

  return (
    <form
      className={cx(styles.wrapper, style)}
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        type='text'
        placeholder={placeholder}
        className={styles.input}
        value={value || ""}
        onChange={handleInputChange}
      ></input>
      <button className={styles.button} type='submit'>
        입력
      </button>
    </form>
  );
}
