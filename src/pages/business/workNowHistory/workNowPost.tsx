import CustomButton from '@src/shared/customButton';
import { ReactComponent as Person } from '@assets/icons/person.svg';
import CustomTable from '@src/shared/customTable';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ReactComponent as EmailIcon } from '@assets/icons/email.svg';
import {
  ReactComponent as BriefcaseIcon,
  ReactComponent as BriefCase,
} from '@assets/icons/briefcase.svg';
import { ReactComponent as ChartIcon } from '@assets/icons/bar-chart.svg';
import { ReactComponent as ClockIcon } from '@assets/icons/clock.svg';
import { ReactComponent as DollarIcon } from '@assets/icons/dollar-symbol.svg';
import { ReactComponent as DateIcon } from '@assets/icons/date.svg';
import { ReactComponent as LocationIcon } from '@assets/icons/location-pin.svg';
import JobSeekerIcon from '@assets/icons/person_img.png';

import SwiperCarousel, { Slide } from '@src/shared/swiperCarousel';
import { SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import CustomCard from '@src/shared/cards/customCard';
import { CardProps } from '@src/shared/interfaces';
import CustomDialog from '@src/shared/dialog';
import Input from '@src/shared/input';
import VerifyDelete from '@src/shared/verify';
import {
  getBusinessJobs,
  getJobsById,
} from '@src/shared/service/businessServices/jobHistoryService';
import { JobType } from '@src/shared/utils/enum/enum';

const cardData: CardProps[] = [
  {
    id: 1,
    heading: 'Henry',
    meta: [
      { icon: <LocationIcon className="w-4" />, text: 'London' },
      { icon: <ChartIcon className="w-4" />, text: 'Years Experience' },
      { icon: <BriefCase className="w-4" />, text: 'Currently Working' },
    ],

    applicatants: '2/2 Applicants',
  },
  {
    id: 1,
    heading: 'Henry',
    meta: [
      { icon: <LocationIcon className="w-4" />, text: 'London' },
      { icon: <ChartIcon className="w-4" />, text: 'Years Experience' },
      { icon: <BriefCase className="w-4" />, text: 'Currently Working' },
    ],

    applicatants: '2/2 Applicants',
  },
  {
    id: 1,
    heading: 'Henry',
    meta: [
      { icon: <LocationIcon className="w-4" />, text: 'London' },
      { icon: <ChartIcon className="w-4" />, text: 'Years Experience' },
      { icon: <BriefCase className="w-4" />, text: 'Currently Working' },
    ],

    applicatants: '2/2 Applicants',
  },
  {
    id: 1,
    heading: 'Henry',
    meta: [
      { icon: <LocationIcon className="w-4" />, text: 'London' },
      { icon: <ChartIcon className="w-4" />, text: 'Years Experience' },
      { icon: <BriefCase className="w-4" />, text: 'Currently Working' },
    ],

    applicatants: '2/2 Applicants',
  },
];

function createData(
  id: number,
  job_role: string,
  suburb: string,
  shift_start_time: string,
  shift_finish_time: string,
  hourly_pay_rate: string,
  state: string,
  publish_time: string,
  date: string,
  status: string
) {
  return {
    id,
    job_role,
    suburb,
    shift_start_time,
    shift_finish_time,
    hourly_pay_rate,
    state,
    publish_time,
    date,
    status,
  };
}
function columnData(name: string, sort: boolean) {
  return { name, sort };
}
const tableHead = [
  columnData('ID', true),
  columnData('Job role', true),
  columnData('Suburb & State', true),
  columnData('Shift Start Time', true),
  columnData('Shift Finish Time', true),
  columnData('Hourly Rate Pay', true),
  columnData('Publish Time', true),
  columnData('Date', true),
  columnData('Status', true),
];
const rows = [
  createData(
    1,
    'Bar staff',
    'bairnsdale',
    '9AM',
    '6PM',
    '$24',
    'bairnsdale',
    '2AM',
    '22-09-2022',
    'closed'
  ),
  createData(
    1,
    'Bar staff',
    'bairnsdale',
    '9AM',
    '6PM',
    '$24',
    'bairnsdale',
    '2AM',
    '22-09-2022',
    'open'
  ),
  createData(
    1,
    'Bar staff',
    'bairnsdale',
    '9AM',
    '6PM',
    '$24',
    'bairnsdale',
    '2AM',
    '22-09-2022',
    'closed'
  ),
  createData(
    1,
    'Bar staff',
    'bairnsdale',
    '9AM',
    '6PM',
    '$24',
    'bairnsdale',
    '2AM',
    '22-09-2022',
    'closed'
  ),
  createData(
    1,
    'Bar staff',
    'bairnsdale',
    '9AM',
    '6PM',
    '$24',
    'bairnsdale',
    '2AM',
    '22-09-2022',
    'closed'
  ),
  createData(
    1,
    'Bar staff',
    'bairnsdale',
    '9AM',
    '6PM',
    '$24',
    'bairnsdale',
    '2AM',
    '22-09-2022',
    'closed'
  ),
  createData(
    1,
    'Bar staff',
    'bairnsdale',
    '9AM',
    '6PM',
    '$24',
    'bairnsdale',
    '2AM',
    '22-09-2022',
    'closed'
  ),
  createData(
    1,
    'Bar staff',
    'bairnsdale',
    '9AM',
    '6PM',
    '$24',
    'bairnsdale',
    '2AM',
    '22-09-2022',
    'closed'
  ),
  createData(
    1,
    'Bar staff',
    'bairnsdale',
    '9AM',
    '6PM',
    '$24',
    'bairnsdale',
    '2AM',
    '22-09-2022',
    'closed'
  ),
  createData(
    1,
    'Bar staff',
    'bairnsdale',
    '9AM',
    '6PM',
    '$24',
    'bairnsdale',
    '2AM',
    '22-09-2022',
    'closed'
  ),
  createData(
    1,
    'Bar staff',
    'bairnsdale',
    '9AM',
    '6PM',
    '$24',
    'bairnsdale',
    '2AM',
    '22-09-2022',
    'closed'
  ),
  createData(
    1,
    'Bar staff',
    'bairnsdale',
    '9AM',
    '6PM',
    '$24',
    'bairnsdale',
    '2AM',
    '22-09-2022',
    'closed'
  ),
];

function WorkNowPost() {
  const [isShowVerifyModal, setVerifyModal] = useState(false);
  const [isShow, setModal] = useState<boolean>(false);
  const [profileDetail, setProfileDetail] = useState<any>();
  const [tableRows, setTableRows] = useState([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    getJobs();
  }, []);
  const getJobs = async () => {
    setIsLoading(true);
    const res = await getBusinessJobs(JobType.WORK_NOW);
    setTableRows(res.data);
    setIsLoading(false);
  };
  const onEdit = () => {
    console.log('edit Clicked ==');
  };
  const handleChangePage = (value: number) => {
    console.log('Page Clicked ==', value);
    return value;
  };
  const handleChangeRowsPerPage = (value: number) => {
    console.log('Row per page Clicked ==', value);
    return value;
  };
  const sortData = (sort: string, sortBy: string) => {
    console.log('Sort data ==', sort, sortBy);
    return sort;
  };

  const onRatingAction = (val: any) => {
    console.log(val);
  };

  const onView = async (row: any) => {
    console.log('row:', row);
    const res = await getJobsById(row.id);
    setProfileDetail(res.data);
    setModal(true);
  };

  const handleRoute = (link: string) => {
    navigate(link);
  };

  const handleVerifyDelete = () => {
    console.log('@@@@@');
  };

  const onDelete = (row: any) => {
    setVerifyModal(true);
    // <VerifyDelete isShow={isShowVerify}  />
    console.log('delete clicked', row);
  };

  const header = () => (
    <div className="flex  w-full text-center  justify-center flex-col gap-8">
      <div>
        <h3 className="font-semibold text-black">{profileDetail.Role.title}</h3>
      </div>
      <div className="flex gap-12 sm:gap-6 justify-center items-center xs:flex-warp sm:flex-wrap">
        <div className="flex space-x-3">
          <DateIcon className="max-w-6 h-auto" />
          <p className="text-gray font-normal">{profileDetail.createdAt}</p>
        </div>
        <div className="flex space-x-3">
          <ClockIcon className="!max-w-6 h-auto" />
          <p className="text-gray font-normal">
            {profileDetail.shift_start_time} to {profileDetail.shift_end_time}
          </p>
        </div>
        <div className="flex space-x-3">
          <DollarIcon className="max-w-6 h-auto" />
          <p className="text-gray font-normal">
            ${profileDetail.hourly_rate} Per Hour
          </p>
        </div>
        <div className="flex space-x-3">
          <LocationIcon className="max-w-6 h-auto" />
          <p className="text-gray font-normal">{profileDetail.job_location}</p>
        </div>
      </div>

      <hr className="solid  text-gray-light" />
    </div>
  );
  return (
    <div>
      <VerifyDelete
        isOpen={isShowVerifyModal}
        handleSubmit={handleVerifyDelete}
        handleClose={() => setVerifyModal(false)}
        title="Are You Sure You Want To Delete This Candidate?"
      />
      <div className="flex flex-col gap-3">
        <div className="flex sm:block justify-between px-6">
          <h4 className="text-black font-semibold sm:mb-2">
            Work Now Job History
          </h4>
          <div className="flex justify-center items-center">
            <Input
              name="search"
              placeholder="Search..."
              handldChange={(e: any) => {
                console.log('search ==', e.target.value);
              }}
            />
            <div className="ml-2">
              <CustomButton
                icon={<Person className="pr-2 sm:hidden" />}
                handleButtonClick={() => {
                  handleRoute('/businessWorkNowJobs/jobPost');
                }}
                label="Post a Job"
                isLoading={false}
                type="button"
                styleClass="btn-yellow m-auto w-full !rounded sm:!h-12 "
              />
            </div>
          </div>
        </div>
        <CustomDialog
          isOpen={isShow}
          isHeaderIcon={false}
          size="md"
          handleClose={() => setModal(false)}
          Header={header}
        >
          {profileDetail?.Candidates.length ? (
            <div className="flex w-full text-center justify-center flex-col   gap-8  ">
              <div className="space-y-4">
                <h4 className="text-black font-bold">Applications</h4>
                {/* <p className="text-gray font-normal tracking-wider sm:w-full  w-9/12 mx-auto ">
                If you haven't done so already please click "Hire" next to the
                job seeker you have chosen. We will send you a reminder to leave
                a star rating After the shift! And we will let the other job
                seeker know they were not successful on this occasion.
              </p> */}
              </div>
              <div className="p-4  rounded-md">
                <SwiperCarousel
                  settings={{
                    navigation: true,
                  }}
                >
                  {profileDetail?.Candidates.map(
                    (elem: CardProps, index: any) => (
                      <Slide key={elem.id ? elem.id : index}>
                        <CustomCard
                          key={index}
                          styleClass={`h-[28rem] p-6 mb-2 space-y-4 ${
                            index < 1 ? 'bg-white' : '!bg-gray-light'
                          }   rounded-2xl border border-blue-gray-100 !flex !flex-col justify-between`}
                        >
                          <div className="inline-flex w-full items-center justify-center gap-3 ">
                            {elem.profile_image_url ? (
                              <img
                                className="w-20 "
                                src={elem.profile_image_url}
                                alt=""
                              />
                            ) : (
                              <img
                                className="w-20 "
                                src={JobSeekerIcon}
                                alt=""
                              />
                            )}
                            <h4 className="font-bold  text-black">
                              {elem.first_name} {elem.last_name}
                            </h4>
                          </div>

                          <hr
                            className={`${
                              index < 1 ? 'text-gray-light ' : '!text-white'
                            }  !mt-1`}
                          />

                          <div className=" flex items-start flex-col  space-y-4 m-auto ">
                            <div className="inline-flex items-center gap-3">
                              <LocationIcon className="w-4" />
                              <p className="text-gray">{elem?.suburb}</p>
                            </div>
                            <div className="inline-flex items-center gap-3">
                              <ChartIcon className="w-4" />
                              <p className="text-gray">
                                {elem?.years_of_experience}
                              </p>
                            </div>
                            <div className="inline-flex items-center gap-3">
                              <BriefCase className="w-4" />
                              <p className="text-gray">
                                {
                                  elem?.CandidateJobHistories.find(
                                    (item: any) => item.currently_working === 1
                                  )?.company_name
                                }
                              </p>
                            </div>
                          </div>

                          <hr
                            className={`${
                              index < 1 ? 'text-gray-light' : '!text-white'
                            }`}
                          />
                          <div className="flex items-center gap-6">
                            <CustomButton
                              handleButtonClick={() => {
                                handleRoute(
                                  `/viewProfile/${elem?.JobApplication.id}?tab=work-now`
                                );
                              }}
                              label="View Profile"
                              isLoading={false}
                              type="button"
                              styleClass="btn-yellow !rounded  m-auto  w-1/2"
                            />

                            <CustomButton
                              label="Hire"
                              isLoading={false}
                              type="button"
                              styleClass={`${
                                index < 1 ? 'bg-white' : '!bg-gray-light'
                              } btn-white !rounded  m-auto  w-1/2`}
                            />
                          </div>
                        </CustomCard>
                      </Slide>
                    )
                  )}
                </SwiperCarousel>
              </div>
            </div>
          ) : (
            <div className="flex w-full text-center justify-center flex-col   gap-8  ">
              <h4 className="text-black font-bold">No Application Available</h4>
            </div>
          )}
        </CustomDialog>
        <div className="">
          <CustomTable
            tableHead={tableHead}
            onRatingAction={onRatingAction}
            //   height={30}
            rows={tableRows}
            isAction
            isDelete
            isView
            isViewText="View"
            onDelete={onDelete}
            onView={onView}
            isEdit
            onEdit={onEdit}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            sortData={sortData}
          />
        </div>
      </div>
    </div>
  );
}

export default WorkNowPost;
