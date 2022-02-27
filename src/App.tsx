import { Provider } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import store from './store';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Product from './components/Product/Product';
import datatype from './type/types';

function App() {
  const [data, setData] = useState<Array<datatype>>([]);
  useEffect(() => {
    async function getData() {
      try {
        await axios.get('http://localhost:4000/requests').then((res) => {
          setData(res.data);
        });
      } catch (err) {
        console.log('서버가 응답하지않습니다.');
      }
    }
    getData();
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
