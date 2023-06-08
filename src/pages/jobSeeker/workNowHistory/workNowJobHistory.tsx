import CustomButton from '@src/shared/customButton';
import { ReactComponent as Person } from '@assets/icons/person.svg';
import CustomTable from '@src/shared/customTable';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
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
import { CardProps } from '@src/shared/interfaces';
import CustomDialog from '@src/shared/dialog';
import VerifyDelete from '@src/shared/verify';
import Input from '@src/shared/input';
import Popup from '@src/shared/popup';

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
  hourly_pay_rate: string,
  suburb: string,
  shift_start_time: string,
  shift_finish_time: string,
  date: string
) {
  return {
    id,
    job_role,
    hourly_pay_rate,
    suburb,
    shift_start_time,
    shift_finish_time,
    date,
  };
}
function columnData(name: string, sort: boolean) {
  return { name, sort };
}
const tableHead = [
  columnData('ID', true),
  columnData('Job role', true),
  columnData('Hourly Rate Pay', true),
  columnData('suburb', true),
  columnData('Shift Start Time', true),
  columnData('Shift Finish Time', true),
  columnData('Date', true),
];
const rows = [
  createData(1, 'Bar staff', '$24', 'bairnsdale', '9AM', '6PM', '22-09-2022'),
  createData(1, 'Bar staff', '$24', 'bairnsdale', '9AM', '6PM', '22-09-2022'),
  createData(1, 'Bar staff', '$24', 'bairnsdale', '9AM', '6PM', '22-09-2022'),
  createData(1, 'Bar staff', '$24', 'bairnsdale', '9AM', '6PM', '22-09-2022'),
  createData(1, 'Bar staff', '$24', 'bairnsdale', '9AM', '6PM', '22-09-2022'),
  createData(1, 'Bar staff', '$24', 'bairnsdale', '9AM', '6PM', '22-09-2022'),
  createData(1, 'Bar staff', '$24', 'bairnsdale', '9AM', '6PM', '22-09-2022'),
  createData(1, 'Bar staff', '$24', 'bairnsdale', '9AM', '6PM', '22-09-2022'),
];

function WorkNowJobHistory() {
  const [isShowVerifyModal, setVerifyModal] = useState(false);
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const navigate = useNavigate();
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

  const onView = (row: any) => {
    console.log('row:', row);
    // setModal(true);
    setIsOpenPopup(true);
  };
  const onDelete = (row: any) => {
    setVerifyModal(true);
    // <VerifyDelete isShow={isShowVerify}  />
    console.log('delete clicked', row);
  };
  const handleRoute = (link: string) => {
    navigate(link);
  };
  const handleVerifyDelete = () => {
    console.log('@@@@@');
  };

  const header = () => (
    <div className="flex  w-full text-center  justify-center flex-col gap-8">
      <div>
        <h3 className="font-semibold text-black">HEAD CHEF</h3>
      </div>
      <div className="flex gap-12 sm:gap-6 justify-center items-center xs:flex-warp sm:flex-wrap">
        <div className="flex space-x-3">
          <DollarIcon className="max-w-6 h-auto" />
          <p className="text-gray font-normal">$50,000</p>
        </div>
        <div className="flex space-x-3">
          <LocationIcon className="max-w-6 h-auto" />
          <p className="text-gray font-normal">I/9-3, Islamabad</p>
        </div>
        <div className="flex space-x-3">
          <ChartIcon className="!max-w-6 h-auto" />
          <p className="text-gray font-normal">Cooking</p>
        </div>
        <div className="flex space-x-3">
          <BriefcaseIcon className="max-w-6 h-auto" />
          <p className="text-gray font-normal">Part Time</p>
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
      <Popup width={700} isOpen={isOpenPopup} setIsOpenPopup={setIsOpenPopup}>
        <ViewJobDetail />
      </Popup>
      <VerifyDelete
        isOpen={isShowVerifyModal}
        handleSubmit={handleVerifyDelete}
        handleClose={() => setVerifyModal(false)}
        title="Are You Sure You Want To Delete This Permanent Post?"
      />
      <div className="flex flex-col gap-3">
        <div className="flex justify-between px-6">
          <h4 className="text-black font-semibold">Work Now Job History</h4>
          <div className="flex">
            <Input
              name="search"
              placeholder="Search..."
              handldChange={(e: any) => {
                console.log('search ==', e.target.value);
              }}
            />
          </div>
        </div>
        {/* <CustomDialog
          isOpen={isShow}
          isHeaderIcon={false}
          size={"md"}
          handleClose={() => setModal(false)}
          Header={header}
        >
          <div className="flex w-full text-center justify-center flex-col   gap-8  ">
            <div className="space-y-4">
              <h4 className="text-black font-bold">Applications</h4>
              <p className="text-gray font-normal tracking-wider sm:w-full  w-9/12 mx-auto ">
                If you haven't done so already please click "Hire" next to the
                job seeker you have chosen. We will send you a reminder to leave
                a star rating After the shift! And we will let the other job
                seeker know they were not successful on this occasion.
              </p>
            </div>
            <div className="px-4">
              <SwiperCarousel
                settings={{
                  navigation: true,
                }}
              >
                {cardData.map((elem: CardProps, index: any) => (
                  <Slide key={elem.id ? elem.id : index}>
                    <CustomCard
                      key={index}
                      styleClass={
                        "p-6 mb-2 space-y-4 bg-white  rounded-2xl  drop-shadow-3xl  "
                      }
                    >
                      <div className="inline-flex w-full items-center justify-center   gap-3">
                        <img className="w-20 " src={JobSeekerIcon} alt="" />
                        <h4 className="font-bold text-black">{elem.heading}</h4>
                      </div>

                      <hr className=" text-gray-light" />
                      <div className=" flex items-start flex-col  space-y-4 m-auto ">
                        {elem.meta.map((meta: any) => (
                          <div className="inline-flex items-center gap-3">
                            {meta.icon}
                            <p className="text-gray">{meta.text}</p>
                          </div>
                        ))}
                      </div>

                      <hr className="solid text-gray-light" />
                      <div className="flex items-center gap-6">
                        <CustomButton
                          handleButtonClick={() =>
                            handleRoute("/viewProfile/1")
                          }
                          label="View Profile"
                          isLoading={false}
                          type="button"
                          styleClass="btn-yellow !rounded  m-auto  w-1/2"
                        />

                        <CustomButton
                          label="Hire"
                          isLoading={false}
                          type="button"
                          styleClass="btn-white !rounded  m-auto  w-1/2"
                        />
                      </div>
                    </CustomCard>
                  </Slide>
                ))}
              </SwiperCarousel>
            </div>
          </div>
        </CustomDialog> */}
        <div className="">
          <CustomTable
            tableHead={tableHead}
            onRatingAction={onRatingAction}
            //   height={30}
            rows={rows}
            isAction
            isDelete
            isView
            isViewText="View"
            onView={onView}
            onDelete={onDelete}
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

export default WorkNowJobHistory;

function ViewJobDetail() {
  const meta = [
    { icon: <ChartIcon className="w-4" />, text: '24 October 2022' },
    { icon: <BriefCase className="w-4" />, text: '9PM to 6PM' },
    { icon: <DollarIcon className="w-4" />, text: '$20 Per Hour' },
    { icon: <LocationIcon className="w-4" />, text: 'I/9-3, Islamabad' },
  ];
  return (
    <div className="sm:flex-col flex justify-between sm:items-center">
      <div>
        <p className="bg-yellow/[0.2] text-yellow px-6 py-1 rounded-full w-24">
          Applied
        </p>
      </div>
      <div className="my-8">
        <h2 className="font-bold">BAR STAFF</h2>
        <div className=" flex items-start flex-col  space-y-4 m-auto ">
          {meta.map(({ icon, text }) => (
            <div className="inline-flex items-center gap-3 ml-4">
              {icon}
              <p className="text-gray">{text}</p>
            </div>
          ))}
        </div>
      </div>
      <div />
    </div>
  );
}
