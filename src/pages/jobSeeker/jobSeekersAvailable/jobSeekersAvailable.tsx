import { ReactComponent as DollarIcon } from '@assets/icons/dollar-symbol.svg';
import { ReactComponent as LocationIcon } from '@assets/icons/location-pin.svg';
import { ReactComponent as BriefCase } from '@assets/icons/briefcase.svg';
import CustomCard from '@src/shared/cards/customCard';
import CustomButton from '@src/shared/customButton';
import SwiperCarousel, { Slide } from '@src/shared/swiperCarousel';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLayout } from '@src/shared/slices/LayoutSlice';
import { useEffect, useState } from 'react';
import {
  getAllJobSeeker,
  getAllJobSeekerForEmployer,
} from '@src/shared/service/candidate/jobService';
import Spinner from '@src/pages/components/spinner';
import environment from '@src/environment';

function JobSeekersAvailable() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [candidates, setCandidates] = useState<ICandidate.Payload[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const _tab = searchParams.get('tab');
  dispatch(
    setLayout({
      isShowFooter: true,
      isShowHeader: false,
    })
  );

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      let result;
      setIsLoading(false);
      if (_tab === 'businessHome') {
        result = await getAllJobSeekerForEmployer();
      } else {
        result = await getAllJobSeeker();
      }
      if (result.success) {
        setCandidates(result.data.rows);
      }
    };
    getData();
  }, []);

  const routeTo = (val: string) => {
    navigate(val);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col items-center  space-y-24  pb-8  min-h-[calc(100vh-5vh)] bg-gradient-to-r from-bluish-gradient via-yellow-gradient to-yellow-gradient">
      <div className="flex flex-col justify-center gap-3 w-full px-16 sm:px-8 pt-32 pb-8 bg-blue">
        <div className="  justify-center mx-auto">
          <h2 className="text-white font-semibold">Jobseekers Available</h2>
        </div>
      </div>
      <div className="w-full px-16 sm:px-8">
        {isLoading ? (
          <div className="flex justify-center">
            <Spinner />
          </div>
        ) : (
          <SwiperCarousel
            settings={{
              navigation: true,
            }}
          >
            {candidates.map((candidate: ICandidate.Payload, index: number) => (
              <Slide key={candidate.id ? candidate.id : index}>
                <CustomCard
                  key={index}
                  styleClass="p-6 space-y-4 bg-white  rounded-2xl card-shadow  "
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
        )}
      </div>
    </div>
  );
}

export default JobSeekersAvailable;
