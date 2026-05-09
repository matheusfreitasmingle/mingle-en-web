import { getAllPosts } from '@/lib/posts'

export default function sitemap() {
  const posts = getAllPosts()

  const blogPosts = posts.map((post) => ({
    url: `https://mingle-en.com/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: 'https://mingle-en.com',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: 'https://mingle-en.com/blog',
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: 'https://mingle-en.com/download',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    ...blogPosts,
  ]
}