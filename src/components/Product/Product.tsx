import Card from "./Card";
import datatype from "../../type/types";
import "./Product.scss";

const Product: React.FC<{ data: datatype[] }> = ({ data }) => {
  console.log(data);
  return (
    <div className='productWrap'>
      {data.map((data) => (
        <Card data={data} key={data.id} />
      ))}
    </div>
  );
};

export default Product;
