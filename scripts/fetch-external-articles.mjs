import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const manifestPath = path.join(projectRoot, 'src/data/external-articles.json');
const generatedPath = path.join(projectRoot, 'src/data/external-articles.generated.json');

const githubHeaders = {
  'User-Agent': 'CodElec-Web',
  Accept: 'application/vnd.github+json',
};

if (process.env.GITHUB_TOKEN) {
  githubHeaders.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
}

export function stripFrontmatter(markdown) {
  return markdown ? markdown.replace(/^\uFEFF?---\r?\n[\s\S]*?\r?\n---\r?\n?/, '') : markdown;
}

export function rewriteRelativeGithubImages(markdown, { repo, branch = 'main', rootPath = 'blog' } = {}) {
  if (!markdown || !repo) return markdown;

  const baseUrl = new URL(`https://raw.githubusercontent.com/${repo}/${branch}/${rootPath.replace(/^\/+/, '')}/`);

  const rewriteMatch = (match, relativePath) => {
    if (!relativePath || /^(?:[a-z]+:|\/\/|#)/i.test(relativePath)) {
      return match;
    }
    const absoluteUrl = new URL(relativePath.replace(/\\/g, '/'), baseUrl).toString();
    return match.replace(relativePath, absoluteUrl);
  };

  let rewritten = markdown.replace(/!\[[^\]]*\]\((\.\.?\/[^)]+)\)/g, (match, relativePath) => rewriteMatch(match, relativePath));
  rewritten = rewritten.replace(/<img[^>]*\s(?:src|data-src)=(["'])(\.\.?\/[^"']+)\1[^>]*>/gi, (match, quote, relativePath) => rewriteMatch(match, relativePath));
  return rewritten;
}

async function fetchRemoteText(url) {
  try {
    const response = await fetch(url, { headers: githubHeaders });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} for ${url}`);
    }
    return await response.text();
  } catch (error) {
    return null;
  }
}

async function fetchRepositoryMarkdown(repo, branch, sourceFile) {
  const normalizedPath = sourceFile.replace(/\\/g, '/').replace(/^\//, '');
  const candidates = [
    `https://raw.githubusercontent.com/${repo}/${branch}/${normalizedPath}`,
    `https://api.github.com/repos/${repo}/contents/${encodeURIComponent(normalizedPath)}?ref=${encodeURIComponent(branch)}`,
  ];

  for (const url of candidates) {
    const text = await fetchRemoteText(url);
    if (text) {
      if (url.startsWith('https://api.github.com/')) {
        try {
          const payload = JSON.parse(text);
          if (payload && typeof payload.content === 'string') {
            return Buffer.from(payload.content, 'base64').toString('utf8');
          }
        } catch {
          return text;
        }
      }
      return text;
    }
  }

  return null;
}

async function main() {
  let manifest;
  try {
    manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8'));
  } catch (error) {
    console.warn('[external-articles] Manifest not found, using empty dataset.');
    manifest = { articles: [] };
  }

  const articles = await Promise.all((manifest.articles ?? []).map(async (article) => {
    const contentEntries = {};

    for (const [locale, sourceFile] of Object.entries(article.sourceFiles ?? {})) {
      const text = await fetchRepositoryMarkdown(article.repo, article.branch || 'master', sourceFile);
      contentEntries[locale] = text ? rewriteRelativeGithubImages(stripFrontmatter(text), {
        repo: article.repo,
        branch: article.branch || 'master',
        rootPath: path.dirname(sourceFile).replace(/\\/g, '/'),
      }) : (article.content?.[locale] ?? '');
    }

    return {
      ...article,
      content: {
        ...(article.content ?? {}),
        ...contentEntries,
      },
    };
  }));

  const output = JSON.stringify({ articles }, null, 2) + '\n';
  await fs.writeFile(generatedPath, output, 'utf8');
  console.log(`[external-articles] Wrote ${articles.length} article entries to ${path.relative(projectRoot, generatedPath)}.`);
}

await main();
