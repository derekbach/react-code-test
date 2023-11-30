import { FC } from "react";
import styles from "./Card.module.css";
import { type CardProps } from "./CardGrid";

export const Card: FC<CardProps> = (props) => {
  return (
    <div className={styles.card}>
      <img
        src={props.image}
        alt={props.description}
        className={styles.image}
        width={1280}
        height={720}
      />
      <div className={styles.contentContainer}>
        <p className={styles.category}>{props.category}</p>
        <h2 className={styles.title}>{props.title}</h2>
        <p>${props.price}</p>
        <p className={styles.description}>{props.description}</p>
        <p className={styles.rating}>Rating: {props.rating.rate} / 5</p>
        <p className={styles.reviews}>Number of reviews: {props.rating.count}</p>
      </div>
      <button className={styles.button}>Add to Cart</button>
    </div>
  );
};
