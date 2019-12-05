import React, { Component } from 'react';

class Header extends Component {
  render() {
      return(
          <div id="education-block">
            <h3>Education</h3>
            <div className="education-item">
              <div id="degree">Doctor of Philosophy</div>
              <div id="specialization">Materials Chemistry</div>
              <div id="degree-date">March 4th, 1825</div>
            </div>
          </div>
      );
  }
}

export default Header;