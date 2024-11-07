import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { LoginCredentials } from "@/schema/personalDetailsSchema";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import FormInput from "@/components/component/FormInput";
import { Login } from "@/utils/authentication";
import Loader from "../components/component/Loader";

export function StudentLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginCredentials>();

  const { toast } = useToast();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: Login,
    onSuccess: (res) => {
      if (res.success) {
        Cookies.set("studentToken", res.data?.token ?? "");
        toast({
          title: "Success",
          description: "Login successful!",
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

  const onSubmit = (data: LoginCredentials) => {
    // console.log(data);
    mutate(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-lg p-8">
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
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-6">
              <FormInput<LoginCredentials>
                label="Enrollment Number"
                name="enrollment"
                register={register}
                required
                disabled={isPending}
                errorMessage="Please enter valid enrollment number"
                isInvalid={!!errors.enrollment}
                pattern={/^\d{12}$/}
                type="text"
              />
              <FormInput<LoginCredentials>
                label="Password"
                name="password"
                register={register}
                required
                disabled={isPending}
                errorMessage="Please enter a valid password"
                isInvalid={!!errors.password}
                type="password"
              />
              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? <Loader /> : "Login"}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <div className="text-sm text-center w-full">
            <Link
              to={"/forget-password"}
              className="text-primary hover:underline"
            >
              Forgot password?
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
