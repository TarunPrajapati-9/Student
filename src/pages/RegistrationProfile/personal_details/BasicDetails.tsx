import { BooleanRadioGroup } from "@/components/component/RadioButton";
import FormInput from "@/components/component/FormInput";
import GeneralSelect from "@/components/component/GeneralSelect";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  genderOptions,
  casteOptions,
  bloodGroupOptions,
  degreeOptions,
} from "@/lib/constants";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { getErrorMessage } from "@/utils/errorMessage";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { addBasicDetails } from "@/utils/profileFunctions/dataPoster";
import { BasicDetailsFormSchema } from "@/schema/personalDetailsSchema";
import Loader from "@/components/component/Loader";
import FormInputWithOnChange from "@/components/component/FormInputOnChange";

function BasicDetails() {
  const [selectedGender, setSelectedGender] = useState<string>("");
  const [selectedCaste, setSelectedCaste] = useState<string>("");
  const [selectedBloodGroup, setSelectedBloodGroup] = useState<string>("");
  const [selectedDegree, setSelectedDegree] = useState<string>("");
  const [selectPH, setSelectPH] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleGenderChange = (value: string) => {
    setSelectedGender(value);
    setValue("gender", value);
  };

  const handleCasteChange = (value: string) => {
    setSelectedCaste(value);
    setValue("caste", value);
  };

  const handleBloodGroupChange = (value: string) => {
    setSelectedBloodGroup(value);
    setValue("blood_group", value);
  };

  const handleDegreeChange = (value: string) => {
    setSelectedDegree(value);
    setValue("degree", value);
  };

  const { mutate, isPending } = useMutation({
    mutationFn: addBasicDetails,
    onSuccess: (res) => {
      if (res.success) {
        toast({
          title: "Profile Details",
          description: "Details Successfully Added",
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
    setValue,
  } = useForm<BasicDetailsFormSchema>();
  const { toast } = useToast();

  function onSubmit(data: BasicDetailsFormSchema) {
    const today = new Date().toISOString().split("T")[0];

    const requiredFields = [
      { value: selectedGender, message: "Select Gender" },
      { value: selectedCaste, message: "Select Caste" },
      { value: selectedBloodGroup, message: "Select Blood Group" },
      { value: selectPH, message: "Select Physical Handicapped" },
      { value: selectedDegree, message: "Select Degree" },
    ];

    for (const field of requiredFields) {
      if (!field.value) {
        toast({
          title: "Required",
          description: field.message,
          variant: "destructive",
        });
        return;
      }
    }

    const uniqueFields = [
      {
        condition: data.email === data.parent_email,
        message: "Student Email and Parent Email Must Be Different",
      },
      {
        condition: data.mobile_no === data.parent_mob,
        message: "Student Mobile No and Parent Mobile No Must Be Different",
      },
      {
        condition: new Date(data.dob).toISOString().split("T")[0] > today,
        message: "Date of Birth cannot be a future date.",
      },
    ];

    for (const field of uniqueFields) {
      if (field.condition) {
        toast({
          title: "Unique",
          description: field.message,
          variant: "destructive",
        });
        return;
      }
    }
    // console.log(data);
    mutate(data);
  }

  return (
    <div className="container p-8">
      <h1 className="text-3xl font-bold mb-1">Basic Details</h1>
      <h3 className="text-md font-light mb-8">Enter Your Personal Details.</h3>
      <form className="space-y-8 mx-auto" onSubmit={handleSubmit(onSubmit)}>
        {/* Row 1: Name, Surname, Father Name */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FormInputWithOnChange<BasicDetailsFormSchema>
            label="Name"
            name="name"
            register={register}
            disabled={isPending}
            errorMessage={getErrorMessage("Student Name", errors.name?.type)}
            isInvalid={!!errors.name}
            required
            type="text"
            pattern={/^[a-zA-Z\s]*$/}
            onChange={(e) => {
              e.target.value = e.target.value.toUpperCase();
            }}
          />
          <FormInputWithOnChange<BasicDetailsFormSchema>
            label="Surname"
            name="surname"
            register={register}
            disabled={isPending}
            errorMessage={getErrorMessage("Surname", errors.surname?.type)}
            isInvalid={!!errors.surname}
            required
            type="text"
            pattern={/^[a-zA-Z\s]*$/}
            onChange={(e) => {
              e.target.value = e.target.value.toUpperCase();
            }}
          />
          <FormInputWithOnChange<BasicDetailsFormSchema>
            label="Father Name"
            name="father_name"
            register={register}
            disabled={isPending}
            errorMessage={getErrorMessage(
              "Father Name",
              errors.father_name?.type
            )}
            isInvalid={!!errors.father_name}
            required
            type="text"
            pattern={/^[a-zA-Z\s]*$/}
            onChange={(e) => {
              e.target.value = e.target.value.toUpperCase();
            }}
          />
        </div>

        {/* Row 2: Date of Birth, Gender */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput<BasicDetailsFormSchema>
            label="Date of Birth"
            name="dob"
            register={register}
            disabled={isPending}
            errorMessage="Date of Birth is required"
            isInvalid={!!errors.dob}
            required
            type="date"
          />
          <GeneralSelect
            label="Gender"
            options={genderOptions}
            placeholder="Select Gender"
            value={selectedGender}
            onChange={handleGenderChange}
          />
        </div>

        {/* Row 3: Student Email, Student Mobile Number */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput<BasicDetailsFormSchema>
            label="Student Email"
            name="email"
            register={register}
            disabled={isPending}
            errorMessage="Student Email is required"
            isInvalid={!!errors.email}
            required
            type="email"
          />
          <FormInput<BasicDetailsFormSchema>
            label="Mobile Number"
            name="mobile_no"
            register={register}
            disabled={isPending}
            errorMessage={getErrorMessage(
              "Student Mobile No",
              errors.mobile_no?.type
            )}
            isInvalid={!!errors.mobile_no}
            required
            type="text"
            pattern={/^\d{10}$/}
          />
        </div>

        {/* Row 4: Parent Email, Parent Mobile Number */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput<BasicDetailsFormSchema>
            label="Parent Email"
            name="parent_email"
            register={register}
            disabled={isPending}
            errorMessage="Parent Email is required"
            isInvalid={!!errors.parent_email}
            required
            type="email"
          />
          <FormInput<BasicDetailsFormSchema>
            label="Parent Mobile Number"
            name="parent_mob"
            register={register}
            disabled={isPending}
            errorMessage={getErrorMessage(
              "Parent Mobile No",
              errors.parent_mob?.type
            )}
            isInvalid={!!errors.parent_mob}
            required
            type="text"
            pattern={/^\d{10}$/}
          />
        </div>

        {/* Row 5: Degree, Caste, Blood Group */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <GeneralSelect
            label="Degree"
            options={degreeOptions}
            placeholder="Select Degree"
            value={selectedDegree}
            onChange={handleDegreeChange}
          />
          <GeneralSelect
            label="Caste"
            options={casteOptions}
            placeholder="Select Caste"
            value={selectedCaste}
            onChange={handleCasteChange}
          />
          <GeneralSelect
            label="Blood Group"
            options={bloodGroupOptions}
            placeholder="Select Blood Group"
            value={selectedBloodGroup}
            onChange={handleBloodGroupChange}
          />
        </div>

        {/* Row 6: Height, Weight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput<BasicDetailsFormSchema>
            label="Height(CM)"
            name="height_cm"
            register={register}
            disabled={isPending}
            errorMessage={getErrorMessage("Height", errors.height_cm?.type)}
            isInvalid={!!errors.height_cm}
            required
            type="number"
            min={0} // Ensures positive values
            pattern={/^\d{1,3}$/} // Allows up to 3 digits before decimal and up to 2 decimal places
          />
          <FormInput<BasicDetailsFormSchema>
            label="Weight(KG)"
            name="weight_kg"
            register={register}
            disabled={isPending}
            errorMessage={getErrorMessage("Weight", errors.weight_kg?.type)}
            isInvalid={!!errors.weight_kg}
            required
            type="number"
            min={0} // Ensures positive values
            pattern={/^\d{1,3}$/} // Allows up to 3 digits before decimal and up to 2 decimal places
          />
        </div>

        {/* Row 7: Student aadhar no, Student aadhar Name*/}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput<BasicDetailsFormSchema>
            label="Student AadharCard No"
            name="aadhar_no"
            register={register}
            disabled={isPending}
            errorMessage={getErrorMessage(
              "Student AadharCard No",
              errors.aadhar_no?.type
            )}
            isInvalid={!!errors.aadhar_no}
            required
            type="text"
            pattern={/^\d{12}$/}
          />
          <FormInputWithOnChange<BasicDetailsFormSchema>
            label="Student Name as Per AadharCard"
            name="aadhar_name"
            register={register}
            disabled={isPending}
            errorMessage={getErrorMessage(
              "Student AadharCard Name",
              errors.aadhar_name?.type
            )}
            isInvalid={!!errors.aadhar_name}
            required
            type="text"
            pattern={/^[a-zA-Z\s]*$/} // Allows only letters and spaces
            onChange={(e) => {
              e.target.value = e.target.value.toUpperCase();
            }}
          />
        </div>

        {/* Row 8: Student PAN no, Student Payment Reference Number*/}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput<BasicDetailsFormSchema>
            label="Student PAN No"
            name="pan_no"
            register={register}
            disabled={isPending}
            // required
            errorMessage={getErrorMessage(
              "Student PAN No",
              errors.pan_no?.type
            )}
            isInvalid={!!errors.pan_no}
            type="text"
            pattern={/^[A-Z]{5}[0-9]{4}[A-Z]$/} // PAN pattern: 5 letters, 4 digits, 1 letter
          />
          <FormInput<BasicDetailsFormSchema>
            label="Payment Reference Number"
            name="pay_ref_no"
            register={register}
            disabled={isPending}
            errorMessage="Payment Reference No is required"
            isInvalid={!!errors.pay_ref_no}
            required
            type="text"
          />
        </div>

        {/* Row 9: Physical Handicapped */}
        <div className="flex items-center justify-start">
          <BooleanRadioGroup
            label="Physical Handicapped?"
            name="physical_handicapped"
            setValue={(value: boolean) => {
              setSelectPH(true);
              setValue("physical_handicapped", value);
            }}
          />
        </div>

        {/* Submit Button */}
        <Button className="w-full mt-6" disabled={isPending}>
          {isPending ? <Loader /> : "Submit"}
        </Button>
      </form>
    </div>
  );
}

export default BasicDetails;
