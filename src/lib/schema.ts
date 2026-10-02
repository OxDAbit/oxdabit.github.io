// Datos estructurados (Schema.org / JSON-LD) compartidos entre páginas.
import { SITE, SOCIAL } from './site';

const abs = (path: string) => new URL(path, SITE.url).toString();

export const PERSON = {
  '@type': 'Person',
  '@id': abs('/#person'),
  name: SITE.author,
  url: SITE.url,
  image: abs('/brand/isotipo.svg'),
  sameAs: SOCIAL.map((s) => s.href),
};

export const WEBSITE = {
  '@type': 'WebSite',
  '@id': abs('/#website'),
  url: SITE.url,
  name: SITE.title,
  description: SITE.description,
  inLanguage: SITE.locale,
  publisher: { '@id': PERSON['@id'] },
};

export function homeSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      WEBSITE,
      PERSON,
      {
        '@type': 'Blog',
        '@id': abs('/blog#blog'),
        url: abs('/blog'),
        name: SITE.title,
        description: SITE.description,
        inLanguage: SITE.locale,
        author: { '@id': PERSON['@id'] },
        isPartOf: { '@id': WEBSITE['@id'] },
      },
    ],
  };
}

interface ArticleInput {
  path: string;
  title: string;
  description: string;
  image: string;
  pubDate: Date;
  updatedDate?: Date;
  tags?: string[];
  section?: string;
}

export function articleSchema(a: ArticleInput) {
  const url = abs(a.path);
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    url,
    mainEntityOfPage: url,
    headline: a.title,
    description: a.description,
    image: abs(a.image),
    datePublished: a.pubDate.toISOString(),
    dateModified: (a.updatedDate ?? a.pubDate).toISOString(),
    inLanguage: SITE.locale,
    ...(a.section && { articleSection: a.section }),
    ...(a.tags?.length && { keywords: a.tags.join(', ') }),
    author: PERSON,
    publisher: PERSON,
    isPartOf: WEBSITE,
  };
}
