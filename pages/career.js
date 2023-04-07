import React from 'react'
import { useState, useEffect } from 'react'
import sanityClient from "../client"
import styles from "./career.module.css"
import SanityBlockContent from '@sanity/block-content-to-react'
import Navbar from "../Layout/navbar"
import Footer from "../Layout/footer"
import { useRouter } from 'next/router';
import tr from "../Locales/tr";
import en from "../Locales/en";

const Career = () => {
    const [careerData, setCareer] = useState(null);
    const router = useRouter();
    const { locale, defaultLocale } = router;

    const t = locale === "en" ? en : tr;

    useEffect(() => {
        sanityClient.fetch(`*[_type == "career" && language == '${locale}']{
        publishedAt,
        body
    }`)
            .then((data) => setCareer(data))
            .catch(console.error);
    }, [])
    return (
      <><Navbar /><section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <h1 className={styles.header}>
                            {t.join}
                        </h1>
                        {careerData && careerData.map((post, index) => <>
                            <div className={styles.sticker}>
                                <div className={styles.colAuto}></div>
                                <div className={styles.col}>
                                    <time className={styles.date} dateTime={post.publishedAt}>
                                        {post.publishedAt}
                                    </time>
                                </div>
                            </div>
                            <SanityBlockContent blocks={post.body} />
                        </>
                        )}
                    </div>
                </div>
            </div>
        </section><Footer /></>
    )
}

export default Career