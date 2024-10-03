import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import { project } from '../components/projects'

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={3} gap={4}>
        {project.map((proj, index) => (
          <Section key={index} delay={index * 0.1}>
            <WorkGridItem
              id={proj.id}
              title={proj.title}
              thumbnail={proj.thumbnail}
              width={proj.width}
              height={proj.height}
            >
              {proj.description}
            </WorkGridItem>
          </Section>
        ))}
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'
