// react
import { useState } from "react";

// MUI
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";

const Students = () => {
  const [alignment, setAlignment] = useState("student");
  const handleChange = (alignment) => {
    if (alignment) {
      setAlignment(alignment.target.value);
    }
  };
  return (
    <Stack spacing={2} height={"100%"} width={"100%"}>
      <h1>Students</h1>
      <Divider sx={{ width: "20%" }} />
      <Stack
        alignSelf={"center"}
        alignItems={"center"}
        width={{ xs: "100%", sm: "100%", md: "40%", lg: "40%" }}
        spacing={3}
        padding={3}
      >
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="student">Student Name</ToggleButton>
          <ToggleButton value="number">Student Number</ToggleButton>
          <ToggleButton value="serial">Device Serial number</ToggleButton>
        </ToggleButtonGroup>
        <TextField placeholder="Search ..." fullWidth required />
      </Stack>
    </Stack>
  );
};

export default Students;
