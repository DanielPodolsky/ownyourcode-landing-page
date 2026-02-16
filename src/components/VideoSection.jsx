import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './VideoSection.module.css'

export default function VideoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>Watch</span>
          <h2 className={styles.title}>See OwnYourCode in Action</h2>
          <p className={styles.subtitle}>
            Watch how AI mentorship transforms your development workflow.
            Same quality standards — adapted to how you learn.
          </p>
        </motion.div>

        <motion.div
          className={styles.videoWrapper}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.videoContainer}>
            {/* Glow effect */}
            <div className={styles.glow} />

            {/* Terminal chrome */}
            <div className={styles.terminalHeader}>
              <span className={styles.dot} data-color="red" />
              <span className={styles.dot} data-color="yellow" />
              <span className={styles.dot} data-color="green" />
              <span className={styles.terminalTitle}>OwnYourCode</span>
            </div>

            {/* Video */}
            <div className={styles.videoFrame}>
              <video
                ref={videoRef}
                className={styles.video}
                src="/ownyourcode.mp4"
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              />

              {/* Play overlay */}
              {!isPlaying && (
                <button
                  className={styles.playButton}
                  onClick={handlePlayPause}
                  aria-label="Play video"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className={styles.playIcon}>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              )}

              {/* Video controls */}
              <div className={styles.controls}>
                <button
                  className={styles.controlBtn}
                  onClick={handlePlayPause}
                >
                  {isPlaying ? (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
