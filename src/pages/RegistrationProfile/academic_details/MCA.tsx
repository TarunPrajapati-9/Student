import { useForm } from "react-hook-form";
import FormInput from "@/components/component/FormInput";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { MCASpecialization } from "@/lib/constants";
import GeneralSelect from "@/components/component/GeneralSelect";
import { MCAFormSchema } from "@/schema/academicDetailsSchema";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { addMCADetails } from "@/utils/profileFunctions/dataPoster";
import Loader from "@/components/component/Loader";

export default function MCA() {
  const [selectedSpecialization, setSelectedSpecialization] =
    useState<string>("");
  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm<MCAFormSchema>();
  const { toast } = useToast();
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: addMCADetails,
    onSuccess: (res) => {
      if (res.success) {
        toast({
          title: "MCA Details",
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
  const handleSpecializationChange = (value: string) => {
    setSelectedSpecialization(value);
    setValue("pg_specialization", value);
  };
  function onSubmit(data: MCAFormSchema) {
    if (!selectedSpecialization) {
      toast({
        title: "Required",
        description: "Branch is Required!",
        variant: "destructive",
      });
      return;
    }
    console.log(data);
    mutate(data);
  }
  return (
    <div className="container p-8">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        UG Details
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="my-8 space-y-6">
        <FormInput<MCAFormSchema>
          label="UG Passing Year"
          name="ug_passing_year"
          register={register}
          required
          errorMessage="Please enter valid passing year"
          isInvalid={!!errors.ug_passing_year}
          type="number"
        />
        <FormInput<MCAFormSchema>
          label="UG University"
          name="ug_uni"
          register={register}
          required
          errorMessage="Please enter valid university name"
          isInvalid={!!errors.ug_uni}
          type="text"
        />
        <FormInput<MCAFormSchema>
          label="Sem 1 Percentage"
          name="ug_sem1_per"
          register={register}
          required
          errorMessage="Please enter valid sem 1 percentage"
          isInvalid={!!errors.ug_sem1_per}
          pattern={/^(100(\.0{1,2})?|[0-9]{1,2}(\.[0-9]{1,2})?)$/}
          type="text"
        />
        <FormInput<MCAFormSchema>
          label="Sem 2 Percentage"
          name="ug_sem2_per"
          register={register}
          required
          errorMessage="Please enter valid sem 2 percentage"
          isInvalid={!!errors.ug_sem2_per}
          pattern={/^(100(\.0{1,2})?|[0-9]{1,2}(\.[0-9]{1,2})?)$/}
          type="text"
        />
        <FormInput<MCAFormSchema>
          label="Sem 3 Percentage"
          name="ug_sem3_per"
          register={register}
          required
          errorMessage="Please enter valid sem 3 percentage"
          isInvalid={!!errors.ug_sem3_per}
          pattern={/^(100(\.0{1,2})?|[0-9]{1,2}(\.[0-9]{1,2})?)$/}
          type="text"
        />
        <FormInput<MCAFormSchema>
          label="Sem 4 Percentage"
          name="ug_sem4_per"
          register={register}
          required
          errorMessage="Please enter valid sem 4 percentage"
          isInvalid={!!errors.ug_sem4_per}
          pattern={/^(100(\.0{1,2})?|[0-9]{1,2}(\.[0-9]{1,2})?)$/}
          type="text"
        />
        <FormInput<MCAFormSchema>
          label="Sem 5 Percentage"
          name="ug_sem5_per"
          register={register}
          required
          errorMessage="Please enter valid sem 5 percentage"
          isInvalid={!!errors.ug_sem5_per}
          pattern={/^(100(\.0{1,2})?|[0-9]{1,2}(\.[0-9]{1,2})?)$/}
          type="text"
        />
        <FormInput<MCAFormSchema>
          label="Sem 6 Percentage"
          name="ug_sem6_per"
          register={register}
          required
          errorMessage="Please enter valid sem 6 percentage"
          isInvalid={!!errors.ug_sem6_per}
          pattern={/^(100(\.0{1,2})?|[0-9]{1,2}(\.[0-9]{1,2})?)$/}
          type="text"
        />
        <FormInput<MCAFormSchema>
          label="Sem 7 Percentage"
          name="ug_sem7_per"
          register={register}
          required
          errorMessage="Please enter valid sem 7 percentage"
          isInvalid={!!errors.ug_sem7_per}
          pattern={/^(100(\.0{1,2})?|[0-9]{1,2}(\.[0-9]{1,2})?)$/}
          type="text"
        />
        <FormInput<MCAFormSchema>
          label="Sem 8 Percentage"
          name="ug_sem8_per"
          register={register}
          required
          errorMessage="Please enter valid sem 8 percentage"
          isInvalid={!!errors.ug_sem8_per}
          pattern={/^(100(\.0{1,2})?|[0-9]{1,2}(\.[0-9]{1,2})?)$/}
          type="text"
        />
        <FormInput<MCAFormSchema>
          label="Overall UG Percentage"
          name="ug_per"
          register={register}
          required
          errorMessage="Please enter valid UG percentage"
          isInvalid={!!errors.ug_per}
          pattern={/^(100(\.0{1,2})?|[0-9]{1,2}(\.[0-9]{1,2})?)$/}
          type="text"
        />
        <FormInput<MCAFormSchema>
          label="Dead Backlog"
          name="ug_dead_back"
          register={register}
          required
          errorMessage="Please enter valid dead backlog"
          isInvalid={!!errors.ug_dead_back}
          pattern={/^\d{1,2}$/}
          type="number"
        />
        <FormInput<MCAFormSchema>
          label="UG Branch"
          name="ug_branch"
          register={register}
          required
          errorMessage="Please select valid UG branch"
          isInvalid={!!errors.ug_branch}
          type="text"
        />
        <FormInput<MCAFormSchema>
          label="Gap Between UG and PG"
          name="gap_ug_pg"
          register={register}
          required
          errorMessage="Please enter valid gap between UG and PG"
          isInvalid={!!errors.gap_ug_pg}
          pattern={/^\d{1,2}$/}
          type="number"
        />
        <FormInput<MCAFormSchema>
          label="Gap Between 12th and UG"
          name="gap_12_ug"
          register={register}
          required
          errorMessage="Please enter valid gap between 12th and UG"
          isInvalid={!!errors.gap_12_ug}
          pattern={/^\d{1,2}$/}
          type="number"
        />
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          MCA Details
        </h2>
        <FormInput<MCAFormSchema>
          label="PG Passing year"
          name="pg_passing_year"
          register={register}
          required
          errorMessage="Please enter valid PG passing year"
          isInvalid={!!errors.pg_passing_year}
          type="number"
          disabled={isPending}
          pattern={/^\d{4}$/}
        />
        <FormInput<MCAFormSchema>
          label="Sem 1 SPI"
          name="pg_sem1_spi"
          register={register}
          required
          errorMessage="Please enter valid sem 1 spi"
          isInvalid={!!errors.pg_sem1_spi}
          type="text"
          pattern={/^(10(\.0{1,2})?|[0-9](\.[0-9]{1,2})?)$/}
          disabled={isPending}
        />
        <FormInput<MCAFormSchema>
          label="Sem 2 SPI"
          name="pg_sem2_spi"
          register={register}
          required
          errorMessage="Please enter valid sem 2 spi"
          isInvalid={!!errors.pg_sem2_spi}
          type="text"
          pattern={/^(10(\.0{1,2})?|[0-9](\.[0-9]{1,2})?)$/}
          disabled={isPending}
        />
        <FormInput<MCAFormSchema>
          label="Sem 3 SPI"
          name="pg_sem3_spi"
          register={register}
          errorMessage="Please enter valid sem 3 spi"
          isInvalid={!!errors.pg_sem3_spi}
          type="text"
          pattern={/^(10(\.0{1,2})?|[0-9](\.[0-9]{1,2})?)$/}
          disabled={isPending}
        />
        <FormInput<MCAFormSchema>
          label="Sem 4 SPI"
          name="pg_sem4_spi"
          register={register}
          errorMessage="Please enter valid sem 4 spi"
          isInvalid={!!errors.pg_sem4_spi}
          type="text"
          pattern={/^(10(\.0{1,2})?|[0-9](\.[0-9]{1,2})?)$/}
          disabled={isPending}
        />
        <FormInput<MCAFormSchema>
          label="Enter MCA CPI"
          name="pg_cpi"
          register={register}
          disabled={isPending}
          errorMessage="Please enter valid MCA CPI"
          isInvalid={!!errors.pg_cpi}
          type="text"
          required
          pattern={/^(10(\.0{1,2})?|[0-9](\.[0-9]{1,2})?)$/}
        />
        <FormInput<MCAFormSchema>
          label="Enter MCA Dead Back (0) if not any"
          name="pg_dead_back"
          register={register}
          disabled={isPending}
          errorMessage="Please enter valid MCA Dead Back"
          isInvalid={!!errors.pg_dead_back}
          type="text"
          required
          pattern={/^\d{1,2}$/}
        />
        <FormInput<MCAFormSchema>
          label="Enter MCA Live Back (0) if not any"
          name="pg_live_back"
          register={register}
          disabled={isPending}
          errorMessage="Please enter valid MCA Live Back"
          isInvalid={!!errors.pg_live_back}
          type="text"
          required
          pattern={/^\d{1,2}$/}
        />
        {/* <FormInput<MCAFormSchema>
          label="Enter MCA Total Back (0) if not any"
          name="pg_total_back"
          register={register}
          disabled={isPending}
          errorMessage="Please enter valid MCA Total Back"
          isInvalid={!!errors.pg_total_back}
          type="text"
          required
          pattern={/^\d{1,2}$/}
        /> */}
        <GeneralSelect
          label="Specialization"
          options={MCASpecialization}
          placeholder="Select Specialization"
          value={selectedSpecialization}
          onChange={handleSpecializationChange}
        />
        <Button disabled={isPending} className="w-full mt-6">
          {isPending ? <Loader /> : "Submit"}
        </Button>
      </form>
    </div>
  );
}
