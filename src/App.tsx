import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Product from "./components/Product/Product";
import axios from "axios";
import datatype from "./type/types";
import { Provider } from "react-redux";
import store from "./store";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState<datatype[]>([]);
  useEffect(() => {
    axios.get("http://localhost:8000/requests").then((result) => {
      setData(result.data);
    });
  }, []);

  return (
    <Provider store={store}>
      <Nav />
      <Header />
      <Product data={data} />
    </Provider>
  );
}

export default App;
