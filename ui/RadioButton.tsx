import styles from "./RadioButton.module.css";

type InputProps = {
  labelName: string;
  id: string;
};

const RadioButton = ({ labelName, id }: InputProps) => {
  return (
    <div className={styles.box}>
      <label className={styles.input_label} htmlFor={id}>
        {labelName}
      </label>
      <input className={styles.text_input} type="radio" id={id} name={id} />
    </div>
  );
};

export default RadioButton;
