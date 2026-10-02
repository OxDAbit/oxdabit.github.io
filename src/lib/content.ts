import { getCollection } from 'astro:content';
import { CATEGORIES, type Category } from '../content.config';

export async function getPosts() {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getProjects() {
  const projects = await getCollection('projects', ({ data }) => !data.draft);
  return projects.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getCategoryCounts() {
  const posts = await getPosts();
  return Object.fromEntries(
    CATEGORIES.map((c) => [c, posts.filter((p) => p.data.category === c).length])
  ) as Record<Category, number>;
}
