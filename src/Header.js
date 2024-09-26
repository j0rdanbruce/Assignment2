import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div class="name-container">
          <p style={{fontWeight: "bold"}}>{this.props.name}</p>
          <p>{this.props.occupation}</p>
        </div>
        <div class="contact-container">
          <ul>
            <li>Email: <a href="#">{this.props.email}</a></li>
            <li>Web: {this.props.web}</li>
            <li>Mobile:{this.props.mobile}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;