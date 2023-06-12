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
// import Creations from '../../components/Creations.js';
// import SocialMedia from '../../components/SocialMedia.js';
import Section from '../../components/section.js';

import { ChevronRightIcon, DownloadIcon, ChatIcon } from '@chakra-ui/icons';

import Typed from 'react-typed';

import NextLink from 'next/link'
import Image from 'next/image';

import sfemsThumbnail from '../../public/images/creations/sfems/sfems_eyecatch1.png';

import liftEntityImage from '../../public/images/creations/sfems/integration/lpms-overallstats.png';
import cctvEntityImage from '../../public/images/creations/sfems/asset/entity/cctv-stream.png';
import alarmManagementImage from '../../public/images/creations/sfems/alarm/management-view.png';
import systemArchitectureImage from '../../public/images/creations/sfems/system_architecture_contributions.png';
import assetGatewayImage from '../../public/images/creations/sfems/integration/SEQ_gateway.png';
import alarmERImage from '../../public/images/creations/sfems/alarm/ER.png';
import alarmSeqOnLoadImage from '../../public/images/creations/sfems/alarm/SEQ_onLoad.png';
import alarmAdOnLoadImage from '../../public/images/creations/sfems/alarm/AD_onLoad.png';
import alarmApiThumbnail from '../../public/images/creations/sfems/alarm_api_documentation.png';

import performanceSystemImage from '../../public/images/creations/sfems/performance-test/system_architecture_setup.png';
import performanceVMImage from '../../public/images/creations/sfems/performance-test/grafana_VM.png';
import performanceNodeImage from '../../public/images/creations/sfems/performance-test/grafana_node.png';
import performanceKafkaImage from '../../public/images/creations/sfems/performance-test/grafana_kafka.png';

import demoWcsCnaImage from '../../public/images/creations/sfems/demo/sfems_demo_wcs_cna_02.png';
import demoWcsMinisterImage from '../../public/images/creations/sfems/demo/wcs-minister.jpg';
import demoScImage from '../../public/images/creations/sfems/demo/sfems_demo_sc.png';

import React, { Component } from 'react'
import Protect from 'react-app-protect'
import 'react-app-protect/dist/index.css'

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
        <Protect sha512='b9c2657616de623c869b0352fc717f32b68b9edd1fa068d045182c1a4892b922087cbd3fa11dfc3c2bc1f12659d426e84040060ac807d8c384c50a5acd1174ce'
            blur={'true'}
            styles={{
                header: { 'font-size': 'medium' },
                input: { border: 'solid', width: '100%', 'border-radius': 8, 'border-color': '#e6e6e6', 'background-color': 'hsla(0,0%,56.5%,.075)', padding: 6 },
                // wrapper : {color:'teal'},
                button: { border: 'solid', 'border-radius': 8, 'color': '#828282', 'box-shadow': '#e6e6e6', padding: 4, 'padding-left': 8, 'padding-right': 8 },
            }}
        >
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

                    <Box
                        display="flex-column"
                        mt={4}
                        // mb={8}
                        borderRadius="5px"
                        overflow="hidden"
                        justifyContent="center"
                    // height={190}
                    // width={282}
                    >
                        <Image
                            alt="Project thumbnail"
                            objectFit={'cover'}
                            src={sfemsThumbnail}
                        // height={190}
                        // width={282}
                        />
                        <Heading
                            as="h2"
                            // variant="section-title"
                            // mb={6}
                            mt={6}
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
                            Smart Facility Estate Management System (SFEMS)
                        </Heading>
                    </Box>

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
                                        The Open Digital Platform (ODP)/ Smart City OS, is a web based platform designed to seamlessly integrate
                                        diverse smart solutions into a unified district management system, enabling efficient monitoring and
                                        management of smart city applications with a comprehensive view of the entire estate.
                                    </Paragraph>
                                    <br></br>
                                    <Paragraph>
                                        Developed in {' '}
                                        <NextLink href="https://www.jtc.gov.sg/about-jtc/news-and-stories/press-releases/first-of-its-kind-open-digital-platform-for-smart-city-solutions-in-punggol-digital-district" passHref>

                                            <Link target="_blank"

                                                color={contentButtonHoverBg[colorMode]}
                                            >collaboration between ST Engineering and JTC
                                            </Link>
                                        </NextLink>
                                        {' '}, the ODP/Smart City OS has undergone trial operations
                                        since January 2021 and is set to expand its implementation to the Punggol Digital District (PDD) by 2024
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
                                        <span>Software Developer for Alarm & Asset management system</span>
                                    </ListItem>
                                    <ListItem>
                                        <Badge colorScheme="green" mr={2}>
                                            Tech Stack
                                        </Badge>
                                        <span>AngularJS, NodeJS, Microsoft SQL, Javascript, HTML5 , CSS</span>
                                    </ListItem>
                                    <ListItem>
                                        <Badge colorScheme="green" mr={2}>
                                            Timeline
                                        </Badge>
                                        <span>2021 - 2024</span>
                                    </ListItem>
                                    <ListItem>
                                        <Badge colorScheme="green" mr={2}>
                                            Platform
                                        </Badge>
                                        <span>Web</span>
                                    </ListItem>
                                    <ListItem>
                                        <Badge colorScheme="green" mr={2}>
                                            Users
                                        </Badge>
                                        <span>Facility Management Team</span>
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
                                Increased efficiency and streamline workflow for better
                                district operation management.

                                <UnorderedList spacing={1} pt={4} pb={4} pl={4}>
                                    <ListItem>
                                        Centralization of district operations expected to reduce manpower
                                        demand for facilities operations by 50%.

                                    </ListItem>
                                    <ListItem>
                                        30% reduction in energy and water consumption in the district due to improved
                                        operations with the ODP/ Smart City OS.
                                    </ListItem>
                                </UnorderedList>

                            </ListItem>
                        </List>
                    </Box>

                    <Box>
                        <Box display={'flex'} mb={6}>
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
                                    / Requirements, Features & Results
                                </Heading>
                            </Box>
                        </Box>

                        <Box display={'flex-column'} mb={6}>
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
                                    Asset Management System
                                </Heading>
                            </Box>

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
                                        Integration of 10+ building/district systems for PDD and ST Jurong East Building, including facilities, building and estate management systems
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
                                    <Paragraph>Real-time and accurate monitoring of district and facility systems statuses</Paragraph>
                                </ListItem>
                                <ListItem
                                    display="flex"
                                    alignItems="center"
                                >
                                    <ListIcon
                                        as={ChevronRightIcon}
                                        color={listIconsColor[colorMode]}
                                    />
                                    <Paragraph>Access control to these systems
                                    </Paragraph>
                                </ListItem>
                            </List>

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
                                    src={liftEntityImage}

                                />
                            </Box>
                            <Paragraph>
                                Snapshot of the lift asset management and entity details view
                            </Paragraph>

                            <Box
                                display="flex"
                                mt={4}
                                mb={8}
                                borderRadius="5px"
                                overflow="hidden"
                            // height={380}
                            // width={564}
                            >
                                <Image
                                    alt="Project thumbnail"
                                    objectFit={'cover'}
                                    src={cctvEntityImage}
                                />
                            </Box>
                            <Paragraph>
                                Snapshot of the CCTV entity details view
                            </Paragraph>

                        </Box>

                        <Box display={'flex-column'}>
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
                                    Alarm Monitoring System
                                </Heading>
                            </Box>

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
                                        Real-time detection and reaction to events through streamlined workflow.
                                    </Paragraph>
                                </ListItem>
                            </List>


                            <Box
                                display="flex-column"
                                mt={4}
                                mb={8}
                                borderRadius="5px"
                                overflow="hidden"
                            // height={190}
                            // width={282}
                            >
                                <Image
                                    alt="Project thumbnail"
                                    objectFit={'cover'}
                                    src={alarmManagementImage}
                                />
                            </Box>
                            <Paragraph>
                                Alarm Management page allows the system to detect real-time alarms based on configured rules from sensor and
                                asset data, thereby alerting and empowering users to initiate the necessary operational workflows in response to the alarms.
                            </Paragraph>

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
                                    System Architecture
                                </Heading>
                            </Box>
                            <Box
                                display="flex"
                                mt={4}
                                mb={8}
                                borderRadius="5px"
                                overflow="hidden"
                            // height={190}
                            // width={282}
                            >
                                <Image
                                    alt="Project thumbnail"
                                    objectFit={'cover'}
                                    src={systemArchitectureImage}
                                />
                            </Box>
                            <Paragraph>
                                General System Architecture of the Smart City OS platform
                            </Paragraph>
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
                                    Asset Management System

                                </Heading>
                            </Box>
                            <Box
                                display="flex"
                                mt={4}
                                mb={8}
                                borderRadius="5px"
                                overflow="hidden"
                            // height={500}
                            // width={350}
                            >
                                <Image
                                    alt="Project thumbnail"
                                    objectFit={'cover'}
                                    src={assetGatewayImage}
                                />
                            </Box>
                            <Paragraph>
                                Sequence Diagram for the asset management system, Data ingestion flow
                            </Paragraph>
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
                                    Alarm Management System
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
                                    src={alarmERImage}
                                />
                            </Box>
                            <Paragraph>
                                ER Diagram for the alarm management system
                            </Paragraph>
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
                                    / Load & Performance test
                                </Heading>
                                <Box
                                    display="flex-column"
                                    mt={4}
                                    mb={8}
                                    borderRadius="5px"
                                    overflow="hidden"
                                    justifyContent="center"
                                >
                                    <Image
                                        alt="Project thumbnail"
                                        objectFit={'cover'}
                                        src={performanceSystemImage}
                                        height={310}
                                        width={664}
                                    />
                                    <Paragraph>
                                        Load Test Setup

                                    </Paragraph>
                                </Box>
                                <Box
                                    display="flex"
                                    mt={4}
                                    mb={8}
                                    borderRadius="5px"
                                    overflow="hidden"
                                // justifyContent="center"
                                >
                                    <Image
                                        alt="Project thumbnail"
                                        objectFit={'cover'}
                                        src={performanceNodeImage}
                                        height={190}
                                        width={282}
                                    />
                                    <Image
                                        alt="Project thumbnail"
                                        objectFit={'cover'}
                                        src={performanceKafkaImage}
                                        height={190}
                                        width={282}
                                    />

                                </Box>
                                <Box
                                    display="flex"
                                    mt={4}
                                    mb={8}
                                    borderRadius="5px"
                                    overflow="hidden"
                                // justifyContent="center"
                                >
                                    <Image
                                        alt="Project thumbnail"
                                        objectFit={'cover'}
                                        src={performanceVMImage}
                                        height={310}
                                        width={664}
                                    />

                                </Box>
                            </Box>
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
                                    / Demo and Presentations

                                </Heading>

                            </Box>
                        </Box>
                        <Box display={'flex-column'} mb={6}
                        >
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
                                    World Cities Summit
                                </Heading>
                            </Box>
                            <Box
                                display="flex"
                                mt={4}
                                mb={8}
                                borderRadius="5px"
                                overflow="hidden"
                                justifyContent="center"

                            >
                                <Image
                                    alt="Project thumbnail"
                                    objectFit={'cover'}
                                    src={demoWcsCnaImage}
                                // height={190}
                                // width={282}
                                />
                                <Image
                                    alt="Project thumbnail"
                                    objectFit={'cover'}
                                    src={demoWcsMinisterImage}
                                />

                            </Box>

                            <Paragraph >
                                In 2022, Ming Jie was involved in and was {' '}
                                <NextLink href="https://www.channelnewsasia.com/watch/countries-share-lessons-covid-19-shape-cities-indranee-rajah-2848451" passHref>

                                    <Link target="_blank"

                                        color={contentButtonHoverBg[colorMode]}
                                    >featured on CNA
                                    </Link>
                                </NextLink>
                                {' '} whilst showcasing his team&apos;s project - &apos;Smart City Operating Systems&apos; in World Cities Summit 2022, a prominent convention where government leaders and industry experts meet to address liveable and sustainable city challenges.
                            </Paragraph>
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
                                    PDD Steering Comittee Meeting
                                </Heading>
                            </Box>
                            <Box
                                display="flex"
                                mt={4}
                                mb={8}
                                borderRadius="5px"
                                overflow="hidden"
                                height={190}
                                width={282}
                            >
                                <Image
                                    alt="Project thumbnail"
                                    objectFit={'cover'}
                                    src={demoScImage}
                                />

                            </Box>
                            <Paragraph>
                                Throughout the project life cycle, Ming Jie participated in steering committees to provide project milestone updates to key stakeholders from JTC and ST, effectively presenting the progress to these important stakeholders.
                            </Paragraph>
                        </Box>
                    </Box>



                </Stack>
            </Container>
        </Protect>

    )
}

export default Work
