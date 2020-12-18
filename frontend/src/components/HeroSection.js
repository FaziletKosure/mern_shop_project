import React from 'react';
import { Button } from './Button';
import {Link} from 'react-router-dom'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/chanel.mp4' autoPlay loop muted />
      {/* <h1>BOOST YOUR CAREER</h1> */}
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          path='/'
        >
          GET STARTED
        </Button>
        <Link to='/services'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
          path='/services'
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;