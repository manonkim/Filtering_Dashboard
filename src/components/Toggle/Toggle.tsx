import { Switch } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggleActions } from "../../store";

export default function Toggle() {
  const dispatch = useDispatch();
  const handleChange = (event: any) => {
    dispatch(toggleActions.onToggle());
  };

  // const toggle = useSelector((state: any) => state.toggle);

  // const toggleHandler = () => {
  //   if (toggle.checked === "true") {
  //     data.filter((item: any) => setToggleData(item.status.includes("상담중")));
  //   }
  // };
  // toggleHandler();
  return <Switch onChange={handleChange} />;
}
