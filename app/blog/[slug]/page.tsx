import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} — Mingle EN`,
    description: post.description,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  return (
    <main style={{ padding: '5rem 0' }}>
      <div style={{ width: '100%', maxWidth: '720px', margin: '0 auto', padding: '0 1.5rem' }}>

        <a href="/blog" style={{ fontSize: '0.8rem', color: '#3D5470', display: 'block', marginBottom: '3rem' }}>
          Back to blog
        </a>

        <p style={{ fontSize: '0.75rem', color: '#3D5470', marginBottom: '1rem', letterSpacing: '0.05em' }}>
          {post.date}
        </p>

        <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', marginBottom: '1rem', lineHeight: 1.2 }}>
          {post.title}
        </h1>

        <p style={{ color: '#8BA0BB', fontSize: '1.1rem', marginBottom: '3rem', borderBottom: '1px solid #1E2D45', paddingBottom: '2rem' }}>
          {post.description}
        </p>

        <div style={{ color: '#8BA0BB', lineHeight: 1.8, fontSize: '1.05rem' }}>
          <MDXRemote
            source={post.content}
            components={{
              h2: (props) => <h2 style={{ color: '#FFFFFF', fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem' }} {...props} />,
              h3: (props) => <h3 style={{ color: '#FFFFFF', fontSize: '1.2rem', fontWeight: 700, marginTop: '2rem', marginBottom: '0.75rem' }} {...props} />,
              p: (props) => <p style={{ color: '#8BA0BB', lineHeight: 1.8, marginBottom: '1.25rem' }} {...props} />,
              strong: (props) => <strong style={{ color: '#FFFFFF', fontWeight: 700 }} {...props} />,
              ul: (props) => <ul style={{ color: '#8BA0BB', paddingLeft: '1.5rem', marginBottom: '1.25rem' }} {...props} />,
              li: (props) => <li style={{ marginBottom: '0.5rem' }} {...props} />,
            }}
          />
        </div>

      </div>
    </main>
  )
}