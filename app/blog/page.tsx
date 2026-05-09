import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export const metadata = {
  title: 'Blog — Mingle EN',
  description: 'Real English. Real environments. Real patterns.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main style={{ padding: '5rem 0' }}>
      <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>

        <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', color: '#3D5470', fontWeight: 600, marginBottom: '1rem' }}>
          MINGLE <span style={{ color: '#4A9EFF' }}>EN</span>
        </p>

        <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', marginBottom: '1rem' }}>
          The Blog
        </h1>

        <p style={{ color: '#8BA0BB', marginBottom: '4rem', maxWidth: '520px' }}>
          Real environments. Natural patterns. The English nobody teaches you in a classroom.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
              <div style={{ backgroundColor: '#0E1420', border: '1px solid #1E2D45', borderRadius: '0.75rem', padding: '2rem', cursor: 'pointer' }}>
                <p style={{ fontSize: '0.75rem', color: '#3D5470', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
                  {post.date}
                </p>
                <h2 style={{ color: '#FFFFFF', fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: 700 }}>
                  {post.title}
                </h2>
                <p style={{ color: '#8BA0BB', fontSize: '0.95rem' }}>
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  )
}