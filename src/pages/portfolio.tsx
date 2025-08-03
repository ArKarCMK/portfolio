import React from 'react';
import { Box, Card, Tag, Badge } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery, { type ReactImageGalleryItem } from 'react-image-gallery';

import data from '../../data/portfolio.json';
import '@/styles/portfolio.css';

type Project = {
  title: string;
  description: string;
  tech_stacks: string[];
  github?: Github[];
  website?: string;
  images?: {
    original: string;
  }[];
};

type Github = {
  label: string;
  link: string;
};
const Portfolio: React.FC = () => {
  const handleRedirect = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <>
      <Box className="portfolio-wrapper">
        <Box className="portfolio-sub-wrapper">
          {data.projects.map((project: Project, index: number) => (
            <Card.Root
              overflow="hidden"
              bg={'cardBackground'}
              key={index}
              className="card-container"
            >
              {/* <Image src={project.image} alt={project.title} /> */}
              <Box>
                <ImageGallery
                  items={project.images as ReactImageGalleryItem[]}
                  showPlayButton={false}
                  showThumbnails={false}
                />
              </Box>

              <Card.Body gap="2">
                <Card.Title color={'secondary'}>{project.title}</Card.Title>
                <Card.Description fontSize="16px" color={'secondaryText'}>
                  {project.description}
                </Card.Description>
                <Box
                  height={'100%'}
                  display={'flex'}
                  flexDirection={'column'}
                  justifyContent={'center'}
                >
                  <Box display="flex" gap="2" flexWrap={'wrap'} mt={3}>
                    {project.tech_stacks.map((tech_stack: string, index: number) => (
                      <Badge
                        bg={'blue.700'}
                        // colorPalette={'blue'}
                        color={'secondaryText'}
                        size={'md'}
                        variant={'subtle'}
                        key={index}
                      >
                        {tech_stack}
                      </Badge>
                    ))}
                  </Box>
                </Box>
              </Card.Body>
              <Card.Footer gap="2">
                {project.github &&
                  project.github.map((gh: Github, index: number) => (
                    <Tag.Root
                      key={index}
                      size={'xl'}
                      cursor={'pointer'}
                      backgroundColor={'secondary'}
                      color={'primaryText'}
                      onClick={() => {
                        if (gh) handleRedirect(gh.link);
                      }}
                    >
                      <Tag.StartElement>
                        <FaGithub />
                      </Tag.StartElement>
                      <Tag.Label>{gh.label}</Tag.Label>
                    </Tag.Root>
                  ))}
                {project.website && (
                  <Tag.Root
                    size={'xl'}
                    cursor={'pointer'}
                    backgroundColor={'secondary'}
                    color={'primaryText'}
                    onClick={() => {
                      if (project.website) handleRedirect(project.website);
                    }}
                  >
                    <Tag.StartElement>
                      <TbWorld />
                    </Tag.StartElement>
                    <Tag.Label>Website</Tag.Label>
                  </Tag.Root>
                )}
              </Card.Footer>
            </Card.Root>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Portfolio;
