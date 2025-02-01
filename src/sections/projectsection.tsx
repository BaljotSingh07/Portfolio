import { Box, Chip, Container, Grid2, ImageList, ImageListItem, Paper, Typography } from "@mui/material";
import React from "react";
import { paperSx } from "../App";
import nasServer from "../images/nas-server.webp"
import homeAssistantDashboard from "../images/home-assistant-dashboard.png"

export default function ProjectSection() {
  return (
    <Container>
      <Typography id="projects" variant="h3" color="primary" sx={{ textDecoration: "underline" }}>
        Personal Projects
      </Typography>
      <Typography variant="overline" color="textDisabled">
        giving me invaluable knowledge.
      </Typography>

      <Paper sx={paperSx}>
        <Grid2 container>
          <Grid2 size={{ xs: 12, lg: 9 }}>
            <Typography variant="h5">Homelab</Typography>
            <br />
            <Typography>
              I built and maintain a comprehensive home lab environment focused on network storage and virtualization. At its core is a NAS system that I configured with RAID for reliable data management and backups. I expanded the environment by setting up multiple virtual machines using hypervisor
              technology, each running different services. The lab also serves as a media streaming hub, where I manage content delivery across various devices. This hands-on project has given me practical experience in storage management, virtualization, remote access security, and network services
              - all valuable skills for IT support roles.
            </Typography>
            <br />
            <Box>
              <Chip label="NAS" sx={{ mr: 1 }} />
              <Chip label="Hypervisor" sx={{ mr: 1 }} />
              <Chip label="Linux" sx={{ mr: 1 }} />
              <Chip label="Networking" sx={{ mr: 1 }} />
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, lg: 3 }}>
            <ImageList cols={1}>
              <ImageListItem>
                <img style={{ borderRadius: "5px" }} src={nasServer} />
              </ImageListItem>
            </ImageList>
          </Grid2>
        </Grid2>
      </Paper>

      <Paper sx={paperSx}>
        <Grid2 container>
          <Grid2 size={{ xs: 12, lg: 9 }}>
            <Typography variant="h5">Home Automation</Typography>
            <br />
            <Typography>
              I designed and implemented a comprehensive home automation system centered around Home Assistant, showcasing my ability to integrate and troubleshoot diverse technologies. Managing this system has developed my problem-solving skills through diagnosing and resolving various device
              connectivity issues. I wrote custom automation scripts to streamline daily operations and created a unified control system that seamlessly integrates multiple smart devices and protocols. The project expanded to include custom sensor networks using ESP32 microcontrollers for
              environmental monitoring, demonstrating my ability to learn new technologies and implement practical solutions. This hands-on experience has strengthened my troubleshooting abilities and technical problem-solving skills – essential qualities for IT support positions.
            </Typography>
            <br />
            <Box>
              <Chip label="HomeAssistant" sx={{ mr: 1 }} />
              <Chip label="ESP32" sx={{ mr: 1 }} />
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, lg: 3 }}>
            <ImageList cols={1}>
              <ImageListItem>
                <img style={{ borderRadius: "5px" }} src={homeAssistantDashboard} />
              </ImageListItem>
            </ImageList>
          </Grid2>
        </Grid2>
      </Paper>
    </Container>
  );
}
