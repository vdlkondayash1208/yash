function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-darkCard">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary rounded-lg transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <img src="/yash/yash.jpeg" alt="Coding" className="relative rounded-lg shadow-xl w-full object-cover" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 dark:text-white">Modern Web Developer & Designer</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I am Vadlakonda Yashwanth, a passionate web developer based in Telangana, India. I specialize in creating responsive, user-friendly websites that help businesses grow online. My focus is on writing clean, efficient code and delivering seamless user experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Whether it's a small business portfolio or a complex web application, I approach every project with dedication and a keen eye for detail. I stay updated with the latest trends to ensure your website is modern, fast, and secure.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <i className="fas fa-check-circle text-primary"></i>
                <span className="dark:text-gray-200">Responsive Design</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-check-circle text-primary"></i>
                <span className="dark:text-gray-200">Clean Code</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-check-circle text-primary"></i>
                <span className="dark:text-gray-200">Modern UI</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-check-circle text-primary"></i>
                <span className="dark:text-gray-200">Performance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
