import React, { useState } from "react";
import SigninHeader from "../SigninHeader";
import SigninHeading from "../SigninHeading";
import Input, { SigninButton } from "../Input";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen w-full bg-[#002b5b] flex items-center justify-center p-4 sm:p-6 md:p-8 text-white">
      <div className="w-full max-w-md mx-auto">
        <form onSubmit={handleFormSubmit} className="space-y-6 md:space-y-8">
          <div className="flex flex-col gap-8 md:gap-12 items-center">
            <SigninHeader />
            <SigninHeading title="Welcome Back!" />
          </div>

          <div className="space-y-6">
            <div className="space-y-4 sm:space-y-6">
              <Input
                type="text"
                name="firstname"
                value={formData.firstname}
                placeholder="First Name"
                onChange={handleChange}
                className="w-full"
              />
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  placeholder="Password"
                  onChange={handleChange}
                  className="w-full px-4 sm:px-5 py-2.5 pr-10 bg-white/10 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200 text-white"
                />
              </div>
            </div>
          </div>

          <SigninButton
            variant="primary"
            size="lg"
            className="w-full bg-white/50  transition-colors mt-6 sm:mt-8"
          >
            Continue
          </SigninButton>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
