import React from 'react'
import styles from "./footer.module.css"
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.columnImg}>
                    <img
                    className={styles.footerBrand} 
                    src='https://www.ileriisler.com/storage/temp/public/imageresizecache/687/218/d69/687218d69094c0711c78d7da917b41022d25f6a2c85968887e62e96df8b2d5c3.png' 
                    alt='ileriişler'></img>
                    <p className={styles.text}>İleri İşler Yazılım Evi</p>
                </div>
                <div className={styles.column}>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <Link className={styles.text} href="/about">
                                Nedir İleri İşler?
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.column}>
                <ul className={styles.list}>
                        <li className={styles.item}>
                            <Link className={styles.text} href="/projects">
                                Yaptığımız İşler
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.column}>
                <ul className={styles.list}>
                        <li className={styles.item}>
                            <Link className={styles.text} href="/career">
                                Bize katılın
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer