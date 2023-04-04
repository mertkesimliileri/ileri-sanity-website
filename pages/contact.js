import React from 'react'
import styles from "./contact.module.css"
import { AiOutlineArrowDown } from "@react-icons/all-files/ai/AiOutlineArrowDown";
import Navbar from "../Layout/navbar"
import Footer from "../Layout/footer"
import { useForm } from "react-hook-form";


const Contact = () => {

    const { register, handleSubmit, errors, reset } = useForm();


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
                            <h1 className={styles.header}>Ulaşın bize!</h1>
                            <p className={styles.text}>Geleceğe uygun bir yazılım işiniz mi var?</p>
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
                            <h6 className={styles.phoneHeader}>ARAMAK İÇİN</h6>
                            <div className={styles.phone}>
                                <a href="#!" className={styles.number}>+90 (850) 302-1660</a>
                            </div>
                        </div>
                        <div style={{ marginTop: "3rem" }} className={styles.column}>
                            <h6 className={styles.phoneHeader}>EPOSTA YAZIN?</h6>
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
                            <h2 className={styles.contactHeader}>Kısaca yazıp mı konuşalım?</h2>
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
                                            Name
                                        </label>
                                        <input placeholder="Kim?" className={styles.input} {...register('name', { required: true })} />
                                        </div>
                                    </div>
                                    <div className={styles.formColumn}>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label} htmlFor="email">
                                            Email
                                        </label>
                                        <input placeholder="ornek@benimurunum.com" className={styles.input} {...register('email', { required: true })} />
                                    </div>
                                    </div>
                                </div>
                                <div className={styles.row}>
                                    <div className={styles.messageColumn}>
                                        <div className={styles.formGroupMsg}>
                                        <label className={styles.label} htmlFor="message">
                                            Message
                                        </label>
                                        <textarea placeholder="Şimdi şöyle bir düşümüz var..." className={styles.message} rows="5" {...register('message', { required: true })} />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.row}>
                                    <div className={styles.buttonColumn}>
                                        <button className={styles.submit} type="submit">Gönder!</button>
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