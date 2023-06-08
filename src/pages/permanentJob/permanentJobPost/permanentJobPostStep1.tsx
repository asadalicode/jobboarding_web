/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import CustomCard from '@src/shared/cards/customCard';
import { ReactComponent as Logoblue } from '@assets/logo_blue.svg';
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
import { ReactComponent as Upload } from '@assets/icons/upload.svg';
import { useEffect, useState } from 'react';
import AutoLocation from '@src/shared/autoLocation';
import { JobType } from '@src/shared/utils/enum/enum';
import { SetDateIntoStorage } from '@src/shared/utils/authService';
import {
  getJobRole,
  getWorkType,
} from '@src/shared/service/business/roleService';

export interface initialSchemaValues {
  logo: [];
  role: string;
  work_type: string;
  pay_type: string;
  business_name: string;
  suburb: string;
  pay_rate: string;
  description: string;
}

const FormSchema = Yup.object().shape({
  logo: Yup.array().min(1, 'select at least 1 file'),
  role: Yup.string().required('One must be selected'),
  work_type: Yup.string().required('One must be selected'),
  pay_type: Yup.string().required('One must be selected'),
  business_name: Yup.string().required('Business name is required'),
  suburb: Yup.string().label('Suburb').required(),
  pay_rate: Yup.string().required('Please select hourly rate'),
  description: Yup.string().required('Please write role description'),
});

const initialValues: initialSchemaValues = {
  logo: [],
  role: '',
  work_type: '',
  pay_type: '',
  business_name: '',
  suburb: '',
  pay_rate: '',
  description: '',
};
const work_types = ['full time', 'part time', 'contract', 'casual'];
const pay_types = ['hourly', 'annual'];

const pay_rates = ['15000', '50000', '55000', '60000', '150000'];
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
function PermanentJobPostStep1({ handleStep }: any) {
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState();
  const [roles, setRoles] = useState<IRole.Payload[]>([]);
  const [workType, setWorkType] = useState<IRole.Payload[]>([]);

  useEffect(() => {
    const getRoles = async () => {
      const _role = await getJobRole();
      const _work = await getWorkType();
      if (_role.success) {
        setRoles([..._role.data]);
      }
      if (_work.success) {
        setWorkType([..._work.data]);
      }
    };
    getRoles();
  }, []);

  const register = (type: string) => {
    console.log(type);
    navigate(`/${type}`);
  };

  const handleSubmit = async (values: any) => {
    const _permanentJob: IJob.PermanentJobParams = {
      type: JobType.PERMANENT,
      // logo: values.logo[0],
      suburb: values.suburb,
      business_name: values.business_name,
      pay_type: values.pay_type,
      pay_required: values.pay_rate,
      description: values.description,
      role_id: values.role,
      job_type_id: values.work_type,
    };
    const formData = new FormData();
    const {
      logo,
      suburb,
      business_name,
      pay_type,
      pay_rate,
      description,
      role,
      work_type,
    } = values;
    formData.append('logo', logo[0]);
    formData.append('business_name', business_name);
    formData.append('suburb', suburb);
    formData.append('pay_type', pay_type);
    formData.append('pay_required', pay_rate);
    formData.append('description', description);
    formData.append('role_id', role);
    formData.append('job_type_id', work_type);

    SetDateIntoStorage(JobType.PERMANENT, _permanentJob);
    console.log('@@@', values);
    handleStep(2);
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
        setFieldValue,
        values,
      }) => (
        <Form className="space-y-6  ">
          <ScrollToFieldError />
          <div className="space-y-6 px-10 sm:px-4 max-h-[calc(100vh-60vh)] sm:max-h-full overflow-y-auto">
            <div className="flex flex-col items-start">
              <label className="block mb-2 text-sm font-semibold text-black">
                Upload Logo
              </label>
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-48 mr-auto h-52 rounded-lg cursor-pointer bg-gray-light"
              >
                {!avatar && (
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload />
                  </div>
                )}
                {avatar && (
                  <img className="w-fit max-h-52" src={avatar} alt="avatar" />
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
              <ErrorMessage
                name="logo"
                component="span"
                className="text-xs text-yellow pt-1"
              />
            </div>
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
                Business Name
              </label>
              <FastField
                type="text"
                name="business_name"
                className={`focus:outline-transparent bg-gray-light border border-gray-light text-sm rounded-lg block w-full p-3
                      } `}
                placeholder="Enter..."
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.business_name}
              />
              <ErrorMessage
                name="business_name"
                component="span"
                className="text-xs text-yellow pt-1"
              />
            </div>

            <div className="flex flex-col items-start">
              <label className="block mb-2 text-sm font-semibold text-black">
                Suburb & State
              </label>
              <AutoLocation
                suburbSelect={(value: any) => setFieldValue('suburb', value)}
              />
              <ErrorMessage
                name="suburb"
                component="span"
                className="text-xs text-yellow pt-1"
              />
            </div>

            <div className="flex flex-col items-start">
              <label className="block mb-2 text-sm font-semibold text-black">
                Work
              </label>
              <div className="space-y-3 flex flex-col">
                {workType.map((role, i) => (
                  <div
                    key={role.id}
                    className="inline-flex items-center space-x-3"
                    role="group"
                    aria-labelledby="checkbox-group"
                  >
                    <Field
                      type="radio"
                      name="work_type"
                      value={role.id}
                      onChange={() => {
                        setFieldValue('work_type', role.id);
                      }}
                      className={`!h-5 !w-5
                      } `}
                    />
                    <p className=" text-gray">{role.title}</p>
                  </div>
                ))}
              </div>

              <ErrorMessage
                name="work_type"
                component="span"
                className="text-xs text-yellow pt-1"
              />
            </div>

            <div className="flex flex-col items-start">
              <label className="block mb-2 text-sm font-semibold text-black">
                Pay Type
              </label>
              <div className="space-y-3 flex flex-col">
                {pay_types.map((val, i) => (
                  <div
                    key={i}
                    className="inline-flex items-center space-x-3"
                    role="group"
                    aria-labelledby="checkbox-group"
                  >
                    <Field
                      type="radio"
                      name="pay_type"
                      value={val}
                      className={`!h-5 !w-5
                      } `}
                    />
                    <p className=" text-gray capitalize">{val}</p>
                  </div>
                ))}
              </div>

              <ErrorMessage
                name="pay_type"
                component="span"
                className="text-xs text-yellow pt-1"
              />
            </div>

            <div className="flex flex-wrap items-start">
              <label className="block mb-2 text-sm font-semibold text-black">
                Pay Required
              </label>

              <div className="select-border-none w-full pb-1">
                <Select
                  variant="outlined"
                  name="pay_rate"
                  onBlur={handleBlur}
                  onChange={(v) => {
                    setFieldValue('pay_rate', v);
                  }}
                  value={values.pay_rate}
                  className=" bg-gray-light  outline-none border-none text-sm rounded-lg block w-full h-11 "
                >
                  {pay_rates.map((val, i) => (
                    <Option
                      key={i}
                      className="border-b-[1px]  border-b-gray-light rounded-none text-left"
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

            <div className="flex flex-col items-start">
              <label className="block text-left mb-2 text-sm font-semibold text-black">
                Enter details about the role - hours involved, venue size
                experience required etc. And don't forget the benefits of
                working with you!
              </label>
              <FastField
                type="text"
                as="textarea"
                cols="4"
                rows="5"
                name="description"
                className={`focus:outline-transparent bg-gray-light border border-gray-light text-sm rounded-lg block w-full p-3
                      } `}
                placeholder="Enter..."
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
              />
              <ErrorMessage
                name="description"
                component="span"
                className="text-xs text-yellow pt-1"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-3 px-10 sm:px-4 ">
            <CustomButton
              label="Save and continue"
              type="submit"
              isLoading={false}
              variant="outlined"
              styleClass="btn-yellow w-full !rounded-[5px] "
            />
            <p className="text-gray">Step 1 of 2</p>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default PermanentJobPostStep1;
