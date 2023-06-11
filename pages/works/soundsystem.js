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
import Container from '../../components/Container';
import { BioSection, BioYear } from '../../components/Bio.js';
import Paragraph from '../../components/Paragraph';
import VoxelRaccoonLoader from '../../components/voxel-raccoon-loader.js';
import Creations from '../../components/Creations.js';
import SocialMedia from '../../components/SocialMedia.js';
import Section from '../../components/Section.js';

import { ChevronRightIcon, DownloadIcon, ChatIcon, ExternalLinkIcon } from '@chakra-ui/icons';

import Typed from 'react-typed';

import NextLink from 'next/link'
import Image from 'next/image';

import soundSystemThumbnail from '../../public/images/creations/soundsystem/soundsystem_eyecatch.png';


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

                    <Box
                        display="flex"
                        mt={4}
                        // mb={8}
                        borderRadius="5px"
                        overflow="hidden"
                        columnGap={4}
                    // height={380}
                    // width={664}
                    >
                        <Image
                            alt="Project thumbnail"
                            objectFit={'cover'}
                            src={soundSystemThumbnail}

                        />
                    </Box>
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
                        Real-time Sound System
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
                                    Real-time sound system hardware prototype using FPGA device to play and record sounds
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
                                    <span>  Software Developer

                                    </span>
                                </ListItem>
                                <ListItem>
                                    <Badge colorScheme="green" mr={2}>
                                        Tech Stack
                                    </Badge>
                                    <span> C, Verilog</span>
                                </ListItem>
                                <ListItem>
                                    <Badge colorScheme="green" mr={2}>
                                        Timeline
                                    </Badge>
                                    <span>2018</span>
                                </ListItem>
                                <ListItem>
                                    <Badge colorScheme="green" mr={2}>
                                        Platform
                                    </Badge>
                                    <span>FPGA
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
                            Received grade A for NUS EE2026.


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
                                    Connected the system to a keyboard functioning as a piano player and a playback recorder, capturing both speech audio and keys played.
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
                                    Implemented features: playback speed, skip, rewind, frequency and pitch adjustment, octave adjustor, volume control with LED display, 7-segment mode display, configured Mario song, reset functionality, and output signal adjustor for triangular and sinusoidal waveforms.
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
                                    src={soundSystemThumbnail}

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
