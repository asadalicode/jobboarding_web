/* eslint-disable jsx-a11y/label-has-associated-control */
import { setLayout } from '@src/shared/slices/LayoutSlice';
import FAQBanner from '@assets/images/FAQBanner.jpg';
import FAQMobile from '@assets/images/FAQMobile.png';
import { ReactComponent as MailIcon } from '@assets/icons/mailIcon.svg';
import { useDispatch } from 'react-redux';
import { useState, SetStateAction, useEffect } from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Textarea,
} from '@material-tailwind/react';
import { Divider } from '@mui/material';
import CustomCard from '@src/shared/cards/customCard';
import { ErrorMessage, FastField, Form, Formik } from 'formik';
import CustomButton from '@src/shared/customButton';
import * as Yup from 'yup';

const QAdate = [
  {
    question: 'How do the workers get paid for Work-Now gigs?',
    answar:
      'Once a business gets two applicants in Work Now, the 2 Job Seekers and Business owner/manager can then contact each other to discuss things such as unform requirements, remuneration and details about the role/venue. The business that engages the worker is responsible for paying the worker.',
  },
  {
    question:
      'What if I subscribe, then post a job and I don’t get any applications?',
    answar:
      'Welcome to 2023! Seriously though, we are a brand-new site- which must start somewhere – but we are determined to grow the brand and make this Australia’s Home of Hospitality. And we believe because we have strongly kept in mind the budget concerns business owners have – we will achieve this. Sometimes though, your ad may need adjusting – does the job sound appealing to you? Or are you just putting down what you need? A years’ member ship on our site roughly requires your business to sell one more coffee a week! Some websites charge more for one 30-day ad – than we charge for a year’s membership. (That includes about 30 ads!) In our experience – just filling one Work Now gig- having that extra employee for the one shift to get you by – is worth the monthly fee. What damage does a business suffer from being understaffed? The list is long and unpleasant!',
  },
  {
    question:
      'What if a business wants to employ someone they found on the platform?',
    answar:
      'That is why we are here! If you find a worker on Work Now – and after one shift, you want to offer them ongoing work – you can do that completely free of charge.',
  },
  {
    question: 'Why are employees charged $1 to apply for Work Now shifts?',
    answar:
      'There are many reasons for this, but our feedback from business owners and 70+ years’ experience in running businesses is that many employees apply for work and then “go missing”. We hope this small fee will stop this. We also think a $1 fee for a 50% chance to gain a day’s work is not unreasonable- this site costs money to run you know! And if you apply for 5 Work Now jobs and only get one(unlikely) – but earn $100+ then that’s not a bad result, is it? And if you do a great job and get great reviews – your “success rate” will improve greatly!',
  },
  {
    question:
      'Do Hospitality Jobs Australia recommend or do any reference checks for any workers?',
    answar:
      'At this stage we do not provide this service. Workers are taken on at the employer’s risk. The employers are welcome to do reference checks themselves. Our star rating system for Work Now gigs, provides a small guide as to how other employers on the platform have found that employee. So, business owners – help each other and help the worker and leave a review.',
  },
  {
    question: 'How do I change or pause my membership?',
    answar:
      'At any stage during your membership, you can easily change what level membership you are on or pause it-there is no long-term contract. You can do this in your profile section.',
  },
  {
    question: 'How long does it take to set my profile up?',
    answar:
      'Employees we think if you are on a PC/Laptop you should be all set up in about 5 minutes. And business owners even less than that. One you are in the system – you are good to go.',
  },
  {
    question: 'How can I contact Hospitality Jobs Australia?',
    answar:
      'One of our key priorities is to “listen to the customer” – and get your feedback. We really mean that – we encourage you to tell us what you like and what you think could be improved – and I promise you – we will listen! There is a pop up messaging service on the websites home page you can use or you can also email us at info@hospitalityjobs.com.au',
  },
  {
    question: 'What happens if no one applies to a Work Now job posting?',
    answar:
      'If one or less people apply-then no one is charged anything-and the position is “unfilled”. Only when there are two applicants -does the transaction go through.',
  },
  {
    question: 'How does the worker rating system work?',
    answar:
      'The day after a work now shift has been completed the business owner will be sent an automated email/message asking them to leave a star rating review for the chosen employee. They will only be able to leave a review for the worker they engaged. We strongly encourage businesses to leave reviews which will help them all to identify the best workers in future!',
  },
  {
    question: 'Why can’t workers leave reviews for Businesses?',
    answar:
      'We would prefer workers to contact us, if they have genuine issues with a business. If we get repeated complaints about a business (not paying, slow payers, abusive, WHS etc) they will be removed from the platform.',
  },
  {
    question: 'Why do you allow two applicants for Work Now instead of one?',
    answar:
      'We want the business to have a choice, and there is a small chance that once both parties communicate that one of the workers may not be suitable e.g., Unform requirements, inexperience etc.',
  },
  {
    question:
      'What is the difference between a Work-Now job and a Permanent Job?',
    answar:
      'A Work Now job, is a one-off shift that needs filling in the next 72 hours. A Permanent Job is just that- an on ongoing casual/part time/Full Time role-this is shown for 28 days.',
  },
];
const FormSchema = Yup.object().shape({
  firstName: Yup.string().label('First Name'),
  lastName: Yup.string().label('Last Name'),
  email: Yup.string().label('Email'),
  phone: Yup.string().label('Phone'),
  message: Yup.string().label('Message'),
});
export interface initialSchemaValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}
const initialValues: initialSchemaValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
};

function FaqAndContactUs() {
  const [isMobileTab, setIsMobileTab] = useState(false);
  const dispatch = useDispatch();
  dispatch(
    setLayout({
      isShowFooter: true,
      isShowHeader: true,
    })
  );
  const [open, setOpen] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener('resize', handleResize);
    return window.removeEventListener('resize', handleResize());
  }, []);

  const handleResize: any = () => {
    setIsMobileTab(window.innerWidth <= 430);
  };

  const handleOpen = (value: SetStateAction<number>) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  const handleSubmit = (values: any) => {
    console.log("faq's ==", values);
  };
  return (
    <div className="flex flex-col items-center space-y-24  min-h-[calc(100vh-5vh)]">
      <div className="relative">
        <img
          src={isMobileTab ? FAQMobile : FAQBanner}
          alt="banner"
          className=" object-cover"
        />
        <h1 className="text-white font-semibold absolute top-[50%] w-1/2 mx-auto  left-0 right-0">
          FAQs and Contact Us
        </h1>
      </div>
      <section className="w-full">
        <div className="flex flex-col sm:px-4 md:px-4 px-16 items-start gap-4">
          {QAdate.map((date, index) => {
            const _id = index + 1;
            return (
              <Accordion
                key={_id}
                open={open === _id}
                icon={<Icon id={_id} open={open} />}
                animate={customAnimation}
              >
                <AccordionHeader
                  onClick={() => handleOpen(_id)}
                  className={`${
                    open === _id ? 'bg-yellow' : 'bg-gray-light'
                  } h-16 pr-8`}
                >
                  <div className="flex justify-start items-center">
                    <h2
                      className={`w-12 mx-4 font-bold sm:text-2xl md:text-3xl text-4xl ${
                        open === _id ? 'text-white' : 'text-black'
                      } `}
                    >
                      Q.
                    </h2>
                    <Divider
                      orientation="vertical"
                      flexItem
                      color="white"
                      className="!h-8 !mt-2"
                    />
                    <p
                      className={`w-full text-left mx-4 font-normal ${
                        open === _id ? 'text-white' : 'text-gray'
                      } `}
                    >
                      {date.question}
                    </p>
                  </div>
                </AccordionHeader>
                <AccordionBody className="bg-gray-light mt-2">
                  <div className="flex justify-start items-start">
                    <h2 className=" w-12 mx-4 font-bold text-4xl">A.</h2>
                    <Divider orientation="vertical" flexItem />
                    <p className="w-full text-left mx-4 text-gray">
                      {date.answar}
                    </p>
                  </div>
                </AccordionBody>
              </Accordion>
            );
          })}
        </div>
        <div className="bg-gray-light sm:h-[62rem] md:h-[55rem] h-[32rem] mt-16">
          <div className="sm:block md:block flex p-16">
            <div className="flex flex-1 flex-col items-start">
              <h2 className="m-4 font-bold">Contact Us</h2>
              <p className="w-11/12 text-left mx-4 text-gray leading-loose">
                We are obsessed with making this the best Hospitality Employment
                website there is. How can we do this? With your feedback! We
                promise to respond promptly and make an outstanding customer
                experience our priority. So please send us your feedback - good,
                bad or even a suggestion -
              </p>
              <p className="w-full text-left mx-4 text-gray leading-loose">
                we welcome it all! Email us - or fill in the feedback box.
              </p>
              <div className="flex items-center mt-8">
                <MailIcon height={40} />
                <p className="text-gray ml-2">info@hospitalityjobs.com.au</p>
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-center items-end sm:items-center md:items-center sm:mt-8 md:mt-8">
              <CustomCard styleClass="h-[34rem] sm:w-[20rem] w-[30rem] rounded-md">
                <div className="py-8 px-6">
                  <h5 className="font-bold text-left  text-gray mb-4 ">
                    We want your feedback so we can make this even better
                  </h5>
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
                    }) => (
                      <Form className="space-y-6">
                        <div className="space-y-6 ">
                          <div className="flex items-start">
                            <div className="flex-1 mx-2">
                              <label className="flex text-sm font-semibold text-gray mb-2">
                                First name
                              </label>
                              <FastField
                                type="text"
                                name="firstName"
                                className="focus:outline-blue-gray-50 border border-gray-light text-sm rounded-sm block w-full p-3 "
                                placeholder="Enter first name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.firstName}
                              />
                              <ErrorMessage
                                name="firstName"
                                component="span"
                                className="text-xs text-yellow pt-1"
                              />
                            </div>
                            <div className="flex-1 mx-2">
                              <label className="flex text-sm font-semibold text-gray mb-2">
                                Last name
                              </label>
                              <FastField
                                type="lastName"
                                name="lastName"
                                className="focus:outline-blue-gray-50 border border-gray-light text-sm rounded-sm block w-full p-3"
                                placeholder="Enter last name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.lastName}
                              />
                              <ErrorMessage
                                name="lastName"
                                component="span"
                                className="text-xs text-yellow pt-1"
                              />
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="flex-1 mx-2">
                              <label className="flex text-sm font-semibold text-gray mb-2">
                                Email ID
                              </label>
                              <FastField
                                type="text"
                                name="email"
                                className="focus:outline-blue-gray-50 border border-gray-light text-sm rounded-sm block w-full p-3 "
                                placeholder="Enter email ID"
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
                            <div className="flex-1 mx-2">
                              <label className="flex text-sm font-semibold text-gray mb-2">
                                Phone no
                              </label>
                              <FastField
                                type="phone"
                                name="phone"
                                className="focus:outline-blue-gray-50 border border-gray-light text-sm rounded-sm block w-full p-3"
                                placeholder="Enter phone no"
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
                          </div>
                          <div className="flex items-start">
                            <div className="flex-1 mx-2">
                              <label className="flex text-sm font-semibold text-gray mb-2">
                                Message
                              </label>
                              <textarea
                                rows={4}
                                name="message"
                                className="focus:outline-blue-gray-50 border border-gray-light text-sm rounded-sm block w-full p-3 "
                                placeholder="Type here..."
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.message}
                              />
                              <ErrorMessage
                                name="message"
                                component="span"
                                className="text-xs text-yellow pt-1"
                              />
                            </div>
                          </div>

                          <div>
                            <CustomButton
                              label="Send"
                              type="submit"
                              isLoading={false}
                              handleButtonClick={handleSubmit}
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
          </div>
        </div>
      </section>
    </div>
  );
}

export default FaqAndContactUs;
function Icon({ id, open }: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? 'rotate-180' : '!text-gray'
      } h-5 w-5 transition-transform text-white !mr-8`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
