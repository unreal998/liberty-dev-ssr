"use client";

import styles from "./formElements.module.css";
import FormBtn from "../ui/FormBtn";
import Input from "../ui/Input";
import Checkbox from "../ui/Checkbox";

export default function FormElements() {
  return (
    <div className={styles.box}>
      <FormBtn>Send Your Message</FormBtn>
      <Input type={"text"} labelName={"Input"} id={"test"} />
      <Checkbox type={"checkbox"} labelName={"checkbox"} id={"checkbox"} />
    </div>
  );
}
