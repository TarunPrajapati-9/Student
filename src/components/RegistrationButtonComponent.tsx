import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { ChevronRight, User, GraduationCap, CheckCircle } from "lucide-react"; // Importing icons
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { setConfirm } from "@/utils/profileFunctions/dataPutter";
import { useState } from "react"; // For handling modal state
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"; // Assuming you're using this component for modal handling
import { profileLinks } from "@/lib/profileLinks";
import Loader from "./component/Loader";

const RegistrationButtonComponent = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { toast } = useToast();

  // Local state to handle modal visibility
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { mutate, isPending } = useMutation({
    mutationFn: setConfirm,
    onSuccess: (res) => {
      if (res.data?.is_registered) {
        toast({
          title: "Success",
          description: "Profile Registered Successfully",
          variant: "success",
        });
        queryClient.invalidateQueries({ queryKey: ["RegisterDetails"] });
        navigate("/profile");
      } else {
        toast({
          title: "Error",
          description: res.message,
          variant: "destructive",
        });
      }
    },
  });

  const handleConfirm = () => {
    setIsDialogOpen(false); // Close modal
    mutate(true); // Proceed with registration
  };

  // Separate basic and education details
  const basicDetailsLinks = profileLinks.slice(0, 2); // First two rows
  const educationDetailsLinks = profileLinks.slice(2); // Remaining rows

  return (
    <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
      <h2 className="scroll-m-20 mb-8 text-center text-3xl font-bold tracking-tight text-gray-900">
        Registration Form
      </h2>

      {/* Basic Details Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-10">
        <div className="flex items-center space-x-3 mb-6">
          <User className="h-6 w-6 text-indigo-600" />
          <h3 className="text-xl font-semibold text-indigo-600">
            Basic Details
          </h3>
        </div>
        <Table className="border-t border-gray-200">
          <TableBody>
            {basicDetailsLinks.map((item, index) => (
              <TableRow
                onClick={() => navigate(item.href)}
                key={item.href + item.title + index + "TABLE_BASIC_DETAILS"}
                className="cursor-pointer group hover:bg-indigo-50 transition duration-200"
              >
                <TableCell className="flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-700">
                    {item.title}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="mr-7 group-hover:translate-x-1 transition duration-200"
                  >
                    <ChevronRight />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Education Details Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-10">
        <div className="flex items-center space-x-3 mb-6">
          <GraduationCap className="h-6 w-6 text-teal-600" />
          <h3 className="text-xl font-semibold text-teal-600">
            Education Details
          </h3>
        </div>
        <Table className="border-t border-gray-200">
          <TableBody>
            {educationDetailsLinks.map((item, index) => (
              <TableRow
                onClick={() => navigate(item.href)}
                key={item.href + item.title + index + "TABLE_EDUCATION_DETAILS"}
                className="cursor-pointer group hover:bg-teal-50 transition duration-200"
              >
                <TableCell className="flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-700">
                    {item.title}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="mr-7 group-hover:translate-x-1 transition duration-200"
                  >
                    <ChevronRight />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Confirm Register Profile Section */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center space-x-3 mb-6">
          <CheckCircle className="h-6 w-6 text-green-600" />
          <h3 className="text-xl font-semibold text-green-600">
            Confirm Register Profile
          </h3>
        </div>
        <Table className="border-t border-gray-200">
          <TableBody>
            <TableRow
              className="cursor-pointer group hover:bg-green-50 transition duration-200"
              onClick={() => setIsDialogOpen(true)} // Open modal when clicked
            >
              <TableCell className="flex justify-between items-center">
                <span className="text-lg font-medium text-gray-700">
                  Confirm Registration
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="mr-7 group-hover:translate-x-1 transition duration-200"
                >
                  <ChevronRight />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Dialog/Modal for Confirm Registration */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Profile Registration</DialogTitle>
            <p>
              Are you sure you want to lock your profile? After this,&nbsp;
              <strong className="text-red-600">
                No further data will be added!
              </strong>
            </p>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsDialogOpen(false)}
              className="my-2"
            >
              Cancel
            </Button>
            <Button
              className="my-2"
              onClick={handleConfirm}
              disabled={isPending} // Disable the button if the request is pending
            >
              {isPending ? <Loader /> : "Confirm"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RegistrationButtonComponent;
