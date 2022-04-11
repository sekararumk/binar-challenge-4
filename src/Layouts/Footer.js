import React from 'react'

import style from './layout.module.css'

const Footer = () => {
  return (
    <div className={style.footer}>
            <div className="container">
                <div className={`row ${style['hero_subtitle']}`}>
                    <div className="col-12 col-lg-4 footer-1">
                        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                        <p>binarcarrental@gmail.com</p>
                        <p>081-233-334-808</p>
                    </div>
                    <div className="col-12 col-lg-2 footer-2">
                        <p>Our Services</p>
                        <p>Why Us</p>
                        <p>Testimonial</p>
                        <p>Register</p>
                    </div>
                    <div className="col-12 col-lg-4 footer-3">
                        <p>Connect With Us</p>
                        <img src="/images/icon_facebook.png" alt="" className={style.img_fluid} />
                        <img src="/images/icon_instagram.png" alt="" className={style.img_fluid} />
                        <img src="/images/icon_twitter.png" alt="" className={style.img_fluid} />
                        <img src="/images/icon_mail.png" alt="" className={style.img_fluid} />
                        <img src="/images/icon_twitch.png" alt="" className={style.img_fluid} />
                    </div>
                    <div className="col-12 col-lg-2 footer-4">
                        <p>Copyright Binar 2022</p>
                        <img src="/images/logo.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Footer