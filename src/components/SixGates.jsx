import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './SixGates.module.css'

// Correct 6 Gates from README.md
const gates = [
  {
    number: 1,
    name: 'Ownership',
    focus: 'Understanding',
    question: 'Walk me through what this code does, line by line.',
    isBlocking: true,
    description: 'If you can\'t explain it, you don\'t own it.'
  },
  {
    number: 2,
    name: 'Security',
    focus: 'OWASP Top 10',
    question: 'Where does user input enter? How is it validated?',
    isBlocking: false,
    description: 'Security isn\'t optional. It\'s foundational.'
  },
  {
    number: 3,
    name: 'Error Handling',
    focus: 'Resilience',
    question: 'What happens if the network fails? What does the user see?',
    isBlocking: false,
    description: 'Anticipate failure before it finds you.'
  },
  {
    number: 4,
    name: 'Performance',
    focus: 'Scalability',
    question: 'What happens with 10,000 items? How many DB queries?',
    isBlocking: false,
    description: 'Understand the cost of your decisions.'
  },
  {
    number: 5,
    name: 'Fundamentals',
    focus: 'Readability',
    question: 'Would a new developer understand this code?',
    isBlocking: false,
    description: 'Code is read more than it\'s written.'
  },
  {
    number: 6,
    name: 'Testing',
    focus: 'Quality',
    question: 'What tests prove this feature works?',
    isBlocking: false,
    description: 'Untested code is unfinished code.'
  }
]

export default function SixGates() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section className={styles.section} ref={ref}>
      {/* Background glow */}
      <div className={styles.backgroundGlow} />

      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>Quality Framework</span>
          <h2 className={styles.title}>The 6 Gates</h2>
          <p className={styles.subtitle}>
            Before completing any task, your code passes through 6 quality checkpoints.
            Each gate asks a question you must answer.
          </p>
        </motion.div>

        <div className={styles.gatesGrid}>
          {gates.map((gate, index) => (
            <motion.div
              key={gate.number}
              className={`${styles.gate} ${gate.isBlocking ? styles.blocking : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              {/* Gate number */}
              <div className={styles.gateNumber}>
                <span className={styles.gateNumberInner}>{gate.number}</span>
              </div>

              {/* Content */}
              <div className={styles.gateContent}>
                <div className={styles.gateMeta}>
                  <h3 className={styles.gateName}>{gate.name}</h3>
                  {gate.isBlocking && (
                    <span className={styles.blockingBadge}>Blocking</span>
                  )}
                </div>

                <span className={styles.gateFocus}>{gate.focus}</span>

                <p className={styles.gateQuestion}>"{gate.question}"</p>

                <p className={styles.gateDescription}>{gate.description}</p>
              </div>

              {/* Unlock indicator */}
              <div className={styles.unlockLine} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.footer}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className={styles.footerText}>
            <span className={styles.footerHighlight}>Gate 1 (Ownership) can block completion.</span>
            {' '}If you can't explain your code, you don't understand it.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
