import { Link } from "react-router-dom";
import { useState } from "react";
import RoleDropdown from "./RoleSelectionDropDown";
import HomePageMobileMenu from "../../../components/component/HomePageMobileMenu";
import { homeNavLinks } from "@/lib/mainHomepage";

export function HomeNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex h-24 w-full items-center justify-between bg-background px-4 md:px-6 bg-slate-100 shadow-md">
      {/* Left Logo Section */}
      <div className="flex items-center">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Logo"
            className="md:h-20 md:w-20 h-16 w-16"
          />
          <div>
            <span className="text-lg font-semibold">Placement Portal</span>
            <span className="text-base font-medium text-gray-500 block">
              LDCE
            </span>
          </div>
        </Link>
      </div>

      {/* Right Navigation (Hidden on mobile) */}
      <nav className="hidden items-center gap-8 md:flex">
        {homeNavLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="text-lg font-medium hover:underline hover:underline-offset-4"
          >
            {link.label}
          </Link>
        ))}

        {/* Profile Menu */}
        <RoleDropdown />
      </nav>

      {/* Mobile Menu (Visible on mobile) */}
      <HomePageMobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}
