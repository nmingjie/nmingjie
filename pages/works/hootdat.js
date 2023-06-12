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
// import { BioSection, BioYear } from '../../components/bio.js';
import Paragraph from '../../components/paragraph';
// import VoxelRaccoonLoader from '../../components/voxel-raccoon-loader.js';
// import Creations from '../../components/creations.js';
// import SocialMedia from '../../components/social-media.js';
import Section from '../../components/section.js';

import { ChevronRightIcon, DownloadIcon, ChatIcon, ExternalLinkIcon } from '@chakra-ui/icons';

import Typed from 'react-typed';

import NextLink from 'next/link'
import Image from 'next/image';

import hootdatThumbnail from '../../public/images/creations/hootdat/all.png';

import hootdatEnterGame from '../../public/images/creations/hootdat/enterGame.png';
import hootdatQuestionPack from '../../public/images/creations/hootdat/questionPack.png';


import hootdatER from '../../public/images/creations/hootdat/uml/ERB.png';
import hootdatUserFlowHost from '../../public/images/creations/hootdat/uml/userflow-host.png';
import hootdatUserFlowParticipant from '../../public/images/creations/hootdat/uml/userflow-participants.png';
import hootdatUserFlowGame from '../../public/images/creations/hootdat/uml/userflow-game.png';
import hootdatUserFlowPackCreation from '../../public/images/creations/hootdat/uml/userflow-pack.png';


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
                        src={hootdatThumbnail}
                        boxSize='50px'
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
                        Hoot Dat!

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
                                    Hootdat is a React-based multiplayer game designed to foster connections during COVID-19, featuring real-time guessing mechanics and random question selection to engage players in a fun and interactive experience.

                                </Paragraph>
                                <br></br>
                                <Paragraph>
                                    Each round, a player (answerer) - unknown to the rest - is randomly selected to answer a question. After the answerer has answered the question, the other players (guessers) have to guess who answered the question while a timer ticks away..

                                </Paragraph>
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
                                    <span> UI/UX Designer & Front End Developer
                                    </span>
                                </ListItem>
                                <ListItem>
                                    <Badge colorScheme="green" mr={2}>
                                        Tech Stack
                                    </Badge>
                                    <span>React, NodeJS/Express, Socket.IO, Redis, and PostgreSQL</span>
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
                                    <span>Web </span>
                                    <Link href="https://hoot-dat.netlify.app/"
                                        color={contentButtonHoverBg[colorMode]}>
                                        https://hoot-dat.netlify.app/ <ExternalLinkIcon mx="2px" />
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Badge colorScheme="green" mr={2}>
                                        Team
                                    </Badge>
                                    <span>
                                        <Link href="https://github.com/gary-lgy" target="_blank" color={contentButtonHoverBg[colorMode]}>
                                            Gary
                                        </Link>,{' '}
                                        <Link href="https://github.com/geoboom" target="_blank" color={contentButtonHoverBg[colorMode]}>
                                            Geogie
                                        </Link>,{' '}
                                        <Link href="https://github.com/jonchan51" target="_blank" color={contentButtonHoverBg[colorMode]}>
                                            Jonathan
                                        </Link>
                                        {' '} & Myself</span>
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
                            Successfully rolled out as an web application to the public


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
                                    Room Creation & Joining
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
                                    Character Creation
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
                                    Multiple choice Question and Answering
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
                                    Point Systems
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
                                    Text Chats
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
                                    Open source Packs creation & sharing
                                </Paragraph>
                            </ListItem>
                        </List>

                        <Stack mt={-4} mb={-8} align="center">

                        <Box
                            display="flex"
                            mt={4}
                            mb={8}
                            borderRadius="5px"
                            overflow="hidden"
                        // height={380}
                        // width={664}
                        >
                            <Image
                                alt="Project thumbnail"
                                objectFit={'cover'}
                                src={hootdatThumbnail}

                            />
                            
                        </Box>

                        <Box
                            display="flex"
                            mt={4}
                            mb={8}
                            borderRadius="5px"
                            overflow="hidden"
                            columnGap={4}

                        // height={380}
                        // width={564}
                        >
                            <Image
                                alt="Project thumbnail"
                                objectFit={'cover'}
                                src={hootdatEnterGame}
                            />
                            <Image
                                alt="Project thumbnail"
                                objectFit={'cover'}
                                src={hootdatQuestionPack}
                            />
                        </Box>
                        </Stack>
                    </Box>

                </Box>

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
                                / Design Process
                            </Heading>

                        </Box>
                    </Box>
                    <Box display={'flex-column'} mb={8}>
                        <Box>
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
                                UIUX
                            </Heading>
                        </Box>
                        <Box my={4}>
                            <Link href="https://www.figma.com/file/p80T4tiNZhJ4CuINrodi8S/Hoot-Dat?type=design&t=zfGbLPHMjcQlEQtF-0" target="_blank">
                                <Button rightIcon={<ExternalLinkIcon />} colorScheme="teal">
                                    View my UIUX here!

                                </Button>
                            </Link>
                        </Box>

                    </Box>

                    <Box display={'flex-column'} mb={8}>
                        <Box flexGrow={1}>
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
                                ER Diagram
                            </Heading>
                        </Box>
                        <Box
                            display="flex"
                            mt={4}
                            mb={8}
                            borderRadius="5px"
                            overflow="hidden"
                            justifyContent="center"
                        // height={190}
                        // width={282}
                        >
                            <Image
                                alt="Project thumbnail"
                                objectFit={'cover'}
                                src={hootdatER}
                            />
                        </Box>

                    </Box>
                    <Box display={'flex-column'} mb={8}>
                        <Box flexGrow={1}>
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
                                User flows
                            </Heading>
                        </Box>
                        <Box
                            display="flex"
                            mt={4}
                            mb={8}
                            borderRadius="5px"
                            overflow="hidden"
                            justifyContent="center"
                            columnGap={4}
                        // height={190}
                        // width={282}
                        >
                            <Image
                                alt="Project thumbnail"
                                objectFit={'cover'}
                                src={hootdatUserFlowHost}
                            />
                            <Image
                                alt="Project thumbnail"
                                objectFit={'cover'}
                                src={hootdatUserFlowParticipant}
                            />
                                                        <Image
                                alt="Project thumbnail"
                                objectFit={'cover'}
                                src={hootdatUserFlowGame}
                            />
                        </Box>
                        <Box
                            display="flex"
                            mt={4}
                            mb={8}
                            borderRadius="5px"
                            overflow="hidden"
                            justifyContent="center"
                            columnGap={4}

                        // height={190}
                        // width={282}
                        >
                            {/* <Image
                                alt="Project thumbnail"
                                objectFit={'cover'}
                                src={hootdatUserFlowGame}
                            /> */}
                            <Image
                                alt="Project thumbnail"
                                objectFit={'cover'}
                                src={hootdatUserFlowPackCreation}
                            />
                        </Box>

                    </Box>
                </Box>



            </Stack>
        </Container>


    )
}

export default Work
