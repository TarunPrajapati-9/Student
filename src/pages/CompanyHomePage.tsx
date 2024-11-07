import CompanyCard from "@/components/cards/CompanyCard";
import EmptyState from "@/components/component/EmptyState";
import FullScreenLoader from "@/components/component/FullScreenLoader";
import { getEligibleCompanies } from "@/utils/companyFunctions/dataGetter";
import { CompanyData } from "@/utils/types";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CompanyHomePage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery({
    queryKey: ["EligibleCompanies"],
    queryFn: getEligibleCompanies,
  });

  const companyData = data?.data || [];
  useEffect(() => {
    if (!Cookies.get("studentToken")) {
      navigate("/login");
    }
  }, [navigate]);

  const handleCardClick = (company: CompanyData) => {
    // r_id/concern_id
    queryClient.invalidateQueries({ queryKey: ["EligibleCompanies"] });
    navigate(`/company/${company.recruitment.r_id}/${company.id}`);
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Eligible Companies
      </h1>
      {isLoading && <FullScreenLoader />}
      {error && (
        <EmptyState
          title="An error occurred"
          description={error.message}
          className="max-w-lg mx-auto"
        />
      )}
      {!isLoading && !error && companyData.length === 0 && (
        <EmptyState
          title="No Eligible Companies Found"
          description={data?.message}
          className="max-w-lg mx-auto"
        />
      )}
      {!isLoading && data?.data && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {companyData.map((company) => (
            <div
              key={company.company.c_id + company.id}
              onClick={() => handleCardClick(company)}
              className="cursor-pointer"
            >
              <CompanyCard
                name={company.company.c_name}
                deadline={company.recruitment.deadline}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
