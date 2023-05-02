import Navbar from './../components/Navbar';
import Hero from '../components/Hero';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.center}>
        <Hero />
      </div>
      {/* <Footer /> */}
    </main>
  )
}
