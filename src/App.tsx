import Header from "./components/Header";
import Nav from "./components/Nav";
import Product from "./components/Product/Product";
import axios from "axios";
import datatype from "./type/types";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState<datatype[]>([]);
  useEffect(() => {
    axios.get("http://localhost:8000/requests").then((result) => {
      setData(result.data);
    });
  }, []);

  return (
    <>
      <Nav />
      <Header />
      <Product data={data} />
    </>
  );
}

export default App;
