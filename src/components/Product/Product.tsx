import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Card from './Card';
import './Product.scss';

const Product: React.FC = () => {
  const [data, setData] = useState<any>([]);
  const [filterData, setFilterData] = useState([]);

  const toggle = useSelector((state: any) => state.toggle);
  const filtering = useSelector((state: any) => state.filtering);

  useEffect(() => {
    axios.get('http://localhost:8000/requests').then((result) => {
      setData(result.data);
    });
  }, []);

  useEffect(() => {
    toggle.checked === true
      ? setFilterData(data.filter((item: any) => item.status !== '대기중'))
      : setFilterData(data);
  }, [toggle.checked]);

  useEffect(() => {
    setFilterData(
      data.filter((item: any) => item.method.includes(...filtering.items))
    );
  }, [filtering]);

  //type에 따라
  // filtertype ==='method' ? '가공방식':' 재료'

  return (
    <>
      <div className="productWrap">
        {filterData.map((data: any) => (
          <Card data={data} key={data.id} />
        ))}
      </div>

      <div className="productNone">
        <div className="productNoneText">조건에 맞는 견적 요청이 없습니다.</div>
      </div>
    </>
  );
};

export default Product;
