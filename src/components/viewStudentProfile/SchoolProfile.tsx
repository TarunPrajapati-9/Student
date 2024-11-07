import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { ChevronRightIcon } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import {
  getHSCDetails,
  getSSCDetails,
} from "@/utils/profileFunctions/dataGetter";
import { useEffect } from "react";
import FullScreenLoader from "../component/FullScreenLoader";
import { InfoField } from "../component/InfoField";

function SchoolProfile() {
  const { toast } = useToast();

  // Fetch SSC details
  const {
    data: sscResponse,
    isLoading: sscLoading,
    isError: sscIsError,
    error: sscError,
  } = useQuery({
    queryKey: ["SSCDetails"],
    queryFn: getSSCDetails,
  });

  // Fetch HSC details
  const {
    data: hscResponse,
    isLoading: hscLoading,
    isError: hscIsError,
    error: hscError,
  } = useQuery({
    queryKey: ["HSCDetails"],
    queryFn: getHSCDetails,
  });

  // Access the actual data from the nested object
  const sscData = sscResponse?.data || null;
  const hscData = hscResponse?.data || null;

  // Handle errors
  useEffect(() => {
    if (sscIsError || hscIsError) {
      toast({
        title: "Failed to Load",
        description: sscError?.message || hscError?.message,
        variant: "destructive",
      });
    }
  }, [sscIsError, hscIsError, sscError, hscError, toast]);

  return (
    <div>
      <Collapsible>
        <CollapsibleTrigger className="flex items-center justify-between w-full bg-muted px-4 py-3 rounded-lg text-lg font-medium">
          School Information
          <ChevronRightIcon className="w-5 h-5 transition-transform [&[data-state=open]]:rotate-90" />
        </CollapsibleTrigger>
        <CollapsibleContent className="px-4 py-6 bg-background rounded-lg">
          {/* SSC Details */}
          {sscData ? (
            <>
              <div className="font-extrabold mb-3">10th Standard:</div>
              {sscLoading ? (
                <FullScreenLoader />
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <InfoField label="SSC Board" value={sscData.ssc_board} />
                  <InfoField label="Name as per SSC" value={sscData.ssc_name} />
                  <InfoField
                    label="Passing Year"
                    value={sscData.ssc_passing_year}
                  />
                  <InfoField label="10th Percentage" value={sscData.ssc_per} />
                  <InfoField label="10th CPI" value={sscData.ssc_cpi} />
                </div>
              )}
              <hr />
            </>
          ) : null}

          {/* HSC Details */}
          {hscData ? (
            <>
              <div className="font-extrabold my-4">12th Standard:</div>
              {hscLoading ? (
                <FullScreenLoader />
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <InfoField label="12th Board" value={hscData.hsc_board} />
                  <InfoField
                    label="Passing Year"
                    value={hscData.hsc_passing_year}
                  />
                  <InfoField label="12th Percentage" value={hscData.hsc_per} />
                  <InfoField label="12th CPI" value={hscData.hsc_cpi} />
                  <InfoField label="Physics Marks" value={hscData.physics} />
                  <InfoField
                    label="Chemistry Marks"
                    value={hscData.chemistry}
                  />
                  <InfoField label="Maths Marks" value={hscData.math} />
                  <InfoField label="Total Marks" value={hscData.total_mark} />
                  <InfoField
                    label="Obtained Marks"
                    value={hscData.obtain_mark}
                  />
                </div>
              )}
              <hr />
              {/* Gujcet & JEE */}
              <div className="font-extrabold my-4">Gujcet & JEE:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <InfoField label="GUJCET Score" value={hscData.gujcet_score} />
                <InfoField
                  label="GUJCET Physics"
                  value={hscData.gujcet_physics}
                />
                <InfoField label="GUJCET Maths" value={hscData.gujcet_math} />
                <InfoField
                  label="GUJCET Chemistry"
                  value={hscData.gujcet_chem}
                />
                <InfoField
                  label="GUJCET Percentile"
                  value={hscData.gujcet_percentile}
                />
                <InfoField label="JEE Score" value={hscData.jee_percentile} />
              </div>
            </>
          ) : null}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}

export default SchoolProfile;
