import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box, Grid2, Paper, Stack, SxProps, Theme, useMediaQuery } from "@mui/material";
import { Document, Page } from "react-pdf";
import theme from "./theme";
import NavBar from "./sections/navbar";
import AboutSection from "./sections/aboutsection";
import ToolkitSection from "./sections/toolkitsection";
import WorkExperience from "./sections/workexperiencesection";
import ProjectSection from "./sections/projectsection";

import meImage from "./images/me.jpg";
import awsCertImage from "./images/AWSCertifiedDeveloper.png";
import linkedInIcon from "./images/LinkedIn_icon.svg.png";
import githubIcon from "./images/GitHub_icon.png";

export const paperSx: SxProps<Theme> = {
  p: { xs: 1, lg: 3 },
  mt: 1,
  // backgroundColor: "rgba(18, 44, 31, 0.23)",
};

export default function App() {
  const smallScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const verySmallScrenen = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <>
      <div className="line" id="line1" />
      <div className="line" id="line2" />
      <div className="line" id="line3" />
      <NavBar />
      <Box height={100} />
      <Container>{verySmallScrenen ? <Typography color="warning" textAlign={"center"}>Looks like your using an small screen. Currently not optimized for such screen. Please use larger screen for an better experience. </Typography> : <></>}</Container>
      <Container maxWidth="xl">
        <Grid2 height={"100%"} container>
          <Grid2 sx={{ my: "auto" }} size={{ xs: 12, lg: 6 }}>
            <Paper sx={{ py: { xs: 5, lg: 20 } }}>
              <Stack direction={"row"} justifyContent={"center"}>
                <Box sx={{ width: 40, mr: 1 }}>
                  <a target="_blank" href="https://github.com/BaljotSingh07">
                    <img style={{ borderRadius: "10px" }} width={"100%"} src={githubIcon} />
                  </a>
                  <a target="_blank" href="https://www.linkedin.com/in/baljot-singh-73504123a/">
                    <img style={{ borderRadius: "10px" }} width={"100%"} src={linkedInIcon} />
                  </a>
                </Box>
                <Box>
                  <Typography variant="body1">Hello! I'm</Typography>
                  <Typography color="primary" variant="h2">
                    Baljot Singh.
                  </Typography>
                  <br />
                  <img width={"40%"} src={awsCertImage} />
                </Box>
              </Stack>
            </Paper>
          </Grid2>

          <Grid2 sx={{ my: "auto" }} size={{ xs: 12, lg: 6 }}>
            <Paper>
              <img width={"50%"} style={{ borderRadius: "20px" }} src={meImage} />
            </Paper>
          </Grid2>
        </Grid2>
      </Container>

      <Box height={100} />

      <AboutSection />

      <Box height={100} />

      {/* <WorkExperience /> */}

      <Box height={100} />

      <ProjectSection />

      <Box height={100} />

      <ToolkitSection smallScreen={smallScreen} />

      <Box height={100} />
      <Container>
        <object id="resume" data="BaljotSingh_Resume.pdf" type="application/pdf" width="100%" height="1400px">
          <p>
            Alternative text - include a link <a href="BaljotSingh_Resume.pdf">to the PDF!</a>
          </p>
        </object>
      </Container>

      <Box height={100} />
    </>
  );
}
