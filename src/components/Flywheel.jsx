import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './Flywheel.module.css'

// Correct flywheel steps from README.md
const steps = [
  {
    command: '/own:feature',
    label: 'Plan',
    description: 'Grab the next mission from your roadmap',
    optional: false
  },
  {
    command: '/own:advise',
    label: 'Advise',
    description: 'Pull relevant learnings before starting',
    optional: true
  },
  {
    command: '/own:guide',
    label: 'Implement',
    description: 'Get hints and patterns as you code',
    optional: true
  },
  {
    command: '/own:done',
    label: 'Complete',
    description: 'Pass 6 Gates + S.T.A.R extraction (Interview Prep default)',
    optional: false
  },
  {
    command: '/own:retro',
    label: 'Reflect',
    description: 'Capture what you learned for next time',
    optional: true
  }
]

const persists = [
  { label: 'Patterns', description: 'Solutions that worked' },
  { label: 'Failures', description: 'Mistakes you won\'t repeat' },
  { label: 'STAR Stories', description: 'Interview-ready accomplishments' },
  { label: 'Resume Bullets', description: 'Career value from every task' },
]

export default function Flywheel() {
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
          <span className={styles.badge}>The Cycle</span>
          <h2 className={styles.title}>The Learning Flywheel</h2>
          <p className={styles.subtitle}>
            Your learnings compound over time. Every session builds on the last —
            patterns, failures, and wins feed into the next mission.
          </p>
        </motion.div>

        {/* Linear flow - clean horizontal layout */}
        <div className={styles.flowContainer}>
          <div className={styles.flow}>
            {steps.map((step, index) => (
              <motion.div
                key={step.command}
                className={styles.flowStep}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className={styles.flowStepNumber}>{index + 1}</div>
                <div className={styles.flowStepContent}>
                  <code className={styles.flowStepCommand}>{step.command}</code>
                  <span className={styles.flowStepLabel}>
                    {step.label}
                    {step.optional && <span className={styles.optionalBadge}>optional</span>}
                  </span>
                  <span className={styles.flowStepDescription}>{step.description}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className={styles.flowArrow}>→</div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            className={styles.loopIndicator}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <span className={styles.loopArrow}>↺</span>
            <span>Yesterday's struggle becomes today's instinct</span>
          </motion.div>
        </div>

        {/* What persists */}
        <motion.div
          className={styles.persistsSection}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className={styles.persistsTitle}>What persists across sessions:</h3>
          <div className={styles.persistsGrid}>
            {persists.map((item) => (
              <div key={item.label} className={styles.persistItem}>
                <span className={styles.persistLabel}>{item.label}</span>
                <span className={styles.persistDescription}>{item.description}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.p
          className={styles.tagline}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          The more you use it, <span className={styles.accent}>the less you need it.</span>
        </motion.p>
      </div>
    </section>
  )
}
