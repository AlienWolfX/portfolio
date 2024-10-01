import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListIcon,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import {
  SectionTitle,
  SectionYear,
  SectionDesc,
  SectionContent
} from '../components/background'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Image from 'next/image'
import { certifications, workInfo, seminars } from '../components/details'
import {
  FaSquareXTwitter,
  FaLinkedin,
  FaFacebookF,
  FaSquareInstagram
} from 'react-icons/fa6'
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGithub,
  FaGit,
  FaFigma,
  FaJava,
  FaDatabase
} from 'react-icons/fa'
import {
  SiNextdotjs,
  SiFlask,
  SiGraphql,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiNetlify,
  SiVercel,
  SiHeroku,
  SiVisualstudiocode,
  SiPostman,
  SiCanva,
  SiVbDotNet
} from 'react-icons/si'
import Head from 'next/head'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Greetings Fella!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Allen Gabrielle Cruiz
          </Heading>
          <p>Security Researcher and Full Stack Web Developer</p>
          <br />
          <Box ml={2} display="flex" alignItems="center">
            <Link href="https://twitter.com/yourprofile" isExternal>
              <FaSquareXTwitter size="1.5em" />
            </Link>
            <Link href="https://linkedin.com/in/yourprofile" isExternal ml={2}>
              <FaLinkedin size="1.5em" />
            </Link>
            <Link href="https://github.com/yourprofile" isExternal ml={2}>
              <FaGithub size="1.5em" />
            </Link>
            <Link href="" isExternal ml={2}>
              <FaFacebookF size="1.5em" />
            </Link>
            <Link href="" isExternal ml={2}>
              <FaSquareInstagram size="1.5em" />
            </Link>
          </Box>
        </Box>

        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/cruiz.jpg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <br />

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About me
        </Heading>
        <Paragraph>
        I am currently a senior at Caraga State University, pursuing a Bachelor of Science in Information Technology. 
        As an aspiring amateur Embedded Developer and Security Researcher, I am deeply passionate about my work. 
        My primary focus is on Wi-Fi routers and Optical Router/Modem systems, where 
        I specialize in creating customized firmware using OpenWrt as well as finding vulnerabilities.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/projects"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Education
        </Heading>
        <BioSection>
          <BioYear>2019-2021</BioYear>
          De La Salle John Bosco College
        </BioSection>
        <BioSection>
          <BioYear>2021-Present</BioYear>
          Caraga State University (Information Technology)
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
          <BioSection>
            <Box>
              {workInfo.map((work, index) => (
                <Box key={index}>
                  <BioYear>{work.year}</BioYear>
                    {work.title}
                    <br />
                    {work.desc}
                </Box>
              ))}
            </Box>
          </BioSection>
      </Section>

      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          Certifications
        </Heading>
        <SimpleGrid columns={2} gap={6}>
          {certifications.map((cert, index) => (
            <Box key={index}>
              <Paragraph>{cert.text}</Paragraph>
              <Image src={cert.src} width={300} height={300} />
            </Box>
          ))}
        </SimpleGrid>
      </Section>
  
      <Section delay={0.5}>
        <Heading as="h3" variant="section-title">
          Seminars
        </Heading>
        <SimpleGrid columns={2} gap={6}>
          {seminars.map((sem, index) => (
            <Box key={index}>
              <p>{sem.text}</p>
              <Image src={sem.src} width={300} height={300} />
            </Box>
          ))}
        </SimpleGrid>
      </Section>

      <Section delay={0.6}>
        <Heading as="h3" variant="section-title">
          Tech Stacks
        </Heading>
        <SimpleGrid columns={3} spacing={10}>
          <Box>
            <Paragraph>Frontend</Paragraph>
            <List>
              <ListItem>
                <ListIcon as={FaHtml5} />
                HTML
              </ListItem>
              <ListItem>
                <ListIcon as={FaCss3Alt} />
                CSS
              </ListItem>
              <ListItem>
                <ListIcon as={FaJs} />
                JavaScript
              </ListItem>
              <ListItem>
                <ListIcon as={FaReact} />
                React
              </ListItem>
              <ListItem>
                <ListIcon as={SiNextdotjs} />
                Next.js
              </ListItem>
            </List>
          </Box>
          <Box>
            <Paragraph>Backend</Paragraph>
            <List>
              <ListItem>
                <ListIcon as={FaNodeJs} />
                Node.js
              </ListItem>
              <ListItem>
                <ListIcon as={FaPython} />
                Python
              </ListItem>
              <ListItem>
                <ListIcon as={SiFlask} />
                Flask
              </ListItem>
              <ListItem>
                <ListIcon as={SiGraphql} />
                GraphQL
              </ListItem>
            </List>
          </Box>
          <Box>
            <Paragraph>Database</Paragraph>
            <List>
              <ListItem>
                <ListIcon as={SiMysql} />
                MySQL
              </ListItem>
              <ListItem>
                <ListIcon as={SiPostgresql} />
                PostgreSQL
              </ListItem>
              <ListItem>
                <ListIcon as={SiSqlite} />
                SQLite
              </ListItem>
            </List>
          </Box>
          <Box>
            <Paragraph>DevOps</Paragraph>
            <List>
              <ListItem>
                <ListIcon as={FaDocker} />
                Docker
              </ListItem>
              <ListItem>
                <ListIcon as={FaGithub} />
                GitHub Actions
              </ListItem>
            </List>
          </Box>
          <Box>
            <Paragraph>Cloud</Paragraph>
            <List>
              <ListItem>
                <ListIcon as={SiNetlify} />
                Netlify
              </ListItem>
              <ListItem>
                <ListIcon as={SiVercel} />
                Vercel
              </ListItem>
              <ListItem>
                <ListIcon as={SiHeroku} />
                Heroku
              </ListItem>
            </List>
          </Box>
          <Box>
            <Paragraph>Tools</Paragraph>
            <List>
              <ListItem>
                <ListIcon as={SiVisualstudiocode} />
                VS Code
              </ListItem>
              <ListItem>
                <ListIcon as={SiPostman} />
                Postman
              </ListItem>
              <ListItem>
                <ListIcon as={FaGit} />
                Git
              </ListItem>
              <ListItem>
                <ListIcon as={FaGithub} />
                GitHub
              </ListItem>
            </List>
          </Box>
          <Box>
            <Paragraph>Design</Paragraph>
            <List>
              <ListItem>
                <ListIcon as={FaFigma} />
                Figma
              </ListItem>
              <ListItem>
                <ListIcon as={SiCanva} />
                Canva
              </ListItem>
            </List>
          </Box>
          <Box>
            <Paragraph>Programming</Paragraph>
            <List>
              <ListItem>
                <ListIcon as={FaDatabase} />C
              </ListItem>
              <ListItem>
                <ListIcon as={SiVbDotNet} />
                VB.net
              </ListItem>
              <ListItem>
                <ListIcon as={FaJava} />
                Java
              </ListItem>
              <ListItem>
                <ListIcon as={FaPython} />
                Python
              </ListItem>
              <ListItem>
                <ListIcon as={FaJs} />
                JavaScript
              </ListItem>
            </List>
          </Box>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
