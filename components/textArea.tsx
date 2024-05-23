import React from "react";
import styles from "./textArea.module.css";
import { MdOutlineTextsms } from "react-icons/md";

type InputProps = {
  placeholder: string;
  icon: string;
};

function Input({ placeholder, icon }: InputProps) {
  function iconSwitch() {
    if (icon === "message") {
      return <MdOutlineTextsms size={"2.2rem"} className={styles.icon} />;
    }
    return null;
  }

  return (
    <div className={styles.formGroup}>
      <div className={styles.icon}>{iconSwitch()}</div>
      <textarea
        id={placeholder}
        typeof="text"
        name={placeholder}
        placeholder={placeholder}
        className={styles.formField}
      />
      <label htmlFor={placeholder} className={styles.formLabel}>
        {placeholder}
      </label>
      {/* Тут можна додати повідомлення про помилки, якщо вони є */}
      {/* <p className={styles.errorMessage}>This field is required</p> */}
    </div>
  );
}

export default Input;
