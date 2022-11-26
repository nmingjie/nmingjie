import {
  Container,
  Badge,
  // Link,
  List,
  ListItem,
  SimpleGrid,
  Heading,
  Divider
  // ,
  // AspectRatio
} from '@chakra-ui/react'
// import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { WorkGridItem } from '../../components/grid-item'

import thumbAirbitat from '../../public/images/works-mj/sfems_airbitat.png'
import thumbEV from '../../public/images/works-mj/sfems_ev.png'

const Work = () => (
  <Layout title="Smart Facility Estate Management System">
    <Container>
      <Title>
      SFEMS <Badge>2022-</Badge>
      </Title>
      <P>
        Smart Facility Estate Management System (SFEMS) offers various operational 
        workflows to help facility managers manage estates in a Operation Command and control (OC2),.
        SFEMs is a joint collaboration between ST-JTC for the punggol digital district (PDD)
        area in Singapore.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web, iOS, Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>AngularJS, NodeJS and MSSQL</span>
        </ListItem>
        <ListItem>
          <Meta>Team</Meta>
          <span>Team of 8</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works-mj/sfems_eyecatch21.png" alt="SFEMS" />
      <WorkImage src="/images/works-mj/sfems05.png" alt="SFEMS" />

      <Section>
      <Heading as="h3" fontSize={16} mb={4}>
        Demonstrations & Presentations
      </Heading>
      </Section>
      <WorkImage src="/images/works-mj/sfems_demo_wcs01.png" alt="SFEMS" />
      World City Summit 2022 at Marina Bay Sands Convention Center

      <Divider my={2} />

      <WorkImage src="/images/works-mj/sfems_demo_sc.png" alt="SFEMS" />
      ST-JTC PDD Steering Commitee attended by upper management

      <Divider my={6} />

    
      <Section>
      <Heading as="h3" fontSize={16} mb={4}>
        Asset Management
      </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section>
        <WorkGridItem id="sfems" title="Airbitat" thumbnail={thumbAirbitat}>
        Integration: Airbitat
        </WorkGridItem>
      </Section>
      <Section>
        <WorkGridItem id="sfems" title="EV" thumbnail={thumbEV}>
        Integration: EV
        </WorkGridItem>
      </Section>
      </SimpleGrid>
      <P>
      <Badge>PDD</Badge> Integrate 23 front vertical systems e.g. lift, security system, 
      district cooling system, fire alarm system etc
      {/*  so as to achieve integrated operational control and monitoring for all verticals within the estate. */}
      </P>
      <P>
      <Badge>ST Jurong East Branch</Badge> Integrate lift, airbitat, EV & BMS systems.
      </P>

      <Divider my={6} />

      <Section>
      <Heading as="h3" fontSize={16} mb={4}>
        Event Monitoring
      </Heading>
      </Section>
      
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
