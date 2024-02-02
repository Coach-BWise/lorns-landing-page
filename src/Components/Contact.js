import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";

const Contact = () => {
  return (
    <Box component="form">
      <div>
        <TextField
          id="outlined-textarea"
          label="First Name"
          placeholder="John"
          sx={{ m: 1, width: "25ch" }}
        />
        <TextField
          id="outlined-textarea"
          label="Last Name"
          placeholder="Smith"
          sx={{ m: 1, width: "25ch" }}
        />
      </div>
      <div>
        <TextField
          id="outlined-textarea"
          label="Email"
          placeholder="j.smith@gmail.com"
          sx={{ m: 1, width: "25ch" }}
        />
      </div>
      <TextField
        id="outlined-textarea"
        label="Comment"
        placeholder="Add Comment Here"
        sx={{ m: 1, width: "50%" }}
        rows={4}
        multiline
      />
      <button className="secondary-button">Submit</button>
    </Box>
  );
};

export default Contact;
