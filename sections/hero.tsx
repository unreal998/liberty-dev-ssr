import styles from "./Hero.module.css";
import Image from "next/image";
import IconsList from "../ui/iconsList/IconsList";
import HeroBtn from "../ui/heroBtn/HeroBtn";
import DotsAnimation from "../components/dotsAnimation";
import HeroMainImage from "../components/heroMainImage";

import { type getDictionary } from "../get-dictionary";

export default function Hero({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["homeSection"];
}) {
  return (
    <div className={styles.box}>
      <div className={styles.box_bg}></div>
      <DotsAnimation />
      <div className={styles.container}>
        <div className={styles.text_box}>
          <IconsList />
          <p className={styles.pre_title}>{dictionary.ITSolutions}</p>
          <h1 className={styles.hero_title}>
            {dictionary.providingIT}
            <span className={styles.featured_text}>
              {" "}
              {dictionary.solutions}
              <Image
                className={styles.featured_text_img}
                src="/img/waveLine.svg"
                alt="waveLine"
                width={20}
                height={20}
              />{" "}
            </span>
            <span className={styles.design_element}></span>
          </h1>
          <p className={styles.hero_subtitle}>{dictionary.subHeader}</p>
          <HeroBtn>{dictionary.contactUs}</HeroBtn>
        </div>
        <HeroMainImage />
      </div>
    </div>
  );
}
