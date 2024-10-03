import PreviewPersonalDetails from './PreviewPersonalDetails';
function ResumePreview({ personalInfo }) {
  return (
    <div className="shadow-md h-[29.7cm] w-[21cm] preview-container">
      <div className="resume top bg-white grid h-full w-full sticky top-0 auto-rows-auto">
        <PreviewPersonalDetails personalInfo={personalInfo} />
        <div>{/* work and education */}</div>
      </div>
    </div>
  );
}
export default ResumePreview;
