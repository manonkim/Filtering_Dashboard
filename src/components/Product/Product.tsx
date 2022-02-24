import Card from "./Card";
import datatype from "../../type/types";
import "./Product.scss";

const Product: React.FC<{ data: datatype[] }> = ({ data }) => {
  return (
    <>
      <div className='productWrap' style={{ display: "none" }}>
        {data.map((data) => (
          <Card data={data} key={data.id} />
        ))}
      </div>
      <div className='productNone'>
        <div className='productNoneText'>조건에 맞는 견적 요청이 없습니다.</div>
      </div>
    </>
  );
};

export default Product;
