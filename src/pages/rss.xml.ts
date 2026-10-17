import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts } from '../lib/posts';

export async function GET(context: APIContext) {
  const posts = await getPosts();

  return rss({
    title: 'Carlos Ferreras',
    description:
      'Notas sobre lo que construyo: OpinaCraft, Cubusfera y lo que aprendo por el camino.',
    site: context.site!,
    trailingSlash: true,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedAt,
      link: `/blog/${post.id}/`,
    })),
    customData: '<language>es-ES</language>',
  });
}
