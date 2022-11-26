import {
  Container,
  Badge,
  Link,
  List,
  ListItem
  // ,
  // AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="SSMC Dashbaord">
    <Container>
      <Title>
        SSMC Dashbaord <Badge>2019-</Badge>
      </Title>
      <P>
      Two interactive dashboards using Tableau for the department. Dashboards are connected to Oracle database.

      1. A management dashboard providing an overview of shipment status of the company, used by heads of     department.
      Details included: Trendline of out of baseline parameters, ranking of suppliers, overall percentage of healthy parameters.
      Liaised with department head on the layout and details of the dashboard according to their needs.  
      2. A live updated trendline of essential values of raw materials (parameters) from incoming shipments used in the production of Integrated Circuits (IC)
      Details included: Filters base on Time, Suppliers, Parameters.
      Engaged face-to-face with suppliers from Korea to display trendlines created in Tableau
      </P>
      <List ml={4} my={4}>
        {/* <ListItem>
          <Meta>Website</Meta>
          <Link href="https://hoot-dat.netlify.app/">
            https://hoot-dat.netlify.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
        <ListItem>
          <Meta>Platform</Meta>
          <span>Tableau</span>
        </ListItem>
        <ListItem>
          <Meta>Tools</Meta>
          <span>Tableau, Oracle Database</span>
        </ListItem>
        {/* <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://blog.SSMC Dashbaord.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
            How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
            $5/mo <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
      </List>

      <WorkImage src="/images/works-mj/ssmc_oob.png" alt="SSMC Dashbaord" />
      <WorkImage src="/images/works-mj/ssmc_supplier_quality_dashboard.png" alt="SSMC Dashbaord" />

      {/* <WorkImage src="/images/works/SSMC Dashbaord_02.png" alt="SSMC Dashbaord" /> */}
      {/* <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/-qBavwqc_mY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio> */}
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
