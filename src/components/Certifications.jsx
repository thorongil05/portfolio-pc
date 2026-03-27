import styles from './Certifications.module.css'

export default function Certifications({ certifications }) {
  return (
    <section id="certifications" className={styles.section}>
      <div className="container">
        <p className="section-label">Qualifications</p>
        <h2 className="section-title">Certifications</h2>
        <div className="section-divider" />
        <div className={styles.grid}>
          {certifications.map((cert, i) => (
            <div key={i} className={`${styles.card} ${cert.status === 'in_progress' ? styles.inProgress : ''}`}>
              <div className={styles.top}>
                <span className={styles.name}>{cert.name}</span>
                {cert.status === 'in_progress' && (
                  <span className={styles.badge}>In Progress</span>
                )}
              </div>
              {cert.standard && <p className={styles.detail}>{cert.standard}</p>}
              {cert.issuer && <p className={styles.detail}>{cert.issuer}</p>}
              {cert.notes && <p className={styles.notes}>{cert.notes}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
