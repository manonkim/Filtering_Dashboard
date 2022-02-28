import { Checkbox } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filteringActions } from '../../../store';
import './Filtering.scss';

const Filtering: React.FC<{
  title: string;
  formData: any;
}> = ({ title, formData }) => {
  const [dropdown, setDropdown] = useState(false);
  const modal: any = useRef();

  const dispatch = useDispatch();
  const filtering = useSelector((state: any) => state.filtering);
  const methodlength = filtering.methodItems.length;
  const materiallength = filtering.materialItems.length;

  const dropdownHandler = (e: any) => {
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

  const switchLength = () => {
    if (methodlength > 0 && title === '가공방식') {
      return (
        <div
          className="filterWrap"
          onClick={dropdownHandler}
          style={{ color: 'white', backgroundColor: '#1565C0' }}
        >
          {title} ({methodlength})
          <img
            className="dropdown"
            src="../../img/dropdown.png"
            alt="dropdown"
          />
        </div>
      );
    } else if (materiallength > 0 && title === '재료') {
      return (
        <div
          className="filterWrap"
          onClick={dropdownHandler}
          style={{ color: 'white', backgroundColor: '#1565C0' }}
        >
          {title} ({materiallength})
          <img
            className="dropdown"
            src="../../img/dropdown.png"
            alt="dropdown"
          />
        </div>
      );
    } else
      return (
        <div className="filterWrap" onClick={dropdownHandler}>
          {title}
          <img
            className="dropdown"
            src="../../img/dropdown.png"
            alt="dropdown"
          />
        </div>
      );
  };

  return (
    <div className="Container" ref={modal}>
      <div className="filterBox">{switchLength()}</div>
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
