import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Image from 'next/image'
import { workInfo} from '../components/details'
import {
  FaReddit,
  FaLinkedin,
  FaFacebookF,
  FaSquareInstagram
} from 'react-icons/fa6'
import {
  FaGithub,
} from 'react-icons/fa'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderradius="lg"
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
            <Link href="https://reddit.com/user/AlienWolfX05/" isExternal>
              <FaReddit size="1.5em" />
            </Link>
            <Link href="https://linkedin.com/in/cruizallen" isExternal ml={2}>
              <FaLinkedin size="1.5em" />
            </Link>
            <Link href="https://github.com/AlienWolfX" isExternal ml={2}>
              <FaGithub size="1.5em" />
            </Link>
            <Link href="https://facebook.com/cruizallen" isExternal ml={2}>
              <FaFacebookF size="1.5em" />
            </Link>
            <Link href="https://instagram.com/cruizallen" isExternal ml={2}>
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
            borderStyle="solid"
            w={{ base: '150px', md: '200px' }}
            h={{ base: '150px', md: '200px' }}
            display="inline-block"
          >
            <Image
              src="/images/cruiz.jpg"
              alt="Profile image"
              width="200"
              priority={true}
              height="200"
              borderradius="full"
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
          I am currently a senior at
          <Link href="https://www.carsu.edu.ph/" isExternal ml={2}>
            Caraga State University
          </Link>
          , pursuing a Bachelor of Science in Information Technology. As an
          aspiring amateur Embedded Developer and Security Researcher, I am
          deeply passionate about my work. My primary focus is on Wi-Fi routers
          and Optical Router/Modem systems, where I specialize in creating
          customized firmware using OpenWrt as well as finding vulnerabilities.
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
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
