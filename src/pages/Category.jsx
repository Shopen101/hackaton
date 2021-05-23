import React from 'react'
import Header from './Header'
import { Find, Button } from '../components'
import star from '../assets/star.png'
import logo4 from '../assets/logo4.png'
import { useDispatch, useSelector } from 'react-redux';
import { api } from '../config'
import { setUserInfo } from '../redux/action'
import { Link, useHistory } from 'react-router-dom';


const Category = React.memo(function Category({ categoryName }) {

    const currentCategory = useSelector(({ categories }) => categories.currentCategory)
    const dispatch = useDispatch()
    const history = useHistory()

    const userClick = async (userID) => {
        await api.get(`/users/${userID}`)
            .then(response => {
                history.push('userPage')
                console.log(response.data)
                return dispatch(setUserInfo(response.data))
            })
            .catch(err => console.log(err.response))
    }

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
                        <div className="top__people--finder">
                            <div className="centered__fields">
                                <div className="top__people--find">
                                    <Find />
                                </div>
                                <Button text={'найти'} />
                            </div>
                            <h2>Топ 3 в категории <span>"Танцы"</span></h2>
                        </div>
                        <div className="user__carts">
                            {
                                currentCategory.map((post, index) => {
                                    return (
                                        <div className="user__cart">
                                            <div className="user__cart__ava" onClick={() => userClick(post.userID)} >
                                                <img src={post.avatar} alt="avatar" />
                                            </div>
                                            <h4>{post.userName}</h4>
                                            <div className="user__cart--border">
                                                <h3>{post.name}</h3>
                                                <div className="user__cart__description">
                                                    <p>{post.text}</p>
                                                </div>
                                                <div className="user__cart__rating">
                                                    <p>Рейтинг: {post.rating}</p>
                                                    <img src={star} alt="star" />
                                                </div>
                                                <div className="user__cart__dat">
                                                    <p>Дата: {new Date(post.date).toLocaleDateString()}</p>
                                                </div>
                                                {
                                                    post.attachments.length > 0 ?
                                                        <iframe
                                                            width="560"
                                                            height="315"
                                                            src={post.attachments[0].url}
                                                            title="YouTube video player"
                                                            frameborder="0"
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                            allowfullscreen></iframe>

                                                        : null
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }


                        </div>
                    </div>
                </div>
                <div className="top__people--bottom">
                    <h2>Топ 10</h2>
                </div>
            </div>
        </div>
    )
})

export default Category
