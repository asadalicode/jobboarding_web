/* eslint-disable jsx-a11y/label-has-associated-control */
import CustomCard from '@src/shared/cards/customCard';
import { ReactComponent as Logoblue } from '@assets/logo_blue.svg';
import BackroundImage from '@src/shared/backgroundImage';
import HomeBg from '@assets/images/home_bg.png';
import CustomButton from '@src/shared/customButton';
import { ReactComponent as Fb } from '@assets/icons/facebook_blue.svg';
import { ReactComponent as Google_blue } from '@assets/icons/google_blue.svg';
import DatePicker from 'react-datepicker';
import { ReactComponent as SearchIcon } from '@assets/icons/search-icon.svg';
import { ReactComponent as QuestionIcon } from '@assets/icons/question.svg';
import {
  IconButton,
  Select,
  Option,
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from '@material-tailwind/react';

import * as Yup from 'yup';
import { ErrorMessage, FastField, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as Upload } from '@assets/icons/upload.svg';
import { useEffect, useState } from 'react';
import Input from '@src/shared/input';
import { permanentJobAPICall } from '@src/shared/service/job/jobService';
import { handleToastMessage } from '@src/shared/utils/handleToastMessage';
import { JobType } from '@src/shared/utils/enum/enum';
import { GetDateFromStorage } from '@src/shared/utils/authService';
import { getScreeningQuestion } from '@src/shared/service/business/roleService';

export interface initialSchemaValues {
  internel_job_reference: string;
  question: [];
}

const FormSchema = Yup.object().shape({
  internel_job_reference: Yup.string(),
  question: Yup.array()
    .min(1, 'Atleast one selection required')
    .max(3, 'Maximum three selections allowed'),
});

const initialValues: initialSchemaValues = {
  internel_job_reference: '',
  question: [],
};

function PermanentJobPostStep2({ handleStep }: any) {
  const navigate = useNavigate();
  let questionIds: string[] = [];
  const routeTo = (link: string) => {
    navigate(link);
  };
  const [questions, setQuestions] = useState<screenQuestionPayload.Payload[]>(
    []
  );

  useEffect(() => {
    const getRoles = async () => {
      const _permanentJob = await GetDateFromStorage(JobType.PERMANENT);
      const _question = await getScreeningQuestion(
        JSON.parse(_permanentJob)?.role_id
      );
      if (_question.success) {
        setQuestions([..._question.data]);
      }
    };
    getRoles();
  }, []);
  const handleSubmit = async (values: any) => {
    const _permanentJob = await GetDateFromStorage(JobType.PERMANENT);
    const _job = JSON.parse(_permanentJob);
    const obj = [{ ..._job, ...values }];
    console.log('@@@', obj);
    const _result = await permanentJobAPICall(obj[0]);
    if (_result.success) {
      handleToastMessage('success', _result.message ?? '');
      navigate('/businessWorkNowJobs?step=3');
    }
    handleStep(2);
  };
  const handleRoute = () => {
    handleStep(1);
  };
  const handleCheckboxValue = (
    setFieldValue: any,
    values: any,
    _id: string
  ) => {
    if (!questionIds.includes(_id)) {
      questionIds.push(_id);
      setFieldValue('question', questionIds);
    } else {
      const ids = questionIds.filter((id) => id !== _id);
      questionIds = ids;
      setFieldValue('question', questionIds);
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
        setFieldValue,
        values,
      }) => (
        <Form className="space-y-6  ">
          <div className="space-y-6 px-10 sm:px-4 max-h-[calc(100vh-60vh)] sm:max-h-full overflow-y-auto">
            <div className="flex flex-col items-start">
              <label className="block mb-2 text-sm font-semibold text-black">
                Screening Question
              </label>
              <p className="text-blue font-normal text-left">
                Include up to 5 Easy-To-Answer Questions in your job ad. When
                reviewing candidates, you will be able to easily filter
                candidates easily by choosing up to 3 great screening questions!
              </p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label className="block mb-2 text-sm font-semibold text-black">
                Bar & Beverage Staff (Casual And Full Time)
              </label>
              <hr className="text-gray solid w-full " />
              <Input
                name="search"
                placeholder="Find a question"
                className="focus:outline-transparent bg-gray-light border border-gray-light text-sm rounded-lg w-full"
                variant="normal"
                leftIcon={<SearchIcon className="h-5" />}
              />
              <ErrorMessage
                name="business_name"
                component="span"
                className="text-xs text-yellow !pt-0"
              />
            </div>
            <div className="flex flex-col gap-3 items-start">
              {questions.map((role, i) => (
                <div
                  key={role.id}
                  className="inline-flex items-center space-x-3"
                  role="group"
                  aria-labelledby="checkbox-group"
                >
                  <Field
                    type="checkbox"
                    name="question"
                    value={role.id}
                    onChange={() =>
                      handleCheckboxValue(setFieldValue, values, role.id)
                    }
                    className={`!h-5 !w-5
                      } `}
                  />
                  <p className=" text-gray text-left w-[95%]">
                    {role.question}
                  </p>
                </div>
              ))}

              <ErrorMessage
                name="question"
                component="span"
                className="text-xs text-yellow pt-1"
              />
            </div>

            <div className="flex flex-col items-start space-y-2">
              <label className="block mb-2 text-sm text-red">
                Create Up To 2 Custom Screening Questions
              </label>
              <CustomButton
                label="Add Another Question"
                type="submit"
                isLoading={false}
                variant="outlined"
                styleClass="btn-blue w-auto !h-8 !bg-blue underline !rounded-[5px] "
              />
            </div>

            <div className="flex flex-col items-start">
              <div className="flex justify-between items-center w-full mb-2">
                <label className="block  text-sm font-semibold text-black">
                  Internal Job Reference (Optional)
                </label>
                <Popover
                  placement="top"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <PopoverHandler>
                    {/* <Button variant="gradient">Show Popover</Button> */}
                    <IconButton className="shadow-none">
                      <QuestionIcon
                        type="button"
                        className="h-5 w-auto cursor-pointer"
                      />
                    </IconButton>
                    {/* <QuestionIcon
                      type="button"
                      className="h-5 w-auto cursor-pointer"
                    /> */}
                  </PopoverHandler>
                  <PopoverContent className="text-white bg-yellow w-1/5">
                    This reference will appear on your invoice and where you
                    manage incoming candidates. Don’t worry, this won’t be
                    displayed to candidates.
                  </PopoverContent>
                </Popover>
              </div>

              <FastField
                type="text"
                name="internel_job_reference"
                className={`focus:outline-transparent bg-gray-light border border-gray-light text-sm rounded-lg block w-full p-3
                      } `}
                placeholder="Enter..."
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.internel_job_reference}
              />
              <ErrorMessage
                name="internel_job_reference"
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
                label="LET THE SEARCH BEGIN!"
                type="submit"
                // handleButtonClick={() => routeTo('/businessWorkNowJobs')}
                isLoading={false}
                variant="outlined"
                styleClass="btn-yellow !ml-auto !rounded-[5px] "
              />
            </div>
            <p className="text-gray text-right">Step 2 of 2</p>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default PermanentJobPostStep2;
