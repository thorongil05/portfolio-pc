import styles from './Competencies.module.css'

const icons = {
  'Bridge Watchkeeping and Safe Navigation': '🧭',
  'Voyage Planning and Passage Monitoring': '🗺️',
  'ECDIS, Radar, ARPA and GMDSS Operations': '📡',
  'Bridge Resource Management': '👥',
  'Safety Management and Emergency Preparedness': '🛟',
  'ISM Code and ISPS Code Compliance': '📋',
  'Cargo, Ballast and Stability Operations': '⚓',
  'Mooring, Anchoring and Deck Operations': '🔗',
  'Passenger Vessel Operational Awareness': '🚢',
  'Multicultural Teamwork and Professional Communication': '🌐',
}

export default function Competencies({ competencies }) {
  return (
    <section id="competencies" className={styles.section}>
      <div className="container">
        <p className="section-label">Skills</p>
        <h2 className="section-title">Core Competencies</h2>
        <div className="section-divider" />
        <div className={styles.grid}>
          {competencies.map((c) => (
            <div key={c} className={styles.card}>
              <span className={styles.icon}>{icons[c] ?? '⚓'}</span>
              <span>{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
