import React from 'react'
import styles from './NewsLetter.module.css'
type Props = {}

function NewsLetter({}: Props) {
  return (
    <div className={styles.newsletter}>
        <div className={styles.content}>
            <h1>A weekly roundup of the five best new design tools</h1>
            <p>Stay up to date with this stylish and simple newsletter sent straight to your inbox.</p>
            <form action="">
                <input type="text" className={styles.input} placeholder='Your Email' />
                <button className={styles.subscribe}>Subscribe</button>
            </form>
        </div>
    </div>
  )
}

export default NewsLetter