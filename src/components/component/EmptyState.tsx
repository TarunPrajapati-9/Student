import { cn } from "@/lib/utils";
// import { AlertTriangleIcon } from "lucide-react"; // Import an attractive icon

type Props = {
  title: string;
  description?: string;
  className?: string;
};

const EmptyState = ({ title, className, description }: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center my-10",
        className
      )}
    >
      {/* Icon for added emphasis */}
      {/* <AlertTriangleIcon className="w-8 h-8 text-red-500 mb-1" /> */}
      <h1 className="scroll-m-20 text-xl font-bold tracking-tight text-center text-red-600">
        {title}
      </h1>
      {description && (
        <h2 className="text-lg font-medium text-center text-gray-600">
          {description}
        </h2>
      )}
    </div>
  );
};

export default EmptyState;
