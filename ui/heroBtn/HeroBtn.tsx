import styles from "./HeroBtn.module.css";
import { ReactNode } from "react";

const HeroBtn = ({ children }: { children: ReactNode }) => {
  return <button className={styles.hero_btn}>{children}</button>;
};

export default HeroBtn;
