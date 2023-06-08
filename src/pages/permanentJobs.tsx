import { CardProps } from '@src/shared/interfaces';
import { ReactComponent as ChartIcon } from '@assets/icons/bar-chart.svg';
import { ReactComponent as DollarIcon } from '@assets/icons/dollar-symbol.svg';
import { ReactComponent as LocationIcon } from '@assets/icons/location-pin.svg';
import { ReactComponent as BriefCase } from '@assets/icons/briefcase.svg';
import BackroundImage from '@src/shared/backgroundImage';
import PermanentJobsBg from '@assets/images/permanentJobs.jpg';
import JobSeekerIcon from '@assets/icons/person_img.png';
import CustomCard from '@src/shared/cards/customCard';
import CustomButton from '@src/shared/customButton';
import { ReactComponent as Person } from '@assets/icons/person.svg';
import SwiperCarousel, { Slide } from '@src/shared/swiperCarousel';
import { IsJobSeeker } from '@src/shared/utils/authService';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLayout } from '@src/shared/slices/LayoutSlice';
import JobDetails from '@src/shared/jobDetails/jobDetails';
import { getPermanentJob } from '@src/shared/service/candidate/jobService';
import Spinner from './components/spinner';

const cardData: CardProps[] = [
  {
    id: 1,
    heading: 'HEAD CHEF',
    meta: [
      { icon: <DollarIcon className="w-4" />, text: '$50,000' },
      { icon: <LocationIcon className="w-4" />, text: 'I/9-3, Islamabad' },
      { icon: <ChartIcon className="w-4" />, text: 'Cooking' },
      { icon: <BriefCase className="w-4" />, text: 'Part time' },
    ],

    applicatants: '2/2 Applicants',
  },
  {
    id: 2,
    heading: 'HEAD CHEF',
    meta: [
      { icon: <DollarIcon className="w-4" />, text: '$50,000' },
      { icon: <LocationIcon className="w-4" />, text: 'I/9-3, Islamabad' },
      { icon: <ChartIcon className="w-4" />, text: 'Cooking' },
      { icon: <BriefCase className="w-4" />, text: 'Part time' },
    ],

    applicatants: '2/2 Applicants',
  },
  {
    id: 3,
    heading: 'HEAD CHEF',
    meta: [
      { icon: <DollarIcon className="w-4" />, text: '$50,000' },
      { icon: <LocationIcon className="w-4" />, text: 'I/9-3, Islamabad' },
      { icon: <ChartIcon className="w-4" />, text: 'Cooking' },
      { icon: <BriefCase className="w-4" />, text: 'Part time' },
    ],

    applicatants: '2/2 Applicants',
  },
  {
    id: 4,
    heading: 'HEAD CHEF',
    meta: [
      { icon: <DollarIcon className="w-4" />, text: '$50,000' },
      { icon: <LocationIcon className="w-4" />, text: 'I/9-3, Islamabad' },
      { icon: <ChartIcon className="w-4" />, text: 'Cooking' },
      { icon: <BriefCase className="w-4" />, text: 'Part time' },
    ],

    applicatants: '2/2 Applicants',
  },
];

interface IPermanentJobs {
  jobs: [];
}

function PermanentJobs({ jobs }: IPermanentJobs) {
  const [isShow, setModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const routeTo = (link: string) => {
    dispatch(
      setLayout({
        isShowFooter: false,
        isShowHeader: true,
      })
    );
    navigate(link);
  };

  const handleModalSubmit = () => {
    setModal(false);
    routeTo('/screeningQuestions');
  };
  return (
    <>
      <JobDetails
        isOpen={isShow}
        isShowCloseIcon
        handleSubmit={handleModalSubmit}
        handleClose={() => setModal(false)}
      />

      <BackroundImage
        url={PermanentJobsBg}
        classes="relative bg-cover bg-center bg-no-repeat h-[800px] "
      >
        <div className="bg-center-text text-center space-y-12 w-full px-16  sm:px-8 ">
          <div className="text-center space-y-4 ">
            <h1 className="font-bold text-white">Permanent Jobs </h1>
            <h5 className="text-white tracking-tight font-bold">
              Needing a permanent position filled - this is the place to do it
              with our easy-to-use templated design - including screening
              questions, to save you time.
            </h5>
          </div>

          <SwiperCarousel
            settings={{
              navigation: true,
            }}
          >
            {jobs.map((elem: CardProps, index: any) => (
              <Slide key={elem.id ? elem.id : index}>
                <CustomCard
                  handleClick={() => {
                    !IsJobSeeker() && setModal(true);
                  }}
                  key={index}
                  styleClass="p-6 py-12 space-y-4 bg-white  rounded-2xl card-shadow cursor-pointer h-full"
                >
                  <div className="inline-flex w-full items-center justify-center gap-3">
                    <img className="w-20 " src={JobSeekerIcon} alt="" />
                    <div className="items-start flex flex-col">
                      <h4 className="font-bold ">{elem?.Role.title}</h4>
                      <p className="text-gray normal-case font-normal">
                        {elem?.business_name}
                      </p>
                    </div>
                  </div>
                  {/* <hr className="solid" />
                                <div className=" flex w-full  flex-col   space-y-4 m-auto ">
                                    <div className="inline-flex gap-6 justify-center items-center ">
                                        <h4 className="text-black capitalize font-bold">Bar Staff</h4>
                                        <h4 className="text-black capitalize font-bold">Waiting Staff</h4>
                                    </div>
                                </div> */}
                  <hr className="solid" />
                  <div className=" flex items-start flex-col  space-y-4 m-auto ">
                    <div className="inline-flex items-center gap-3">
                      <DollarIcon className="w-4" />
                      <p className="text-gray">{elem?.pay_required}</p>
                    </div>
                    <div className="inline-flex items-center gap-3">
                      <LocationIcon className="w-4" />
                      <p className="text-gray">{elem?.job_location}</p>
                    </div>
                    <div className="inline-flex items-center gap-3">
                      <ChartIcon className="w-4" />
                      <p className="text-gray">{elem?.Role.title}</p>
                    </div>
                    <div className="inline-flex items-center gap-3">
                      <BriefCase className="w-4" />
                      <p className="text-gray">{elem?.pay_type}</p>
                    </div>
                  </div>

                  {IsJobSeeker() && (
                    <>
                      <hr className="solid" />
                      <CustomButton
                        handleButtonClick={() => setModal(true)}
                        label="More Details"
                        isLoading={false}
                        type="button"
                        styleClass="btn-yellow !rounded  m-auto  w-1/2"
                      />
                    </>
                  )}
                </CustomCard>
              </Slide>
            ))}
          </SwiperCarousel>

          <div
            className={`inline-flex gap-3 justify-center items-center ${
              IsJobSeeker() ? 'w-40' : 'w-72'
            }`}
          >
            {!IsJobSeeker() && (
              <CustomButton
                icon={<Person className="pr-2" />}
                handleButtonClick={() => routeTo('/business/permanentJobPost')}
                label="Post a Job"
                isLoading={false}
                type="button"
                styleClass="btn-yellow m-auto w-full !rounded "
              />
            )}
            <CustomButton
              handleButtonClick={() => routeTo('/permanentJobs')}
              label="See all"
              isLoading={false}
              type="button"
              styleClass="btn-yellow m-auto w-full !rounded "
            />
          </div>
        </div>
      </BackroundImage>
    </>
  );
}

export default PermanentJobs;
