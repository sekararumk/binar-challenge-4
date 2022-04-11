import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import style from './home.module.css'

const InfoMobil = () => {

    const param = useParams()  
    const [car, setCar] = useState(null)

    useEffect(() => {
        fetch(`https://rent-cars-api.herokuapp.com/admin/car/${param.id}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            setCar({...data})
        })
    },[])

    return (
      <div>
        { car !== null && 
        <>
        <div className={style.bg}></div>
          <div className="result">
            <div className="container">
                <div className="row align-items-center">
                    <form id="detail-car" action="/">
                        <div className={style.detail_container}>
                            <div className="col">
                                <h6 className={style.search_title}>Pencarianmu</h6>
                                <div className="col d-flex">
                                    <div className={style.detail_group}>
                                        <label for="tipe-driver">Tipe Driver</label>
                                        <select name="tipe-driver" id="tipe-driver">
                                        <option value="">Pilih Tipe Driver</option>
                                        </select>
                                    </div>
                                    <div className={style.detail_group}>
                                        <label for="tanggal">Tanggal</label>
                                        <select name="tanggal" id="tanggal">
                                        <option value="">Pilih Tanggal</option>
                                        </select>
                                    </div>
                                    <div className={style.detail_group}>
                                        <label for="waktu">Waktu Jemput/Ambil</label>
                                        <select name="waktu" id="waktu">
                                        <option value="">Pilih Waktu</option>
                                        </select>
                                    </div>
                                    <div className={style.detail_group}>
                                        <label for="jumlah-penumpang">Jumlah Penumpang (optional)</label>
                                        <select name="jumlah-penumpang" id="jumlah-penumpang">
                                        <option value="">Jumlah Penumpang</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>   
                </div>
            </div>
          </div>
          <div className={style.wrapper}>
            <div className="container">
              <div className="row">
                <div className="col-7">
                  <div className={style.description}>
                    <h6 className={style.about}>Tentang Paket</h6>
                    <div className={style.include}>
                        <h6 className={style.title}>Include</h6>
                        <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                        <li>Sudah termasuk bensin selama 12 jam</li>
                        <li>Sudah termasuk Tiket Wisata</li>
                        <li>Sudah termasuk pajak</li>
                    </div>
                    <div className={style.exclude}>
                        <h6 className={style.title}>Exclude</h6>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                    </div>
                    <h6 className={style.about}>Refund, Reschedule, Overtime</h6>
                    <div className={style.list_detail}>
                      <li> Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                      <li> Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                      <li> Tidak termasuk akomodasi penginapan</li>
                      <li> Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                      <li> Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                      <li> Tidak termasuk akomodasi penginapan</li>
                      <li> Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                      <li> Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                      <li> Tidak termasuk akomodasi penginapan</li>
                    </div>
                  </div>
                  <button className={style.btn_pembayaran} type="button">Lanjutkan Pembayaran</button>
                </div>
                <div className="col-5">
                    <div className={style.detail_car}>
                        <img src={car.image} className={style.car_image}/>
                        <h6 className={style.car_title}>{`${car.name} / ${car.category}`}</h6>
                        <div className={style.car_description}>
                          <img src="/images/users.png" className={style.icon_user}/> 4 Orang 
                          <img src="/images/fi_settings.png" className={style.icon_setting}/> Manual
                          <img src="/images/calendar.png" className={style.icon_calender}/> Tahun 2020
                        </div>
                        <h6 className={style.total}>Total</h6>
                        <h6 className={style.price}>{`Rp ${car.price}`}</h6>
                        <button className={style.btn_lanjutkan} type="button">Lanjutkan Pembayaran</button>
                    </div>
                </div>
              </div>
          </div>
        </div>
      </>
        }  
      </div>
    )
}

export default InfoMobil