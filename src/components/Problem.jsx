import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './Problem.module.css'

export default function Problem() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>The Problem</span>
          <h2 className={styles.title}>
            AI tools optimize for <span className={styles.strike}>shipping</span>, not <span className={styles.accent}>learning</span>
          </h2>
        </motion.div>

        <div className={styles.comparison}>
          {/* The Dependency Cycle */}
          <motion.div
            className={styles.card}
            data-type="problem"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.cardHeader}>
              <span className={styles.cardIcon}>⚠</span>
              <h3 className={styles.cardTitle}>The Dependency Cycle</h3>
            </div>
            <ul className={styles.cardList}>
              <li>
                <span className={styles.bullet}>→</span>
                AI generates complete solutions
              </li>
              <li>
                <span className={styles.bullet}>→</span>
                You copy-paste without understanding
              </li>
              <li>
                <span className={styles.bullet}>→</span>
                Bugs appear, you ask AI to fix
              </li>
              <li>
                <span className={styles.bullet}>→</span>
                Skills never develop
              </li>
              <li>
                <span className={styles.bullet}>→</span>
                Dependency deepens
              </li>
            </ul>
            <div className={styles.verdict}>
              <span className={styles.verdictIcon}>✗</span>
              Fast shipping, slow growth
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div
            className={styles.divider}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <span>vs</span>
          </motion.div>

          {/* The Ownership Path */}
          <motion.div
            className={styles.card}
            data-type="solution"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className={styles.cardHeader}>
              <span className={styles.cardIcon}>✦</span>
              <h3 className={styles.cardTitle}>The Ownership Path</h3>
            </div>
            <ul className={styles.cardList}>
              <li>
                <span className={styles.bullet}>→</span>
                AI mentors, never writes for you
              </li>
              <li>
                <span className={styles.bullet}>→</span>
                You implement with strategic hints
              </li>
              <li>
                <span className={styles.bullet}>→</span>
                Bugs teach you debugging skills
              </li>
              <li>
                <span className={styles.bullet}>→</span>
                Patterns become intuition
              </li>
              <li>
                <span className={styles.bullet}>→</span>
                Independence compounds
              </li>
            </ul>
            <div className={styles.verdict} data-type="positive">
              <span className={styles.verdictIcon}>✓</span>
              Slower start, exponential growth
            </div>
          </motion.div>
        </div>

        <motion.p
          className={styles.conclusion}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Every line you don't write is a skill you don't build.
        </motion.p>
      </div>
    </section>
  )
}
