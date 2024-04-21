import styles from "./Input.module.css";

type InputProps = {
  type: string;
  labelName: string;
  id: string;
};

const Input = ({ type, labelName, id }: InputProps) => {
  return (
    <div className={styles.box}>
      <label className={styles.input_label} htmlFor={id}>
        {labelName} <span className={styles.req}>*</span>
      </label>
      <input
        className={styles.text_input}
        id={id}
        name="UserName"
        type={type}
      />
    </div>
  );
};

export default Input;
