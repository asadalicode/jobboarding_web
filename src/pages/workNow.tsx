import { CardProps } from '@src/shared/interfaces';
import { ReactComponent as DateIcon } from '@assets/icons/date.svg';
import { ReactComponent as ClockIcon } from '@assets/icons/clock.svg';
import { ReactComponent as DollarIcon } from '@assets/icons/dollar-symbol.svg';
import { ReactComponent as LocationIcon } from '@assets/icons/location-pin.svg';
import BackroundImage from '@src/shared/backgroundImage';
import SectionWorkNow from '@assets/images/workNow.jpg';
import CustomCard from '@src/shared/cards/customCard';
import CustomButton from '@src/shared/customButton';
import { ReactComponent as Person } from '@assets/icons/person.svg';
import SwiperCarousel, { Slide } from '@src/shared/swiperCarousel';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { useNavigate } from 'react-router-dom';
import { IsJobSeeker } from '@src/shared/utils/authService';
import Popup from '@src/shared/popup';
import { useEffect, useState } from 'react';
import StripePopup from '@src/shared/stripePopup';
import { getWorkNowJob } from '@src/shared/service/candidate/jobService';

interface IWorkNow {
  jobs: [];
}

function WorkNow({ jobs }: IWorkNow) {
  const navigate = useNavigate();
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [jobId, setJobId] = useState<string>();
  const routeTo = (link: string) => {
    navigate(link);
  };

  const handleApplyJob = (_jobId: string) => {
    setIsOpenPopup(true);
    setJobId(_jobId);
  };

  return (
    <BackroundImage
      url={SectionWorkNow}
      classes="relative bg-cover sm:bg-cover md:bg-cover bg-center bg-no-repeat h-[800px] "
    >
      <Popup width={700} isOpen={isOpenPopup} setIsOpenPopup={setIsOpenPopup}>
        <StripePopup buttonLabel="Ok" planId={jobId} />
      </Popup>
      <div className="bg-center-text text-center space-y-12 w-full px-16 sm:px-8 ">
        <div className="text-center space-y-4 ">
          <h1 className="font-bold text-white ">Work Now</h1>
          <h5 className=" text-white tracking-tight font-bold">
            Do you urgently need a shift filled in the next 72 hours? Or are you
            a Job Seeker looking to pick up some extra work? You have come to
            the right place
          </h5>
        </div>

        <SwiperCarousel
          settings={{
            navigation: true,
            zoom: true,
          }}
        >
          {jobs.map((elem: IBusiness.WorkNowJobsPayload, index: any) => (
            <Slide key={elem.id ? elem.id : index}>
              <CustomCard
                key={index}
                styleClass="p-6  space-y-4 bg-white h-full   rounded-2xl card-shadow  "
              >
                <h4 className="font-extrabold px-6 h-20 sm:h-10 md:h-10">
                  {elem.Role.title}
                </h4>
                <hr className="solid" />

                <div className=" flex items-start flex-col  space-y-4 m-auto ">
                  <div className="inline-flex items-center gap-3">
                    <div>
                      <DateIcon className="w-4" />
                    </div>
                    <p className="text-gray">{elem.end_date}</p>
                  </div>
                  <div className="inline-flex items-center gap-3">
                    <ClockIcon className="w-4" />
                    <p className="text-gray">{elem.shift_end_time}</p>
                  </div>
                  <div className="inline-flex items-center gap-3">
                    <DollarIcon className="w-4" />
                    <p className="text-gray">{elem.hourly_rate}</p>
                  </div>
                  <div className="inline-flex items-center gap-3">
                    <LocationIcon className="w-4" />
                    <p className="text-gray">{elem.job_location}</p>
                  </div>

                  <p className="text-blue">
                    {elem.applications_count} Applicants
                  </p>
                </div>

                {IsJobSeeker() && (
                  <>
                    <hr className="solid" />
                    <CustomButton
                      label="Apply"
                      handleButtonClick={() => handleApplyJob(elem?.id ?? '')}
                      isLoading={false}
                      type="button"
                      styleClass="btn-yellow !rounded  m-auto rounded-md w-1/2"
                    />
                  </>
                )}
              </CustomCard>
            </Slide>
          ))}
        </SwiperCarousel>
        <div
          className={` inline-flex space-x-3 justify-center items-center ${
            IsJobSeeker() ? 'w-40' : 'w-72'
          } `}
        >
          {!IsJobSeeker() && (
            <CustomButton
              icon={<Person className="pr-2" />}
              handleButtonClick={() => routeTo('/businessWorkNowJobs/jobPost')}
              label="Post a Job"
              isLoading={false}
              type="button"
              styleClass="btn-yellow m-auto w-full !rounded "
            />
          )}
          <CustomButton
            handleButtonClick={() => routeTo('/workNowJobs')}
            label="See all"
            isLoading={false}
            type="button"
            styleClass="btn-yellow m-auto w-full  !rounded "
          />
        </div>
      </div>
    </BackroundImage>
  );
}

export default WorkNow;
