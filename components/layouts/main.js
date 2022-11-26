import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Ming Jie's homepage" />
        <meta name="author" content="Neo Ming Jie" />
        <meta name="author" content="mingjie" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        {/* <meta name="twitter:title" content="Neo Ming Jie" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mingjie" />
        <meta name="twitter:creator" content="@mingjie" />
        <meta name="twitter:image" content="https://www.craftz.dog/card.png" /> */}
        <meta property="og:site_name" content="Neo Ming Jie" />
        <meta name="og:title" content="Neo Ming Jie" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content="https://www.craftz.dog/card.png" /> */}
        {/* <meta property="og:image" content="https://nmingjie.vercel.app/user-avatar.png" /> */}
        <meta property="og:image" content="https://nmingjie.vercel.app/card.png" />

        <title>Neo Ming Jie - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
