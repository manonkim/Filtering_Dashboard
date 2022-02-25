import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Product from "./components/Product/Product";

function App() {
  return (
    <Provider store={store}>
      <Nav />
      <Header />
      <Product />
    </Provider>
  );
}

export default App;
