/* eslint-disable jsx-a11y/label-has-associated-control */
import CustomCard from '@src/shared/cards/customCard';
import {
  ReactComponent as Logoblue,
  ReactComponent as Logo_blue,
} from '@assets/logo_blue.svg';
import { ErrorMessage, FastField, Field, Form, Formik } from 'formik';
import CustomButton from '@src/shared/customButton';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const duration = [
  'Casual / Part Time',
  'Short Term / Temporary',
  'Full time / Salary',
];
function ScreeningQuestions() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleSubmit = (values: any) => {
    console.log('@@@', values);
    navigate('/permanentJobs');
  };

  const formSchema = [
    {
      id: 1,
      question:
        'Which of the following statements best describes your right to work in Australia?',
      type: 'radio',
      answer: [
        { title: 'I have Permanent Work Rights with no Restrictions' },
        { title: 'I have Temporary Work Rights with no Restrictions' },
        { title: 'I have Temporary Work Rights with no Restrictions' },
        { title: 'I Require Sponsorship to Work for a New Employer' },
      ],
    },
    {
      id: 2,
      question: 'What is your role1?',
      type: 'text',
      answer: [],
    },
    {
      id: 2,
      question: 'What is your role2?',
      type: 'text',
      answer: [],
    },
    {
      id: 2,
      question: 'What is your role3?',
      type: 'text',
      answer: [],
    },
    {
      id: 2,
      question: 'What is your role4?',
      type: 'text',
      answer: [],
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center    min-h-[calc(100vh-5vh)] bg-gradient-to-r from-bluish-gradient via-yellow-gradient to-yellow-gradient">
      <CustomCard styleClass="w-1/3 sm:w-[90%] md:w-[60%] mx-auto py-8 mt-20 sm:mt-28 mb-8  flex space-y-6 sm:space-y-3">
        <Logoblue className="self-center px-4 sm:px-8 sm:hidden" />
        <hr className="solid opacity-85 sm:hidden" />
        <div className="space-y-2">
          <h4 className="self-center font-semibold text-black">
            Screening Questions
          </h4>
          <div className="flex flex-wrap justify-center w-9/12 mx-auto">
            <p className="text-gray">
              We have mentioned below some screening questions related to your
              Role.
            </p>
          </div>

          <Formik initialValues={{}} onSubmit={handleSubmit}>
            {({
              errors,
              handleChange,
              handleBlur,
              touched,
              values,
              setFieldValue,
            }) => (
              <Form className="space-y-6  ">
                <div className="space-y-6 px-10 sm:px-4 max-h-[calc(100vh-60vh)] overflow-y-auto">
                  {formSchema.map((formValues, index) => (
                    <div key={index} className="flex flex-col items-start">
                      <p className="text-black font-semibold">
                        Question: {1 + index}
                      </p>
                      <label className="block mb-2 font-normal text-gray  text-left">
                        {formValues.question}
                      </label>
                      <div className="space-y-2 flex flex-col pt-1 w-full">
                        {formValues.type === 'text' && (
                          <FastField
                            type="text"
                            name={formValues.question}
                            className="focus:outline-transparent bg-gray-light border border-gray-light text-sm rounded-lg block p-3 w-full"
                            placeholder="Enter..."
                            value={formValues.answer[0]}
                          />
                        )}
                        {formValues.type === 'radio' &&
                          formValues.answer.map((val, i) => (
                            <div
                              key={i}
                              className="inline-flex items-center space-x-3"
                              role="group"
                              aria-labelledby="checkbox-group"
                            >
                              <Field
                                type="radio"
                                name={formValues.question}
                                value={val.title}
                                className={`!h-5 !w-5
                    } `}
                              />

                              <p className=" text-gray text-left">
                                {val.title}
                              </p>
                            </div>
                          ))}
                      </div>

                      <ErrorMessage
                        name="duration"
                        component="span"
                        className="text-xs text-yellow pt-1"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col space-y-3 px-10 sm:px-4 ">
                  <CustomButton
                    label="SUBMIT"
                    type="submit"
                    isLoading={false}
                    variant="outlined"
                    styleClass="btn-yellow w-full !rounded-[5px] "
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </CustomCard>
    </div>
  );
}

export default ScreeningQuestions;
