"use client";

import styles from "./About.module.css";
import Image from "next/image";
import DotsAnimation from "../components/dotsAnimation";
import HeroMainImage from "../components/heroMainImage";
import FormBtn from "../ui/FormBtn";

export default function FormElements() {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <div className={styles.text_box}>
          <div className={styles.content_area}>
            <span className={styles.pre_title}>About Us</span>
            <h2 className={styles.title}>
              <span className="hollow-text">trusted</span> by worldwide clients
              since
              <span className={styles.featured_text}>
                {" "}
                1980.{" "}
                <Image
                  className={styles.featured_text_img}
                  src="/img/underLine.svg"
                  alt="underLine"
                  width={20}
                  height={20}
                />{" "}
              </span>
            </h2>
          </div>
          <p className={styles.about_text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A officia
            molestiae dolorum tempora ut accusamus cupiditate! Nesciunt tempora
            reiciendis libero voluptate!
          </p>
          <div className={styles.info}>
            <div>
              <h5 className={styles.info_title}>first on field </h5>
              <p className={styles.info_text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, iste
              </p>
            </div>
            <div>
              <h5 className={styles.info_title}>easy to reach </h5>
              <p className={styles.info_text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, iste
              </p>
            </div>
          </div>
          <div className={styles.info}>
            <div>
              <h5 className={styles.info_title}>worldwide services </h5>
              <p className={styles.info_text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, iste
              </p>
            </div>
            <div>
              <h5 className={styles.info_title}>24/7 support </h5>
              <p className={styles.info_text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, iste
              </p>
            </div>
          </div>
          <FormBtn>Get in Touch</FormBtn>
        </div>
        <HeroMainImage src={"/img/about.png"} />
      </div>
    </div>
  );
}
