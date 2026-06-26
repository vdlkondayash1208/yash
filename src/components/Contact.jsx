import { useState } from 'react'
import { personalInfo } from '../data'

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
  
  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Thank you for your message! I will get back to you soon.")
    setFormState({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    setFormState({...formState, [e.target.name]: e.target.value})
  }

  return (
    <section id="contact" className="py-20 bg-white dark:bg-darkCard">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-400">Have a project in mind? Let's discuss.</p>
          <div className="w-20 h-1 bg-primary mx-auto rounded mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 dark:text-white">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-primary dark:text-blue-300 text-xl flex-shrink-0">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <h4 className="font-bold dark:text-gray-200">Phone</h4>
                  <a href={`tel:${personalInfo.phone}`} className="text-gray-600 dark:text-gray-400 hover:text-primary">{personalInfo.phone}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-primary dark:text-blue-300 text-xl flex-shrink-0">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 className="font-bold dark:text-gray-200">Email</h4>
                  <a href={`mailto:${personalInfo.email}`} className="text-gray-600 dark:text-gray-400 hover:text-primary">{personalInfo.email}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-primary dark:text-blue-300 text-xl flex-shrink-0">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4 className="font-bold dark:text-gray-200">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="font-bold mb-4 dark:text-white">Follow Me</h4>
              <div className="flex gap-4">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-primary transition-colors"><i className="fab fa-github"></i></a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-600 transition-colors"><i className="fab fa-linkedin-in"></i></a>
                <a href={personalInfo.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-pink-600 text-white flex items-center justify-center hover:bg-pink-500 transition-colors"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-dark p-8 rounded-xl shadow-lg">
            <div className="mb-6">
              <label className="block text-sm font-bold mb-2 dark:text-gray-200">Name</label>
              <input type="text" name="name" required onChange={handleChange} value={formState.name} className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition-colors dark:text-white" placeholder="Your Name" />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-bold mb-2 dark:text-gray-200">Email</label>
              <input type="email" name="email" required onChange={handleChange} value={formState.email} className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition-colors dark:text-white" placeholder="Your Email" />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-bold mb-2 dark:text-gray-200">Subject</label>
              <input type="text" name="subject" required onChange={handleChange} value={formState.subject} className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition-colors dark:text-white" placeholder="Subject" />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-bold mb-2 dark:text-gray-200">Message</label>
              <textarea name="message" required onChange={handleChange} value={formState.message} rows="4" className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition-colors dark:text-white" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="w-full py-3 bg-primary hover:bg-blue-600 text-white font-bold rounded-lg transition-colors shadow-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
