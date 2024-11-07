import { useForm } from "react-hook-form";
import FormInput from "@/components/component/FormInput";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { HSCSchema } from "@/schema/academicDetailsSchema";
import { useMutation } from "@tanstack/react-query";
import { addHSCDetails } from "@/utils/profileFunctions/dataPoster";
import { useNavigate } from "react-router-dom";
import Loader from "@/components/component/Loader";

export default function HSC() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HSCSchema>();
  const { toast } = useToast();
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: addHSCDetails,
    onSuccess: (res) => {
      if (res.success) {
        toast({
          title: "HSC Details",
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
  function onSubmit(data: HSCSchema) {
    // console.log(data);
    mutate(data);
  }
  return (
    <div className="container p-8">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        HSC Details
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="my-8 space-y-6">
        <FormInput<HSCSchema>
          label="HSC Physics marks"
          name="physics"
          register={register}
          required
          disabled={isPending}
          errorMessage="Please enter valid physics mark"
          isInvalid={!!errors.physics}
          type="text"
          pattern={/^(100|[1-9][0-9]?|0)$/}
        />

        <FormInput<HSCSchema>
          label="HSC Maths marks"
          name="math"
          register={register}
          required
          disabled={isPending}
          errorMessage="Please enter valid maths mark"
          isInvalid={!!errors.math}
          type="text"
          pattern={/^(100|[1-9][0-9]?|0)$/}
        />
        <FormInput<HSCSchema>
          label="HSC Chemistry marks"
          name="chemistry"
          register={register}
          required
          disabled={isPending}
          errorMessage="Please enter valid chemistry mark"
          isInvalid={!!errors.chemistry}
          type="text"
          pattern={/^(100|[1-9][0-9]?|0)$/}
        />
        <FormInput<HSCSchema>
          label="HSC total marks (all subjects)"
          name="total_mark"
          register={register}
          required
          disabled={isPending}
          errorMessage="Please enter valid total marks"
          isInvalid={!!errors.total_mark}
          type="number"
          pattern={/^\d+$/}
        />
        <FormInput<HSCSchema>
          label="HSC obtained marks (all subjects)"
          name="obtain_mark"
          register={register}
          required
          disabled={isPending}
          errorMessage="Please enter valid obtained marks"
          isInvalid={!!errors.obtain_mark}
          type="number"
          pattern={/^\d+$/}
        />
        <FormInput<HSCSchema>
          label="Gap Between 10 to 12(if no 0)"
          name="gap_10_12"
          register={register}
          required
          disabled={isPending}
          errorMessage="Please enter valid Between 10 to 12"
          isInvalid={!!errors.gap_10_12}
          type="number"
          pattern={/^\d+$/}
        />
        <FormInput<HSCSchema>
          label="HSC Board"
          name="hsc_board"
          register={register}
          required
          errorMessage="Pleas enter valid HSC board"
          isInvalid={!!errors.hsc_board}
          type="text"
          disabled={isPending}
        />
        <FormInput<HSCSchema>
          label="HSC passing year"
          name="hsc_passing_year"
          register={register}
          required
          errorMessage="Pleas enter valid HSC passing year"
          isInvalid={!!errors.hsc_passing_year}
          type="number"
          pattern={/^\d{4}$/}
          disabled={isPending}
        />

        <FormInput<HSCSchema>
          label="Enter HSC percentage"
          name="hsc_per"
          register={register}
          required
          disabled={isPending}
          errorMessage="Please enter valid HSC percentage"
          isInvalid={!!errors.hsc_per}
          type="text"
          pattern={/^(100(\.0{1,2})?|[0-9]{1,2}(\.[0-9]{1,2})?)$/}
        />

        <FormInput<HSCSchema>
          label="Enter HSC cpi"
          name="hsc_cpi"
          register={register}
          required
          disabled={isPending}
          errorMessage="Please enter valid HSC cpi"
          isInvalid={!!errors.hsc_cpi}
          type="text"
          pattern={/^(10(\.0{1,2})?|[0-9](\.[0-9]{1,2})?)$/}
        />
        <FormInput<HSCSchema>
          label="Enter JEE Percentile"
          name="jee_percentile"
          register={register}
          disabled={isPending}
          errorMessage="Please enter valid JEE Percentile"
          isInvalid={!!errors.jee_percentile}
          type="text"
          pattern={/^(100(\.0{1,2})?|[0-9]{1,2}(\.[0-9]{1,2})?)$/}
        />
        <FormInput<HSCSchema>
          label="Enter GUJCET Score"
          name="gujcet_score"
          register={register}
          required
          disabled={isPending}
          errorMessage="Please enter valid GUJCET Score"
          isInvalid={!!errors.gujcet_score}
          type="text"
          pattern={
            /^(120(\.0{1,2})?|[1-9][0-9]?(\.[0-9]{1,2})?|1[01][0-9](\.[0-9]{1,2})?)$/
          }
        />
        <FormInput<HSCSchema>
          label="Enter GUJCET Physics Marks"
          name="gujcet_physics"
          register={register}
          required
          disabled={isPending}
          errorMessage="Please enter valid GUJCET Physics Marks"
          isInvalid={!!errors.gujcet_physics}
          type="text"
          pattern={/^(100(\.0{1,2})?|[0-9]{1,2}(\.[0-9]{1,2})?)$/}
        />
        <FormInput<HSCSchema>
          label="Enter GUJCET Maths Marks"
          name="gujcet_math"
          register={register}
          required
          disabled={isPending}
          errorMessage="Please enter valid GUJCET Maths Marks"
          isInvalid={!!errors.gujcet_math}
          type="text"
          pattern={/^(100(\.0{1,2})?|[0-9]{1,2}(\.[0-9]{1,2})?)$/}
        />
        <FormInput<HSCSchema>
          label="Enter GUJCET Chemistry Marks"
          name="gujcet_chem"
          register={register}
          required
          disabled={isPending}
          errorMessage="Please enter valid GUJCET Chemistry Marks"
          isInvalid={!!errors.gujcet_chem}
          type="text"
          pattern={/^(100(\.0{1,2})?|[0-9]{1,2}(\.[0-9]{1,2})?)$/}
        />
        <FormInput<HSCSchema>
          label="Enter GUJCET Percentile"
          name="gujcet_percentile"
          register={register}
          required
          disabled={isPending}
          errorMessage="Please enter valid GUJCET Percentile"
          isInvalid={!!errors.gujcet_percentile}
          type="text"
          pattern={/^(100(\.0{1,2})?|[0-9]{1,2}(\.[0-9]{1,2})?)$/}
        />
        <FormInput<HSCSchema>
          label="Enter GUJCET Total"
          name="gujcet_total"
          register={register}
          required
          disabled={isPending}
          errorMessage="Please enter valid GUJCET Total"
          isInvalid={!!errors.gujcet_total}
          type="text"
          pattern={/^\d+$/}
        />

        {/* Submit Button */}
        <Button className="w-full mt-6" disabled={isPending}>
          {isPending ? <Loader /> : "Submit"}
        </Button>
      </form>
    </div>
  );
}
