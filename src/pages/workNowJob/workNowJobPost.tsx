/* eslint-disable jsx-a11y/label-has-associated-control */
import CustomCard from '@src/shared/cards/customCard';
import {
  ReactComponent as Logoblue,
  ReactComponent as Logo_blue,
} from '@assets/logo_blue.svg';
import BackroundImage from '@src/shared/backgroundImage';
import HomeBg from '@assets/images/home_bg.png';
import CustomButton from '@src/shared/customButton';
import { ReactComponent as Fb } from '@assets/icons/facebook_blue.svg';
import { ReactComponent as Google_blue } from '@assets/icons/google_blue.svg';
import DatePicker from 'react-datepicker';
import { ReactComponent as DateIcon } from '@assets/icons/datepicker.svg';

import * as Yup from 'yup';
import {
  ErrorMessage,
  FastField,
  Field,
  Form,
  Formik,
  FormikErrors,
  useFormikContext,
} from 'formik';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Select, Option } from '@material-tailwind/react';
import { setLayout } from '@src/shared/slices/LayoutSlice';
import AutoLocation from '@src/shared/autoLocation';
import { useEffect, useState, useCallback } from 'react';
import { getJobRole } from '@src/shared/service/business/roleService';
import { JobType } from '@src/shared/utils/enum/enum';
import { workNowJobAPICall } from '@src/shared/service/job/jobService';
import { handleToastMessage } from '@src/shared/utils/handleToastMessage';

export interface initialSchemaValues {
  role: string;
  suburb: string;
  date: Date | any;
  shift_start_time: string;
  shift_finish_time: string;
  hourly_rate: string;
  // publish_time: string;
}

const FormSchema = Yup.object().shape({
  role: Yup.string().required('One must be selected'),
  suburb: Yup.string().label('Suburb').required(),
  date: Yup.string().required('Date is required'),
  shift_start_time: Yup.string().required('Start time is required'),
  shift_finish_time: Yup.string().required('Finish time is required'),
  hourly_rate: Yup.string().required('Please select hourly rate'),
  // publish_time: Yup.string().required('Please select publish time'),
});

const initialValues: initialSchemaValues = {
  role: '',
  suburb: '',
  date: '',
  shift_start_time: '',
  shift_finish_time: '',
  hourly_rate: '',
  // publish_time: '',
};

const hourly_rates = Array.from(Array(71).keys()).filter(
  (val) => val > 23 && val % 2 === 0
);
const getFieldErrorNames = (formikErrors: FormikErrors<unknown>) => {
  const transformObjectToDotNotation = (
    obj: { [x: string]: any },
    prefix = '',
    result = ['']
  ) => {
    Object.keys(obj).forEach((key) => {
      const value = obj[key];
      if (!value) return;

      const nextKey = prefix ? `${prefix}.${key}` : key;
      if (typeof value === 'object') {
        transformObjectToDotNotation(value, nextKey, result);
      } else {
        result.push(nextKey);
      }
    });

    return result;
  };

  return transformObjectToDotNotation(formikErrors);
};
function ScrollToFieldError() {
  const { submitCount, isValid, errors } = useFormikContext();
  useEffect(() => {
    if (isValid) return;

    const fieldErrorNames = getFieldErrorNames(errors);
    if (fieldErrorNames.length <= 0) return;
    console.log('fieldErrorNames ==', fieldErrorNames);
    const element = document.querySelector(
      `input[name='${fieldErrorNames[1]}']`
    );
    if (!element) return;

    // Scroll to first known error into view
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [submitCount]);

  return null;
}
function WorkNowJobPost() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [roles, setRoles] = useState<IRole.Payload[]>([]);

  useEffect(() => {
    const getRoles = async () => {
      const _result = await getJobRole();
      if (_result.success) {
        setRoles([..._result.data]);
      }
    };
    getRoles();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  dispatch(
    setLayout({
      isShowFooter: false,
      isShowHeader: false,
    })
  );
  const register = (type: string) => {
    navigate(`/${type}`);
  };

  const handleSubmit = useCallback(async (values: initialSchemaValues) => {
    const _workJob: IJob.WorkNowParams = {
      type: JobType.WORK_NOW,
      role_id: values.role,
      suburb: values.suburb,
      hourly_rate: values.hourly_rate,
      shift_start_time: values.shift_start_time,
      shift_end_time: values.shift_finish_time,
      end_date: values.date,
    };
    const _result = await workNowJobAPICall(_workJob);
    if (_result.success) {
      handleToastMessage('success', _result.message);
      navigate('/businessWorkNowJobs?step=2');
    }
    console.log('@@@', _result);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center   min-h-[calc(100vh-5vh)] bg-gradient-to-r from-bluish-gradient via-yellow-gradient to-yellow-gradient">
      <CustomCard styleClass="w-1/3 sm:w-[100%] md:w-[60%] mx-auto py-8 mt-20 sm:mt-[100px] mb-8   flex space-y-6 sm:space-y-3">
        <Logoblue className="self-center px-4 sm:px-8 sm:hidden" />
        <hr className="solid opacity-85 sm:hidden" />
        <h4 className="self-center font-semibold text-black">
          Posting A Work Now Job
        </h4>
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
            <Form className="space-y-6  ">
              <ScrollToFieldError />
              <div className="space-y-6 px-10 sm:px-4  sm:max-h-full overflow-y-auto">
                <div className="flex flex-col items-start">
                  <label className="block mb-2 text-sm font-semibold text-black">
                    Must Tick One
                  </label>
                  <div className="space-y-3 flex flex-col">
                    {roles.map((role, i) => (
                      <div
                        key={role.id}
                        className="inline-flex items-center space-x-3"
                        role="group"
                        aria-labelledby="checkbox-group"
                      >
                        <Field
                          type="radio"
                          name="role"
                          value={role.id}
                          onChange={() => {
                            setFieldValue('role', role.id);
                          }}
                          className={`!h-5 !w-5
                      } `}
                        />
                        <p className=" text-gray">{role.title}</p>
                      </div>
                    ))}
                  </div>

                  <ErrorMessage
                    name="role"
                    component="span"
                    className="text-xs text-yellow pt-1"
                  />
                </div>

                <div className="flex flex-col items-start">
                  <label className="block mb-2 text-sm font-semibold text-black">
                    Suburb & State
                    <span className="text-red">*</span>
                  </label>
                  <AutoLocation
                    suburbSelect={(value: any) => {
                      setFieldValue('suburb', value);
                    }}
                  />
                  <ErrorMessage
                    name="suburb"
                    component="span"
                    className="text-xs text-yellow pt-1"
                  />
                </div>

                <div className="flex flex-col items-start">
                  <label className="block mb-2 text-sm font-semibold text-black">
                    Date
                    <span className="text-red">*</span>
                  </label>
                  <div className="relative w-full">
                    <DatePicker
                      className="focus:outline-transparent bg-gray-light border border-gray-light text-sm rounded-lg block w-full p-3"
                      name="date"
                      selected={values.date}
                      value={values.date}
                      onChange={(val) => {
                        setFieldValue('date', val);
                      }}
                    />
                    <DateIcon className="absolute top-0 m-auto bottom-0 right-3" />
                  </div>
                  <ErrorMessage
                    name="date"
                    component="span"
                    className="text-xs text-yellow pt-1"
                  />
                </div>

                <div className="grid grid-cols-2 space-x-4 items-start">
                  <div className="text-left ">
                    <label className="block mb-2 text-sm font-semibold text-black">
                      Shift Start Time
                      <span className="text-red">*</span>
                    </label>
                    <FastField
                      type="shift_start_time"
                      name="shift_start_time"
                      className={`focus:outline-transparent bg-gray-light border border-gray-light text-sm rounded-lg block w-full p-3
                      } `}
                      placeholder="Enter..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.shift_start_time}
                    />

                    <ErrorMessage
                      name="shift_start_time"
                      component="span"
                      className="text-xs text-yellow pt-1"
                    />
                  </div>
                  <div className="text-left">
                    <label className="block mb-2 text-sm font-semibold text-black">
                      Shift Finish Time
                      <span className="text-red">*</span>
                    </label>
                    <FastField
                      type="shift_finish_time"
                      name="shift_finish_time"
                      className={`focus:outline-transparent bg-gray-light border border-gray-light text-sm rounded-lg block w-full p-3
                      } `}
                      placeholder="Enter..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.shift_finish_time}
                    />

                    <ErrorMessage
                      name="shift_finish_time"
                      component="span"
                      className="text-xs text-yellow pt-1"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap items-start">
                  <label className="block mb-2 text-sm font-semibold text-black">
                    Hourly Rate Pay
                    <span className="text-red">*</span>
                  </label>

                  <div className="select-border-none w-full pb-1 [&>div>&:ul]:bg-gray">
                    <Select
                      variant="outlined"
                      name="hourly_rate"
                      onBlur={handleBlur}
                      onChange={(v) => {
                        setFieldValue('hourly_rate', v);
                      }}
                      value={values.hourly_rate}
                      className=" bg-gray-light outline-none border-none text-sm rounded-lg block w-full h-11  "
                    >
                      {hourly_rates.map((val, i) => (
                        <Option
                          key={i}
                          className="border-b-[1px]  border-b-gray-light rounded-none text-left [&ul]:bg-gray"
                          value={String(val)}
                        >
                          ${val}
                        </Option>
                      ))}
                    </Select>
                  </div>

                  <ErrorMessage
                    name="hourly_rate"
                    component="span"
                    className="text-xs text-yellow pt-1"
                  />
                </div>

                {/* <div className="flex flex-col items-start">
                  <label className="block mb-2 text-sm font-semibold text-black">
                    Publish Time
                    <span className="text-red">*</span>
                  </label>
                  <FastField
                    type="publish_time"
                    name="publish_time"
                    className={`focus:outline-transparent bg-gray-light border border-gray-light text-sm rounded-lg block w-full p-3
                      } `}
                    placeholder="Enter..."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.publish_time}
                  />

                  <ErrorMessage
                    name="publish_time"
                    component={"span"}
                    className="text-xs text-yellow pt-1"
                  />
                </div> */}
              </div>

              <div className="flex flex-col space-y-3 px-10 sm:px-4 ">
                <CustomButton
                  label="Post Work Now Job"
                  type="submit"
                  isLoading={false}
                  variant="outlined"
                  styleClass="btn-yellow w-full !rounded-[5px] "
                />
              </div>
            </Form>
          )}
        </Formik>
      </CustomCard>
    </div>
  );
}

export default WorkNowJobPost;
