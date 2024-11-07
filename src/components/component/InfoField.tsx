import { Label } from "@radix-ui/react-label";

export const InfoField = ({
  label,
  value,
}: {
  label: string;
  value: string | number | boolean;
}) => (
  <div className="mb-3">
    <Label htmlFor={label} className="font-bold">
      {label}
    </Label>
    <p>{value !== undefined && value !== null ? value.toString() : "N/A"}</p>
  </div>
);
