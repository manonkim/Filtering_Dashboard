import { Checkbox } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { filteringActions } from '../../../store';
import './Filtering.scss';

const Filtering: React.FC<{
  title: string;
  formData: any;
}> = ({ title, formData }) => {
  const [dropdown, setDropdown] = useState(false);

  const modal: any = useRef();
  const dispatch = useDispatch();

  const dropdownHandler = () => {
    setDropdown(!dropdown);
  };

  const outsideClickHandler = (e: any) => {
    if (dropdown && !modal.current.contains(e.target)) {
      setDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', outsideClickHandler);
    return () => {
      document.removeEventListener('mousedown', outsideClickHandler);
    };
  });

  const checkHandler = (e: any) => {
    dispatch(filteringActions.checkbox(e.target.checked));
    if (title === '가공방식') {
      dispatch(filteringActions.method(e.target.value));
    } else {
      dispatch(filteringActions.material(e.target.value));
    }
  };

  return (
    <div className="Container" ref={modal}>
      <div className="filterBox">
        <div className="filterWrap" onClick={dropdownHandler}>
          <p className="filterTitle">{title}</p>
          <img
            className="dropdown"
            src="../../img/dropdown.png"
            alt="dropdown"
          />
        </div>
      </div>
      {dropdown === true && (
        <div className="filterMenu">
          {formData.map((item: any) => (
            <div key={item.id}>
              <Checkbox
                size="small"
                className="checkbox"
                value={item.name}
                title={item.title}
                onChange={(e) => checkHandler(e)}
              />
              <span className="filterMenuMaterial">{item.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filtering;
