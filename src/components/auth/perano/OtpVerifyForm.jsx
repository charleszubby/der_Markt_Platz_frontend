import React from "react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
const OtpVerifyForm = ({ otp, setotp, handleOtpSubmit, buttonText }) => {
  const handleOnChange = (values) => {
    setotp(values);
  };
  return (
    <div>
      <p className="mb-3">Enter the otp sent to your email address</p>
      <form
        className="flex flex-col justify-center gap-3"
        onSubmit={handleOtpSubmit}
      >
        <div className="space-y-2">
          <InputOTP
            value={otp}
            onChange={handleOnChange}
            maxLength={6}
            pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <div className="text-center text-sm">
            {otp === "" ? (
              <>Enter your one-time password.</>
            ) : (
              <>You entered: {otp}</>
            )}
          </div>
        </div>
        <button
          className="rounded-lg py-2 h-[40px] bg-[#967AD1] hover:bg-[#61459E] text-white transition duration-[500] ease-in"
          //disabled={loading}
        >
          {/* {loading ? <ClipLoader color="#61459e" /> : "Verify"} */}
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default OtpVerifyForm;
