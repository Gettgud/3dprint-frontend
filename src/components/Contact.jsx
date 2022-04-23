import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col">
            <h1 className="font-weight-light">Contact</h1>
            <p>
              Etsy:{" "}
              <a href="https://www.etsy.com/shop/NTCountryCreations">
                https://www.etsy.com/shop/NTCountryCreations
              </a>
            </p>
            <p>
              Facebook:{" "}
              <a href="https://www.facebook.com/NT-Country-Creations-106571808495592">
                https://www.facebook.com/NT-Country-Creations-106571808495592
              </a>
            </p>
            <p>Email: example@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
