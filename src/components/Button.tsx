import styles from "./Button.module.css"; // Import css modules stylesheet as styles
import { FC } from 'react';

export interface ButtonProps {
	text: string;
}


export const Button: FC<ButtonProps> = (props) => {
  return <button className={styles.primary}>{props.text}</button>;
};
