import './App.css';
import { useState } from 'react';
import PersonalDetails from './components/personal-info/PersonalDetails';
import ResumePreview from './components/previewRightSide/ResumePreview';
import EducationSection from './components/education/EducationSection';
import ExperienceSection from './components/experience/ExperienceSection';

import exampleData from './example-data';

function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);
  const [experience, setExperience] = useState(
    exampleData.sections.experiences
  );
  const [education, setEducation] = useState(exampleData.sections.educations);

  function handlePersonalInfoChange(e) {
    const { key } = e.target.dataset;
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
  }

  return (
    <>
      <div className=" h-screen bg-[#EEF1F3]  relative">
        <div className=" bg-[#EEF1F3] overflow-auto custom-scrollbar h-screen  fixed w-[400px]">
          <PersonalDetails
            onChange={handlePersonalInfoChange}
            fullName={personalInfo.fullName}
            email={personalInfo.email}
            phoneNumber={personalInfo.phoneNumber}
            address={personalInfo.address}
          />
          <EducationSection education={education} setEducation={setEducation} />
          <ExperienceSection
            experience={experience}
            setExperience={setExperience}
          />
        </div>
        <div className="  ml-[400px]  bg-[#EEF1F3] flex flex-col space-y-4">
          <ResumePreview
            personalInfo={personalInfo}
            education={education}
            experience={experience}
          />
        </div>
      </div>
    </>
  );
}

export default App;
