import ContentContainer from '@src/containers/contentContainer';
import CustomCard from '@src/shared/cards/customCard';
import * as Yup from 'yup';
import { ErrorMessage, FastField, Field, Form, Formik } from 'formik';
import { Slider } from '@mui/material';
import { Select, Option } from '@material-tailwind/react';
import { ReactComponent as DateIcon } from '@assets/icons/date.svg';
import { ReactComponent as ClockIcon } from '@assets/icons/clock.svg';
import { ReactComponent as DollarIcon } from '@assets/icons/dollar-symbol.svg';
import { ReactComponent as LocationIcon } from '@assets/icons/location-pin.svg';
import { CardProps } from '@src/shared/interfaces';
import { ReactComponent as Person } from '@assets/icons/person.svg';

import SwiperCarousel, { Slide } from '@src/shared/swiperCarousel';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import CustomButton from '@src/shared/customButton';
import { IsJobSeeker } from '@src/shared/utils/authService';
import { useDispatch } from 'react-redux';
import { setLayout } from '@src/shared/slices/LayoutSlice';
import Popup from '@src/shared/popup';
import StripePopup from '@src/shared/stripePopup';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export interface initialSchemaValues {
  role: [];
  location: string;
}

const cardData: CardProps[] = [
  {
    id: 1,
    heading: 'UI/UX DESIGNER',
    meta: [
      { icon: <DateIcon className="w-4" />, text: '24 October 2022' },
      { icon: <ClockIcon className="w-4" />, text: '9PM to 6PM' },
      { icon: <DollarIcon className="w-4" />, text: '$20' },
      {
        icon: <LocationIcon className="w-4" />,
        text: 'I/9-3, Islamabad',
      },
    ],

    applicatants: '2/2 Applicants',
  },
  {
    id: 2,
    heading: 'FRONT-END WEB DEVELOPER',
    meta: [
      { icon: <DateIcon className="w-4" />, text: '24 October 2022' },
      { icon: <ClockIcon className="w-4" />, text: '9PM to 6PM' },
      { icon: <DollarIcon className="w-4" />, text: '$20' },
      {
        icon: <LocationIcon className="w-4" />,
        text: 'I/9-3, Islamabad',
      },
    ],

    applicatants: '2/2 Applicants',
  },
  {
    id: 3,
    heading: 'AI DEVELOPER',
    meta: [
      { icon: <DateIcon className="w-4" />, text: '24 October 2022' },
      { icon: <ClockIcon className="w-4" />, text: '9PM to 6PM' },
      { icon: <DollarIcon className="w-4" />, text: '$20' },
      {
        icon: <LocationIcon className="w-4" />,
        text: 'I/9-3, Islamabad',
      },
    ],

    applicatants: '2/2 Applicants',
  },
  {
    id: 4,
    heading: 'UI/UX DESIGNER',
    meta: [
      { icon: <DateIcon className="w-4" />, text: '24 October 2022' },
      { icon: <ClockIcon className="w-4" />, text: '9PM to 6PM' },
      { icon: <DollarIcon className="w-4" />, text: '$20' },
      {
        icon: <LocationIcon className="w-4" />,
        text: 'I/9-3, Islamabad',
      },
    ],

    applicatants: '2/2 Applicants',
  },
];

const FormSchema = Yup.object().shape({
  role: Yup.array(),
  location: Yup.string(),
});

const initialValues: initialSchemaValues = {
  role: [],
  location: '',
};

const roles = [
  'Bar & Beverage',
  'Chef',
  'Front Office+Guest+Services',
  'Gaming',
  'House Keeping',
  'Kitchen + Sandwich Hand',
  'Management',
  'Chef/Cook',
  'Waiting Staff',
  'Barista',
  'Others',
];

const locations = ['Bairnsdale', 'Benalla', 'Ausee'];

function WorkNowJobs() {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [distanceRangeValue, setDistanceRangeValue] = useState([20, 40]);
  const [rateRangeValue, setRateRangeValue] = useState([20, 40]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  dispatch(
    setLayout({
      isShowFooter: true,
      isShowHeader: false,
    })
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleSubmit = () => {
    console.log('@@@');
  };
  function valuetext(value: number) {
    return `${value}°C`;
  }
  const handleDistanceChangeRange = (
    event: Event,
    newValue: number | number[]
  ) => {
    setDistanceRangeValue(newValue as number[]);
  };
  const handleRateChangeRange = (event: Event, newValue: number | number[]) => {
    setRateRangeValue(newValue as number[]);
  };
  return (
    <>
      <Popup width={700} isOpen={isOpenPopup} setIsOpenPopup={setIsOpenPopup}>
        <StripePopup />
      </Popup>
      <div className="flex flex-col items-center justify-center space-y-24  pb-8  min-h-[calc(100vh-5vh)] bg-gradient-to-r from-bluish-gradient via-yellow-gradient to-yellow-gradient">
        <div className="flex flex-col justify-center gap-3 w-full px-16 sm:px-0 sm:bg-white  bg-blue h-screen sm:h-auto">
          <div
            className={`justify-center mx-auto sm:mt-36  ${
              !IsJobSeeker() && 'sm:mt-36'
            }`}
          >
            <h2 className="sm:text-black text-white font-semibold">
              Work Now Jobs
            </h2>
            {!IsJobSeeker() && (
              <CustomButton
                icon={<Person className="pr-2" />}
                handleButtonClick={() =>
                  navigate('/businessWorkNowJobs/jobPost')
                }
                label="Post a Job"
                isLoading={false}
                type="button"
                styleClass="btn-yellow w-auto !px-8 !rounded "
              />
            )}
          </div>

          <CustomCard styleClass="flex w-9/12 sm:w-full !pt-6 mx-auto flex-col  space-y-10 py-8 sm:shadow-none sm:rounded-none">
            <h5 className="text-black font-semibold">
              {' '}
              Tick which role you are looking for:
            </h5>

            <hr className="text-gray-light !mt-6" />
            <Formik
              initialValues={initialValues}
              validationSchema={FormSchema}
              onSubmit={handleSubmit}
            >
              {({
                errors,
                handleChange,
                handleBlur,
                touched,
                setFieldValue,
                values,
              }) => (
                <Form className="space-y-6  max-h-[calc(100vh-50vh)] sm:max-h-[calc(100vh-20vh)] overflow-y-auto px-8">
                  <div className="flex flex-col items-start">
                    <div className=" flex flex-wrap gap-8 sm:gap-4   items-center ">
                      {roles.map((val, i) => (
                        <div
                          key={i}
                          className="inline-flex items-start text-left space-x-3"
                          role="group"
                          aria-labelledby="checkbox-group"
                        >
                          <Field
                            type="checkbox"
                            name="role"
                            value={val}
                            className={`!h-6 !w-6
                      } `}
                          />
                          <p className=" text-gray">{val}</p>
                        </div>
                      ))}
                    </div>

                    <ErrorMessage
                      name="role"
                      component="span"
                      className="text-xs text-yellow pt-1"
                    />
                  </div>

                  <hr className="text-gray-light" />

                  <div className="grid grid-cols-2  gap-12 sm:grid-cols-1 sm:gap-0 items-center">
                    <div className="text-left ">
                      <h5 className="text-black font-semibold text-sm">
                        Distance
                      </h5>
                      <Slider
                        className="!pb-0"
                        size="small"
                        getAriaLabel={() => 'Temperature range'}
                        value={distanceRangeValue}
                        onChange={handleDistanceChangeRange}
                        valueLabelDisplay="auto"
                        getAriaValueText={(value: number) => valuetext(value)}
                      />
                      <div className="flex items-start relative bottom-2">
                        <p className="text-gray">0-100KM</p>
                      </div>
                    </div>
                    <div className="text-left">
                      <h5 className="text-black font-semibold text-sm">
                        Hourly Pay Rate
                      </h5>
                      <Slider
                        className="!pb-0"
                        size="small"
                        min={24}
                        max={70}
                        getAriaLabel={() => 'Temperature range'}
                        value={rateRangeValue}
                        onChange={handleRateChangeRange}
                        valueLabelDisplay="auto"
                        getAriaValueText={(value: number) => valuetext(value)}
                      />
                      <div className="flex justify-between items-center relative bottom-2">
                        <p className="text-gray">$24</p>
                        <p className="text-gray">$70</p>
                      </div>
                    </div>
                  </div>

                  <hr className="text-gray-light" />

                  <div className="flex flex-col items-start space-y-2">
                    <h5 className="text-black font-semibold text-sm">
                      Location
                    </h5>
                    <div className="select-border-none w-1/2 pr-5 sm:w-full sm:pr-0  pb-1">
                      <Select
                        variant="outlined"
                        name="location"
                        onBlur={handleBlur}
                        onChange={(v) => {
                          setFieldValue('location', v);
                        }}
                        value={values.location}
                        className=" bg-gray-light outline-none border-none text-sm rounded-lg block  h-11 "
                      >
                        {locations.map((val, i) => (
                          <Option
                            key={i}
                            className="border-b-[1px] py-3 border-b-gray-light rounded-none text-left"
                            value={String(val)}
                          >
                            ${val}
                          </Option>
                        ))}
                      </Select>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </CustomCard>
        </div>
        <div className="w-full px-16 sm:px-8">
          <SwiperCarousel
            settings={{
              navigation: true,
            }}
          >
            {cardData.map((elem: CardProps, index: any) => (
              <Slide key={elem.id ? elem.id : index}>
                <CustomCard
                  key={index}
                  styleClass="p-6 py-12 mb-2 space-y-4   rounded-2xl h-full shadow-none  "
                >
                  <div className="inline-flex w-full items-center justify-center   gap-3">
                    <h4 className="font-semibold text-black w-9/12 h-20 sm:h-10 md:h-10">
                      {elem.heading}
                    </h4>
                  </div>

                  <hr className=" text-gray-light" />
                  <div className=" flex items-start flex-col  space-y-4 m-auto ">
                    {elem.meta.map((meta: any) => (
                      <div className="inline-flex items-center gap-3">
                        <div>{meta.icon}</div>
                        <p className="text-gray">{meta.text}</p>
                      </div>
                    ))}

                    <p className="text-blue">{elem.applicatants}</p>
                  </div>

                  {IsJobSeeker() && (
                    <>
                      {' '}
                      <hr className=" text-gray-light" />
                      <CustomButton
                        label="Apply"
                        isLoading={false}
                        type="button"
                        handleButtonClick={() => setIsOpenPopup(true)}
                        styleClass="btn-yellow !rounded  m-auto rounded-md w-1/2"
                      />
                    </>
                  )}
                </CustomCard>
              </Slide>
            ))}
          </SwiperCarousel>
        </div>
      </div>
    </>
  );
}

export default WorkNowJobs;
