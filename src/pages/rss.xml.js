import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';
import { getExternalArticlesForLocale } from '../data/external-articles';

export async function GET(context) {
	const posts = await getCollection('blog');
	const basePath = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
	const items = [
		...posts.map((post) => ({
			...post.data,
			link: `${basePath}blog/${post.id}/`,
		})),
		...getExternalArticlesForLocale('cs').map((article) => ({
			title: article.locale.title,
			description: article.locale.description,
			pubDate: new Date(article.locale.date),
			link: `${basePath}blog/${article.slug}/`,
		})),
	].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items,
	});
}
