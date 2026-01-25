import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './Flywheel.module.css'

// Correct flywheel steps from README.md
const steps = [
  {
    command: '/own:feature',
    label: 'Plan',
    description: 'Plan a new feature (creates spec, design, tasks)'
  },
  {
    command: '/own:advise',
    label: 'Advise',
    description: 'Get relevant learnings before starting a task'
  },
  {
    command: '/own:guide',
    label: 'Implement',
    description: 'Get implementation help as you code'
  },
  {
    command: '/own:done',
    label: 'Complete',
    description: 'Pass 6 Gates, code review, extract STAR story'
  },
  {
    command: '/own:retro',
    label: 'Reflect',
    description: 'Capture what you learned'
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
            Your learnings compound over time. Unlike normal AI chats that forget everything,
            OwnYourCode remembers.
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
                <code className={styles.flowStepCommand}>{step.command}</code>
                <span className={styles.flowStepLabel}>{step.label}</span>
                <span className={styles.flowStepDescription}>{step.description}</span>
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
            {persists.map((item, index) => (
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
