import React from 'react'
import styles from "./home.module.css"
import Link from 'next/link'
import { AiOutlineArrowRight } from "@react-icons/all-files/ai/AiOutlineArrowRight";
import Navbar from "../Layout/navbar"
import Footer from "../Layout/footer"
import { useRouter } from 'next/router';
import tr from "../Locales/tr";
import en from "../Locales/en";



const Home = () => {
    const router = useRouter();
    const { locale, defaultLocale } = router;

    const t = locale === "en" ? en : tr;
    return (
        <><Navbar /><section className={styles.home}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <h6 className={styles.textUppercase}>{t.homeh6}</h6>
                        <h1 className={styles.header}>{t.companyName}</h1>
                        <p className={styles.text}>
                            {t.homeText}
                        </p>
                        <p className={styles.buttonWrapper}>
                            <Link href="/contact">
                                <a className={styles.button}>{t.homeButton} <AiOutlineArrowRight className={styles.icon} /></a>
                            </Link>
                        </p>
                    </div>
                </div>
                <div className={styles.rowVideo}>
                    <div className={styles.videoColumn}>
                        <div className={styles.videoWrapper}>
                            <mux-player
                                stream-type="on-demand"
                                playback-id="ey8z3OcGZuGQtimXpCIFgDBbuW01zfa9kS4BXp8EdkJ8"
                                metadata-video-title="Placeholder (optional)"
                                metadata-viewer-user-id="Placeholder (optional)"
                                primary-color="#FFFFFF"
                                secondary-color="#292929"
                                className={styles.video}
                                autoPlay
                                loop
                                muted>
                            </mux-player>
                        </div>
                    </div>
                </div>
            </div>
        </section><Footer /></>
    )
}

export default Home
