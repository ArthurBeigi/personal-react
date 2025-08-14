import { ArrowRightIcon } from "@phosphor-icons/react";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { SignUpProgressBar } from "./ui/SignUpProgressBar";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Calendar22 } from "./ui/DatePicker";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignUpPage = () => {
  return (
    <div className="bg-muted flex h-screen min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl ">
        <SignUpForm dir="rtl" />
      </div>
    </div>
  );
};

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  type Step = 1 | 2 | 3 | 4;
  const navigate = useNavigate();
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <SignUpProgressBar step={step} />
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <div className="flex items-center flex-col  ">
              {step === 1 && (
                <>
                  <div className="flex flex-col items-center text-center">
                    <h1 className="text-2xl font-bold mb-[10px]">
                      اطلاعات شخصی
                    </h1>
                    <p className="text-muted-foreground text-balance mb-[25px]">
                      لطفا اطلاعات هویتی خود را وارد کنید
                    </p>
                  </div>
                  <div className="grid gap-2 space-y-1 bg-creamwhite mb-[25px] w-[240px] h-[61px]">
                    <Label htmlFor="name">نام</Label>
                    <Input id="name" type="name" placeholder="رستم" required />
                  </div>
                  <div className="grid gap-2 space-y-1 bg-creamwhite mb-[25px] w-[240px] h-[61px] ">
                    <div className="flex items-center">
                      <Label htmlFor="Lastname">نام خانوادگی</Label>
                    </div>
                    <Input
                      id="Lastname"
                      type="Lastname"
                      placeholder="رستم آبادی"
                      required
                    />
                  </div>
                  <RadioGroup
                    className="flex flex-row gap-x-5 mb-6"
                    defaultValue="comfortable"
                  >
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="default" id="r1" />
                      <Label htmlFor="r1">مونث</Label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="comfortable" id="r2" />
                      <Label htmlFor="r2">مذکر</Label>
                    </div>
                  </RadioGroup>
                  <Calendar22 />
                </>
              )}
              {step === 2 && <></>}
              {step === 3 && <></>}
              {step === 4 && <></>}

              <Button
                type="submit"
                className="w-2/5 h-8 mb-3 mx-auto rounded-full bg-creamwhite border-black flex border hover:bg-gray-100 text-black"
                onClick={(event) => {
                  event.preventDefault();
                  if (step <= 3) {
                    setStep((step + 1) as Step);
                  } else {
                    setStep(1);
                  }
                }}
              >
                <ArrowRightIcon size={30} />
                <p className="w-full text-[16px]">ادامه</p>
              </Button>
              <button
                onClick={() => {
                  if (step !== 1) {
                    setStep((step - 1) as Step);
                  } else {
                    navigate("/auth/signin");
                  }
                }}
                className="text-blue-500 mb-5 font-bold text-sm"
              >
                بازگشت
              </button>
            </div>
          </form>
          <div className="relative hidden md:block">
            <div className="absolute left-[15px] top-[45px] w-[350px] h-[350px] bg-gradient-to-b from-cyan-700 via-indigo-500 to-teal-700 opacity-50 rounded-[15px] overflow-hidden" />
            <img
              src="/images/Doctor2.png"
              alt="The docter"
              className="absolute inset-0 h-full w-full object-cover  dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
      <div
        dir="ltr"
        className="relative [&>*]:text-[8px] [&>*]:md:text-[12px] -top-12  flex  justify-around  text-gray-600  font-sourcesanspro italic"
      >
        <a href="#">Copyrigt2025Fenix. All Rights Reserved</a>
        <a href="#">site map</a>
        <a href="#">privicy tools</a>
        <a href="#">terms & conditions</a>
      </div>
    </div>
  );
}
