import { FC } from "react";
import styles from "./CardGrid.module.css";
import { Card } from "./Card";


export const CardGrid: FC<CardGridProps> = (props) => {

  const cards =
    items &&
    items.map((item) => {
      
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
