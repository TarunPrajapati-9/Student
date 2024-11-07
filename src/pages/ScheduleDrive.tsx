import EmptyState from "@/components/component/EmptyState";
import { ScheduleCard } from "@/components/cards/ScheduleCard";
import { getSchedule } from "@/utils/companyFunctions/dataGetter";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import FullScreenLoader from "@/components/component/FullScreenLoader";

const ScheduleDrive = () => {
  const { consentId } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["ScheduleDetails"],
    queryFn: () => {
      return getSchedule(consentId!);
    },
  });

  // If data exists, use it; otherwise, null
  const scheduleData = data?.data.schedules || [];
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center">
        {data?.data.company.c_name}'s Schedule
      </h1>
      {isLoading && <FullScreenLoader />}
      {error && (
        <EmptyState
          title="An error occurred"
          description={error.message}
          className="max-w-lg mx-auto"
        />
      )}

      {!isLoading &&
        !error &&
        (!data || !scheduleData || scheduleData.length === 0) && (
          <EmptyState
            title="No Schedule Found"
            description={data?.message}
            className="max-w-lg mx-auto"
          />
        )}
      {!isLoading && scheduleData.length > 0 && (
        <>
          {scheduleData.map((schedule, index) => (
            <ScheduleCard key={index} data={schedule} />
          ))}
        </>
      )}
    </div>
  );
};

export default ScheduleDrive;
