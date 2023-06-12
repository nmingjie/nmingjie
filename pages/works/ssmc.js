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

import ssmcThumbnail from '../../public/images/creations/ssmc/ssmc_eyecatch.png';
import ssmcDailyThumbnail from '../../public/images/creations/ssmc/ssmc_daily_parameters.png';
import ssmcOverviewThumbnail from '../../public/images/creations/ssmc/ssmc_overview_dashboard.png';


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
                        src={ssmcThumbnail}
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
                        Analytics & visualisation dashboards for incoming raw materials shipment
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
                                    Analytics & visualisation dashboards for incoming raw materials shipment for Systems on Silicon Manufacturing (SSMC), Quality Reliability Assurance department, incorporating complex business logics with live connection to Oracle DB
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
                                    <span> Data Analytics for incoming raw materials shipment
                                    </span>
                                </ListItem>
                                <ListItem>
                                    <Badge colorScheme="green" mr={2}>
                                        Tech Stack
                                    </Badge>
                                    <span>Tableau, Oracle DB</span>
                                </ListItem>
                                <ListItem>
                                    <Badge colorScheme="green" mr={2}>
                                        Timeline
                                    </Badge>
                                    <span>2019</span>
                                </ListItem>
                                <ListItem>
                                    <Badge colorScheme="green" mr={2}>
                                        Platform
                                    </Badge>
                                    <span>Tableau Dashboard
                                    </span>
                                </ListItem>
                                <ListItem>
                                    <Badge colorScheme="green" mr={2}>
                                        Users
                                    </Badge>
                                    <span>Suppliers, Higher Management
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
                            Optimized the process by transitioning from Excel-based charts to interactive visualization dashboards with trendlines of parameters and filters.


                        </ListItem>
                        <ListItem
                            // display="flex"
                            alignItems="center"
                        >
                            <ListIcon
                                as={ChevronRightIcon}
                                color={listIconsColor[colorMode]}
                            />
                            Successfully rolled out the dashboards to suppliers from Korea and higher management.


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
                                    Real-time trendline visualization of essential values of raw materials from incoming shipments.
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
                                    Visualization includes key parameters relevant to the production of Integrated Circuits (IC).
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
                                    Clear indication and highlighting of out-of-bound parameters on the trendline graph.
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
                                    Interactive features allowing users to select parameters for more detailed information.
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
                            // height={380}
                            // width={664}
                            >
                                <Image
                                    alt="Project thumbnail"
                                    objectFit={'cover'}
                                    src={ssmcDailyThumbnail}

                                />

                            </Box>
                        </Stack>
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
                            Supplier Quality Management Overview Dashboard
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
                                Supplier quality management dashboard offering an overview of shipment status within the company, specifically designed for heads of department.
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
                                Out-of-bound parameters based on weekly, daily, monthly percentages to quickly identify potential quality issues.
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
                                Weekly distributions of shipment status categorized by suppliers and commodity (parameters) for comprehensive analysis.
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
                            // height={380}
                            // width={664}
                            >
                                <Image
                                    alt="Project thumbnail"
                                    objectFit={'cover'}
                                    src={ssmcOverviewThumbnail}

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
