import * as React from "react";
import { Label } from "@/components/ui/label";

type RadioProps = {
  label: string;
  name: string;
  setValue: (value: boolean) => void;
};

export function BooleanRadioGroup({ label, name, setValue }: RadioProps) {
  const [selectedValue, setSelectedValue] = React.useState<string | undefined>(
    undefined
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
    setValue(value === "true");
  };

  return (
    <div className="flex">
      <Label>{label}</Label>
      <div className="flex items-center space-x-4 ml-4">
        <div className="flex items-center space-x-2">
          <input
            type="radio"
            id={`${name}-yes`}
            name={name}
            value="true"
            checked={selectedValue === "true"}
            onChange={handleChange}
          />
          <Label htmlFor={`${name}-yes`}>Yes</Label>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="radio"
            id={`${name}-no`}
            name={name}
            value="false"
            checked={selectedValue === "false"}
            onChange={handleChange}
          />
          <Label htmlFor={`${name}-no`}>No</Label>
        </div>
      </div>
    </div>
  );
}
