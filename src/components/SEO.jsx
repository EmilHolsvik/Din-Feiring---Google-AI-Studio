import { Helmet } from 'react-helmet-async'

export default function SEO({ 
  title, 
  description, 
  canonical, 
  ogTitle, 
  ogDescription, 
  ogImage, 
  ogType = 'website',
  noindex = false 
}) {
  const siteName = 'Din Feiring'
  const fullTitle = title ? `${title} | ${siteName}` : siteName
  const defaultDescription = 'Utleie av partytelt, bord, stoler og lydutstyr i Sandefjord. Finn riktig teltstørrelse med vår teltguide og få prisestimat for ditt arrangement.'
  const currentUrl = window.location.origin + window.location.pathname

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <link rel="canonical" href={canonical || currentUrl} />
      
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || description || defaultDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || fullTitle} />
      <meta name="twitter:description" content={ogDescription || description || defaultDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </Helmet>
  )
}
