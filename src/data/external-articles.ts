import fallbackManifest from './external-articles.json';

export type LocaleCode = 'cs' | 'en';

export type ExternalArticleMeta = {
  title: string;
  description: string;
  date: string;
  tags: string[];
};

export type ExternalArticle = {
  slug: string;
  repo: string;
  branch: string;
  defaultLocale: LocaleCode;
  sourceFiles: Record<LocaleCode, string>;
  locales: Record<LocaleCode, ExternalArticleMeta>;
  content?: Partial<Record<LocaleCode, string>>;
};

let generatedManifest: { articles?: ExternalArticle[] } | undefined;
try {
  const generatedModule = await import('./external-articles.generated.json');
  generatedManifest = generatedModule.default ?? generatedModule;
} catch {
  generatedManifest = undefined;
}

const articles = ((generatedManifest?.articles?.length ? generatedManifest.articles : fallbackManifest.articles) ?? []) as ExternalArticle[];

export function getExternalArticlesForLocale(locale: LocaleCode): Array<ExternalArticle & { locale: ExternalArticleMeta }> {
  return articles
    .filter((article) => Boolean(article.locales[locale] ?? article.locales[article.defaultLocale]))
    .map((article) => {
      const localeEntry = article.locales[locale] ?? article.locales[article.defaultLocale];
      return {
        ...article,
        locale: localeEntry,
      };
    });
}

export function getExternalArticleBySlug(slug: string, locale: LocaleCode): (ExternalArticle & { locale: ExternalArticleMeta; content: string }) | null {
  const article = articles.find((candidate) => candidate.slug === slug);
  if (!article) return null;

  const localeEntry = article.locales[locale] ?? article.locales[article.defaultLocale];
  if (!localeEntry) return null;

  const content = (article.content?.[locale] ?? article.content?.[article.defaultLocale] ?? '').trim();

  return {
    ...article,
    locale: localeEntry,
    content,
  };
}
