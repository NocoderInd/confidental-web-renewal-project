
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Principal Dentist",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80",
    bio: "Dr. Johnson has over 15 years of experience in general and cosmetic dentistry. She's passionate about creating beautiful, healthy smiles.",
  },
  {
    name: "Dr. Michael Chen",
    role: "Orthodontist",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80",
    bio: "Specializing in orthodontics, Dr. Chen helps patients achieve perfectly aligned teeth with the latest techniques.",
  },
  {
    name: "Dr. Emma Williams",
    role: "Periodontist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80",
    bio: "With expertise in gum health, Dr. Williams ensures your entire mouth stays healthy and disease-free.",
  },
  {
    name: "Sophia Martinez",
    role: "Dental Hygienist",
    image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&q=80",
    bio: "Sophia is dedicated to preventive care and educating patients about maintaining optimal oral hygiene.",
  },
];

const Team = () => {
  return (
    <section id="team" className="bg-confidental-gray">
      <div className="container mx-auto">
        <h2 className="section-heading">Meet Our Team</h2>
        <p className="section-subheading">
          Our team of experienced dental professionals is committed to providing you with the highest quality care in a comfortable environment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-confidental-blue font-medium mb-3">{member.role}</p>
                <p className="text-confidental-text-light text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Join Our Team</h3>
          <p className="text-confidental-text-light max-w-2xl mx-auto mb-8">
            We're always looking for talented dental professionals who are passionate about providing exceptional patient care. If you're interested in joining our team, we'd love to hear from you.
          </p>
          <a href="#contact" className="btn-primary inline-block">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default Team;
