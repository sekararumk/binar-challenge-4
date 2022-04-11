import React from 'react'

import { useForm } from 'react-hook-form'

import style from './searchbar.module.css'

const SearchBar = (props) => {

    const { handleSubmit } = useForm()
    const onSubmit = (formData) =>{
        fetch('https://rent-cars-api.herokuapp.com/admin/car')
        .then(response => {
            return response.json()
        })
        .then( data => {
            props.setCarList([...data])
        })
    }

    return (
        <div className="search-box">
            <form id="search-car" onSubmit={handleSubmit(onSubmit)}>
                <div className={style.search_container}>
                    <div className={style.search_group}>
                        <label htmlFor="tipe-driver">Tipe Driver</label>
                        <select name="tipe-driver" id="tipe-driver">
                        <option value="">Pilih Tipe Driver</option>
                        <option value="">Dengan Sopir</option>
                        <option value="">Tanpa Sopir (Lepas Kunci)</option>
                        </select>
                    </div>
                    <div className={style.search_group}>
                        <label htmlFor="tanggal">Tanggal</label>
                        <input type="date" name="tanggal" id="tanggal" />
                    </div>
                    <div className={style.search_group}>
                        <label htmlFor="waktu">Waktu Jemput/Ambil</label>
                        <select name="waktu" id="waktu">
                        <option value="">Pilih Waktu</option>
                        <option value="">08.00 WIB</option>
                        <option value="">09.00 WIB</option>
                        <option value="">10.00 WIB</option>
                        <option value="">11.00 WIB</option>
                        <option value="">12.00 WIB</option>
                        </select>
                    </div>
                    <div className={style.search_group}>
                        <label htmlFor="jumlah-penumpang">Jumlah Penumpang (optional)</label>
                        <select name="jumlah-penumpang" id="jumlah-penumpang">
                        <option value="">Jumlah Penumpang</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                        </select>
                    </div>
                    <div className={style.submit}>
                        <button type="submit">Cari Mobil</button>
                    </div>
                </div>
            </form>    
        </div>
  )
}

export default SearchBar