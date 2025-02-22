const ExperienceItem = ({ role, company, location, date, description }) => (
    <div className="mb-3">
      <div className="d-flex justify-content-between">
        <strong>{role} - {company}</strong>
        <span>{location} | {date}</span>
      </div>
      <p>{description}</p>
    </div>
  );
  
  export default ExperienceItem;
  