import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_TITLE } from '../../consts';

const DESCRIPTION_DE =
	'Ein persönlicher Blog über Technologie, Softwareentwicklung, Gesundheit und das Leben mit chronischer Krankheit.';

export async function GET(context) {
	const posts = await getCollection('blogDe');
	return rss({
		title: SITE_TITLE,
		description: DESCRIPTION_DE,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/de/blog/${post.id}/`,
		})),
	});
}
