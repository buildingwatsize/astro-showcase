import type { RegisterFormData } from "@/components/register-step/RegisterForm";
import { navigate } from "astro:transitions/client";
import { useEffect, useState } from "react";
import ClosableText from "./ClosableText";

const SuccessResult: React.FC = () => {
  const [isReady, setIsReady] = useState<boolean>(false);
  const [values, setValues] = useState<RegisterFormData | null>(null);

  useEffect(() => {
    try {
      const { searchParams } = new URL(window.location.href);
      const result = searchParams.get("v") ?? "";
      if (result) {
        setValues(
          JSON.parse(decodeURIComponent(atob(result))) as RegisterFormData,
        );
        setIsReady(true);
      } else {
        navigate("/");
      }
    } catch (error) {
      // console.error(error);
      navigate("/");
    }
  }, []);

  if (!isReady) return null;
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <div className="bg-black text-white w-full h-40 flex justify-center items-end">
        <h2 className="text-2xl font-semibold my-4">ลงทะเบียนสำเร็จ</h2>
      </div>
      <div className="w-full bg-white h-full flex flex-col items-center">
        <div className="[&_div>div]:font-semibold [&_div>div]:mb-4 text-lg h-full w-full p-10">
          <div>
            Name:{" "}
            <div>
              {values?.firstName || "-"} {values?.lastName || "-"}
            </div>
          </div>
          <div>
            Email: <div>{values?.email || "-"}</div>
          </div>
          <div>
            Deposit Account Type: <div>{values?.depositAccount || "-"}</div>
          </div>
          <div>
            Deposit Amount:{" "}
            <div>{values?.targetAmount.toLocaleString() || "-"}</div>
          </div>
        </div>
        <div className="m-10 text-neutral-500">
          <ClosableText />
        </div>
      </div>
    </div>
  );
};

export default SuccessResult;
