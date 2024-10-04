import { useState } from 'react';
import ExperienceForm from './ExperienceForm';

import { Trash2 } from 'lucide-react';
function ExperienceSection({ experience, setExperience }) {
  const [showBtnForm, setShowBtnForm] = useState('button');

  function deleteExperience(valId) {
    const isConfirmed = window.confirm(
      'Are you sure you want to delete this Experience?'
    );

    if (isConfirmed) {
      const updatedExperience = experience.filter((val) => val.id != valId);
      setExperience(updatedExperience);
    }

    //
  }

  const btnShow = showBtnForm == 'button';
  const formShow = showBtnForm == 'form';
  function toggleShow() {
    setShowBtnForm((prev) => (prev == 'button' ? 'form' : 'button'));
  }
  return (
    <div className="ps-8 border bg-[#FFFFFF]  shadow-xl rounded-lg w-5/6 m-auto mt-4 p-4">
      <h1 className="text-2xl font-bold mb-3 mt-3">Experience</h1>
      {experience.map((val) => (
        <>
          <div className="flex items-center justify-start rounded bg-[#F3F4F6] mb-2 mr-4">
            <div className="m-3 " key={val.id}>
              <div className=" font-semibold">{val.companyName}</div>
            </div>
            <Trash2
              style={{ cursor: 'pointer' }}
              onClick={() => deleteExperience(val.id)}
            />
          </div>
        </>
      ))}
      {btnShow && (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={toggleShow}
        >
          Add
        </button>
      )}
      {formShow && (
        <ExperienceForm
          experience={experience}
          setExperience={setExperience}
          toggleShow={toggleShow}
        />
      )}
    </div>
  );
}
export default ExperienceSection;
