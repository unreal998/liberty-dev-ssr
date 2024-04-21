"use client";

import styles from "./formElements.module.css";
import FormBtn from "../ui/FormBtn";
import Input from "../ui/Input";
import Checkbox from "../ui/Checkbox";
import RadioButton from "../ui/RadioButton";

export default function FormElements() {
  return (
    <div className={styles.box}>
      <FormBtn>Send Your Message</FormBtn>
      <Input type={"text"} labelName={"Input"} id={"test"} />
      <Checkbox labelName={"checkbox"} id={"checkbox"} />
      <RadioButton labelName={"Radio Button"} id={"radio"} />
    </div>
  );
}
