import React from "react";
import NavBar from "./NavBar";
import Heading from "./Heading";
class Header extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Heading />
      </div>
    );
  }
}

export default Header;
