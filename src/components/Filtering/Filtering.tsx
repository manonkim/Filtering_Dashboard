import { Checkbox } from "@mui/material";
import { useState } from "react";
import "./Filtering.scss";

const Filtering: React.FC<{ title: string; filtering: string[] }> = ({
  title,
  filtering,
}) => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownHandler = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className='Container' onClick={dropdownHandler}>
      <div className='filterBox'>
        <div className='filterWrap'>
          <p className='filterTitle'>{title}</p>
          <img
            className='dropdown'
            src='../../img/dropdown.png'
            alt='dropdown'
          />
        </div>
      </div>
      {dropdown === true && (
        <div className='filterMenu'>
          {filtering.map((data) => (
            <div key={data}>
              <Checkbox
                // checked={checked}
                // onChange={handleChange}
                size='small'
                className='checkbox'
              />
              <span className='filterMenuMaterial'>{data}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filtering;
