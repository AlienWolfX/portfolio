import {
  Box,
  Container,
  Heading,
  List,
  ListIcon,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
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
  SiCanva
} from 'react-icons/si'
import Section from '../components/section'

const skills = () => (
  <Layout title="Skills">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Skills
      </Heading>
      <Section delay={0.1}>
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

export default skills
