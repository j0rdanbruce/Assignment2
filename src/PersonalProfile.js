import { Component } from "react";

class PersonalProfile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="profile-container">
        <p className="section-left" style={{fontWeight: "bold"}}>Personal Profile</p>
        <p className="section-right">{this.props.about}</p>
      </div>
    );
  }
}

export default PersonalProfile;