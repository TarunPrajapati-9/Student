import { useToast } from "@/hooks/use-toast";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { ChevronRightIcon } from "lucide-react";
import { getMCADetails } from "@/utils/profileFunctions/dataGetter";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import EmptyState from "../component/EmptyState";
import { InfoField } from "../component/InfoField";
import FullScreenLoader from "../component/FullScreenLoader";

const MCAProfile = () => {
  const { toast } = useToast();

  // Fetch MCA details
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["MCADetails"],
    queryFn: getMCADetails,
  });

  // Access the actual data from the nested object
  const mcaData = data?.data || null;

  // Handle errors
  useEffect(() => {
    if (isError) {
      // console.log(error?.message || "MCA Error");
      toast({
        title: "Failed to Load",
        description: error?.message || "Unable to fetch MCA details.",
        variant: "destructive",
      });
    }
  }, [isError, error, toast]);
  if (!mcaData) return null;

  return (
    <div>
      <Collapsible>
        <CollapsibleTrigger className="flex items-center justify-between w-full bg-muted px-4 py-3 rounded-lg text-lg font-medium">
          MCA Profile
          <ChevronRightIcon className="w-5 h-5 transition-transform [&[data-state=open]]:rotate-90" />
        </CollapsibleTrigger>
        <CollapsibleContent className="px-4 py-6 bg-background rounded-lg">
          {/* MCA Section */}
          <div className="font-extrabold my-3">MCA :</div>
          {isLoading ? (
            <FullScreenLoader />
          ) : isError ? (
            <EmptyState
              title="An error occurred"
              description={error?.message || "Unable to fetch MCA details."}
              className="max-w-lg mx-auto"
            />
          ) : !mcaData ? (
            <EmptyState
              title="No Data Found"
              description="No MCA details available."
              className="max-w-lg mx-auto"
            />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="font-extrabold mb-1 mt-3">Undergraduate :</div>
              <div />
              <InfoField
                label="UG Passing Year"
                value={mcaData.ug_passing_year}
              />
              <InfoField label="UG University" value={mcaData.ug_uni} />
              <InfoField label="UG Branch" value={mcaData.ug_branch} />
              <InfoField label="UG Percentage" value={mcaData.ug_per} />
              <InfoField
                label="UG Dead Backlogs"
                value={mcaData.ug_dead_back}
              />
              <InfoField
                label="Gap Between 12th & UG"
                value={mcaData.gap_12_ug}
              />
              <InfoField
                label="UG Semester 1 Percentage"
                value={mcaData.ug_sem1_per}
              />
              <InfoField
                label="UG Semester 2 Percentage"
                value={mcaData.ug_sem2_per}
              />
              <InfoField
                label="UG Semester 3 Percentage"
                value={mcaData.ug_sem3_per}
              />
              <InfoField
                label="UG Semester 4 Percentage"
                value={mcaData.ug_sem4_per}
              />
              <InfoField
                label="UG Semester 5 Percentage"
                value={mcaData.ug_sem5_per}
              />
              <InfoField
                label="UG Semester 6 Percentage"
                value={mcaData.ug_sem6_per}
              />
              <InfoField
                label="UG Semester 7 Percentage"
                value={mcaData.ug_sem7_per}
              />
              <InfoField
                label="UG Semester 8 Percentage"
                value={mcaData.ug_sem8_per}
              />
              <InfoField
                label="Gap Between UG & PG"
                value={mcaData.gap_ug_pg}
              />
              <div />
              <div className="font-extrabold mb-1 mt-3">Postgraduate :</div>
              <div />
              <InfoField
                label="PG Passing Year"
                value={mcaData.pg_passing_year}
              />
              <InfoField
                label="PG Specialization"
                value={mcaData.pg_specialization}
              />

              <InfoField label="PG CPI" value={mcaData.pg_cpi} />
              <InfoField
                label="PG Live Backlogs"
                value={mcaData.pg_live_back}
              />
              <InfoField
                label="PG Dead Backlogs"
                value={mcaData.pg_dead_back}
              />
              <InfoField
                label="PG Total Backlogs"
                value={mcaData.pg_total_back}
              />
              <InfoField label="Semester 1 SPI" value={mcaData.pg_sem1_spi} />
              <InfoField label="Semester 2 SPI" value={mcaData.pg_sem2_spi} />
              <InfoField label="Semester 3 SPI" value={mcaData.pg_sem3_spi} />
              <InfoField label="Semester 4 SPI" value={mcaData.pg_sem4_spi} />
            </div>
          )}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default MCAProfile;
