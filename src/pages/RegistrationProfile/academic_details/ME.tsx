import FormInput from "@/components/component/FormInput";
import GeneralSelect from "@/components/component/GeneralSelect";
import Loader from "@/components/component/Loader";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { branchOptions, specializationOptions } from "@/lib/constants";
import { MESchema } from "@/schema/academicDetailsSchema";
import { addMEDetails } from "@/utils/profileFunctions/dataPoster";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function MEForm() {
  const [selectedBranch, setSelectedBranch] = useState<string>("");
  const [selectedSpecialization, setSelectedSpecialization] =
    useState<string>("");

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<MESchema>();

  const { toast } = useToast();
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: addMEDetails,
    onSuccess: (res) => {
      if (res.success) {
        toast({
          title: "ME Details",
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
    setValue("me_branch", value);
  };

  const handleSpecializationChange = (value: string) => {
    setSelectedSpecialization(value);
    setValue("me_specialization", value);
  };

  function onSubmit(data: MESchema) {
    if (!selectedBranch || !selectedSpecialization) {
      toast({
        title: "Required",
        description: "Branch/Specialization is Required!",
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
        ME Details
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="my-8 space-y-6">
        {/* Gate Score */}
        <FormInput<MESchema>
          label="Gate Score(Optional)"
          name="gate_score"
          register={register}
          disabled={isPending}
          errorMessage="Please enter a valid GATE score"
          isInvalid={!!errors.gate_score}
          type="text"
        />

        {/* PGCET Score */}
        <FormInput<MESchema>
          label="PGCET Score(Optional)"
          name="pgcet_score"
          register={register}
          disabled={isPending}
          errorMessage="Please enter a valid PGCET score"
          isInvalid={!!errors.pgcet_score}
          type="text"
        />

        {/* ME Passing Year */}
        <FormInput<MESchema>
          label="ME Passing Year"
          name="me_passing_year"
          register={register}
          disabled={isPending}
          required
          errorMessage="Please enter a valid passing year"
          isInvalid={!!errors.me_passing_year}
          type="number"
          pattern={/^\d{4}$/} // Ensures year is four digits
        />

        {/* ME Branch */}
        <GeneralSelect
          options={branchOptions}
          placeholder="Select Branch"
          value={selectedBranch}
          label="ME Branch"
          onChange={handleBranchChange}
        />

        {/* Specialization */}
        <GeneralSelect
          options={specializationOptions[selectedBranch] || []}
          placeholder="Select Specialization"
          value={selectedSpecialization}
          label="ME Specialization"
          onChange={handleSpecializationChange}
        />

        {/* Semester 1 SPI */}
        <FormInput<MESchema>
          label="Sem 1 SPI"
          name="me_sem1_spi"
          register={register}
          disabled={isPending}
          required
          errorMessage="Please enter valid SPI for Sem 1"
          isInvalid={!!errors.me_sem1_spi}
          type="text"
          pattern={/^(10(\.0{1,2})?|[0-9](\.[0-9]{1,2})?)$/} // Allows decimal numbers like 9.8
        />

        {/* Semester 2 SPI */}
        <FormInput<MESchema>
          label="Sem 2 SPI"
          name="me_sem2_spi"
          register={register}
          disabled={isPending}
          required
          errorMessage="Please enter valid SPI for Sem 2"
          isInvalid={!!errors.me_sem2_spi}
          type="text"
          pattern={/^(10(\.0{1,2})?|[0-9](\.[0-9]{1,2})?)$/}
        />

        {/* Semester 3 SPI */}
        <FormInput<MESchema>
          label="Sem 3 SPI"
          name="me_sem3_spi"
          register={register}
          disabled={isPending}
          errorMessage="Please enter valid SPI for Sem 3"
          isInvalid={!!errors.me_sem3_spi}
          type="text"
          pattern={/^(10(\.0{1,2})?|[0-9](\.[0-9]{1,2})?)$/}
        />

        {/* Semester 4 SPI */}
        <FormInput<MESchema>
          label="Sem 4 SPI"
          name="me_sem4_spi"
          register={register}
          disabled={isPending}
          errorMessage="Please enter valid SPI for Sem 4"
          isInvalid={!!errors.me_sem4_spi}
          type="text"
          pattern={/^(10(\.0{1,2})?|[0-9](\.[0-9]{1,2})?)$/}
        />

        {/* ME CPI */}
        <FormInput<MESchema>
          label="ME CPI"
          name="me_cpi"
          register={register}
          disabled={isPending}
          required
          errorMessage="Please enter valid CPI"
          isInvalid={!!errors.me_cpi}
          type="text"
          pattern={/^(10(\.0{1,2})?|[0-9](\.[0-9]{1,2})?)$/} // Allows 0-10 with up to 2 decimal places
        />

        {/* Dead Back */}
        <FormInput<MESchema>
          label="Dead Back (0 if none)"
          name="me_dead_back"
          register={register}
          disabled={isPending}
          required
          errorMessage="Please enter valid dead back"
          isInvalid={!!errors.me_dead_back}
          type="number"
          pattern={/^(0|[1-9]\d*)$/} // Allows whole numbers, including 0
        />

        {/* Live Back */}
        <FormInput<MESchema>
          label="Live Back (0 if none)"
          name="me_live_back"
          register={register}
          disabled={isPending}
          required
          errorMessage="Please enter valid live back"
          isInvalid={!!errors.me_live_back}
          type="number"
          pattern={/^(0|[1-9]\d*)$/}
        />

        {/* Total Back */}
        {/* <FormInput<MESchema>
          label="Total Back (0 if none)"
          name="me_total_back"
          register={register}
          disabled={isPending}
          required
          errorMessage="Please enter valid live back"
          isInvalid={!!errors.me_total_back}
          type="number"
          pattern={/^(0|[1-9]\d*)$/}
        /> */}

        {/* Gap Between BE and ME */}
        <FormInput<MESchema>
          label="Gap Between BE and ME (0 if none)"
          name="gap_be_me"
          register={register}
          disabled={isPending}
          required
          errorMessage="Please enter valid gap between BE and ME"
          isInvalid={!!errors.gap_be_me}
          type="number"
          pattern={/^(0|[1-9]\d*)$/}
        />

        {/* Submit Button */}
        <Button disabled={isPending} className="w-full mt-6">
          {isPending ? <Loader /> : "Submit"}
        </Button>
      </form>
    </div>
  );
}
