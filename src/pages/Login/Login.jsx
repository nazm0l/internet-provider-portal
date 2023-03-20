import { AccountCircle } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import React from "react";

const Login = () => {
  return (
    <Card
      sx={{
        maxWidth: 500,
        mt: 15,
        mx: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField id="input-with-sx" label="User Name" variant="standard" />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="Password"
            variant="standard"
            type="password"
          />
        </Box>
        <Box>
          <Button variant="outlined" type="submit">
            Submit
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default Login;
