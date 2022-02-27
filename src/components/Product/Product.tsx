import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import './Product.scss';
import datatype from '../../type/types';

export default function Product({ data }: { data: Array<datatype> }) {
  const [filterData, setFilterData] = useState<any>([]);
  const toggle = useSelector((state: any) => state.toggle);
  const filtering = useSelector((state: any) => state.filtering);

  useEffect(() => {
    toggle.checked === true
      ? setFilterData(data.filter((item: any) => item.status !== '대기중'))
      : setFilterData(data);
  }, [toggle.checked, data]);

  useEffect(() => {
    let datasave: any = data;
    filtering.methodItems.forEach((method: any) => {
      datasave = datasave.filter((item: any) => item.method.includes(method));
    });
    filtering.materialItems.forEach((material: any) => {
      datasave = datasave.filter((item: any) =>
        item.material.includes(material)
      );
    });
    setFilterData(datasave);
  }, [data, filtering.methodItems, filtering.materialItems]);

  return (
    <>
      <div className="productWrap">
        {filterData.map((data: any) => (
          <Card data={data} key={data.id} />
        ))}
      </div>
      {filterData.length < 1 && (
        <div className="productNone">
          <div className="productNoneText">
            조건에 맞는 견적 요청이 없습니다.
          </div>
        </div>
      )}
    </>
  );
}
