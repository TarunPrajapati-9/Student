import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { ChevronRightIcon } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getDiplomaDetails } from "@/utils/profileFunctions/dataGetter";
import EmptyState from "../component/EmptyState";
import { InfoField } from "../component/InfoField";
import FullScreenLoader from "../component/FullScreenLoader";

function DiplomaProfile() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["DiplomaDetails"],
    queryFn: getDiplomaDetails,
  });

  // Access the actual diploma data
  const diplomaData = data?.data || null;
  if (!diplomaData) return null;
  return (
    <div className="container mx-auto">
      <Collapsible>
        <CollapsibleTrigger className="flex items-center justify-between w-full bg-muted px-4 py-3 rounded-lg text-lg font-medium">
          Diploma Information
          <ChevronRightIcon className="w-5 h-5 transition-transform [&[data-state=open]]:rotate-90" />
        </CollapsibleTrigger>

        <CollapsibleContent className="px-4 py-6 bg-background rounded-lg">
          {/* Show loading state */}
          {isLoading && <FullScreenLoader />}

          {/* If error occurred */}
          {error && (
            <EmptyState
              title="An error occurred"
              description={error.message}
              className="max-w-lg mx-auto"
            />
          )}

          {/* If no data found */}
          {!isLoading && !error && !diplomaData && (
            <EmptyState
              title="No Data Found"
              description="We couldn't retrieve the diploma information."
              className="max-w-lg mx-auto"
            />
          )}

          {/* Show diploma data if available */}
          {!isLoading && diplomaData && (
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {/* University */}
              <InfoField
                label="University"
                value={diplomaData.diploma_uni || "N/A"}
              />

              {/* Branch */}
              <InfoField
                label="Branch"
                value={diplomaData.diploma_branch || "N/A"}
              />

              {/* CPI */}
              <InfoField label="CPI" value={diplomaData.diploma_cpi || "N/A"} />

              {/* DDCET Score */}
              <InfoField label="DDCET Score" value={diplomaData.ddcet_score} />

              {/* Passing Year */}
              <InfoField
                label="Passing Year"
                value={diplomaData.diploma_passing_year}
              />

              {/* Dead Backlog */}
              <InfoField
                label="Dead Backlog"
                value={diplomaData.diploma_dead_back}
              />
            </div>
          )}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}

export default DiplomaProfile;
