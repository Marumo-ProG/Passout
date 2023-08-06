// MUI
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

// react-dom
import { Outlet } from "react-router-dom";

// images
import Logo from "../images/UL_logo-removebg-preview.png";

const Layout = () => {
  return (
    <Stack width={"100%"} height={"100%"} direction={"row"}>
      <Stack
        width={"50%"}
        position={"relative"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ backgroundColor: "#B8C7E6" }}
        display={{ xs: "none", sm: "none", md: "none", lg: "flex" }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontWeight: 700,
            color: "white",
            position: "absolute",
            bottom: 10,
          }}
          textAlign={"center"}
        >
          Pass Out
        </Typography>
        <img src={Logo} alt="University of Limpopo" />
      </Stack>
      <Stack
        width={{ xs: "100%", sm: "100%", md: "100%", lg: "50%" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Outlet />
      </Stack>
    </Stack>
  );
};
export default Layout;
