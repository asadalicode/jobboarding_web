/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/label-has-associated-control */
import pdfIcon from '@assets/icons/pdf.svg';
import CustomButton from '@src/shared/customButton';
import { ReactComponent as Upload } from '@assets/icons/image_logo.svg';
import { ReactComponent as DateIcon } from '@assets/icons/datepicker.svg';
import { ReactComponent as RemoveIcon } from '@assets/icons/Remove_icon.svg';
import { ReactComponent as CrossIcon } from '@assets/icons/cross.svg';
import { ReactComponent as PlusIcon } from '@assets/icons/Plus_icon.svg';

import * as Yup from 'yup';
import {
  ErrorMessage,
  FastField,
  Field,
  FieldArray,
  Form,
  Formik,
  FormikErrors,
  useFormikContext,
} from 'formik';
import { useEffect, useMemo, useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLayout } from '@src/shared/slices/LayoutSlice';
import AutoLocation from '@src/shared/autoLocation';
import { getQualificationCertification } from '@src/shared/service/job/jobService';
import { getRole } from '@src/shared/service/roleService';
import { Select, Option } from '@material-tailwind/react';
import moment from 'moment';

export interface initialSchemaValues {
  qualifications: [];
  resume: [];
  experience: string;
  tickets: [];
  current_role: {
    role: string;
    company_name: string;
    suburb_state: string;
    start_date: Date | any;
    finish_date: Date | any;
  };
  previous_role: [
    {
      role: string;
      company_name: string;
      suburb_state: string;
      start_date: Date | any;
      finish_date: Date | any;
    }
  ];
}

const FormSchema = Yup.object().shape({
  experience: Yup.string().required(),
  tickets: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required('Name is required'),
      email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
    })
  ),
  current_role: Yup.object().shape({
    role: Yup.string().required('Current role is required'),
    company_name: Yup.string().required('Company Name is required'),
    suburb_state: Yup.string().required('Suburb is required'),
    start_date: Yup.date(),
    finish_date: Yup.date().when(
      'start_date',
      // eslint-disable-next-line prettier/prettier
      (start_date, schema: any) =>
        start_date &&
        schema.min(start_date, 'finish date must be less than start date')
    ),
  }),
  previous_role: Yup.array().of(
    Yup.object().shape({
      role: Yup.string().required('Previous role is required'),
      company_name: Yup.string().required('Company Name is required'),
      suburb_state: Yup.string().required('Suburb is required'),
      start_date: Yup.date(),
      finish_date: Yup.date().when(
        'start_date', // eslint-disable-next-line prettier/prettier
        (start_date, schema) =>
          start_date &&
          schema.min(start_date, 'finish date must be less than start date')
      ),
    })
  ),
  qualifications: Yup.array().min(1, 'Atleast one checkbox required'),
  resume: Yup.array().min(1, 'select at least 1 file'),
});

const initialValues: initialSchemaValues = {
  experience: '',
  tickets: [],
  current_role: {
    role: '',
    company_name: '',
    suburb_state: '',
    start_date: '',
    finish_date: '',
  },
  previous_role: [
    {
      role: '',
      company_name: '',
      suburb_state: '',
      start_date: '',
      finish_date: '',
    },
  ],
  resume: [],
  qualifications: [],
};
// const qualifications = [
//   'Certificate II in Kitchen Operations',
//   'Certificate III in Commercial Cookery',
//   'Certificate 3 in Patisserie ',
//   'Certificate IV in Commercial Cookery',
//   'certificate IV in patisserie',
//   'advanced diploma of hospitality (commercial cookery)',
//   'advanced diploma of hospitality (patisserie)',
//   'responsible service of alcohol (rsa)',
//   'responsible conduct of gambling (RCG)',
//   'Police check (National Police certificate)',
// ];
// const roles= ['Bar Staff', 'Waiting Staff', 'House Keeping', 'Front Office / Guest Service','Apprentice Chef','Cook','Head Chef','Chef De Partie / Sous','Kitchen / Sandwich Hand','Management','Reservations','Tour Guide','Barista', 'Junior / Floor Person / Glassy']
// const duration= ['Casual / Part Time', 'Short Term / Temporary', 'Full time / Salary']
// const hourly_rates= Array.from(Array(79).keys()).filter((val)=> val>23 && val%2==0 )
const getFieldErrorNames = (formikErrors: FormikErrors<unknown>) => {
  const transformObjectToDotNotation = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
function JobSeekerRegisterStep2({ handleStep }: any) {
  const dispatch = useDispatch();
  dispatch(
    setLayout({
      isShowFooter: false,
      isShowHeader: false,
    })
  );
  const [resume, setResume] = useState();
  const [roles, setRoles] = useState<IRole.Payload[]>([]);
  const [qualifications, setQualifications] = useState<
    IQualification.Payload[]
  >([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const _step = searchParams.get('step');

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
    const getQualification = async () => {
      const result = await getQualificationCertification();
      if (result.success) {
        setQualifications(result.data);
      }
    };
    getQualification();
  }, []);

  const handleSubmit = (values: any) => {
    console.log('@@@', values);

    const data = {
      qualifications: values.qualifications,
      years_of_experience: values.experience,
      resume: values.resume[0],
      experiences: getExperience(values),
    };

    console.log('Role', data);
    // handleStep(3);
  };
  const getExperience = (values: any) => {
    const { current_role, previous_role } = values;
    const _currentRole = {
      role_id: current_role.role,
      company_name: current_role.company_name,
      suburb: current_role.suburb_state,
      currently_working: 1,
      start_date: moment(current_role.start_date).format('yyyy-mm-dd'),
    };
    const _previousRole = previous_role.map((item: any) => ({
      role_id: item.role,
      company_name: item.company_name,
      suburb: item.suburb_state,
      currently_working: 0,
      start_date: moment(item.start_date).format('yyyy-mm-dd'),
      finish_date: moment(item.finish_date).format('yyyy-mm-dd'),
    }));

    return [_currentRole, ..._previousRole];
  };

  const addPreviousRoleFields = () => {
    // onChangePreviousRole('previous_role',{role:'',company_name:''},{role:'',company_name:''} )
  };

  const onChangeFields = (values: any, setValues: any, index?: number) => {
    // update dynamic form
    const previous_role = [...values.previous_role];
    if (index) {
      previous_role.splice(index, 1);
    } else {
      previous_role.push({
        role: '',
        company_name: '',
        suburb_state: '',
        start_date: '',
        finish_date: '',
      });
    }

    setValues({ ...values, previous_role });

    // call formik onChange method
    // field.onChange(e);
  };
  const handleRoute = () => {
    handleStep(1);
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
        setValues,
        setFieldValue,
      }) => {
        const handleCheckboxValue = (_id: any) => {
          let questionIds = values.qualifications;
          if (!questionIds.includes(_id)) {
            questionIds.push(_id);
            setFieldValue('qualifications', questionIds);
          } else {
            const ids = questionIds.filter((id: any) => id !== _id);
            questionIds = [...ids];
            setFieldValue('qualifications', questionIds);
          }
        };
        return (
          <Form className="space-y-6  ">
            <ScrollToFieldError />
            <div className="space-y-6 px-10 sm:px-4  sm:max-h-full overflow-y-auto">
              <div className="flex flex-wrap items-start">
                <label className="block mb-2 text-sm font-semibold text-black">
                  Years Experience in Similar Role
                  <span className="text-red">*</span>
                </label>
                <Field
                  type="number"
                  name="experience"
                  className="focus:outline-transparent bg-gray-light border border-gray-light text-sm rounded-lg block w-full p-3 "
                  placeholder="Enter..."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.experience}
                />
                <ErrorMessage
                  name="experience"
                  component="span"
                  className="text-xs text-yellow pt-1"
                />
              </div>

              <div className="flex flex-col items-start">
                <h5 className=" font-semibold text-black">Current Role</h5>
                <hr className="solid opacity-85 w-full my-2 " />
                <label className="block mb-2 text-sm font-semibold text-black">
                  Role
                  <span className="text-red">*</span>
                </label>

                <Select
                  variant="outlined"
                  placeholder="Select role"
                  name="current_role.role"
                  onBlur={handleBlur}
                  onChange={(v) => {
                    setFieldValue('current_role.role', v);
                  }}
                  className=" bg-gray-light outline-none !border-none text-sm rounded-lg block w-full h-11 "
                >
                  {roles.map((val, i) => (
                    <Option
                      key={i}
                      className="border-b-[1px] py-3 border-b-gray-light rounded-none text-left"
                      value={val.id}
                    >
                      {val.title}
                    </Option>
                  ))}
                </Select>

                <ErrorMessage
                  name="current_role.role"
                  component="span"
                  className="text-xs text-yellow pt-1"
                />
              </div>

              <div className="flex flex-col items-start">
                <label className="block mb-2 text-sm font-semibold text-black">
                  Company Name
                  <span className="text-red">*</span>
                </label>
                <Field
                  type="text"
                  name="current_role.company_name"
                  className="focus:outline-transparent bg-gray-light border border-gray-light text-sm rounded-lg block w-full p-3 "
                  placeholder="Enter..."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.current_role.company_name}
                />
                <ErrorMessage
                  name="current_role.company_name"
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
                    setFieldValue('current_role.suburb_state', value);
                  }}
                />

                <ErrorMessage
                  name="current_role.suburb_state"
                  component="span"
                  className="text-xs text-yellow pt-1"
                />
              </div>

              <div className="grid grid-cols-2 space-x-4 items-start">
                <div className="text-left ">
                  <label className="block mb-2 text-sm font-semibold text-black">
                    Start date
                    <span className="text-red">*</span>
                  </label>
                  <div className="relative">
                    <DatePicker
                      className="focus:outline-transparent bg-gray-light border border-gray-light text-sm rounded-lg block w-full p-3"
                      name="date"
                      minDate={new Date()}
                      dateFormat="dd/MM/yyyy"
                      selected={values.current_role.start_date}
                      value={values.current_role.start_date}
                      onChange={(val) => {
                        setFieldValue('current_role.start_date', val);
                      }}
                    />
                    <DateIcon className="absolute top-0 m-auto bottom-0 right-3" />
                  </div>

                  <ErrorMessage
                    name="current_role.start_date"
                    component="span"
                    className="text-xs text-yellow pt-1"
                  />
                </div>
                <div className="text-left">
                  <label className="block mb-2 text-sm font-semibold text-black">
                    Finish date
                    <span className="text-red">*</span>
                  </label>
                  <div className="relative">
                    <DatePicker
                      className="focus:outline-transparent bg-gray-light border border-gray-light text-sm rounded-lg block w-full p-3"
                      name="finish_date"
                      minDate={new Date()}
                      dateFormat="dd/MM/yyyy"
                      selected={values.current_role.finish_date}
                      value={values.current_role.finish_date}
                      onChange={(val) => {
                        setFieldValue('current_role.finish_date', val);
                      }}
                    />
                    <DateIcon className="absolute top-0 m-auto bottom-0 right-3" />
                  </div>

                  <ErrorMessage
                    name="current_role.finish_date"
                    component="span"
                    className="text-xs text-yellow pt-1"
                  />
                </div>
              </div>

              <div className="flex flex-col items-start">
                <div className="flex justify-between items-center w-full">
                  <h5 className=" font-semibold text-black">Previous Role</h5>
                  <PlusIcon
                    onClick={() => onChangeFields(values, setValues)}
                    className="cursor-pointer w-auto h-6 sm:h-6"
                  />
                </div>

                <FieldArray name="previous_role">
                  {() =>
                    values.previous_role.map((prev_role: any, i) => (
                      <div key={i} className="space-y-5 w-full">
                        <hr className="solid opacity-85 w-full my-4" />

                        <div className="flex flex-col items-start">
                          <div className="flex justify-between items-start w-full">
                            <label className="block mb-2 text-sm font-semibold text-black">
                              Role
                              <span className="text-red">*</span>
                            </label>
                            {i >= 1 && (
                              <RemoveIcon
                                onClick={() =>
                                  onChangeFields(values, setValues, i)
                                }
                                className="cursor-pointer w-auto h-4 sm:h-4"
                              />
                            )}
                          </div>

                          <Select
                            variant="outlined"
                            placeholder="Select role"
                            name={`previous_role.${i}.role`}
                            onBlur={handleBlur}
                            onChange={(v) => {
                              setFieldValue(`previous_role.${i}.role`, v);
                            }}
                            className=" bg-gray-light outline-none !border-none text-sm rounded-lg block w-full h-11 "
                          >
                            {roles.map((val, index) => (
                              <Option
                                key={index}
                                className="border-b-[1px] py-3 border-b-gray-light rounded-none text-left"
                                value={val.id}
                              >
                                {val.title}
                              </Option>
                            ))}
                          </Select>
                          <ErrorMessage
                            name={`previous_role.${i}.role`}
                            component="span"
                            className="text-xs text-yellow pt-1 text-left"
                          />
                        </div>
                        <div className="flex flex-col items-start">
                          <label className="block mb-2 text-sm font-semibold text-black">
                            Company Name
                            <span className="text-red">*</span>
                          </label>
                          <Field
                            type="text"
                            name={`previous_role.${i}.company_name`}
                            className="focus:outline-transparent bg-gray-light border border-gray-light text-sm rounded-lg block w-full p-3 "
                            placeholder="Enter..."
                          />

                          <ErrorMessage
                            name={`previous_role.${i}.company_name`}
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
                            suburbSelect={(value: any) =>
                              setFieldValue(
                                `previous_role.${i}.suburb_state`,
                                value
                              )
                            }
                          />

                          <ErrorMessage
                            name={`previous_role.${i}.suburb_state`}
                            component="span"
                            className="text-xs text-yellow pt-1"
                          />
                        </div>

                        <div className="grid grid-cols-2 space-x-4 items-start">
                          <div className="text-left ">
                            <label className="block mb-2 text-sm font-semibold text-black">
                              Start date
                              <span className="text-red">*</span>
                            </label>
                            <div className="relative">
                              <DatePicker
                                className="focus:outline-transparent bg-gray-light border border-gray-light text-sm rounded-lg block w-full p-3"
                                name={`previous_role.${i}.start_date`}
                                dateFormat="dd/MM/yyyy"
                                minDate={new Date()}
                                value={prev_role.start_date}
                                selected={prev_role.start_date}
                                onChange={(val) => {
                                  setFieldValue(
                                    `previous_role.${i}.start_date`,
                                    val
                                  );
                                }}
                              />
                              <DateIcon className="absolute top-0 m-auto bottom-0 right-3" />
                            </div>
                            <ErrorMessage
                              name={`previous_role.${i}.start_date`}
                              component="span"
                              className="text-xs text-yellow pt-1"
                            />
                          </div>

                          <div className="text-left">
                            <label className="block mb-2 text-sm font-semibold text-black">
                              Finish date
                              <span className="text-red">*</span>
                            </label>
                            <div className="relative">
                              <DatePicker
                                className="focus:outline-transparent bg-gray-light border border-gray-light text-sm rounded-lg block w-full p-3"
                                name={`previous_role.${i}.finish_date`}
                                dateFormat="dd/MM/yyyy"
                                minDate={new Date()}
                                value={prev_role.finish_date}
                                selected={prev_role.finish_date}
                                onChange={(val) => {
                                  setFieldValue(
                                    `previous_role.${i}.finish_date`,
                                    val
                                  );
                                }}
                              />
                              <DateIcon className="absolute top-0 m-auto bottom-0 right-3" />
                            </div>
                            <ErrorMessage
                              name={`previous_role.${i}.finish_date`}
                              component="span"
                              className="text-xs text-yellow pt-1"
                            />
                          </div>
                        </div>
                        {/* <hr className="solid opacity-85 w-full my-2 " /> */}
                      </div>
                    ))
                  }
                </FieldArray>
              </div>

              <div className="flex flex-col items-start">
                <hr className=" !border-[0.2px] !opacity-90 text-gray w-full my-2 " />
                <h5 className=" font-semibold text-black my-2">
                  Qualifications / Certifications
                </h5>
                <label className="block mb-2 text-sm text-left py-2 font-semibold text-black">
                  Which of the following culinary arts qualifications have you
                </label>
                <div className="space-y-3 flex flex-col">
                  {qualifications.map((val, i) => (
                    <div
                      key={i}
                      className="inline-flex space-x-3 text-left"
                      role="group"
                      aria-labelledby="checkbox-group"
                    >
                      <Field
                        type="checkbox"
                        name="qualifications"
                        value={val.id}
                        onChange={() => handleCheckboxValue(val.id)}
                        className={`!h-6 !w-6
                    } `}
                      />
                      <p className=" text-gray capitalize">{val.title}</p>
                    </div>
                  ))}
                </div>
                <ErrorMessage
                  name="qualifications"
                  component="span"
                  className="text-xs text-yellow pt-1"
                />
              </div>

              <div className="flex flex-col items-start">
                <label className="block mb-2 text-sm font-semibold text-black">
                  Upload Resume
                  <span className="text-red">*</span>
                </label>
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full p-3 rounded-lg cursor-pointer bg-gray-light"
                >
                  {!resume && (
                    <div className="flex flex-col items-center justify-center">
                      <Upload />
                    </div>
                  )}
                  {resume && (
                    <div className="grid grid-cols-2 justify-between w-full px-2">
                      <img
                        className="object-fill h-full w-4"
                        src={pdfIcon}
                        alt="pdfIcon"
                      />
                      <CrossIcon className="ml-auto w-6 !text-gray !h-auto" />
                    </div>
                  )}
                  <input
                    id="dropzone-file"
                    name="resume"
                    onChange={(event: any) => {
                      // const fileReader: any = new FileReader();
                      const { files } = event.target;
                      const myFiles: any = Array.from(files);
                      setResume(myFiles);
                      setFieldValue('resume', myFiles);
                      // fileReader.onload = () => {
                      //   if (fileReader.readyState === 2) {
                      //     setResume(fileReader.result);
                      //   }
                      // };
                      // fileReader.readAsDataURL(event.target.files[0]);
                    }}
                    type="file"
                    accept="application/pdf,application/vnd.ms-excel"
                    className="hidden"
                  />
                </label>
                <ErrorMessage
                  name="previous_role.company_name"
                  component="span"
                  className="text-xs text-yellow pt-1"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-3 px-10 sm:px-4 ">
              <div className="flex space-x-3 space-between w-full">
                <CustomButton
                  label="Back"
                  type="button"
                  isLoading={false}
                  variant="outlined"
                  handleButtonClick={handleRoute}
                  styleClass="btn-gray !px-8 !opacity-60 w-auto !rounded-[5px] "
                />
                <CustomButton
                  label={`${_step ? 'Save and Update' : 'Save and Continue'}`}
                  type="submit"
                  isLoading={false}
                  variant="outlined"
                  styleClass="btn-yellow !px-4 !ml-auto !rounded-[5px] "
                />
              </div>
              <p className="text-gray text-right">Step 2 of 3</p>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default JobSeekerRegisterStep2;
