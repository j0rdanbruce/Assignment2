import { Component } from "react";

class WorkExperience extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="experience-container">
        <p class="section-left" style={{fontWeight: "bold"}} >Work Experience</p>
        <div class="section-right jobs-container">
          <div id="job-1">
            <p class="job-title">{this.props.job1.title}</p>
            <p class="job-description">{this.props.job1.description}</p>
          </div>
          <div id="job-2">
            <p class="job-title">{this.props.job2.title}</p>
            <p class="job-description">{this.props.job2.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkExperience;