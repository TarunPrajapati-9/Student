import { Link } from "react-router-dom";
import UserDropdown from "./StudentDropDown";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import { navLinks } from "@/lib/constants";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex h-24 w-full items-center justify-between bg-background px-4 md:px-6 bg-slate-100 shadow-md">
      {/* Left Logo Section */}
      <div className="flex items-center">
        <Link to="/companies" className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="h-20 w-20" />
          <div>
            <span className="text-lg font-semibold">
              Student Placement Portal
            </span>
            <span className="text-base font-medium text-gray-500 block">
              LDCE
            </span>
          </div>
        </Link>
      </div>

      {/* Right Navigation (Hidden on mobile) */}
      <nav className="hidden items-center gap-4 md:flex">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="text-sm font-medium hover:underline hover:underline-offset-4"
          >
            {link.label}
          </Link>
        ))}

        {/* Profile Menu */}
        <UserDropdown />
      </nav>

      {/* Mobile Menu (Visible on mobile) */}
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}
