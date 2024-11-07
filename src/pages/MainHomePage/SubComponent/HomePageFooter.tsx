import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, FileText, Users } from "lucide-react";

export default function HomePageFooter() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "Files/LDCE_BROCHURE_2025.pdf";
    link.download = "LDCE_BROCHURE_2025.pdf";
    link.click();
  };

  return (
    <footer className="bg-gray-100 text-black py-10 mt-6">
      <div className="container mx-auto px-6 md:px-20">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
          {/* About Placement Cell Section */}
          <div className="flex-1">
            <h2 className="mb-4 text-lg font-semibold">About Placement Cell</h2>
            <p className="text-sm md:text-base leading-relaxed">
              The Training and Placement Cell at LDCE is dedicated to enhancing
              student skills and preparing them for industry through specialized
              training and placement opportunities.
            </p>
          </div>

          {/* Contact Us Section */}
          <div className="flex-1">
            <h2 className="mb-4 text-lg font-semibold">Contact Us</h2>
            <address className="not-italic text-sm md:text-base leading-relaxed">
              <Link
                to={"https://maps.app.goo.gl/HZXoagihUGtGUdww5"}
                target="_blank"
                className="flex items-center gap-2 text-blue-600 hover:underline transition-all"
              >
                <MapPin size={18} /> 1st Floor, Principal Office, Student
                Section, LDCE, Ahmedabad, Gujarat 380015
              </Link>
            </address>
            <br />
            <div className="text-sm md:text-base flex flex-col gap-1">
              <b className="mb-3">Head Training and Placement Officer (TPO)</b>
              <div className="flex items-center gap-2">
                <Phone size={18} />{" "}
                <span>Prof. Vinod P. Patel (M.Tech, IIT, Roorkee)</span>
              </div>
              <span className="pl-6">Mobile: +91 90334 83966</span>
              <div className="flex items-center gap-2 mt-2">
                <Mail size={18} /> <span>placement@ldce.ac.in</span>
              </div>
            </div>
          </div>

          {/* External Links Section */}
          <div className="mt-8 lg:mt-0">
            <h2 className="mb-4 text-lg font-semibold">External Links</h2>
            <div
              className="flex items-center gap-2 text-blue-600 hover:underline cursor-pointer transition-all"
              onClick={handleDownload}
            >
              <FileText size={18} /> Placement Brochure
            </div>
            <div className="flex items-center gap-2 text-blue-600 hover:underline cursor-pointer transition-all mt-2">
              <Users size={18} />
              <Link to="/team" className="transition-all">
                Our Team
              </Link>
            </div>
          </div>
        </div>

        <div className="border-gray-700 pt-8 text-center text-sm md:text-base">
          <hr className="mb-4 border-t-gray-300" />© {new Date().getFullYear()}-
          {new Date().getFullYear() + 1 - 2000} LDCE. All rights reserved
          {/* <Link
            to="/team"
            className="text-blue-600 hover:underline font-semibold transition-colors duration-300"
          >
            Design By Team
          </Link> */}
        </div>
      </div>
    </footer>
  );
}
