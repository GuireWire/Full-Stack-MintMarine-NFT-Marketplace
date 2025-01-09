import { Download, Features, SectionWrapper, Footer, Header, } from './components'
import assets from './assets'
import styles from './styles/Global'

const App = () => {
  return (
    <>
      <main className="overflow-hidden">
        <Header />
        <SectionWrapper
          title="Explore the Digital Reef of NFTs and Unlock Hidden Treasures"
          description="Buy, sell, and dive deep into the world of NFTs. Discover unique treasures and grow your collection. on MintMarine. Join thousands of NFT enthusiasts already navigating the Digital Reef of MintMarine."
          showBtn
          mockupVideo={assets.landing1}
          banner="banner"
          customVideoClass={`${styles.sectionVideo} translate-x-[-25%]`}
          className="pt-[120px] max-lg:pt-[80px]"
        />
        <SectionWrapper
          title="Sail Through a Seamless Marketplace"
          description="Enjoy a smooth and intuitive user interface designed to enhance your NFT trading experience on MintMarine."
          mockupVideo={assets.landing2}
          customVideoClass={`${styles.sectionVideo} translate-x-[-25%] scale-x-[-1]`}
          // mockupImg={assets.homeCards}
          reverse
        />
        <Features />
        <SectionWrapper
          title="Deployment Made Simple"
          description="MintMarine is built with cutting-edge technology, ensuring it runs natively across devices. Share the ocean of NFTs with ease!"
          mockupVideo={assets.landing3}
          customVideoClass={`${styles.sectionVideo} translate-x-[-12%]`}
          reverse
        />
        <SectionWrapper
          title="Showcase Your NFT Treasures"
          description="MintMarine provides two intuitive screens: one for browsing your digital reef and another for exploring each NFT in detail."
          // mockupImg={assets.mockup}
          mockupVideo={assets.landing4}
          customVideoClass={`${styles.sectionVideo} translate-x-[-15%]`}
          banner="banner02"
        />
        <Download />
        <Footer />
      </main>
    </>
  )
}

export default App
