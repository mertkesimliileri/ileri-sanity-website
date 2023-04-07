import React from 'react'
import Link from 'next/link'
import styles from "./navbar.module.css"
import { useState, useEffect } from 'react'
import { IoCloseOutline } from "@react-icons/all-files/io5/IoCloseOutline";
import { useRouter } from 'next/router';
import tr from "../Locales/tr";
import en from "../Locales/en";


const Navbar = () => {
    const [windowWidth, setWindowWidth] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [select, setSelect] = useState(null);
    const [display, setDisplay] = useState("hidden");
    const router = useRouter();
    const { locale, defaultLocale } = router;

    const t = locale === "en" ? en : tr;

    const handleLocale = (e) => {
        let locale = e.target.value;
        if(locale === "tr") {
            locale = "en"
            router.push("/", "/", { locale });
        } else {
            locale = "tr"
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

    const toggleNavbar = () => {
        setDisplay("visible");
    }

    const toggleNavbarClose = () => {
        setDisplay("hidden");
    }

    const localeOptions = [
        { value: 'en', label: 'EN' },
        { value: 'tr', label: 'TR' },
    ];

    return (
        <header className={styles.navbar}>
            <div className={styles.containerFluid}>
                <a className={styles.navbarBrand} href="/">
                    <img
                        className={styles.navbarBrandImg}
                        alt="İleriİşler"
                        src='https://www.ileriisler.com/storage/temp/public/imageresizecache/687/218/d69/687218d69094c0711c78d7da917b41022d25f6a2c85968887e62e96df8b2d5c3.png'>
                    </img>
                </a>
                {isVisible ?
                    <button onClick={toggleNavbar} className={styles.navbarToggler}>
                        <span className={styles.navbarTogglerIcon}></span>
                    </button> :
                    <div className={styles.navbarCollapse}>
                        <Link className={styles.navLink} href="/" exact>
                            <a className={styles.navLink}>{t.home}</a>
                        </Link>
                        <Link className={styles.navLink} href="/about">
                            <a className={styles.navLink}>{t.about}</a>
                        </Link>
                        <Link className={styles.navLink} href="/projects">
                            <a className={styles.navLink}>{t.works}</a>
                        </Link>
                        <Link className={styles.navLink} href="/career">
                            <a className={styles.navLink}>{t.join}</a>
                        </Link>
                        <Link className={styles.navLink} href="/contact">
                            <a className={styles.navLink}>{t.contact}</a>
                        </Link>
                        <button className={styles.navLinkButton} value={locale} onClick={handleLocale}>{locale} </button>

                    </div>
                }
                <div style={{ visibility: display }} className={styles.navbarm}>
                    <button onClick={toggleNavbarClose} className={styles.navbarToggler}>
                        <IoCloseOutline />
                    </button>
                    <ul className={styles.navbarNav}>
                        <Link className={styles.navmLinkActive} href="/" exact>
                            <a className={styles.navmLinkActive}>{t.home}</a>
                        </Link>
                        <Link className={styles.navmLink} href="/about">
                            <a className={styles.navmLink}>{t.about}</a>
                        </Link>
                        <Link className={styles.navmLink} href="/projects">
                            <a className={styles.navmLink}>{t.works}</a>
                        </Link>
                        <Link className={styles.navmLink} href="/career">
                            <a className={styles.navmLink}>{t.join}</a>
                        </Link>
                        <Link className={styles.navmLink} href="/contact">
                            <a className={styles.navmLink}>{t.contact}</a>
                        </Link>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Navbar