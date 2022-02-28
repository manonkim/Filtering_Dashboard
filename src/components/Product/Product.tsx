import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import './Product.scss';
import datatype from '../../type/types';
import { ReducerType } from '../../store';

export default function Product({ data }: { data: Array<datatype> }) {
  const [filterData, setFilterData] = useState<datatype[]>([]);
  const toggle = useSelector((state: ReducerType) => state.toggle);
  const filtering = useSelector((state: ReducerType) => state.filtering);

  useEffect(() => {
    toggle.checked === true
      ? setFilterData(data.filter((item: any) => item.status !== '대기중'))
      : setFilterData(data);
  }, [toggle.checked, data]);

  useEffect(() => {
    let datasave: datatype[] = data;
    filtering.methodItems.forEach((method) => {
      datasave = datasave.filter((item: datatype) =>
        item.method.includes(method)
      );
    });
    filtering.materialItems.forEach((material) => {
      datasave = datasave.filter((item: datatype) =>
        item.material.includes(material)
      );
    });
    setFilterData(datasave);
  }, [data, filtering.methodItems, filtering.materialItems]);

  return (
    <>
      <div className="productWrap">
        {filterData.map((data: datatype) => (
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
