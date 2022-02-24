import { useState } from "react";
import Switch from "@mui/material/Switch";

export default function Toggle() {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: any) => {
    setChecked(event.target.checked);
  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
}
