import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { CardGrid } from "./components";
import { type Product } from "./components";

function App() {
  const [data, setData] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products"); // Replace with your API endpoint
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
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && (
        <CardGrid headline="headline" subheadline="subhead" items={data} />
      )}
    </div>
  );
}

export default App;
