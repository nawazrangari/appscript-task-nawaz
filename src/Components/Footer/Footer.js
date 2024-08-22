import React from "react";
import "./Footer.css";
// import './Header.css';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="column column-3">
            <h3 className="title">BE THE FIRST TO KNOW</h3>
            <p className="description">Sign up for updates from mettā muse.</p>
            <div className="subscribe-form">
              <input type="email" placeholder="Enter your e-mail..." />
              <button>SUBSCRIBE</button>
            </div>
          </div>

          <div className="column column-2">
            <h3 className="title">CONTACT US</h3>
            <a className="link">
              +44 221 133 5360
            </a>
            <a className="link">
              customercare@mettamuse.com
            </a>
            <h3 className="title">
              Currency
            </h3>
            <div className="currency">
              <img
                style={{
                  height: '30px',
                  width: '30px',
                  borderRadius: '50%',
                  objectFit: 'contain',
                }}
                src="https://media.istockphoto.com/id/955320026/vector/united-states-flag-icon.jpg?s=612x612&w=0&k=20&c=H_7queZAVZk-Qp30pAbM-bfh64aO4bXBEC6ws_l6wNI=" alt="US" />
              <h4> + USD</h4>
            </div>
            <a className="link">
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </a>
          </div>

          <hr
            style={{
              border: "1px solid #ccc",
              margin: "20px 0",
              width: "100%",
              margin: "0px 50px 0px 50px",
            }}
          ></hr>
          <div className="column column-3">
            <h3 className="title">mettā muse</h3>
            <a href="#" className="link">
              About Us
            </a>
            <a href="#" className="link">
              Stories
            </a>
            <a href="#" className="link">
              Artisans
            </a>
            <a href="#" className="link">
              Boutiques
            </a>
            <a href="#" className="link">
              Contact Us
            </a>
            <a href="#" className="link">
              EU Compliances Docs
            </a>
          </div>

          <div className="column column-4">
            <h3 className="title">Quick Links</h3>
            <a href="#" className="link">
              Orders & Shipping
            </a>
            <a href="#" className="link">
              Join/Login as a Seller
            </a>
            <a href="#" className="link">
              Payment & Pricing
            </a>
            <a href="#" className="link">
              Return & Refunds
            </a>
            <a href="#" className="link">
              FAQs
            </a>
            <a href="#" className="link">
              Privacy Policy
            </a>
            <a href="#" className="link">
              Quick Links
            </a>
          </div>

          <div className="column column-5">
            <h3 className="title">Follow Us</h3>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  border: "2px solid",
                  borderradius: "90px",
                  textAlign: "center",
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  marginRight: "5px",
                }}
              >
                <div
                  style={{ width: "100%", height: "100%", marginTop: "8px" }}
                  className="instagram"
                >
                  <i className="fa-brands fa-instagram"></i>
                </div>
              </div>

              <div
                style={{
                  border: "2px solid",
                  borderradius: "90px",
                  textAlign: "center",
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  marginLeft: "5px",
                }}
              >
                <div
                  style={{ width: "100%", height: "100%", marginTop: "8px" }}
                  className="linkdin"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </div>
              </div>
              <div style={{ marginTop: "60px", marginLeft: "-85px" }}>
                <h3>mettā muse ACCEPTS</h3>
                <div className="flex-set" style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg"
                    alt="Google Pay"
                    style={{
                      background: '#ffffff',
                      width: '40px',
                      height: '20px',
                      padding: '9px',
                      border: '1px solid #ffffff',
                      borderRadius: '5px',
                      objectFit: 'contain'
                    }}
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg"
                    alt="MasterCard"
                    style={{
                      background: '#ffffff',
                      width: '40px',
                      height: '20px',
                      padding: '9px',
                      border: '1px solid #ffffff',
                      borderRadius: '5px',
                      objectFit: 'contain'
                    }}
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                    alt="PayPal"
                    style={{
                      background: '#ffffff',
                      width: '40px',
                      height: '20px',
                      padding: '9px',
                      border: '1px solid #ffffff',
                      borderRadius: '5px',
                      objectFit: 'contain'
                    }}
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg"
                    alt="Amex"
                    style={{
                      background: '#ffffff',
                      width: '40px',
                      height: '20px',
                      padding: '9px',
                      border: '1px solid #ffffff',
                      borderRadius: '5px',
                      objectFit: 'contain'
                    }}
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg"
                    alt="Apple Pay"
                    style={{
                      background: '#ffffff',
                      width: '40px',
                      height: '20px',
                      padding: '9px',
                      border: '1px solid #ffffff',
                      borderRadius: '5px',
                      objectFit: 'contain'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
