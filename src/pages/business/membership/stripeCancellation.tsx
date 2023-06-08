import ContentContainer from '@src/containers/contentContainer';
import CustomButton from '@src/shared/customButton';
import { setLayout } from '@src/shared/slices/LayoutSlice';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AiFillCloseCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function StripeCancellation() {
  const dispatch = useDispatch();
  dispatch(
    setLayout({
      isShowFooter: false,
      isShowHeader: true,
      isShowCreditLabel: false,
    })
  );
  const navigate = useNavigate();
  const navigateTo = (link: string) => {
    navigate(link);
  };
  return (
    <ContentContainer>
      <div
        className="h-72 w-2/4 sm:h-60 sm:w-5/6 rounded-md bg-blue-gray-100 flex justify-center items-center flex-col
      "
      >
        <div className="mb-8 flex gap-4">
          <h3 className="flex items-center">Payment failed!</h3>
          <AiFillCloseCircle className="text-red" size={50} />
        </div>
        <CustomButton
          handleButtonClick={() => navigateTo('/')}
          type="button"
          label="Go back"
          isLoading={false}
          styleClass="btn-yellow !w-max mx-auto capitalize !rounded-md !px-16"
        />
      </div>
    </ContentContainer>
  );
}

export default StripeCancellation;
