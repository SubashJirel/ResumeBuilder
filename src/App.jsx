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
      <div className="border-2 border-black bg-orange-500 text-black grid grid-cols-5 h-screen">
        <div className="border-2 border-green-400 bg-blue-400 col-span-2 overflow-auto custom-scrollbar h-screen">
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
        <div className="border-2 border-pink-600 col-span-3 bg-slate-500 flex flex-col space-y-4">
          Preview side
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
