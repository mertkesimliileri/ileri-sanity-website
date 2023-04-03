import React from 'react'
import styles from "./contact.module.css"
import { AiOutlineArrowDown } from "@react-icons/all-files/ai/AiOutlineArrowDown";
import Navbar from "../Layout/navbar"
import Footer from "../Layout/footer"

const Contact = () => {

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
            <section>
                <form name="contact" method="POST" data-netlify="true">
                    <div class="field">
                        <label class="label">Your Name:
                            <input class="input" type="text" name="name" />
                        </label>
                    </div>
                    <div class="field">
                        <label class="label">Your Email:
                            <input class="input" type="email" name="email" />
                        </label>
                    </div>
                    <div class="field">
                        <label for="role[]" class="label">Your Role:</label>
                        <div class="select is-multiple">
                            <select name="role[]" multiple size="2">
                                <option value="leader">Leader</option>
                                <option value="follower">Follower</option>
                            </select>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Message:
                            <textarea class="textarea" name="message"></textarea>
                        </label>
                    </div>
                    <div class="field">
                        <button class="button is-primary is-medium" type="submit">Send</button>
                    </div>
                </form>
            </section>
            <Footer />
        </>
    )
}

export default Contact