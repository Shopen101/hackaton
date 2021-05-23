import React from 'react'
import logo4 from '../assets/logo4.png'
import { Link } from 'react-router-dom'

import { ButtonReg } from '../components'

function Header() {
    return (
        <header>
            <div className="logo">
                <img className="logoMain" src={logo4} alt="logo1" />
            </div>
            <Link to="/auth" className="noneBorder">
                <ButtonReg text={'Войти'} type={'primary'} />
            </Link>
            <Link to="/Signup" className="noneBorder">
                <ButtonReg text={'Зарегистрироваться'} type={'secondary'} />
            </Link>

            <div className="description description--one">
                <p>Творчество в людях!</p>
            </div>
            <div className="description description--two">
                <p>Арт-пространство</p>
            </div>
        </header>
    )
}

export default Header
