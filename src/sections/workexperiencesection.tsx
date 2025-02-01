import { Timeline, TimelineItem, TimelineOppositeContent, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from "@mui/lab";
import { Container, Typography, Paper } from "@mui/material";
import React from "react";
import workExperienceData from "../data/workexperiencedata";

export interface WorkItemProps {
  startDate: string;
  endDate: string;
  lengthWorked: string;
  company: string;
  positionTitle: string;
  jobDesc: string[];
}

function WorkItem(props: WorkItemProps) {
  return (
    <TimelineItem>
      <TimelineOppositeContent color="text.secondary">
        {props.startDate} - {props.endDate}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="h6">{props.company}</Typography>
        <Typography variant="subtitle1">{props.positionTitle}</Typography>
        <Typography variant="overline" color="text.secondary">
          {props.lengthWorked}
        </Typography>
        <ul>
          {props.jobDesc.map((e, i) => (
            <li>
              <Typography key={i}>{e}</Typography>
            </li>
          ))}
        </ul>
      </TimelineContent>
    </TimelineItem>
  );
}

export default function WorkExperienceSection() {
  return (
    <Container>
      <Typography id="work-history" variant="h3" color="primary" sx={{ textDecoration: "underline" }}>
        My Work History
      </Typography>
      <Typography variant="overline" color="textDisabled">
        creating happy customers.
      </Typography>

      <Paper sx={{ pt: 1, mt: 1 }}>
        <Timeline
          position="right"
          sx={{
            padding: 0,
            "& .MuiTimelineOppositeContent-root": { flex: { xs: 0, lg: 0.2 }, px: 0.5, minWidth: "70px" },
          }}>
          {workExperienceData.map((e, i) => (
            <WorkItem {...e} key={i} />
          ))}

          <TimelineItem>
            <TimelineOppositeContent color="text.secondary"></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent></TimelineContent>
          </TimelineItem>
          
        </Timeline>
      </Paper>
    </Container>
  );
}
