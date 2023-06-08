/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import ContentContainer from '@src/containers/contentContainer';
import CustomCard from '@src/shared/cards/customCard';
import { setLayout } from '@src/shared/slices/LayoutSlice';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import ApplicantDetails from './applicantDetails';
import PermanentPost from './permanentPost';
import WorkNowPost from './workNowPost';

function WorkNowHistory() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const _step = searchParams.get('step') || '1';
  dispatch(
    setLayout({
      isShowHeader: false,
      isShowFooter: false,
      isShowCreditLabel: true,
    })
  );
  const [step, setStep] = useState('1');
  useEffect(() => {
    setStep(_step);
  }, [searchParams.get('step')]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <ContentContainer>
      <div className="flex flex-col justify-center gap-3 w-full px-16 sm:px-0">
        <CustomCard styleClass="flex  mx-auto flex-col space-y-2 py-4 px-5">
          <div className="flex flex-wrap  sm:gap-4 sm:space-x-0 items-center space-x-24 font-semibold text-black cursor-pointer">
            <h5
              onClick={() => {
                setStep('1');
                setSearchParams({ step: '1' });
              }}
              className={`hover:text-blue border-b-transparent tracking-wide  border-b-4  hover:border-blue opacity-40 hover:opacity-100 ${
                step === '1'
                  ? 'text-blue border-blue !opacity-100  !border-b-blue  border-b-4'
                  : ''
              }`}
            >
              Applicants Details
            </h5>
            <h5
              onClick={() => {
                setStep('2');
                setSearchParams({ step: '2' });
              }}
              className={`hover:text-blue border-b-transparent tracking-wide  border-b-4  hover:border-blue opacity-40 hover:opacity-100 ${
                step === '2'
                  ? 'text-blue border-blue !opacity-100  !border-b-blue  border-b-4'
                  : ''
              }`}
            >
              Work Now Post
            </h5>
            <h5
              onClick={() => {
                setStep('3');
                setSearchParams({ step: '3' });
              }}
              className={`hover:text-blue border-b-transparent tracking-wide  border-b-4  hover:border-blue opacity-40 hover:opacity-100 ${
                step === '3'
                  ? 'text-blue border-blue !opacity-100  !border-b-blue  border-b-4'
                  : ''
              }`}
            >
              Permanant Post
            </h5>
          </div>
          <hr className="solid opacity-85 relative bottom-[9px]" />
        </CustomCard>
        <CustomCard styleClass=" pt-8 pb-4  flex space-y-6 sm:space-y-3">
          {step === '1' && <ApplicantDetails />}
          {step === '2' && <WorkNowPost />}
          {step === '3' && <PermanentPost />}
        </CustomCard>
      </div>
    </ContentContainer>
  );
}

export default WorkNowHistory;
