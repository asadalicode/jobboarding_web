import CustomDialog from '@src/shared/dialog';
import { ReactComponent as EmailIcon } from '@assets/icons/email.svg';
import { ReactComponent as BriefcaseIcon } from '@assets/icons/briefcase.svg';
import { ReactComponent as ChartIcon } from '@assets/icons/bar-chart.svg';
import { ReactComponent as DollarIcon } from '@assets/icons/dollar-symbol.svg';
import { ReactComponent as LocationIcon } from '@assets/icons/location-pin.svg';
import { CustomDialogProps } from '@shared/interfaces';

import CustomButton from '@shared/customButton';
import { IsJobSeeker } from '../utils/authService';

function JobDetails({
  size,
  isOpen,
  handleSubmit,
  handleClose,
  children,
  isShowCloseIcon = false,
}: CustomDialogProps) {
  const header = () => (
    <div className="flex  w-full text-center  justify-center flex-col gap-8 pt-12">
      <div>
        <h3 className="font-semibold text-black">HEAD CHEF</h3>
        <p className="font-semibold text-black uppercase pt-2">Company name</p>
      </div>
      <div className="flex gap-12 sm:gap-6  justify-center items-center sm:flex-wrap">
        <div className="flex space-x-3">
          <DollarIcon className="max-w-6 h-auto" />
          <p className="text-gray font-normal">$50,000</p>
        </div>
        <div className="flex space-x-3">
          <LocationIcon className="max-w-6 h-auto" />
          <p className="text-gray font-normal">I/9-3, Islamabad</p>
        </div>
        <div className="flex space-x-3">
          <ChartIcon className="!max-w-6 h-auto" />
          <p className="text-gray font-normal">Cooking</p>
        </div>
        <div className="flex space-x-3">
          <BriefcaseIcon className="max-w-6 h-auto" />
          <p className="text-gray font-normal">Part Time</p>
        </div>
        <div className="flex space-x-3">
          <EmailIcon className="max-w-6 h-auto" />
          <p className="text-gray font-normal">johndoe2@gmail.com</p>
        </div>
      </div>

      <hr className="solid  text-gray-light" />
    </div>
  );

  return (
    <CustomDialog
      isOpen={isOpen}
      isHeaderIcon
      isShowCloseIcon
      size="md"
      handleClose={() => handleClose(false)}
      Header={header}
    >
      <div className="flex w-full text-center justify-center flex-col   gap-8  ">
        <div className="space-y-6">
          <h5 className="text-black font-bold">Job Description</h5>
          <p className="text-gray font-normal tracking-wider">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
            justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
            takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          {IsJobSeeker() && (
            <CustomButton
              label="Apply"
              isLoading={false}
              handleButtonClick={handleSubmit}
              type="button"
              styleClass="btn-yellow !rounded  rounded-md w-auto !px-16"
            />
          )}
        </div>
      </div>
    </CustomDialog>
  );
}

export default JobDetails;
