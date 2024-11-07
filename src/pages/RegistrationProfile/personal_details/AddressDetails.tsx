import FormInput from "@/components/component/FormInput";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { getErrorMessage } from "@/utils/errorMessage";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { addAddressDetails } from "@/utils/profileFunctions/dataPoster";
import { AddressDetailsFormSchema } from "@/schema/personalDetailsSchema";
import Loader from "@/components/component/Loader";
import FormInputWithOnChange from "@/components/component/FormInputOnChange";

function AddressDetails() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const { mutate, isPending } = useMutation({
    mutationFn: addAddressDetails,
    onSuccess: (res) => {
      if (res.success) {
        toast({
          title: "Address Details",
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressDetailsFormSchema>();
  function onSubmit(data: AddressDetailsFormSchema) {
    // console.log(data);
    mutate(data);
  }
  return (
    <div className="container p-8">
      <h1 className="text-3xl font-bold mb-1">Address Details</h1>
      <h3 className="text-md font-light mb-8">
        Enter your permanent and present address.
      </h3>
      <form className="space-y-8 mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <FormInputWithOnChange<AddressDetailsFormSchema>
          label="Permanent Address"
          name="perm_address"
          register={register}
          disabled={isPending}
          errorMessage="Permanent Address is required"
          isInvalid={!!errors.perm_address}
          required
          isTextArea
          onChange={(e) => {
            e.target.value = e.target.value.toUpperCase();
          }}
        />
        <FormInputWithOnChange<AddressDetailsFormSchema>
          label="Permanent City"
          name="perm_city"
          register={register}
          disabled={isPending}
          errorMessage={getErrorMessage(
            "Permanent City",
            errors.perm_city?.type
          )}
          isInvalid={!!errors.perm_city}
          required
          type="text"
          pattern={/^[a-zA-Z\s]*$/}
          onChange={(e) => {
            e.target.value = e.target.value.toUpperCase();
          }}
        />
        <FormInputWithOnChange<AddressDetailsFormSchema>
          label="Permanent State"
          name="perm_state"
          register={register}
          disabled={isPending}
          errorMessage={getErrorMessage(
            "Permanent State",
            errors.perm_state?.type
          )}
          isInvalid={!!errors.perm_state}
          required
          type="text"
          pattern={/^[a-zA-Z\s]*$/}
          onChange={(e) => {
            e.target.value = e.target.value.toUpperCase();
          }}
        />
        <FormInput<AddressDetailsFormSchema>
          label="Permanent PIN Code"
          name="perm_pin"
          register={register}
          disabled={isPending}
          errorMessage={getErrorMessage("Permanent PIN", errors.perm_pin?.type)}
          isInvalid={!!errors.perm_pin}
          required
          type="number"
        />
        <FormInputWithOnChange<AddressDetailsFormSchema>
          label="Present Address"
          name="pres_address"
          register={register}
          disabled={isPending}
          errorMessage="Present Address is required"
          isInvalid={!!errors.pres_address}
          required
          isTextArea
          onChange={(e) => {
            e.target.value = e.target.value.toUpperCase();
          }}
        />
        <FormInputWithOnChange<AddressDetailsFormSchema>
          label="Present City"
          name="pres_city"
          register={register}
          disabled={isPending}
          errorMessage={getErrorMessage("Present City", errors.pres_city?.type)}
          isInvalid={!!errors.pres_city}
          required
          type="text"
          pattern={/^[a-zA-Z\s]*$/}
          onChange={(e) => {
            e.target.value = e.target.value.toUpperCase();
          }}
        />
        <FormInput<AddressDetailsFormSchema>
          label="Present PIN Code"
          name="pres_pin"
          register={register}
          disabled={isPending}
          errorMessage={getErrorMessage("Present PIN", errors.pres_pin?.type)}
          isInvalid={!!errors.pres_pin}
          required
          type="number"
          pattern={/^\d{6}$/}
        />
        {/* Submit Button */}
        <Button className="w-full mt-6" disabled={isPending}>
          {isPending ? <Loader /> : "Submit"}
        </Button>
      </form>
    </div>
  );
}

export default AddressDetails;
