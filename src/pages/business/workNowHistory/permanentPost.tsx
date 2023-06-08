import CustomButton from '@src/shared/customButton';
import { CardProps } from '@src/shared/interfaces';

import { ReactComponent as Person } from '@assets/icons/person.svg';
import RestaurantLogo from '@assets/icons/logo.png';
import CustomTable from '@src/shared/customTable';
import { useEffect, useState } from 'react';
import VerifyDelete from '@src/shared/verify';
import CustomDialog from '@src/shared/dialog';
import { ReactComponent as DateIcon } from '@assets/icons/date.svg';
import { ReactComponent as ClockIcon } from '@assets/icons/clock.svg';
import { ReactComponent as EmailIcon } from '@assets/icons/email.svg';
import {
  ReactComponent as BriefcaseIcon,
  ReactComponent as BriefCase,
} from '@assets/icons/briefcase.svg';
import { ReactComponent as ChartIcon } from '@assets/icons/bar-chart.svg';
import { ReactComponent as DollarIcon } from '@assets/icons/dollar-symbol.svg';
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
import { useNavigate } from 'react-router-dom';
import Input from '@src/shared/input';
import {
  getBusinessJobs,
  getJobsById,
} from '@src/shared/service/businessServices/jobHistoryService';

function createData(
  id: number,
  role: string,
  work: string,
  remuneration: string,
  applications: string,
  date: string,
  status: string
) {
  return {
    id,
    role,
    work,
    remuneration,
    applications,
    date,
    status,
  };
}
function columnData(name: string, sort: boolean) {
  return { name, sort };
}

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
const tableHead = [
  columnData('ID', true),
  columnData('Job role', true),
  columnData('Work', true),
  columnData('remuneration', true),
  columnData('applications', true),
  columnData('Date', true),
  columnData('Status', true),
];
const rows = [
  createData(
    1,
    'Bar staff',
    'full time',
    '$500,000',
    '2',
    '22-09-2022',
    'closed'
  ),
  createData(
    2,
    'Bar staff',
    'part time',
    '$500,000',
    '2',
    '22-09-2022',
    'open'
  ),
  createData(
    3,
    'Bar staff',
    'full time',
    '$500,000',
    '2',
    '22-09-2022',
    'closed'
  ),
  createData(
    4,
    'Bar staff',
    'full time',
    '$500,000',
    '2',
    '22-09-2022',
    'closed'
  ),
  createData(
    5,
    'Bar staff',
    'full time',
    '$500,000',
    '2',
    '22-09-2022',
    'open'
  ),
  createData(
    6,
    'Bar staff',
    'full time',
    '$500,000',
    '2',
    '22-09-2022',
    'closed'
  ),
  createData(
    7,
    'Bar staff',
    'full time',
    '$500,000',
    '2',
    '22-09-2022',
    'closed'
  ),
];
function PermanentPost() {
  const [isShowVerifyModal, setVerifyModal] = useState(false);
  const [isShow, setModal] = useState(false);
  const [tableRows, setTableRows] = useState([]);
  const [profileDetail, setProfileDetail] = useState<any>();
  const navigate = useNavigate();
  const routeTo = (link: string) => {
    navigate(link);
  };
  useEffect(() => {
    getJobs();
  }, []);
  const getJobs = async () => {
    const res = await getBusinessJobs('PERMANENT');
    setTableRows(res.data);
    console.log('work Now Post ==', res);
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
  const onDelete = (row: any) => {
    setVerifyModal(true);
    // <VerifyDelete isShow={isShowVerify}  />
    console.log('delete clicked', row);
  };

  const onViewButton = async (row: any) => {
    console.log('row:', row);
    const res = await getJobsById(row.id);
    setProfileDetail(res.data);
    setModal(true);
  };

  const handleVerifyDelete = () => {
    console.log('@@@@@');
  };

  const header = () => (
    <div className="flex mt-16 sm:mt-8 w-full text-center  justify-center flex-col items-center gap-8">
      <div>
        <h4 className="font-semibold text-black">{profileDetail.Role.title}</h4>
        <p className=" font-semibold">{profileDetail.business_name}</p>
      </div>
      <div className="flex gap-12 sm:gap-4 justify-center items-center xs:flex-warp sm:flex-wrap sm:items-start">
        <div className="flex space-x-3">
          <DollarIcon className="max-w-6 h-auto" />
          <p className="text-gray font-normal">${profileDetail.pay_required}</p>
        </div>
        <div className="flex space-x-3">
          <LocationIcon className="max-w-6 h-auto" />
          <p className="text-gray font-normal">{profileDetail.job_location}</p>
        </div>
        <div className="flex space-x-3">
          <ChartIcon className="!max-w-6 h-auto" />
          <p className="text-gray font-normal">Cooking</p>
        </div>
        <div className="flex space-x-3">
          <BriefcaseIcon className="max-w-6 h-auto" />
          <p className="text-gray font-normal">{profileDetail.JobType.title}</p>
        </div>
        <div className="flex space-x-3">
          <EmailIcon className="max-w-6 h-auto" />
          <p className="text-gray font-normal">johndoe2@gmail.com</p>
        </div>
      </div>

      <hr className="solid  text-gray-light" />
    </div>
  );

  return (
    <div>
      <div className="flex flex-col gap-3">
        <div className="flex sm:block justify-between px-6">
          <h4 className="text-black font-semibold sm:mb-2">Permanent Post</h4>
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
                label="Post a Job"
                isLoading={false}
                type="button"
                handleButtonClick={() => routeTo('/business/permanentJobPost')}
                styleClass="btn-yellow m-auto w-full !rounded sm:h-12 "
              />
            </div>
          </div>
        </div>
        <VerifyDelete
          isOpen={isShowVerifyModal}
          handleSubmit={handleVerifyDelete}
          handleClose={() => setVerifyModal(false)}
          title="Are You Sure You Want To Delete This Permanent Post?"
        />
        <CustomDialog
          isOpen={isShow}
          isHeaderIcon
          profileIcon={profileDetail?.logo_url}
          size="md"
          handleClose={() => setModal(false)}
          Header={header}
        >
          <div className="flex w-full text-center justify-center flex-col   gap-8  ">
            <div className="space-y-4">
              <h5 className="text-black font-bold">Job Description</h5>
              <p className="text-gray font-normal tracking-wider">
                {profileDetail?.description}
              </p>
            </div>
            <hr className="solid  text-gray-light" />
            {profileDetail?.Candidates.length ? (
              <>
                <div className="space-y-4">
                  <h5 className="text-black font-bold">Applications</h5>
                  <p className="text-gray font-normal tracking-wider sm:w-full  w-9/12 mx-auto ">
                    If you haven't done so already please click "Hire" next to
                    the job seeker you have chosen. We will send you a reminder
                    to leave a star rating After the shift! And we will let the
                    other job seeker know they were not successful on this
                    occasion.
                  </p>
                </div>

                <div className="px-4">
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
                            styleClass="p-6 mb-2 space-y-4 bg-white rounded-2xl !border !border-blue-gray-100"
                          >
                            <div className="inline-flex w-full items-center justify-center gap-3">
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
                              <h4 className="font-bold text-black">
                                {elem.first_name} {elem.last_name}
                              </h4>
                            </div>

                            <hr className=" text-gray-light" />
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
                                      (item: any) =>
                                        item.currently_working === 1
                                    )?.company_name
                                  }
                                </p>
                              </div>
                            </div>

                            <hr className="solid text-gray-light" />
                            <div className="flex items-center gap-6">
                              <CustomButton
                                handleButtonClick={() => {
                                  routeTo(
                                    `/viewProfile/${elem?.JobApplication.id}`
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
              </>
            ) : (
              <div className="flex w-full text-center justify-center flex-col   gap-8  ">
                <h4 className="text-black font-bold">
                  No Application Available
                </h4>
              </div>
            )}
          </div>
        </CustomDialog>
        <div className="">
          <CustomTable
            tableHead={tableHead}
            //   height={30}
            rows={tableRows}
            isEdit
            isDelete
            onDelete={onDelete}
            isView
            onView={onViewButton}
            isAction
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

export default PermanentPost;
