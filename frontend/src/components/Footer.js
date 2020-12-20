import React from 'react'
// import './Footer.css';
import {Container,Row,Col,Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
      
            <Navbar  className='footer-con' variant='light'>
         
             
                  <Col className="text-center py-4" >
                  <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
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
          <Col className="text-right py-4 footer-text" >
                      Copyright &copy; ProShop
                  </Col>
                 
           
          
          </Navbar>
        
    )
}

export default Footer


