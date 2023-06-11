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

import { ChevronRightIcon, DownloadIcon, ChatIcon } from '@chakra-ui/icons';

import Typed from 'react-typed';

import NextLink from 'next/link'
import Image from 'next/image';

import cepThumbnail from '../../public/images/creations/cep/cep_eyecatch.png';

import ruleSetEditor from '../../public/images/creations/cep/cep_editor.png';
import ruleSetEditorSubscribe from '../../public/images/creations/cep/subscribe-setting.png';
import ruleSetEditorCondition from '../../public/images/creations/cep/condition-settings.png';
import ruleSetEditorVariable from '../../public/images/creations/cep/setting-variables.png';
import ruleSetEditorTask from '../../public/images/creations/cep/setting-settings.png';
import ruleSetEditorMapper from '../../public/images/creations/cep/mapper.png';


import ruleSetViewer from '../../public/images/creations/cep/cep_viewer.png';
import ruleSetEventsViewer from '../../public/images/creations/cep/cep_eyecatch.png';


import lowFiImage from '../../public/images/creations/cep/low-fi.png';
import systemArchitectureImage from '../../public/images/creations/sfems/system_architecture_contributions.png';

import generalActivityImage from '../../public/images/creations/cep/design-process/general-activity.png';

import cepTplERImage from '../../public/images/creations/cep/design-process/ER_flowTPL.png';
import cepEditorSeqImage from '../../public/images/creations/cep/design-process/SEQ_editor_CRUD.png';

import cepViewerSeqLoadImage from '../../public/images/creations/cep/design-process/SEQ_viewer_loadFlow.png';
import cepViewerSeqSelectImage from '../../public/images/creations/cep/design-process/SEQ_viewer_selectFlow.png';

import cepERImage from '../../public/images/creations/cep/design-process/ER_flow.png';

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
                            src={cepThumbnail}

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
                        Complex Event Processing (CEP)
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
                                    Complex event processing platform that empowers users to configure rule sets directly from a user-friendly interface. With a powerful backend engine, the platform processes incoming events using these rule sets, enabling real-time event processing and analysis. The processed events are then displayed in a clear and accessible format, allowing users to gain valuable insights and make informed decisions based on the processed event data.

                                </Paragraph>
                                <br></br>
                                <Paragraph>
                                    The complex event processing module is a subset of and sits within the {' '}
                                    <NextLink href="/works/sfems" passHref>
                                        <Link
                                            color={contentButtonHoverBg[colorMode]}
                                        > Smart CityOS product.
                                        </Link>
                                    </NextLink>
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
                                    <span>Full Stack Developer for Complex Event Processing System</span>
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
                                    <span>2023</span>
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
                            It enables businesses to make proactive decisions, respond swiftly to critical events, and gain a competitive edge in dynamic environments.


                        </ListItem>
                        <ListItem
                            // display="flex"
                            alignItems="center"
                        >
                            <ListIcon
                                as={ChevronRightIcon}
                                color={listIconsColor[colorMode]}
                            />
                            Revolutionizes data-driven decision-making and enhances operational efficiency.


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
                                Rule Set Editor
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
                                    Ability to configure conditional rules based on various events.
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
                                    Support for logical operators, aggregations, and basic functions  in rule definition.
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
                                    Support for data mapping between nodes.
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
                                    Ability to save, update, and version control rule sets for easy management.
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
                                    Integration with data sources and event streams for real-time rule evaluation.
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
                                src={ruleSetEditor}

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
                                src={ruleSetEditorSubscribe}
                            />
                            <Image
                                alt="Project thumbnail"
                                objectFit={'cover'}
                                src={ruleSetEditorCondition}
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
                                src={ruleSetEditorVariable}
                            />
                            <Image
                                alt="Project thumbnail"
                                objectFit={'cover'}
                                src={ruleSetEditorTask}
                            />
                        </Box>
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
                                src={ruleSetEditorMapper}
                            />
                        </Box>
                    </Box>

                    <Box display={'flex-column'} mb={6}>
                        <Box>
                            <Heading
                                as="h2"
                                variant="section-title"
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
                                Processing Engine
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
                                    High-performance and scalable engine capable of ingesting and processing large volumes of incoming events in real-time.
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
                                    Seamless integration with external systems and data sources for event ingestion.
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
                                    Rule evaluation and data manipulation on incoming event instances.
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
                                    Ability to handle and manipulate data formats between nodes.
                                </Paragraph>
                            </ListItem>
                        </List>


                    </Box>

                    <Box display={'flex-column'} mb={6}>
                        <Box>
                            <Heading
                                as="h2"
                                variant="section-title"
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
                                Rule Set Viewer
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
                                    Interactive interface to display the configured rule diagram.
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
                                    Ability to click on individual rules to view their details and rule diagram, including associated conditions and actions.
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
                                    Ability to browse and search rule sets
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
                                    Ability to edit or delete configured rules.
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
                                    Ability to activate/deactivate rule sets for easy management.
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
                                src={ruleSetViewer}
                            />
                        </Box>
                    </Box>
                    <Box display={'flex-column'} mb={6}>
                        <Box>
                            <Heading
                                as="h2"
                                variant="section-title"
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
                                Events Viewer
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
                                    User-friendly interface to view the status and details of processed events.
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
                                    Ability to click on events to view their processed status with associated rule diagram.
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
                                    Refreshing, search and filtering options to quickly find specific processed events.
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
                                    Visualization of event paths or flows based on the executed rule diagram.
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
                                src={ruleSetEventsViewer}
                            />
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
                                Low-fi
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
                                src={lowFiImage}
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
                                General Activity Diagram
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
                                src={generalActivityImage}
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
                                Rule Set Editor
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
                                src={cepTplERImage}
                            />
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
                                src={cepEditorSeqImage}
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
                                Processing Engine
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
                                src={cepERImage}
                            />
                        </Box>
                        <Paragraph>
                            ER Diagram for the Processing Engine
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
                                Rule Set Viewer
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
                                src={cepViewerSeqLoadImage}
                            />
                            <Image
                                alt="Project thumbnail"
                                objectFit={'cover'}
                                src={cepViewerSeqSelectImage}
                            />
                        </Box>
                    </Box>
                </Box>



            </Stack>
        </Container>


    )
}

export default Work
