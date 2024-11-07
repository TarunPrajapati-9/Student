import EmptyState from "@/components/component/EmptyState";
import { NotificationCard } from "@/components/cards/NotificationCard";
import { getNotice } from "@/utils/companyFunctions/dataGetter";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { NoticeData } from "@/utils/types";
import FullScreenLoader from "@/components/component/FullScreenLoader";

function Notice() {
  const { consentId } = useParams<{ consentId: string }>();

  // Use correct return type and ensure data is fetched properly
  const { data, isLoading, error } = useQuery({
    queryKey: ["NoticeDetails", consentId],
    queryFn: () => getNotice(consentId!), // Notice the return statement here
  });

  // Ensure data is properly typed
  const noticeData = data?.data.notices || [];

  // console.log(noticeData);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center">
        {data?.data.company.c_name}'s Notice
      </h1>
      {isLoading && <FullScreenLoader />}
      {error && (
        <EmptyState
          title="An error occurred"
          description={error.message}
          className="max-w-lg mx-auto"
        />
      )}

      {!isLoading && !error && noticeData.length === 0 && (
        <EmptyState
          title="No Notice Found"
          description={data?.message}
          className="max-w-lg mx-auto"
        />
      )}

      {noticeData.length > 0 && (
        <div className="container mx-auto px-4 py-8">
          {noticeData.map((notice: NoticeData, index: number) => (
            <NotificationCard key={notice.n_id + index} notice={notice} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Notice;
