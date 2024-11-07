import { useState } from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
const RoleDropdown = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Avatar className="h-10 w-10 cursor-pointer" onClick={toggleMenu}>
          <AvatarImage
            src="/placeholder-user.jpg"
            className="rounded-2xl"
            alt="profile"
          />
          <AvatarFallback>JP</AvatarFallback>
          <span className="sr-only">Toggle user menu</span>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <Link
          to="/login"
          className="text-sm font-medium block cursor-pointer py-2 px-2 hover:bg-gray-100" // Ensuring block display and hover styles
          onClick={closeMenu}
        >
          Student
        </Link>
        <DropdownMenuItem className="text-sm font-medium block cursor-pointer py-2 px-2 hover:bg-gray-100">
          <Link to={"https://central-tpo.vercel.app/"}>Central TPO</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default RoleDropdown;
