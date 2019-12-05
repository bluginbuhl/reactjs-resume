import React, { Component } from 'react';

class Header extends Component {
  render() {
      return(
        <header>
            <hr align="center"></hr>
            <span id="vitae-label">
                <div><i className="fa fa-angle-double-right"></i></div>
                <div id="vitae-text">Curriculum Vitae</div>
                <div><i className="fa fa-angle-double-left"></i></div>
            </span>
            <hr></hr>
            <div id="header-name">Benjamin R. Luginbuhl</div>

        </header>
      );
  }
}

export default Header;