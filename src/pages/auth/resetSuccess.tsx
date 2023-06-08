import CustomCard from '@src/shared/cards/customCard';
import { ReactComponent as Logoblue } from '@assets/logo_blue.svg';
import CustomButton from '@src/shared/customButton';

import { Link, useNavigate } from 'react-router-dom';

function ResetSuccess() {
  return (
    <div className="flex flex-col items-center justify-center  min-h-[calc(100vh-5vh)] bg-gradient-to-r from-bluish-gradient via-yellow-gradient to-yellow-gradient">
      <CustomCard styleClass="sm:rounded-none w-1/3 sm:w-full md:w-[60%] mx-auto py-8 mt-20 sm:mt-28 mb-8   flex space-y-6 sm:space-y-3">
        <Logoblue className="self-center px-4 sm:px-8" />
        <hr className="solid opacity-85" />
        <div className="space-y-2">
          <h4 className="self-center font-semibold text-black">
            Password Reset
          </h4>
          <div className="flex flex-wrap justify-center w-full">
            <p className=" opacity-60 px-8">
              Your password has been successfully reset. click below to log in
            </p>
          </div>
        </div>
        <div className="px-10 sm:px-4 max-h-[calc(100vh-50vh)] overflow-y-auto">
          <Link to="/login">
            <CustomButton
              label="Continue"
              type="submit"
              isLoading={false}
              variant="outlined"
              styleClass="btn-yellow w-full !rounded-[5px] "
            />
          </Link>
        </div>
      </CustomCard>
    </div>
  );
}

export default ResetSuccess;
