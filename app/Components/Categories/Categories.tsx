import React from "react";
import styles from "./Categories.module.css";
import Image from "next/image";
import { categories } from "@/app/Data/Data";
type Props = {};

export default function Categories({}: Props) {
  return (
    <div className={styles.categories}>
      {
        categories.map((category) => {
          return <div className={styles.tile} key={category.name}>
          <Image
            src={
              category.image
            }
            width={60}
            height={60}
            alt="inspiration"
          />
          <p className={styles.name}>{category.name}</p>
        </div>
})
      }
      
    </div>
  );
}
