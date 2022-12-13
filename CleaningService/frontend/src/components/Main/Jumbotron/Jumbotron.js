import React from 'react';
import firstSlide from '../../images/firstSlide.jpg';
import secondSlide from '../../images/secondSlide.jpg';
import thirdSlide from '../../images/thirdSlide.jpg';
import fourthSlide from '../../images/fourthSlide.jpg';

export default function Jumbotron() {
    return (
        <div className='slideshow-wrapper' tabIndex='0'>
            <div className='slideshow'>

                <div className='slideshow-image-container'>
                    <div className='content-background'></div>
                    <div className='slideshow-content'>
                        <h1 className='content-title'>Чистота - это искусство</h1>
                        <p className='content-info'>Мы гордимся своей работой. Мы одни из лучших и наиболее последовательных уборщиков в Красноярске.</p>
                    </div>
                    <img alt='People are cleaning and smelling' className='slideshow-image test' src={firstSlide} />
                </div>
                <div className='slideshow-image-container'>
                    <div className='content-background'></div>
                    <div className='slideshow-content'>
                        <h1 className='content-title'>Была безумная вечеринка?</h1>
                        <p className='content-info'>Позвоните нам, и мы сразу же вам поможем. Кроме того, в следующий раз, когда у вас будет еще одна классная вечеринка, уборка будет дешевле!</p>
                    </div>
                    <img alt='People are cleaning and smelling' className='slideshow-image' src={secondSlide} />
                </div>
                <div className='slideshow-image-container'>
                    <div className='content-background'></div>
                    <div className='slideshow-content'>
                        <h1 className='content-title'>Убираем офисы!</h1>
                        <p className='content-info'>Пожалуйста, позвоните нам, чтобы мы могли дать вам расценки!</p>
                    </div>
                    <img alt='People are cleaning and smelling' className='slideshow-image' src={thirdSlide} />
                </div>
                <div className='slideshow-image-container'>
                    <div className='content-background'></div>
                    <div className='slideshow-content'>
                        <h1 className='content-title'>Мы убираем все!</h1>
                        <p className='content-info'>Если вы хотите, чтобы мы убрали ваше помещение или выполнили любой другой индивидуальный заказ. Позвоните нам, и мы будем работать с вами, чтобы вы остались довольны!</p>
                    </div>
                    <img alt='People are cleaning and smelling' className='slideshow-image' src={fourthSlide} />
                </div>

            </div>
        </div>
    )
}