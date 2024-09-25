"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

const mockAlertMsg: string =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, id modi, quaerat facere laudantium fuga, dolores pariatur dolor officia blanditiis velit magni impedit veniam iusto? Libero nostrum aliquam similique laborum!";

const AlertBanner = () => {
  const [alertMsg, setAlertMsg] = useState<string>("");

  useEffect(() => {
    // ...do stuff / get alert message from server or whatever...
    // setAlertMsg(mockAlertMsg);
  }, []);

  if (!alertMsg) return null;
  return (
    <div className="mb-6">
      <Alert slot="alert" variant="destructive">
        <ExclamationTriangleIcon className="h-4 w-4" />
        <AlertTitle>Attention!</AlertTitle>
        <AlertDescription>{alertMsg}</AlertDescription>
      </Alert>
    </div>
  );
};

export default AlertBanner;
