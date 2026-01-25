import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './HowItWorks.module.css'

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const phases = [
    {
      number: '01',
      title: 'AI-Led Specification',
      subtitle: 'Planning Phase',
      description: 'You describe what you want to build. The AI helps break it down into clear specifications, requirements, and tasks. This is collaborative brainstorming — AI thinks with you, not for you.',
      features: [
        'Define the feature scope together',
        'Identify edge cases and requirements',
        'Create a clear implementation roadmap',
        'AI handles the "what", you own the "how"'
      ],
      terminal: {
        command: '/own:feature user-authentication',
        output: [
          'Creating feature specification...',
          '├─ Defining requirements',
          '├─ Breaking into tasks',
          '├─ Identifying edge cases',
          '└─ Ready for mentored implementation'
        ]
      }
    },
    {
      number: '02',
      title: 'Mentored Implementation',
      subtitle: 'Building Phase',
      description: 'You write every line of code. AI provides patterns (max 8 lines of example code), asks guiding questions, and reviews via 6 Gates. When you\'re stuck, it nudges you forward without giving the answer.',
      features: [
        'Strategic hints, not solutions',
        'Documentation-first guidance',
        'Max 8 lines of example code',
        'Your code, your ownership'
      ],
      terminal: {
        command: '/own:guide',
        output: [
          '💡 Hint: Check the jsonwebtoken docs for verify()',
          '',
          'Consider: What happens if the token is expired?',
          'What secret are you using to sign vs verify?',
          '',
          'Try implementing, then run: /own:done'
        ]
      }
    }
  ]

  return (
    <section id="how-it-works" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>How It Works</span>
          <h2 className={styles.title}>Two Phases, One Goal: Your Growth</h2>
          <p className={styles.subtitle}>
            AI helps you plan. You execute. The result: skills that compound.
          </p>
        </motion.div>

        <div className={styles.phases}>
          {phases.map((phase, index) => (
            <motion.div
              key={phase.number}
              className={styles.phase}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
            >
              <div className={styles.phaseContent}>
                <span className={styles.phaseNumber}>{phase.number}</span>
                <span className={styles.phaseSubtitle}>{phase.subtitle}</span>
                <h3 className={styles.phaseTitle}>{phase.title}</h3>
                <p className={styles.phaseDescription}>{phase.description}</p>

                <ul className={styles.features}>
                  {phase.features.map((feature, i) => (
                    <li key={i}>
                      <span className={styles.featureIcon}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.phaseTerminal}>
                <div className={styles.terminalHeader}>
                  <span className={styles.dot} data-color="red" />
                  <span className={styles.dot} data-color="yellow" />
                  <span className={styles.dot} data-color="green" />
                  <span className={styles.terminalTitle}>claude-code</span>
                </div>
                <div className={styles.terminalBody}>
                  <div className={styles.commandLine}>
                    <span className={styles.prompt}>&gt;</span>
                    <code className={styles.commandText}>{phase.terminal.command}</code>
                  </div>
                  <div className={styles.output}>
                    {phase.terminal.output.map((line, i) => (
                      <div key={i} className={styles.outputLine}>{line || '\u00A0'}</div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Connection line between phases */}
        <motion.div
          className={styles.connector}
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
      </div>
    </section>
  )
}
