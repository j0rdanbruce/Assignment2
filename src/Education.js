import { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="education-container">
        <p class="section-left" style={{fontWeight: "bold"}}>Education</p>
        <div class="section-right education-list">
          <ul id="school-1">
            <li style={{fontWeight: "bold"}}>{this.props.school1.name}</li>
            <li>{this.props.school1.degree}</li>
            <li>{this.props.school1.year}</li>
            <li>{this.props.school1.gpa}</li>
          </ul>
          <ul id="school-2">
            <li style={{fontWeight: "bold"}}>{this.props.school2.name}</li>
            <li>{this.props.school2.degree}</li>
            <li>{this.props.school2.year}</li>
            <li>{this.props.school2.gpa}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Education;