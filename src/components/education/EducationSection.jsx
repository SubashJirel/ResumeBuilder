import { useState } from 'react';
import InputGroup from '../inputGroup';
import uniqid from 'uniqid';
import { Trash2 } from 'lucide-react';
function EducationSection({ education }) {
  const [showBtnForm, setShowBtnForm] = useState('button');
  const [formData, setFormData] = useState({
    degree: '',
    schoolName: '',
    startDate: '',
    endDate: '',
  });
  const btnShow = showBtnForm == 'button';
  const formShow = showBtnForm == 'form';
  function toggleShow() {
    setShowBtnForm((prev) => (prev == 'button' ? 'form' : 'button'));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  }

  function handleEducationAdd() {
    // Check for empty fields
    if (
      !formData.degree ||
      !formData.schoolName ||
      !formData.startDate ||
      !formData.endDate
    ) {
      alert('All fields must be filled out');
      return;
    }
    const newEducation = {
      ...formData,
      id: uniqid(),
    };
    // console.log(newEducation);
    education.push(newEducation);
    toggleShow();
  }
  return (
    <>
      <h1 className="text-3xl">Education</h1>
      {education.map((val) => (
        <>
          <div className="flex items-center">
            <div className="m-3" key={val.id}>
              {val.schoolName}{' '}
            </div>
            <Trash2 />
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
        <div className="bg-white p-4 rounded shadow">
          <form>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">
                School Name:
              </label>
              <input
                name="schoolName"
                onChange={handleChange}
                value={formData.schoolName}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                type="text"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Degree:</label>
              <input
                name="degree"
                onChange={handleChange}
                value={formData.degree}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                type="text"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">
                Start Date:
              </label>
              <input
                name="startDate"
                onChange={handleChange}
                value={formData.startDate}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                type="text"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">End Date:</label>
              <input
                name="endDate"
                onChange={handleChange}
                value={formData.endDate}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                type="text"
              />
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
              <button
                type="button"
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                onClick={toggleShow}
              >
                Cancel
              </button>
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleEducationAdd}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
export default EducationSection;
