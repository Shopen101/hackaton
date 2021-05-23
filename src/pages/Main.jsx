import React from 'react'
import logo from '../assets/logo1.png'
import { Dashboard } from '../pages'
import { Link } from 'react-router-dom'

function Main() {
    return (
        <>
            <div className="container--main">
                <div className="wrapper">
                    <div className="main__content">
                        <div className="logo">
                            <img src={logo} alt="logo1" />
                        </div>
                        <h1>АРТ-НАРОД</h1>
                        <h2>Творчество в людях</h2>
                        <button>
                                Начать сейчас!
                        </button>
                    </div>
                </div>
            </div>

            <Dashboard />
        </>
    )
}

export default Main
