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
            href='https://www.facebook.com/chanel/'
            target='_blank'
            aria-label='Facebook'
          >
            <i class='fab fa-facebook-f' />
          </a>
          <a
            class='social-icon-link instagram'
            href="https://www.instagram.com/chanelofficial/"
            target='_blank'
            aria-label='Instagram'
          >
            <i class='fab fa-instagram' />
          </a>
          <Link
            class='social-icon-link youtube'
            to='/'
            target='_blank'
            aria-label='Youtube'
          >
            <i class='fab fa-youtube' />
          </Link>
          <a
            class='social-icon-link twitter'
            href='https://twitter.com/CHANEL?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
            target='_blank'
            aria-label='Twitter'
          >
            <i class='fab fa-twitter' />
          </a>
          <a
            class='social-icon-link linkedin'
            href='https://www.linkedin.com/in/faziletkosure/'
            target='_blank'
            aria-label='LinkedIn'
          >
            <i class='fab fa-linkedin' />
          </a>
          <a
            class='social-icon-link linkedin'
            href='https://www.linkedin.com/in/meltem-karaagac-31b9281a5/'
            target='_blank'
            aria-label='LinkedIn'
          >
            <i class='fab fa-linkedin' />
          </a>
        </div>
      </Col>
      <Col className="text-center py-4" >
        Copyright &copy; F & M
                  </Col>
      <Col className="text-right py-4 footer-text" >
        <a
          class='social-icon-link instagram'
          href='https://www.chanel.com/us/?gclid=Cj0KCQiAifz-BRDjARIsAEElyGKkzsbw71Vup_ui70XRxUYp0PvRAOcpF0riEedGjMw58hJbR4REuW0aAiwHEALw_wcB'
          target='_blank'
          aria-label='Instagram'
        >
          <i class='far fa-eye' />
        </a>
      </Col>
                 
           
          
          </Navbar>
        
    )
}

export default Footer


