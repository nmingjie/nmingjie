import {
  Container,
  Badge,
  // Link,
  List,
  ListItem,
  // OrderedList,
  UnorderedList,
  Divider,
  Heading
  // ,
  // AspectRatio
} from '@chakra-ui/react'
// import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'

const Work = () => (
  <Layout title="SSMC Dashbaord">
    <Container>
      <Title>
        SSMC Dashbaord <Badge>2019-</Badge>
      </Title>
      <P>
      Two dashboards created for quality assurance (QA) department in SSMC. 
      Dashboards are connected to Oracle database.
      </P>
      <Divider my={4}/>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Tableau</span>
        </ListItem>
        <ListItem>
          <Meta>Tools</Meta>
          <span>Tableau, Oracle Database</span>
        </ListItem>
        <ListItem>
          <Meta>Team</Meta>
          <span>Myself</span>
        </ListItem>
      </List>

      <Section delay={0.4}>
      <Divider my={6} />

      <Heading as="h3" fontSize={16} mb={4}>
        Shipment OOB Trendline
      </Heading>
      </Section>
      <WorkImage src="/images/works-mj/ssmc_oob.png" alt="SSMC Dashboard" />

      A live updated trendline of essential values of raw materials (parameters) from 
      incoming shipments used in the production of Integrated Circuits (IC)

        <UnorderedList>
          <ListItem>
          Filters base on Time, Suppliers, Parameters.
          </ListItem>
          <ListItem>
          Engaged face-to-face with suppliers from Korea to display trendlines
          </ListItem>
        </UnorderedList>

        <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={16} mb={4}>
          Supplier Quality Dashboard
        </Heading>
        </Section>

      <WorkImage src="/images/works-mj/ssmc_supplier_quality_dashboard.png" alt="SSMC Dashboard" />
      A management dashboard providing an overview of
      shipment status of the company, used by heads of department.

        <UnorderedList>
          <ListItem>
          Parameters: Trendline of out of baseline parameters, ranking of suppliers, overall percentage of healthy parameters.
          </ListItem>
          <ListItem>
          Liaised with department head on the layout and details 
          of the dashboard according to their needs.           
          </ListItem>
        </UnorderedList>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
