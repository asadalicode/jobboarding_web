/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import CustomCard from '@src/shared/cards/customCard';
import {
  ReactComponent as Logoblue,
  ReactComponent as LogoBlue,
} from '@assets/logo_blue.svg';
import BackroundImage from '@src/shared/backgroundImage';
import HomeBg from '@assets/images/home_bg.png';
import CustomButton from '@src/shared/customButton';
import { ReactComponent as Upload } from '@assets/icons/upload.svg';

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
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import { Avatar } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { SetStorage } from '@src/shared/utils/authService';
import { StorageI } from '@src/shared/interfaces';
import { useDispatch } from 'react-redux';
import { setLayout } from '@src/shared/slices/LayoutSlice';
import AutoLocation from '@src/shared/autoLocation';
import { businessRegisterAPICall } from '@src/shared/service/authService';
import { handleToastMessage } from '@src/shared/utils/handleToastMessage';

export interface initialSchemaValues {
  logo: [];
  company_name: string;
  contact_person: string;
  phone: string;
  email: string;
  password: string;
  confirm_password: string;
  address: string;
  suburb_state: string;
  post_code: string;
}

const FormSchema = Yup.object().shape({
  logo: Yup.array().min(1, 'select at least 1 file'),
  company_name: Yup.string().label('company name').required(),
  contact_person: Yup.string().label('contact person').required(),
  phone: Yup.string().label('Phone').required(),
  email: Yup.string().label('Email').required(),
  password: Yup.string().label('Password').required(),
  confirm_password: Yup.string().label('confirm password').required(),
  address: Yup.string().label('Address').required(),
  suburb_state: Yup.string().label('suburb state').required(),
  post_code: Yup.string().label('post code').required(),
});

const initialValues: initialSchemaValues = {
  logo: [],
  company_name: '',
  contact_person: '',
  phone: '',
  email: '',
  password: '',
  confirm_password: '',
  address: '',
  suburb_state: '',
  post_code: '',
};
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
      const _element: any = document.getElementById('formContainer');
      console.log('_element ===', _element);
      // window.scrollTo(0,0)
      window.scrollTo(0, 0);
    } else {
      console.log('_element ===', element);
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [submitCount]);

  return null;
}
function BusinessRegister() {
  const dispatch = useDispatch();
  dispatch(
    setLayout({
      isShowFooter: false,
      isShowHeader: true,
    })
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const _id = searchParams.get('id');

  const [avatar, setAvatar] = useState();

  const handleSubmit = async (values: any) => {
    const formData = new FormData();
    const {
      logo,
      company_name,
      contact_person,
      phone,
      email,
      password,
      address,
      suburb_state,
      post_code,
    } = values;
    formData.append('company_logo', logo[0]);
    formData.append('company_name', company_name);
    formData.append('contact_person', contact_person);
    formData.append('phone', phone);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('address_street', address);
    formData.append('suburb', suburb_state);
    formData.append('state', suburb_state);
    formData.append('postal_code', post_code);
    const data: StorageI = { data: values, userType: 'business' };
    SetStorage(data);
    // navigate(`/business/chooseMembership`);
    const response = await businessRegisterAPICall(formData);
    if (response.success) {
      handleToastMessage('success', response?.message ?? '');
      navigate('/otp');
    }
  };
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden   min-h-[calc(100vh-5vh)] bg-gradient-to-r from-bluish-gradient via-yellow-gradient to-yellow-gradient">
      <CustomCard styleClass="sm:rounded-none w-1/3 sm:w-full md:w-[60%] mx-auto mt-20 sm:mt-[100px] mb-8  py-8  flex space-y-6 sm:space-y-3">
        <LogoBlue className="self-center px-4 sm:px-8 sm:hidden" />
        <hr className="solid opacity-85 sm:hidden" />

        <div className="space-y-2">
          <h4 className="self-center font-semibold text-black">
            {_id ? 'Edit My Profile ' : 'Business Register'}
          </h4>
          {!_id && (
            <div className="flex flex-wrap justify-center w-full">
              <p className=" opacity-60">Already have an account?</p> &nbsp;{' '}
              <Link to="/login">
                <p className="text-blue !font-semibold">Login in now</p>
              </Link>
            </div>
          )}
        </div>
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
          }) => (
            <Form className="space-y-6 ">
              <ScrollToFieldError />
              <div
                id="formContainer"
                className="space-y-6 px-10 sm:px-4  sm:max-h-full overflow-y-auto "
              >
                <div className="flex flex-col items-start">
                  <label className="block mb-2 text-sm font-semibold text-black">
                    Update Company Logo
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
                      <img
                        className="w-fit max-h-52"
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
                  <ErrorMessage
                    name="logo"
                    component="span"
                    className="text-xs text-yellow pt-1"
                  />
                </div>
                <div className="flex flex-wrap items-start">
                  <label className="block mb-2 text-sm font-semibold text-black">
                    Company Name
                    <span className="text-red">*</span>
                  </label>
                  <FastField
                    type="text"
                    name="company_name"
                    className="focus:outline-transparent bg-gray-light border border-gray-light text-sm rounded-lg block w-full p-3 "
                    placeholder="Enter..."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.company_name}
                  />
                  <ErrorMessage
                    name="company_name"
                    component="span"
                    className="text-xs text-yellow pt-1"
                  />
                </div>

                <div className="flex flex-col items-start">
                  <label className="block mb-2 text-sm font-semibold text-black">
                    Contact Person
                    <span className="text-red">*</span>
                  </label>
                  <FastField
                    type="text"
                    name="contact_person"
                    className={`focus:outline-transparent bg-gray-light border border-gray-light text-sm rounded-lg block w-full p-3
                      } `}
                    placeholder="Enter..."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.contact_person}
                  />
                  <ErrorMessage
                    name="contact_person"
                    component="span"
                    className="text-xs text-yellow pt-1"
                  />
                </div>

                <div className="flex flex-wrap items-start">
                  <label className="block mb-2 text-sm font-semibold text-black">
                    Phone
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
                    Email
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

                <div className="flex flex-wrap items-start">
                  <label className="block mb-2 text-sm font-semibold text-black">
                    Address-Street
                    <span className="text-red">*</span>
                  </label>
                  <FastField
                    type="text"
                    name="address"
                    className="focus:outline-transparent bg-gray-light border border-gray-light text-sm rounded-lg block w-full p-3 "
                    placeholder="Enter..."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address}
                  />
                  <ErrorMessage
                    name="address"
                    component="span"
                    className="text-xs text-yellow pt-1"
                  />
                </div>

                <div className="flex flex-wrap items-start">
                  <label className="block mb-2 text-sm font-semibold text-black">
                    State & Suburbs
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
                    Post Code
                    <span className="text-red">*</span>
                  </label>
                  <FastField
                    type="text"
                    name="post_code"
                    className="focus:outline-transparent bg-gray-light border border-gray-light text-sm rounded-lg block w-full p-3 "
                    placeholder="Enter..."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.post_code}
                  />
                  <ErrorMessage
                    name="post_code"
                    component="span"
                    className="text-xs text-yellow pt-1"
                  />

                  <div className="flex w-full pt-2 ml-[2px]">
                    <Field
                      type="checkbox"
                      name="toggle"
                      className="!h-auto w-4 border mr-2 cursor-pointer"
                    />
                    <p
                      onClick={() => {
                        navigate('/business/termsAndConditions');
                      }}
                      className=" text-blue underline text-sm cursor-pointer"
                    >
                      I agree to the <b>Terms</b> and <b>Conditions</b>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex px-10 sm:px-4">
                <CustomButton
                  label={`${_id ? 'Update' : 'Register'}`}
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

export default BusinessRegister;
