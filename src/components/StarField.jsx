import { useState } from 'react'
import styles from './StarField.module.css'

export default function StarField({ count = 100 }) {
  // Randomized once via a lazy initializer so the impure Math.random() runs a
  // single time at mount — not on every render like useMemo would risk. The
  // starfield is decorative, so it need not react to later `count` changes.
  const [stars] = useState(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2,
      duration: Math.random() * 3 + 2
    }))
  )

  return (
    <div className={styles.starField}>
      {stars.map(star => (
        <div
          key={star.id}
          className={styles.star}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDuration: `${star.duration}s`
          }}
        />
      ))}
    </div>
  )
}
