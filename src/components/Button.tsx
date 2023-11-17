import { FC } from "react";
import styles from "./Button.module.css";

export interface ButtonProps {
  text: string;
}

export const Button: FC<ButtonProps> = (props) => {
  const { text } = props;
  return <button className={styles.primary}>{text}</button>;
};
