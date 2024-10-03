import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import IslandLoader from '../island-loader'

const Island = dynamic(() => import('../island'), {
  ssr: false,
  loading: () => <IslandLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Allen Cruiz's homepage" />
        <meta name="author" content="Allen Cruiz" />
        <meta name="author" content="craftzdog" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <meta property="og:site_name" content="Allen Cruiz" />
        <meta name="og:title" content="Allen Cruiz" />
        <title>Allen Cruiz - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <Island />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
