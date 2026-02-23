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
            AI-Mentored Development
          </motion.p>

          {/* Slogan */}
          <motion.p
            className={styles.slogan}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            AI mentors, you build. You <span className={styles.accent}>own</span> the result.
          </motion.p>

          {/* Description */}
          <motion.p
            className={styles.description}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            AI coding tools optimize for shipping, but speed without understanding is
            a trap. OwnYourCode flips this — AI becomes your mentor, not your coder.
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
            <a
              href="https://github.com/DanielPodolsky/ownyourcode"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnGithub}
            >
              <svg className={styles.githubIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
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
                <span className={styles.accent}>✓</span> Select your profile
              </span>
            </div>
            <div className={styles.line}>
              <span className={styles.output}>
                <span className={styles.accent}>→</span> junior | career-switcher | interview-prep | experienced | custom
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
