import React from "react";
import "./Footer.css";
import insta from '../../images/Insta.png' ;
import linkdin from '../../images/mdi_linkedin.png'
// import './Header.css';


function Footer() {
  return (
    <footer>


<div className="container">
          <div className="row">
            <div className="column column-3">
              <h3 className="title">BE THE FIRST TO KNOW</h3>
              <p className="description">
                Sign up for updates from mettā muse.
              </p>
              <div className="subscribe-form">
                <input type="email" placeholder="Enter your e-mail..." />
                <button>SUBSCRIBE</button>
              </div>
            </div>

            <div className="column column-2">
              <h3 className="title">CONTACT US</h3>
              <a href="#" className="link">
                +44 221 133 5360
              </a>
              <a href="#" className="link">
                customercare@mettamuse.com
              </a>
              <a href="#" className="link">
                Currency
              </a>
              <a href="#" className="link">
                USD
              </a>
              <a href="#" className="link">
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
                    width: "30px",
                    borderradius: "90px",
                  }}
                >
                  <i
                    style={{ fontsize: "24px", padding: "5px 5px 5px 5px" }}
                    className="fa"
                  >
                    &#xf16d;
                  </i>
                </div>

                <div
                  style={{
                    marginleft: "10px",
                    border: "2px solid",
                    width: "30px",
                    borderradius: "90px",
                  }}
                >
                  {/* <i
                    style={{ fontsize: "24px", padding: "5px 5px 5px 5px" }}
                    className="bi bi-instagram"
                  >
                     &#xF437;
                  </i> */}
                  <div class="instagram">
                  <img src={{insta}} />
                  </div>

                  <div class="linkdin">
                  <img src={{linkdin}} />
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

    </footer>
  );
}

export default Footer;
