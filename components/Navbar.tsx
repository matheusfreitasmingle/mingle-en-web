export default function Navbar() {
  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, borderBottom: '1px solid #1E2D45', backgroundColor: '#070B14' }}>
      <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        <a href="/" style={{ fontSize: '0.75rem', letterSpacing: '0.15em', fontWeight: 600, color: '#8BA0BB' }}>
  MINGLE <span style={{ color: '#5AAFFF' }}>EN</span>
</a>

        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="/blog" style={{ fontSize: '0.85rem', color: '#8BA0BB' }}>Blog</a>
          <a href="/download" style={{ fontSize: '0.85rem', color: '#8BA0BB' }}>Download</a>
          <a href="https://app.mingle-en.com" className="navbar-app-button" style={{ fontSize: '0.85rem', color: '#070B14', backgroundColor: '#5AAFFF', borderRadius: '0.375rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
  <span className="navbar-app-button-icon">↗</span>
  <span className="navbar-app-button-text" style={{ padding: '0.4rem 1rem' }}>Open app</span>
</a>
        </div>

      </div>
    </nav>
  )
}