import { useState } from 'react';
import uniqid from 'uniqid';
function EducationForm({ education, toggleShow }) {
  const [formData, setFormData] = useState({
    degree: '',
    schoolName: '',
    startDate: '',
    endDate: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleAddEducation = () => {
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
  };
  return (
    <>
      <div className="bg-white p-4 rounded shadow max max-w-md">
        <form>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">School Name:</label>
            <input
              name="schoolName"
              value={formData.schoolName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              type="text"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Degree:</label>
            <input
              name="degree"
              value={formData.degree}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              type="text"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Start Date:</label>
            <input
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              type="text"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">End Date:</label>
            <input
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              type="text"
            />
          </div>
          <div className="flex justify-around">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              onClick={toggleShow}
            >
              Cancel
            </button>
            <button
              onClick={handleAddEducation}
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default EducationForm;
