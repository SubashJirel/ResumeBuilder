import { useState } from 'react';
import uniqid from 'uniqid';

function ExperienceForm({ experience, setExperience, toggleShow }) {
  const [formData, setFormData] = useState({
    companyName: '',
    positionTitle: '',
    description: '',
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

  const handleAddExperience = () => {
    // Check for empty fields
    if (
      !formData.companyName ||
      !formData.positionTitle ||
      !formData.description ||
      !formData.startDate ||
      !formData.endDate
    ) {
      alert('All fields must be filled out');
      return;
    }
    const newExperience = {
      ...formData,
      id: uniqid(),
    };
    setExperience((prevExperience) => [...prevExperience, newExperience]);
    toggleShow();
    // console.log(newExperience);
  };
  return (
    <>
      <div className="bg-white p-4 rounded shadow max max-w-md">
        <form>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">
              Company Name:
            </label>
            <input
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="bg-[#F3F4F6] w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              type="text"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">
              Position Title:
            </label>
            <input
              name="positionTitle"
              value={formData.positionTitle}
              onChange={handleChange}
              className="bg-[#F3F4F6] w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              type="text"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="bg-[#F3F4F6] w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              type="text"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Start Date:</label>
            <input
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="bg-[#F3F4F6] w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              type="text"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">End Date:</label>
            <input
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="bg-[#F3F4F6] w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
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
              onClick={handleAddExperience}
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

export default ExperienceForm;
