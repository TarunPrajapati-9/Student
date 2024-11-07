import { recruiters } from "@/lib/pastRecruiters";
import { HomeNavBar } from "@/pages/MainHomePage/SubComponent/HomeNavBar";
import HomePageFooter from "@/pages/MainHomePage/SubComponent/HomePageFooter";
import { Link } from "react-router-dom";

export type Recruiter = {
  id: number;
  name: string;
  logo: string;
  infoLink: string;
};

export default function PastRecruiters() {
  return (
    <>
      <HomeNavBar />
      <div className="container mx-auto px-4 py-12 select-none">
        <h1 className="text-3xl font-bold text-center mb-12">
          Our Past Recruiters
        </h1>
        <div className="grid lg:px-14 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {recruiters.map((recruiter) => (
            <Link key={recruiter.id} to={recruiter.infoLink} className="group">
              <div className="flex flex-col items-center space-y-6 transition-transform duration-200 ease-in-out transform group-hover:scale-105">
                <div className="w-full aspect-w-2 aspect-h-1 relative">
                  <img
                    src={recruiter.logo}
                    alt={`${recruiter.name} logo`}
                    height={600}
                    width={400}
                    className="pointer-events-none transition-opacity bg-transparent object-contain duration-300 group-hover:opacity-80 h-[100px] md:h-[150px] lg:h-[180px] "
                  />
                </div>
                {/* <h2 className="text-sm font-medium text-center group-hover:text-primary">
                  {recruiter.name}
                </h2> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <HomePageFooter />
    </>
  );
}
