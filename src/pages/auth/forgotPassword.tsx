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
import { ErrorMessage, FastField, Field, Form, Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar } from '@material-tailwind/react';
import { useState } from 'react';

export interface initialSchemaValues {
  email: string;
}

const FormSchema = Yup.object().shape({
  email: Yup.string().label('Email').required(),
});

const initialValues: initialSchemaValues = {
  email: '',
};

function ForgotPassword() {
  const navigate = useNavigate();
  const handleSubmit = (values: any) => {
    navigate('/resetPassword');
  };
  return (
    <div className="flex flex-col items-center justify-center  min-h-[calc(100vh-5vh)] bg-gradient-to-r from-bluish-gradient via-yellow-gradient to-yellow-gradient">
      <CustomCard styleClass="sm:rounded-none w-1/3 sm:w-full md:w-[60%] mx-auto py-8 mt-20 sm:mt-[100px] mb-8   flex space-y-6 sm:space-y-3">
        <LogoBlue className="self-center px-4 sm:px-8 sm:hidden" />
        <hr className="solid opacity-85 sm:hidden" />
        <div className="space-y-2">
          <h4 className="self-center font-semibold text-black">
            Forgot Password?
          </h4>
          <div className="flex flex-wrap justify-center w-full">
            <p className=" opacity-60 w-3/4">
              No worries, we'll send you the reset instructions straight away.
            </p>
          </div>
        </div>
        <div className="px-10 sm:px-4  overflow-y-auto">
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

                  <div className="flex flex-col space-y-4">
                    <CustomButton
                      label="Reset password"
                      type="submit"
                      isLoading={false}
                      variant="outlined"
                      styleClass="btn-yellow w-full !rounded-[5px] "
                    />
                    <Link to="/login">
                      <CustomButton
                        label="Back to login"
                        type="submit"
                        isLoading={false}
                        variant="outlined"
                        labelStyle="text-blue !font-bold"
                        styleClass="btn-gray w-full !rounded-[5px]"
                      />
                    </Link>
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

export default ForgotPassword;
