import React, { Component } from 'react';

class Header extends Component {
  render() {
      return(
        <header>
            <hr />
            <span id="vitae-label">
                <div><i className="fa fa-angle-double-right"></i></div>
                <div id="vitae-text">Curriculum Vitae</div>
                <div><i className="fa fa-angle-double-left"></i></div>
            </span>
            <hr />
            <div id="header-name">John Quincy Adams</div>
            <hr />
            <div id="contact-info">
                <div className="contact-item">
                    <div><i className="fa fa-envelope"></i></div>
                    <div className="contact-text">johnqadams@email.com</div>
                </div>
                <div className="contact-item">
                    <div><i className="fa fa-linkedin"></i></div>
                    <div className="contact-text">linkedin.com/johnadams</div>
                </div>
                <div className="contact-item">
                    <div><i className="fa fa-globe"></i></div>
                    <div className="contact-text">johnadams.com</div>
                </div>
            </div>
        </header>
      );
  }
}

export default Header;