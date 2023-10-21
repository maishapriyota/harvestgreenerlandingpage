import React from 'react';

function Footer() {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3><img src="images/logo_invert.png" className="center" alt="Harvest Greener Logo" /></h3>
        <p className="footer-links">
          <a href="#">Home</a>
          ·
          <a href="#">Blog</a>
          ·
          <a href="#">Pricing</a>
          ·
          <a href="#">About</a>
          ·
          <a href="#">Faq</a>
          ·
          <a href="#">Contact</a>
        </p>
        <p className="footer-company-name">&copy; 2023 Harvest Greener. All rights reserved.</p>
        <div className="footer-icons">
          <a href="#"><img src="images/facebook.png" className="social_icon" alt="Facebook" /></a>
          <a href="#"><img src="images/twitter.png" alt="Twitter" /></a>
          <a href="#"><img src="images/linkedin.png" alt="LinkedIn" /></a>
          <a href="#"><img src="images/instagram.png" alt="Instagram" /></a>
        </div>
      </div>
      <div className="footer-right">
        <form action="#" method="post">
          <p>Contact Us:</p>
          <br />
          <br />
          <input type="text" name="email" placeholder="Email" />
          <textarea name="message" placeholder="Message"></textarea>
          <button className="button2">Send</button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;