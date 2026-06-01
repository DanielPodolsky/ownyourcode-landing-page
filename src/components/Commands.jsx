import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './Commands.module.css'

const coreWorkflow = [
  {
    name: '/own:init',
    description: 'Define your mission, stack, and roadmap',
    icon: '⚡'
  },
  {
    name: '/own:feature',
    description: 'Plan a feature with spec-driven development',
    icon: '✦'
  },
  {
    name: '/own:advise',
    description: 'Pre-work intelligence from your learning history',
    icon: '◈'
  },
  {
    name: '/own:guide',
    description: 'Get implementation guidance (patterns, not code)',
    icon: '→'
  },
  {
    name: '/own:stuck',
    description: 'Debug with Protocol D (systematic debugging)',
    icon: '?'
  },
  {
    name: '/own:done',
    description: 'Run 6 Gates review + career extraction (Interview Prep default)',
    icon: '●'
  },
  {
    name: '/own:retro',
    description: 'Capture learnings for the flywheel',
    icon: '↺'
  }
]

const utilities = [
  {
    name: '/own:status',
    description: 'Check progress, tasks, and career stats',
    icon: '◉'
  },
  {
    name: '/own:profile',
    description: 'Switch or customize your mentorship profile',
    icon: '◇'
  },
  {
    name: '/own:theme',
    description: 'Restyle your project dashboard from a design brief',
    icon: '◐'
  },
  {
    name: '/own:test',
    description: 'Guide through writing tests (you write, AI guides)',
    icon: '✓'
  },
  {
    name: '/own:docs',
    description: 'Guide through writing documentation',
    icon: '📖'
  }
]

export default function Commands() {
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
          <span className={styles.badge}>Commands</span>
          <h2 className={styles.title}>Your Toolkit</h2>
          <p className={styles.subtitle}>
            12 commands. Core workflow + utilities. 6 gates. Infinite learning potential.
          </p>
        </motion.div>

        {/* Core Workflow */}
        <motion.h3
          className={styles.groupLabel}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Core Workflow
        </motion.h3>
        <div className={styles.grid}>
          {coreWorkflow.map((cmd, index) => (
            <motion.div
              key={cmd.name}
              className={styles.command}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * index }}
            >
              <span className={styles.commandIcon}>{cmd.icon}</span>
              <div className={styles.commandContent}>
                <code className={styles.commandName}>{cmd.name}</code>
                <p className={styles.commandDescription}>{cmd.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Utilities */}
        <motion.h3
          className={styles.groupLabel}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          Utilities
        </motion.h3>
        <div className={styles.grid}>
          {utilities.map((cmd, index) => (
            <motion.div
              key={cmd.name}
              className={styles.command}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + 0.05 * index }}
            >
              <span className={styles.commandIcon}>{cmd.icon}</span>
              <div className={styles.commandContent}>
                <code className={styles.commandName}>{cmd.name}</code>
                <p className={styles.commandDescription}>{cmd.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
