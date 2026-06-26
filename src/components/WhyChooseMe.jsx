function WhyChooseMe() {
  const reasons = [
    { title: "Responsive Design", icon: "fa-mobile-alt", desc: "Websites that look great on all devices." },
    { title: "Clean Code", icon: "fa-code", desc: "Maintainable and scalable code architecture." },
    { title: "Modern UI", icon: "fa-paint-brush", desc: "Latest design trends for better engagement." },
    { title: "Performance Focus", icon: "fa-tachometer-alt", desc: "Optimized loading times and smooth interactions." },
    { title: "SEO Friendly", icon: "fa-search", desc: "Built to rank well in search engines." },
    { title: "User-Centered", icon: "fa-users", desc: "Intuitive navigation and accessibility." }
  ]

  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute right-0 top-0 w-64 h-64 bg-white rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-white rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Me?</h2>
          <div className="w-20 h-1 bg-white mx-auto rounded"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20 hover:bg-opacity-20 transition-colors">
              <div className="text-3xl mb-4"><i className={`fas ${reason.icon}`}></i></div>
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-blue-100">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseMe
