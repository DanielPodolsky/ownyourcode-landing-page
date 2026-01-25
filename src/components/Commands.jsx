import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './Commands.module.css'

// Correct 10 commands from README.md
const commands = [
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
    name: '/own:test',
    description: 'Guide through writing tests (you write, AI guides)',
    icon: '✓'
  },
  {
    name: '/own:docs',
    description: 'Guide through writing documentation',
    icon: '📖'
  },
  {
    name: '/own:stuck',
    description: 'Debug with Protocol D (systematic debugging)',
    icon: '?'
  },
  {
    name: '/own:done',
    description: 'Complete with 6 Gates + code review + career extraction',
    icon: '●'
  },
  {
    name: '/own:retro',
    description: 'Capture learnings for the flywheel',
    icon: '↺'
  },
  {
    name: '/own:status',
    description: 'Check progress + learning stats',
    icon: '◉'
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
            10 commands. 11 skills. 6 gates. Infinite learning potential.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {commands.map((cmd, index) => (
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
      </div>
    </section>
  )
}
