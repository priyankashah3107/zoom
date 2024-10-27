// responsive done
import React from "react";

import SigninHeader from "./SigninHeader";
import SigninHeading from "./SigninHeading";

import Input, { SigninButton } from "./Input";

const VerifyAge = () => {
  return (
    <div className="min-h-screen w-full bg-[#002b5b] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md mx-auto">
        <div className="w-full flex flex-col items-center">
          <SigninHeader />
        </div>

        <div className="mt-8 md:mt-12 flex flex-col items-center space-y-6 md:space-y-8">
          <SigninHeading title="Verify Your Age" />

          <p className="text-white/60 text-sm md:text-base font-medium font-['General Sans'] leading-snug text-center max-w-xs md:max-w-sm">
            Please confirm your birth year. This data will not be stored.
          </p>

          <div className="w-full max-w-xs space-y-4 md:space-y-6">
            <Input placeholder="Enter Your Age" className="w-full text-white" />

            <SigninButton
              variant="primary"
              size="lg"
              className="w-full bg-white/50 transition-colors"
            >
              Continue
            </SigninButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyAge;
