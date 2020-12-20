import React from 'react'
import {Col,Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
      
            <Navbar  className='footer-con' variant='light'>
         
             
                  <Col className="text-center py-4" >
                  <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href='https://www.facebook.com/chanel'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
          </Col>
          <Col className="text-center py-4" >
                      Copyright &copy; FaziShop
                  </Col>
          <Col className="text-right py-4 footer-text" >
          <Link
              class='social-icon-link instagram'
              to='/'
              // target='_blank'
              aria-label='Instagram'
            >
              <i class='far fa-eye' />
            </Link>
                  </Col>
                 
           
          
          </Navbar>
        
    )
}

export default Footer


