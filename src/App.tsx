import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { CardGrid, type CardProps } from "./components/CardGrid";
import { Helmet } from "react-helmet-async";

function App() {
  const [data, setData] = useState<CardProps[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <Helmet>
        <meta name="description" content="Listing of products" />
      </Helmet>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && (
        <CardGrid
          headline="Top Products"
          subheadline="Our most popular products"
          items={data}
        />
      )}
    </div>
  );
}

export default App;
