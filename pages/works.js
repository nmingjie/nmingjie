import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbHootDat from '../public/images/works-mj/hootdat_eyecatch.png'
import thumbSFEMS from '../public/images/works-mj/sfems_eyecatch21.png'
import thumbFitNUS from '../public/images/works-mj/fitnus_eyecatch.png'
import thumbSoundSystem from '../public/images/works-mj/soundsystem_eyecatch.png'
import thumbSSMC from '../public/images/works-mj/ssmc_eyecatch.png'
import thumbStuffSharing from '../public/images/works-mj/stuffsharing_eyecatch.png'


const Works = () => (
  <Layout title="Works">
  <Container>
    <Heading as="h3" fontSize={20} mb={4}>
      Works
    </Heading>

    <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section>
        <WorkGridItem id="sfems" title="SFEMS" thumbnail={thumbSFEMS}>
        Facility Management System
        </WorkGridItem>
      </Section>
      <Section delay={0.1}>
        <WorkGridItem id="hootdat" title="Hoot Dat!" thumbnail={thumbHootDat}>
        Digital game created to help foster closer bonds between people during COVID-19.
        </WorkGridItem>
      </Section>
    </SimpleGrid>


    <Section delay={0.4}>
      <Divider my={6} />

      <Heading as="h3" fontSize={20} mb={4}>
        Old works
      </Heading>
    </Section>

    <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section delay={0.5}>
        <WorkGridItem id="stuffsharing" title="Stuff Sharing Platform" thumbnail={thumbStuffSharing}>
        {/* Crowdfunding is a  */}
        Platform that allows people to borrow or lend stuff that they own
        </WorkGridItem>
      </Section>
      <Section delay={0.5}>
        <WorkGridItem
          id="fitnus"
          thumbnail={thumbFitNUS}
          title="FitNUS"
        >
          Climbing fitness tracking system
        </WorkGridItem>
      </Section>
      <Section delay={0.5}>
        <WorkGridItem
          id="soundsystem"
          thumbnail={thumbSoundSystem}
          title="Real-time Sound System"
        >
          FPGA hardware prototype that
          play and record sounds.
        </WorkGridItem>
      </Section>
      <Section delay={0.5}>
        <WorkGridItem
          id="ssmcdashboard"
          thumbnail={thumbSSMC}
          title="SSMC Dashboard"
        >
          Tableau Dashboards to help improve QA workflow
        </WorkGridItem>
      </Section>
      {/* <Section delay={0.6}>
        <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
          P2P private file sharing tool with MSN Messenger integration for
          Windows
        </WorkGridItem>
      </Section> */}
    </SimpleGrid>
  </Container>
</Layout>
  // <Layout title="Works">
  //   <Container>
  //     <Heading as="h3" fontSize={20} mb={4}>
  //       Works
  //     </Heading>

  //     <SimpleGrid columns={[1, 1, 2]} gap={6}>
  //       <Section>
  //         <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
  //           A Markdown note-taking app with 100+ plugins, cross-platform and
  //           encrypted data sync support
  //         </WorkGridItem>
  //       </Section>
  //       <Section>
  //         <WorkGridItem
  //           id="walknote"
  //           title="walknote"
  //           thumbnail={thumbWalknote}
  //         >
  //           Music recommendation app for iOS
  //         </WorkGridItem>
  //       </Section>

  //       <Section delay={0.1}>
  //         <WorkGridItem
  //           id="fourpainters"
  //           title="The four painters"
  //           thumbnail={thumbFourPainters}
  //         >
  //           A video work generated with deep learning, imitating famous four
  //           painters like Van Gogh
  //         </WorkGridItem>
  //       </Section>
  //       <Section delay={0.1}>
  //         <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="Menkiki">
  //           An app that suggests ramen(noodle) shops based on a given photo of
  //           the ramen you want to eat
  //         </WorkGridItem>
  //       </Section>
  //     </SimpleGrid>

  //     <Section delay={0.2}>
  //       <Divider my={6} />

  //       <Heading as="h3" fontSize={20} mb={4}>
  //         Collaborations
  //       </Heading>
  //     </Section>

  //     <SimpleGrid columns={[1, 1, 2]} gap={6}>
  //       <Section delay={0.3}>
  //         <WorkGridItem id="margelo" thumbnail={thumbMargelo} title="Margelo">
  //           A website of the elite app development and contracting agency based
  //           in Austria
  //         </WorkGridItem>
  //       </Section>
  //       <Section delay={0.3}>
  //         <WorkGridItem
  //           id="modetokyo"
  //           thumbnail={thumbModeTokyo}
  //           title="mode.tokyo"
  //         >
  //           The mode magazine for understanding to personally enjoy Singapore
  //         </WorkGridItem>
  //       </Section>
  //       <Section delay={0.3}>
  //         <WorkGridItem id="styly" thumbnail={thumbStyly} title="Styly">
  //           A VR Creative tools for fashion brands
  //         </WorkGridItem>
  //       </Section>
  //     </SimpleGrid>

  //     <Section delay={0.4}>
  //       <Divider my={6} />

  //       <Heading as="h3" fontSize={20} mb={4}>
  //         Old works
  //       </Heading>
  //     </Section>

  //     <SimpleGrid columns={[1, 1, 2]} gap={6}>
  //       <Section delay={0.5}>
  //         <WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="Pichu*Pichu">
  //           Twitter client app for iPhone Safari
  //         </WorkGridItem>
  //       </Section>
  //       <Section delay={0.5}>
  //         <WorkGridItem
  //           id=""
  //           thumbnail={thumb}
  //           title=""
  //         >
  //           Automatic audio file tagging tool using FreeDB for Windows
  //         </WorkGridItem>
  //       </Section>
  //       <Section delay={0.6}>
  //         <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
  //           P2P private file sharing tool with MSN Messenger integration for
  //           Windows
  //         </WorkGridItem>
  //       </Section>
  //     </SimpleGrid>
  //   </Container>
  // </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
