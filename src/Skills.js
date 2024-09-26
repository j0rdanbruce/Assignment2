import { Component } from "react";

const SkillsColumn = (props) => {
  const { skills } = props;
  return (
    <ul class="skills-col">
      {skills.map(skill => {
        return (
          <li>{skill}</li>
        );
      })}
    </ul>
  );
}

class Skills extends Component {
  render() {
    return (
      <div class="skills-container">
        <p class="section-left" style={{fontWeight: "bold"}} >Key Skills</p>
        <div class="section-right skills-column-container">
          <SkillsColumn skills={this.props[0]} />
          <SkillsColumn skills={this.props[1]} />
          <SkillsColumn skills={this.props[2]} />
        </div>
      </div>
    );
  }
}

export default Skills;