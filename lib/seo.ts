import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
}

export function generateSEO({
  title,
  description,
  keywords,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  canonical,
}: SEOProps): Metadata {
  const siteUrl = 'https://ithub.de';
  const canonicalUrl = canonical || siteUrl;

  return {
    title,
    description,
    keywords: keywords || '',
    authors: [{ name: 'ITHub GmbH' }],
    creator: 'ITHub GmbH',
    publisher: 'ITHub GmbH',
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'ITHub GmbH',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'de_DE',
      type: ogType as any,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
    },
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ITHub GmbH',
    url: 'https://ithub.de',
    logo: 'https://ithub.de/logo.png',
    description: 'IT Dienstleister in Ulm für Netzwerke, Cloud, Security & Managed Services',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Musterstraße 1',
      addressLocality: 'Ulm',
      postalCode: '89073',
      addressCountry: 'DE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+49-731-123456',
      contactType: 'customer service',
      areaServed: ['DE', 'CH', 'AT'],
      availableLanguage: ['de', 'en'],
    },
    sameAs: [
      'https://linkedin.com/company/certified-it',
      'https://twitter.com/certified_it',
    ],
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'certified IT GmbH',
    image: 'https://certified-it.de/office.jpg',
    '@id': 'https://certified-it.de',
    url: 'https://certified-it.de',
    telephone: '+49-731-123456',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Musterstraße 1',
      addressLocality: 'Ulm',
      postalCode: '89073',
      addressCountry: 'DE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.4011,
      longitude: 9.9876,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
  };
}
