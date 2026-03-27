import styles from './Experience.module.css'

function formatPeriod({ from, to }) {
  const fmt = (d) => {
    const [y, m] = d.split('-')
    return new Date(y, m - 1).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })
  }
  return `${fmt(from)} – ${to ? fmt(to) : 'Present'}`
}

export default function Experience({ experience }) {
  return (
    <section id="experience" className={styles.section}>
      <div className="container">
        <p className="section-label">Career</p>
        <h2 className="section-title">Sea Service</h2>
        <div className="section-divider" />
        <div className={styles.timeline}>
          {experience.map((job, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.dot} />
              <div className={styles.body}>
                <div className={styles.meta}>
                  <span className={styles.period}>{formatPeriod(job.period)}</span>
                  <span className={styles.type}>{job.vessel_type}</span>
                </div>
                <h3 className={styles.role}>{job.role}</h3>
                <p className={styles.company}>{job.company} · {job.location}</p>
                {job.vessels.length > 0 && (
                  <p className={styles.vessels}>
                    Vessels: <strong>{job.vessels.join(', ')}</strong>
                  </p>
                )}
                <ul className={styles.duties}>
                  {job.duties.map((d, j) => <li key={j}>{d}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
