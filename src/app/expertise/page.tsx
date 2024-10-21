import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Box, Divider, VStack, styled } from 'styled-system/jsx';

const ListItem = styled('li', {
  base: {
    listStyleImage: 'bullet',
    pl: '4',
    mb: '2',
  },
});

const careerHistory = [
  {
    company: 'EMCI TV',
    period: '2023 - Present',
    description:
      "As a lead developer at EMCI TV, I guide the technical direction for their web Bible reading application. I use NextJS and Strapi, optimizing performance and database structures. My role includes leading technical workshops and improving the app's architecture.",
  },
  {
    company: 'Konectom - Biogen',
    period: '2019 - Present',
    description:
      'At Biogen, I developed the Konectom app, focusing on sensor data collection and patient performance tracking. I implemented data collection modules in Kotlin and Swift, integrating Rust for score calculations.',
  },
  {
    company: 'Docdok.health',
    period: '2017 - 2021',
    description:
      'I developed the mobile app for Docdok.health using React Native, facilitating secure communication between patients and healthcare professionals. I worked closely with teams in Switzerland and Israel, ensuring compliance with healthcare data standards.',
  },
  {
    company: 'Watchdog',
    period: '2018 - 2020',
    description:
      "I developed the Watchdog app, allowing motorcycle owners to monitor their locks remotely. I implemented Clean Architecture and used React Native, ensuring the app's scalability and security.",
  },
  {
    company: 'Yolaw (LegalStart, ekie)',
    period: '2015 - 2017',
    description:
      'I developed web platforms for LegalStart and ekie, focusing on database optimization and the integration of advanced search features using ElasticSearch.',
  },
  {
    company: 'Sneat',
    period: '2015 - 2016',
    description:
      'I developed Sneat, a mobile app for restaurant table reservations in Paris, using React Native. The app featured real-time notifications, secure payment processing via Stripe, and integration with Parse for backend services.',
  },
  {
    company: 'GreenIvory',
    period: '2010 - 2014',
    description:
      'I led the implementation of CI/CD with Jenkins and optimized the development pipeline by migrating from Ant to Maven. I also contributed to various SaaS products such as MashupXFeed and Onligence.',
  },
  {
    company: 'Monabanq',
    period: '2006 - 2010',
    description:
      'At Monabanq, I contributed to the development and optimization of their banking app, focusing on performance improvements and ensuring secure financial transactions. My role included integrating new features while maintaining compliance with banking regulations.',
  },
];

export default async function Projets() {
  return (
    <VStack mb={'5'} pb={'5'} maxW={{ base: 'lg', md: 'xl' }} mt={'16'}>
      <Heading
        as="h1"
        fontSize={{ base: 'xl', md: '4xl' }}
        h={'32'}
        textAlign={'center'}
      >
        {'My Professional Journey'}
      </Heading>

      <Box padding="4" maxW="800px" mx="auto">
        <VStack gap="8" alignItems="flex-start">
          <Box>
            <Heading as="h2" fontSize="2xl" color="teal.500" mb="4">
              Career History
            </Heading>

            {careerHistory.map((history) => (
              <Box key={history.company} mt="4">
                <Heading as="h3" fontSize="xl">
                  {history.company}
                </Heading>
                <Text
                  color={'colorPalette.muted'}
                  fontWeight="light"
                  fontSize={'sm'}
                  mb={'2'}
                >
                  {history.period}
                </Text>

                <Text>{history.description}</Text>
              </Box>
            ))}
          </Box>

          <Divider borderColor={'colorPalette.default'} />

          <Box>
            <Heading as="h2" fontSize="2xl" mb="4">
              Skills
            </Heading>
            <styled.ul>
              <ListItem>
                Full-stack development with React, Django, and NextJS
              </ListItem>
              <ListItem>
                Mobile development using React Native, TypeScript, Kotlin, and
                Swift
              </ListItem>
              <ListItem>
                Data management and optimization with PostgreSQL, ElasticSearch,
                and MongoDB
              </ListItem>
              <ListItem>
                CI/CD integration with Jenkins, Gitlab, Github Action, GitFlow,
                and Docker
              </ListItem>
              <ListItem>
                Project management using Jira and Azure Boards, with Agile
                methodologies
              </ListItem>
              <ListItem>
                Open-source contributions, including React Native libraries and
                GiftedChat
              </ListItem>
            </styled.ul>
          </Box>

          <Divider borderColor={'colorPalette.default'} />

          <Box>
            <Heading as="h2" fontSize="2xl" mb="4">
              Professional Training
            </Heading>
            <styled.ul gap="3">
              <ListItem>Hibernate ORM training by ORSYS (3 days)</ListItem>
              <ListItem>
                Scala functional programming by Martin Odersky on Coursera (56
                hours)
              </ListItem>
              <ListItem>Ruby programming with HumanCoders (28 hours)</ListItem>
              <ListItem>AngularJS training by SFEIR (2 days)</ListItem>
            </styled.ul>
          </Box>
        </VStack>
      </Box>
    </VStack>
  );
}
