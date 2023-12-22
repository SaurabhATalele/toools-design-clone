import React from 'react'
import styles from './Landing.module.css'
import Image from 'next/image'


const Landing = () => {
  return (
    <div className={styles.landing}>
        <div className={styles.left__text}>
            <h1>Discover highly useful Design Resources & Tools</h1>
            <p>A growing archive of 1,500+ design resources, weekly updated for the community.</p>
        </div>

        <Image src={"https://assets-global.website-files.com/5ce10a4c0b5f0b05f522e746/656f55400acc0e4194a302ec_toools-design-keyvisual-desktop-p-800.webp"} width={550} height={450} alt='landing-image'></Image>

    </div>
  )
}

export default Landing;