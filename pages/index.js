import React from 'react'
import styles from "./home.module.css"
import Link from 'next/link'
import { AiOutlineArrowRight } from "@react-icons/all-files/ai/AiOutlineArrowRight";
import Navbar from "../Layout/navbar"
import Footer from "../Layout/footer"



const Home = () => {
  return (
    <><Navbar /><section className={styles.home}>
          <div className={styles.container}>
              <div className={styles.row}>
                  <div className={styles.column}>
                      <h6 className={styles.textUppercase}>Yazılımda İleri Çözümler</h6>
                      <h1 className={styles.header}>İleri İşler</h1>
                      <p className={styles.text}>
                          Yazılım çözümlerinde ileri yaklaşımlar. Birlikte sıradışı geleceğin işlerini yapalım.
                      </p>
                      <p className={styles.buttonWrapper}>
                          <Link href="/contact">
                              <a className={styles.button}>Bir istekte bulunun <AiOutlineArrowRight className={styles.icon} /></a>
                          </Link>
                      </p>
                  </div>
              </div>
              <div className={styles.rowVideo}>
                  <div className={styles.videoColumn}>
                      <div className={styles.videoWrapper}>
                          <video className={styles.video} src="https://www.ileriisler.com/themes/ileri-isler/assets/video/video-1.mp4" autoPlay loop muted></video>
                      </div>
                  </div>
              </div>
          </div>
      </section><Footer /></>
  )
}

export default Home
