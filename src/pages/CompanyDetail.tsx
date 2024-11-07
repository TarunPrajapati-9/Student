import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CalendarDaysIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleCompanyDetails } from "@/utils/companyFunctions/dataGetter";
import { useMutation, useQuery } from "@tanstack/react-query";
import { setConsent } from "@/utils/companyFunctions/dataPutter";
import { useToast } from "@/hooks/use-toast";
// import GeneralSelect from "@/components/component/GeneralSelect";
import { useForm } from "react-hook-form";
import EmptyState from "@/components/component/EmptyState";
import DOMPurify from "dompurify";
import Cookies from "js-cookie";
import FullScreenLoader from "@/components/component/FullScreenLoader";
import Loader from "@/components/component/Loader";
import { Checkbox } from "@/components/ui/checkbox";
import MultiSelectDropdown from "@/components/component/MultiSelectDropDownCheckBox";

export type ConcernSchema = {
  is_concern: boolean;
  job_role: string;
};

interface Option {
  value: string;
  label: string;
}

const CompanyDetail = () => {
  const navigate = useNavigate();
  const [consentGiven, setIsConsentGiven] = useState(false);
  const [selectedJobProfiles, setSelectedJobProfiles] = useState<string[]>([]);
  const selectedJobProfilesString = selectedJobProfiles.join(",");
  const { toast } = useToast();
  const [isAgreed, setIsAgreed] = useState(false);
  // const [isJOB, setIsJOB] = useState<string>("");
  const { r_id, consentId } = useParams();

  useEffect(() => {
    if (!Cookies.get("studentToken")) {
      navigate("/login");
    }

    // Check if consent is already set
    if (Cookies.get(`consent_${consentId}`)) {
      setIsConsentGiven(true);
    } else {
      setIsConsentGiven(false);
    }
  }, [navigate, consentId]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["SingleCompany"],
    queryFn: () => getSingleCompanyDetails(r_id!),
  });

  const { handleSubmit } = useForm<ConcernSchema>();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: ConcernSchema) =>
      setConsent(data, consentId ? consentId : ""),
    onSuccess: (res) => {
      if (res.success) {
        toast({
          title: "Concern",
          description: "Successfully Added",
          variant: "success",
        });
        navigate("/companies");
      } else {
        toast({
          title: "Error",
          description: res.message,
          variant: "destructive",
        });
      }
    },
  });

  const companyData = data?.data || null;
  const dateObj = new Date(companyData?.deadline || new Date()); // Fallback to current date

  // Get the date components manually
  const day = ("0" + dateObj.getDate()).slice(-2);
  const month = ("0" + (dateObj.getMonth() + 1)).slice(-2); // Months are 0-based, so we add 1
  const year = dateObj.getFullYear();

  // Use toLocaleTimeString to format time with AM/PM
  const formattedTime = dateObj.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // This enables 12-hour format with AM/PM
  });

  // Combine date and time
  const formattedDate = `${day}/${month}/${year} ${formattedTime}`;
  const CompanyDetails = companyData?.c_details
    ? DOMPurify.sanitize(companyData.c_details)
    : "N/A";
  const termsConditions = companyData?.t_and_c
    ? DOMPurify.sanitize(companyData.t_and_c)
    : "N/A";
  const jobProfileArray = companyData?.job_profile || "";
  // console.log(jobProfileArray);

  const jobProfileOptions: Option[] = jobProfileArray
    .split(",")
    .filter(Boolean)
    .map((profile: string) => {
      // Split the profile into the role and salary parts
      const [role, salary] = profile.split(":");

      // Further split the salary part to get the range (if available)
      const [minSalary, maxSalary] = salary.trim().split("-");

      // Format the label depending on whether the salary range is the same or different
      const salaryLabel =
        minSalary === maxSalary
          ? `${minSalary.trim().toUpperCase()} LPA`
          : `${minSalary.trim().toUpperCase()}-${maxSalary
              .trim()
              .toUpperCase()} LPA`;

      return {
        value: profile.trim(), // Full job profile (e.g., "SDE:5-25 lpa")
        label: `${role.trim()} (${salaryLabel})`, // Formatted label (e.g., "SDE (5-25 LPA)" or "SDE (5 LPA)")
      };
    });

  console.log(jobProfileOptions);

  function onSubmit() {
    if (isAgreed && selectedJobProfilesString == "") {
      toast({
        title: "Required",
        description: "Job Profile is required when giving concern",
        variant: "destructive",
      });
      return;
    }
    const sendData = {
      job_role: selectedJobProfilesString,
      is_concern: true,
    };
    // console.log(sendData);
    mutate(sendData);
  }

  // const handleJobChange = (value: string) => {
  //   setIsJOB(value);
  //   setValue("job_role", value);
  // };

  const handleCheckboxChange = (checked: boolean) => {
    setIsAgreed(checked);
  };

  // Process eligible branches
  const eligibleBranches = companyData?.eligible_branch
    ? companyData.eligible_branch.split(",").map((branch) => branch.trim())
    : ["N/A"];

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center">Company Details</h1>
        <div className="p-6 max-w-6xl mx-auto">
          {error && (
            <EmptyState
              title="An error occurred"
              description={error.message}
              className="max-w-lg mx-auto bg-red-50 border border-red-200 text-red-600"
            />
          )}
          {!isLoading && !error && (!data || !data.data) && (
            <EmptyState
              title="No Data Found"
              description={data?.message}
              className="max-w-lg mx-auto bg-yellow-50 border border-yellow-200 text-yellow-600"
            />
          )}
          {isLoading ? (
            <FullScreenLoader />
          ) : (
            <Card className="p-8 space-y-6 shadow-lg rounded-lg bg-white overflow-hidden">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <h3 className="text-xl font-semibold ">
                  Company Name:
                  <span className="text-gray-600 ml-2">
                    {companyData?.company.c_name || "N/A"}
                  </span>
                </h3>
              </div>

              <h3 className="text-xl font-semibold">
                Company Details:
                <div
                  className="text-gray-600 mt-2 max-w-full overflow-hidden"
                  dangerouslySetInnerHTML={{ __html: CompanyDetails }}
                />
              </h3>

              <div>
                <h3 className="text-xl font-semibold">Eligible Branches:</h3>
                <ul className="list-disc list-inside text-gray-600 my-2">
                  {eligibleBranches.map((branch, index) => (
                    <li key={index}>{branch.toUpperCase()}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <h3 className="text-xl font-semibold">
                  Eligible Degree:
                  <span className="text-gray-600 ml-2">
                    {companyData?.degree.toUpperCase() || "N/A"}
                  </span>
                </h3>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <h3 className="text-xl font-semibold">
                  Criteria:
                  <span className="text-gray-600 ml-2">
                    {companyData?.criteria || "N/A"}
                  </span>
                </h3>
              </div>

              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-md border border-gray-200">
                <CalendarDaysIcon className="w-6 h-6 text-red-500" />
                <span className="text-red-600 font-semibold">
                  Deadline: {formattedDate}
                </span>
              </div>

              <h3 className="text-xl font-semibold">Terms & Conditions</h3>
              <div className="flex items-center gap-2 text-gray-700">
                <div
                  className="text-gray-600 mt-2 max-w-full overflow-hidden"
                  dangerouslySetInnerHTML={{ __html: termsConditions }}
                />
              </div>

              {consentGiven ? ( // Conditionally render message
                <div className="text-green-600 font-bold">
                  You have already given consent.
                </div>
              ) : (
                <div className="flex items-center gap-4">
                  <Checkbox
                    id="terms-agree"
                    onCheckedChange={handleCheckboxChange}
                    checked={isAgreed}
                    className="h-5 w-5 bg-white border border-black rounded-md"
                  />
                  <Label htmlFor="terms-agree" className="font-bold text-lg">
                    I agree to the terms and conditions
                  </Label>
                </div>
              )}

              {!consentGiven &&
                isAgreed && ( // Show this section only if not given consent and checkbox is checked
                  <>
                    <h3 className="text-xl font-semibold">Apply Now</h3>
                    <form
                      className="space-y-6"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <div className="space-y-3">
                        {/* <GeneralSelect
                          label="Job Role"
                          options={jobProfileOptions}
                          placeholder="Select Job Role"
                          value={isJOB}
                          onChange={handleJobChange}
                        /> */}
                        <MultiSelectDropdown
                          labelValue="Job Role"
                          options={jobProfileOptions}
                          selectedValues={selectedJobProfiles}
                          setSelectedValues={setSelectedJobProfiles}
                          maxSelections={companyData?.jobrole_limit || 1}
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full mt-6"
                        disabled={!isAgreed || isPending}
                      >
                        {isPending ? <Loader /> : "Submit"}
                      </Button>
                    </form>
                  </>
                )}
            </Card>
          )}
        </div>
      </div>
    </>
  );
};

export default CompanyDetail;
