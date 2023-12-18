import { FC } from "react";
import styles from "./CardGrid.module.css";
import { Card } from "./Card";

export interface CardProps {
  id: string;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: string;
    count: number;
  }
}

interface CardGridProps {
  items: CardProps[];
  headline: string;
  subheadline: string;
}

export const CardGrid: FC<CardGridProps> = (props) => {
  const { items, headline, subheadline } = props;
  
  const cards =
    items &&
    items.map((item) => {
      const { id, title, price, description, category, image, rating } = item;

      return (
        <div className={styles.gridItem}>
          <Card
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
    <div className={styles.container}>
      <h1 className={styles.headline}>{headline}</h1>
      <p className={styles.subHeadline}>{subheadline}</p>
      <div className={styles.grid}>{cards}</div>
    </div>
  );
};
