import { FC } from "react";
import styles from "./CardGrid.module.css";
import { Card } from "./Card";

type ProductRating = {
  rate: number;
  count: number;
}

export type CardProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ProductRating;
}


type CardGridProps = {
  headline: string;
  items: CardProps[];
  subheadline: string;
}

export const CardGrid: FC<CardGridProps> = ({ headline, items, subheadline }) => {

  const cards =
    items &&
    items.map((item) => {
      const { id, title, price, description, category, image, rating } = item;
      return (
        <div key={id} className={styles.gridItem}>
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
