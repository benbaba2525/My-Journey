import React from 'react';
import '../styles/Footer.css';


function Footer() {
    return (
      <footer className="site-footer">
         <div className="container">
         <div className="row">
         <h5>Follow Me!!</h5>
              <ul class="social-icons">
              <li><a className="facebook" href="https://www.facebook.com/ben.pornamnuay"><i className="fab fa-facebook-f"></i></a></li>
              <li><a className="github" href="https://github.com/benbaba2525"><i class="fab fa-github"></i></a></li>
              <li><a className="instagram" href="https://www.instagram.com/benbaba2525/"><i className="fab fa-instagram"></i></a></li>
              <li><a className="linkedin" href="https://www.linkedin.com/in/kanyarut-pornamnuay/"><i className="fab fa-linkedin-in"></i></a></li>
              <li><a className="portfolio" href="https://www.kanyarut.me/"><i class="fas fa-link"></i></a></li>   
            </ul>
          <div className='subscribe-form'>
           <form action="mailto:benbaba2525@gmail.com" method="post" enctype="text/plain">
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <button type="submit" value = "send"><i class="fab fa-telegram-plane"></i></button>
           </form>
          </div> 
        <hr/>
            <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by Kanyarut Pornamnuay   </p>
          
       </div>
     </div>
</footer>
    )
};

export default Footer
