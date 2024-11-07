import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { ChevronRightIcon } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getBasicDetails } from "@/utils/profileFunctions/dataGetter";
import EmptyState from "../component/EmptyState";
import { InfoField } from "../component/InfoField";
import FullScreenLoader from "../component/FullScreenLoader";

function BasicProfileDetail() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["BasicDetails"],
    queryFn: getBasicDetails,
  });

  // Error handling inside collapsible content
  const fullName = data?.data
    ? `${data.data.name ?? ""} ${data.data.father_name ?? ""} ${
        data.data.surname ?? ""
      }`
    : "N/A";
  const formattedDob = data?.data?.dob
    ? new Date(data.data.dob).toLocaleDateString("en-GB")
    : "N/A";
  if (!data?.data) return null;
  return (
    <div className="container mx-auto">
      <Collapsible>
        <CollapsibleTrigger className="flex items-center justify-between w-full bg-muted px-4 py-3 rounded-lg text-lg font-medium">
          Personal Information
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
          {!isLoading && !error && (!data || !data.data) && (
            <EmptyState
              title="No Data Found"
              description="We couldn't retrieve the personal information."
              className="max-w-lg mx-auto"
            />
          )}

          {/* Show data if available */}
          {!isLoading && data?.data && (
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <InfoField label="Enrollment No" value={data.data.enrollment} />
              <InfoField label="Full Name" value={fullName} />
              <InfoField label="Email" value={data.data.email} />
              <InfoField label="Phone" value={data.data.mobile_no} />
              <InfoField label="Date of Birth" value={formattedDob} />
              <InfoField label="Gender" value={data.data.gender} />
              <InfoField label="Caste" value={data.data.caste} />
              <InfoField label="Blood Group" value={data.data.blood_group} />
              <InfoField
                label="Name as per Aadhar"
                value={data.data.aadhar_name}
              />
              <InfoField label="Aadhar Number" value={data.data.aadhar_no} />
              <InfoField label="PAN Number" value={data.data.pan_no} />
              <InfoField label="Height" value={`${data.data.height_cm} cm`} />
              <InfoField label="Weight" value={`${data.data.weight_kg} kg`} />
              <InfoField
                label="Physical Handicapped"
                value={data.data.physical_handicapped ? "Yes" : "No"}
              />
              <InfoField label="Parent Mobile" value={data.data.parent_mob} />
              <InfoField label="Parent Email" value={data.data.parent_email} />
              <InfoField
                label="Payment Reference Number"
                value={data.data.pay_ref_no}
              />
            </div>
          )}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}

export default BasicProfileDetail;
