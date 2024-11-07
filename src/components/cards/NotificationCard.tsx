import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { NoticeData } from "@/utils/types";
import { CalendarIcon } from "lucide-react";
import DOMPurify from "dompurify";

export function NotificationCard({ notice }: { notice: NoticeData }) {
  const noticeDetails = notice?.notice
    ? DOMPurify.sanitize(notice.notice)
    : "N/A";
  let date = "N/A";
  let time = "N/A";

  // Check if dateTime is valid and can be parsed
  if (notice?.createdAt) {
    const dateObject = new Date(notice.createdAt);
    if (!isNaN(dateObject.getTime())) {
      // Extract the date in DD:MM:YYYY format
      const day = String(dateObject.getDate()).padStart(2, "0"); // Pad with zero if single digit
      const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // Months are zero-based, so add 1
      const year = dateObject.getFullYear();
      date = `${day}/${month}/${year}`;

      // Extract the time in HH:MM:SS format
      time = dateObject.toTimeString().split(" ")[0]; // Splits off the time without the time zone
    }
  }

  const deadLineObject = new Date(notice?.deadline);
  const deadlineDay = String(deadLineObject.getDate()).padStart(2, "0");
  const deadlineMonth = String(deadLineObject.getMonth() + 1).padStart(2, "0");
  const deadlineYear = deadLineObject.getFullYear();
  const deadlineDate = `${deadlineDay}/${deadlineMonth}/${deadlineYear}`;

  const deadlineTime = deadLineObject.toTimeString().split(" ")[0];

  return (
    <Card className="mt-2 w-full max-w-6xl p-6 mx-auto border border-muted rounded-md shadow-lg">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start mb-2">
          <div className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
            Deadline: {deadlineDate + " " + deadlineTime || "N/A"}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <CalendarIcon className="mr-1 h-4 w-4" />
            Arrived: {date + " " + time || "N/A"}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div
          className="text-gray-600"
          dangerouslySetInnerHTML={{ __html: noticeDetails }}
        />
      </CardContent>
    </Card>
  );
}
