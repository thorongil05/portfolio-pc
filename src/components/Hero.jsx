import styles from './Hero.module.css'

export default function Hero({ personal }) {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Maritime Officer</p>
          <h1 className={styles.name}>{personal.name}</h1>
          <p className={styles.title}>{personal.tagline}</p>
          <div className={styles.meta}>
            <span>
              <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              {personal.location}
            </span>
            <span>
              <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
              {personal.nationality}
            </span>
          </div>
          <div className={styles.cta}>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className={styles.btnPrimary}>Get in touch</a>
            <a href="#experience" className={styles.btnOutline}>View experience</a>
          </div>
        </div>
        <div className={styles.photo}>
          <img src="./photo.jpeg" alt={personal.name} />
        </div>
      </div>
    </section>
  )
}
