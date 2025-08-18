import {
  ArrowRightIcon,
  CityIcon,
  CloudArrowUpIcon,
  EnvelopeIcon,
  FingerprintIcon,
  HouseIcon,
  MapPinLineIcon,
  PhoneIcon,
} from "@phosphor-icons/react";
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
import { InputOTP, InputOTPGroup, InputOTPSlot } from "./ui/input-otp";
// import { LockSimpleIcon } from "@phosphor-icons/react";
import { Textarea } from "./ui/textarea";
import { Calendar2 } from "./ui/Expiredate";

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

  const getImageSrc = () => {
    if (step == 1) {
      return "/images/Doctor2.png";
    } else if (step == 2) {
      return "/images/Doctor3.png";
    } else if (step == 3) {
      return "/images/Doctor4.png";
    } else {
      return "";
    }
  };
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
              {step === 2 && (
                <>
                  <div className="grid gap-2 space-y-1 bg-creamwhite mb-[25px] w-full">
                    <Label htmlFor="phone Numer">شماره همراه</Label>
                    <div className="flex focus-within:outline-none hover:border focus-within:ring-1 focus-within:ring-ring rounded-md border border-input bg-transparent">
                      <div className="flex justify-center mr-2 items-center">
                        <PhoneIcon size={28} />
                      </div>
                      <Input
                        dir="rtl"
                        className="rounded-none border-0 shadow-none focus:border-r-0 focus-visible:border-r-0 focus-visible:ring-0"
                        id="phone Number"
                        type="tel"
                        placeholder="9891212345678+"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid gap-2 space-y-1 bg-creamwhite mb-[25px] w-full">
                    <Label htmlFor="email">ایمیل</Label>
                    <div className="flex focus-within:outline-none hover:border focus-within:ring-1 focus-within:ring-ring rounded-md border border-input bg-transparent">
                      <div className="flex justify-center mr-2 items-center">
                        <EnvelopeIcon size={28} />
                      </div>
                      <Input
                        className="rounded-none border-0 shadow-none focus:border-r-0 focus-visible:border-r-0 focus-visible:ring-0"
                        id="email"
                        type="email"
                        placeholder="Examole@gmail.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex gap-4 mb-[25px] w-full">
                    <div className="grid gap-2 space-y-1 bg-creamwhite w-[240px]">
                      <Label htmlFor="province">استان</Label>
                      <div className="flex focus-within:outline-none hover:border focus-within:ring-1 focus-within:ring-ring rounded-md border border-input bg-transparent">
                        <div className="flex justify-center mr-2 items-center">
                          <MapPinLineIcon size={28} />
                        </div>
                        <Input
                          className="rounded-none border-0 shadow-none focus:border-r-0 focus-visible:border-r-0 focus-visible:ring-0"
                          id="province"
                          type="text"
                          placeholder="تهران"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid gap-2 space-y-1 bg-creamwhite w-[240px]">
                      <Label htmlFor="city">شهرستان</Label>
                      <div className="flex focus-within:outline-none hover:border focus-within:ring-1 focus-within:ring-ring rounded-md border border-input bg-transparent">
                        <div className="flex justify-center mr-2 items-center">
                          <CityIcon size={28} />
                        </div>
                        <Input
                          className="rounded-none border-0 shadow-none focus:border-r-0 focus-visible:border-r-0 focus-visible:ring-0"
                          id="city"
                          type="text"
                          placeholder="شهریار"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-2 space-y-1 bg-creamwhite mb-[25px] w-full">
                    <Label htmlFor="Address">آدرس</Label>
                    <div className="flex focus-within:outline-none hover:border focus-within:ring-1 focus-within:ring-ring rounded-md border border-input bg-transparent">
                      <div className="flex  justify-center mr-2 mt-2">
                        <HouseIcon size={28} />
                      </div>
                      <Textarea
                        className="rounded-none border-0 shadow-none focus:border-r-0 focus-visible:border-r-0 focus-visible:ring-0"
                        id="Address"
                        placeholder="سهیلی نژاد پ 32 واحد 19"
                        required
                      />
                    </div>
                  </div>
                </>
              )}
              {step === 3 && (
                <div className="w-full flex flex-col">
                  <div className="mx-auto w-fit">
                    <img
                      className="w-[400px]"
                      src="/images/NumberAuth.png"
                      alt="Number Authentication"
                    />
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <h1 className="text-2xl font-bold mb-[10px]">
                      تایید شماره موبایل
                    </h1>
                    <p className="text-muted-foreground text-[10px] text-balance mb-[25px]">
                      لطفا کد پنج رقمی ارسال شده به شماره همراه خود را در فیلد
                      پایین وارد نمایید
                    </p>
                  </div>

                  <div dir="ltr" className="w-fit mb-6 mx-auto">
                    <InputOTP maxLength={5}>
                      <InputOTPGroup>
                        <InputOTPSlot className="bg-blue-300" index={0} />
                      </InputOTPGroup>
                      <InputOTPGroup>
                        <InputOTPSlot className="bg-blue-300" index={1} />
                      </InputOTPGroup>
                      <InputOTPGroup>
                        <InputOTPSlot className="bg-blue-300" index={2} />
                      </InputOTPGroup>
                      <InputOTPGroup>
                        <InputOTPSlot className="bg-blue-300" index={3} />
                      </InputOTPGroup>
                      <InputOTPGroup>
                        <InputOTPSlot className="bg-blue-300" index={4} />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>

                  <p className=" w-fit mx-auto">
                    هنوز کدی دریافت نکردید؟
                    <button className="text-blue-500 mb-5 font-bold text-sm">
                      ارسال مجدد
                    </button>
                  </p>
                </div>
              )}
              {step === 4 && (
                <>
                  <div className="flex flex-col items-center text-center">
                    <h1 className="text-2xl font-bold mb-[10px]">احراز هویت</h1>
                    <p className="text-muted-foreground text-balance mb-[25px] text-sm text-gray-500">
                      به ما دسترسی بدهید که از اطلاعات شما استفاده کنیم
                    </p>
                  </div>

                  <div className="grid gap-2 space-y-1 bg-creamwhite mb-[25px] w-full">
                    <Label htmlFor="Number">کد شناسایی</Label>
                    <div className="flex focus-within:outline-none hover:border focus-within:ring-1 focus-within:ring-ring rounded-md border border-input bg-transparent">
                      <div className="flex justify-center mr-2 items-center">
                        <FingerprintIcon size={26} />
                      </div>
                      <Input
                        dir="rtl"
                        className="rounded-none border-0 shadow-none focus:border-r-0 focus-visible:border-r-0 focus-visible:ring-0"
                        id="Number"
                        type="Number"
                        placeholder="12-3872990"
                        required
                      />
                    </div>
                  </div>
                  <Calendar2 />

                  <div className="mb-[10px] mt-[5px] flex items-center justify-center w-full">
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <CloudArrowUpIcon size={28} />

                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                      />
                    </label>
                  </div>
                </>
              )}

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
              src={getImageSrc()}
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
