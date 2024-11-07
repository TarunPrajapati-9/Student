import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import FormInput from "@/components/component/FormInput";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { changePWD, sendOtp, verifyOtp } from "@/utils/authentication";
import { ForgetPasswordCredentials } from "@/schema/personalDetailsSchema";
import Loader from "@/components/component/Loader";

export function ForgetPassword() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgetPasswordCredentials>();

  const { mutate: sendOtpMutate, isPending: sendOtpPending } = useMutation({
    mutationFn: sendOtp,
    onSuccess: (res) => {
      if (res.success) {
        toast({
          title: "Success",
          description: res.message,
          variant: "success",
        });
        setStep(2);
      } else {
        toast({
          title: "Error",
          description: res.message,
          variant: "destructive",
        });
      }
    },
  });

  const { mutate: verifyOtpMutate, isPending: verifyOtpPending } = useMutation({
    mutationFn: verifyOtp,
    onSuccess: (res) => {
      if (res.success) {
        toast({
          title: "Success",
          description: res.message,
          variant: "success",
        });
        setStep(3);
      } else {
        toast({
          title: "Error",
          description: res.message,
          variant: "destructive",
        });
      }
    },
  });

  const { mutate: changePasswordMutate, isPending: changePasswordPending } =
    useMutation({
      mutationFn: changePWD,
      onSuccess: (res) => {
        if (res.success) {
          toast({
            title: "Success",
            description: res.message,
            variant: "success",
          });
          navigate("/login");
        } else {
          toast({
            title: "Error",
            description: res.message,
            variant: "destructive",
          });
        }
      },
    });

  // Handlers for form submission at each step
  const onSubmitSendOtp = (data: ForgetPasswordCredentials) => {
    console.log(data);
    sendOtpMutate(data);
  };

  const onSubmitVerifyOtp = (data: ForgetPasswordCredentials) => {
    console.log(data);
    verifyOtpMutate(data);
  };

  const onSubmitChangePassword = (data: ForgetPasswordCredentials) => {
    if (data.confirmPassword != data.password) {
      toast({
        title: "Error",
        description: "Password and Confirm Password Mismatched!",
        variant: "destructive",
      });
    } else {
      console.log(data);
      changePasswordMutate(data);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-lg p-3">
        <CardHeader className="space-y-2">
          {/* Add Logo at the top */}
          <div className="flex justify-center">
            <img
              src="/logo.png" // Replace with the actual logo path
              alt="Student Placement Portal Logo"
              className="w-28 h-28"
            />
          </div>
          <CardTitle className="text-2xl font-bold text-center">
            Student Placement Portal
          </CardTitle>
          <CardDescription className="text-center">
            Enter your credentials to recover your account
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-4">
          {/* Step 1: Send OTP */}
          {step === 1 && (
            <form onSubmit={handleSubmit(onSubmitSendOtp)}>
              <div className="space-y-6">
                <FormInput<ForgetPasswordCredentials>
                  label="Enrollment Number"
                  name="enrollment"
                  register={register}
                  errorMessage="Enrollment number is required"
                  isInvalid={!!errors.enrollment}
                  disabled={sendOtpPending}
                  required
                  type="text"
                  placeholder="Enter your enrollment number"
                />
                <Button
                  className="w-full mt-4"
                  type="submit"
                  disabled={sendOtpPending}
                >
                  {sendOtpPending ? <Loader /> : "Send Reset OTP"}
                </Button>
              </div>
            </form>
          )}

          {/* Step 2: Verify OTP */}
          {step === 2 && (
            <form onSubmit={handleSubmit(onSubmitVerifyOtp)}>
              <div className="space-y-6">
                <FormInput<ForgetPasswordCredentials>
                  label="Enrollment Number"
                  name="enrollment"
                  register={register}
                  errorMessage="Enrollment number is required"
                  isInvalid={!!errors.enrollment}
                  disabled={true}
                  type="text"
                />
                <FormInput<ForgetPasswordCredentials>
                  label="OTP"
                  name="otp"
                  register={register}
                  errorMessage="OTP is required"
                  isInvalid={!!errors.otp}
                  required
                  type="text"
                  disabled={verifyOtpPending}
                  placeholder="Enter OTP"
                />
                <Button
                  className="w-full mt-4"
                  type="submit"
                  disabled={verifyOtpPending}
                >
                  {verifyOtpPending ? <Loader /> : "Verify OTP"}
                </Button>
              </div>
            </form>
          )}

          {/* Step 3: Set New Password */}
          {step === 3 && (
            <form onSubmit={handleSubmit(onSubmitChangePassword)}>
              <div className="space-y-6">
                <FormInput<ForgetPasswordCredentials>
                  label="Enrollment Number"
                  name="enrollment"
                  register={register}
                  errorMessage="Enrollment number is required"
                  isInvalid={!!errors.enrollment}
                  disabled={true}
                  type="text"
                />
                <FormInput<ForgetPasswordCredentials>
                  label="New Password"
                  name="password"
                  register={register}
                  errorMessage="Password is required"
                  isInvalid={!!errors.password}
                  required
                  type="password"
                  disabled={changePasswordPending}
                  placeholder="Enter new password"
                />
                <FormInput<ForgetPasswordCredentials>
                  label="Confirm Password"
                  name="confirmPassword"
                  register={register}
                  errorMessage="Confirm password is required"
                  isInvalid={!!errors.confirmPassword}
                  required
                  type="password"
                  disabled={changePasswordPending}
                  placeholder="Re-enter new password"
                />
                <Button
                  className="w-full mt-4"
                  type="submit"
                  disabled={changePasswordPending}
                >
                  {changePasswordPending ? <Loader /> : "Update Password"}
                </Button>
              </div>
            </form>
          )}
        </CardContent>
        <CardFooter className="flex justify-between"></CardFooter>
      </Card>
    </div>
  );
}
