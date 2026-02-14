import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import styles from './Profiles.module.css'

const profiles = [
  {
    id: 'junior',
    name: 'Junior Developer',
    tagline: 'No shortcuts: you design first, then build',
    design: 'Required',
    career: 'On request',
    unique: 'Mandatory collaborative design',
    terminal: {
      command: '/own:feature',
      output: '→ Before coding: let\'s design the architecture together.'
    }
  },
  {
    id: 'career-switcher',
    name: 'Career Switcher',
    tagline: 'Your past is a learning advantage',
    design: 'On request',
    career: 'On request',
    unique: 'Concepts through what you already know',
    terminal: {
      command: '/own:guide',
      output: '→ Think of middleware like a security checkpoint you managed.'
    }
  },
  {
    id: 'interview-prep',
    name: 'Interview Prep',
    tagline: 'Every task becomes interview ammunition',
    design: 'On request',
    career: 'Default ON',
    unique: 'S.T.A.R story + resume bullet extraction',
    terminal: {
      command: '/own:done',
      output: '→ S.T.A.R story saved. Resume bullet extracted.'
    }
  },
  {
    id: 'experienced',
    name: 'Experienced Dev',
    tagline: 'Peer-level collaboration, direct feedback',
    design: 'On request',
    career: 'On request',
    unique: 'Skip fundamentals, catch blind spots',
    terminal: {
      command: '/own:guide',
      output: '→ Skipping basics. Have you considered the N+1 query here?'
    }
  },
  {
    id: 'custom',
    name: 'Custom',
    tagline: 'Mix and match to fit how you learn',
    design: 'On request',
    career: 'On request',
    unique: 'Full personality customization',
    terminal: {
      command: '/own:profile',
      output: '→ Personality: Zen Master | Design: on | Career: off'
    }
  }
]

export default function Profiles() {
  const [activeProfile, setActiveProfile] = useState('junior')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const active = profiles.find(p => p.id === activeProfile)

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>Who This Is For</span>
          <h2 className={styles.title}>One system, five profiles</h2>
          <p className={styles.subtitle}>
            OwnYourCode adapts to where you are in your journey. Pick the profile
            that fits — switch anytime.
          </p>
        </motion.div>

        {/* Profile pills */}
        <motion.div
          className={styles.pills}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {profiles.map(profile => (
            <button
              key={profile.id}
              className={`${styles.pill} ${activeProfile === profile.id ? styles.pillActive : ''}`}
              onClick={() => setActiveProfile(profile.id)}
            >
              {profile.name}
            </button>
          ))}
        </motion.div>

        {/* Detail card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            className={styles.detailCard}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <div className={styles.detailTop}>
              <h3 className={styles.detailName}>{active.name}</h3>
              <p className={styles.detailTagline}>{active.tagline}</p>
            </div>

            <div className={styles.featureRows}>
              <div className={styles.featureRow}>
                <span className={styles.featureLabel}>Design Thinking</span>
                <span className={`${styles.featureValue} ${active.design === 'Required' ? styles.featureActive : ''}`}>
                  {active.design}
                </span>
              </div>
              <div className={styles.featureRow}>
                <span className={styles.featureLabel}>Career Extraction</span>
                <span className={`${styles.featureValue} ${active.career === 'Default ON' ? styles.featureActive : ''}`}>
                  {active.career}
                </span>
              </div>
              <div className={styles.featureRow}>
                <span className={styles.featureLabel}>Unique Feature</span>
                <span className={styles.featureHighlight}>{active.unique}</span>
              </div>
            </div>

            {/* Mini terminal */}
            <div className={styles.miniTerminal}>
              <div className={styles.miniTerminalHeader}>
                <span className={styles.dot} data-color="red" />
                <span className={styles.dot} data-color="yellow" />
                <span className={styles.dot} data-color="green" />
              </div>
              <div className={styles.miniTerminalBody}>
                <div className={styles.miniTerminalLine}>
                  <span className={styles.prompt}>&gt;</span>
                  <code className={styles.miniCommand}>{active.terminal.command}</code>
                </div>
                <div className={styles.miniTerminalOutput}>{active.terminal.output}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.p
          className={styles.bottomNote}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Profiles adapt HOW we teach. The core stays the same. Change anytime with{' '}
          <code className={styles.inlineCode}>/own:profile</code>.
        </motion.p>
      </div>
    </section>
  )
}
