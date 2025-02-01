import { Container, Typography, Paper } from "@mui/material";
import React from "react";
import { paperSx } from "../App";

export default function AboutSection() {
  return (
    <Container>
      <Typography id="about" variant="h3" color="primary" sx={{ textDecoration: "underline" }}>
        About
      </Typography>
      <Typography variant="overline" color="textDisabled">
        My history and passion.
      </Typography>
      <Paper sx={paperSx}>
        <Typography mt={2} variant="h5">
          👦 Early Beginnings
        </Typography>
        <Typography variant="body1">
          My passion for technology ignited when I first helped troubleshoot a family member's computer issues. That moment of solving problems and seeing the relief on their face sparked my dedication to IT support. Since then, I've developed a deep understanding of various operating systems,
          hardware components, and network fundamentals.
        </Typography>

        <Typography mt={2} variant="h5">
          🤝 People-First Mindset
        </Typography>
        <Typography variant="body1">
          What drives me is the opportunity to help others overcome their technical challenges. I believe great IT support isn't just about fixing problems—it's about making users feel comfortable and understood. My patient nature and clear communication style make me well-suited for guiding users
          through technical issues, no matter their experience level.
        </Typography>

        <Typography mt={2} variant="h5">
          📚 Eager to Learn
        </Typography>
        <Typography variant="body1">
          I'm absolutely fascinated by IT and committed to building my career in this field. Currently, I'm dedicating my free time to:
          <ul>
            <li>Learning the fundamentals of Windows and basic networking through online courses.</li>
            <li>Practicing troubleshooting techniques on my home lab setup.</li>
            <li>Reading IT support forums to understand common user issues and solutions.</li>
          </ul>
        </Typography>

        <Typography mt={2} variant="h5">
          💪 Ready for Challenges
        </Typography>
        <Typography variant="body1">
        While I'm new to professional IT, I bring valuable transferable skills:
          <ul>
            <li>Strong problem-solving abilities and attention to detail.</li>
            <li>Natural patience and empathy when helping others.</li>
            <li>Ability to stay calm under pressure.</li>
            <li>Eagerness to learn and adapt quickly.</li>
          </ul>
        </Typography>
      </Paper>
    </Container>
  );
}
