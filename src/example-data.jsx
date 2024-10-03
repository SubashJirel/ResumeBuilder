import uniqid from 'uniqid';

const exampleData = {
  personalInfo: {
    fullName: 'Jay Maharjan',
    email: 'Jay.maharjan@mail.com.np',
    phoneNumber: '+977 9841 234 567',
    address: 'Kathmandu, Nepal',

    sections: {
      educations: [
        {
          degree: 'Bachelors in Computer Science',
          schoolName: 'Kathmandu University',

          startDate: '09/2017',
          endDate: '06/2021',
          location: 'Kathmandu',
          id: uniqid(),
        },
        {
          degree: "Master's Degree in IT",
          schoolName: 'Tribhuvan University',

          startDate: '08/2021',
          endDate: 'present',
          location: 'Bharatpur',

          id: uniqid(),
        },
      ],

      experiences: [
        {
          companyName: 'Tech Innovators Nepal',
          positionTitle: 'Software Engineer',
          description:
            'Worked on developing innovative software solutions, collaborating with cross-functional teams to deliver high-quality products.',
          startDate: '07/2021',
          endDate: 'present',
          location: 'Pokhara',
          id: uniqid(),
        },
        {
          companyName: 'Data Science Nepal',
          positionTitle: 'Data Analyst Intern',
          description:
            'Assisted in analyzing and interpreting data for various projects. Contributed to the development of data-driven insights and reports.',
          startDate: '05/2020',
          endDate: '08/2020',
          location: 'Chitwan',
          id: uniqid(),
        },
      ],
    },
  },
};
export default exampleData;
