import { motion } from 'framer-motion'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Gradient mesh background */}
      <div className={styles.gradientMesh} />

      {/* Animated grid lines */}
      <div className={styles.gridLines}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className={styles.gridLine} style={{ left: `${i * 5}%` }} />
        ))}
      </div>

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Logo */}
          <motion.h1
            className={styles.logo}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className={styles.own}>Own</span>
            <span className={styles.yourCode}>YourCode</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className={styles.tagline}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            AI-Mentored Development for Juniors
          </motion.p>

          {/* Slogan */}
          <motion.p
            className={styles.slogan}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Less dependency, more <span className={styles.accent}>ownership.</span>
          </motion.p>

          {/* Description */}
          <motion.p
            className={styles.description}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Stop accepting AI code you don't fully understand. OwnYourCode guides you
            through implementation with strategic hints, not solutions.
            You write every line. You own every decision.
          </motion.p>

          {/* CTA */}
          <motion.div
            className={styles.cta}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <a href="#quickstart" className={styles.btnPrimary}>
              <span className={styles.btnIcon}>→</span>
              Get Started
            </a>
            <a href="#how-it-works" className={styles.btnGhost}>
              How It Works
            </a>
          </motion.div>
        </motion.div>

        {/* Decorative terminal preview */}
        <motion.div
          className={styles.terminalPreview}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className={styles.terminalHeader}>
            <span className={styles.dot} data-color="red" />
            <span className={styles.dot} data-color="yellow" />
            <span className={styles.dot} data-color="green" />
            <span className={styles.terminalTitle}>~/project</span>
          </div>
          <div className={styles.terminalBody}>
            <div className={styles.line}>
              <span className={styles.prompt}>&gt;</span>
              <span className={styles.command}>/own:init</span>
            </div>
            <div className={styles.line}>
              <span className={styles.output}>
                <span className={styles.accent}>✓</span> OwnYourCode initialized
              </span>
            </div>
            <div className={styles.line}>
              <span className={styles.output}>
                <span className={styles.accent}>→</span> Run /own:feature to start planning
              </span>
            </div>
            <div className={styles.cursor} />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span>Scroll to explore</span>
        <motion.div
          className={styles.scrollArrow}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  )
}
