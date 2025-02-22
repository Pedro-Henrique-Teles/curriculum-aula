const Skills = ({ skills }) => (
    <ul className="list-unstyled">
      {skills.map((skill, index) => (
        <li key={index}>• {skill}</li>
      ))}
    </ul>
  );
  
  export default Skills;
  