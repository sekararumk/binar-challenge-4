import React from 'react'

import style from './hero.module.css'

const Hero = () => {
  return (
    <div className={style.hero}>
        <div className="container">
            <div className="row align-items-center">
                <div className={`${style['hero_description']} col-lg-6`}>
                    <h2 className={style.hero_subtitle}>Sewa Mobil Rental Terbaik di Kawasan Yogyakarta</h2>
                    <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas<br></br>terbaik dengan harga terjangkau. 
                    Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                </div>
                <div className="col-lg-6">
                    <img src="images/img_car.png" alt="" className={style.hero_image} />
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Hero