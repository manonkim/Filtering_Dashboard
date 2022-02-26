import { Switch } from '@mui/material';
import { useDispatch } from 'react-redux';
import { toggleActions } from '../../../store/index';

export default function Toggle() {
  const dispatch = useDispatch();
  const handleChange = (event: any) => {
    dispatch(toggleActions.onToggle());
  };

  return <Switch onChange={handleChange} />;
}
