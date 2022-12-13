import React from 'react'

export default function Services() {
    return (
        <section className='services'>
            <section className='title-and-services'>
                <h2 className='services-title'>Будьте довольны услугами, которые мы предоставляем по уборке.</h2>
                <ul className='services-list-container'>
                    <li className='services-list'>
                        <img alt='cleaning supplies icons' className='services-list-image' src='https://dtweclean.wpengine.com/wp-content/uploads/2016/02/list-img2.png' />
                        <span>Уборка квартиры</span>
                    </li>
                    <li className='services-list'>
                        <img alt='cleaning supplies icons' className='services-list-image' src='https://dtweclean.wpengine.com/wp-content/uploads/2016/02/list-img3.png' />
                        <span>Уборка при переезде</span>
                    </li>
                    <li className='services-list'>
                        <img alt='cleaning supplies icons' className='services-list-image' src='https://dtweclean.wpengine.com/wp-content/uploads/2016/02/list-img5.png' />
                        <span>Мытье окон</span>
                    </li>
                    <li className='services-list'>
                        <img alt='cleaning supplies icons' className='services-list-image' src='https://dtweclean.wpengine.com/wp-content/uploads/2016/02/list-img6.png' />
                        <span>Строительная уборка</span>
                    </li>
                    <li className='services-list'>
                        <img alt='cleaning supplies icons' className='services-list-image' src='https://dtweclean.wpengine.com/wp-content/uploads/2016/02/list-img7.png' />
                        <span>
                            Уборка офиса
                        </span>
                    </li>
                </ul>
            </section>
            <section className='services-image-container'>
                <section className='services-image-transition-container'>
                    {/* <div className='services-main-image'>

                    </div> */}
                    <img alt='female cleaning windows' className='services-main-image' src='https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' />
                </section>
            </section>
        </section>
    )
}