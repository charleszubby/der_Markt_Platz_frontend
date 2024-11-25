import React, { useState } from "react";
import OtpForm from "@/components/auth/otpForm";
import { useDispatch } from "react-redux";
import { verifyUser } from "@/store/auth-slice";
import OtpVerifyForm from "@/components/auth/perano/OtpVerifyForm";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(typeof otp);
    dispatch(verifyUser(otp)).then((data) => {
      console.log(data);
      if (data?.payload?.success) {
        //do something
        toast({
          title: data?.payload?.message,
        });
        sessionStorage.clear();
      } else if (data?.payload === undefined) {
        toast({
          title: data?.error?.message,
          variant: "destructive",
        });
        navigate("/auth/login");
      } else {
        toast({
          title: data?.payload?.message,
          variant: "destructive",
        });
        navigate("/auth/login");
      }
    });

    // .catch(() => {
    //   toast({
    //     title: "Unknown Error",
    //     variant: "destructive",
    //   });
    // });
  };
  return (
    <div className=" w-5/12 text-center ">
      <div className="w-full flex text-center">
        <h1 className="font-[600] text-[30px] w-full">
          Verify Your OTP Thanks!
        </h1>
      </div>
      <div className="h-full flex items-center justify-center">
        {/* <OtpForm
          otp={otp}
          setOtp={setOtp}
          handleOtpSubmit={handleSubmit}
          buttonText={"Verify OTP"}
        /> */}
        <OtpVerifyForm
          otp={otp}
          setotp={setOtp}
          handleOtpSubmit={handleSubmit}
          buttonText={"Verify OTP"}
        />
        {/* <ShadOtpForm /> */}
      </div>
    </div>
  );
};

export default VerifyEmail;
