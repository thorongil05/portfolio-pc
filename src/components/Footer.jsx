import styles from './Footer.module.css'

export default function Footer({ personal }) {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.name}>{personal.name}</p>
        <p className={styles.title}>{personal.title}</p>
        <a href={personal.linkedin} target="_blank" rel="noreferrer" className={styles.link}>
          <svg viewBox="0 0 24 24"><path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57A1.46 1.46 0 0 1 14.38 12.11A1.46 1.46 0 0 1 15.84 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"/></svg>
          Connect on LinkedIn
        </a>
        <p className={styles.copy}>© {new Date().getFullYear()} {personal.name}</p>
      </div>
    </footer>
  )
}
