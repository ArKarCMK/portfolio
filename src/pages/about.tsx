import { Box, IconButton, Clipboard } from '@chakra-ui/react';
import React from 'react';
import '@/styles/about.css';
import data from '../../data.json';

interface SocialLinks {
  logo: string;
  link: string;
}

const About: React.FC = () => {
  return (
    <>
      <Box color="secondary" className="wrapper">
        <Box className="name"> {data.name}</Box>
        <Box className="title"> {data.title}</Box>
        <Box className="email">
          <Box>{data.email}</Box>
          <Box className="icon">
            <Clipboard.Root value={data.email}>
              <Clipboard.Trigger asChild>
                <IconButton variant="surface" size="2xs">
                  <Clipboard.Indicator />
                </IconButton>
              </Clipboard.Trigger>
            </Clipboard.Root>
          </Box>
        </Box>
        <Box className="social-links">
          {data.social_links.map((link: SocialLinks, index: number) => (
            <Box key={index}>
              <a href={link.link} target="_blank" rel="noopener noreferrer">
                <img src={link.logo} alt={link.link} width={30} height={30} />
              </a>
            </Box>
          ))}
        </Box>
        <Box className="about-me">
          {data.about_me.map((text: string, index: number) => (
            <Box key={index}>{text}</Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default About;
