import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";

// icons
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import DevicesIcon from "@mui/icons-material/Devices";
import ErrorIcon from "@mui/icons-material/Error";

const Dashboard = () => {
  return (
    <Stack spacing={2} height={"100%"} width={"100%"}>
      <h1>Home</h1>
      <Divider sx={{ width: "20%" }} />
      <Grid container spacing={2}>
        <Grid item sm={12} md={4} lg={4}>
          <Paper
            variant="elevation"
            elevation={3}
            sx={{ width: "100%", height: "200px" }}
          >
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              width={"100%"}
              height={"100%"}
            >
              <PeopleAltIcon sx={{ fontSize: "60px" }} />
              <Typography
                variant={"h4"}
                sx={{ fontWeight: 700 }}
                component={"h4"}
              >
                {20}
              </Typography>
              <Typography variant={"body2"}>Students registered</Typography>
            </Stack>
          </Paper>
        </Grid>
        <Grid item sm={12} md={4} lg={4}>
          <Paper
            variant="elevation"
            elevation={3}
            sx={{ width: "100%", height: "200px" }}
          >
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              width={"100%"}
              height={"100%"}
            >
              <DevicesIcon sx={{ fontSize: "60px" }} />
              <Typography
                variant={"h4"}
                sx={{ fontWeight: 700 }}
                component={"h4"}
              >
                {22}
              </Typography>
              <Typography variant={"body2"}>Devices registered</Typography>
            </Stack>
          </Paper>
        </Grid>
        <Grid item sm={12} md={4} lg={4}>
          <Paper
            variant="elevation"
            elevation={3}
            sx={{ width: "100%", height: "200px" }}
          >
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              width={"100%"}
              height={"100%"}
            >
              <ErrorIcon sx={{ fontSize: "60px", color: "red" }} />
              <Typography
                variant={"h4"}
                sx={{ fontWeight: 700 }}
                component={"h4"}
              >
                {20}
              </Typography>
              <Typography variant={"body2"}>Reported Devices</Typography>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Dashboard;
