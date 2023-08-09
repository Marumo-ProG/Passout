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
    <Stack spacing={2} height={"100%"} width={{ xs: "80%", md: "100%" }}>
      <h1>Home</h1>
      <Divider sx={{ width: "20%" }} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={4}>
          <Paper variant="elevation" elevation={3} sx={{ height: "200px" }}>
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
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
        <Grid item xs={12} md={4} lg={4}>
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
        <Grid item xs={12} md={4} lg={4}>
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

      <Divider />
      <Paper variant="elevation" elevation={3} sx={{ width: "100%" }}>
        <Stack height={"100%"} width={"100%"} padding={5}>
          <Typography variant="h4" component={"h1"}>
            Instructions
          </Typography>
          <br />
          <Typography variant="h5" component={"h1"}>
            This application was made for the resgistering and verifying of
            students devices upon entering and exiting of campus
          </Typography>
          <h5>
            *This application was made for the resgistering and verifying of
            students devices upon entering and exiting of campus
          </h5>
          <h5>
            *The students section shows the registered students together with
            their devices, to register a new student there is a button to add a
            student. You can also remove or edit student's information from
            there
          </h5>
          <h5>
            *To report a stolen device or review stolen reported devices you can
            go the report section, this page will allow you to report a missing
            device, confirm if a device has been found
          </h5>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default Dashboard;
