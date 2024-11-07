import FormInput from "@/components/component/FormInput";
import FormInputWithOnChange from "@/components/component/FormInputOnChange";
import Loader from "@/components/component/Loader";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { SSCFormSchema } from "@/schema/academicDetailsSchema";
import { addSSCDetails } from "@/utils/profileFunctions/dataPoster";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function SSC() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SSCFormSchema>();
  const { toast } = useToast();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: addSSCDetails,
    onSuccess: (res) => {
      if (res.success) {
        // console.log(res);
        toast({
          title: "SSC Details",
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
  function onSubmit(data: SSCFormSchema) {
    // console.log(data);
    mutate(data);
  }
  return (
    <div className="container p-8">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        SSC Details
      </h2>
      <form className="my-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <FormInputWithOnChange<SSCFormSchema>
          label="Name as per SSC Mark Sheet"
          name="ssc_name"
          register={register}
          required
          disabled={isPending}
          errorMessage="Please enter valid name"
          isInvalid={!!errors.ssc_name}
          type="text"
          onChange={(e) => {
            e.target.value = e.target.value.toUpperCase();
          }}
        />
        <FormInputWithOnChange<SSCFormSchema>
          label="SSC Board"
          name="ssc_board"
          register={register}
          required
          errorMessage="Pleas enter valid SSC board"
          isInvalid={!!errors.ssc_board}
          type="text"
          disabled={isPending}
          onChange={(e) => {
            e.target.value = e.target.value.toUpperCase();
          }}
        />
        <FormInput<SSCFormSchema>
          label="SSC passing year"
          name="ssc_passing_year"
          register={register}
          required
          errorMessage="Pleas enter valid SSC passing year"
          isInvalid={!!errors.ssc_passing_year}
          type="number"
          pattern={/^\d{4}$/}
          disabled={isPending}
        />
        <FormInput<SSCFormSchema>
          label="Enter SSC percentage"
          name="ssc_per"
          register={register}
          disabled={isPending}
          required
          errorMessage="Please enter valid SSC percentage"
          isInvalid={!!errors.ssc_per}
          type="text"
          pattern={/^(100(\.0{1,2})?|[0-9]{1,2}(\.[0-9]{1,2})?)$/}
        />
        <FormInput<SSCFormSchema>
          label="Enter SSC cpi"
          name="ssc_cpi"
          register={register}
          disabled={isPending}
          required
          errorMessage="Please enter valid SSC cpi"
          isInvalid={!!errors.ssc_cpi}
          type="text"
          pattern={/^(10(\.0{1,2})?|[0-9](\.[0-9]{1,2})?)$/}
        />
        {/* Submit Button */}
        <Button className="w-full mt-6" disabled={isPending}>
          {isPending ? <Loader /> : "Submit"}
        </Button>
      </form>
    </div>
  );
}
