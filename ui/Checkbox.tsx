import styles from "./Checkbox.module.css";

type InputProps = {
  labelName: string;
  id: string;
};

const Checkbox = ({ labelName, id }: InputProps) => {
  return (
    <div className={styles.box}>
      <label className={styles.input_label} htmlFor={id}>
        {labelName}
      </label>
      <input className={styles.text_input} id={id} name={id} type="checkbox" />
    </div>
  );
};

export default Checkbox;
