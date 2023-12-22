import React from 'react'
import styles from './LatestResources.module.css'
import Image from 'next/image'
type Props = {}

export default function LatestResources({}: Props) {
  return (
    <div className={styles.container}>

        <h2>Latest Resources</h2>
        <div className={styles.cards__container}>
            <div className={styles.card}>
                <div className={styles.resource__image}>
                    <Image src={'https://assets-global.website-files.com/5ce10a4d0b5f0b560c22e756/6581803c9142274663081e66_visual-electric.svg'} alt="Picture of the author" width={300} height={200} />
                </div>
                <div className={styles.content}>
                    <h4>Visual Electric</h4>
                    <p>An image gnerator that is built for the creative process.</p>
                </div>
                <div className={styles.tags}>
                    <span className={styles.price__tag}>FREEMIUM</span>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.resource__image}>
                    <Image src={'https://assets-global.website-files.com/5ce10a4d0b5f0b560c22e756/6581803c9142274663081e66_visual-electric.svg'} alt="Picture of the author" width={300} height={200} />
                </div>
                <div className={styles.content}>
                    <h4>Visual Electric</h4>
                    <p>An image gnerator that is built for the creative process.</p>
                </div>
                <div className={styles.tags}>
                    <span className={styles.price__tag}>FREEMIUM</span>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.resource__image}>
                    <Image src={'https://assets-global.website-files.com/5ce10a4d0b5f0b560c22e756/6581803c9142274663081e66_visual-electric.svg'} alt="Picture of the author" width={300} height={200} />
                </div>
                <div className={styles.content}>
                    <h4>Visual Electric</h4>
                    <p>An image gnerator that is built for the creative process.</p>
                </div>
                <div className={styles.tags}>
                    <span className={styles.price__tag}>FREEMIUM</span>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.resource__image}>
                    <Image src={'https://assets-global.website-files.com/5ce10a4d0b5f0b560c22e756/6581803c9142274663081e66_visual-electric.svg'} alt="Picture of the author" width={300} height={200} />
                </div>
                <div className={styles.content}>
                    <h4>Visual Electric</h4>
                    <p>An image gnerator that is built for the creative process.</p>
                </div>
                <div className={styles.tags}>
                    <span className={styles.price__tag}>FREEMIUM</span>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.resource__image}>
                    <Image src={'https://assets-global.website-files.com/5ce10a4d0b5f0b560c22e756/6581803c9142274663081e66_visual-electric.svg'} alt="Picture of the author" width={300} height={200} />
                </div>
                <div className={styles.content}>
                    <h4>Visual Electric</h4>
                    <p>An image gnerator that is built for the creative process.</p>
                </div>
                <div className={styles.tags}>
                    <span className={styles.price__tag}>FREEMIUM</span>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.resource__image}>
                    <Image src={'https://assets-global.website-files.com/5ce10a4d0b5f0b560c22e756/6581803c9142274663081e66_visual-electric.svg'} alt="Picture of the author" width={300} height={200} />
                </div>
                <div className={styles.content}>
                    <h4>Visual Electric</h4>
                    <p>An image gnerator that is built for the creative process.</p>
                </div>
                <div className={styles.tags}>
                    <span className={styles.price__tag}>FREEMIUM</span>
                </div>
            </div>
        </div>

        <button className={styles.latest__btn}>Browse Latest Resources</button>

    </div>
  )
}