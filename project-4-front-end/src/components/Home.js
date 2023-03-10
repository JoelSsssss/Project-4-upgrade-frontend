import React from 'react';

import '../styles/home.scss';

function Home() {
  return (
    <div className='homePage'>
      <>
        <div className='image'>
          <img
            className='page-art'
            src='https://i.imgur.com/SxySWFe.jpg'
            alt='page art'
          />
        </div>
        <h1>Cardy Cards</h1>
        <h2>Make your own business Cards today!</h2>
        <p className='secret-writing'>if i got it working</p>
      </>
    </div>
  );
}

export default Home;
