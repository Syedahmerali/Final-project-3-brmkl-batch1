import Head from 'next/head';

const Skills = () => {
  const codingSkills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 65 },
    { name: 'Python', level: 50 },
  ];

  const professionalSkills = [
    { name: 'Web Design', level: 95 },
    { name: 'Web Development', level: 67 },
    { name: 'Graphic Design', level: 95 },
    { name: 'SEO Marketing', level: 60 },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-950 to-sky-700">
      <div className="bg-sky-800 rounded-lg p-8 shadow-xl text-white max-w-5xl w-full">
        <h1 className="text-4xl font-bold mb-8 text-center">
          My <span className="text-blue-400">Skills</span>
        </h1>
        <div className="grid grid-cols-1 outline outline-8 outline-sky-700 outline-offset-8 border-8 hover:devide-solid cursor-pointer border-sky-950 drop-shadow-lg rounded-lg md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Coding Skills</h2>
            {codingSkills.map((skill, index) => (
              <div key={index} className="mb-12 rounded-lg">
                <div className="flex justify-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-sky-950 outline-double outline-offset-8 outline-sky-500 rounded-full h-2.5">
                  <div
                    className="bg-blue-400 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Professional Skills</h2>
            {professionalSkills.map((skill, index) => (
              <div key={index} className="mb-12">
                <div className="flex justify-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-sky-950 outline-double outline-offset-8 outline-sky-500 rounded-full h-2.5">
                  <div
                    className="bg-blue-400 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
