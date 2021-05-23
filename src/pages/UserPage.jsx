import React from 'react'
import logo4 from '../assets/logo4.png'
import { useDispatch, useSelector } from 'react-redux';


function UserPage() {
    const userInfo = useSelector(({ userInfo }) => userInfo.info)


    return (
        <div>
            <header>
                <div className="logo">
                    <img className="logoMain" src={logo4} alt="logo1" />
                </div>
                <div className="description description--one">
                    <p>Творчество в людях!</p>
                </div>
            </header>
            <div className="top__people">
                <div className="top__people--up">
                    <div className="wrapper">
                        <div className="user__carts">

                            {userInfo &&
                                <div className="user__cart">
                                    <div className="user__cart__ava" >
                                        <img src={userInfo.avatar} alt="avatar" />
                                    </div>
                                    <div className="user__cart--border">
                                        <h3><span className="noref">Имя:</span> {userInfo.name}</h3>
                                        <h3><span className="noref">Роль:</span> {userInfo.role}</h3>
                                        <h3><span className="noref">Описание:</span> {userInfo.description}</h3>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPage
