import React from "react";
import styles from "./Categories.module.css";
import Image from "next/image";
type Props = {};

export default function Categories({}: Props) {
  return (
    <div className={styles.categories}>
      <div className={styles.tile}>
        <Image
          src={
            "https://assets-global.website-files.com/5ce10a4d0b5f0b560c22e756/656f61fd700b26ceae11ad7c_icon-large-inspiration.svg"
          }
          width={80}
          height={80}
          alt="inspiration"
        />
        <p className={styles.name}>Inspiration</p>
      </div>
      <div className={styles.tile}>
        <Image
          src={
            "https://assets-global.website-files.com/5ce10a4d0b5f0b560c22e756/656f61fd700b26ceae11ad7c_icon-large-inspiration.svg"
          }
          width={80}
          height={80}
          alt="illustrations"
        />
        <p className={styles.name}>Illustrations</p>
      </div>
      <div className={styles.tile}>
        <Image
          src={
            "https://assets-global.website-files.com/5ce10a4d0b5f0b560c22e756/656f6211dcfb053643bcdc5c_icon-large-icons.svg"
          }
          width={80}
          height={80}
          alt="icons"
        />
        <p className={styles.name}>icons</p>
      </div>
      <div className={styles.tile}>
        <Image
          src={
            "https://assets-global.website-files.com/5ce10a4d0b5f0b560c22e756/656f62099391c34c9db1a0a0_icon-large-mockups.svg"
          }
          width={80}
          height={80}
          alt="Mockups+kits"
        />
        <p className={styles.name}>Mockups+kits</p>
      </div>
      <div className={styles.tile}>
        <Image
          src={
            "https://assets-global.website-files.com/5ce10a4d0b5f0b560c22e756/656f61fd700b26ceae11ad7c_icon-large-inspiration.svg"
          }
          width={80}
          height={80}
          alt="inspiration"
        />
        <p className={styles.name}>Inspiration</p>
      </div>
      <div className={styles.tile}>
        <Image
          src={
            "https://assets-global.website-files.com/5ce10a4d0b5f0b560c22e756/656f61fd700b26ceae11ad7c_icon-large-inspiration.svg"
          }
          width={80}
          height={80}
          alt="inspiration"
        />
        <p className={styles.name}>Inspiration</p>
      </div>
      <div className={styles.tile}>
        <Image
          src={
            "https://assets-global.website-files.com/5ce10a4d0b5f0b560c22e756/656f61fd700b26ceae11ad7c_icon-large-inspiration.svg"
          }
          width={80}
          height={80}
          alt="inspiration"
        />
        <p className={styles.name}>Inspiration</p>
      </div>
    </div>
  );
}
