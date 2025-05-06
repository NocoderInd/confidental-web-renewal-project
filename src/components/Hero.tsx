
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-confidental-blue-light opacity-30"></div>
      <div className="absolute right-0 top-0 h-full w-1/2 bg-confidental-blue-light opacity-70 hidden lg:block"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="text-confidental-blue">Premium Dental Care</span>
              <br />For Your Entire Family
            </h1>
            <p className="text-lg md:text-xl text-confidental-text-light max-w-md mb-8">
              Experience exceptional dental care in our private, boutique dental practice conveniently located in New Zealand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary">Book Your Visit</Button>
              <Button className="btn-outline">Explore Our Services</Button>
            </div>
          </div>
          
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] animate-fade-in">
            <div className="absolute inset-0 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80" 
                alt="Dental office with modern equipment" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
