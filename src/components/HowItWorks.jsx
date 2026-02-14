import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './HowItWorks.module.css'

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const phases = [
    {
      number: '01',
      title: 'Initialize & Plan',
      subtitle: 'Setup Phase',
      description: 'Run /own:init to select your profile and describe your project. Then /own:feature auto-detects the next mission from your roadmap. Juniors co-design the architecture — for others, it\'s optional.',
      features: [
        'Select a profile that fits your level',
        '/own:feature grabs the next mission automatically',
        'Juniors design architecture collaboratively',
        'Use /own:advise to pull from past learnings'
      ],
      terminal: {
        command: '/own:feature',
        output: [
          'Loading roadmap...',
          '├─ Next mission: user-authentication',
          '├─ Breaking into tasks',
          '├─ Identifying edge cases',
          '└─ Ready for mentored implementation'
        ]
      }
    },
    {
      number: '02',
      title: 'Build, Complete & Reflect',
      subtitle: 'Execution Phase',
      description: 'You write the code with /own:guide for hints and /own:stuck when blocked. When done, /own:done triggers 6 Gates review. Interview Prep profiles get S.T.A.R extraction automatically. Then /own:retro to capture learnings — and the loop continues.',
      features: [
        '/own:guide for hints, /own:stuck for debugging',
        '/own:done triggers 6 Gates quality review',
        'S.T.A.R + resume bullets (Interview Prep default)',
        '/own:retro captures learnings, then loop back'
      ],
      terminal: {
        command: '/own:done',
        output: [
          'Running 6 Gates review...',
          '├─ Gate 1: Ownership ✓',
          '├─ Gate 2: Security ✓',
          '├─ Gate 3-6: Passed',
          '└─ S.T.A.R extraction (Interview Prep default)'
        ]
      }
    }
  ]

  const protocols = [
    {
      letter: 'A',
      name: 'Active Typist',
      description: 'You write the code. AI provides patterns and docs, never full solutions.'
    },
    {
      letter: 'B',
      name: 'Socratic Teaching',
      description: 'AI asks guiding questions instead of giving answers directly.'
    },
    {
      letter: 'C',
      name: 'Evidence-Based',
      description: 'Every recommendation backed by official docs. No guessing.'
    },
    {
      letter: 'D',
      name: 'Systematic Debugging',
      description: 'Read the error, isolate the failure, check docs, then solve.'
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

        {/* 4 Protocols */}
        <motion.div
          className={styles.protocols}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h3 className={styles.protocolsTitle}>4 Protocols</h3>
          <p className={styles.protocolsSubtitle}>
            The operating principles that keep mentorship effective.
          </p>
          <div className={styles.protocolsGrid}>
            {protocols.map((protocol, index) => (
              <motion.div
                key={protocol.letter}
                className={styles.protocol}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              >
                <span className={styles.protocolLetter}>{protocol.letter}</span>
                <h4 className={styles.protocolName}>{protocol.name}</h4>
                <p className={styles.protocolDescription}>{protocol.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
