import { Helmet } from 'react-helmet-async'
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_LOCALE,
  DEFAULT_OG_IMAGE,
  DEFAULT_SITE_NAME,
  DEFAULT_SITE_URL,
  normalizeLocale,
  resolveCurrentUrl,
  resolvePageUrl,
  resolveUrl,
  serializeJsonLd,
} from '../lib/seo'

export default function SEO({ 
  title, 
  description, 
  canonical, 
  ogTitle, 
  ogDescription, 
  ogImage, 
  ogImageAlt,
  ogType = 'website',
  noindex = false,
  jsonLd,
  siteName = DEFAULT_SITE_NAME,
  siteUrl = DEFAULT_SITE_URL,
  locale = DEFAULT_LOCALE,
  path,
  twitterCard = 'summary_large_image',
}) {
  const fullTitle = title ? `${title} | ${siteName}` : siteName
  const defaultDescription = DEFAULT_DESCRIPTION
  const baseUrl = resolveUrl(siteUrl, DEFAULT_SITE_URL) || DEFAULT_SITE_URL
  const currentUrl = resolveCurrentUrl({ siteUrl: baseUrl, path })
  const canonicalUrl = resolvePageUrl(canonical || path || currentUrl, baseUrl) || currentUrl
  const resolvedLocale = normalizeLocale(locale)
  const resolvedOgImage = resolveUrl(ogImage || DEFAULT_OG_IMAGE, baseUrl) || ''
  const resolvedOgImageAlt = ogImageAlt || fullTitle
  const jsonLdPayloads = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : []

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <link rel="canonical" href={canonicalUrl} />
      
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'} />

      {/* Open Graph */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || description || defaultDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content={resolvedLocale} />
      {resolvedOgImage ? <meta property="og:image" content={resolvedOgImage} /> : null}
      {resolvedOgImage ? <meta property="og:image:alt" content={resolvedOgImageAlt} /> : null}

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={ogTitle || fullTitle} />
      <meta name="twitter:description" content={ogDescription || description || defaultDescription} />
      {resolvedOgImage ? <meta name="twitter:image" content={resolvedOgImage} /> : null}
      {resolvedOgImage ? <meta name="twitter:image:alt" content={resolvedOgImageAlt} /> : null}

      {jsonLdPayloads.map((entry, index) => {
        const content = serializeJsonLd(entry, baseUrl)
        if (!content) {
          return null
        }

        return (
          <script key={`json-ld-${index}`} type="application/ld+json">
            {content}
          </script>
        )
      })}
    </Helmet>
  )
}
