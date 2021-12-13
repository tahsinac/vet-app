import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

export default function UploadImageButton(props) {
  const [open, setOpen] = React.useState(false);
  var inputFile = "";
  var inputType = "";
  var inputDate = "";
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = (event) => {
    inputType = event.target.value
    inputDate = event.target.value
    inputFile = event.target.value
    setOpen(false);
  };

  // const handleTypeInput = (event) =>{
  //   inputType = event.target.value
  // }

  // const handleDateInput = (event) =>{
  //   inputDate = event.target.value
  // }

  // const handleFileInput = (event) =>{
  //   inputFile = event.target.value
  // }

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen} color="secondary" sx={{ m: 1 }}>
        Upload
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Upload Image</DialogTitle>
        <DialogContent>
        <FormControl sx={{ m: 1, width: "65ch" }}>
              <InputLabel id="demo-simple-select-label">Image Type</InputLabel>
              <Select
                labelId="type-label"
                id="type"
                label="type"
                placeholder="Image Type"
              >
                <MenuItem value={"profile"}>Profile Photo</MenuItem>
                <MenuItem value={"injury"}>Injury Photo</MenuItem>
                <MenuItem value={"medical record"}>Medical Record Photo</MenuItem>
              </Select>
            </FormControl>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Date"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="File"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
