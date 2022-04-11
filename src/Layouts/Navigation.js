import React from 'react'

import { Link } from 'react-router-dom'
import style from './layout.module.css'

export const Navigation = () => {
  return (
    <div className={style.header}>
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-auto">
                        <img src="/images/logo.png" alt="Logo BCR"/>
                    </div>
                    <div className="col-auto d-lg-none">Menu</div>
                    <div className="col-auto d-none d-lg-block">
                        <ul className="nav-menu list-inline mb-0">
                            <li className="list-inline-item"><Link to="/" className={style.a}> Our Services</Link></li>
                            <li className="list-inline-item"><Link to="/" className={style.a}>Why Us</Link></li>
                            <li className="list-inline-item"><Link to="/" className={style.a}>Testimonial</Link></li>
                            <li className="list-inline-item"><Link to="/" className={style.a}>FAQ</Link></li>
                            <li className="list-inline-item"><Link to="/" className={`${style.a}, ${style.register}`}>Register</Link></li>
                        </ul>                    
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Navigation