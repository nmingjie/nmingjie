import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
import thumbMargelo from '../public/images/works/margelo_eyecatch.png'
import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'
import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

const Works = () => (
  <Layout title="Works">
  <Container>
    <Heading as="h3" fontSize={20} mb={4}>
      Works
    </Heading>

    <SimpleGrid columns={[1, 1, 2]} gap={6}>
    <Section>
        <WorkGridItem id="inkdrop" title="ST-JTC PDD Building Management Dashboard" thumbnail={thumbInkdrop}>
        Created 2 interactive dashboards using Tableau
        for the department. Dashboards are connected to
        Oracle database.
        </WorkGridItem>
      </Section>
      <Section>
        <WorkGridItem id="inkdrop" title="Hoot Dat!" thumbnail={thumbInkdrop}>
        Hootdat is a digital game created to help foster closer bonds between people during the COVID-19 period.
        </WorkGridItem>
      </Section>
      <Section>
        <WorkGridItem id="inkdrop" title="Crowdfunding Platform" thumbnail={thumbInkdrop}>
        Crowdfunding is a system of catalogue of projects looking for crowdfunding.
        </WorkGridItem>
      </Section>
      {/* <Section>
        <WorkGridItem
          id="walknote"
          title="walknote"
          thumbnail={thumbWalknote}
        >
          Music recommendation app for iOS
        </WorkGridItem>
      </Section>

      <Section delay={0.1}>
        <WorkGridItem
          id="fourpainters"
          title="The four painters"
          thumbnail={thumbFourPainters}
        >
          A video work generated with deep learning, imitating famous four
          painters like Van Gogh
        </WorkGridItem>
      </Section>
      <Section delay={0.1}>
        <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="Menkiki">
          An app that suggests ramen(noodle) shops based on a given photo of
          the ramen you want to eat
        </WorkGridItem>
      </Section> */}
    </SimpleGrid>


    <Section delay={0.4}>
      <Divider my={6} />

      <Heading as="h3" fontSize={20} mb={4}>
        Old works
      </Heading>
    </Section>

    <SimpleGrid columns={[1, 1, 2]} gap={6}>
      {/* <Section delay={0.5}>
        <WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="Pichu*Pichu">
          Twitter client app for iPhone Safari
        </WorkGridItem>
      </Section> */}
      <Section delay={0.5}>
        <WorkGridItem
          id="freedbtagger"
          thumbnail={thumbFreeDBTagger}
          title="FitNUS"
        >
          FitNUS is a fitness tracking system. It is a hardware
          prototype that uses LPCXpresso microcontroller
          board to track the status of a climber.
        </WorkGridItem>
      </Section>
      <Section delay={0.5}>
        <WorkGridItem
          id="freedbtagger"
          thumbnail={thumbFreeDBTagger}
          title="Real-time sound system"
        >
          Real-time sound system is a hardware
          prototype that uses FPGA application device to
          play and record sounds.
        </WorkGridItem>
      </Section>
      <Section delay={0.5}>
        <WorkGridItem
          id="freedbtagger"
          thumbnail={thumbFreeDBTagger}
          title="Tableau Dashboard project"
        >
          Created 2 interactive dashboards using Tableau
          for the department. Dashboards are connected to
          Oracle database.
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
  //           id="freedbtagger"
  //           thumbnail={thumbFreeDBTagger}
  //           title="freeDBTagger"
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
