function Skills() {
    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
    ];
  return (
    <div>
      <h2>My Skills</h2>
      <ul>
        {skills.map((skill) => (
            <li key ={skill}>{skill}</li>
        ))}
        </ul>
    </div>
  );
}


export default Skills;