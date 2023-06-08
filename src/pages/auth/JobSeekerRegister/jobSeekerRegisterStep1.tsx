/* eslint-disable jsx-a11y/label-has-associated-control */
import CustomCard from '@src/shared/cards/customCard';
import BackroundImage from '@src/shared/backgroundImage';
import HomeBg from '@assets/images/home_bg.png';
import CustomButton from '@src/shared/customButton';
import { ReactComponent as Upload } from '@assets/icons/image_logo.svg';
import { ReactComponent as InfoBtn } from '@assets/icons/information-btn.svg';
import { Select, Option, Avatar } from '@material-tailwind/react';
import { ReactComponent as Logo_blue } from '@assets/logo_blue.svg';

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
import { Link, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AutoLocation from '@src/shared/autoLocation';
import { getRole } from '@src/shared/service/roleService';
import { getJobTypes } from '@src/shared/service/job/jobService';
import { jobSeekerRegisterAPICall } from '@src/shared/service/candidate/authService';

export interface initialSchemaValues {
  logo: [];
  first_name: string;
  last_name: string;
  role: [];
  duration: number | null;
  hourly_rate: string;
  age: number | '';
  phone: string;
  email: string;
  password: string;
  confirm_password: string;
  suburb_state: string;
  pay_required: string;
}

const FormSchema = Yup.object().shape({
  logo: Yup.array().min(1, 'select at least 1 file'),
  first_name: Yup.string().label('first name').required(),
  last_name: Yup.string().label('last name').required(),
  role: Yup.array()
    .min(1, 'Atleast one selection required')
    .max(2, 'Maximum two selections allowed'),
  duration: Yup.number().required('One must be selected'),
  hourly_rate: Yup.string().when('duration', (param, schema) =>
    schema.test('', 'Please select hourly rate', (val: string) =>
      (param !== 1 ? val.length > 0 : true))),
  pay_required: Yup.string().when('duration', (param, schema) =>
    schema.test('', 'Please select pay required', (val: string) =>
      (param === 1 ? val.length > 0 : true))),
  age: Yup.number().moreThan(17).required('Age is required'),
  phone: Yup.string().label('Phone').required(),
  email: Yup.string().label('Email').required(),
  suburb_state: Yup.string().label('Suburb').required(),
  password: Yup.string().label('Password').required(),
  confirm_password: Yup.string().label('confirm password').required(),
});

const initialValues: initialSchemaValues = {
  logo: [],
  first_name: '',
  last_name: '',
  role: [],
  duration: null,
  hourly_rate: '',
  phone: '',
  email: '',
  age: '',
  password: '',
  confirm_password: '',
  suburb_state: '',
  pay_required: '',
};

const hourly_rates = Array.from(Array(71).keys()).filter(
  (val) => val > 23 && val % 2 === 0
);
const pay_required = [15000, 50000, 55000, 60000, 50000, 150000];
export const getFieldErrorNames = (formikErrors: FormikErrors<unknown>) => {
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
export function ScrollToFieldError() {
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
    if (fieldErrorNames[1] === 'logo') {
      const _element: any = document.querySelector("input[id='dropzone-file']");
      console.log('_element ===', _element);
      _element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [submitCount]);

  return null;
}

function JobSeekerRegisterStep1({ handleStep }: any) {
  const [avatar, setAvatar] = useState();
  const [roles, setRoles] = useState<IRole.Payload[]>([]);
  const [duration, setdDration] = useState<IJob.Payload[]>([]);
  const [rate, setRate] = useState(hourly_rates);
  const [searchParams, setSearchParams] = useSearchParams();
  const _step = searchParams.get('step');

  const handleSubmit = async (values: any) => {
    const formData = new FormData();
    formData.append('image', values.logo[0]);
    formData.append('first_name', values.first_name);
    formData.append('last_name', values.last_name);
    formData.append('email', values.email);
    formData.append('roles', JSON.stringify(values.role));
    formData.append('password', values.password);
    formData.append('job_type_id', values.duration);
    if (values.duration === 1) {
      formData.append('pay_required', values.pay_required);
    } else {
      formData.append('pay_required', values.hourly_rate);
    }
    formData.append('age', values.age);
    formData.append('phone', values.phone);
    formData.append('suburb', values.suburb_state);
    const result = await jobSeekerRegisterAPICall(formData);
    if (result.success) {
      handleStep(2);
    }
  };

  useEffect(() => {
    const getRoleData = async () => {
      const _result = await getRole();
      if (_result.success) {
        setRoles(_result.data);
      }
    };
    getRoleData();
  }, []);

  useEffect(() => {
    const getJobsType = async () => {
      const _result = await getJobTypes();
      if (_result.success) {
        setdDration(_result.data);
      }
    };
    getJobsType();
  }, []);

  const handleRate = (event: any, _setFieldValue: any) => {
    const v = event.target.value;
    if (v === 'Full time / Salary') {
      setRate(pay_required);
      _setFieldValue('duration', v);
    } else {
      setRate(hourly_rates);
      _setFieldValue('duration', v);
    }
  };
  return (
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
        values,
        setFieldValue,
      }) => {
        const handleCheckboxValue = (_id: any) => {
          let questionIds = values.role;
          if (!questionIds.includes(_id)) {
            questionIds.push(_id);
            setFieldValue('role', questionIds);
          } else {
            const ids = questionIds.filter((id: any) => id !== _id);
            questionIds = [...ids];
            setFieldValue('role', questionIds);
          }
        };
        return (
          <Form className="space-y-6  ">
            <ScrollToFieldError />
            <div className="space-y-6 px-10 sm:px-4  sm:max-h-full overflow-y-auto">
              <div className="flex flex-col items-start">
                <label className="block mb-2 text-sm font-semibold text-black">
                  Update Profile Image
                  <span className="text-red">*</span>
                </label>
                <div className="flex sm:flex-col sm:space-y-2 space-x-8">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full   mr-auto h-40 rounded-lg cursor-pointer bg-gray-light"
                  >
                    {!avatar && (
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload />
                      </div>
                    )}
                    {avatar && (
                      <img
                        className="object-fill h-full"
                        src={avatar}
                        alt="avatar"
                      />
                    )}
                    <input
                      id="dropzone-file"
                      name="logo"
                      onChange={(event: any) => {
                        const fileReader: any = new FileReader();
                        const { files } = event.target;
                        const myFiles = Array.from(files);
                        setFieldValue('logo', myFiles);
                        fileReader.onload = () => {
                          if (fileReader.readyState === 2) {
                            setAvatar(fileReader.result);
                          }
                        };
                        fileReader.readAsDataURL(event.target.files[0]);
                      }}
                      type="file"
                      accept="image/*"
                      className="hidden"
                    />
                  </label>
                  <p className="text-blue gap-2 font-bold sm:!ml-auto flex text-left">
                    {' '}
                    <InfoBtn className="!w-12" /> Don't be shy - they have to
                    see you eventually! Offensive images will not be approved.
                  </p>
                </div>
                <ErrorMessage
                  name="logo"
                  component="span"
                  className="text-xs text-yellow pt-1"
                />
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-col items-start flex w-full">
                  <label className="block mb-2 text-sm font-semibold text-black">
                    First Name
                    <span className="text-red">*</span>
                  </label>
                  <FastField
                    type="text"
                    name="first_name"
                    className="focus:outline-transparent bg-gray-light border border-gray-light text-sm rounded-lg block p-3 w-full"
                    placeholder="Enter..."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.first_name}
                  />
                  <ErrorMessage
                    name="first_name"
                    component="span"
                    className="text-xs text-yellow pt-1"
                  />
                </div>
                <div className="flex-col items-start flex w-full">
                  <label className="block mb-2 text-sm font-semibold text-black">
                    Last Name
                    <span className="text-red">*</span>
                  </label>
                  <FastField
                    type="text"
                    name="last_name"
                    className="focus:outline-transparent bg-gray-light border border-gray-light text-sm rounded-lg block p-3 w-full "
                    placeholder="Enter..."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.last_name}
                  />
                  <ErrorMessage
                    name="last_name"
                    component="span"
                    className="text-xs text-yellow pt-1"
                  />
                </div>
              </div>

              <div className="flex flex-col items-start">
                <label className="block mb-2 text-sm font-semibold text-black">
                  Select Role
                  <span className="text-red">*</span>
                </label>
                <div className="space-y-3 flex flex-col bg-gray-light w-full p-4 rounded-md">
                  <p className="text-left text-red">
                    Maximum two selections allowed
                  </p>
                  {roles.map((role, i) => (
                    <div
                      key={i}
                      className="inline-flex items-center space-x-3"
                      role="group"
                      aria-labelledby="checkbox-group"
                    >
                      <Field
                        type="checkbox"
                        name="role"
                        value={role.id}
                        onChange={() => handleCheckboxValue(role.id)}
                        className={`!h-6 !w-6
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
                  Must Tick One
                </label>
                <div className="space-y-3 flex flex-col">
                  {duration.map((val, i) => (
                    <div
                      key={i}
                      className="inline-flex items-center space-x-3"
                      role="group"
                      aria-labelledby="checkbox-group"
                    >
                      <Field
                        type="radio"
                        name="duration"
                        value={val.id}
                        className={`!h-5 !w-5
                      } `}
                        onChange={() => {
                          setFieldValue('duration', val.id);
                        }}
                      />
                      <p className=" text-gray">{val.title}</p>
                    </div>
                  ))}
                </div>

                <ErrorMessage
                  name="duration"
                  component="span"
                  className="text-xs text-yellow pt-1"
                />
              </div>

              {values.duration === 1 ? (
                <div className="flex flex-wrap items-start">
                  <label className="block mb-2 text-sm font-semibold text-black">
                    Pay Required
                    <span className="text-red">*</span>
                  </label>

                  <div className="select-border-none w-full pb-1">
                    <Select
                      variant="outlined"
                      name="pay_required"
                      onBlur={handleBlur}
                      onChange={(v) => {
                        setFieldValue('pay_required', v);
                      }}
                      className=" bg-gray-light outline-none border-none text-sm rounded-lg block w-full h-11 "
                    >
                      {pay_required.map((val, i) => (
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

                  <ErrorMessage
                    name="pay_required"
                    component="span"
                    className="text-xs text-yellow pt-1"
                  />
                </div>
              ) : (
                <div className="flex flex-wrap items-start">
                  <label className="block mb-2 text-sm font-semibold text-black">
                    Hourly Rate Required
                    <span className="text-red">*</span>
                  </label>

                  <div className="select-border-none w-full pb-1">
                    <Select
                      variant="outlined"
                      name="hourly_rate"
                      onBlur={handleBlur}
                      onChange={(v) => {
                        setFieldValue('hourly_rate', v);
                      }}
                      className=" bg-gray-light outline-none border-none text-sm rounded-lg block w-full h-11 "
                    >
                      {hourly_rates.map((val, i) => (
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

                  <ErrorMessage
                    name="hourly_rate"
                    component="span"
                    className="text-xs text-yellow pt-1"
                  />
                </div>
              )}

              <div className="flex flex-wrap items-start">
                <label className="block mb-2 text-sm font-semibold text-black">
                  Age
                  <span className="text-red">*</span>
                </label>
                <FastField
                  type="text"
                  name="age"
                  className="focus:outline-transparent bg-gray-light border border-gray-light text-sm rounded-lg block w-full p-3 "
                  placeholder="Enter..."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.age}
                />
                <ErrorMessage
                  name="age"
                  component="span"
                  className="text-xs text-yellow pt-1"
                />
              </div>

              <div className="flex flex-wrap items-start">
                <label className="block mb-2 text-sm font-semibold text-black">
                  Email ID
                  <span className="text-red">*</span>
                </label>
                <FastField
                  type="text"
                  name="email"
                  className="focus:outline-transparent bg-gray-light border border-gray-light text-sm rounded-lg block w-full p-3 "
                  placeholder="Enter..."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className="text-xs text-yellow pt-1"
                />
              </div>

              <div className="flex flex-wrap items-start">
                <label className="block mb-2 text-sm font-semibold text-black">
                  Phone No
                  <span className="text-red">*</span>
                </label>
                <FastField
                  type="text"
                  name="phone"
                  className="focus:outline-transparent bg-gray-light border border-gray-light text-sm rounded-lg block w-full p-3 "
                  placeholder="Enter..."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                />
                <ErrorMessage
                  name="phone"
                  component="span"
                  className="text-xs text-yellow pt-1"
                />
              </div>

              <div className="flex flex-wrap items-start">
                <label className="block mb-2 text-sm font-semibold text-black">
                  Suburb & State
                  <span className="text-red">*</span>
                </label>
                <AutoLocation
                  suburbSelect={(value: any) => {
                    setFieldValue('suburb_state', value);
                  }}
                />
                <ErrorMessage
                  name="suburb_state"
                  component="span"
                  className="text-xs text-yellow pt-1"
                />
              </div>

              <div className="flex flex-wrap items-start">
                <label className="block mb-2 text-sm font-semibold text-black">
                  Password
                  <span className="text-red">*</span>
                </label>
                <FastField
                  type="password"
                  name="password"
                  className="focus:outline-transparent bg-gray-light border border-gray-light text-sm rounded-lg block w-full p-3 "
                  placeholder="Enter..."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <ErrorMessage
                  name="password"
                  component="span"
                  className="text-xs text-yellow pt-1"
                />
              </div>

              <div className="flex flex-wrap items-start">
                <label className="block mb-2 text-sm font-semibold text-black">
                  Confirm Password
                  <span className="text-red">*</span>
                </label>
                <FastField
                  type="password"
                  name="confirm_password"
                  className="focus:outline-transparent bg-gray-light border border-gray-light text-sm rounded-lg block w-full p-3 "
                  placeholder="Enter..."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirm_password}
                />
                <ErrorMessage
                  name="confirm_password"
                  component="span"
                  className="text-xs text-yellow pt-1"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-3 px-10 sm:px-4 ">
              <CustomButton
                label={`${_step ? 'Save and Update' : 'Save and Continue'}`}
                type="submit"
                isLoading={false}
                variant="outlined"
                styleClass="btn-yellow w-full !rounded-[5px] "
              />
              <p className="text-gray text-sm">Step 1 of 3</p>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default JobSeekerRegisterStep1;
