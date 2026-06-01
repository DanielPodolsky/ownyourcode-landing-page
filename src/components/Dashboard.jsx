import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import styles from './Dashboard.module.css'

// Phase lifecycle mirrors the v2.5 contract: roadmap-only → specced → complete
const phases = [
  { id: 'auth', name: 'Authentication', status: 'complete' },
  { id: 'dashboard', name: 'Project Dashboard', status: 'active' },
  { id: 'api', name: 'API Layer', status: 'roadmap-only' }
]

const tabs = ['Spec', 'Design', 'Tasks']

const spec = [
  'Dashboard renders without a local server',
  'All state lives in window.PROJECT',
  'Every /own:* command keeps it in sync'
]

const board = {
  Todo: ['Wire progress ring', 'Theme tokens'],
  'In Progress': ['Render Spec tab'],
  Done: ['Sidebar nav', 'Tab switching', 'Kanban board']
}

const PROGRESS = 0.62
const RADIUS = 52
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('Tasks')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className={styles.section} ref={ref}>
      {/* Ghost numeral — echoes the dashboard's signature motif */}
      <span className={styles.ghostNumeral} aria-hidden="true">2.5</span>

      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>New in v2.5 · The Dashboard</span>
          <h2 className={styles.title}>
            Your whole plan, <span className={styles.accent}>one browser tab.</span>
          </h2>
          <p className={styles.subtitle}>
            Spec-Driven Development left the folder of Markdown files behind. Mission,
            stack, roadmap, and every phase now live in a single dashboard you
            double-click open — no server required.
          </p>
        </motion.div>

        {/* The cockpit */}
        <motion.div
          className={styles.cockpit}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.glow} />

          {/* Browser chrome */}
          <div className={styles.chrome}>
            <div className={styles.dots}>
              <span className={styles.dot} data-color="red" />
              <span className={styles.dot} data-color="yellow" />
              <span className={styles.dot} data-color="green" />
            </div>
            <div className={styles.urlBar}>
              <span className={styles.lock}>file://</span>
              ownyourcode/dashboard/dashboard.html
            </div>
          </div>

          {/* App body */}
          <div className={styles.app}>
            {/* Sidebar */}
            <aside className={styles.sidebar}>
              <div className={styles.projectName}>
                <span className={styles.projectDot} />
                my-project
              </div>

              <nav className={styles.nav}>
                <span className={styles.navItem} data-active="true">Mission</span>
                <span className={styles.navItem}>Stack</span>
                <span className={styles.navItem}>Roadmap</span>
              </nav>

              {/* Progress ring */}
              <div className={styles.ring}>
                <svg viewBox="0 0 120 120" className={styles.ringSvg}>
                  <circle
                    className={styles.ringTrack}
                    cx="60"
                    cy="60"
                    r={RADIUS}
                  />
                  <motion.circle
                    className={styles.ringFill}
                    cx="60"
                    cy="60"
                    r={RADIUS}
                    strokeDasharray={CIRCUMFERENCE}
                    initial={{ strokeDashoffset: CIRCUMFERENCE }}
                    animate={isInView ? { strokeDashoffset: CIRCUMFERENCE * (1 - PROGRESS) } : {}}
                    transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  />
                </svg>
                <div className={styles.ringLabel}>
                  <span className={styles.ringValue}>62%</span>
                  <span className={styles.ringCaption}>roadmap</span>
                </div>
              </div>

              <div className={styles.phaseList}>
                {phases.map(phase => (
                  <div key={phase.id} className={styles.phaseRow} data-status={phase.status}>
                    <span className={styles.phaseMark} />
                    <span className={styles.phaseName}>{phase.name}</span>
                  </div>
                ))}
              </div>
            </aside>

            {/* Main panel */}
            <div className={styles.panel}>
              <div className={styles.panelHead}>
                <h3 className={styles.panelTitle}>Project Dashboard</h3>
                <span className={styles.panelStatus}>active phase</span>
              </div>

              {/* Tabs */}
              <div className={styles.tabs}>
                {tabs.map(tab => (
                  <button
                    key={tab}
                    className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ''}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab content */}
              <div className={styles.tabBody}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.22 }}
                  >
                    {activeTab === 'Spec' && (
                      <ul className={styles.criteria}>
                        {spec.map(item => (
                          <li key={item}>
                            <span className={styles.check}>✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    {activeTab === 'Design' && (
                      <div className={styles.diagram}>
                        <div className={styles.node}>Browser</div>
                        <span className={styles.edge}>↓ loads</span>
                        <div className={styles.node}>dashboard.html</div>
                        <span className={styles.edge}>↓ reads</span>
                        <div className={styles.node} data-source="true">
                          dashboard-data.js
                          <code className={styles.nodeTag}>window.PROJECT</code>
                        </div>
                      </div>
                    )}

                    {activeTab === 'Tasks' && (
                      <div className={styles.kanban}>
                        {Object.entries(board).map(([column, items]) => (
                          <div key={column} className={styles.column}>
                            <span className={styles.columnTitle} data-column={column}>
                              {column}
                              <span className={styles.columnCount}>{items.length}</span>
                            </span>
                            {items.map(card => (
                              <div key={card} className={styles.card}>{card}</div>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature highlights */}
        <motion.div
          className={styles.features}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className={styles.feature}>
            <span className={styles.featureIcon}>◱</span>
            <h4 className={styles.featureTitle}>No server, ever</h4>
            <p className={styles.featureText}>
              Double-click the file. State loads via <code>{'<script src>'}</code>,
              so it works under <code>file://</code>.
            </p>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>↺</span>
            <h4 className={styles.featureTitle}>Always in sync</h4>
            <p className={styles.featureText}>
              One source of truth in <code>dashboard-data.js</code>. Every command
              reads and writes the same <code>window.PROJECT</code>.
            </p>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>◈</span>
            <h4 className={styles.featureTitle}>Re-skin it live</h4>
            <p className={styles.featureText}>
              Run <code>/own:theme</code> with a design brief and it regenerates the
              dashboard's styling — your data untouched.
            </p>
          </div>
        </motion.div>

        {/* Meta callout — the dashboard's default theme is THIS site */}
        <motion.div
          className={styles.meta}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <span className={styles.metaIcon}>✦</span>
          <p className={styles.metaText}>
            The default theme is <strong>Terminal-Futurism</strong> — a 1:1 capture of
            the very design system you're looking at right now.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
