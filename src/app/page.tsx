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
      "description": "StoffSpot is a top online marketplace for buying and selling high-quality clothing, offering a diverse range of options to refresh your wardrobe or turn gently worn garments into cash.",
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
      <meta name="google-site-verification" content="9V1wd7g77Y9gGLlgJlia3CCJ2qI8DOFholXrXgB6Ilw" />
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
          <h1 className='hidden'> STOFFSPOT , FASHION SITE</h1>
          <h2 className='hidden'>
            Clothes, Recycling, Vendor, B2B, Mens Wear, Clothing, Fashion, Womens, Feminism, Twitter, facebook,instagram 
          </h2>
        </div>
      </div>
    </>
  )
}
