import { FC } from "react";
import styles from "./CardGrid.module.css";
import { Card, type Product } from "./Card";

export interface CardGridProps {
  headline?: string;
  subheadline?: string;
  items: Product[] | null;
}

export const CardGrid: FC<CardGridProps> = (props) => {
  const { headline, subheadline, items } = props;

  const cards =
    items &&
    items.map((item) => {
      const { id, title, price, description, category, image, rating } = item;
      return (
        <div className={styles.gridItem}>
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
        </div>
      );
    });

  return (
    <div>
      <h1 className={styles.headline}>{headline}</h1>
      <p className={styles.subHeadline}>{subheadline}</p>
      <div className={styles.grid}>{cards}</div>
    </div>
  );
};
