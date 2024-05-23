import Input from "../components/input";
import styles from "./Footer.module.css";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";
import { FaTelegram, FaLinkedin, FaViber, FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import FormBtn from "../ui/FormBtn";
import Textarea from "../components/textArea";

export default function Footer() {
  return (
    <div className={styles.contactBox} id="contact">
      <p className={styles.contactHeader}>
        Lets's Bring your ideas to life together
      </p>
      <div className={styles.contactInfoBox}>
        <p className={styles.contactInfoHeader}>
          Don't wait for an opportunity Let's create it together
        </p>
        <div className={styles.contactInfoItem}>
          <MdOutlineEmail size={"4rem"} />
          <div className={styles.contactInfoTextBox}>
            <p className={styles.contactInfoText}>You can email us</p>
            <a className={styles.contactInfoLink}>hello@codcraft.com</a>
          </div>
        </div>
        <div className={styles.contactInfoItem}>
          <MdOutlineLocalPhone size={"4rem"} />
          <div className={styles.contactInfoTextBox}>
            <p className={styles.contactInfoText}>or give us a call</p>
            <a className={styles.contactInfoLink}>+380 (00) 000 00 00</a>
          </div>
        </div>
        <div className={styles.contactInfoItem}>
          <p className={styles.contactInfoText}>or write us in:</p>
          <div className={styles.icon}>
            <FaTelegram size={"3rem"} />
          </div>
          <div className={styles.icon}>
            <FaViber size={"3rem"} />
          </div>
          <div className={styles.icon}>
            <IoLogoWhatsapp size={"3rem"} />
          </div>
          <div className={styles.icon}>
            <FaInstagram size={"3rem"} />
          </div>
          <div className={styles.icon}>
            <FaLinkedin size={"3rem"} />
          </div>
        </div>
      </div>
      <form className={styles.contactFormBox}>
        <Input placeholder="Enter your name" icon="name" />
        <Input placeholder="Enter your phone" icon="phone" />
        <Input placeholder="Enter your email" icon="email" />
        <Textarea placeholder="Enter your message" icon="message" />
        <div className={styles.StyledContactBtnBox}>
          <FormBtn>Send</FormBtn>
        </div>
      </form>
    </div>
  );
}
