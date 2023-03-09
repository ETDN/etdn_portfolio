import * as React from "react";
import { NavLink } from "react-router-dom";
import "../CSS/Navbar.css";
import { FiMenu } from "react-icons/fi";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavBarOpen: false,
    };
  }

  toggleNavBarOpen = () => {
    this.setState((prevState) => ({
      isNavBarOpen: !prevState.isNavBarOpen,
    }));
  };

  closeNavBar = () => {
    this.setState({ isNavBarOpen: false });
  };

  render() {
    let about = null;
    let projects = null;
    let contact = null;

    about = (
      <NavLink to="/about" onClick={() => this.closeNavBar()}>
        About me
      </NavLink>
    );

    contact = (
      <NavLink to="/contact" onClick={() => this.closeNavBar()}>
        Contact
      </NavLink>
    );
    projects = (
      <NavLink to="/projects" onClick={() => this.closeNavBar()}>
        Projects
      </NavLink>
    );

    //initial navbar and icon state
    let navbar = (
      <>
        <NavLink to="/home">
          {/* <img className="navImage" src={icon} alt="logo" /> */}
        </NavLink>
        <button
          className="hamburger"
          alt="logo"
          onClick={() => this.toggleNavBarOpen()}
        >
          <FiMenu />
        </button>
        <nav
          className={this.state.isNavBarOpen ? "appBar" : "appBar appBarClosed"}
        >
          <div className="container-fluid">
            <ul className="nav navbar-nav">
              {contact}
              {projects}
              {about}
            </ul>
          </div>
        </nav>
      </>
    );

    return <div id="navBarDiv">{navbar}</div>;
  }
}

export default Nav;
