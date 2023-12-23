import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Routing from "./Routes/routes";

function App() {
  const [data, setData] = useState({
    status: false,
    products: [],
    categories: [],
    meta: {},
  });

  useEffect(() => {
    axios
      .get(
        "https://api.slingacademy.com/v1/sample-data/products?offset=0&limit=100"
      )
      .then((res) => {
        const categories = res.data.products.reduce((cat, items) => {
          !cat.includes(items.category) && cat.push(items.category);
          return cat;
        }, []);
        setData({
          status: res.data.success,
          products: res.data.products,
          categories: categories,
          meta: {
            total: res.data.total_products,
            loaded: res.data.limit,
          },
        });
      });
  }, []);
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;
