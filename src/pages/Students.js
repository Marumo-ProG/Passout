// react
import { useState } from "react";

// MUI
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

// sample data
const students = [
  {
    firstName: "Lenny",
    lastName: "Thobejane",
    phoneNumber: "+27631958805",
    studentNumber: "20485001",
    address: {
      building: "Apartments on Jenkings",
      room: 139,
    },
    purpose: "",
    items: [
      {
        pk: 1,
        name: "HP core i3 model",
        serialNumber: "SXOjdsk5563df",
        Date: new Date(),
      },
    ],
  },
  {
    firstName: "Kutullo",
    lastName: "Nkopodi",
    phoneNumber: "+2769562535",
    studentNumber: "12658925",
    address: {
      building: "Zone 1",
      room: "",
    },
    purpose: "Access campus",
    items: [
      {
        pk: 1,
        name: "Lenovo Gamer series i7",
        serialNumber: "sisdi4266",
        Date: new Date(),
      },
    ],
  },
];

const Students = () => {
  const [alignment, setAlignment] = useState("student");
  const [modalData, setModalData] = useState(students[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleOpenModal = (data) => {
    setIsOpen(true);
    setModalData(data);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const handleChange = (alignment) => {
    if (alignment) {
      setAlignment(alignment.target.value);
    }
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
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
        <TextField
          placeholder="Search ..."
          fullWidth
          required
          onChange={handleSearch}
        />
      </Stack>

      <Stack
        padding={2}
        spacing={2}
        width={"100%"}
        sx={{ backgroundColor: "lightyellow" }}
      >
        {search === "" &&
          students.map((student, index) => {
            return (
              <Paper
                key={index}
                variant="elevation"
                elevation={1}
                sx={{ width: "100%", height: "50px" }}
                onClick={() => handleOpenModal(student)}
              >
                <Stack
                  height={"100%"}
                  width={"100%"}
                  padding={2}
                  justifyContent={"center"}
                >
                  <Typography variant="h6" component="h6">
                    {student.firstName + " " + student.lastName}
                  </Typography>
                </Stack>
              </Paper>
            );
          })}
        {search &&
          students
            .filter((student) =>
              (
                student.firstName.toLowerCase() +
                " " +
                student.lastName.toLowerCase()
              ).includes(search.toLowerCase())
            )
            .map((student, index) => {
              return (
                <Paper
                  onClick={() => handleOpenModal(student)}
                  key={index}
                  variant="elevation"
                  elevation={1}
                  sx={{ width: "100%", height: "50px" }}
                >
                  <Stack
                    height={"100%"}
                    width={"100%"}
                    padding={2}
                    justifyContent={"center"}
                  >
                    <Typography variant="h6" component="h6">
                      {student.firstName + " " + student.lastName}
                    </Typography>
                  </Stack>
                </Paper>
              );
            })}

        <Dialog
          open={isOpen}
          onClose={handleCloseModal}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {modalData.firstName + " " + modalData.lastName}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {"Phone Numbers: " + modalData.phoneNumber}
            </DialogContentText>
            <DialogContentText>
              {"Student Numbers: " + modalData.studentNumber}
            </DialogContentText>
            <DialogContentText>
              {"Address: " +
                modalData.address.building +
                ", " +
                modalData.address.room}
            </DialogContentText>
            <DialogContentText>{"Devices:"}</DialogContentText>
            {modalData.items.map((item, index) => {
              return (
                <DialogContentText key={index}>
                  {"Name: " +
                    item.name +
                    ", Serial Number: " +
                    item.serialNumber}
                </DialogContentText>
              );
            })}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseModal} autoFocus>
              close
            </Button>
          </DialogActions>
        </Dialog>
      </Stack>
    </Stack>
  );
};

export default Students;
