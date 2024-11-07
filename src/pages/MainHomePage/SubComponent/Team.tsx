import { designers_developers, special_thanks } from "@/lib/mainHomepage";
import MemberCard from "./TeamMemberCard";
import { HomeNavBar } from "./HomeNavBar";
import HomePageFooter from "./HomePageFooter";

// Define the Team component structure
export interface TeamMember {
  name: string;
  role: string;
  imageSrc: string;
  githubUrl: string;
  linkedinUrl: string;
  techStack: string[];
}

export default function Team() {
  return (
    <>
      <HomeNavBar />
      <div className="py-16 px-6 sm:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center">Our Amazing Team</h1>

          {/* Designers & Developers Section */}
          <section className="mb-10 p-8">
            <h2 className="text-2xl font-semibold mb-12 text-center text-gray-800">
              Designers & Developers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {designers_developers.map((member, index) => (
                <MemberCard key={index} {...member} />
              ))}
            </div>
          </section>

          {/* Special Thanks Section */}
          <section className="p-8">
            <h2 className="text-2xl font-semibold mb-12 text-center text-gray-800">
              Special Thanks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {special_thanks.map((member, index) => (
                <MemberCard key={index} {...member} />
              ))}
            </div>
          </section>
        </div>
      </div>
      <HomePageFooter />
    </>
  );
}
