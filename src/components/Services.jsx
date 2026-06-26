import { servicesData } from '../data'

function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">My Services</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">I offer a wide range of web development services tailored to meet your specific needs.</p>
          <div className="w-20 h-1 bg-primary mx-auto rounded mt-4"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-white dark:bg-darkCard p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-b-4 border-transparent hover:border-primary">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-300 rounded-full flex items-center justify-center text-2xl mb-6">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
