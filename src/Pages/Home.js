import React, { useState } from "react"

import Hero from '../Components/Hero/Hero'
import SearchBar from '../Components/SearchBar/SearchBar'
import Result from '../Components/Result/Result'
import style from './home.module.css'

const Home = () => {

    const [carList, setCarList] = useState([])

    return (
        <div className={style.main}>
            <Hero />
            <SearchBar setCarList={setCarList} />
            <Result  carList={carList} />
        </div>
    )
}

export default Home