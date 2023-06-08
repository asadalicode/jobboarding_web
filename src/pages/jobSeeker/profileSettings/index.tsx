import CustomCard from '@src/shared/cards/customCard';
import { Avatar } from '@material-tailwind/react';
import PersonIcon from '@assets/icons/person_img.png';
import RatingStars from '@src/shared/ratingStars';
import { ReactComponent as PdfIcon } from '@assets/icons/pdf.svg';
import { ReactComponent as DownloadIcon } from '@assets/icons/download.svg';
import CustomButton from '@src/shared/customButton';
import { ReactComponent as PencilIcon } from '@assets/icons/pencil.svg';
import ContentContainer from '@src/containers/contentContainer';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLayout } from '@src/shared/slices/LayoutSlice';
import { Fragment, useEffect, useState } from 'react';
import { getProfile } from '@src/shared/service/candidate/authService';
import environment from '@src/environment';

function JobSeekerProfileSetting() {
  const dispatch = useDispatch();
  const [profileData, setProfileData] = useState<any>();
  dispatch(
    setLayout({
      isShowFooter: false,
      isShowHeader: false,
    })
  );

  useEffect(() => {
    const getProfileData = async () => {
      const result = await getProfile();
      if (result.success) {
        setProfileData(result.data);
      }
    };
    getProfileData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const params = useParams();
  const navigate = useNavigate();
  const routeTo = (link: string) => {
    navigate(link);
  };
  return (
    <ContentContainer>
      <div className="flex flex-col justify-center gap-3 w-full px-16 sm:px-0">
        <CustomCard styleClass="flex w-full !pt-24  mx-auto flex-col  space-y-8 py-4 pb-8 px-8 ">
          <hr className="text-gray-light" />
          <div className="flex flex-wrap gap-12 sm:gap-6 justify-between items-center">
            <div className="flex flex-wrap gap-12 sm:gap-6 items-center">
              <div className="flex items-center gap-6">
                {profileData?.profile_image_url ? (
                  <img
                    // eslint-disable-next-line no-unsafe-optional-chaining
                    src={environment.serverUrl + profileData?.profile_image_url}
                    alt="profile_image"
                  />
                ) : (
                  <Avatar size="xxl" src={PersonIcon} />
                )}
                <div className="text-left">
                  <h4 className="text-black font-semibold leading-none">
                    {profileData?.first_name} {profileData?.last_name}
                  </h4>
                  {/* <div className="flex text-yellow-secondary gap-4 items-center">
                    <RatingStars /> (22)
                  </div> */}
                </div>
              </div>
              <div className="flex gap-10">
                <div className="text-left space-y-3">
                  <p className="text-black font-semibold">Email</p>
                  <p className="text-gray">{profileData?.email}</p>
                </div>
                <div className="text-left space-y-3">
                  <p className="text-black font-semibold">Phone</p>
                  <p className="text-gray">{profileData?.phone}</p>
                </div>
              </div>
            </div>
            <PencilIcon
              onClick={() => routeTo('/jobSeekerRegister/?step=1')}
              className="cursor-pointer w-auto h-10"
            />
          </div>
          <section className="space-y-6">
            <hr className="text-gray-light" />
            <div className="flex flex-wrap gap-6 justify-between">
              <div className="text-left space-y-2">
                <p className="text-black font-semibold">Role</p>
                <div>
                  {profileData?.Roles.map((role: any, index: number) => (
                    <p className="text-gray" key={index}>
                      {role.title}
                    </p>
                  ))}
                </div>
              </div>
              <div className="text-left space-y-2">
                <p className="text-black font-semibold">Employee Type</p>
                <p className="text-gray">Full Time / Salary</p>
              </div>
              <div className="text-left space-y-2">
                <p className="text-black font-semibold">
                  Years Experience in Similar Role
                </p>
                <p className="text-gray">{profileData?.years_of_experience}</p>
              </div>
              <div className="text-left space-y-2">
                <p className="text-black font-semibold">Hourly Rate Required</p>
                <p className="text-gray">{profileData?.hourly_rate}</p>
              </div>
              <div className="text-left space-y-2">
                <p className="text-black font-semibold">Age</p>
                <p className="text-gray">{profileData?.age}</p>
              </div>
            </div>
          </section>
          <section className="space-y-6">
            <hr className="text-gray-light" />
            <div className="flex justify-between items-center">
              <h5 className="text-left text-black font-semibold ">
                Current Role
              </h5>
              <PencilIcon
                onClick={() => routeTo('/jobSeekerRegister/?step=2')}
                className="cursor-pointer w-auto h-10"
              />
            </div>
            <hr className="text-gray-light" />
            {profileData?.CandidateJobHistories?.map(
              (item: any, index: number) =>
                (item.currently_working ? (
                  <Fragment key={index}>
                    <div className="flex flex-wrap gap-6 justify-between">
                      <div className="text-left space-y-2">
                        <p className="text-black font-semibold">Role</p>
                        <div>
                          <p className="text-gray">{item?.Role.title}</p>
                        </div>
                      </div>
                      <div className="text-left space-y-2">
                        <p className="text-black font-semibold">Company Name</p>
                        <p className="text-gray">{item.company_name}</p>
                      </div>
                      <div className="text-left space-y-2">
                        <p className="text-black font-semibold">
                          Suburb & State
                        </p>
                        <p className="text-gray">{item.suburb}</p>
                      </div>
                      <div className="text-left space-y-2">
                        <p className="text-black font-semibold">Start Date</p>
                        <p className="text-gray">{item.start_date}</p>
                      </div>
                      {/* <div className="text-left space-y-2">
                        <p className="text-black font-semibold">Finish Date</p>
                        <p className="text-gray">{item.finish_date}</p>
                      </div> */}
                    </div>
                  </Fragment>
                ) : null)
            )}
          </section>
          <section className="space-y-6">
            <hr className="text-gray-light" />
            <h5 className="text-left text-black font-semibold">
              Previous Role
            </h5>
            <hr className="text-gray-light" />
            {profileData?.CandidateJobHistories?.map(
              (item: any, index: number) =>
                (!item.currently_working ? (
                  <Fragment key={index}>
                    <div className="flex flex-wrap gap-6 justify-between">
                      <div className="text-left space-y-2">
                        <p className="text-black font-semibold">Role</p>
                        <div>
                          <p className="text-gray">{item?.Role.title}</p>
                        </div>
                      </div>
                      <div className="text-left space-y-2">
                        <p className="text-black font-semibold">Company Name</p>
                        <p className="text-gray">{item.company_name}</p>
                      </div>
                      <div className="text-left space-y-2">
                        <p className="text-black font-semibold">
                          Suburb & State
                        </p>
                        <p className="text-gray">{item.suburb}</p>
                      </div>
                      <div className="text-left space-y-2">
                        <p className="text-black font-semibold">Start Date</p>
                        <p className="text-gray">{item.start_date}</p>
                      </div>
                      <div className="text-left space-y-2">
                        <p className="text-black font-semibold">Finish Date</p>
                        <p className="text-gray">{item.finish_date}</p>
                      </div>
                    </div>
                  </Fragment>
                ) : null)
            )}
          </section>
          <section className="space-y-6">
            <hr className="text-gray-light" />
            <h5 className="text-left text-black font-semibold">
              Qualifications/Certifications
            </h5>
            <hr className="text-gray-light" />
            <div className="text-left space-y-2">
              {profileData?.Qualifications &&
                profileData.Qualifications.map((item: any, index: number) => (
                  <p key={index} className="text-gray my-2">
                    {index + 1}. {item.title}
                  </p>
                ))}
            </div>
          </section>
          <section className="space-y-6">
            <hr className="text-gray-light" />
            <div className="flex flex-wrap gap-12 sm:gap-6 justify-between items-center">
              <Link
                // eslint-disable-next-line no-unsafe-optional-chaining
                to={environment.serverUrl + profileData?.resume_url}
                target="_blank"
                download
                className="bg-gray-light flex gap-16 p-4 items-center rounded"
              >
                <div className="flex items-center justify-center mx-4">
                  <PdfIcon height={40} />
                  <p className="mx-2">Download Resume</p>
                </div>
                <div className="flex items-center justify-center mx-4">
                  <DownloadIcon />
                </div>
              </Link>
              <CustomButton
                label="View CV"
                handleButtonClick={() =>
                  routeTo(`/viewCV?resume=${profileData.resume_url}`)
                }
                isLoading={false}
                type="button"
                styleClass="btn-yellow !px-16 sm:mx-auto  !rounded "
              />
            </div>
          </section>
          <section className="space-y-6">
            <hr className="text-gray-light" />
            <div className="flex justify-between items-center">
              <h5 className="text-left text-black font-semibold">
                Dream Places To Work?
              </h5>
              <PencilIcon
                onClick={() => routeTo('/jobSeekerRegister/?step=3')}
                className="cursor-pointer w-auto h-10"
              />
            </div>
            <hr className="text-gray-light" />
            <div className="flex flex-wrap gap-6 justify-between">
              <div className="my-6 w-full flex flex-wrap justify-between">
                {profileData?.CandidateJobInterests &&
                  profileData?.CandidateJobInterests.map(
                    (item: any, index: number) => (
                      <div className="w-80 flex justify-start" key={index}>
                        <div className="mr-4">
                          <p className="!font-bold">Business Name</p>
                          <p className="text-gray">{item.organization}</p>
                        </div>
                        <div className="mr-4">
                          <p className="!font-bold">Suburb & State</p>
                          <p className="text-gray">{item.location}</p>
                        </div>
                      </div>
                    )
                  )}
              </div>
            </div>
          </section>
          <section className="space-y-6">
            <hr className="text-gray-light" />
            <h5 className="text-left text-black font-semibold">
              (Your Rating)
            </h5>
            <hr className="text-gray-light" />
            {profileData?.CandidateRatings.map((rate: any, index: number) => {
              const start = new Date(rate?.createdAt);
              const differenceInTime = new Date().getTime() - start.getTime();
              const differenceInDays = differenceInTime / (1000 * 3600 * 24);
              return (
                <div className="flex flex-col gap-3  sm:px-0">
                  <div className="flex w-full items-center justify-between  px-5 pt-3 pb-2 rounded-md bg-gray-light">
                    <div>
                      <p className="text-black font-bold">
                        {rate.Employer.company_name}
                      </p>
                      <RatingStars
                        count={rate.rating}
                        isEditable={false}
                        color="#ffd700"
                      />
                    </div>
                    <p className="text-gray font-normal">
                      {' '}
                      {`${Math.floor(differenceInDays / 30)} Months ago`}
                    </p>
                  </div>
                </div>
              );
            })}
          </section>
        </CustomCard>
      </div>
    </ContentContainer>
  );
}
export default JobSeekerProfileSetting;
