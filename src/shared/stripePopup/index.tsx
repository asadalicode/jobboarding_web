import React, { Fragment, useState } from 'react';
import { ReactComponent as Stripe } from '@assets/icons/stripe.svg';
import { ReactComponent as OpenNewtab } from '@assets/icons/openNewtab.svg';
import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../customButton';
import { getStripeCheckout } from '../service/stripeServices';
import { IsJobSeeker } from '../utils/authService';
import { applyWorkNowJob } from '../service/candidate/jobService';

const initialValues = {
  showPopup: false,
};
function StripePopup({ content, buttonLabel, planId }: any) {
  const navigate = useNavigate();
  const [setp, setStep] = useState(1);
  const [stripeUrl, setStripeUrl] = useState('');
  const handleSubmit = async (values: any) => {
    const plan_id = planId;
    let _response;
    // eslint-disable-next-line no-lone-blocks
    {
      IsJobSeeker()
        ? (_response = await applyWorkNowJob(planId))
        : (_response = await getStripeCheckout({ plan_id }));
    }
    setStripeUrl(_response.data.stripeUrl);
    setStep(2);
  };
  const handleStripeUrl = async () => {
    console.log('stripeUrl ==', stripeUrl);
    window.open(stripeUrl);
  };
  return (
    <div className="flex flex-col justify-center items-center my-4">
      {setp === 1 ? (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {() => (
            <Form className="flex flex-col justify-center items-center">
              {content ? (
                <p
                  className="flex justify-center items-center"
                  dangerouslySetInnerHTML={{
                    __html: content,
                  }}
                />
              ) : (
                <>
                  <p className="w-3/4 text-center leading-loose">
                    Please pay $1 to apply for this role. If two applications
                    are not received you will not be charged-and the job
                  </p>
                  <p className="w-5/6 text-center leading-loose">
                    will be cancelled. The business owner will choose the
                    successful employee - are you up for the challenge!?
                  </p>
                  <div className="flex gap-2 mt-4">
                    <Field
                      type="checkbox"
                      name="showPopup"
                      className="!h-auto w-4"
                    />
                    <p className="text-sm text-blue underline">
                      {' '}
                      Do Not Show This Message Again
                    </p>
                  </div>
                </>
              )}
              <CustomButton
                label={buttonLabel || 'Pay'}
                handleButtonClick={handleSubmit}
                isLoading={false}
                type="button"
                styleClass="btn-yellow !rounded  m-auto rounded-md w-1/4 mt-8"
              />
            </Form>
          )}
        </Formik>
      ) : (
        <>
          <Stripe />
          <p className="text-black font-bold mt-4">Please Pay With Stripe</p>
          <CustomButton
            label="Proceed"
            iconAfter
            icon={<OpenNewtab />}
            isLoading={false}
            type="button"
            labelStyle="mr-4"
            styleClass="btn-yellow !rounded  m-auto rounded-md w-1/4 sm:w-auto mt-8"
            handleButtonClick={handleStripeUrl}
          />
        </>
      )}
    </div>
  );
}

export default StripePopup;
