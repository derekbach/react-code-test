import { FC } from "react";
import styles from "./CardGrid.module.css";
import { Card } from "./Card";

export interface CardProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface CardGridProps {
  headline: string;
  subheadline: string;
  items: CardProps[]
}

export const CardGrid: FC<CardGridProps> = (props) => {

  const {headline, subheadline, items} = props;
  const cards =
    items &&
    items.map((item) => {
      const {id, image, description, category, title, price, rating} = item;
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
    <div>
      <h1 className={styles.headline}>{headline}</h1>
      <p className={styles.subHeadline}>{subheadline}</p>
      <div className={styles.grid}>{cards}</div>
    </div>
  );
};
