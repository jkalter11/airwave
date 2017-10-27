import React from 'react';

class NavBarDropdownTV extends React.Component {

  render(){
    return (
      <span className="banner-dropdown">
        <button className="dropdown-button">
          TV
        </button>
        <div className="dropdown-content">
          <div className="dropdown-content-holder">
            <button className="dropdown-content-link">
              Popular
            </button>
            <button className="dropdown-content-link">
              Recently Added
            </button>
            <button className="dropdown-content-link">
              Genres
            </button>
            <button className="dropdown-content-link">
              Staff Picks
            </button>
            <button className="dropdown-content-link">
              Networks
            </button>
          </div>
        </div>
      </span>
    );
  }
}

export default NavBarDropdownTV;