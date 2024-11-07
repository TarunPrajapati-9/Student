import { CompanyTableComponent } from "@/components/cards/AppliedCompanyTable";
import EmptyState from "@/components/component/EmptyState";
import FullScreenLoader from "@/components/component/FullScreenLoader";
import { getAppliedConsents } from "@/utils/companyFunctions/dataGetter";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AppliedCompanies = () => {
  const navigate = useNavigate();

  // Fetch the data using useQuery
  const { data, isLoading, error } = useQuery({
    queryKey: ["AppliedConsents"],
    queryFn: getAppliedConsents,
  });

  // Handle redirection if no student token is found
  useEffect(() => {
    if (!Cookies.get("studentToken")) {
      navigate("/login");
    }
  }, [navigate]);

  // Extract the company data or set it to an empty array if data is undefined
  const companyData = data?.data || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Applied Company Details
      </h1>

      {/* Show loading state */}
      {isLoading && <FullScreenLoader />}

      {/* Show error state */}
      {error && (
        <EmptyState
          title="An error occurred"
          description={error.message}
          className="max-w-lg mx-auto"
        />
      )}

      {/* Show empty state if no data is found */}
      {!isLoading && !error && companyData.length === 0 && (
        <EmptyState
          title="No Consents Found"
          description="You have not applied for any companies yet."
          className="max-w-lg mx-auto"
        />
      )}

      {/* Show the table if data is available */}
      {!isLoading && !error && companyData.length > 0 && (
        <div className="md:mx-14 mx-5 my-6">
          <CompanyTableComponent companies={companyData} />
        </div>
      )}
    </div>
  );
};

export default AppliedCompanies;
