function PreviewExperience({ experience }) {
  return (
    <>
      <h2 className="text-2xl font-bold  bg-[#EEF1F3] text-center mt-5 ml-10 mr-5 p-2">
        Professional Experience
      </h2>
      {experience.map((val) => (
        <section className="flex gap-3 ml-10 mt-2" key={val.id}>
          <div>
            <div className="flex flex-col">
              {val.startDate} - {val.endDate}
            </div>
            <div>{val.location}</div>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold">{val.companyName}</h3>
            <p>{val.positionTitle}</p>
            <p>{val.description}</p>
          </div>
        </section>
      ))}
    </>
  );
}
export default PreviewExperience;
