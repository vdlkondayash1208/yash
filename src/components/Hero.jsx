import { personalInfo } from '../data'

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left animate-fade-up">
          <p className="text-primary dark:text-blue-400 font-semibold mb-2">Hello, I am</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            {personalInfo.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-6">
            Professional <span className="text-primary dark:text-blue-400">Web Developer</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
            I build accessible, pixel-perfect, and performant web applications using modern technologies like React.js and Tailwind CSS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#projects" className="px-8 py-3 bg-primary hover:bg-blue-600 text-white rounded-full font-semibold transition-transform transform hover:-translate-y-1 shadow-lg">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full font-semibold transition-colors">
              Contact Me
            </a>
          </div>
          <div className="mt-8 flex gap-6 justify-center md:justify-start text-2xl text-gray-600 dark:text-gray-400">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors"><i className="fab fa-github"></i></a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors"><i className="fab fa-linkedin"></i></a>
            <a href={personalInfo.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 dark:hover:text-pink-500 transition-colors"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="relative animate-float hidden md:block">
          <div className="w-80 h-80 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-full mx-auto filter blur-3xl opacity-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <img 
            src="/yash/yash.jpeg" 
            alt="Profile" 
            className="relative z-10 w-80 h-80 object-cover rounded-full mx-auto border-4 border-white dark:border-gray-800 shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
