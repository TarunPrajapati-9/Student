import { Card, CardContent } from "@/components/ui/card";
import { CalendarIcon, SmileIcon } from "lucide-react";

type CompanyProps = {
  name: string;
  deadline: string;
};

export default function CompanyCard({ name, deadline }: CompanyProps) {
  const dateObj = new Date(deadline);

  // Get the date components manually
  const day = ("0" + dateObj.getDate()).slice(-2);
  const month = ("0" + (dateObj.getMonth() + 1)).slice(-2); // Months are 0-based, so we add 1
  const year = dateObj.getFullYear();

  // Use toLocaleTimeString to format time with AM/PM
  const formattedTime = dateObj.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // This enables 12-hour format with AM/PM
  });

  // Combine date and time
  const formattedDate = `${day}/${month}/${year} ${formattedTime}`;

  return (
    <Card className="container mt-8 w-full max-w-lg p-8 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-50 border border-gray-300 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <CardContent className="space-y-6 text-center">
        {/* Company Name */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-extrabold text-gray-800 uppercase tracking-wider">
            {name}
          </h2>
        </div>

        {/* Deadline Info */}
        <div className="flex items-center justify-center space-x-2 bg-gray-100 p-2 rounded-lg shadow-md">
          <CalendarIcon className="h-6 w-6 text-gray-700" />
          <h2 className="text-lg font-semibold text-red-600">
            Deadline: <span className="font-bold">{formattedDate}</span>
          </h2>
        </div>

        {/* Action */}
        <p className="font-medium text-gray-700 text-lg flex items-center justify-center">
          Submit Your Concern
          <SmileIcon className="ml-2 w-6 h-6 text-gray-700 animate-bounce" />
        </p>
      </CardContent>
    </Card>
  );
}
