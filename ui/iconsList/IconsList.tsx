import styles from "./IconsList.module.css";
import {
  FaFacebookF,
  FaYoutube,
  FaSquareXTwitter,
  FaInstagram,
} from "react-icons/fa6";

const IconsList = () => {
  return (
    <ul className={styles.icon_box}>
      <li>
        <FaFacebookF size={"2rem"} />
      </li>
      <li>
        <FaYoutube size={"2rem"} />
      </li>
      <li>
        <FaInstagram size={"2rem"} />
      </li>
      <li>
        <FaSquareXTwitter size={"2rem"} />
      </li>
    </ul>
  );
};

export default IconsList;
