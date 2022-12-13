import React from 'react';
import PackagesCard from '../PackagesCard/PackagesCard';
export default function Packages() {
    return (
        <section className='packages'>
            <h2 className='packages-title'>Пакеты услуг</h2>
            <p className='packages-desc'>
                Мы собрали для вас самые выгодные предложения. <br />
                Спешите, акции ограничены
            </p>
            <section className='packages-cards-container'>
                <section className='max-width packages-cards-max-width-container'>
                    <PackagesCard
                        title={'Разовая уборка'}
                        price={'15000'}
                        terms={'Одноразовое посещение. Может взиматься дополнительная плата.'}
                        desc={'За следующий заказ: 11000 руб.'}
                    />
                    <PackagesCard
                        isDefault={true}
                        title={'Самый выгодный'}
                        price={'8600'}
                        terms={'Еженедельно. Может потребоваться дополнительная плата.'}
                        desc={'От 8600 рублей.'}
                    />
                    <PackagesCard
                        title={'Дважды в неделю'}
                        price={'8900'}
                        terms={'Дважды в неделю. Может взиматься дополнительная плата.'}
                        desc={'От 8900 рублей.'}
                    />
                    <PackagesCard
                        title={'Ежемесячно'}
                        price={'9800'}
                        terms={'Ежемесячно. Может взиматься дополнительная плата.'}
                        desc={'От 9800 рублей.'}
                    />
                </section>
            </section>

        </section>
    )
}

