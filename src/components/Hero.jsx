import Address from "./Address";
const Hero = ({ address, hours, statement }) => {
  return (
    <section className="bg-indigo-100 py-20 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-indigo-600 mb-4">
        {statement}
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        Salon offers premium hair and waxing services.
      </p>
      <a
        href="#contact"
        className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg transition"
      >
        Book Your Appointment
      </a>
    </section>
  );
};

export default Hero;
