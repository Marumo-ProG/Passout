// MUI
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

// components
import Drawer from "../components/Drawer";

import { Outlet } from "react-router-dom";
const Dash = () => {
  return (
    <Drawer>
      <Outlet />
    </Drawer>
  );
};
export default Dash;
