import React from 'react'
import styles from "./footer.module.css"
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

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


const Footer = (props) => {
    const [windowWidth, setWindowWidth] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const { t } = useTranslation('common')
    const router = useRouter();
    const { locale } = router;
    let localeTxt;
    if(locale === "tr") {
        localeTxt= "en"
    } else {
        localeTxt ="tr"
    }

    const handleLocale = (e) => {
        if(e.target.value === "tr") {
            let locale = "tr"
            router.push("/", "/", { locale });
        } else {
            let locale = "en"
            router.push("/", "/", { locale });
        }
    }

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    },);

    useEffect(() => {
        if (windowWidth < 992) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    });

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.columnImg}>
                        <img
                            className={styles.footerBrand}
                            src='https://www.ileriisler.com/storage/temp/public/imageresizecache/687/218/d69/687218d69094c0711c78d7da917b41022d25f6a2c85968887e62e96df8b2d5c3.png'
                            alt='ileriişler'></img>
                        <p className={styles.text}>{t('footerText')}</p>
                    </div>
                    <div className={styles.column}>
                        <ul className={styles.list}>
                            <li className={styles.item}>
                                <Link className={styles.text} href="/about">
                                    {t('about')}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <ul className={styles.list}>
                            <li className={styles.item}>
                                <Link className={styles.text} href="/projects">
                                    {t('works')}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <ul className={styles.list}>
                            <li className={styles.item}>
                                <Link className={styles.text} href="/career">
                                    {t('join')}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {isVisible ?
                        <div className={styles.column}>
                            <ul className={styles.list}>
                                <li className={styles.item}>
                                    <button className={styles.navLinkButton} value={localeTxt} onClick={handleLocale}>{localeTxt} </button>
                                </li>
                            </ul>
                        </div> : undefined}
                </div>
            </div>
        </footer>
    )
}

export default Footer