import { Fragment, ReactNode, useState } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';
import { ReactComponent as CloseIcon } from '@src/assets/icons/close.svg';
import { ReactComponent as DeleteIcon } from '@src/assets/icons/delete.svg';
import CustomButton from '@shared/customButton';
import { CustomDialogProps } from '@shared/interfaces';

function VerifyDelete({
  title,
  size,
  isOpen,
  handleSubmit,
  handleClose,
  children,
  isShowCloseIcon = false,
}: CustomDialogProps) {
  return (
    <Dialog
      className="shadow-none py-6 px-2 max-w-full w-auto drop-shadow-3xl rounded-2xl "
      open={isOpen}
      size={size || 'md'}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
      dismiss={{ enabled: false }}
      handler={() => handleClose()}
    >
      <DialogHeader>
        <div className="flex justify-center items-center space-x-3 w-full">
          <div className="flex flex-col items-center gap-3">
            <DeleteIcon className="w-24 h-auto" />
            <p className="font-normal text-gray">{title}</p>
          </div>
          {isShowCloseIcon && (
            <CloseIcon
              onClick={() => handleClose()}
              className="h-auto cursor-pointer w-12 sm:w-8 sm:bottom-6 relative bottom-2"
            />
          )}
        </div>
      </DialogHeader>
      {children && <DialogBody>{children}</DialogBody>}

      <DialogFooter>
        <div className="flex gap-3 justify-center w-full">
          <CustomButton
            label="Yes"
            handleButtonClick={handleSubmit}
            isLoading={false}
            type="button"
            styleClass="btn-yellow !px-16  w-auto !rounded "
          />
          <CustomButton
            label="Cancel"
            handleButtonClick={handleClose}
            isLoading={false}
            type="button"
            styleClass="btn-gray !px-16  w-auto !rounded "
          />
        </div>
      </DialogFooter>
    </Dialog>
  );
}
export default VerifyDelete;
