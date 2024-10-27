import React, { useState } from "react";
import SigninHeader from "../SigninHeader";
import SigninHeading from "../SigninHeading";
import Input, { SigninButton } from "../Input";
import { Eye, EyeOff } from "lucide-react";

const SigninPage = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    password: "",
    confirmpassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPassword((prev) => !prev);
  };

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
            <SigninHeading title="Create Your Account" />
          </div>

          <div className="space-y-6">
            <p className="text-center text-white/60 text-sm sm:text-base font-medium font-['General Sans'] leading-snug">
              Enter your full name and password.
            </p>

            <div className="space-y-4 sm:space-y-6">
              <Input
                type="text"
                name="firstname"
                value={formData.firstname}
                placeholder="First Name"
                onChange={handleChange}
                className="w-full"
              />
              <Input
                type="text"
                name="lastname"
                value={formData.lastname}
                placeholder="Last Name"
                onChange={handleChange}
                className="w-full"
              />
            </div>

            {/* Password fields container */}
            <div className="space-y-4 sm:space-y-6">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  placeholder="Password"
                  onChange={handleChange}
                  className="w-full px-4 sm:px-5 py-2.5 pr-10 bg-white/10 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200 text-white"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-white/60 hover:text-white/80 transition-colors"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>

              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmpassword"
                  value={formData.confirmpassword}
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  className="w-full px-4 sm:px-5 py-2.5 pr-10 bg-white/10 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200 text-white"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-white/60 hover:text-white/80 transition-colors"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <SigninButton
            variant="primary"
            size="lg"
            className="w-full bg-white/50  transition-colors mt-6 sm:mt-8"
          >
            Verify
          </SigninButton>
        </form>
      </div>
    </div>
  );
};

export default SigninPage;
