import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import Box from "./components/Box";

export default function App() {
  return (
    <div className="App">{Box ? <Box /> : <p id="loading">Loading...</p>}</div>
  );
}
