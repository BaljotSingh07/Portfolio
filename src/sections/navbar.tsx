import { Box, Button, MenuItem, Toolbar, Typography } from "@mui/material";
import React from "react";

export default function NavBar() {
    return <Toolbar sx={{ justifyContent: "center" }}>
      <Typography color="primary">Baljot.</Typography>
      <Box sx={{ textDecoration: "underline", display: "flex", flexDirection: "row" }}>
        <Button href="#about" variant="text" color="inherit">About</Button>
        <Button href="#work-history" variant="text" color="inherit">Work History</Button>
        <Button href="#toolkit" variant="text" color="inherit">Toolkit</Button>
        <Button href="#resume" variant="text" color="inherit">Resume</Button>
      </Box>
    </Toolbar>;
  }
  
  