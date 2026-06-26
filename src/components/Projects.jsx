import { useState } from 'react'
import { projectsData, categories } from '../data'

function Projects() {
  const [filter, setFilter] = useState("All")
  const [visibleProjects, setVisibleProjects] = useState(6)

  const filteredProjects = projectsData.filter(project => 
    filter === "All" || project.category === filter
  )

  const loadMore = () => {
    setVisibleProjects(prev => prev + 6)
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-darkCard">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">My Recent Work</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setFilter(cat); setVisibleProjects(6) }}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === cat 
                ? 'bg-primary text-white shadow-lg transform scale-105' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.slice(0, visibleProjects).map((project) => (
            <div key={project.id} className="bg-white dark:bg-dark rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 group">
              <div className="relative overflow-hidden h-48">
                <img 
                  src={`https://picsum.photos/seed/${project.title.replace(/\s/g, '')}/600/400`} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-gray-900 rounded-full hover:bg-primary hover:text-white transition-colors">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  {project.github && project.github !== "#" && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-gray-900 rounded-full hover:bg-gray-800 hover:text-white transition-colors">
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold dark:text-white">{project.title}</h3>
                  <span className="text-xs font-semibold px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
                    Live Demo
                  </a>
                  {project.github && project.github !== "#" && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleProjects < filteredProjects.length && (
          <div className="text-center mt-12">
            <button onClick={loadMore} className="px-8 py-3 bg-gray-800 dark:bg-blue-600 text-white rounded-full font-semibold hover:bg-gray-700 dark:hover:bg-blue-700 transition-colors">
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
