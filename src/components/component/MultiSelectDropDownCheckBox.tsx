import { useToast } from "@/hooks/use-toast";
import React from "react";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface Option {
  value: string;
  label: string;
}

interface MultiSelectDropdownProps {
  options: Option[];
  labelValue: string;
  selectedValues: string[];
  setSelectedValues: (values: string[]) => void;
  maxSelections: number;
}

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({
  options,
  labelValue,
  selectedValues,
  setSelectedValues,
  maxSelections,
}) => {
  const { toast } = useToast();

  const handleCheckboxChange = (optionValue: string) => {
    if (selectedValues.includes(optionValue)) {
      setSelectedValues(
        selectedValues.filter((selected) => selected !== optionValue)
      );
    } else {
      if (selectedValues.length >= maxSelections) {
        toast({
          title: "Error",
          description: `You can only select up to ${maxSelections} options.`,
          variant: "destructive",
        });
      } else {
        setSelectedValues([...selectedValues, optionValue]);
      }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between w-full">
      {/* Selection Box */}
      <div className="w-full lg:w-1/2 flex flex-col mb-4 lg:mb-0">
        <Label className="mb-2">
          Select {labelValue} (up to {maxSelections})
        </Label>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full justify-between">
              Select Job Roles
              <ChevronDown className="h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-[var(--radix-popover-trigger-width)] p-0"
            align="start"
          >
            <div className="max-h-[300px] overflow-y-auto">
              {options.map((option) => (
                <div
                  key={option.value}
                  className="flex items-center px-3 py-2 hover:bg-gray-100"
                >
                  <Checkbox
                    id={option.value}
                    checked={selectedValues.includes(option.value)}
                    onCheckedChange={() => handleCheckboxChange(option.value)}
                    className="mr-2"
                  />
                  <label
                    htmlFor={option.value}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Selected Roles */}
      <div className="w-full lg:w-1/2 flex flex-col items-start lg:ml-4">
        <h3 className="font-bold mb-2">Selected Roles (Priority Wise):</h3>
        <div className="flex flex-wrap gap-2">
          {selectedValues.length > 0 ? (
            selectedValues.map((selectedValue, index) => {
              const selectedLabel = options.find(
                (option) => option.value === selectedValue
              )?.label;

              return (
                <span
                  key={selectedValue}
                  className="px-2 py-1 bg-blue-200 text-blue-800 rounded-full text-sm"
                >
                  {index + 1}. {selectedLabel}
                </span>
              );
            })
          ) : (
            <span className="text-red-500 font-semibold">
              No Selected Roles
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiSelectDropdown;
