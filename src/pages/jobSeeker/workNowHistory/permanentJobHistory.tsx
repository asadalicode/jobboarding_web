import CustomButton from '@src/shared/customButton';
import { CardProps } from '@src/shared/interfaces';

import { ReactComponent as Person } from '@assets/icons/person.svg';
import RestaurantLogo from '@assets/icons/logo.png';
import CustomTable from '@src/shared/customTable';
import { useState } from 'react';
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
import Input from '@src/shared/input';

function createData(
  id: number,
  company: string,
  job_role: string,
  suburb: string,
  date: string,
  status: string
) {
  return {
    id,
    company,
    job_role,
    suburb,
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
  columnData('Company', true),
  columnData('Job role', true),
  columnData('Suburb', true),
  columnData('Date', true),
  columnData('Status', true),
];
const rows = [
  createData(
    1,
    'CompanyAbc',
    'Bar staff',
    'Bairnsdale',
    '22-09-2022',
    'closed'
  ),
  createData(
    1,
    'CompanyAbc',
    'Bar staff',
    'Bairnsdale',
    '22-09-2022',
    'closed'
  ),
  createData(
    1,
    'CompanyAbc',
    'Bar staff',
    'Bairnsdale',
    '22-09-2022',
    'closed'
  ),
];
function PermanentJobHistory() {
  const [isShowVerifyModal, setVerifyModal] = useState(false);
  const [isShow, setModal] = useState(false);

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

  const onViewButton = (row: any) => {
    console.log('row:', row);
    setModal(true);
  };

  const handleVerifyDelete = () => {
    console.log('@@@@@');
  };

  const header = () => (
    <div className="flex mt-16 w-full text-center items-center  justify-center flex-col gap-8">
      <div>
        <h4 className="font-semibold text-black">HEAD CHEF</h4>
        <p className=" font-semibold">COMPANY NAME</p>
      </div>
      <div className="flex xs:flex-warp sm:flex-wrap gap-12 sm:gap-4 justify-center items-start ">
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

  const footer = () => (
    <div className="flex justify-center gap-4">
      <CustomButton
        label="Submit"
        isLoading={false}
        type="button"
        styleClass="btn-yellow !px-16  w-full !rounded "
      />
    </div>
  );
  return (
    <div>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between px-6">
          <h4 className="text-black font-semibold">Permanent Job Histroy</h4>
          <div className="flex">
            {' '}
            <Input
              name="search"
              placeholder="Search..."
              handldChange={(e: any) => {
                console.log('search ==', e.target.value);
              }}
            />
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
          size="md"
          handleClose={() => setModal(false)}
          Header={header}
        >
          <div className="flex w-full text-center justify-center flex-col gap-8">
            <div className="space-y-4">
              <h5 className="text-black font-bold">Job Description</h5>
              <p className="text-gray font-normal tracking-wider">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            <hr className="solid  text-gray-light" />
            <div className="space-y-4">
              <h5 className="text-black font-bold">Applications</h5>
              <p className="text-gray font-normal tracking-wider sm:w-full  w-9/12 mx-auto ">
                If you haven't done so already please click "Hire" next to the
                job seeker you have chosen. We will send you a reminder to leave
                a star rating After the shift! And we will let the other job
                seeker know they were not successful on this occasion.
              </p>
            </div>
            {/* <div className="px-4">
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
            </div> */}
            <section className="space-y-6">
              <hr className="text-gray-light" />
              <div className="flex flex-col justify-center gap-1">
                <h5 className="text-center text-black font-semibold">
                  Employer Screening Questions.
                </h5>
              </div>

              <div className="border border-gray rounded-md border-opacity-10  p-6 ">
                <div className="flex flex-col items-start gap-4">
                  <div className="flex flex-col items-start gap-4 w-full text-left">
                    <div>
                      <p className="text-black font-semibold">Question: 1</p>
                      <p className="text-gray">
                        Which of the following statements best describes your
                        right to work in Australia?
                      </p>
                    </div>
                    <p className="text-black font-semibold">
                      I have Permanent Work Rights with no Restrictions
                    </p>
                    <hr className="text-gray solid w-full" />
                  </div>

                  <div className="flex flex-col items-start gap-4 w-full text-left">
                    <div>
                      <p className="text-black font-semibold">Question: 2</p>
                      <p className="text-gray">
                        Which of the following statements best describes your
                        Covid-19 Vaccination Status?
                      </p>
                    </div>
                    <p className="text-black font-semibold">
                      I'm fully vaccinated
                    </p>
                    <hr className="text-gray solid w-full" />
                  </div>

                  <div className="flex flex-col items-start gap-4 w-full text-left">
                    <div>
                      <p className="text-black font-semibold">Question: 3</p>
                      <p className="text-gray">
                        How many years of experience do you have as a bar and
                        beverage staff?
                      </p>
                    </div>
                    <p className="text-black font-semibold">No experience</p>
                    <hr className="text-gray solid w-full" />
                  </div>

                  <div className="flex flex-col items-start gap-4 w-full text-left">
                    <div>
                      <p className="text-black font-semibold">Question: 4</p>
                      <p className="text-gray">
                        Do you have a current working with children (wwc) check?
                      </p>
                    </div>
                    <p className="text-black font-semibold">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. at vero eos et
                      accusam et justo duo dolores et ea rebum. stet clita kasd
                      gubergren, no sea takimata sanctus est lorem ipsum dolor
                      sit amet. lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                      ut labore et dolore magna aliquyam erat, sed diam
                      voluptua. at vero eos et accusam.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </CustomDialog>
        <div className="">
          <CustomTable
            tableHead={tableHead}
            //   height={30}
            rows={rows}
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

export default PermanentJobHistory;
