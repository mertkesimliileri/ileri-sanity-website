import React from 'react'
import { useState, useEffect } from 'react'
import sanityClient from "../client"
import styles from "./projects.module.css"
import SanityBlockContent from '@sanity/block-content-to-react'
import Navbar from "../Layout/navbar"
import Footer from "../Layout/footer"

const Projects = () => {
    const [projectsData, setProjects] = useState(null);

    useEffect(() => {
      sanityClient.fetch(`*[_type == "projects"]{
          publishedAt,
          body
      }`)
      .then((data) => setProjects(data))
      .catch(console.error);
    },[])
    return (
      <><Navbar /><section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <h1 className={styles.header}>
                            Yaptığımız İşler
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