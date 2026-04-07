const DEFAULT_SITE_NAME = 'Din Feiring'
const DEFAULT_SITE_URL = 'https://dinfeiring.no'
const DEFAULT_OG_IMAGE = '/logo.png'
const DEFAULT_DESCRIPTION =
  'Utleie av partytelt, bord, stoler og lydutstyr i Sandefjord. Finn riktig teltstørrelse med vår teltguide og få prisestimat for ditt arrangement.'
const DEFAULT_LOCALE = 'nb_NO'

const URL_LIKE_KEYS = new Set([
  'url',
  '@id',
  'contentUrl',
  'embedUrl',
  'thumbnailUrl',
  'image',
  'logo',
  'sameAs',
  'mainEntityOfPage',
  'canonical',
])

function hasWindowLocation() {
  return typeof window !== 'undefined' && Boolean(window.location)
}

function normalizeLocale(locale) {
  const value = String(locale || DEFAULT_LOCALE).trim()
  return value.replace('-', '_')
}

function normalizeAbsoluteUrl(value, baseUrl = DEFAULT_SITE_URL) {
  if (!value || typeof value !== 'string') {
    return ''
  }

  const trimmed = value.trim()
  if (!trimmed) {
    return ''
  }

  try {
    return new URL(trimmed, baseUrl || DEFAULT_SITE_URL).toString()
  } catch {
    return trimmed
  }
}

function normalizePageUrl(value, baseUrl = DEFAULT_SITE_URL) {
  const normalized = normalizeAbsoluteUrl(value, baseUrl)

  if (!normalized) {
    return ''
  }

  try {
    const url = new URL(normalized)
    url.search = ''
    url.hash = ''
    return url.toString()
  } catch {
    return normalized.split('#')[0].split('?')[0]
  }
}

function getBaseUrl(siteUrl) {
  return normalizeAbsoluteUrl(siteUrl, DEFAULT_SITE_URL) || DEFAULT_SITE_URL
}

function resolveCurrentUrl({ siteUrl = DEFAULT_SITE_URL, path } = {}) {
  const baseUrl = getBaseUrl(siteUrl)

  if (path) {
    return normalizePageUrl(path, baseUrl) || baseUrl
  }

  if (hasWindowLocation()) {
    const { pathname } = window.location
    return normalizePageUrl(pathname, baseUrl) || baseUrl
  }

  return baseUrl
}

function resolveUrl(value, baseUrl = DEFAULT_SITE_URL) {
  return normalizeAbsoluteUrl(value, baseUrl)
}

function resolvePageUrl(value, baseUrl = DEFAULT_SITE_URL) {
  return normalizePageUrl(value, baseUrl)
}

function normalizeJsonLdValue(value, baseUrl, key) {
  if (Array.isArray(value)) {
    return value.map((item) => normalizeJsonLdValue(item, baseUrl, key))
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, entryValue]) => {
        if (URL_LIKE_KEYS.has(key)) {
          return [key, normalizeJsonLdValue(entryValue, baseUrl, key)]
        }

        return [key, normalizeJsonLdValue(entryValue, baseUrl, key)]
      })
    )
  }

  if (typeof value === 'string' && URL_LIKE_KEYS.has(key)) {
    return normalizeAbsoluteUrl(value, baseUrl)
  }

  return value
}

function normalizeJsonLd(jsonLd, baseUrl) {
  if (!jsonLd) {
    return null
  }

  if (typeof jsonLd === 'string') {
    return jsonLd.trim()
  }

  return normalizeJsonLdValue(jsonLd, baseUrl)
}

function serializeJsonLd(jsonLd, baseUrl = DEFAULT_SITE_URL) {
  const normalized = normalizeJsonLd(jsonLd, baseUrl)

  if (!normalized) {
    return ''
  }

  if (typeof normalized === 'string') {
    return normalized.replace(/</g, '\\u003c').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029')
  }

  return JSON.stringify(normalized)
    .replace(/</g, '\\u003c')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

export {
  DEFAULT_DESCRIPTION,
  DEFAULT_LOCALE,
  DEFAULT_OG_IMAGE,
  DEFAULT_SITE_NAME,
  DEFAULT_SITE_URL,
  getBaseUrl,
  normalizeAbsoluteUrl,
  normalizeLocale,
  normalizePageUrl,
  resolveCurrentUrl,
  resolvePageUrl,
  resolveUrl,
  serializeJsonLd,
}
