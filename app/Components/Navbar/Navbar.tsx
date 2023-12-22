"use client";
import Image from "next/image";
import styles from "./Navbar.module.css";
import { useState, useEffect, DetailedHTMLProps } from "react";

export const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      console.log(scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div
      className={styles.navbar}
      id="navbar"
    >
      <Image
        src={
          "https://assets-global.website-files.com/5ce10a4c0b5f0b05f522e746/633701e39b4c607d4375f447_toools-logo-dark.svg"
        }
        width={200}
        height={48}
        alt="Logo"
      ></Image>
      <div>
        <ul className={styles.options}>
          <li>NewsLetter</li>
          <li>Deals</li>
          <li>
            <Image
              src={
                "https://assets-global.website-files.com/5ce10a4c0b5f0b05f522e746/61f9a06cd4dcdff9738c61cd_icon-navi-menu.svg"
              }
              width={24}
              height={24}
              alt="menu"
            ></Image>
          </li>
        </ul>
      </div>
    </div>
  );
};
