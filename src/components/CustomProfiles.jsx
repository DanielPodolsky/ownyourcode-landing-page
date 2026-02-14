import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './CustomProfiles.module.css'

const personalities = [
  {
    emoji: '\u{1F3F4}\u{200D}\u{2620}\uFE0F',
    name: 'Pirate Captain',
    quote: "Arrr, that function be leakin' memory, matey!"
  },
  {
    emoji: '\u{1F614}',
    name: 'Disappointed Dad',
    quote: "I'm not mad about this code... just disappointed."
  },
  {
    emoji: '\u{1F525}',
    name: 'Gordon Ramsay',
    quote: "This error handling is RAW! Try again!"
  },
  {
    emoji: '\u{1F9D8}',
    name: 'Zen Master',
    quote: "The bug was inside you all along. Breathe. Debug."
  },
  {
    emoji: '\u{1FAE1}',
    name: 'Drill Sergeant',
    quote: "Drop and give me 20 test cases, soldier!"
  },
  {
    emoji: '\u{1F916}',
    name: 'Passive-Aggressive Robot',
    quote: "Oh, no tests? How... brave of you."
  },
  {
    emoji: '\u{1F475}',
    name: 'Sweet Grandma',
    quote: "Oh honey, that's a lovely try. Let's fix this together."
  }
]

export default function CustomProfiles() {
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
          <span className={styles.badge}>Custom Mentors</span>
          <h2 className={styles.title}>Your mentor, your rules.</h2>
          <p className={styles.subtitle}>
            Custom profiles let you pick a personality that keeps you engaged.
            Serious, silly, or somewhere in between.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {personalities.map((p, index) => (
            <motion.div
              key={p.name}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * index }}
            >
              <span className={styles.emoji}>{p.emoji}</span>
              <h3 className={styles.cardName}>{p.name}</h3>
              <p className={styles.cardQuote}>"{p.quote}"</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom callout */}
        <motion.div
          className={styles.callout}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className={styles.calloutInner}>
            <span className={styles.calloutIcon}>✦</span>
            <p className={styles.calloutText}>
              Same quality standards. Same 6 Gates. <strong>YOUR</strong> vibe.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
