import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { ChevronRightIcon } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getAddressDetails } from "@/utils/profileFunctions/dataGetter";
import EmptyState from "../component/EmptyState";
import { InfoField } from "../component/InfoField";
import FullScreenLoader from "../component/FullScreenLoader";

function AddressProfile() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["AddressDetails"],
    queryFn: getAddressDetails,
  });
  if (!data?.data) return null;
  return (
    <div className="container mx-auto">
      <Collapsible>
        <CollapsibleTrigger className="flex items-center justify-between w-full bg-muted px-4 py-3 rounded-lg text-lg font-medium">
          Address Information
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
              description="We couldn't retrieve the address information."
              className="max-w-lg mx-auto"
            />
          )}

          {/* Show data if available */}
          {!isLoading && data?.data && (
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {/* Permanent Address Section */}
              <div className="flex flex-col">
                <div className="font-extrabold mb-3">Permanent Address:</div>
                <InfoField label="Street" value={data.data.perm_address} />
                <InfoField label="City" value={data.data.perm_city} />
                <InfoField label="State" value={data.data.perm_state} />
                <InfoField label="Pincode" value={data.data.perm_pin} />
              </div>

              {/* Present Address Section */}
              <div className="flex flex-col">
                <div className="font-extrabold mb-3">Present Address:</div>
                <InfoField label="Street" value={data.data.pres_address} />
                <InfoField label="City" value={data.data.pres_city} />
                <InfoField label="Pincode" value={data.data.pres_pin} />
              </div>
            </div>
          )}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}

export default AddressProfile;
