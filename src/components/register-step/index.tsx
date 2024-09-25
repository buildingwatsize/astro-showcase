"use client";
import { useState } from "react";
import GetStarted from "./GetStarted.tsx";
import RegisterForm from "./RegisterForm.tsx";

const RegisterStep = () => {
  const [isAgreed, setIsAgreed] = useState(false);
  return (
    <div>
      {!isAgreed ? (
        <GetStarted onClick={() => setIsAgreed(true)} />
      ) : (
        <RegisterForm />
      )}
    </div>
  );
};

export default RegisterStep;
