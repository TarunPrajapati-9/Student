import { Link } from "react-router-dom";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Briefcase, FileText, Home, LogIn, Mail, MenuIcon } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const HomePageMobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const handleLinkClick = () => {
    setIsOpen(false);
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
            placement portal.
          </SheetDescription>
        </VisuallyHidden>
        <div className="grid gap-4 py-6">
          <Link
            to="/"
            onClick={handleLinkClick}
            className="flex w-full items-center gap-2 rounded-md bg-accent p-2 text-sm font-medium text-accent-foreground hover:bg-accent/90"
          >
            <Home className="w-5 h-5" />
            Home
          </Link>
          <Link
            to="/placement_policy"
            onClick={handleLinkClick}
            className="flex w-full items-center gap-2 rounded-md bg-accent p-2 text-sm font-medium text-accent-foreground hover:bg-accent/90"
          >
            <FileText className="w-5 h-5" />
            Placement Policies
          </Link>
          <Link
            to="/pastrecruiters"
            onClick={handleLinkClick}
            className="flex w-full items-center gap-2 rounded-md bg-accent p-2 text-sm font-medium text-accent-foreground hover:bg-accent/90"
          >
            <Briefcase className="w-5 h-5" />
            Past Recruiters
          </Link>
          <Link
            to="/contactus"
            onClick={handleLinkClick}
            className="flex w-full items-center gap-2 rounded-md bg-accent p-2 text-sm font-medium text-accent-foreground hover:bg-accent/90"
          >
            <Mail className="w-5 h-5" />
            Contact Us
          </Link>
        </div>
        <div className="absolute bottom-2 right-0 left-0">
          <div className="gap-2 grid py-6 w-full px-4">
            <Link
              to="https://student-ldce.vercel.app/login"
              onClick={handleLinkClick}
              className="flex w-full items-center gap-2 rounded-md bg-accent p-2 text-sm font-medium text-accent-foreground hover:bg-accent/90"
            >
              <LogIn className="w-4 h-4" />
              Student Login
            </Link>
            <Link
              to="https://central-tpo.vercel.app/"
              onClick={handleLinkClick}
              className="flex w-full items-center gap-2 rounded-md bg-accent p-2 text-sm font-medium text-accent-foreground hover:bg-accent/90"
            >
              <LogIn className="w-4 h-4" />
              Central TPO Login
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default HomePageMobileMenu;
