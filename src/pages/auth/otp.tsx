import CustomCard from '@src/shared/cards/customCard';
import { ReactComponent as Logoblue } from '@assets/logo_blue.svg';
import OtpInput from 'react-otp-input';
import CustomButton from '@src/shared/customButton';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IsBusiness } from '@src/shared/utils/authService';

function OTP() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('-');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    IsBusiness() ? navigate('/business/chooseMembership') : navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-5vh)] bg-gradient-to-r from-bluish-gradient via-yellow-gradient to-yellow-gradient">
      <CustomCard styleClass="sm:rounded-none w-1/3 sm:w-full md:w-[60%] mx-auto mt-20 sm:mt-28 mb-8  py-8  flex space-y-6 sm:space-y-3">
        <Logoblue className="self-center px-4 sm:px-8" />
        <hr className="solid opacity-85" />
        <div className="space-y-2 mx-8 ">
          <h4 className="self-center font-semibold text-black">
            Enter Verification Code
          </h4>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center justify-center w-full">
              <p className=" opacity-60 w-3/4 mb-8">
                We have just sent a verification code to +92 898080008
              </p>

              <OtpInput
                value={otp}
                inputType="number"
                placeholder="-"
                onChange={setOtp}
                numInputs={6}
                inputStyle="focus:outline-transparent bg-gray-light border-2 border-gray-light text-2xl font-bold rounded-lg py-3 !w-10 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none "
                renderSeparator={<span>&nbsp;&nbsp;&nbsp;</span>}
                renderInput={(props) => <input {...props} />}
              />
              <p className="text-blue underline my-6 cursor-pointer">
                Send the code again
              </p>

              <CustomButton
                label="Verify"
                type="submit"
                isLoading={false}
                variant="outlined"
                styleClass="btn-yellow w-full !rounded-[5px]"
              />
            </div>
          </form>
        </div>
      </CustomCard>
    </div>
  );
}

export default OTP;
