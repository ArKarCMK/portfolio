import { Box, Text } from '@chakra-ui/react';
import '@/styles/skill-rating.css';
import { Progress } from '@chakra-ui/react';
import { Card } from '@chakra-ui/react';
import data from '../../data/about.json';
type Skill = {
  title: string;
  language: Language[];
};

type Language = {
  name: string;
  rating: number;
};
const SkillRating: React.FC = () => {
  return (
    <>
      <Box className="skill-wrapper">
        {data.skill_rating.map((skill: Skill, index: number) => (
          <Card.Root width="320px" variant="elevated" bg="cardBackground" key={index}>
            <Card.Body gap="2">
              <Card.Title color={'secondaryText'} mb="2">
                {skill.title}
              </Card.Title>

              {skill.language.map((language: Language, index: number) => (
                <Box pb={2} key={index}>
                  <Text pb={1} color={'secondaryText'}>
                    {language.name}
                  </Text>
                  <Box display="flex" alignItems="center">
                    <Progress.Root
                      colorPalette={'blue'}
                      defaultValue={50}
                      value={language.rating}
                      width="220px"
                      striped
                      animated
                    >
                      <Progress.Track bg={'blue.400'}>
                        <Progress.Range />
                      </Progress.Track>
                    </Progress.Root>
                    <Text pl="3" fontSize={14} color={'secondaryText'}>
                      {language.rating}%
                    </Text>
                  </Box>
                </Box>
              ))}
            </Card.Body>
          </Card.Root>
        ))}
      </Box>
    </>
  );
};

export default SkillRating;
