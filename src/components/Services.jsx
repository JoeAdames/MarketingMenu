import Service from "./Service";
const Services = ({ services }) => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-8 text-pink-600">Our Services</h3>
        <div>
          <ul className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <li key={i}>
                <div className="text-2xl font-bold text-pink-500">
                  {service.category}
                </div>
                <Service subcategories={service.subcategories} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
