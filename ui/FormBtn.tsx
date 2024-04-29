import styles from "./FormBtn.module.css";
import { ReactNode } from "react";

const FormBtn = ({ children }: { children: ReactNode }) => {
  return <button className={styles.hero_btn}>{children}</button>;
};

export default FormBtn;
