import { Box, Icon, Button, List } from '@chakra-ui/react';
import React from 'react';
import { CiStar } from 'react-icons/ci';
import { FaFileDownload } from 'react-icons/fa';

import '@/styles/resume.css';
import data from '../../data/resume.json';
import type { Experience, Education } from '@/types/resume';
import { usePageTitle } from '@/hooks/usePageTitle';

const Resume: React.FC = () => {
  usePageTitle('Resume');
  return (
    <>
      <Box className="timeline">
        {/* Experience Section */}
        <Box className="section">
          <Box className="section-title">
            <Icon as={CiStar} className="timeline-star" boxSize={6} color="primary" />
            <Box className="text" color={'secondary'}>
              Experience
            </Box>
          </Box>
          {data.experience.map((exp: Experience, index: number) => (
            <Box key={index} className="entry">
              <Box className="dot" />
              <Box className="content">
                <Box className="job-title" color={'secondary'}>
                  {exp['job_title']}
                </Box>
                <Box className="company" color={'secondary'}>
                  {exp.company}
                </Box>
                <Box className="date" color={'secondary'}>
                  {exp.date}
                </Box>
                <Box>
                  <List.Root className="description" color={'secondary'}>
                    {exp.description.map((desc: string, i: number) => (
                      <List.Item color={'secondary'} key={i}>
                        {desc}
                      </List.Item>
                    ))}
                  </List.Root>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Education Section */}
        <Box className="section">
          <Box className="section-title">
            <Icon as={CiStar} className="timeline-star" boxSize={6} color="primary" />
            <Box className="text" color={'secondary'}>
              Educational Background
            </Box>
          </Box>
          {data.education.map((edu: Education, index: number) => (
            <Box key={index} className="entry">
              <Box className="dot" />
              <Box className="content">
                <Box className="degree" color={'secondary'}>
                  {edu.degree}
                </Box>
                <Box className="university" color={'secondary'}>
                  {edu.university}
                </Box>
                <Box className="date" color={'secondary'}>
                  {edu.date}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box>
        {/* <Button background="secondary" color={'primary'} variant="solid" >
          <FaFileDownload /> Download CV
        </Button> */}
        <Box className="download-button">
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
            <Button background="secondary" color="primary" variant="solid">
              <FaFileDownload />
              Download CV
            </Button>
          </a>
        </Box>
      </Box>
    </>
  );
};

export default Resume;
