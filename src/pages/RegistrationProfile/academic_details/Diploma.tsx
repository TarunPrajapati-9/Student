import FormInput from "@/components/component/FormInput";
import GeneralSelect from "@/components/component/GeneralSelect";
import Loader from "@/components/component/Loader";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { DiplomaBranchOption } from "@/lib/constants";
import { DiplomaSchema } from "@/schema/academicDetailsSchema";
import { addDiplomaDetails } from "@/utils/profileFunctions/dataPoster";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Diploma = () => {
  const [selectedBranch, setSelectedBranch] = useState<string>("");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<DiplomaSchema>();
  const { toast } = useToast();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: addDiplomaDetails,
    onSuccess: (res) => {
      if (res.success) {
        toast({
          title: "Diploma Details",
          description: "Successfully Added",
          variant: "success",
        });
        navigate("/profile");
      } else {
        toast({
          title: "Error",
          description: res.message,
          variant: "destructive",
        });
      }
    },
  });

  const handleBranchChange = (value: string) => {
    setSelectedBranch(value);
    setValue("diploma_branch", value);
  };

  function onSubmit(data: DiplomaSchema) {
    if (!selectedBranch) {
      toast({
        title: "Required",
        description: "Branch is Required!",
        variant: "destructive",
      });
      return;
    }
    // console.log(data);
    mutate(data);
  }
  return (
    <div className="container p-8">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Diploma Details
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="my-8 space-y-6">
        <FormInput<DiplomaSchema>
          label="Enter DDCET Score (optional)"
          name="ddcet_score"
          register={register}
          disabled={isPending}
          errorMessage="Please enter valid DDCET Score"
          isInvalid={!!errors.ddcet_score}
          type="text"
          pattern={/^\d{3}$/}
        />
        <GeneralSelect
          label="Branch"
          options={DiplomaBranchOption}
          placeholder="Select Branch"
          value={selectedBranch}
          onChange={handleBranchChange}
        />

        <FormInput<DiplomaSchema>
          label="Diploma university"
          name="diploma_uni"
          register={register}
          required
          errorMessage="Please enter valid university name"
          isInvalid={!!errors.diploma_uni}
          type="text"
          disabled={isPending}
        />

        <FormInput<DiplomaSchema>
          label="Passing year"
          name="diploma_passing_year"
          register={register}
          required
          errorMessage="Please enter valid passing year"
          isInvalid={!!errors.diploma_passing_year}
          type="number"
          pattern={/^\d{4}$/}
          disabled={isPending}
        />

        <FormInput<DiplomaSchema>
          label="Gap Between 10 and Diploma"
          name="gap_10_diploma"
          register={register}
          required
          errorMessage="Please enter valid Gap Between 10 and Diploma"
          isInvalid={!!errors.gap_10_diploma}
          type="number"
          pattern={/^\d{1}$/}
          disabled={isPending}
        />

        <FormInput<DiplomaSchema>
          label="Enter Diploma CPI"
          name="diploma_cpi"
          register={register}
          disabled={isPending}
          errorMessage="Please enter valid Diploma CPI"
          isInvalid={!!errors.diploma_cpi}
          type="text"
          required
          pattern={/^(10(\.0{1,2})?|[0-9](\.[0-9]{1,2})?)$/}
        />
        <FormInput<DiplomaSchema>
          label="Enter Diploma percentage"
          name="diploma_per"
          register={register}
          required
          disabled={isPending}
          errorMessage="Please enter valid Diploma percentage"
          isInvalid={!!errors.diploma_per}
          type="text"
          pattern={/^(100(\.0{1,2})?|[0-9]{1,2}(\.[0-9]{1,2})?)$/}
        />
        <FormInput<DiplomaSchema>
          label="Enter Diploma CGPA"
          name="diploma_cgpa"
          register={register}
          disabled={isPending}
          errorMessage="Please enter valid Diploma CGPA"
          isInvalid={!!errors.diploma_cgpa}
          type="text"
          required
          pattern={/^(10(\.0{1,2})?|[0-9](\.[0-9]{1,2})?)$/}
        />

        <FormInput<DiplomaSchema>
          label="Enter Diploma Dead Back (0) if not any"
          name="diploma_dead_back"
          register={register}
          disabled={isPending}
          errorMessage="Please enter valid Diploma Dead Back"
          isInvalid={!!errors.diploma_dead_back}
          type="number"
          required
          pattern={/^\d{1,2}$/}
        />
        <Button disabled={isPending} className="w-full mt-6">
          {isPending ? <Loader /> : "Submit"}
        </Button>
      </form>
    </div>
  );
};

export default Diploma;
