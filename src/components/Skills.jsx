import { skillsData } from '../data'

function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {skillsData.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="font-medium dark:text-gray-200">{skill.name}</span>
                <span className="text-primary">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div 
                  className="bg-primary h-3 rounded-full transition-all duration-1000 ease-out" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
