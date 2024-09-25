import './App.css';
import { Component } from 'react';

//component imports go here
import Header from './Header';
import PersonalProfile from './PersonalProfile';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import Education from './Education';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: resumeData.headerData,
      profile: resumeData.personalData,
      work: resumeData.workExp,
      skills: resumeData.skills,
      education: resumeData.education
    }
  }

  render() {
    return (
      <div className="App">
        <Header {...this.state.header} />
        <PersonalProfile {...this.state.profile} />
        <WorkExperience {...this.state.work} />
        <Skills {...this.state.skills} />
        <Education {...this.state.education} />
      </div>
    );
  }
  
}

const resumeData = {
  headerData: {
    name: "Zh Rimel",
    occupation: "Data Scientist",
    email: "abc@gmail.com",
    web: "abc.github.io/abc",
    mobile: "01234567890"
  },
  personalData: {
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\
            enim ad minim veniam, quis nostrud exercitation ullamco laboris\
            nisi ut aliquip ex ea commodo consequat."
  },
  workExp: {
    job1: {
      title: "Job Title at Company (August 2022 - December 2023)",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\
              enim ad minim veniam, quis nostrud exercitation ullamco laboris\
              nisi ut aliquip ex ea commodo consequat."
    },
    job2: {
      title: "Job Title 2 at Company 2 (August 2020 - December 2021)",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\
              enim ad minim veniam, quis nostrud exercitation ullamco laboris\
              nisi ut aliquip ex ea commodo consequat."
    }
  },
  skills: [
    ["A Key Skill", "A Key Skill", "A Key Skill"],
    ["A Key Skill", "A Key Skill", "A Key Skill"],
    ["A Key Skill", "A Key Skill", "A Key Skill"]
  ],
  education: {
    school1: {
      name: "New Jersey Institute of Technology",
      degree: "BS in Computer Science",
      year: "2018 - 2022",
      gpa: "GPA: 3.9"
    },
    school2: {
      name: "New Jersey Institute of Technology",
      degree: "MS in Data Science",
      year: "2022 - 2023",
      gpa: "GPA: 4.0"
    }
  }
}

export default App;
