import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import {
    useColorMode,
    Heading,
    Box,
    Stack,
    Highlight,
    // Image,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    List,
    UnorderedList,
    ListIcon,
    ListItem,
    Button,
    Badge,
    SimpleGrid,
    Link
} from '@chakra-ui/react';

// components
import Container from '../../components/container';
// import { BioSection, BioYear } from '../../components/Bio.js';
import Paragraph from '../../components/paragraph';
// import VoxelRaccoonLoader from '../../components/voxel-raccoon-loader.js';
// import Creations from '../../components/Creations.js';
// import SocialMedia from '../../components/SocialMedia.js';
import Section from '../../components/section.js';

import { ChevronRightIcon, DownloadIcon, ChatIcon, ExternalLinkIcon } from '@chakra-ui/icons';

import Typed from 'react-typed';

import NextLink from 'next/link'
import Image from 'next/image';

import stuffSharingThumbnail from '../../public/images/creations/stuffsharing/stuffsharing_eyecatch.png';
import stuffSharingHomeThumbnail from '../../public/images/creations/stuffsharing/stuffsharing_home.png';
import stuffSharingSearchThumbnail from '../../public/images/creations/stuffsharing/stuffsharing_search.png';


function Work() {

    const router = useRouter();
    const { colorMode } = useColorMode();

    const headingColor = {
        light: 'teal.500',
        dark: 'teal.300',
    };

    const listIconsColor = {
        light: 'red.400',
        dark: 'teal.300',
    };

    const highlightColor = {
        light: '#171717',
        dark: '#e5e5e5',
    };

    const componentsBoxShadow = {
        light: '0 5px 5px rgba(0, 0, 0, 0.1)',
        dark: '0 5px 5px rgba(0, 0, 0, 0.1)',
    };

    const tabButtonColor = {
        light: '#171717',
        dark: '#e5e5e5',
    };

    const tabButtonBgColor = {
        light: '',
        dark: '',
    };

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

    const contentButtonBorderColor = {
        light: 'teal.500',
        dark: 'teal.300',
    };

    const contentButtonHoverBorderColor = {
        light: '',
        dark: '',
    };

    return (
        <Container width="100%">
            <Stack
                spacing={16}
                // m="0 auto 1rem auto"
                maxWidth="100%"
                px={[8, null, null, null, null, null]}
            >
                <Box
                    as="main"
                    id="home"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                // height="100vh"
                >

                </Box>

                <Stack mt={-4} mb={-8} align="center">

                    <Image
                        alt="Project thumbnail"
                        objectFit='cover'
                        src={stuffSharingHomeThumbnail}
                    />
                    <Heading
                        as="h2"
                        // variant="section-title"
                        fontSize={[
                            '3xl',
                            null,
                            '3.5xl',
                            null,
                            null,
                            null,
                        ]}
                        color={headingColor[colorMode]}
                    >
                        Stuff-Sharing Platform
                    </Heading>
                </Stack>


                <Section delay={0.1}>

                    <Box>
                        <Box display={'flex'}>
                            <Box>
                                <Heading
                                    as="h2"
                                    variant="section-title"
                                    mb={6}
                                    fontSize={[
                                        '3xl',
                                        null,
                                        '3.5xl',
                                        null,
                                        null,
                                        null,
                                    ]}
                                    color={headingColor[colorMode]}
                                >
                                    / Background
                                </Heading>
                                <Paragraph>
                                    A convenient and collaborative platform for sharing various items and resources. Developed in Django individually, incorporating SQL queries and adhering to project requirements for a computer science coursework.                                </Paragraph>
                            </Box>
                        </Box>
                    </Box>

                </Section>

                <Section delay={0.2}>

                    <Box>
                        <Box display={'flex'}>
                            <Box>
                                <Heading
                                    as="h2"
                                    variant="section-title"
                                    mb={6}
                                    fontSize={[
                                        '3xl',
                                        null,
                                        '3.5xl',
                                        null,
                                        null,
                                        null,
                                    ]}
                                    color={headingColor[colorMode]}
                                >
                                    / Details
                                </Heading>
                            </Box>
                        </Box>
                        <Box>
                            <List ml={4} my={4}>
                                <ListItem>
                                    <Badge colorScheme="green" mr={2}>
                                        Involvement
                                    </Badge>
                                    <span> Full-stack
                                    </span>
                                </ListItem>
                                <ListItem>
                                    <Badge colorScheme="green" mr={2}>
                                        Tech Stack
                                    </Badge>
                                    <span>Django, PostgreSQL</span>
                                </ListItem>
                                <ListItem>
                                    <Badge colorScheme="green" mr={2}>
                                        Timeline
                                    </Badge>
                                    <span>2020</span>
                                </ListItem>
                                <ListItem>
                                    <Badge colorScheme="green" mr={2}>
                                        Platform
                                    </Badge>
                                    <span>Web {' '}
                                    </span>
                                    <Link href="https://hoot-dat.netlify.app/"
                                        color={contentButtonHoverBg[colorMode]}>
                                        https://it2002-stuffsharing.vercel.app/ <ExternalLinkIcon mx="2px" />
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Badge colorScheme="green" mr={2}>
                                        Users
                                    </Badge>
                                    <span> People looking to share stuff
                                    </span>
                                </ListItem>
                            </List>

                        </Box>
                    </Box>
                </Section>

                <Box>
                    <Box display={'flex'}>
                        <Box>
                            <Heading
                                as="h2"
                                variant="section-title"
                                mb={6}
                                fontSize={[
                                    '3xl',
                                    null,
                                    '3.5xl',
                                    null,
                                    null,
                                    null,
                                ]}
                                color={headingColor[colorMode]}
                            >
                                / Success Metrics
                            </Heading>
                        </Box>
                    </Box>

                    <List spacing={1} pt={4} >
                        <ListItem
                            // display="flex"
                            alignItems="center"
                        >
                            <ListIcon
                                as={ChevronRightIcon}
                                color={listIconsColor[colorMode]}
                            />
                            Received grade A for IT 2022, NUS.


                        </ListItem>
                    </List>
                </Box>

                <Box>
                    <Box display={'flex'} mb={6}>
                        <Box>
                            <Heading
                                as="h2"
                                variant="section-title"
                                fontSize={[
                                    '3xl',
                                    null,
                                    '3.5xl',
                                    null,
                                    null,
                                    null,
                                ]}
                                color={headingColor[colorMode]}
                            >
                                / Requirements, Features & Results
                            </Heading>
                        </Box>
                    </Box>

                    <Box display={'flex-column'}>
                        <Heading
                            as="h2"
                            variant="section-title"
                            mb={6}
                            fontSize={[
                                '3xl',
                                null,
                                'lg',
                                null,
                                null,
                                null,
                            ]}
                            color={headingColor[colorMode]}
                        >
                            Supplier Quality Daily Dashboard
                        </Heading>
                        <List spacing={1} pt={4} pb={4}>
                            <ListItem
                                display="flex"
                                alignItems="center"
                            >
                                <ListIcon
                                    as={ChevronRightIcon}
                                    color={listIconsColor[colorMode]}
                                />
                                <Paragraph>
                                User account registration and login
                                </Paragraph>
                            </ListItem>
                            <ListItem
                                display="flex"
                                alignItems="center"
                            >
                                <ListIcon
                                    as={ChevronRightIcon}
                                    color={listIconsColor[colorMode]}
                                />
                                <Paragraph>
                                Search Functionality: search feature with filters that allows users to easily find the desired items based on price and availability
                                </Paragraph>
                            </ListItem>
                            <ListItem
                                display="flex"
                                alignItems="center"
                            >
                                <ListIcon
                                    as={ChevronRightIcon}
                                    color={listIconsColor[colorMode]}
                                />
                                <Paragraph>
                                Item Posting: Enable users to post details and descriptions of items they want to share, including relevant images and additional information such as where to pick and return..
                                </Paragraph>
                            </ListItem>
                            <ListItem
                                display="flex"
                                alignItems="center"
                            >
                                <ListIcon
                                    as={ChevronRightIcon}
                                    color={listIconsColor[colorMode]}
                                />
                                <Paragraph>
                                Bidding System: Design a bidding mechanism that enables users to place bids on items they are interested in sharing.
                                </Paragraph>
                            </ListItem>
                            <ListItem
                                display="flex"
                                alignItems="center"
                            >
                                <ListIcon
                                    as={ChevronRightIcon}
                                    color={listIconsColor[colorMode]}
                                />
                                <Paragraph>
                                Bid Confirmation: Implement a feature to notify users when their bids have been accepted or declined by the item owner.
                                </Paragraph>
                            </ListItem>
                            <ListItem
                                display="flex"
                                alignItems="center"
                            >
                                <ListIcon
                                    as={ChevronRightIcon}
                                    color={listIconsColor[colorMode]}
                                />
                                <Paragraph>
                                Enable administrators to create, modify, and delete entries, including user accounts and item listings.
                                </Paragraph>
                            </ListItem>
                        </List>

                        <Stack mt={-4} mb={8} align="center">

                            <Box
                                display="flex"
                                mt={4}
                                mb={8}
                                borderRadius="5px"
                                overflow="hidden"
                                columnGap={4}
                            // height={380}
                            // width={664}
                            >
                                <Image
                                    alt="Project thumbnail"
                                    objectFit={'cover'}
                                    src={stuffSharingHomeThumbnail}

                                />
                                <Image
                                    alt="Project thumbnail"
                                    objectFit={'cover'}
                                    src={stuffSharingSearchThumbnail}

                                />
                            </Box>
                        </Stack>
                    </Box>



                </Box>



            </Stack>
        </Container>


    )
}

export default Work
