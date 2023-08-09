// react
import { useNavigate } from "react-router-dom";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

const Login = () => {
  const Navigate = useNavigate();
  return (
    <Stack
      height={"100%"}
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack
        width={{ xs: "100%", sm: "100%", md: "100%", lg: "50%" }}
        spacing={2}
      >
        <Typography variant="h5" component={"h5"}>
          Login
        </Typography>
        <Divider></Divider>
        <TextField placeholder="Worker ID" />
        <TextField type="password" placeholder="Password" />
        <Typography href={"/password-reset"} component="a">
          Forgot Password
        </Typography>
        <Stack width={"100%"} alignItems={"center"}>
          <Button
            type="submit"
            variant="contained"
            sx={{ width: "40%" }}
            onClick={() => Navigate("admin")}
          >
            Login
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default Login;
