import styles from './About.module.css'

export default function About({ profile }) {
  const paragraphs = profile.split(/\n+/).filter(Boolean)

  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <p className="section-label">Profile</p>
        <h2 className="section-title" style={{ color: 'var(--light-text)' }}>Professional Profile</h2>
        <div className="section-divider" />
        <div className={styles.text}>
          {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </div>
    </section>
  )
}
