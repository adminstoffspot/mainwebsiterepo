import Navbar from './Components/Navbar'
import Head from 'next/head';
export default function Home() {
  const addJsonLd = () => {
    return {
      __html: `
      "@context": "http://schema.org",
      "@type": "WebSite",
      "name": "STOFFSPOT",
      "url": "https://stoffspot.com/",
      "description": "Discover a world of style at StoffSpot – your premier destination for buying and selling quality clothing online. Explore a diverse marketplace filled with fashion treasures, where you can effortlessly refresh your wardrobe or turn your gently worn garments into cash. Join our community of fashion enthusiasts today!",
      "publisher": {
        "@type": "Organization",
        "name": "STOFFSPOT",
        "logo": {
          "@type": "ImageObject",
          "url": 'https://stoffspot.com/Assets/lOGO-02.png',
          "width": 200,
          "height": 50
        }
      }
      `
    }
  }
  return (

    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addJsonLd()}
          key="product-jsonld"
        />
      </Head>
      <Navbar />
      <div className="h-screen w-screen bg-no-repeat bg-cover bg-fixed grid justify-center items-center text-6xl CommingSoon">
        <div className='text-center flex flex-col items-center text-white'>
          <div className='h-30'><img src='./Assets/lOGO-02.png' alt='hello' className='w-96 h-max' /></div>
          <div className='font-bold'>COMING SOON</div>
        </div>
      </div>
    </>
  )
}
