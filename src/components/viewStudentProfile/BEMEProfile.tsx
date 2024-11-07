import { useToast } from "@/hooks/use-toast";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { ChevronRightIcon } from "lucide-react";
import {
  getBEDetails,
  getMEDetails,
} from "@/utils/profileFunctions/dataGetter";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { InfoField } from "../component/InfoField";
import FullScreenLoader from "../component/FullScreenLoader";

const BEMEProfile = () => {
  const { toast } = useToast();

  // Fetch BE details
  const {
    data: BEResponse,
    isLoading: BELoading,
    isError: BEIsError,
    error: BEError,
  } = useQuery({
    queryKey: ["BEDetails"],
    queryFn: getBEDetails,
  });

  // Fetch ME details
  const {
    data: MEResponse,
    isLoading: MELoading,
    isError: MEIsError,
    error: MEError,
  } = useQuery({
    queryKey: ["MEDetails"],
    queryFn: getMEDetails,
  });

  // Access the actual data from the nested object
  const beData = BEResponse?.data || null;
  const meData = MEResponse?.data || null;

  // Handle errors
  useEffect(() => {
    if (BEIsError || MEIsError) {
      toast({
        title: "Failed to Load",
        description: BEError?.message || MEError?.message,
        variant: "destructive",
      });
    }
  }, [BEIsError, MEIsError, BEError, MEError, toast]);

  return (
    <div>
      <Collapsible>
        <CollapsibleTrigger className="flex items-center justify-between w-full bg-muted px-4 py-3 rounded-lg text-lg font-medium">
          BE/ME Profile
          <ChevronRightIcon className="w-5 h-5 transition-transform [&[data-state=open]]:rotate-90" />
        </CollapsibleTrigger>
        <CollapsibleContent className="px-4 py-6 bg-background rounded-lg">
          {/* BE Section */}
          {beData ? (
            <>
              <div className="font-extrabold my-3">BE :</div>
              {BELoading ? (
                <FullScreenLoader />
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <InfoField
                    label="Passing Year"
                    value={beData.be_passing_year}
                  />
                  <InfoField label="Branch" value={beData.be_branch} />
                  <InfoField label="University" value={beData.be_uni} />
                  <InfoField label="CGPA" value={beData.be_cgpa} />
                  <InfoField label="CPI" value={beData.be_cpi} />
                  <InfoField
                    label="Dead Backlogs"
                    value={beData.be_dead_back}
                  />
                  <InfoField
                    label="Live Backlogs"
                    value={beData.be_live_back}
                  />
                  <InfoField
                    label="Total Backlogs"
                    value={beData.be_total_back}
                  />
                  <InfoField
                    label="Admission Based On"
                    value={beData.admission_based_on}
                  />
                  <InfoField
                    label="Gap Between 12th/Diploma to BE"
                    value={beData.gap_12_dip_BE}
                  />
                  <InfoField
                    label="Semester 1 SPI"
                    value={beData.be_sem1_spi}
                  />
                  <InfoField
                    label="Semester 2 SPI"
                    value={beData.be_sem2_spi}
                  />
                  <InfoField
                    label="Semester 3 SPI"
                    value={beData.be_sem3_spi}
                  />
                  <InfoField
                    label="Semester 4 SPI"
                    value={beData.be_sem4_spi}
                  />
                  <InfoField
                    label="Semester 5 SPI"
                    value={beData.be_sem5_spi}
                  />
                  <InfoField
                    label="Semester 6 SPI"
                    value={beData.be_sem6_spi}
                  />
                  <InfoField
                    label="Semester 7 SPI"
                    value={beData.be_sem7_spi}
                  />
                  <InfoField
                    label="Semester 8 SPI"
                    value={beData.be_sem8_spi}
                  />
                </div>
              )}
              <hr className="my-4" />
            </>
          ) : null}

          {/* ME Section */}
          {meData ? (
            <>
              <div className="font-extrabold mb-3 mt-3">ME :</div>
              {MELoading ? (
                <FullScreenLoader />
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <InfoField
                    label="ME Passing Year"
                    value={meData.me_passing_year}
                  />
                  <InfoField label="ME Branch" value={meData.me_branch} />
                  <InfoField
                    label="Specialization"
                    value={meData.me_specialization}
                  />
                  <InfoField label="GATE Score" value={meData.gate_score} />
                  <InfoField label="PGCET Score" value={meData.pgcet_score} />
                  <InfoField
                    label="Semester 1 SPI"
                    value={meData.me_sem1_spi}
                  />
                  <InfoField
                    label="Semester 2 SPI"
                    value={meData.me_sem2_spi}
                  />
                  <InfoField
                    label="Semester 3 SPI"
                    value={meData.me_sem3_spi}
                  />
                  <InfoField
                    label="Semester 4 SPI"
                    value={meData.me_sem4_spi}
                  />
                  <InfoField label="CPI" value={meData.me_cpi} />
                  <InfoField
                    label="Dead Backlogs"
                    value={meData.me_dead_back}
                  />
                  <InfoField
                    label="Live Backlogs"
                    value={meData.me_live_back}
                  />
                  <InfoField
                    label="Gap Between BE & ME"
                    value={meData.gap_be_me}
                  />
                </div>
              )}
            </>
          ) : null}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default BEMEProfile;
