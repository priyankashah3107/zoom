// responsive done
import React from "react";

import SigninHeader from "./SigninHeader";
import SigninHeading from "./SigninHeading";

import Input, { SigninButton } from "./Input";
import { useState } from "react";

const VerifyEmail = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    console.log("Current Email Value", email);
  };

  const handleInput = () => {
    e.preventDefault();
    console.log("Submitted Email", email);
  };
  return (
    <div className="min-h-screen w-full bg-[#002b5b] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md mx-auto">
        <div className="w-full flex flex-col items-center">
          <SigninHeader />
        </div>
        <form onSubmit={handleInput}>
          <div className="mt-8 md:mt-12 flex flex-col items-center space-y-6 md:space-y-8">
            <SigninHeading title="Let's Get Started" />

            <div className="w-full max-w-xs space-y-4 md:space-y-6">
              <Input
                placeholder="Enter Your Mail"
                className="w-full text-white"
                onChange={handleInputChange}
              />

              <SigninButton
                variant="primary"
                size="lg"
                type="submit"
                className="w-full bg-white/50 transition-colors"
              >
                Continue
              </SigninButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerifyEmail;
