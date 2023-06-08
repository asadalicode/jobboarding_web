import CustomCard from '@src/shared/cards/customCard';
import {
  ReactComponent as Logoblue,
  ReactComponent as Logo_blue,
} from '@assets/logo_blue.svg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PermanentJobPostStep1 from './permanentJobPostStep1';
import PermanentJobPostStep2 from './permanentJobPostStep2';

function PermanentJobPost() {
  const [step, setStep] = useState(1);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    setStep(step);
  }, [step]);
  return (
    <div className="flex flex-col items-center justify-center    min-h-[calc(100vh-5vh)] bg-gradient-to-r from-bluish-gradient via-yellow-gradient to-yellow-gradient">
      <CustomCard styleClass="w-1/3 sm:w-[100%] md:w-[60%] mx-auto py-8 mt-20 sm:mt-[100px] mb-8  flex space-y-6 sm:space-y-3">
        <Logoblue className="self-center px-4 sm:px-8 sm:hidden" />
        <hr className="solid opacity-85 sm:hidden" />
        <div className="space-y-2">
          <h4 className="self-center font-semibold text-black">
            Permanent Job Post
          </h4>
        </div>
        {step === 1 && <PermanentJobPostStep1 handleStep={setStep} />}
        {step === 2 && <PermanentJobPostStep2 handleStep={setStep} />}
      </CustomCard>
    </div>
  );
}

export default PermanentJobPost;
