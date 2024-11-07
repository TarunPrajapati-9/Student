import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Schedule } from "@/utils/types";
import {
  CalendarIcon,
  InfoIcon,
  MapPinIcon,
  ClockIcon,
  LaptopIcon, // Using LaptopIcon for the mode
} from "lucide-react";

export function ScheduleCard({ data }: { data: Schedule }) {
  let date = "N/A";
  let time = "N/A";

  // Check if dateTime is valid and can be parsed
  if (data?.dateTime) {
    const dateObject = new Date(data.dateTime);
    if (!isNaN(dateObject.getTime())) {
      // Extract the date in YYYY-MM-DD format
      date = dateObject.toISOString().split("T")[0];
      // Extract the time in HH:MM:SS format
      time = dateObject.toISOString().split("T")[1].split(".")[0];
    }
  }

  return (
    <div className="flex justify-center my-5">
      <Card className="w-full max-w-6xl border rounded-lg shadow-lg p-4 bg-white">
        {/* Increased max width */}
        <CardHeader className="bg-slate-200 text-black p-4 rounded-t-lg">
          <CardTitle className="text-lg font-semibold">
            Company Drive Schedule
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 p-4">
          {/* Date */}
          <div className="grid grid-cols-[auto_1fr] items-center gap-2">
            <CalendarIcon className="w-6 h-6 text-blue-600" />
            <div>
              <p className="font-medium text-gray-700">Date</p>
              <p className="text-gray-500">{date}</p>
            </div>
          </div>

          {/* Time */}
          <div className="grid grid-cols-[auto_1fr] items-center gap-2">
            <ClockIcon className="w-6 h-6 text-blue-600" />
            <div>
              <p className="font-medium text-gray-700">Time</p>
              <p className="text-gray-500">{time}</p>
            </div>
          </div>

          {/* Venue */}
          <div className="grid grid-cols-[auto_1fr] items-center gap-2">
            <MapPinIcon className="w-6 h-6 text-blue-600" />
            <div>
              <p className="font-medium text-gray-700">Venue</p>
              <p className="text-gray-500">{data.venue || "N/A"}</p>
            </div>
          </div>

          {/* Mode */}
          <div className="grid grid-cols-[auto_1fr] items-center gap-2">
            <LaptopIcon className="w-6 h-6 text-blue-600" />{" "}
            {/* Updated icon */}
            <div>
              <p className="font-medium text-gray-700">Mode</p>
              <p className="text-gray-500">
                {data.mode ? "Online" : "Offline"}
              </p>
            </div>
          </div>

          {/* Other Details */}
          <div className="grid grid-cols-[auto_1fr] items-center gap-2">
            <InfoIcon className="w-6 h-6 text-blue-600" />
            <div>
              <p className="font-medium text-gray-700">Other Details</p>
              <p className="text-gray-500">{data.process || "N/A"}</p>
            </div>
          </div>
        </CardContent>
        <hr className="border-gray-300" />
      </Card>
    </div>
  );
}
