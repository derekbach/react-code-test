import { FC } from "react";
import styles from "./Card.module.css";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}

export const Card: FC<Product> = (props) => {
  const { title, price, description, category, image, rating } = props;

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={image}
          alt={description}
          className={styles.image}
        />
      </div>

      <h2>{title}</h2>
      <p>${price}</p>
      <p>{description}</p>
      <p>{category}</p>
      <p>{rating.rate} / 5</p>
      <p># of ratings: {rating.count}</p>
      <p></p>
    </div>
  );
};
