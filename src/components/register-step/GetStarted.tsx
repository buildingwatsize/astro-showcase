"use client";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CLOSABLE_PATH } from "@/lib/constants";
import { navigate } from "astro:transitions/client";

type Props = {
  onClick?: () => void;
};

const GetStarted = ({ onClick = () => null }: Props) => {
  return (
    <div className="[&>h2]:text-lg [&>h2]:font-semibold [&>h2]:mb-2">
      <h2>About Our Platform</h2>
      <p className="mb-6">
        Our investment platform offers a range of options to help you grow your
        wealth. Whether you're saving for retirement, a major purchase, or just
        want to see your money work harder, we have solutions tailored to your
        needs.
      </p>
      <h2>Terms and Conditions</h2>
      <ScrollArea className="h-52 overflow-visible w-full rounded-md border p-4 mb-4 [&_h3]:font-semibold [&_p]:mb-2">
        <h3>1. Account Registration</h3>
        <p>
          By registering, you agree to provide accurate, current, and complete
          information.
        </p>
        <h3>2. Investment Risks</h3>
        <p>
          All investments carry risks. Past performance does not guarantee
          future results.
        </p>
        <h3>3. Privacy Policy</h3>
        <p>
          We respect your privacy and protect your personal information. Read
          our full privacy policy for details.
        </p>
        <h3>4. Account Security</h3>
        <p>
          You are responsible for maintaining the confidentiality of your
          account information.
        </p>
        <h3>5. Termination of Service</h3>
        <p>
          We reserve the right to terminate or suspend your account at our
          discretion.
        </p>
      </ScrollArea>

      <div className="flex gap-3 mt-6 md:flex-row justify-end flex-col-reverse">
        <Button onClick={() => navigate(CLOSABLE_PATH)} variant={"ghost"}>
          Cancel
        </Button>
        <Button onClick={onClick}>Agree and proceed to registration</Button>
      </div>
    </div>
  );
};

export default GetStarted;
