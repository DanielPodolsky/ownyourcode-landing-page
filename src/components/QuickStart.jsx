import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './QuickStart.module.css'

export default function QuickStart() {
  const [activeTab, setActiveTab] = useState('unix')
  const [copiedStep, setCopiedStep] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const steps = {
    unix: {
      step1: 'curl -sSL https://raw.githubusercontent.com/DanielPodolsky/ownyourcode/main/scripts/base-install.sh | bash',
      step2: 'cd your-project && ~/ownyourcode/scripts/project-install.sh',
      step3: '/own:init'
    },
    windows: {
      step1: 'irm https://raw.githubusercontent.com/DanielPodolsky/ownyourcode/main/scripts/base-install.ps1 | iex',
      step2: 'cd your-project; ~/ownyourcode/scripts/project-install.ps1',
      step3: '/own:init'
    }
  }

  const handleCopy = async (step, text) => {
    await navigator.clipboard.writeText(text)
    setCopiedStep(step)
    setTimeout(() => setCopiedStep(null), 2000)
  }

  const CopyButton = ({ step, text }) => (
    <button
      className={styles.copyBtn}
      onClick={() => handleCopy(step, text)}
      aria-label="Copy command"
    >
      {copiedStep === step ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
          <rect x="9" y="9" width="13" height="13" rx="2" />
          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
        </svg>
      )}
    </button>
  )

  return (
    <section id="quickstart" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>Quick Start</span>
          <h2 className={styles.title}>Start Owning Your Code</h2>
          <p className={styles.subtitle}>
            Three steps. Global install once, then per-project setup.
          </p>
        </motion.div>

        <motion.div
          className={styles.terminal}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Glow */}
          <div className={styles.terminalGlow} />

          {/* Header */}
          <div className={styles.terminalHeader}>
            <div className={styles.dots}>
              <span className={styles.dot} data-color="red" />
              <span className={styles.dot} data-color="yellow" />
              <span className={styles.dot} data-color="green" />
            </div>

            {/* Tabs */}
            <div className={styles.tabs}>
              <button
                className={`${styles.tab} ${activeTab === 'unix' ? styles.active : ''}`}
                onClick={() => setActiveTab('unix')}
              >
                macOS / Linux
              </button>
              <button
                className={`${styles.tab} ${activeTab === 'windows' ? styles.active : ''}`}
                onClick={() => setActiveTab('windows')}
              >
                Windows
              </button>
            </div>
          </div>

          {/* Body */}
          <div className={styles.terminalBody}>
            {/* Step 1 */}
            <div className={styles.step}>
              <div className={styles.stepHeader}>
                <span className={styles.stepNumber}>1</span>
                <span className={styles.stepLabel}>Install OwnYourCode (one-time)</span>
              </div>
              <div className={styles.commandLine}>
                <span className={styles.prompt}>$</span>
                <code className={styles.command}>{steps[activeTab].step1}</code>
                <CopyButton step="step1" text={steps[activeTab].step1} />
              </div>
            </div>

            {/* Step 2 */}
            <div className={styles.step}>
              <div className={styles.stepHeader}>
                <span className={styles.stepNumber}>2</span>
                <span className={styles.stepLabel}>Add to your project</span>
              </div>
              <div className={styles.commandLine}>
                <span className={styles.prompt}>$</span>
                <code className={styles.command}>{steps[activeTab].step2}</code>
                <CopyButton step="step2" text={steps[activeTab].step2} />
              </div>
            </div>

            {/* Step 3 */}
            <div className={styles.step}>
              <div className={styles.stepHeader}>
                <span className={styles.stepNumber}>3</span>
                <span className={styles.stepLabel}>Initialize in Claude Code</span>
              </div>
              <div className={styles.commandLine}>
                <span className={styles.prompt}>&gt;</span>
                <code className={styles.command}><span className={styles.accent}>{steps[activeTab].step3}</span></code>
                <CopyButton step="step3" text={steps[activeTab].step3} />
              </div>
            </div>

            <div className={styles.output}>
              <div className={styles.outputLine}>
                <span className={styles.accent}>✓</span> Claude is now your mentor, not your coder.
              </div>
            </div>
          </div>
        </motion.div>

        {/* What's next callout */}
        <motion.div
          className={styles.whatNext}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className={styles.whatNextContent}>
            <div className={styles.whatNextIcon}>
              <span>→</span>
            </div>
            <div className={styles.whatNextText}>
              <p className={styles.whatNextLabel}>Ready to build?</p>
              <div className={styles.whatNextCommand}>
                <code><span className={styles.accent}>/own:feature</span> user-authentication</code>
              </div>
            </div>
          </div>
          <p className={styles.whatNextTagline}>AI plans with you. You write every line.</p>
        </motion.div>
      </div>
    </section>
  )
}
