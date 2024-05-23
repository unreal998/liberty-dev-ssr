"use client";

import styles from "./input.module.css";
import {
  MdOutlineEmail,
  MdOutlineLocalPhone,
  MdOutlinePermIdentity,
} from "react-icons/md";

type InputProps = {
  placeholder: string;
  icon: "email" | "phone" | "name";
};

export default function Input({ placeholder, icon }: InputProps) {
  const isError = false;

  function iconSwitch() {
    if (icon === "email")
      return (
        <MdOutlineEmail
          size={"2.4rem"}
          color={isError ? "red" : "var(--color-3)"}
        />
      );
    if (icon === "phone")
      return (
        <MdOutlineLocalPhone
          size={"2.4rem"}
          color={isError ? "red" : "var(--color-3)"}
        />
      );
    if (icon === "name")
      return (
        <MdOutlinePermIdentity
          size={"2.4rem"}
          color={isError ? "red" : "var(--color-3)"}
        />
      );
    else return null;
  }

  return (
    <div className={styles.formGroup}>
      <div className={styles.icon}>{iconSwitch()}</div>
      <input
        className={`${styles.formField} ${isError ? styles.error : ""}`}
        id={placeholder}
        type="input"
        placeholder={placeholder}
      />
      <label className={styles.formLabel} htmlFor={placeholder}>
        {placeholder}
      </label>
      {isError && <p className={styles.errorText}>This field is required</p>}
    </div>
  );
}
