import React from 'react';
import icon11 from '../../images/icon11.svg';
import icon12 from '../../images/icon12.svg';
import icon13 from '../../images/icon13.svg';
import icon14 from '../../images/icon14.svg';

export default function Reason(){
    return (
        <div className='reasons'>
            <div className='reason'>
                <div className='image-container reason-red-border'>
                    <img alt='cleaning supplies icon' className='reason-image' src={icon11} />
                </div>
                <p className='reason-text reason-red-text'>Сухая уборка</p>
            </div>
            <div className='reason reason-blue'>
                <div className='image-container  reason-red-border'>
                    <img alt='cleaning supplies icon' className='reason-image' src={icon12} />
                </div>
                <p className='reason-text reason-red-text'>Стирка</p>
            </div>
            <div className='reason'>
                <div className='image-container reason-red-border'>
                    <img alt='cleaning supplies icon' className='reason-image' src={icon13} />
                </div>
                <p className='reason-text reason-red-text'>Влажная уборка</p>
            </div>
            <div className='reason'>
                <div className='image-container reason-red-border'>
                    <img alt='cleaning supplies icon' className='reason-image' src={icon14} />
                </div>
                <p className='reason-text reason-red-text'>Химчистка</p>
            </div>
        </div>
    )
}