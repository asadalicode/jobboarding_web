/* eslint-disable jsx-a11y/label-has-associated-control */
import CustomCard from '@src/shared/cards/customCard';
import { ReactComponent as Logoblue } from '@assets/logo_blue.svg';
import CustomButton from '@src/shared/customButton';
import { ReactComponent as Fb } from '@assets/icons/facebook_blue.svg';
import { ReactComponent as Googleblue } from '@assets/icons/google_blue.svg';

import * as Yup from 'yup';
import { ErrorMessage, FastField, Field, Form, Formik } from 'formik';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { StorageI } from '@src/shared/interfaces';
import { SetStorage } from '@src/shared/utils/authService';
import { useCallback, useEffect } from 'react';
import {
  loginBusinessAPICall,
  loginCandidateAPICall,
} from '@src/shared/service/candidate/authService';

export interface initialSchemaValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

const FormSchema = Yup.object().shape({
  email: Yup.string().label('Email').required(),
  password: Yup.string().label('Password').required(),
  rememberMe: Yup.boolean(),
});

const initialValues: initialSchemaValues = {
  email: '',
  password: '',
  rememberMe: false,
};

function Login() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const register = (type: string) => {
    navigate(`/${type}`);
  };

  const handleSubmit = useCallback(async (values: initialSchemaValues) => {
    let data: StorageI;
    if (pathname === '/businessLogin') {
      const _result = await loginBusinessAPICall({
        email: values.email,
        password: values.password,
      } as IAuth.ILoginParams);
      if (_result.success) {
        data = { data: _result.data, userType: 'business' };

        SetStorage(data, values.rememberMe);
        navigate('/business/chooseMembership');
      }
    } else {
      const _result = await loginCandidateAPICall({
        email: values.email,
        password: values.password,
      } as IAuth.ILoginParams);
      if (_result.success) {
        data = { data: _result.data, userType: 'jobSeeker' };

        SetStorage(data, values.rememberMe);
        navigate('/');
      }
    }
  }, []);
  return (
    <div className="flex flex-col items-center justify-center   min-h-[calc(100vh-5vh)] bg-gradient-to-r from-bluish-gradient via-yellow-gradient to-yellow-gradient">
      <CustomCard styleClass="sm:rounded-none w-1/3 sm:w-full md:w-[60%] mx-auto py-8 mt-20  sm:mt-[100px] mb-8 flex space-y-6 sm:space-y-3">
        <Logoblue className="self-center px-4 sm:px-8 sm:hidden" />
        <hr className="solid opacity-85 sm:hidden" />
        <h4 className="self-center font-semibold text-black">Login</h4>
        <div className="px-10 sm:px-4">
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
              isSubmitting,
            }) => (
              <Form className="space-y-6">
                <div className="sm:flex-col flex gap-4 px-6">
                  <CustomButton
                    handleButtonClick={() => register('jobSeekerRegister')}
                    label="Jobseekers register"
                    type="button"
                    isLoading={false}
                    variant="outlined"
                    styleClass="btn-white w-full  !rounded-[5px] "
                  />
                  <CustomButton
                    handleButtonClick={() => register('businessRegister')}
                    label="Business register"
                    type="button"
                    isLoading={false}
                    variant="outlined"
                    styleClass="btn-yellow w-full  !rounded-[5px] "
                  />
                </div>
                <div className="space-y-6 ">
                  <div className="flex flex-wrap items-start">
                    <label className="block mb-2 text-sm font-semibold text-black">
                      Email
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

                  <div className="flex flex-col items-start">
                    <label className="block mb-2 text-sm font-semibold text-black">
                      Password
                    </label>
                    <FastField
                      type="password"
                      name="password"
                      className={`focus:outline-transparent bg-gray-light border border-gray-light text-sm rounded-lg block w-full p-3
                      } `}
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
                    <div className="flex w-full pt-2 justify-between items-center">
                      <div className="flex gap-2">
                        <Field
                          type="checkbox"
                          name="rememberMe"
                          className="!h-auto w-4"
                        />
                        <p className="text-sm text-black"> Remember me</p>
                      </div>
                      <Link to="/forgotPassword">
                        <a href="." className=" text-blue underline text-sm">
                          Forgot password?
                        </a>
                      </Link>
                    </div>
                  </div>

                  <div>
                    <CustomButton
                      label="Login"
                      type="submit"
                      isLoading={isSubmitting}
                      variant="outlined"
                      styleClass="btn-blue w-full !rounded-[5px] "
                    />
                  </div>

                  <p className="text-sm font-light">Or Login with</p>

                  <div className="flex gap-4">
                    <CustomButton
                      icon={<Fb className="w-5 h-auto mr-2" />}
                      label="Facebook"
                      type="button"
                      isLoading={false}
                      variant="outlined"
                      styleClass="btn-gray w-full !rounded-[5px] "
                    />

                    <CustomButton
                      icon={<Googleblue className="w-5 h-auto mr-2" />}
                      label="Google"
                      type="button"
                      isLoading={false}
                      variant="outlined"
                      styleClass="btn-gray w-full !rounded-[5px] "
                    />
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </CustomCard>
    </div>
  );
}

export default Login;
