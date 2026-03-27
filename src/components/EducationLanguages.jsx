import styles from './EducationLanguages.module.css'

export default function EducationLanguages({ education, languages }) {
  return (
    <section id="education" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <p className="section-label">Background</p>
            <h2 className="section-title">Education</h2>
            <div className="section-divider" />
            {education.map((e, i) => (
              <div key={i} className={styles.card}>
                <span className={styles.icon}>🎓</span>
                <div>
                  <p className={styles.degree}>{e.degree}</p>
                  <p className={styles.school}>{e.institution}</p>
                  <p className={styles.location}>{e.location}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <p className="section-label">Communication</p>
            <h2 className="section-title">Languages</h2>
            <div className="section-divider" />
            <div className={styles.langList}>
              {languages.map((l, i) => (
                <div key={i} className={styles.langCard}>
                  <div className={styles.langTop}>
                    <span className={styles.langName}>{l.language}</span>
                    <span className={styles.langLevel}>{l.level}</span>
                  </div>
                  {l.description && <p className={styles.langDesc}>{l.description}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
