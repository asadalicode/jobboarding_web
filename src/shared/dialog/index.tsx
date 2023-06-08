import { Fragment, ReactNode, useState } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';
import { ReactComponent as CloseIcon } from '@src/assets/icons/close.svg';
import RestaurantLogo from '@assets/icons/logo.png';
import environment from '@src/environment';

interface DialogProps {
  size?: any;
  isOpen?: any;
  handleClose?: any;
  Header?: any;
  profileIcon?: any;
  children?: ReactNode;
  Footer?: any;
  isShowCloseIcon?: boolean;
  isHeaderIcon?: boolean;
}
function CustomDialog({
  size,
  isOpen,
  handleClose,
  Header,
  profileIcon,
  children,
  Footer,
  isShowCloseIcon = true,
  isHeaderIcon = false,
}: DialogProps) {
  return (
    <Dialog
      className="shadow-none py-6 px-2 max-w-[96%] sm:max-w-full w-auto drop-shadow-3xl rounded-2xl max-h-[95%]"
      open={
        isOpen
        // size === "xs" ||
        // size === "sm" ||
        // size === "md" ||
        // size === "lg" ||
        // size === "xl" ||
        // size === "xxl"
      }
      size={size || 'md'}
      animate={{
        // mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
      dismiss={{ enabled: false }}
      handler={() => handleClose()}
    >
      <DialogHeader>
        <input type="text" className="absolute opacity-0" />

        {isShowCloseIcon && (
          <CloseIcon
            onClick={() => handleClose()}
            className="h-auto cursor-pointer w-12 sm:w-8 sm:bottom-6 absolute right-5 top-5"
          />
        )}
        {isHeaderIcon &&
          (profileIcon ? (
            <img
              className="absolute left-0 right-0  m-auto top-[-70px] w-32 sm:w-20 sm:top-[-40px] "
              src={environment.serverUrl + profileIcon}
              alt=""
            />
          ) : (
            <img
              className="absolute left-0 right-0  m-auto top-[-70px] w-32 sm:w-20 sm:top-[-40px] "
              src={RestaurantLogo}
              alt=""
            />
          ))}

        <div className="flex justify-end items-center space-x-3 w-full">
          <Header />
        </div>
      </DialogHeader>
      <DialogBody className="max-h-[50vh] sm:max-h-[280px] overflow-auto">
        {children}
      </DialogBody>
      {Footer && (
        <DialogFooter>
          <div className="flex justify-center w-full">
            <Footer />
          </div>
        </DialogFooter>
      )}
    </Dialog>
  );
}
export default CustomDialog;
