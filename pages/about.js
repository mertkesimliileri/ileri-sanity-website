import React from 'react'
import { useState, useEffect } from 'react'
import sanityClient from "../client"
import styles from "./about.module.css"
import SanityBlockContent from '@sanity/block-content-to-react'
import Navbar from "../Layout/navbar"
import Footer from "../Layout/footer"

const About = () => {
  const [aboutData, setAbout] = useState(null);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "about"]{
        publishedAt,
        body
    }`)
    .then((data) => setAbout(data))
    .catch(console.error);
  },[])
  return (
    <><Navbar /><section className={styles.section}>
          <div className={styles.container}>
              <div className={styles.row}>
                  <div className={styles.column}>
                      <h1 className={styles.header}>
                          Nedir İleri İşler?
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
