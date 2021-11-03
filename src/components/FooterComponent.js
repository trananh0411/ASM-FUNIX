import React from "react";

const Footer = () => {
  return (
    <div className="bg-info mt-4">
      <div className="container">
        <div className="row row-content">
          <div className="col-12 col-lg-6">
            <h3 className="pt-3">Location Information</h3>
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
            </address>
          </div>
          <div className="col-12 col-lg-6">
            <h5 className="pb-2 pt-4">Contact us: </h5>
            <div className="">
              <div className="btn-group" role="group">
                <a
                  role="button"
                  className="btn btn-secondary"
                  href="tel:+85212345678"
                >
                  <i className="fa fa-phone"></i> Call
                </a>
                <a role="button" className="btn btn-primary">
                  <i className="fa fa-skype"></i> Skype
                </a>
                <a
                  role="button"
                  className="btn btn-success"
                  href="mailto:confusion@food.net"
                >
                  <i className="fa fa-envelope-o"></i> Email
                </a>
              </div>
            </div>
            <div>
              <i className="fa fa-phone pt-3"></i> +852 1234 5678
              <br />
              <i className="fa fa-fax"></i> +852 8765 4321
              <br />
              <i className="fa fa-envelope"></i>
              <a
                href="mailto:confusion@food.net"
                style={{ textDecoration: "none", color: "black" }}
                >
                confusion@food.net
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
