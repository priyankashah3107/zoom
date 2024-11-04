import React, { useState, useRef, useEffect } from "react";
import { Camera } from "lucide-react";
import Home from "../../assets/hom.png";
import SigninHeader from "./SigninHeader";
import SigninHeading from "./SigninHeading";

const EmailCodeVerify = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(600);
  const inputs = useRef([]);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  const handleChange = (index, value) => {
    if (isNaN(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value !== "" && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && index > 0 && code[index] === "") {
      inputs.current[index - 1].focus();
    }
  };

  const handleVerify = () => {
    const verificationCode = code.join("");
    console.log("Verification code:", verificationCode);
  };

  const handleResend = () => {
    console.log("Resending code...");
    setTimer(120);
  };

  return (
    <div className="min-h-screen w-full bg-[#002b5b] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md mx-auto flex flex-col items-center">
        <SigninHeader />

        <div className="w-full text-center space-y-6">
          <SigninHeading title={"Check Your Email For A Code"} />

          <p className="text-gray-400 text-sm">
            Please enter the verification code sent to your email id
            prableen@gmail.com
          </p>

          <div className="flex justify-center gap-2 my-8">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputs.current[index] = el)}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-white bg-transparent border border-gray-600 rounded-lg focus:border-[#46ecc3] focus:ring-1 focus:ring-[#46ecc3] outline-none transition-all"
              />
            ))}
          </div>

          <div className="text-gray-400 text-sm">{formatTime(timer)}</div>

          <button
            onClick={handleVerify}
            className="w-full bg-[#46ecc3] hover:bg-[#3dd1ac] text-[#002b5b] font-semibold py-3 rounded-lg transition-colors"
          >
            Verify
          </button>

          <p className="text-gray-400 text-sm">
            Can't find the email? Click{" "}
            <button
              onClick={handleResend}
              className="text-[#46ecc3] hover:underline"
            >
              here
            </button>{" "}
            to resend.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailCodeVerify;
