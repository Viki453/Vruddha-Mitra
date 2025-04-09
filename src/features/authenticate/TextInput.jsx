import styles from "./TextInput.module.css";

function TextInput({ placeHolder, value, onChange }) {
  return (
    <input
      type="text"
      placeholder={placeHolder}
      required
      value={value}
      onChange={onChange}
    />
  );
}

export default TextInput;
