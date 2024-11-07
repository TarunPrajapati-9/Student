import FormInput from "@/components/component/FormInput";
import GeneralSelect from "@/components/component/GeneralSelect";
import Loader from "@/components/component/Loader";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { admissionBasedOn, UGBranchOptions } from "@/lib/constants";
import { BEFormSchema } from "@/schema/academicDetailsSchema";
import { addBEDetails } from "@/utils/profileFunctions/dataPoster";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function BE() {
  const [selectedBranch, setSelectedBranch] = useState<string>("");
  const [selectedAdmission, setSelectedAdmission] = useState<string>("");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<BEFormSchema>();

  const { toast } = useToast();
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: addBEDetails,
    onSuccess: (res) => {
      if (res.success) {
        toast({
          title: "BE Details",
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
    setValue("be_branch", value);
  };

  const handleAdmissionChange = (value: string) => {
    setSelectedAdmission(value);
    setValue("admission_based_on", value);
  };
  function onSubmit(data: BEFormSchema) {
    if (!selectedBranch) {
      toast({
        title: "Required",
        description: "Branch is Required!",
        variant: "destructive",
      });
      return;
    }
    if (!selectedAdmission) {
      toast({
        title: "Required",
        description: "Admission Based On is Required!",
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
        BE Details
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="my-8 space-y-6">
        <GeneralSelect
          label="Admission Based On"
          options={admissionBasedOn}
          placeholder="Select Admission Based On"
          value={selectedAdmission}
          onChange={handleAdmissionChange}
        />
        <FormInput<BEFormSchema>
          label="Enter BE University"
          name="be_uni"
          register={register}
          required
          errorMessage="Please enter valid BE University"
          isInvalid={!!errors.be_uni}
          type="text"
        />
        <FormInput<BEFormSchema>
          label="BE Passing year"
          name="be_passing_year"
          register={register}
          required
          errorMessage="Please enter valid passing year"
          isInvalid={!!errors.be_passing_year}
          type="number"
          pattern={/^\d{4}$/}
        />
        {/* Branch */}
        <GeneralSelect
          label="Branch"
          options={UGBranchOptions}
          placeholder="Select Branch"
          value={selectedBranch}
          onChange={handleBranchChange}
        />
        <FormInput<BEFormSchema>
          label="BE Sem1 SPI"
          name="be_sem1_spi"
          register={register}
          required
          errorMessage="Please enter valid BE Sem1 SPI"
          isInvalid={!!errors.be_sem1_spi}
          type="text"
          pattern={/^(10(\.0{1,2})?|[0-9](\.[0-9]{1,2})?)$/}
        />
        <FormInput<BEFormSchema>
          label="BE Sem2 SPI"
          name="be_sem2_spi"
          register={register}
          required
          errorMessage="Please enter valid BE Sem2 SPI"
          isInvalid={!!errors.be_sem2_spi}
          type="text"
          pattern={/^(10(\.0{1,2})?|[0-9](\.[0-9]{1,2})?)$/}
        />
        <FormInput<BEFormSchema>
          label="BE Sem3 SPI"
          name="be_sem3_spi"
          register={register}
          required
          errorMessage="Please enter valid BE Sem3 SPI"
          isInvalid={!!errors.be_sem3_spi}
          type="text"
          pattern={/^(10(\.0{1,2})?|[0-9](\.[0-9]{1,2})?)$/}
        />
        <FormInput<BEFormSchema>
          label="BE Sem4 SPI"
          name="be_sem4_spi"
          register={register}
          required
          errorMessage="Please enter valid BE Sem4 SPI"
          isInvalid={!!errors.be_sem4_spi}
          type="text"
          pattern={/^(10(\.0{1,2})?|[0-9](\.[0-9]{1,2})?)$/}
        />
        <FormInput<BEFormSchema>
          label="BE Sem5 SPI"
          name="be_sem5_spi"
          register={register}
          required
          errorMessage="Please enter valid BE Sem5 SPI"
          isInvalid={!!errors.be_sem5_spi}
          type="text"
          pattern={/^(10(\.0{1,2})?|[0-9](\.[0-9]{1,2})?)$/}
        />
        <FormInput<BEFormSchema>
          label="BE Sem6 SPI"
          name="be_sem6_spi"
          register={register}
          errorMessage="Please enter valid BE Sem6 SPI"
          isInvalid={!!errors.be_sem6_spi}
          type="text"
          pattern={/^(10(\.0{1,2})?|[0-9](\.[0-9]{1,2})?)$/}
        />
        <FormInput<BEFormSchema>
          label="BE Sem7 SPI"
          name="be_sem7_spi"
          register={register}
          errorMessage="Please enter valid BE Sem7 SPI"
          isInvalid={!!errors.be_sem7_spi}
          type="text"
          pattern={/^(10(\.0{1,2})?|[0-9](\.[0-9]{1,2})?)$/}
        />
        <FormInput<BEFormSchema>
          label="BE Sem8 SPI"
          name="be_sem8_spi"
          register={register}
          errorMessage="Please enter valid BE Sem8 SPI"
          isInvalid={!!errors.be_sem8_spi}
          type="text"
          pattern={/^(10(\.0{1,2})?|[0-9](\.[0-9]{1,2})?)$/}
        />
        <FormInput<BEFormSchema>
          label="BE CPI(Last Semester)"
          name="be_cpi"
          required
          register={register}
          errorMessage="Please enter valid BE CPI"
          isInvalid={!!errors.be_cpi}
          type="text"
          pattern={/^(10(\.0{1,2})?|[0-9](\.[0-9]{1,2})?)$/}
        />
        <FormInput<BEFormSchema>
          label="BE CGPA(Last Semester)"
          name="be_cgpa"
          required
          register={register}
          errorMessage="Please enter valid BE CGPA"
          isInvalid={!!errors.be_cgpa}
          type="text"
          pattern={/^(10(\.0{1,2})?|[0-9](\.[0-9]{1,2})?)$/}
        />
        <FormInput<BEFormSchema>
          label="Enter BE Dead Back (0) if not any"
          name="be_dead_back"
          register={register}
          disabled={isPending}
          errorMessage="Please enter valid BE Dead Back"
          isInvalid={!!errors.be_dead_back}
          type="number"
          required
          pattern={/^\d{1,2}$/}
        />
        <FormInput<BEFormSchema>
          label="Enter BE Live Back (0) if not any"
          name="be_live_back"
          register={register}
          disabled={isPending}
          errorMessage="Please enter valid BE Live Back"
          isInvalid={!!errors.be_live_back}
          type="number"
          required
          pattern={/^\d{1,2}$/}
        />
        <FormInput<BEFormSchema>
          label="Gap Between BE and 12/Diploma"
          name="gap_12_dip_BE"
          register={register}
          required
          errorMessage="Please enter valid Gap Between BE and 12/Diploma"
          isInvalid={!!errors.gap_12_dip_BE}
          type="number"
          pattern={/^\d{1}$/}
          disabled={isPending}
        />
        <Button disabled={isPending} className="w-full mt-6">
          {isPending ? <Loader /> : "Submit"}
        </Button>
      </form>
    </div>
  );
}
