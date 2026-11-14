export type GitHubProject = {
	name: string;
	url: string;
	description: string | null;
	language: string | null;
	updatedAt: string;
};

type GitHubProjectsResult =
	| { ok: true; projects: GitHubProject[] }
	| { ok: false };

const excludedNames = new Set(['codelec.web', 'codeleccz.github.io']);

export async function fetchGitHubProjects(fetcher: typeof fetch = fetch): Promise<GitHubProjectsResult> {
	try {
		const projects: GitHubProject[] = [];
		const perPage = 100;
		for (let page = 1; ; page++) {
			const response = await fetcher(
				`https://api.github.com/users/CodElecCz/repos?per_page=${perPage}&sort=updated&page=${page}`,
				{
					headers: { 'User-Agent': 'CodElec-Web', Accept: 'application/vnd.github+json' },
					signal: AbortSignal.timeout(10000),
				},
			);
			if (!response.ok) throw new Error(`GitHub API returned HTTP ${response.status}`);
			const payload: unknown = await response.json();
			if (!Array.isArray(payload)) throw new Error('GitHub API returned an invalid repository list');
			const repos: unknown[] = payload;

			for (const repo of repos) {
				if (
					typeof repo !== 'object' || repo === null ||
					!('name' in repo) || typeof repo.name !== 'string' ||
					!('fork' in repo) || typeof repo.fork !== 'boolean'
				) {
					throw new Error('GitHub API returned an invalid repository');
				}
				if (repo.fork || excludedNames.has(repo.name.toLowerCase())) continue;
				if (
					!('html_url' in repo) || typeof repo.html_url !== 'string' ||
					!URL.canParse(repo.html_url) ||
					!('description' in repo) ||
					(repo.description !== null && typeof repo.description !== 'string') ||
					!('language' in repo) ||
					(repo.language !== null && typeof repo.language !== 'string') ||
					!('updated_at' in repo) || typeof repo.updated_at !== 'string' ||
					!Number.isFinite(Date.parse(repo.updated_at))
				) {
					throw new Error(`GitHub API returned invalid details for ${repo.name}`);
				}
				const url = new URL(repo.html_url);
				if (url.origin !== 'https://github.com' || url.pathname.toLowerCase() !== `/codeleccz/${repo.name.toLowerCase()}` || url.search || url.hash) {
					throw new Error(`GitHub API returned an invalid URL for ${repo.name}`);
				}
				projects.push({
					name: repo.name,
					url: repo.html_url,
					description: repo.description,
					language: repo.language,
					updatedAt: repo.updated_at,
				});
			}
			if (repos.length < perPage) break;
		}
		return { ok: true, projects };
	} catch (error) {
		console.error('[GitHub projects] Unable to load repositories:', error);
		return { ok: false };
	}
}

let projectsPromise: Promise<GitHubProjectsResult> | undefined;

export function getGitHubProjects(): Promise<GitHubProjectsResult> {
	projectsPromise ??= fetchGitHubProjects();
	return projectsPromise;
}
