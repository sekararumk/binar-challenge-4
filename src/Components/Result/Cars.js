import React from 'react'

import { Link } from 'react-router-dom'

import style from './result.module.css'

const Cars = (props) => {
  return (
    <div className="card">
      <img src={props.car.image} className={style.image}/>
      <div className={style.card_body}>
        <p className={style.title}>{`${props.car.name} / ${props.car.category}`}</p>
        <p className={style.price}>{`Rp ${props.car.price}`} / hari</p>
        <p className={style.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className={style.detail}><img src="images/users.png" alt="user" className={style.icon} /> 4 Orang </div>
        <div className={style.detail}><img src="images/fi_settings.png" alt="user" className={style.icon} /> Manual </div>
        <div className={style.detail}><img src="images/calendar.png" alt="user" className={style.icon} /> Tahun 2020 </div>
        <Link to={`info-mobil/${props.car.id}`}>
            <button className={style.btn_pilih}>
              Pilih Mobil
            </button>
        </Link>
      </div>
    </div>
  )
}

export default Cars