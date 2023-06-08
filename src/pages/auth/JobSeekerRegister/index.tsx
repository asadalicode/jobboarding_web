import CustomCard from '@src/shared/cards/customCard';
import { Link, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ReactComponent as LogoBlue } from '@assets/logo_blue.svg';
import JobSeekerRegisterStep1 from './jobSeekerRegisterStep1';
import JobSeekerRegisterStep2 from './jobSeekerRegisterStep2';
import JobSeekerRegisterStep3 from './jobSeekerRegisterStep3';

function JobSeekerRegister() {
  const [step, setStep] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const _step = searchParams.get('step');

  useEffect(() => {
    setStep(_step ? Number(_step) : 1);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center    min-h-[calc(100vh-5vh)] bg-gradient-to-r from-bluish-gradient via-yellow-gradient to-yellow-gradient">
      <CustomCard styleClass="sm:rounded-none w-1/3 sm:w-full md:w-[60%] mx-auto py-8 mt-20 sm:mt-[100px] mb-8  flex space-y-6 sm:space-y-3">
        <LogoBlue className="self-center px-4 sm:px-8 sm:hidden" />
        <hr className="solid opacity-85 sm:hidden" />
        <div className="space-y-2">
          <h4 className="self-center font-semibold text-black">
            {_step ? 'Edit My Profile' : 'Jobseekers Register'}
          </h4>
          <div
            className={`flex flex-wrap justify-center w-full ${
              _step ? ' hidden' : ''
            }`}
          >
            <p className=" opacity-60">Already have an account?</p> &nbsp;{' '}
            <Link to="/login">
              <p className="text-blue !font-semibold">Login in now</p>{' '}
            </Link>
          </div>
        </div>
        {step === 1 && <JobSeekerRegisterStep1 handleStep={setStep} />}
        {step === 2 && <JobSeekerRegisterStep2 handleStep={setStep} />}
        {step === 3 && <JobSeekerRegisterStep3 handleStep={setStep} />}
      </CustomCard>
    </div>
  );
}

export default JobSeekerRegister;
