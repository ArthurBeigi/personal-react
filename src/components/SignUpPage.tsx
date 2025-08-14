import { ArrowRightIcon } from "@phosphor-icons/react";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { SignUpProgressBar } from "./ui/SignUpProgressBar";

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
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <SignUpProgressBar step={1}/>
        <CardContent className="grid p-0 md:grid-cols-2">
      

          <form className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold mb-[10px]">اطلاعات شخصی</h1>
                <p className="text-muted-foreground text-balance mb-[25px]">
                  لطفا اطلاعات هویتی خود را وارد کنید
                </p>
              </div>
              <div className="grid gap-2 space-y-1 bg-creamwhite mb-[25px] w-[240px] h-[61px]">
                <Label htmlFor="name">نام</Label>
                  <div className="flex focus-within:outline-none hover:border focus-within:ring-1 focus-within:ring-ring rounded-md border border-input bg-transparent"/>
                  <div className="flex justify-center mr-2 items-center"></div>
                <Input
                  id="name"
                  type="name"
                  placeholder="رستم"
                  required
                />
              </div>
              <div className="grid gap-2 space-y-1 bg-creamwhite mb-[25px] w-[240px] h-[61px] ">
                <div className="flex items-center">
                  <Label htmlFor="Lastname">نام خانوادگی</Label>
                  <div className="flex focus-within:outline-none hover:border focus-within:ring-1 focus-within:ring-ring rounded-md border border-input bg-transparent"/>
                  <div className="flex justify-center mr-2 items-center"></div>
                </div>
                <Input id="Lastname" type="Lastname"  placeholder="رستم آبادی" required />
              </div>

type Choice = { Label: string; value: string };

export default function RadioButtonList() {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const choices: Choice[] = [
    { Label: "گزینه اول", value: "option1" },
    { Label: "گزینه دوم", value: "option2" },
    { Label: "گزینه سوم", value: "option3" },
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.currentTarget.value); // currentTarget امن‌تر از target
  };

  return (
    <div>
      <h3>یک گزینه انتخاب کنید:</h3>

      {choices.map((c) => (
        <label key={c.value} style={{ display: "block", margin: "6px 0" }}>
          <input
            type="radio"
            name="my-radio-group"   
            value={c.value}
            checked={selectedValue === c.value}
            onChange={handleChange}
          />
          {c.label}
        </label>
      ))}

      <p>انتخاب شما: {selectedValue || "هیچ‌کدام"}</p>
    </div>
  );
}

            
              <Button
                type="submit"
                className="w-1/2 mx-auto rounded-full bg-creamwhite border-black flex border hover:bg-gray-100 text-black"
              >
                <ArrowRightIcon className="" size={30}/>
                <p className="w-full text-[16px]">ورود</p>
              </Button>
              
            </div>
          </form>
          <div className="relative hidden md:block">
            <div className="absolute left-[15px] top-[45px] w-[350px] h-[350px] bg-gradient-to-b from-cyan-700 via-indigo-500 to-teal-700 opacity-50 rounded-[15px] overflow-hidden" />
            <img
              src="/images/Doctor2.png"
              alt="The docter"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
      <div
        dir="ltr"
        className="relative [&>*]:text-xs -top-12 flex  justify-around  text-gray-600 text-[14px] font-sourcesanspro italic"
      >
        <a href="#">Copyrigt2025Fenix. All Rights Reserved</a>
        <a href="#">site map</a>
        <a href="#">privicy tools</a>
        <a href="#">terms & conditions</a>
      </div>
    </div>

  );
}
