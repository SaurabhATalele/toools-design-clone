import styles from './page.module.css'
import { Navbar } from "./Components/Navbar/Navbar"
import Landing from './Components/Landing/Landing'
import Categories from './Components/Categories/Categories'
import LatestResources from './Components/LatestResources/LatestResources'
import NewsLetter from './Components/NewsLetter/NewsLetter'
export default function page() {
  return (
    <div className={styles.main}>
      <Navbar/>
     <Landing/>
     <Categories/>
     <LatestResources/>
     <NewsLetter/>
    </div>
  )
}
