"use client";

import styles from "./Hero.module.css";
import Image from "next/image";
import IconsList from "../ui/IconsList";
import HeroBtn from "../ui/HeroBtn";
import DotsAnimation from "../components/dotsAnimation";
import HeroMainImage from "../components/heroMainImage";
import dynamic from "next/dynamic";

export default function Hero() {
  return (
    <div className={styles.box}>
      <div className={styles.box_bg}></div>
      <DotsAnimation />
      <div className={styles.container}>
        <div className={styles.text_box}>
          <IconsList />
          <p className={styles.pre_title}>IT Solutions</p>
          <h1 className={styles.hero_title}>
            providing the best services & IT
            <span className={styles.featured_text}>
              {" "}
              Solutions
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
          <p className={styles.hero_subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
            architecto dolorum inventore totam adipisci
          </p>
          <HeroBtn>Contact Us</HeroBtn>
        </div>
        <HeroMainImage />
      </div>
    </div>
  );
}
