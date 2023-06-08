import { CardProps } from '@src/shared/interfaces';
import { ReactComponent as DateIcon } from '@assets/icons/date.svg';
import { ReactComponent as ClockIcon } from '@assets/icons/clock.svg';
import { ReactComponent as DollarIcon } from '@assets/icons/dollar-symbol.svg';
import { ReactComponent as LocationIcon } from '@assets/icons/location-pin.svg';
import { ReactComponent as BriefCase } from '@assets/icons/briefcase.svg';
import BackroundImage from '@src/shared/backgroundImage';
import Carousel from '@src/shared/carousel';
import SectionJobSeeker from '@assets/images/JobSeeker.jpg';
import JobSeekerIcon from '@assets/icons/person_img.png';
import CustomCard from '@src/shared/cards/customCard';
import CustomButton from '@src/shared/customButton';
import { ReactComponent as Person } from '@assets/icons/person.svg';
import SwiperCarousel, { Slide } from '@src/shared/swiperCarousel';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLayout } from '@src/shared/slices/LayoutSlice';
import environment from '@src/environment';

interface IJobSeeker {
  candidates: ICandidate.Payload[];
}

function JobSeekers({ candidates }: IJobSeeker) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const routeTo = (link: string) => {
    dispatch(
      setLayout({
        isShowFooter: true,
        isShowHeader: true,
      })
    );
    navigate(link);
  };
  return (
    <BackroundImage
      url={SectionJobSeeker}
      classes="relative bg-auto sm:bg-cover md:bg-cover bg-center bg-no-repeat h-[900px] "
    >
      <div className="bg-center-text text-center space-y-12 max-w-full px-16 sm:px-8">
        <div className="text-center space-y-4">
          <h1 className="font-bold text-white">Jobseekers Available</h1>
          <h5 className=" text-white tracking-tight font-bold">
            Unemployed? Or just looking for something new? Post your profile
            here and let the offers roll in. You can "hide" your profile at
            anytime too!
          </h5>
        </div>
        <SwiperCarousel
          settings={{
            navigation: true,
          }}
        >
          {candidates.map((candidate: ICandidate.Payload, index: number) => (
            <Slide key={candidate.id ? candidate.id : index}>
              <CustomCard
                key={index}
                styleClass="p-6 space-y-4 bg-white  rounded-2xl card-shadow h-full "
              >
                <div className="inline-flex w-full items-center justify-center   gap-3">
                  <img
                    className="w-20 h-20 rounded-full"
                    src={`${environment.serverUrl}${candidate.profile_image_url}`}
                    alt=""
                  />
                  <h4 className="font-bold">
                    {candidate.first_name} {candidate.last_name}
                  </h4>
                </div>
                <hr className="solid" />
                <div className=" flex w-full  flex-col   space-y-4 m-auto ">
                  <div className="inline-flex gap-6 justify-center items-center ">
                    {candidate.Roles?.map((role) => (
                      <h4
                        key={role.id}
                        className="text-black capitalize font-bold"
                      >
                        {role.title}
                      </h4>
                    ))}
                  </div>
                </div>
                <hr className="solid" />
                <div className=" flex items-start flex-col  space-y-4 m-auto ">
                  <div className="inline-flex items-center gap-3">
                    <LocationIcon className="w-4" />,
                    <p className="text-gray">{candidate.suburb}</p>
                  </div>

                  <div className="inline-flex items-center gap-3">
                    <DollarIcon className="w-4" />
                    <p className="text-gray">{candidate.hourly_rate}</p>
                  </div>
                  <div className="inline-flex items-center gap-3">
                    <BriefCase className="w-4" />
                    <p className="text-gray">{candidate.JobType?.title}</p>
                  </div>
                </div>

                <hr className="solid" />

                <CustomButton
                  label="View Profile"
                  handleButtonClick={() =>
                    routeTo(`/viewProfile/${candidate.id}?tab=businessHome`)
                  }
                  isLoading={false}
                  type="button"
                  styleClass="btn-yellow !rounded  m-auto  w-1/2"
                />
              </CustomCard>
            </Slide>
          ))}
        </SwiperCarousel>
        <div className="inline-flex gap-3 justify-center items-center w-40 ">
          <CustomButton
            handleButtonClick={() =>
              routeTo('/jobSeeker/jobSeekersAvailable?tab=businessHome')
            }
            label="See all"
            isLoading={false}
            type="button"
            styleClass="btn-yellow m-auto w-full !rounded "
          />
        </div>
      </div>
    </BackroundImage>
  );
}

export default JobSeekers;
