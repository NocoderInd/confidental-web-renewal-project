
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const servicesList = [
  {
    title: "General Dentistry",
    description: "Comprehensive dental care including checkups, cleanings, fillings, and preventive treatments to maintain your oral health.",
    icon: "🦷",
  },
  {
    title: "Cosmetic Dentistry",
    description: "Enhance your smile with our cosmetic services including teeth whitening, veneers, and smile makeovers.",
    icon: "✨",
  },
  {
    title: "Dental Implants",
    description: "Replace missing teeth with dental implants that look, feel and function just like your natural teeth.",
    icon: "🔧",
  },
  {
    title: "Orthodontics",
    description: "Straighten your teeth with our modern orthodontic solutions including clear aligners and braces.",
    icon: "😁",
  },
  {
    title: "Oral Surgery",
    description: "From wisdom teeth removal to complex surgical procedures, our experienced team ensures your comfort.",
    icon: "🔬",
  },
  {
    title: "Emergency Dental Care",
    description: "Immediate dental care when you need it most, with same-day appointments for urgent dental issues.",
    icon: "🚑",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-confidental-gray">
      <div className="container mx-auto">
        <h2 className="section-heading">Our Services</h2>
        <p className="section-subheading">
          At Confidental, we offer a comprehensive range of dental services to meet all your oral health needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {servicesList.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:translate-y-[-5px] transition-all duration-300">
              <CardHeader className="bg-confidental-blue-light pb-2">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-confidental-text-light">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
