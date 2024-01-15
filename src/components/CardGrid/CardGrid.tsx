import { FC } from "react";
import styles from "./CardGrid.module.css";
import { Card } from "./Card";

export const CardGrid: FC<CardGridProps> = (props) => {

  const cards =
    props.items &&
    props.items.map((item) => {
  
      return (
        <div className={styles.gridItem}>
          <Card
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            category={item.category}
            image={item.image}
            rating={item.rating}
          />
        </div>
      );
    });

  return (
    <div className={styles.element}>
      <h1 className={styles.headline}>{props.headline}</h1>
      <p className={styles.subHeadline}>{props.subheadline}</p>
      <div className={styles.grid}>{cards}</div>
    </div>
  );
};

type CardGridProps = {
  headline: string,
  subheadline: string
  items: CardProps[]
}

export type CardProps = {
  id: string,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number
  }
}
