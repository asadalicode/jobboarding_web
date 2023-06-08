import CustomCard from '@src/shared/cards/customCard';
import { Avatar } from '@material-tailwind/react';
import PersonIcon from '@assets/icons/person_img.png';
import RatingStars from '@src/shared/ratingStars';
import { ReactComponent as PdfIcon } from '@assets/icons/pdf.svg';
import { ReactComponent as DownloadIcon } from '@assets/icons/download.svg';
import CustomButton from '@src/shared/customButton';
import ContentContainer from '@src/containers/contentContainer';
import {
  useSearchParams,
  useNavigate,
  useParams,
  Link,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLayout } from '@src/shared/slices/LayoutSlice';
import { useEffect, useState, Fragment } from 'react';
import {
  getAppliedJobInfo,
  getJobseekerProfileDetail,
} from '@src/shared/service/businessServices/jobHistoryService';
import environment from '@src/environment';

function ViewProfile() {
  const params = useParams();
  const navigate = useNavigate();
  const [profileDetail, setProfileDetail] = useState<any>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [jobseekerDetail, setJobseekerDetail] = useState<any>({});
  const _tab = searchParams.get('tab');
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    getJobsDetail();
  }, []);
  const getJobsDetail = async () => {
    let res;
    if (_tab === 'businessHome') {
      res = await getJobseekerProfileDetail(params?.id ?? '');
    } else {
      res = await getAppliedJobInfo(params?.id ?? '');
    }
    setProfileDetail(res.data);
  };
  dispatch(
    setLayout({
      isShowFooter: false,
      isShowHeader: false,
      isShowCreditLabel: false,
    })
  );

  const getJobseeker = async () => {
    setIsLoading(true);
    const result = await getJobSeekerDetail(params?.id ?? '');
    setIsLoading(false);
    if (result.success) {
      setJobseekerDetail(result.data?.Candidate ?? {});
    }
  };
  const handleRoute = (link: string) => {
    navigate(link);
  };
  const routeTo = (link: string) => {
    navigate(link);
  };
  return (
    <ContentContainer>
      <div className="flex flex-col justify-center gap-3 w-full px-16 sm:px-0 ">
        <CustomCard styleClass="flex w-full  mx-auto flex-col  space-y-8 py-4 px-8  ">
          {/* overflow-auto max-h-[75vh] */}
          <div className="flex sm:block xs:block self-end items-center bg-gray-light px-4 py-3">
            <p className="text-gray">
              "To access Jobseeker contact details - you will use a credit"
            </p>
            <div className="flex sm:block xs:block">
              <CustomButton
                label="Use 1 Credit"
                isLoading={false}
                type="button"
                styleClass="btn-yellow  !rounded !h-auto  w-36 mx-2 sm:my-2 xs:my-2"
              />
              <CustomButton
                label="No"
                isLoading={false}
                type="button"
                labelStyle="text-gray"
                styleClass="bg-gray-light !rounded !mx-auto !h-auto opacity-70 w-36 border border-gray"
              />
            </div>
          </div>
          <hr className="text-gray-light" />
          <div className="flex flex-wrap gap-12 sm:gap-6 items-center">
            <div className="flex items-center gap-6">
              <Avatar size="xxl" src={PersonIcon} />
              <div className="text-left">
                <h4 className="text-black font-semibold leading-none">
                  {profileDetail?.Candidate?.first_name}{' '}
                  {profileDetail?.Candidate?.last_name}
                </h4>
                <div className="flex text-yellow-secondary gap-4 items-center">
                  <RatingStars
                    count={parseInt(profileDetail?.Candidate?.rating, 10)}
                  />{' '}
                  ({profileDetail?.Candidate?.total_reviews})
                </div>
              </div>
            </div>
            <div className="flex gap-10">
              <div className="text-left space-y-3">
                <p className="text-black font-semibold">Email</p>
                <p className="text-gray">{profileDetail?.Candidate?.email}</p>
              </div>
              <div className="text-left space-y-3">
                <p className="text-black font-semibold">Phone</p>
                <p className="text-gray">{profileDetail?.Candidate?.phone}</p>
              </div>
            </div>
          </div>

          <section className="space-y-6">
            <hr className="text-gray-light" />

            <div className="flex flex-wrap gap-6 justify-between">
              <div className="text-left space-y-2">
                <p className="text-black font-semibold">Role</p>
                <div>
                  {profileDetail?.Candidate?.Roles.map(
                    (role: any, index: number) => (
                      <p className="text-gray" key={index}>
                        {role.title}
                      </p>
                    )
                  )}
                </div>
              </div>
              <div className="text-left space-y-2">
                <p className="text-black font-semibold">Employee Type</p>
                <p className="text-gray">
                  {profileDetail?.Candidate?.JobType.title}
                </p>
              </div>
              <div className="text-left space-y-2">
                <p className="text-black font-semibold">
                  Years Experience in Similar Role
                </p>
                <p className="text-gray">
                  {profileDetail?.Candidate?.years_of_experience}
                </p>
              </div>
              <div className="text-left space-y-2">
                <p className="text-black font-semibold">Hourly Rate Required</p>
                <p className="text-gray">
                  ${profileDetail?.Candidate?.hourly_rate}
                </p>
              </div>
              <div className="text-left space-y-2">
                <p className="text-black font-semibold">Age</p>
                <p className="text-gray">{profileDetail?.Candidate?.age}</p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <hr className="text-gray-light" />
            <h5 className="text-left text-black font-semibold">Current Role</h5>
            <hr className="text-gray-light" />
            {profileDetail?.Candidate?.CandidateJobHistories?.map(
              (item: any, index: number) =>
                (item.currently_working ? (
                  <Fragment key={index}>
                    <div className="flex flex-wrap gap-6 justify-betwFeen">
                      <div className="text-left space-y-2">
                        <p className="text-black font-semibold">Role</p>
                        <div>
                          <p className="text-gray">{item?.Role?.title}</p>
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
            {profileDetail?.Candidate?.CandidateJobHistories?.map(
              (item: any, index: number) =>
                (!item.currently_working ? (
                  <Fragment key={index}>
                    <div className="flex flex-wrap gap-6 justify-between">
                      <div className="text-left space-y-2">
                        <p className="text-black font-semibold">Role</p>
                        <div>
                          <p className="text-gray">{item?.Role?.title}</p>
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
              {profileDetail?.Candidate?.Qualifications &&
                profileDetail?.Candidate?.Qualifications.map(
                  (item: any, index: number) => (
                    <p key={index} className="text-gray my-2">
                      {index + 1}. {item.title}
                    </p>
                  )
                )}
            </div>
          </section>

          <section className="space-y-6">
            <hr className="text-gray-light" />

            <div className="flex flex-wrap gap-12 sm:gap-6 justify-between items-center">
              <Link
                to={
                  // eslint-disable-next-line no-unsafe-optional-chaining
                  environment.serverUrl + profileDetail?.Candidate?.resume_url
                }
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
                  routeTo(
                    `/viewCV?resume=${profileDetail?.Candidate?.resume_url}`
                  )
                }
                isLoading={false}
                type="button"
                styleClass="btn-yellow !px-16 sm:mx-auto  !rounded "
              />
            </div>
          </section>

          {_tab !== 'work-now' && (
            <section className="space-y-6">
              <hr className="text-gray-light" />
              {profileDetail?.JobApplicationAnswers &&
              profileDetail?.JobApplicationAnswers.length ? (
                <>
                  <div className="flex flex-col justify-center gap-1">
                    <h5 className="text-center text-black font-semibold">
                      Employer Screening Questions.
                    </h5>
                    <CustomButton
                      label="Applied On Bar Staff"
                      isLoading={false}
                      type="button"
                      styleClass="btn-yellow  !rounded-3xl !mx-auto !h-auto opacity-70"
                    />
                  </div>

                  <div className="border border-gray border-opacity-10  p-6 ">
                    <div className="flex flex-col items-start gap-4">
                      {profileDetail?.JobApplicationAnswers.map(
                        (item: any, index: number) => (
                          <div className="flex flex-col items-start gap-4 w-full text-left">
                            <div>
                              <p className="text-black font-semibold">
                                Question: {index + 1}
                              </p>
                              <p className="text-gray">
                                {item?.ScreeningQuestion?.question}
                              </p>
                            </div>
                            <p className="text-black font-semibold">
                              {item?.answer}
                            </p>
                            <hr className="text-gray solid w-full" />
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </>
              ) : null}
            </section>
          )}
        </CustomCard>
      </div>
    </ContentContainer>
  );
}
export default ViewProfile;
