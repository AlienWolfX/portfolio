import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid,
    UnorderedList,
    Heading,
    Center,
    Image,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
  import { FaCheck, FaXmark } from "react-icons/fa6";
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="EcoSwap">
      <Container>
        <Title>
          ecoswap <Badge>2023</Badge>
        </Title>
        <Center my={6}>
          <Image width={200} height={200} src="https://i.imgur.com/JTwkLHQ.png" alt="icon" />
        </Center>
        <P>
            EcoSwap is a groundbreaking web application designed to redefine the way we engage with our possessions and contribute to a more sustainable lifestyle. As a barter-only platform, EcoSwap eliminates the need for traditional currency, focusing on fostering a community-driven exchange of items.
        </P>
        <P>
          It is a project for Information and Securiy with the features below as implemened
        </P>
  
        <TableContainer>
          <Table variant='simple' mt={4} size="sm">
            <Thead>
              <Tr>
                <Th>Area</Th>
                <Th>Security Measure</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td rowSpan={4}><strong>Authorization</strong></Td>
                <Td>Strong User Authentication</Td>
                <Td><FaCheck /></Td>
              </Tr>
              <Tr>
                <Td>Authorization</Td>
                <Td><FaCheck /></Td>
              </Tr>
              <Tr>
                <Td>Session Management</Td>
                <Td><FaCheck /></Td>
              </Tr>
              <Tr>
                <Td>Two Factor Authentication</Td>
                <Td><FaCheck /></Td>
              </Tr>
              <Tr>
                <Td rowSpan={3}><strong>Data Security</strong></Td>
                <Td>Data Encryption</Td>
                <Td><FaCheck /></Td>
              </Tr>
              <Tr>
                <Td>Data Access Control</Td>
                <Td><FaXmark /></Td>
              </Tr>
              <Tr>
                <Td>Data Auditing</Td>
                <Td><FaCheck /></Td>
              </Tr>
              <Tr>
                <Td rowSpan={5}><strong>Application Security</strong></Td>
                <Td>Input Validation</Td>
                <Td><FaCheck /></Td>
              </Tr>
              <Tr>
                <Td>Output Encoding</Td>
                <Td><FaCheck /></Td>
              </Tr>
              <Tr>
                <Td>Error Handling</Td>
                <Td><FaCheck /></Td>
              </Tr>
              <Tr>
                <Td>Content Security Policy</Td>
                <Td><FaCheck /></Td>
              </Tr>
              <Tr>
                <Td>Security Headers</Td>
                <Td><FaCheck /></Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>

        {/* <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows 2000/XP</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Delphi</span>
          </ListItem>
          <ListItem>
            <Meta>Download</Meta>
            <Link href="http://odoruinu.net.s3.amazonaws.com/software/amembo/amembo0515123.zip">
              v0.5.15.123
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Last update</Meta>
            <span>2008/03/23</span>
          </ListItem>
          <ListItem>
            <Meta>Manual</Meta>
            <Link href="https://w.atwiki.jp/amembo/">使い方wiki</Link>
          </ListItem>
        </List> */}
  
        {/* <Heading as="h4" fontSize={16} my={6}>
          <Center>Sneak Peak</Center>
        </Heading> */}
  
        {/* <SimpleGrid columns={2} gap={2}>
          <WorkImage src="/images/works/amembo_01.gif" alt="amembo" />
          <WorkImage src="/images/works/amembo_02.gif" alt="amembo" />
        </SimpleGrid> */}
        <br />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  