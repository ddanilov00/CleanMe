import React, { Component }  from 'react';
import Header from '../../components/Main/Header/Header';
import Jumbotron from '../../components/Main/Jumbotron/Jumbotron';
import Reason from '../../components/Main/Reasons/Reasons';
import GetQuote from '../../components/Main/GetQuote/GetQuote';
import Services from '../../components/Main/Services/Services';
import Packages from '../../components/Main/Packages/Packages';
import Promo from '../../components/Main/Promo/Promo';
// import QuoteForm from '../../components/Main/QuoteForm/QuoteForm';
import Footer from '../../components/Main/Footer/Footer';
import Calculator from '../../components/Main/Calculator/Calculator';
import { useEffect, useState } from 'react';

function MainPage() {
    const [yPosition, setY] = useState(window.pageYOffset);
  
    useEffect(() => {
    console.log('this is the window', window.pageYOffset);
    // console.log()
      setY(window.pageYOffset);   
    }, [yPosition])
  
    return (
      <div className='app'>
        {/* <Header /> */}
        {/* <Promo /> */}
        <div className='max-width'>
          <Jumbotron />
          <Reason />
          <GetQuote />
          <Services />
          <Calculator />
        </div>
        <Packages/>
        {/* <QuoteForm /> */}
        <Footer />
      </div>
    );
  }
  
  export default MainPage;