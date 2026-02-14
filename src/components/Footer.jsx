import { motion } from 'framer-motion'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Philosophy quote */}
        <motion.div
          className={styles.philosophy}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className={styles.question}>"Won't this slow me down?"</p>
          <p className={styles.answer}>Yes. <span className={styles.accent}>That's the point.</span></p>
          <p className={styles.philosophyDetail}>
            Building with someone else's hands means you can't build the next one alone.
            Building yourself, with guidance, takes longer — but now you can build anything.
          </p>
        </motion.div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Main footer content */}
        <div className={styles.content}>
          <div className={styles.brand}>
            <h3 className={styles.logo}>
              <span className={styles.own}>Own</span>
              <span className={styles.yourCode}>YourCode</span>
            </h3>
            <p className={styles.tagline}>AI mentors, you build. You <span className={styles.accent}>own</span> the result.</p>
            <p className={styles.creator}>
              Created by <a href="https://github.com/DanielPodolsky" target="_blank" rel="noopener noreferrer" className={styles.creatorLink}>Daniel Podolsky</a>
            </p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Resources</h4>
              <a href="#quickstart" className={styles.link}>Quick Start</a>
              <a href="#how-it-works" className={styles.link}>How It Works</a>
              <a href="https://github.com/DanielPodolsky/ownyourcode#readme" className={styles.link} target="_blank" rel="noopener noreferrer">Documentation</a>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Project</h4>
              <a href="https://github.com/DanielPodolsky/ownyourcode" className={styles.link} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://github.com/DanielPodolsky/ownyourcode/blob/main/LICENSE" className={styles.link} target="_blank" rel="noopener noreferrer">MIT License</a>
              <a href="https://github.com/DanielPodolsky/ownyourcode/blob/main/CHANGELOG.md" className={styles.link} target="_blank" rel="noopener noreferrer">Changelog</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            Free & Open Source. Built for developers who believe in growth over shortcuts.
          </p>
          <div className={styles.version}>
            <span className={styles.versionBadge}>v2.3.0</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
