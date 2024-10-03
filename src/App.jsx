import './App.css';
import { useState } from 'react';
import PersonalDetails from './components/personal-info/PersonalDetails';

import exampleData from './example-data';

function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);
  function handlePersonalInfoChange(e) {
    const { key } = e.target.dataset;
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
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
        <div className="border-2 border-green-400 bg-blue-400 col-span-3">
          Preview side
        </div>
      </div>
    </>
  );
}

export default App;
