/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import CustomCard from '@src/shared/cards/customCard';
import { ReactComponent as Logoblue } from '@assets/logo_blue.svg';
import BackroundImage from '@src/shared/backgroundImage';
import HomeBg from '@assets/images/home_bg.png';
import CustomButton from '@src/shared/customButton';
import { ReactComponent as Upload } from '@assets/icons/image_logo.svg';
import { ReactComponent as InfoBtn } from '@assets/icons/information-btn.svg';
import {
  Select,
  Option,
  Button,
  Switch,
  Avatar,
} from '@material-tailwind/react';

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
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  GetStorage,
  IsAuthenticated,
  SetStorage,
} from '@src/shared/utils/authService';
import { StorageI } from '@src/shared/interfaces';
import SwitchButton from '@src/shared/switchButton';
import { useDispatch } from 'react-redux';
import { setLayout } from '@src/shared/slices/LayoutSlice';
import { Divider } from '@mui/material';
import AutoLocation from '@src/shared/autoLocation';

export interface initialSchemaValues {
  dream_places1: '';
  dream_places2: '';
  dream_places3: '';
  dream_places4: '';
  dream_places5: '';
  dream_places6: '';
  visible: boolean;
  terms: boolean;
}

const FormSchema = Yup.object().shape({
  dream_places: Yup.array().min(1, 'select at least 1 place'),
  visible: Yup.boolean(),
  terms: Yup.boolean()
    .oneOf([true], 'Please accept terms and conditions')
    .required(''),
});

const initialValues: initialSchemaValues = {
  dream_places1: '',
  dream_places2: '',
  dream_places3: '',
  dream_places4: '',
  dream_places5: '',
  dream_places6: '',
  visible: false,
  terms: false,
};
const dream_places = [
  "Mac Donald's",
  'Mayfair London',
  "Mac Donald'ss",
  'Mayfair Londons',
  "Mac Donald'sssa",
  'Mayfair Londonssa',
];
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
function JobSeekerRegisterStep3({ handleStep }: any) {
  const dispatch = useDispatch();
  dispatch(
    setLayout({
      isShowFooter: false,
      isShowHeader: false,
    })
  );
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const _step = searchParams.get('step');
  const _dreamPlaces: any = [];
  const handleRoute = () => {
    handleStep(2);
  };
  const handleSubmit = (values: any) => {
    const data = {
      profile_visibility: values.visible,
      preferences: [
        { organization: values.dream_places1, location: values.dream_places2 },
        { organization: values.dream_places3, location: values.dream_places4 },
        {
          organization: values.dream_places5,
          location: values.dream_places6FF,
        },
      ],
    };

    // const data: StorageI = { data: values, userType: 'jobSeeker' };
    // SetStorage(data);
    // navigate('/otp');
    // navigate(`/`);
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
      }) => (
        <Form className="space-y-6  ">
          <ScrollToFieldError />
          <div className="space-y-6 px-10 sm:px-4  sm:max-h-full overflow-y-auto">
            <div className="flex items-start  bg-gray-light p-3">
              <p className="text-blue gap-2 sm:!ml-auto font-semibold flex text-left">
                {' '}
                <InfoBtn className="!w-20" /> Please list the 3 business's that
                if you could get a job at you would consider your "dream job".
                If they contact us we can send them your resume - how good is
                that! This information is hidden and will remain confidential
                unless one of your chosen "dream employers" contact us-looking
                for staff"
              </p>
            </div>
            <div className="flex flex-col items-start">
              <label className="block mb-2 text-sm font-semibold text-black">
                Dream places to work?
              </label>
              {/* <div className="grid grid-cols-2 gap-3 w-full">
                {dream_places.map((val, i) => (
                  <Button
                    name="dream_places"
                    value={val}
                    onClick={
                      (handleChange = (v: any) => {
                        _dreamPlaces.push(v.target.value);
                        _dreamPlaces = [...new Set(_dreamPlaces)];
                        setFieldValue("dream_places", _dreamPlaces);
                      })
                    }
                    className={`bg-gray-light normal-case  font-normal text-left text-gray !rounded-sm ${
                      _dreamPlaces[i] == val ? "bg-blue text-white" : ""
                    }`}
                  >
                    {val}
                  </Button>
                ))}
                <ErrorMessage
                  name="dream_places"
                  component={"span"}
                  className="text-xs text-yellow pt-1"
                />
              </div> */}

              <Field
                type="text"
                name="dream_places1"
                className="focus:outline-transparent bg-gray-light border border-gray-light text-sm rounded-lg block w-full p-3 my-3 "
                placeholder="Mc donald's"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.dream_places1}
              />

              <AutoLocation
                suburbSelect={(value: any) => {
                  setFieldValue('dream_places2', value);
                }}
              />
              <Divider flexItem className="!h-[1px] !my-2" />
              <Field
                type="text"
                name="dream_places3"
                className="focus:outline-transparent bg-gray-light border border-gray-light text-sm rounded-lg block w-full p-3 my-3 "
                placeholder="Mc donald's"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.dream_places3}
              />

              <AutoLocation
                suburbSelect={(value: any) => {
                  setFieldValue('dream_places4', value);
                }}
              />
              <Divider flexItem className="!h-[1px] !my-2" />
              <Field
                type="text"
                name="dream_places5"
                className="focus:outline-transparent bg-gray-light border border-gray-light text-sm rounded-lg block w-full p-3 my-3 "
                placeholder="Mc donald's"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.dream_places5}
              />

              <AutoLocation
                suburbSelect={(value: any) => {
                  setFieldValue('dream_places6', value);
                }}
              />
            </div>
            <div className="flex items-center space-x-3">
              <label className="block text-sm font-semibold text-black">
                Make Your Profile Visible
              </label>
              <SwitchButton
                flag={values.visible}
                onSwitchButton={(flag) => setFieldValue('visible', flag)}
              />
            </div>
            <div className="flex flex-col items-start  !mt-3">
              <div className="flex items-center space-x-2">
                <Field type="checkbox" name="terms" className="h-4 w-4" />
                <p
                  className="text-sm text-blue underline cursor-pointer"
                  onClick={() => {
                    navigate('/jobseeker/termsAndConditions');
                  }}
                >
                  {' '}
                  I agree to the <b>Terms</b> and <b>Conditions</b>
                </p>
              </div>
              <ErrorMessage
                name="terms"
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
                label={`${_step ? 'Save and Update' : "Let's go"}`}
                type="submit"
                isLoading={false}
                variant="outlined"
                styleClass="btn-yellow !px-8 !ml-auto !rounded-[5px] "
              />
            </div>
            <p className="text-gray text-sm text-right">Step 3 of 3</p>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default JobSeekerRegisterStep3;
