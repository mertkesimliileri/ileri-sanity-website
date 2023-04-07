import React from 'react'
import styles from "./contact.module.css"
import { AiOutlineArrowDown } from "@react-icons/all-files/ai/AiOutlineArrowDown";
import Navbar from "./navbar"
import Footer from "./footer"
import { useForm } from "react-hook-form";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
      ])),
      // Will be passed to the page component as props
    },
  }
}


const Contact = () => {

    const { register, handleSubmit, errors, reset } = useForm();
    const { t } = useTranslation('common')


    const encode = (data) => {
        return Object.keys(data)
            .map(
                (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&")
    }

    const handlePost = (formData, event) => {
        fetch(`/`, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact-form", ...formData }),
        })
            .then((response) => {
                reset()
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
        event.preventDefault()
    }

    return (
        <>
            <Navbar />
            <section className={styles.banner}>
                <div className={styles.container}>
                    <div className={styles.row}>
                        <div className={styles.column}>
                            <h1 className={styles.header}>{t('contactBnrh1')}</h1>
                            <p className={styles.text}> {t('contactBnrText')}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.infoSection}>
                <div className={styles.container}>
                    <div className={styles.row}>
                        <div className={styles.column}>
                            <button className={styles.buttonCircle}>
                                <AiOutlineArrowDown />
                            </button>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.column}>
                            <h6 className={styles.phoneHeader}>{t('call')}</h6>
                            <div className={styles.phone}>
                                <a href="#!" className={styles.number}>+90 (850) 302-1660</a>
                            </div>
                        </div>
                        <div style={{ marginTop: "3rem" }} className={styles.column}>
                            <h6 className={styles.phoneHeader}>{t('email')}</h6>
                            <div className={styles.phone}>
                                <a href="#!" className={styles.number}>iletisim@ileriisler.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.contact}>
                <div className={styles.container}>
                    <div className={styles.row}>
                        <div className={styles.column}>
                            <h2 className={styles.contactHeader}>{t('formHeader')}</h2>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.column}>
                            <form
                                onSubmit={handleSubmit(handlePost)}
                                name="contact-form"
                                method="POST"
                                data-netlify="true"
                            >

                                <input type="hidden" name="form-name" value="contact-form" />
                                <input
                                    type="hidden"
                                    value="contact-form"
                                    {...register('formId', { required: true })}
                                />
                                <div className={styles.row}>
                                    <div className={styles.formColumn}>
                                        <div className={styles.formGroup}>
                                        <label className={styles.label} htmlFor="name">
                                            {t('formName')}
                                        </label>
                                        <input placeholder={t('formNameP')} className={styles.input} {...register('name', { required: true })} />
                                        </div>
                                    </div>
                                    <div className={styles.formColumn}>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label} htmlFor="email">
                                            {t('formMail')}
                                        </label>
                                        <input placeholder={t('formMailP')}  className={styles.input} {...register('email', { required: true })} />
                                    </div>
                                    </div>
                                </div>
                                <div className={styles.row}>
                                    <div className={styles.messageColumn}>
                                        <div className={styles.formGroupMsg}>
                                        <label className={styles.label} htmlFor="message">
                                            {t('formMsg')}
                                        </label>
                                        <textarea placeholder={t('formMsgP')}  className={styles.message} rows="5" {...register('message', { required: true })} />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.row}>
                                    <div className={styles.buttonColumn}>
                                        <button className={styles.submit} type="submit">{t('formButton')}</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Contact