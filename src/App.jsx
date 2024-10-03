import './App.css';
import { useState } from 'react';
import PersonalDetails from './components/personal-info/PersonalDetails';
import ResumePreview from './components/previewRightSide/ResumePreview';

import exampleData from './example-data';

function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);
  function handlePersonalInfoChange(e) {
    const { key } = e.target.dataset;
    // console.log(e.target.dataset); // input ma maile data-key="email" bhanera yesari data-key rakheko chhu
    // //so e.target.dataset gives me object like this {key: 'email'}
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
    //[key] is a computed property name in JavaScript. It allows you to dynamically set the property name based on the value of key.
  }
  return (
    <>
      <div className="border-2 border-black bg-orange-500 text-black grid grid-cols-5 ">
        <div className="border-2 border-green-400 bg-blue-400 col-span-2">
          Edit side
          <PersonalDetails
            onChange={handlePersonalInfoChange}
            fullName={personalInfo.fullName}
            email={personalInfo.email}
            phoneNumber={personalInfo.phoneNumber}
            address={personalInfo.address}
          />
        </div>
        <div className=" col-span-3">
          Preview side
          <ResumePreview personalInfo={personalInfo} />
        </div>
      </div>
    </>
  );
}

export default App;
