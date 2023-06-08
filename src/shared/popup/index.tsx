/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Dialog, DialogTitle, Divider } from '@mui/material';
import { ReactComponent as CloseIcon } from '@src/assets/icons/close.svg';
import Style from './popup.module.scss';

interface IPopupProps {
  isOpen?: boolean;
  title?: string;
  width?: number;
  isLoading?: boolean;
  borderRadius?: number;
  isFullScreen?: boolean;
  isShowHeader?: boolean;
  childClassName?: string;
  containerClassName?: string;
  children?: any;
  setIsOpenPopup?: any;
  handleClose?: (id: any) => void;
}

function Popup({
  isOpen = true,
  setIsOpenPopup,
  handleClose = () => {},
  title = '',
  width = 1200,
  isLoading = false,
  borderRadius = 10,
  isFullScreen = false,
  isShowHeader = true,
  childClassName,
  containerClassName,
  children,
}: IPopupProps) {
  const closePopup = () => {
    setIsOpenPopup(false);
  };
  return (
    <div>
      <Dialog
        open={isOpen}
        // onClose={handleClose}
        fullScreen={isFullScreen}
        aria-describedby="alert-dialog-slide-description"
        className={Style.dialog}
        maxWidth="xl"
        PaperProps={{
          style: {
            backgroundColor: 'rgb(255 255 255)',
            backdropFilter: 'blur(1px)',
            width,
            minHeight: 250,
            borderRadius,
          },
        }}
      >
        <div className={`${Style.container} ${containerClassName}`}>
          {isShowHeader && (
            <DialogTitle>
              <div className="flex justify-between items-center -mt-2">
                <h4>{title}</h4>
                <div className="cursor-pointer" onClick={closePopup}>
                  <CloseIcon
                    height={45}
                    className="h-auto cursor-pointer w-12 sm:w-8 sm:bottom-6 absolute right-5 top-5"
                  />
                </div>
              </div>
            </DialogTitle>
          )}
          <div className={`${Style.content} ${childClassName}`}>{children}</div>
        </div>
      </Dialog>
    </div>
  );
}

export default Popup;
