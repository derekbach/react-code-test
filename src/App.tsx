import styles from "./App.module.css";

import { Button } from "./components/Button";

function App() {
  return (
    <div className={styles.container}>
      <Button text="Button Text"/>
    </div>
  );
}

export default App;
