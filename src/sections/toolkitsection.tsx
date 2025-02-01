import { Container, Typography, Paper, Grid2, Divider } from "@mui/material";
import { paperSx } from "../App";
import React from "react";

interface ToolkitProps {
    smallScreen: boolean
}

export default function ToolkitSection({smallScreen} : ToolkitProps) {
    return <Container>
      <Typography id="toolkit" variant="h3" color="primary" sx={{ textDecoration: "underline" }}>
        My Toolkit
      </Typography>
      <Typography variant="overline" color="textDisabled">
        Creating an better tomorrow with technology.
      </Typography>
  
      <Paper sx={paperSx}>
        <Grid2 container>
          <Grid2 size={{ xs: 12, lg: 5 }}>
            <Typography variant="h5">Languages</Typography>
            <ul style={{ listStyle: "circle" }}>
              <li>
                <Typography>Python</Typography>
              </li>
              <li>
                <Typography>C#</Typography>
              </li>
              <li>
                <Typography>Java</Typography>
              </li>
              <li>
                <Typography>SQL</Typography>
              </li>
              <li>
                <Typography>HTML/CSS/JavaScript</Typography>
              </li>
            </ul>
          </Grid2>
  
          <Grid2 size={{ sm: 12, lg: 1 }} display={"flex"} width={"100%"} alignItems={"center"} flexDirection={"column"}>
            <Divider sx={{ width: { xs: "100%", lg: "auto" }, mb: { xs: 2 } }} variant="fullWidth" orientation={smallScreen ? "horizontal" : "vertical"} />
          </Grid2>
  
          <Grid2 size={{ sm: 12, lg: 5 }}>
            <Typography variant="h5">Essential Skills</Typography>
            <ul style={{ listStyle: "circle" }}>
              <li>
                <Typography>Windows OS troubleshooting (Windows 10/11)</Typography>
              </li>
              <li>
                <Typography>Networking concepts and Wi-Fi troubleshooting</Typography>
              </li>
              <li>
                <Typography>Hardware component identification and repairs</Typography>
              </li>
              <li>
                <Typography>Microsoft Office 365</Typography>
              </li>
            </ul>
          </Grid2>
        </Grid2>
      </Paper>
    </Container>;
  }
  