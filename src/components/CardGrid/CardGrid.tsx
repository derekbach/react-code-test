import { FC } from "react";
import styles from "./CardGrid.module.css";
import { Card, type Product } from "../Card";

export interface CardGridProps {
  headline?: string;
  subheadline?: string;
  items: Product[] | null;
}

export const CardGrid: FC<CardGridProps> = (props) => {
  const { headline, subheadline, items } = props;

  const productCards =
    items &&
    items.map((item) => {
      const { id, title, price, description, category, image, rating } = item;
      return (
        <Card
          key={id}
          id={id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}
          rating={rating}
        />
      );
    });

  return (
    <div className={styles.cardGrid}>
      <h2>{headline}</h2>
      <p>{subheadline}</p>
      <div className={styles.grid}>{productCards}</div>
    </div>
  );
};
