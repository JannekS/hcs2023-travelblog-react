import { CalendarDaysIcon } from "@heroicons/react/24/outline";

function TravelDuration({ startDateStr, endDateStr }) {
  const start = new Date(startDateStr);
  const end = new Date(endDateStr);
  return (
    <div className="flex flex-row items-center justify-start space-x-2">
      <CalendarDaysIcon className="w-5 h-5" />
      <p>
        {start.toLocaleDateString("en-GB")} to {end.toLocaleDateString("en-GB")}
      </p>
    </div>
  );
}

export default TravelDuration;
