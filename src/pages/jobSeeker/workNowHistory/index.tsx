/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import ContentContainer from '@src/containers/contentContainer';
import CustomCard from '@src/shared/cards/customCard';
import { setLayout } from '@src/shared/slices/LayoutSlice';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PermanentJobHistory from './permanentJobHistory';
import WorkNowJobHistory from './workNowJobHistory';

function JobSeekerWorkHistory() {
  const dispatch = useDispatch();
  dispatch(
    setLayout({
      isShowFooter: false,
      isShowHeader: false,
    })
  );
  const [step, setStep] = useState(1);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    setStep(step);
  }, [step]);
  return (
    <ContentContainer>
      <div className="flex flex-col justify-center gap-3 w-full px-16 sm:px-0">
        <CustomCard styleClass="flex  mx-auto flex-col space-y-2 py-4 px-5">
          <div className="flex flex-wrap  sm:gap-4 sm:space-x-0 items-center space-x-24 font-semibold text-black cursor-pointer">
            <h5
              onClick={() => {
                setStep(1);
              }}
              className={`hover:text-blue border-b-transparent tracking-wide  border-b-4  hover:border-blue opacity-40 hover:opacity-100 ${
                step === 1
                  ? 'text-blue border-blue !opacity-100  !border-b-blue  border-b-4'
                  : ''
              }`}
            >
              Work Now Job History
            </h5>
            <h5
              onClick={() => {
                setStep(2);
              }}
              className={`hover:text-blue border-b-transparent tracking-wide  border-b-4  hover:border-blue opacity-40 hover:opacity-100 ${
                step === 2
                  ? 'text-blue border-blue !opacity-100  !border-b-blue  border-b-4'
                  : ''
              }`}
            >
              Permanant Job History
            </h5>
          </div>
          <hr className="solid opacity-85 relative bottom-[9px]" />
        </CustomCard>
        <CustomCard styleClass=" pt-8 pb-4  flex space-y-6 sm:space-y-3">
          {step === 1 && <WorkNowJobHistory />}
          {step === 2 && <PermanentJobHistory />}
        </CustomCard>
      </div>
    </ContentContainer>
  );
}

export default JobSeekerWorkHistory;
