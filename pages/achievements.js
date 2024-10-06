import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react"
import Layout from "../components/layouts/article"
import Section from "../components/section"
import { certifications, seminars } from '../components/details'
import Paragraph from "../components/paragraph"
import Image from "next/image"

const achievements = () => (
    <Layout title="Achievements">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Achievements
            </Heading>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                Certificates
                </Heading>
                <SimpleGrid columns={2} gap={6}>
                {certifications.map((cert, index) => (
                    <Box key={index}>
                    <Paragraph>{cert.text}</Paragraph>
                    <Image alt={cert.text} src={cert.src} width={300} height={300} />
                    </Box>
                ))}
                </SimpleGrid>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                Seminars
                </Heading>
                <SimpleGrid columns={2} gap={6}>
                {seminars.map((sem, index) => (
                    <Box key={index}>
                    <p>{sem.text}</p>
                    <Image alt={sem.text} src={sem.src} width={300} height={300} />
                    </Box>
                ))}
                </SimpleGrid>
            </Section>

        </Container>
    </Layout>
)

export default achievements
export { getServerSideProps } from '../components/chakra'