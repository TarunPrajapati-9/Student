// GeneralSelect.tsx
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Option } from "@/lib/constants"; // Adjust the import path as necessary
import { Label } from "../ui/label";

interface GeneralSelectProps {
  options: Option[];
  placeholder: string;
  value: string;
  label: string;
  onChange: (value: string) => void;
  error?: string;
}

const GeneralSelect: React.FC<GeneralSelectProps> = ({
  options,
  placeholder,
  value,
  label,
  onChange,
  error,
}) => {
  return (
    <div>
      <Label>Select {label}</Label>
      <Select onValueChange={onChange} value={value}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && <span className="text-red-500">{error}</span>}
    </div>
  );
};

export default GeneralSelect;
