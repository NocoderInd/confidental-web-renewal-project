
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-white">
      <div className="container mx-auto">
        <h2 className="section-heading">Contact Us</h2>
        <p className="section-subheading">
          We'd love to hear from you. Reach out to schedule an appointment or ask any questions you may have.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="w-full"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(123) 456-7890"
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="service" className="block text-sm font-medium">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Select a Service</option>
                  <option value="general">General Dentistry</option>
                  <option value="cosmetic">Cosmetic Dentistry</option>
                  <option value="implants">Dental Implants</option>
                  <option value="orthodontics">Orthodontics</option>
                  <option value="surgery">Oral Surgery</option>
                  <option value="emergency">Emergency Care</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full"
                />
              </div>
              <Button type="submit" className="btn-primary w-full">
                Send Message
              </Button>
            </form>
          </div>

          <div className="lg:pl-10">
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-confidental-blue shrink-0 mr-3" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-confidental-text-light">(123) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-confidental-blue shrink-0 mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-confidental-text-light">info@confidental.co.nz</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-confidental-blue shrink-0 mr-3" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-confidental-text-light">123 Dental Street, Auckland, New Zealand</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-confidental-blue shrink-0 mr-3" />
                  <div>
                    <p className="font-medium">Hours</p>
                    <p className="text-confidental-text-light">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-confidental-text-light">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="text-confidental-text-light">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg h-[300px]">
              <iframe
                title="Confidental Dental Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.7460767412503!2d174.7631903!3d-36.8484597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47e76f540001%3A0x500ef6143a2d5b0!2sAuckland%2C%20New%20Zealand!5e0!3m2!1sen!2sus!4v1652160340424!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
