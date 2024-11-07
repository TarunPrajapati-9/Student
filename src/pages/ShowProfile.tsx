import RegistrationButtonComponent from "@/components/RegistrationButtonComponent";
import BasicProfileDetail from "@/components/viewStudentProfile/BasicProfileDetail";
import AddressProfile from "@/components/viewStudentProfile/AddressProfile";
import { useState, useEffect } from "react";
import SchoolProfile from "@/components/viewStudentProfile/SchoolProfile";
import DiplomaProfile from "@/components/viewStudentProfile/DiplomaProfile";
import MCAProfile from "@/components/viewStudentProfile/MCAProfile";
import BEMEProfile from "@/components/viewStudentProfile/BEMEProfile";
import { useQuery } from "@tanstack/react-query";
import { getIsRegistered } from "@/utils/profileFunctions/dataGetter";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import FullScreenLoader from "@/components/component/FullScreenLoader";

export default function ShowProfile() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { data, isLoading, error } = useQuery({
    queryKey: ["RegisterDetails"],
    queryFn: getIsRegistered,
  });
  const [isRegistered, setIsRegistered] = useState(false);

  // Handle errors and show error message
  useEffect(() => {
    if (!Cookies.get("studentToken")) {
      navigate("/login");
    }
    if (data && data.data) {
      setIsRegistered(data.data.is_registered);
    }
    if (error) {
      toast({
        title: "Error",
        description:
          error?.message ||
          "An error occurred while fetching registration status.",
        variant: "destructive",
      });
    }
  }, [error, toast, navigate, data]); // Run this effect when there's an error

  if (isLoading) {
    return <FullScreenLoader />;
  }
  return (
    <>
      {/* Render Register button if the user is not registered */}
      {!isRegistered ? (
        <div className="flex flex-col items-center">
          <RegistrationButtonComponent />
        </div>
      ) : (
        <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-8">Student Information</h1>
          <div className="space-y-6">
            <BasicProfileDetail />
            <AddressProfile />
            <SchoolProfile />
            <DiplomaProfile />
            <BEMEProfile />
            <MCAProfile />
          </div>
        </div>
      )}
    </>
  );
}
