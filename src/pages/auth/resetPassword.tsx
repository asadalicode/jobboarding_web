/* eslint-disable jsx-a11y/label-has-associated-control */
import CustomCard from '@src/shared/cards/customCard';
import {
  ReactComponent as Logoblue,
  ReactComponent as Logo_blue,
} from '@assets/logo_blue.svg';
import BackroundImage from '@src/shared/backgroundImage';
import { ReactComponent as EyeIcon } from '@src/assets/icons/Eye_icon.svg';
import { ReactComponent as HiddenIcon } from '@src/assets/icons/Hidden_icon.svg';
import HomeBg from '@assets/images/home_bg.png';
import CustomButton from '@src/shared/customButton';
import { ReactComponent as Upload } from '@assets/icons/upload.svg';

import * as Yup from 'yup';
import { ErrorMessage, FastField, Field, Form, Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar } from '@material-tailwind/react';
import { useState } from 'react';
import Input from '@src/shared/input';

export interface initialSchemaValues {
  password: string;
  confirm_password: string;
}

const FormSchema = Yup.object().shape({
  password: Yup.string().label('password').required(),
  confirm_password: Yup.string().label('Confirm password').required(),
});

const initialValues: initialSchemaValues = {
  password: '',
  confirm_password: '',
};

function ResetPassword() {
  const navigate = useNavigate();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsConfirmShowPassword] = useState(false);

  const handleSubmit = (values: any) => {
    console.log('@@@', values);
    navigate('/resetSuccess');
  };
  return (
    <div className="flex flex-col items-center justify-center  min-h-[calc(100vh-5vh)] bg-gradient-to-r from-bluish-gradient via-yellow-gradient to-yellow-gradient">
      <CustomCard styleClass="sm:rounded-none w-1/3 sm:w-full md:w-[60%] mx-auto py-8 mt-20 sm:mt-[100px] mb-8   flex space-y-6 sm:space-y-3">
        <Logoblue className="self-center px-4 sm:px-8 sm:hidden" />
        <hr className="solid opacity-85 sm:hidden" />
        <div className="space-y-2">
          <h4 className="self-center font-semibold text-black">
            Set New Password
          </h4>
          <div className="flex flex-wrap justify-center w-full">
            <p className=" opacity-60 w-3/4">
              Your new password must be different to previously used password
            </p>
          </div>
        </div>
        <div className="px-10 sm:px-4 overflow-y-auto">
          <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={FormSchema}
            onSubmit={handleSubmit}
          >
            {({ handleChange, handleBlur, touched, values }) => (
              <Form className="space-y-6 ">
                <div className="space-y-6 ">
                  <div>
                    <label className="block mb-2 text-left text-sm font-semibold text-black">
                      Password
                    </label>

                    <Input
                      type={isShowPassword ? 'text' : 'password'}
                      name="password"
                      placeholder="**********"
                      handldChange={handleChange}
                      rightIcon={
                        isShowPassword ? (
                          <HiddenIcon
                            className="h-5"
                            onClick={() => setIsShowPassword(!isShowPassword)}
                          />
                        ) : (
                          <EyeIcon
                            className="h-5"
                            onClick={() => setIsShowPassword(!isShowPassword)}
                          />
                        )
                      }
                    />

                    <ErrorMessage
                      name="password"
                      component="span"
                      className="text-xs text-yellow pt-1"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-left text-sm font-semibold text-black">
                      Confirm Password
                    </label>

                    <Input
                      type={isShowConfirmPassword ? 'text' : 'password'}
                      name="confirm_password"
                      placeholder="*********"
                      handldChange={handleChange}
                      rightIcon={
                        isShowConfirmPassword ? (
                          <HiddenIcon
                            className="h-5"
                            onClick={() => {
                              setIsConfirmShowPassword(!isShowConfirmPassword);
                            }}
                          />
                        ) : (
                          <EyeIcon
                            className="h-5"
                            onClick={() => {
                              setIsConfirmShowPassword(!isShowConfirmPassword);
                            }}
                          />
                        )
                      }
                    />
                    <ErrorMessage
                      name="confirm_password"
                      component="span"
                      className="text-xs text-yellow pt-1"
                    />
                  </div>

                  <div className="flex flex-col space-y-4">
                    <CustomButton
                      label="Change password"
                      type="submit"
                      isLoading={false}
                      variant="outlined"
                      styleClass="btn-yellow w-full !rounded-[5px] "
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

export default ResetPassword;
