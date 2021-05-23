import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux';
import { setCategories, setCurrCategorys } from '../redux/action'

import Header from './Header'

// photo
import cinema from '../assets/icons/1.png'
import guitar from '../assets/icons/2.png'
import voice from '../assets/icons/3.png'
import write from '../assets/icons/4.png'
import dance from '../assets/icons/5.png'
import mask from '../assets/icons/6.png'
import photo from '../assets/icons/7.png'
import paint from '../assets/icons/8.png'

import social from '../assets/icons/сообщ.png'
import events from '../assets/icons/меропр.png'
import atlas from '../assets/icons/атлас.png'

import { api } from '../config'

import Footer from './Footer'

const Dashboard = React.memo(function Dashboard() {
    const dispatch = useDispatch()
    const allCategories = useSelector(({ categories }) => categories.allCategoreis)

    const getCategories = async () => {
        await api.get('/categories')
            .then(response => dispatch(setCategories(response.data)))
    }

    const setCurrCategory = async (category) => {
        await api.get(`/categories/${category.id}/posts`)
            .then(response => dispatch(setCurrCategorys(response.data)))
    }

    useEffect(() => {
        getCategories()
    }, [])

    return (
        <div className="container dash">
            <Header />
            <div className="wrapper wrapper__column">
                <div className="wrapper__top">
                    <h2>Категории<span> - выберите интересующую вас группу</span></h2>
                </div>

                <div className="categories">
                    <div className="categories__block">
                        {
                            allCategories.map((category, index) => {
                                return (
                                    <Link to="/Category" className="noneBorder" key={`${category.name}__${index}`}>
                                        <div className="categories__block--item" onClick={() => setCurrCategory(category)} >
                                            <div className="categories__block--item--picture">
                                                <img src={category.url} alt="pictures" />
                                            </div>
                                            <p>{category.name}</p>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>

                    {/* right */}
                    <div className="categories__art">
                        <div className="categories__block--item categories__block--right">
                            <div className="categories__block--item--picture">
                                <img src={social} alt="pictures" />
                            </div>
                            <p>Сообщества</p>
                        </div>
                        <div className="categories__block--item categories__block--right">
                            <div className="categories__block--item--picture">
                                <img src={events} alt="pictures" />
                            </div>
                            <p>Мероприятия</p>
                        </div>
                        <div className="categories__block--item categories__block--right">
                            <div className="categories__block--item--picture">
                                <img src={atlas} alt="pictures" />
                            </div>
                            <p>Арт-Атлас</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
})

export default Dashboard
