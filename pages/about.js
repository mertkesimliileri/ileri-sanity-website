import React from 'react'
import { useState, useEffect } from 'react'
import sanityClient from "../client"
import styles from "./about.module.css"
import SanityBlockContent from '@sanity/block-content-to-react'
import Navbar from "./navbar"
import Footer from "./footer"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next';

export async function getStaticProps({ locale }) {
  return {
    props: {
        locale,
      ...(await serverSideTranslations(locale, [
        'common',
      ])),
      // Will be passed to the page component as props
    },
  }
}

const About = (props) => {
    const [aboutData, setAbout] = useState(null);
    const { t } = useTranslation('common')

    useEffect(() => {
        sanityClient.fetch(`*[_type == "about" && language == '${props.locale}']{
        publishedAt,
        body
    }`)
            .then((data) => setAbout(data))
            .catch(console.error);
    }, [])
    return (
        <><Navbar /><section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <h1 className={styles.header}>
                            {t('about')}
                        </h1>
                        {aboutData && aboutData.map((post, index) => <>
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

export default About
