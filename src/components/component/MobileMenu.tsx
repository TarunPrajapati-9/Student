import { Link, useNavigate } from "react-router-dom";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Building2Icon, Check, LogOut, MenuIcon, User } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Cookies from "js-cookie";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    const allCookies = Cookies.get();
    Object.keys(allCookies).forEach((cookieName) => {
      Cookies.remove(cookieName);
    });
    setIsOpen(false);
    navigate("/login");
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="md:hidden">
        <VisuallyHidden>
          <SheetTitle>Navigation Menu</SheetTitle>
        </VisuallyHidden>
        <VisuallyHidden>
          <SheetDescription>
            This menu allows you to navigate through different sections of the
            student portal.
          </SheetDescription>
        </VisuallyHidden>
        <div className="grid gap-4 py-6">
          <Link
            to="/companies"
            onClick={handleLinkClick}
            className="flex w-full items-center gap-2 rounded-md bg-accent p-2 text-sm font-medium text-accent-foreground hover:bg-accent/90"
          >
            <Building2Icon className="h-5 w-5" />
            Companies
          </Link>
          <Link
            to="/applied"
            onClick={handleLinkClick}
            className="flex w-full items-center gap-2 rounded-md bg-accent p-2 text-sm font-medium text-accent-foreground hover:bg-accent/90"
          >
            <Check className="h-5 w-5" />
            Consents
          </Link>
          <Link
            to="/profile"
            onClick={handleLinkClick}
            className="flex w-full items-center gap-2 rounded-md bg-accent p-2 text-sm font-medium text-accent-foreground hover:bg-accent/90"
          >
            <User className="h-5 w-5" />
            Profile
          </Link>
          <Link
            to="/login"
            onClick={handleLogout}
            className="flex w-full items-center gap-2 rounded-md bg-accent p-2 text-sm font-medium text-accent-foreground hover:bg-accent/90"
          >
            <LogOut className="h-5 w-5" />
            Logout
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
