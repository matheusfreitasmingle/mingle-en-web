export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <PositioningSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </main>
  )
}

function HeroSection() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', borderBottom: '1px solid #1E2D45', padding: '5rem 0' }}>
      <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', color: '#3D5470', fontWeight: 600, marginBottom: '2rem' }}>
          MINGLE <span style={{ color: '#4A9EFF' }}>EN</span>
        </p>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', maxWidth: '800px', marginBottom: '1.5rem', lineHeight: 1.15 }}>
          The English you know.
          <br />
          <span style={{ color: '#8BA0BB' }}>The reflexes you don't.</span>
        </h1>
        <p style={{ fontSize: '1.125rem', maxWidth: '520px', marginBottom: '2.5rem', color: '#8BA0BB' }}>
          Mingle EN trains the gap between advanced knowledge and natural communication. Speed. Pressure. Real patterns.
        </p>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <a href="https://app.mingle-en.com" style={{ backgroundColor: '#4A9EFF', color: '#070B14', padding: '0.75rem 1.75rem', borderRadius: '0.5rem', fontWeight: 700, fontSize: '0.9rem' }}>
            Start practicing
          </a>
          <a href="/blog" style={{ color: '#8BA0BB', fontSize: '0.9rem' }}>
            Read the blog
          </a>
        </div>
        <p style={{ marginTop: '3rem', fontSize: '0.8rem', color: '#3D5470', letterSpacing: '0.05em' }}>
          CPE · Cambridge · 150,000+ minutes interpreted
        </p>
      </div>
    </section>
  )
}

function PositioningSection() {
  return (
    <section style={{ padding: '5rem 0', borderBottom: '1px solid #1E2D45' }}>
      <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', color: '#3D5470', fontWeight: 600, marginBottom: '3rem' }}>
          THE PROBLEM
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          <div style={{ backgroundColor: '#0E1420', border: '1px solid #1E2D45', borderRadius: '0.75rem', padding: '2rem' }}>
            <p style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: '#3D5470', marginBottom: '1rem' }}>WHAT YOU HAVE</p>
            <h3 style={{ color: '#FFFFFF', marginBottom: '0.75rem', fontSize: '1.25rem' }}>C2 certificate. Elite vocabulary. Professional experience.</h3>
            <p style={{ color: '#8BA0BB', fontSize: '0.95rem' }}>You passed the exam. You interpret. You know the grammar.</p>
          </div>
          <div style={{ backgroundColor: '#0E1420', border: '1px solid #1E2D45', borderRadius: '0.75rem', padding: '2rem' }}>
            <p style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: '#3D5470', marginBottom: '1rem' }}>WHAT STILL HAPPENS</p>
            <h3 style={{ color: '#FFFFFF', marginBottom: '0.75rem', fontSize: '1.25rem' }}>You hesitate. You second-guess. The words don't come fast enough.</h3>
            <p style={{ color: '#8BA0BB', fontSize: '0.95rem' }}>In real environments, under real pressure, something is still off.</p>
          </div>
          <div style={{ backgroundColor: '#111827', border: '1px solid #1E3A5F', borderRadius: '0.75rem', padding: '2rem' }}>
            <p style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: '#4A9EFF', marginBottom: '1rem' }}>WHAT MINGLE EN BUILDS</p>
            <h3 style={{ color: '#FFFFFF', marginBottom: '0.75rem', fontSize: '1.25rem' }}>Reflexes. Automaticity. Natural recall under pressure.</h3>
            <p style={{ color: '#8BA0BB', fontSize: '0.95rem' }}>Not more knowledge. The ability to use what you already know — instantly.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function HowItWorksSection() {
  return (
    <section style={{ padding: '5rem 0', borderBottom: '1px solid #1E2D45' }}>
      <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', color: '#3D5470', fontWeight: 600, marginBottom: '1rem' }}>
          HOW IT WORKS
        </p>
        <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', maxWidth: '600px', marginBottom: '4rem' }}>
          Your engine tracks what fluency actually is.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
          <div style={{ backgroundColor: '#0E1420', border: '1px solid #1E2D45', borderRadius: '0.75rem', padding: '1.75rem' }}>
            <p style={{ fontSize: '2rem', fontWeight: 700, color: '#4A9EFF', marginBottom: '0.5rem' }}>01</p>
            <h4 style={{ color: '#FFFFFF', marginBottom: '0.5rem', fontSize: '1rem' }}>Accuracy</h4>
            <p style={{ color: '#8BA0BB', fontSize: '0.875rem' }}>Are you picking the natural pattern — not just the correct one.</p>
          </div>
          <div style={{ backgroundColor: '#0E1420', border: '1px solid #1E2D45', borderRadius: '0.75rem', padding: '1.75rem' }}>
            <p style={{ fontSize: '2rem', fontWeight: 700, color: '#4A9EFF', marginBottom: '0.5rem' }}>02</p>
            <h4 style={{ color: '#FFFFFF', marginBottom: '0.5rem', fontSize: '1rem' }}>Latency</h4>
            <p style={{ color: '#8BA0BB', fontSize: '0.875rem' }}>How fast you respond. Fluency is speed under pressure, not just knowledge.</p>
          </div>
          <div style={{ backgroundColor: '#0E1420', border: '1px solid #1E2D45', borderRadius: '0.75rem', padding: '1.75rem' }}>
            <p style={{ fontSize: '2rem', fontWeight: 700, color: '#4A9EFF', marginBottom: '0.5rem' }}>03</p>
            <h4 style={{ color: '#FFFFFF', marginBottom: '0.5rem', fontSize: '1rem' }}>Consistency</h4>
            <p style={{ color: '#8BA0BB', fontSize: '0.875rem' }}>One good session means nothing. The engine measures patterns over time.</p>
          </div>
          <div style={{ backgroundColor: '#0E1420', border: '1px solid #1E2D45', borderRadius: '0.75rem', padding: '1.75rem' }}>
            <p style={{ fontSize: '2rem', fontWeight: 700, color: '#4A9EFF', marginBottom: '0.5rem' }}>04</p>
            <h4 style={{ color: '#FFFFFF', marginBottom: '0.5rem', fontSize: '1rem' }}>Domains</h4>
            <p style={{ color: '#8BA0BB', fontSize: '0.875rem' }}>Medical. Legal. Counseling. Core. Your reflexes trained for real contexts.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section style={{ padding: '6rem 0', borderBottom: '1px solid #1E2D45' }}>
      <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', color: '#3D5470', fontWeight: 600, marginBottom: '1.5rem' }}>
          START TODAY
        </p>
        <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', maxWidth: '600px', margin: '0 auto 1.5rem' }}>
          Stop knowing English.<br />
          <span style={{ color: '#8BA0BB' }}>Start using it.</span>
        </h2>
        <p style={{ color: '#8BA0BB', maxWidth: '440px', margin: '0 auto 2.5rem', fontSize: '1rem' }}>
          The app is free to start. Your engine begins learning from your first session.
        </p>
        <a href="https://app.mingle-en.com" style={{ display: 'inline-block', backgroundColor: '#4A9EFF', color: '#070B14', padding: '0.875rem 2.5rem', borderRadius: '0.5rem', fontWeight: 700, fontSize: '1rem' }}>
          Start Practicing
        </a>
        <p style={{ marginTop: '1.5rem', fontSize: '0.8rem', color: '#3D5470' }}>
          iOS · Android · Web
        </p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer style={{ padding: '3rem 0', borderTop: '1px solid #1E2D45' }}>
      <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', fontWeight: 600, color: '#3D5470' }}>
          MINGLE <span style={{ color: '#4A9EFF' }}>EN</span>
        </span>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="/blog" style={{ fontSize: '0.8rem', color: '#3D5470' }}>Blog</a>
          <a href="/download" style={{ fontSize: '0.8rem', color: '#3D5470' }}>Download</a>
        </div>
        <p style={{ fontSize: '0.8rem', color: '#3D5470' }}>
          © 2025 Mingle EN
        </p>
      </div>
    </footer>
  )
}