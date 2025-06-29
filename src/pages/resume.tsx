import { Box, Icon } from '@chakra-ui/react';
import React from 'react';
import { CiStar } from 'react-icons/ci';
import '@/styles/resume.css';
import data from '../../data.json';
import type { Experience, Education } from '@/types/resume';

const Resume: React.FC = () => {
  return (
    <Box className="timeline">
      {/* Experience Section */}
      <Box className="section">
        <Box className="section-title">
          <Icon as={CiStar} className="timeline-star" boxSize={6} color="primary" />
          <Box className="text">Experience</Box>
        </Box>
        {data.experience.map((exp: Experience, index: number) => (
          <Box key={index} className="entry">
            <Box className="dot" />
            <Box className="content">
              <Box className="job-title">{exp['job-title']}</Box>
              <Box className="company">{exp.company}</Box>
              <Box className="date">{exp.date}</Box>
              <ul className="description">
                {exp.description.map((desc: string, i: number) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Education Section */}
      <Box className="section">
        <Box className="section-title">
          <Icon as={CiStar} className="timeline-star" boxSize={6} color="primary" />
          <Box className="text">Educational Background</Box>
        </Box>
        {data.education.map((edu: Education, index: number) => (
          <Box key={index} className="entry">
            <Box className="dot" />
            <Box className="content">
              <Box className="degree">{edu.degree}</Box>
              <Box className="university">{edu.university}</Box>
              <Box className="date">{edu.date}</Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Resume;
