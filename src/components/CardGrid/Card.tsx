import { FC } from "react";
import styles from "./Card.module.css";
import { type CardProps } from "./CardGrid";

export const Card: FC<CardProps> = (props) => {
  const { title, price, description, category, image, rating } = props;

  return (
    <div className={styles.card}>
      <img
        src={image}
        alt={description}
        className={styles.image}
        width={1280}
        height={720}
      />
      <div className={styles.contentContainer}>
        <p className={styles.category}>{category}</p>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.price}>${price}</p>
        <p className={styles.description}>{description}</p>
        <p className={styles.rating}>Rating: {rating.rate} / 5</p>
        <p className={styles.reviews}>Number of reviews: {rating.count}</p>
      </div>
      <button className={styles.button}>Add to Cart</button>
    </div>
  );
};
