
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const About = () => {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-confidental-blue">Confidental</span>
            </h2>
            <p className="text-confidental-text-light mb-6">
              At Confidental, we believe that dental care should be personalized, comfortable, and focused on your individual needs. Our boutique practice was founded with the vision of providing exceptional dental services in a warm, welcoming environment.
            </p>
            <p className="text-confidental-text-light mb-6">
              We've created a practice that combines the latest dental technology with a spa-like atmosphere, ensuring that your dental visits are as pleasant as they are effective. Our team of highly skilled dental professionals is committed to delivering the highest standard of care.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="text-center">
                <h3 className="text-confidental-blue text-4xl font-bold">15+</h3>
                <p className="text-confidental-text-light">Years Experience</p>
              </div>
              <div className="text-center">
                <h3 className="text-confidental-blue text-4xl font-bold">5,000+</h3>
                <p className="text-confidental-text-light">Happy Patients</p>
              </div>
              <div className="text-center">
                <h3 className="text-confidental-blue text-4xl font-bold">99%</h3>
                <p className="text-confidental-text-light">Satisfaction Rate</p>
              </div>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <Carousel className="w-full max-w-lg mx-auto">
              <CarouselContent>
                <CarouselItem>
                  <div className="overflow-hidden rounded-xl shadow-xl">
                    <AspectRatio ratio={4/3} className="bg-confidental-blue/10">
                      <div className="absolute inset-0 bg-gradient-to-tr from-confidental-blue/20 to-transparent z-10"></div>
                      <img 
                        src="https://images.unsplash.com/photo-1629909615183-141b5aadc078?auto=format&fit=crop&q=80" 
                        alt="Modern dental clinic" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-confidental-blue-dark/70 to-transparent p-6 text-white z-20">
                        <h3 className="font-bold text-lg">State-of-the-art Facilities</h3>
                      </div>
                    </AspectRatio>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="overflow-hidden rounded-xl shadow-xl">
                    <AspectRatio ratio={4/3} className="bg-confidental-blue/10">
                      <div className="absolute inset-0 bg-gradient-to-tr from-confidental-blue/20 to-transparent z-10"></div>
                      <img 
                        src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80" 
                        alt="Dental treatment" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-confidental-blue-dark/70 to-transparent p-6 text-white z-20">
                        <h3 className="font-bold text-lg">Personalized Care</h3>
                      </div>
                    </AspectRatio>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="overflow-hidden rounded-xl shadow-xl">
                    <AspectRatio ratio={4/3} className="bg-confidental-blue/10">
                      <div className="absolute inset-0 bg-gradient-to-tr from-confidental-blue/20 to-transparent z-10"></div>
                      <img 
                        src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80" 
                        alt="Dental equipment" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-confidental-blue-dark/70 to-transparent p-6 text-white z-20">
                        <h3 className="font-bold text-lg">Advanced Technology</h3>
                      </div>
                    </AspectRatio>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <div className="flex justify-center mt-4">
                <CarouselPrevious className="relative -left-0 top-0 translate-y-0 h-9 w-9" />
                <CarouselNext className="relative -right-0 top-0 translate-y-0 h-9 w-9" />
              </div>
            </Carousel>
          </div>
        </div>

        <div className="mt-16 lg:mt-24 bg-confidental-blue-light rounded-lg p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p>To provide personalized, high-quality dental care that prioritizes patient comfort and long-term oral health.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Our Approach</h3>
              <p>We combine the latest technology with a gentle touch, ensuring effective treatment with minimal discomfort.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Our Promise</h3>
              <p>To treat each patient with respect, honesty, and to always recommend what's best for your dental health.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
