import { Github, Linkedin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// Define types for the ProfileCard props
interface ProfileCardProps {
  name: string;
  role: string;
  imageSrc: string;
  githubUrl: string;
  linkedinUrl: string;
  techStack: string[];
}

// ProfileCard component for reusability
const MemberCard: React.FC<ProfileCardProps> = ({
  name,
  role,
  imageSrc,
  githubUrl,
  linkedinUrl,
  techStack,
}) => (
  <div className="flex flex-col items-center p-6 space-y-4 bg-slate-100 rounded-lg shadow-md border border-transparent transition-transform transform hover:scale-105 hover:shadow-lg hover:border-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 select-none">
    {/* Profile Image with Border Glow */}
    <div className="rounded-full overflow-hidden border-4 border-transparent transition-all duration-300 hover:border-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
      <img
        src={imageSrc}
        alt={name}
        width={120}
        height={120}
        className="rounded-full"
      />
    </div>
    {/* Name and Role */}
    <div className="text-center">
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
    {/* Social Links with Hover Effects */}
    <div className="flex space-x-4">
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-indigo-500 transition-colors duration-200"
      >
        <Github className="w-6 h-6" />
      </a>
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
      >
        <Linkedin className="w-6 h-6" />
      </a>
    </div>
    <Separator className="my-2" />
    {/* Tech Stack Badges with Color and Rounded Styles */}
    <div className="flex flex-wrap justify-center gap-2">
      {techStack &&
        techStack.map((tech, index) => (
          <Badge
            key={index}
            variant="default"
            className="bg-indigo-100 text-indigo-600 font-semibold rounded-lg px-2 py-1 shadow-sm hover:bg-indigo-200 transition-colors duration-200"
          >
            {tech}
          </Badge>
        ))}
    </div>
  </div>
);

export default MemberCard;
