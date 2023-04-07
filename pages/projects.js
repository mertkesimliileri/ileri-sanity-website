import React from 'react'
import { useState, useEffect } from 'react'
import sanityClient from "../client"
import styles from "./projects.module.css"
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

const Projects = (props) => {
    const [projectsData, setProjects] = useState(null);
    const { t } = useTranslation('common')


    useEffect(() => {
        sanityClient.fetch(`*[_type == "projects" && language == '${props.locale}']{
        publishedAt,
        body
    }`)
            .then((data) => setProjects(data))
            .catch(console.error);
    }, [])
    return (
      <><Navbar /><section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <h1 className={styles.header}>
                        {t('works')}
                        </h1>
                        {projectsData && projectsData.map((post, index) => <>
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

export default Projects