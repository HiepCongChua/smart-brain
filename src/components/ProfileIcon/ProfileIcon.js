import React, { Component } from "react";
import "./ProfileIcon.css";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
export class ProfileIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
    };
  }
  toggle = () => {
    this.setState((prevState) => ({ dropdownOpen: !prevState.dropdownOpen }));
  };
  render() {
    return (
      <div className="pa4 tc">
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle
            tag="span"
            data-toggle="dropdown"
            aria-expanded={this.state.dropdownOpen}
          >
            <img
              src="http://tachyons.io/img/logo.jpg"
              className="br-100 ba h3 w3 dib"
              alt="avatar"
            />
          </DropdownToggle>
          <DropdownMenu
            className="b--transparent shadow-5 dropdown-menu-right"
            style={{
              marginTop: "20px",
              backgroundColor: "rgba(255,255,255,0.5)",
            }}
          >
            <DropdownItem onClick={this.props.toggleModal}>
              View Profile
            </DropdownItem>
            <DropdownItem
              onClick={this.props.onRouteChange.bind(null, "signout")}
            >
              Sign out
            </DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </div>
    );
  }
}

export default ProfileIcon;
