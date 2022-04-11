import React from 'react'

import Cars from './Cars'
import style from './result.module.css'

const Result = (props) => {
    return (
        <>
        <div className="result">
            <div className="container">
                <div className="row align-items-center">
                    <div className={style.card_container}>
                    {props.carList.length > 0 && props.carList.map((car, index) => {
                        return(
                            <Cars car={car} key={index} />
                        )
                    })}
                    </div>
                </div>
            </div>
        </div>
        </>
  )
}

export default Result