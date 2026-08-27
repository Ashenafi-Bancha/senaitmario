/**
 * Person JSON-LD, populated ONLY from client-confirmed facts in content/.
 * `alumniOf` is deliberately omitted: no institution name has been confirmed
 * (the doctorate is honorary and the master's institution was not supplied).
 * Do not add fields speculatively — this is structured data about a real
 * person and search engines will republish it.
 */
export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dr. Senait Mario',
    honorificPrefix: 'Dr.',
    jobTitle: [
      'International fashion designer',
      'Model',
      'Sociologist',
      'UN Peace Ambassador',
    ],
    nationality: [
      { '@type': 'Country', name: 'Italy' },
      { '@type': 'Country', name: 'Ethiopia' },
    ],
    birthPlace: {
      '@type': 'Place',
      name: 'Wolaita Sodo, Ethiopia',
    },
    homeLocation: {
      '@type': 'Place',
      name: 'Rome, Italy',
    },
    award: [
      // ⚠ Structured data is republished by search engines and is far harder
      // to retract than page copy. None of these three is independently
      // verifiable online — all trace to her own account in one 2019 article
      // (see the detailed notes in content/recognition.ts). Obtain the
      // certificates and name the conferring bodies BEFORE launch; if a
      // recognition cannot be documented, remove it from this array rather
      // than shipping it as machine-readable fact.
      'Top 40 Women of Africa, MICE award, Ghana (2016)',
      'UN Peace Ambassador (2017)',
      'Honorary doctorate for work promoting African culture, Nigeria (2019)',
    ],
    worksFor: {
      '@type': 'Organization',
      name: "Da Mario's Fashion and Technology Institute",
      foundingDate: '2024',
      location: {
        '@type': 'Place',
        name: 'Bole Sub City, Addis Ababa, Ethiopia',
      },
    },
  };
}
