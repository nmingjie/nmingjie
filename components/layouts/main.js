import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../Navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
// import VoxelDogLoader from '../voxel-dog-loader'

import VoxelRaccoonLoader from '../voxel-raccoon-loader.js';

import { motion } from 'framer-motion';

import { ChevronRightIcon, DownloadIcon, ChatIcon } from '@chakra-ui/icons';


// raccoon voxel component
const LazyVoxelRaccoon = dynamic(
  () => import('../voxel-raccoon.js'),
  {
    ssr: false,
    loading: () => <VoxelRaccoonLoader />,
  }

);

// components
import Paragraph from '../Paragraph';
import SocialMedia from '../SocialMedia.js';
import Section from '../Section.js';

import {
	useColorMode,
	Heading,
	Stack,
	Highlight,
	Image,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	List,
	ListIcon,
	ListItem,
	Button,
} from '@chakra-ui/react';

import Typed from 'react-typed';



const Main = ({ children, router }) => {

  const highlightColor = {
		light: '#171717',
		dark: '#e5e5e5',
	};
  const contentButtonBorderColor = {
		light: 'teal.500',
		dark: 'teal.300',
	}
  const contentButtonColor = {
		light: '#e5e5e5',
		dark: '#e5e5e5',
	};
  const contentButtonBgColor = {
		light: 'teal.500',
		dark: '',
	};

	const contentButtonHoverBg = {
		light: 'teal.500',
		dark: 'teal.300',
	};

	const contentButtonHoverColor = {
		light: '#e5e5e5',
		dark: '#e5e5e5',
	};

	const contentButtonHoverBorderColor = {
		light: '',
		dark: '',
	};

  const { colorMode } = useColorMode();


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
        <meta name="twitter:image" content="https://nmingjie.vercel.app/card.png" /> */}
        <meta property="og:site_name" content="Neo Ming Jie" />
        <meta name="og:title" content="Neo Ming Jie" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://nmingjie.vercel.app/card.png" />

        <title>Neo Ming Jie - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.lg" pt={14}>
        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
